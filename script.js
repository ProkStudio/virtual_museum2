// Конфигурация
const CONFIG = {
    repoOwner: 'ProkStudio', // Замените на ваше имя пользователя
    repoName: 'virtual_museum2', // Замените на название репозитория
    objectsPath: 'objects'
};

// Основной объект музея
const museum = {
    objects: [],
    currentObject: null,
    currentImageIndex: 0,
    isRotating: true,
    rotationX: 0,
    rotationY: 0,
    isDragging: false,
    lastX: 0,
    lastY: 0,
    scale: 1,
    autoRotateInterval: null
};

// DOM элементы
const elements = {
    exhibitsContainer: document.getElementById('exhibits-container'),
    searchInput: document.getElementById('search'),
    sortSelect: document.getElementById('sort-by'),
    totalImages: document.getElementById('total-images'),
    totalObjects: document.getElementById('total-objects'),
    totalPhotos: document.getElementById('total-photos'),
    avgPhotos: document.getElementById('avg-photos'),
    modal: document.getElementById('exhibit-modal'),
    modalTitle: document.getElementById('modal-title'),
    modalFolder: document.getElementById('modal-folder'),
    modalImagesCount: document.getElementById('modal-images-count'),
    modalDescription: document.getElementById('modal-description'),
    image3d: document.getElementById('image-3d'),
    currentImg: document.getElementById('current-img'),
    totalImgs: document.getElementById('total-imgs'),
    prevImgBtn: document.getElementById('prev-img'),
    nextImgBtn: document.getElementById('next-img'),
    rotateToggle: document.getElementById('rotate-toggle'),
    closeModal: document.querySelector('.close-modal')
};

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initEventListeners();
    loadObjectsFromGitHub();
});

// Инициализация навигации
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            
            // Обновляем активные элементы навигации
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Показываем выбранную страницу
            pages.forEach(page => {
                page.classList.remove('active');
                if (page.id === targetId) {
                    page.classList.add('active');
                }
            });
            
            // Прокручиваем к верху страницы
            window.scrollTo(0, 0);
        });
    });
}

// Загрузка объектов из GitHub
async function loadObjectsFromGitHub() {
    try {
        showLoading(true);
        
        // Получаем список папок с объектами
        const folders = await fetchGitHubContents(CONFIG.objectsPath);
        
        if (!folders || folders.length === 0) {
            showNoObjects();
            return;
        }
        
        // Загружаем информацию о каждом объекте
        const objects = [];
        for (const folder of folders) {
            if (folder.type === 'dir') {
                try {
                    const object = await loadObjectInfo(folder.name);
                    if (object) {
                        objects.push(object);
                    }
                } catch (error) {
                    console.error(`Ошибка загрузки объекта ${folder.name}:`, error);
                }
            }
        }
        
        museum.objects = objects;
        displayObjects(objects);
        updateStatistics(objects);
        initChart(objects);
        
    } catch (error) {
        console.error('Ошибка загрузки объектов:', error);
        showError('Ошибка загрузки экспонатов. Проверьте настройки репозитория.');
    } finally {
        showLoading(false);
    }
}

// Получение содержимого папки через GitHub API
async function fetchGitHubContents(path) {
    const apiUrl = `https://api.github.com/repos/${CONFIG.repoOwner}/${CONFIG.repoName}/contents/${path}`;
    
    const response = await fetch(apiUrl, {
        headers: {
            'Accept': 'application/vnd.github.v3+json'
        }
    });
    
    if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
    }
    
    return await response.json();
}

// Загрузка информации об объекте
async function loadObjectInfo(folderName) {
    // Получаем содержимое папки объекта
    const contents = await fetchGitHubContents(`${CONFIG.objectsPath}/${folderName}`);
    
    // Ищем файл info.txt и изображения
    let infoFile = null;
    const images = [];
    
    for (const file of contents) {
        if (file.name.toLowerCase() === 'info.txt') {
            infoFile = file;
        } else if (file.name.match(/\.(jpg|jpeg|png|gif|webp)$/i)) {
            images.push({
                name: file.name,
                url: file.download_url,
                size: file.size
            });
        }
    }
    
    // Сортируем изображения по имени
    images.sort((a, b) => {
        const numA = extractNumber(a.name);
        const numB = extractNumber(b.name);
        return numA - numB;
    });
    
    // Загружаем информацию из info.txt
    let name = folderName;
    let description = 'Описание отсутствует';
    
    if (infoFile) {
        try {
            const infoResponse = await fetch(infoFile.download_url);
            const infoText = await infoResponse.text();
            const lines = infoText.split('\n').filter(line => line.trim() !== '');
            
            if (lines.length > 0) {
                name = lines[0].trim();
                description = lines.slice(1).join('\n').trim();
            }
        } catch (error) {
            console.error(`Ошибка чтения info.txt для ${folderName}:`, error);
        }
    }
    
    return {
        id: folderName,
        name: name,
        description: description,
        images: images,
        folder: folderName,
        imageCount: images.length,
        previewImage: images.length > 0 ? images[0].url : null
    };
}

