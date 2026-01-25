// ================================
// КОНФИГУРАЦИЯ - ДОБАВЛЯЕМ ОБЪЕКТЫ ЗДЕСЬ
// ================================

const museumExhibits = [
    {
        id: 1,
        title: "Блокадный паек",
        description: "Хлебная карточка на ноябрь 1941 года. По этой карточке житель блокадного Ленинграда получал 125 грамм хлеба в сутки.",
        category: "object",
        year: "1941",
        // ПУТИ К ИЗОБРАЖЕНИЯМ - МЕНЯЙТЕ ТОЛЬКО ЭТИ СТРОКИ!
        images: [
            "objects/object_1/img_1.jpg",
            "objects/object_1/img_2.jpg",
            "objects/object_1/img_3.jpg",
            "objects/object_1/img_4.jpg"
        ]
    }
];

const galleryImages = [
    {
        id: 1,
        title: "Дорога жизни",
        description: "Автомобили, идущие по льду Ладожского озера.",
        date: "Зима 1942",
        image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=500"
    }
];

// ================================
// ОСНОВНОЙ КОД - НЕ ТРОГАТЬ
// ================================

let currentExhibit = null;
let scene, camera, renderer, object;

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log("=== МУЗЕЙ ЗАПУЩЕН ===");
    console.log("Экспонатов:", museumExhibits.length);
    
    // Отображаем экспонат
    renderExhibits();
    updateExhibitCount();
    
    // Отображаем галерею
    renderGallery();
    updateGalleryCount();
    
    // Анимация статистики
    animateStatistics();
    
    // Навигация
    initNavigation();
    
    // Поиск и фильтры (скрываем, так как 1 объект)
    document.querySelector('.exhibits-controls').style.display = 'none';
    
    // 3D просмотр
    init3DViewer();
    
    // Автоматически выбираем первый экспонат
    if (museumExhibits.length > 0) {
        setCurrentExhibit(museumExhibits[0]);
    }
    
    // Кнопки
    document.getElementById('exploreBtn').addEventListener('click', function() {
        document.getElementById('exhibits').scrollIntoView({ behavior: 'smooth' });
    });
    
    document.getElementById('resetViewBtn').addEventListener('click', function() {
        if (camera) {
            camera.position.set(0, 0, 5);
            if (object) {
                object.rotation.set(0, 0, 0);
            }
        }
    });
});

// ================================
// ФУНКЦИИ ДЛЯ ЭКСПОНАТОВ
// ================================

function renderExhibits() {
    const container = document.getElementById('exhibitsContainer');
    container.innerHTML = '';
    
    museumExhibits.forEach(exhibit => {
        const card = document.createElement('div');
        card.className = 'exhibit-card';
        card.dataset.id = exhibit.id;
        
        // Берем первое изображение
        const previewImage = exhibit.images && exhibit.images.length > 0 
            ? exhibit.images[0] 
            : getPlaceholder();
        
        card.innerHTML = `
            <div class="exhibit-image">
                <img src="${previewImage}" alt="${exhibit.title}" 
                     onerror="this.src='${getPlaceholder()}'">
                <div class="image-counter">
                    <i class="fas fa-images"></i> ${exhibit.images.length}
                </div>
            </div>
            <div class="exhibit-info">
                <h3 class="exhibit-title">${exhibit.title}</h3>
                <p class="exhibit-description">${exhibit.description}</p>
                <div class="exhibit-meta">
                    <span class="exhibit-category">${getCategoryName(exhibit.category)}</span>
                    <span class="exhibit-year">${exhibit.year}</span>
                </div>
            </div>
        `;
        
        card.addEventListener('click', function() {
            console.log("Выбран экспонат:", exhibit.title);
            console.log("Изображения:", exhibit.images);
            setCurrentExhibit(exhibit);
            document.getElementById('viewer').scrollIntoView({ behavior: 'smooth' });
        });
        
        container.appendChild(card);
    });
}

function updateExhibitCount() {
    document.getElementById('exhibitCount').textContent = museumExhibits.length;
}

function getCategoryName(category) {
    const names = {
        'document': 'Документ',
        'photo': 'Фотография',
        'object': 'Предмет',
        'personal': 'Личная вещь'
    };
    return names[category] || 'Экспонат';
}

function getPlaceholder() {
    return "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500";
}

