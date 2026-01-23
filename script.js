// Основные переменные
let exhibits = [];
let filteredExhibits = [];
let currentRotation = 0;
let currentScale = 1;
let isDragging = false;
let lastMouseX = 0;
let lastMouseY = 0;
let currentExhibit = null;

// Категории экспонатов
const categories = [
    { id: 'document', name: 'Документы', color: '#8b0000' },
    { id: 'photo', name: 'Фотографии', color: '#006400' },
    { id: 'object', name: 'Предметы', color: '#4b0082' },
    { id: 'art', name: 'Произведения искусства', color: '#8b4513' }
];

// DOM элементы
const exhibitsContainer = document.getElementById('exhibits-container');
const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('exhibit-modal');
const closeModal = document.querySelector('.close-modal');
const exhibitCanvas = document.getElementById('exhibit-canvas');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalDescription = document.getElementById('modal-description');
const modalDetails = document.getElementById('modal-details');
const modalId = document.getElementById('modal-id');
const totalExhibitsElement = document.getElementById('total-exhibits');
const totalExhibitsCounter = document.getElementById('total-exhibits-counter');
const shownExhibitsElement = document.getElementById('shown-exhibits');
const startExploringBtn = document.getElementById('start-exploring');
const navLinks = document.querySelectorAll('.nav-link');

// Инициализация
document.addEventListener('DOMContentLoaded', function() {
    initMuseum();
    setupEventListeners();
});

// Инициализация музея
async function initMuseum() {
    try {
        // Загружаем экспонаты из папок
        exhibits = await loadExhibits();
        
        // Обновляем счетчики
        updateExhibitCounters();
        
        // Отображаем все экспонаты
        filteredExhibits = [...exhibits];
        displayExhibits(filteredExhibits);
        
        console.log(`Загружено ${exhibits.length} экспонатов`);
    } catch (error) {
        console.error('Ошибка при загрузке экспонатов:', error);
        exhibitsContainer.innerHTML = '<div class="error">Не удалось загрузить экспонаты. Пожалуйста, проверьте структуру папок.</div>';
    }
}

// Загрузка экспонатов из папок
async function loadExhibits() {
    return [
        {
            id: 'object_1',
            folder: 'object_1',
            name: 'Блокадный паёк',
            description: 'Хлебная карточка и норма хлеба на день для жителя блокадного Ленинграда в ноябре 1941 года.',
            details: 'Подробное описание...',
            category: 'document',
            images: 4, // Укажите сколько реально файлов
            date: 'ноябрь 1941',
            imagePaths: [
                'objects/object_1/img_1.jpg',
                'objects/object_1/img_2.jpg', 
                'objects/object_1/img_3.jpg',
                'objects/object_1/img_4.jpg'
            ]
        }
    ];
}