// Извлечение числа из имени файла
function extractNumber(filename) {
    const match = filename.match(/(\d+)/);
    return match ? parseInt(match[1]) : 0;
}

// Отображение объектов на странице
function displayObjects(objects) {
    elements.exhibitsContainer.innerHTML = '';
    
    if (objects.length === 0) {
        elements.exhibitsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>Экспонаты не найдены</h3>
                <p>В папке objects пока нет экспонатов</p>
            </div>
        `;
        return;
    }
    
    objects.forEach(obj => {
        const exhibitCard = document.createElement('div');
        exhibitCard.className = 'exhibit-card';
        exhibitCard.dataset.id = obj.id;
        
        // Используем превью изображение или заглушку
        const imageUrl = obj.previewImage || `https://via.placeholder.com/400x300/333/8b0000?text=${encodeURIComponent(obj.name)}`;
        const shortDescription = obj.description.length > 120 ? 
            obj.description.substring(0, 120) + '...' : obj.description;
        
        exhibitCard.innerHTML = `
            <div class="exhibit-img-container">
                <img src="${imageUrl}" alt="${obj.name}" class="exhibit-img" loading="lazy">
                ${obj.imageCount > 1 ? `<div class="image-badge">${obj.imageCount} фото</div>` : ''}
            </div>
            <div class="exhibit-info-card">
                <h3>${obj.name}</h3>
                <p>${shortDescription}</p>
                <div class="exhibit-meta-card">
                    <span><i class="fas fa-folder"></i> ${obj.folder}</span>
                    <span><i class="fas fa-calendar"></i> ${new Date().toLocaleDateString()}</span>
                </div>
            </div>
        `;
        
        exhibitCard.addEventListener('click', () => openExhibitModal(obj));
        elements.exhibitsContainer.appendChild(exhibitCard);
    });
}

// Показать/скрыть индикатор загрузки
function showLoading(show) {
    if (show) {
        elements.exhibitsContainer.innerHTML = `
            <div class="loading">
                <div class="spinner"></div>
                <p>Загрузка экспонатов...</p>
            </div>
        `;
    }
}

// Показать сообщение об отсутствии объектов
function showNoObjects() {
    elements.exhibitsContainer.innerHTML = `
        <div class="no-objects">
            <i class="fas fa-archive"></i>
            <h3>Папка objects пуста</h3>
            <p>Добавьте папки с экспонатами в директорию objects/</p>
            <div class="instructions">
                <p><strong>Структура папки:</strong></p>
                <ul>
                    <li>object_1/</li>
                    <li>├── img_1.jpg</li>
                    <li>├── img_2.jpg</li>
                    <li>└── info.txt</li>
                </ul>
            </div>
        </div>
    `;
}

// Показать сообщение об ошибке
function showError(message) {
    elements.exhibitsContainer.innerHTML = `
        <div class="error-message">
            <i class="fas fa-exclamation-triangle"></i>
            <h3>Ошибка загрузки</h3>
            <p>${message}</p>
            <p>Проверьте настройки в файле script.js:</p>
            <pre>const CONFIG = {
    repoOwner: 'ВАШ_GITHUB_USERNAME',
    repoName: 'ВАШ_REPO_NAME',
    objectsPath: 'objects'
};</pre>
        </div>
    `;
}

// Обновление статистики
function updateStatistics(objects) {
    const totalImages = objects.reduce((sum, obj) => sum + obj.imageCount, 0);
    const avgPhotos = totalImages / objects.length || 0;
    
    elements.totalImages.textContent = totalImages;
    elements.totalObjects.textContent = objects.length;
    elements.totalPhotos.textContent = totalImages;
    elements.avgPhotos.textContent = avgPhotos.toFixed(1);
}

// Инициализация графика
function initChart(objects) {
    const ctx = document.getElementById('photosChart');
    if (!ctx) return;
    
    // Удаляем предыдущий график если есть
    if (museum.chart) {
        museum.chart.destroy();
    }
    
    const labels = objects.map(obj => 
        obj.name.length > 15 ? obj.name.substring(0, 15) + '...' : obj.name
    );
    const data = objects.map(obj => obj.imageCount);
    
    museum.chart = new Chart(ctx.getContext('2d'), {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: [
                    '#8b0000', '#a52a2a', '#dc143c', 
                    '#b22222', '#cd5c5c', '#f08080',
                    '#8b4513', '#a0522d', '#d2691e'
                ],
                borderWidth: 2,
                borderColor: '#121212'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: '#e0e0e0',
                        font: {
                            size: 12
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return `${context.label}: ${context.raw} фото`;
                        }
                    }
                }
            }
        }
    });
}