// ================================
// УСТАНОВКА ТЕКУЩЕГО ЭКСПОНАТА
// ================================

function setCurrentExhibit(exhibit) {
    currentExhibit = exhibit;
    
    // Обновляем информацию
    document.getElementById('currentExhibitTitle').textContent = exhibit.title;
    document.getElementById('currentExhibitDesc').textContent = exhibit.description;
    
    const info = `
        <strong>${exhibit.title}</strong><br>
        ${exhibit.description}<br>
        <br>
        <strong>Год:</strong> ${exhibit.year}<br>
        <strong>Категория:</strong> ${getCategoryName(exhibit.category)}<br>
        <strong>Изображений:</strong> ${exhibit.images.length}<br>
        <br>
        <em>Перетаскивайте мышью для вращения</em>
    `;
    
    document.getElementById('viewerExhibitInfo').innerHTML = info;
    
    // Обновляем 3D объект
    update3DViewer();
    
    // Показываем миниатюры изображений
    showImageThumbs();
}

function showImageThumbs() {
    const viewerDisplay = document.querySelector('.viewer-display');
    
    // Удаляем старые миниатюры
    const oldThumbs = document.getElementById('imageThumbs');
    if (oldThumbs) oldThumbs.remove();
    
    if (!currentExhibit || currentExhibit.images.length <= 1) return;
    
    const thumbsDiv = document.createElement('div');
    thumbsDiv.id = 'imageThumbs';
    thumbsDiv.style.cssText = `
        margin-top: 20px;
        padding: 15px;
        background: #1e1e1e;
        border-radius: 10px;
        border: 1px solid #333;
    `;
    
    thumbsDiv.innerHTML = `
        <h4 style="color: #8b0000; margin-bottom: 10px;">
            <i class="fas fa-images"></i> Все изображения экспоната (${currentExhibit.images.length})
        </h4>
        <div style="display: flex; gap: 10px; overflow-x: auto; padding: 10px 0;">
            ${currentExhibit.images.map((img, i) => `
                <div style="width: 80px; height: 80px; flex-shrink: 0; border: 2px solid ${i === 0 ? '#8b0000' : 'transparent'}; border-radius: 5px; overflow: hidden; cursor: pointer;">
                    <img src="${img}" alt="Изображение ${i+1}" 
                         style="width: 100%; height: 100%; object-fit: cover;"
                         onerror="this.src='${getPlaceholder()}'"
                         onclick="change3DImage(${i})">
                </div>
            `).join('')}
        </div>
    `;
    
    viewerDisplay.appendChild(thumbsDiv);
}

// ================================
// 3D ПРОСМОТР
// ================================

function init3DViewer() {
    const container = document.getElementById('viewerCanvas');
    
    try {
        // Создаем сцену
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1a1a1a);
        
        // Создаем камеру
        camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.z = 5;
        
        // Создаем рендерер
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);
        
        // Освещение
        const light1 = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(light1);
        
        const light2 = new THREE.DirectionalLight(0xffffff, 0.8);
        light2.position.set(5, 10, 7);
        scene.add(light2);
        
        // Создаем тестовый куб
        createDefaultObject();
        
        // Анимация
        function animate() {
            requestAnimationFrame(animate);
            if (object) {
                object.rotation.y += 0.005;
            }
            renderer.render(scene, camera);
        }
        animate();
        
        // Обработка мыши для вращения
        let isDragging = false;
        let prevMouse = { x: 0, y: 0 };
        
        container.addEventListener('mousedown', (e) => {
            isDragging = true;
            prevMouse = { x: e.clientX, y: e.clientY };
        });
        
        container.addEventListener('mousemove', (e) => {
            if (!isDragging || !object) return;
            
            const deltaX = e.clientX - prevMouse.x;
            const deltaY = e.clientY - prevMouse.y;
            
            object.rotation.y += deltaX * 0.01;
            object.rotation.x += deltaY * 0.01;
            
            prevMouse = { x: e.clientX, y: e.clientY };
        });
        
        container.addEventListener('mouseup', () => {
            isDragging = false;
        });
        
        container.addEventListener('mouseleave', () => {
            isDragging = false;
        });
        
        // Масштабирование колесиком
        container.addEventListener('wheel', (e) => {
            e.preventDefault();
            camera.position.z += e.deltaY * 0.01;
            camera.position.z = Math.max(2, Math.min(10, camera.position.z));
        });
        
    } catch (error) {
        console.error("Ошибка 3D:", error);
        container.innerHTML = '<p style="color: white; text-align: center; padding: 50px;">3D просмотр временно недоступен</p>';
    }
}