// Отображение экспонатов в сетке
function displayExhibits(exhibitsToShow) {
    if (exhibitsToShow.length === 0) {
        exhibitsContainer.innerHTML = '<div class="no-results">Экспонаты по вашему запросу не найдены.</div>';
        updateShownCounter(0);
        return;
    }
    
    let html = '';
    
    exhibitsToShow.forEach(exhibit => {
        const categoryInfo = categories.find(c => c.id === exhibit.category) || categories[0];
        
        html += `
            <div class="exhibit-card" data-id="${exhibit.id}">
                <div class="exhibit-image-container">
                    <div class="exhibit-image-placeholder" style="background-color: ${categoryInfo.color}20">
                        <div class="image-counter">
                            <i class="fas fa-images"></i> ${exhibit.images} изображений
                        </div>
                        <div class="exhibit-date">${exhibit.date}</div>
                        <div class="folder-name">${exhibit.folder}</div>
                    </div>
                </div>
                <div class="exhibit-content">
                    <h3 class="exhibit-title">${exhibit.name}</h3>
                    <p class="exhibit-description-preview">${exhibit.description}</p>
                    <div class="exhibit-footer">
                        <span class="exhibit-category" style="background-color: ${categoryInfo.color}20; color: ${categoryInfo.color}">
                            ${categoryInfo.name}
                        </span>
                        <span class="exhibit-id">${exhibit.id}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    exhibitsContainer.innerHTML = html;
    updateShownCounter(exhibitsToShow.length);
    
    // Добавляем обработчики кликов на карточки
    document.querySelectorAll('.exhibit-card').forEach(card => {
        card.addEventListener('click', function() {
            const exhibitId = this.getAttribute('data-id');
            openExhibitModal(exhibitId);
        });
    });
}

// Обновление счетчиков
function updateExhibitCounters() {
    totalExhibitsElement.textContent = exhibits.length;
    totalExhibitsCounter.textContent = exhibits.length;
}

function updateShownCounter(count) {
    shownExhibitsElement.textContent = count;
}

// Открытие модального окна с экспонатом
function openExhibitModal(exhibitId) {
    currentExhibit = exhibits.find(e => e.id === exhibitId);
    if (!currentExhibit) return;
    
    // Обновляем информацию в модальном окне
    modalTitle.textContent = currentExhibit.name;
    modalDescription.textContent = currentExhibit.description;
    modalDetails.textContent = currentExhibit.details;
    modalId.textContent = `ID: ${currentExhibit.id}`;
    
    const categoryInfo = categories.find(c => c.id === currentExhibit.category) || categories[0];
    modalCategory.textContent = categoryInfo.name;
    modalCategory.style.backgroundColor = `${categoryInfo.color}20`;
    modalCategory.style.color = categoryInfo.color;
    
    // Сброс параметров просмотра
    currentRotation = 0;
    currentScale = 1;
    
    // Имитация загрузки изображений из папки
    loadExhibitImages(currentExhibit);
    
    // Показываем модальное окно
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Загрузка изображений экспоната (имитация)
function loadExhibitImages(exhibit) {
    const ctx = exhibitCanvas.getContext('2d');
    const width = exhibitCanvas.width;
    const height = exhibitCanvas.height;
    
    // Очистка canvas
    ctx.clearRect(0, 0, width, height);
    
    // Создание фона
    ctx.fillStyle = '#2a2a2a';
    ctx.fillRect(0, 0, width, height);
    
    // Рисуем рамку
    ctx.strokeStyle = '#444';
    ctx.lineWidth = 2;
    ctx.strokeRect(10, 10, width - 20, height - 20);
    
    // Текст информации о загрузке изображений
    ctx.fillStyle = '#fff';
    ctx.font = '18px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(`Загрузка изображений из папки:`, width / 2, height / 2 - 30);
    ctx.fillText(`${exhibit.folder}/`, width / 2, height / 2);
    ctx.fillText(`(${exhibit.images} изображений)`, width / 2, height / 2 + 30);
    
    // Имитация миниатюр
    drawThumbnails(ctx, exhibit);
}

// Рисование миниатюр изображений
function drawThumbnails(ctx, exhibit) {
    const width = exhibitCanvas.width;
    const height = exhibitCanvas.height;
    const imageCount = exhibit.images;
    
    // Рисуем "миниатюры" изображений
    for (let i = 0; i < Math.min(imageCount, 4); i++) {
        const x = 50 + (i % 2) * 200;
        const y = 150 + Math.floor(i / 2) * 100;
        
        // Рамка миниатюры
        ctx.fillStyle = '#3a3a3a';
        ctx.fillRect(x, y, 150, 80);
        
        // Номер изображения
        ctx.fillStyle = '#8b0000';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`img_${i+1}.jpg`, x + 75, y + 40);
        
        // Информация о файле
        ctx.fillStyle = '#aaa';
        ctx.font = '10px Arial';
        ctx.fillText(`${exhibit.folder}/img_${i+1}.jpg`, x + 75, y + 60);
    }
    
    // Информация о структуре папки
    ctx.fillStyle = '#666';
    ctx.font = '12px Arial';
    ctx.textAlign = 'left';
    ctx.fillText(`Структура папки:`, 30, height - 60);
    ctx.fillText(`museum/objects/${exhibit.folder}/`, 30, height - 40);
    ctx.fillText(`info.txt - содержит название и описание экспоната`, 30, height - 20);
}

// Настройка вращения изображения мышью
function setupCanvasInteraction() {
    exhibitCanvas.addEventListener('mousedown', function(e) {
        isDragging = true;
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        exhibitCanvas.style.cursor = 'grabbing';
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        const deltaX = e.clientX - lastMouseX;
        const deltaY = e.clientY - lastMouseY;
        
        // Обновляем вращение на основе движения мыши
        currentRotation += deltaX * 0.5;
        
        // Перерисовываем canvas с новым вращением
        redrawCanvasWithRotation();
        
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
    });
    
    document.addEventListener('mouseup', function() {
        isDragging = false;
        exhibitCanvas.style.cursor = 'grab';
    });
    
    // Обработчики кнопок управления
    document.getElementById('rotate-left').addEventListener('click', function() {
        currentRotation -= 15;
        redrawCanvasWithRotation();
    });
    
    document.getElementById('rotate-right').addEventListener('click', function() {
        currentRotation += 15;
        redrawCanvasWithRotation();
    });
    
    document.getElementById('reset-rotation').addEventListener('click', function() {
        currentRotation = 0;
        currentScale = 1;
        redrawCanvasWithRotation();
    });
    
    document.getElementById('zoom-in').addEventListener('click', function() {
        currentScale = Math.min(currentScale * 1.2, 3);
        redrawCanvasWithRotation();
    });
    
    document.getElementById('zoom-out').addEventListener('click', function() {
        currentScale = Math.max(currentScale * 0.8, 0.5);
        redrawCanvasWithRotation();
    });
}

// Перерисовка canvas с учетом вращения и масштаба
function redrawCanvasWithRotation() {
    if (!currentExhibit) return;
    
    const ctx = exhibitCanvas.getContext('2d');
    const width = exhibitCanvas.width;
    const height = exhibitCanvas.height;
    
    // Очистка canvas
    ctx.clearRect(0, 0, width, height);
    
    // Сохраняем текущее состояние контекста
    ctx.save();
    
    // Перемещаем начало координат в центр canvas
    ctx.translate(width / 2, height / 2);
    
    // Применяем вращение
    ctx.rotate(currentRotation * Math.PI / 180);
    
    // Применяем масштаб
    ctx.scale(currentScale, currentScale);
    
    // Возвращаем начало координат обратно
    ctx.translate(-width / 2, -height / 2);
    
    // Рисуем содержимое
    loadExhibitImages(currentExhibit);
    
    // Восстанавливаем состояние контекста
    ctx.restore();
    
    // Отображаем текущий угол вращения
    ctx.fillStyle = '#8b0000';
    ctx.font = '12px Arial';
    ctx.textAlign = 'right';
    ctx.fillText(`Вращение: ${Math.round(currentRotation)}°`, width - 20, height - 30);
    ctx.fillText(`Масштаб: ${currentScale.toFixed(1)}x`, width - 20, height - 10);
}

// Настройка обработчиков событий
function setupEventListeners() {
    // Навигация
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Убираем активный класс у всех ссылок
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Добавляем активный класс текущей ссылке
            this.classList.add('active');
            
            // Показываем соответствующий раздел
            const sectionId = this.getAttribute('data-section');
            document.querySelectorAll('.content-section').forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(sectionId).classList.add('active');
        });
    });
    
    // Поиск
    searchInput.addEventListener('input', function() {
        filterExhibits();
    });
    
    // Фильтрация по категориям
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем активный класс у всех кнопок фильтра
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем активный класс текущей кнопке
            this.classList.add('active');
            
            // Фильтруем экспонаты
            filterExhibits();
        });
    });
    
    // Закрытие модального окна
    closeModal.addEventListener('click', closeExhibitModal);
    
    // Закрытие модального окна при клике вне его
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeExhibitModal();
        }
    });
    
    // Кнопка "Начать просмотр экспонатов"
    startExploringBtn.addEventListener('click', function() {
        // Переключаемся на раздел экспонатов
        navLinks.forEach(l => l.classList.remove('active'));
        document.querySelector('.nav-link[data-section="exhibits"]').classList.add('active');
        
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById('exhibits').classList.add('active');
        
        // Прокручиваем к началу экспонатов
        document.getElementById('exhibits').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Настройка взаимодействия с canvas
    setupCanvasInteraction();
}

// Фильтрация экспонатов
function filterExhibits() {
    const searchTerm = searchInput.value.toLowerCase();
    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    
    filteredExhibits = exhibits.filter(exhibit => {
        // Проверяем соответствие поисковому запросу
        const matchesSearch = searchTerm === '' || 
            exhibit.name.toLowerCase().includes(searchTerm) ||
            exhibit.description.toLowerCase().includes(searchTerm) ||
            exhibit.details.toLowerCase().includes(searchTerm);
        
        // Проверяем соответствие фильтру
        const matchesFilter = activeFilter === 'all' || exhibit.category === activeFilter;
        
        return matchesSearch && matchesFilter;
    });
    
    displayExhibits(filteredExhibits);
}

// Закрытие модального окна
function closeExhibitModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Добавляем информацию о структуре папок в интерфейс
document.addEventListener('DOMContentLoaded', function() {
    // Добавляем информацию о структуре в раздел "О музее"
    const aboutText = document.querySelector('.about-text');
    if (aboutText) {
        aboutText.innerHTML += `
            <h3>Структура данных музея</h3>
            <p>Все экспонаты хранятся в папке <code>objects/</code> в следующем формате:</p>
            <pre>
museum/
├── index.html
├── style.css
├── script.js
│
└── objects/
    ├── object_1/
    │   ├── img_1.jpg
    │   ├── img_2.jpg
    │   ├── img_3.jpg
    │   └── info.txt
    │
    ├── object_2/
    │   ├── img_1.jpg
    │   ├── img_2.jpg
    │   └── info.txt
    └── ...
            </pre>
            <p>Чтобы добавить новый экспонат, достаточно создать новую папку в формате <code>object_N/</code>, добавить в неё изображения с именами <code>img_1.jpg</code>, <code>img_2.jpg</code> и т.д., и файл <code>info.txt</code> с названием и описанием экспоната.</p>
        `;
    }
});

// Добавляем инструкцию по добавлению экспонатов
const instructionHTML = `
<div class="instruction">
    <h3>Как добавить новый экспонат:</h3>
    <ol>
        <li>Создайте папку в директории <code>objects/</code> с именем <code>object_X/</code> (где X - следующий номер)</li>
        <li>Поместите в папку изображения с именами <code>img_1.jpg</code>, <code>img_2.jpg</code> и т.д.</li>
        <li>Создайте файл <code>info.txt</code> с содержимым:
            <pre>
Название экспоната
Описание экспоната
Подробная историческая справка
            </pre>
        </li>
        <li>Система автоматически обнаружит новый экспонат при следующей загрузке</li>
    </ol>
</div>
`;

// Вставляем инструкцию в раздел "О музее" после загрузки страницы
setTimeout(() => {
    const aboutInfo = document.querySelector('.about-info');
    if (aboutInfo) {
        aboutInfo.insertAdjacentHTML('afterend', instructionHTML);
    }
}, 1000);