// Открытие модального окна с экспонатом
function openExhibitModal(object) {
    museum.currentObject = object;
    museum.currentImageIndex = 0;
    museum.rotationX = 0;
    museum.rotationY = 0;
    museum.scale = 1;
    
    elements.modalTitle.textContent = object.name;
    elements.modalFolder.textContent = object.folder;
    elements.modalImagesCount.textContent = object.imageCount;
    elements.modalDescription.textContent = object.description;
    
    elements.currentImg.textContent = '1';
    elements.totalImgs.textContent = object.imageCount;
    
    loadExhibitImage();
    elements.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Запускаем автоматическое вращение
    startAutoRotation();
}

// Загрузка изображения экспоната
function loadExhibitImage() {
    elements.image3d.innerHTML = '';
    
    if (!museum.currentObject || museum.currentObject.images.length === 0) {
        elements.image3d.innerHTML = `
            <div class="no-image">
                <i class="fas fa-image"></i>
                <p>Изображение не найдено</p>
            </div>
        `;
        return;
    }
    
    const currentImage = museum.currentObject.images[museum.currentImageIndex];
    const img = document.createElement('img');
    
    img.src = currentImage.url;
    img.alt = `${museum.currentObject.name} - фото ${museum.currentImageIndex + 1}`;
    img.style.transform = `rotateX(${museum.rotationX}deg) rotateY(${museum.rotationY}deg) scale(${museum.scale})`;
    img.loading = 'eager';
    
    // Добавляем обработчики для 3D вращения
    img.addEventListener('mousedown', startDrag);
    img.addEventListener('wheel', handleZoom);
    
    // Обработка ошибки загрузки изображения
    img.onerror = () => {
        img.src = `https://via.placeholder.com/800x600/222/8b0000?text=${encodeURIComponent(museum.currentObject.name)}+${museum.currentImageIndex + 1}`;
    };
    
    elements.image3d.appendChild(img);
}

// Начало перетаскивания для вращения
function startDrag(e) {
    if (!museum.isRotating) return;
    
    museum.isDragging = true;
    museum.lastX = e.clientX;
    museum.lastY = e.clientY;
    
    document.addEventListener('mousemove', doDrag);
    document.addEventListener('mouseup', stopDrag);
    
    e.preventDefault();
}

// Вращение при перетаскивании
function doDrag(e) {
    if (!museum.isDragging || !museum.isRotating) return;
    
    const deltaX = e.clientX - museum.lastX;
    const deltaY = e.clientY - museum.lastY;
    
    museum.rotationY += deltaX * 0.5;
    museum.rotationX -= deltaY * 0.5;
    
    museum.lastX = e.clientX;
    museum.lastY = e.clientY;
    
    updateImageTransform();
}

// Остановка перетаскивания
function stopDrag() {
    museum.isDragging = false;
    document.removeEventListener('mousemove', doDrag);
    document.removeEventListener('mouseup', stopDrag);
}

// Масштабирование колесиком мыши
function handleZoom(e) {
    e.preventDefault();
    
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    museum.scale = Math.max(0.5, Math.min(3, museum.scale + delta));
    
    updateImageTransform();
}

// Обновление трансформации изображения
function updateImageTransform() {
    const img = elements.image3d.querySelector('img');
    if (img) {
        img.style.transform = `rotateX(${museum.rotationX}deg) rotateY(${museum.rotationY}deg) scale(${museum.scale})`;
        img.style.transition = museum.isDragging ? 'none' : 'transform 0.3s';
    }
}

// Автоматическое вращение
function startAutoRotation() {
    if (museum.autoRotateInterval) {
        clearInterval(museum.autoRotateInterval);
    }
    
    if (museum.isRotating) {
        museum.autoRotateInterval = setInterval(() => {
            if (!museum.isDragging && museum.isRotating) {
                museum.rotationY += 0.5;
                updateImageTransform();
            }
        }, 50);
    }
}