function createDefaultObject() {
    if (object) scene.remove(object);
    
    const geometry = new THREE.BoxGeometry(2, 2.5, 0.5);
    const material = new THREE.MeshStandardMaterial({ 
        color: 0x8b0000,
        roughness: 0.4
    });
    
    object = new THREE.Mesh(geometry, material);
    scene.add(object);
}

function update3DViewer() {
    if (!currentExhibit || !object) return;
    
    // Меняем цвет в зависимости от категории
    const colors = {
        'document': 0x8b0000,
        'photo': 0x2e8b57,
        'object': 0x4682b4,
        'personal': 0xd2691e
    };
    
    object.material.color.setHex(colors[currentExhibit.category] || 0x808080);
}

function change3DImage(imgIndex) {
    console.log("Смена изображения на индекс:", imgIndex);
    
    // Просто меняем цвет куба для демонстрации
    if (object) {
        const colors = [0x8b0000, 0x2e8b57, 0x4682b4, 0xd2691e];
        object.material.color.setHex(colors[imgIndex % colors.length]);
    }
    
    // Обновляем рамки у миниатюр
    const thumbs = document.querySelectorAll('#imageThumbs img');
    thumbs.forEach((thumb, i) => {
        thumb.parentElement.style.borderColor = i === imgIndex ? '#8b0000' : 'transparent';
    });
}

// ================================
// ГАЛЕРЕЯ
// ================================

function renderGallery() {
    const container = document.getElementById('galleryContainer');
    container.innerHTML = '';
    
    galleryImages.forEach(img => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `
            <div class="gallery-image">
                <img src="${img.image}" alt="${img.title}" 
                     onerror="this.src='${getPlaceholder()}'">
            </div>
            <div class="gallery-caption">${img.title}</div>
        `;
        
        item.addEventListener('click', () => {
            alert(`${img.title}\n\n${img.description}\n\nДата: ${img.date}`);
        });
        
        container.appendChild(item);
    });
}

function updateGalleryCount() {
    document.getElementById('galleryCount').textContent = galleryImages.length;
}

// ================================
// СТАТИСТИКА
// ================================

function animateStatistics() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.dataset.target);
        let current = 0;
        const step = target / 50;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current).toLocaleString();
        }, 30);
    });
}

// ================================
// НАВИГАЦИЯ
// ================================

function initNavigation() {
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Обновление активной ссылки при скролле
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navHeight = 70;
        
        let current = '';
        sections.forEach(section => {
            const top = section.offsetTop - navHeight;
            const height = section.clientHeight;
            if (scrollY >= top && scrollY < top + height) {
                current = section.id;
            }
        });
        
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ================================
// УПРАВЛЕНИЕ ЭКСПОНАТАМИ
// ================================

// Функция для добавления нового экспоната (пример)
function addNewExhibit() {
    const newExhibit = {
        id: museumExhibits.length + 1,
        title: "Новый экспонат",
        description: "Описание нового экспоната",
        category: "object",
        year: "1942",
        images: [
            "objects/object_2/img_1.jpg",  // Поменяйте на свои пути
            "objects/object_2/img_2.jpg"
        ]
    };
    
    museumExhibits.push(newExhibit);
    renderExhibits();
    updateExhibitCount();
    
    console.log("Добавлен новый экспонат:", newExhibit.title);
}

// ================================
// ЛОГИ ДЛЯ ОТЛАДКИ
// ================================

// Проверка загрузки изображений
function checkImages() {
    console.log("=== ПРОВЕРКА ИЗОБРАЖЕНИЙ ===");
    
    museumExhibits.forEach(exhibit => {
        console.log(`Экспонат: ${exhibit.title}`);
        
        exhibit.images.forEach((imgPath, i) => {
            const img = new Image();
            img.onload = () => console.log(`  ✓ img_${i+1}: ${imgPath}`);
            img.onerror = () => console.log(`  ✗ img_${i+1}: ${imgPath} - ОШИБКА`);
            img.src = imgPath;
        });
    });
}

// Запускаем проверку через секунду
setTimeout(checkImages, 1000);