// Инициализация обработчиков событий
function initEventListeners() {
    // Поиск
    elements.searchInput.addEventListener('input', () => {
        const searchTerm = elements.searchInput.value.toLowerCase();
        const filteredObjects = museum.objects.filter(obj => 
            obj.name.toLowerCase().includes(searchTerm) || 
            obj.description.toLowerCase().includes(searchTerm) ||
            obj.folder.toLowerCase().includes(searchTerm)
        );
        displayObjects(filteredObjects);
    });
    
    // Сортировка
    elements.sortSelect.addEventListener('change', () => {
        const sortedObjects = [...museum.objects];
        
        switch (elements.sortSelect.value) {
            case 'name':
                sortedObjects.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'newest':
                // Сортировка по алфавиту в обратном порядке (как пример)
                sortedObjects.sort((a, b) => b.folder.localeCompare(a.folder));
                break;
            case 'oldest':
                sortedObjects.sort((a, b) => a.folder.localeCompare(b.folder));
                break;
        }
        
        displayObjects(sortedObjects);
    });
    
    // Навигация по изображениям в модальном окне
    elements.prevImgBtn.addEventListener('click', () => {
        if (museum.currentObject && museum.currentObject.images.length > 0) {
            museum.currentImageIndex = (museum.currentImageIndex - 1 + museum.currentObject.images.length) % museum.currentObject.images.length;
            elements.currentImg.textContent = museum.currentImageIndex + 1;
            loadExhibitImage();
        }
    });
    
    elements.nextImgBtn.addEventListener('click', () => {
        if (museum.currentObject && museum.currentObject.images.length > 0) {
            museum.currentImageIndex = (museum.currentImageIndex + 1) % museum.currentObject.images.length;
            elements.currentImg.textContent = museum.currentImageIndex + 1;
            loadExhibitImage();
        }
    });
    
    // Переключение вращения
    elements.rotateToggle.addEventListener('click', () => {
        museum.isRotating = !museum.isRotating;
        const span = elements.rotateToggle.querySelector('span');
        span.textContent = museum.isRotating ? 'Вращение: ВКЛ' : 'Вращение: ВЫКЛ';
        
        if (museum.isRotating) {
            startAutoRotation();
        } else {
            clearInterval(museum.autoRotateInterval);
        }
    });
    
    // Закрытие модального окна
    elements.closeModal.addEventListener('click', () => {
        closeModal();
    });
    
    // Закрытие модального окна при клике на фон
    elements.modal.addEventListener('click', (e) => {
        if (e.target === elements.modal) {
            closeModal();
        }
    });
    
    // Закрытие модального окна клавишей ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && elements.modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // Кнопка "Исследовать экспонаты"
    document.querySelector('.btn-explore').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('a[href="#exhibits"]').click();
    });
    
    // Обновление коллекции
    document.getElementById('refresh-collection')?.addEventListener('click', () => {
        loadObjectsFromGitHub();
    });
}

// Закрытие модального окна
function closeModal() {
    elements.modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    if (museum.autoRotateInterval) {
        clearInterval(museum.autoRotateInterval);
        museum.autoRotateInterval = null;
    }
}

// Добавьте стиль для бейджа с количеством фото в style.css:
const additionalCSS = `
.image-badge {
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: var(--accent);
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
}

.no-objects, .error-message {
    grid-column: 1 / -1;
    text-align: center;
    padding: 50px;
    background-color: var(--card-bg);
    border-radius: 10px;
    border: 1px solid var(--card-border);
}

.no-objects i, .error-message i {
    font-size: 3rem;
    color: var(--accent);
    margin-bottom: 20px;
}

.no-objects h3, .error-message h3 {
    margin-bottom: 15px;
    color: var(--text);
}

.no-objects p, .error-message p {
    margin-bottom: 15px;
    color: var(--text-light);
}

.instructions {
    text-align: left;
    max-width: 400px;
    margin: 20px auto;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 20px;
    border-radius: 8px;
    border-left: 4px solid var(--accent);
}

.instructions ul {
    list-style-type: none;
    margin-top: 10px;
    font-family: monospace;
    color: var(--text-light);
}

.instructions li {
    margin-bottom: 5px;
    padding-left: 20px;
}

.error-message pre {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 15px;
    border-radius: 5px;
    overflow-x: auto;
    text-align: left;
    margin-top: 20px;
    color: var(--accent-light);
    font-size: 0.9rem;
}

.no-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: var(--text-light);
}

.no-image i {
    font-size: 4rem;
    margin-bottom: 20px;
    color: var(--card-border);
}
`;

// Добавляем дополнительные стили к существующим
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.textContent = additionalCSS;
    document.head.appendChild(style);
});

// Функция для ручного обновления (добавьте кнопку в интерфейс если нужно)
function refreshCollection() {
    loadObjectsFromGitHub();
}

// Экспортируем функции для глобального доступа
window.museumApp = {
    refreshCollection,
    openExhibitModal,
    closeModal
};
