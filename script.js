// МОДЕЛЬ ДАННЫХ ЭКСПОНАТОВ
// ========================
// Здесь вы добавляете свои экспонаты с путями к локальным изображениям
// Структура папок на GitHub должна быть:
// - /images/exhibits/ - для изображений экспонатов
// - /images/gallery/ - для изображений галереи

const museumExhibits = [
    {
        id: 1,
        title: "Блокадный паек",
        description: "Хлебная карточка на ноябрь 1941 года. По этой карточке житель блокадного Ленинграда получал 125 грамм хлеба в сутки.",
        category: "object",
        year: "1941",
        // ПУТЬ К ИЗОБРАЖЕНИЯМ: относительный путь от корня сайта
        images: [
            "objects/object_1/img_1.jpg",
            "objects/object_1/img_2.jpg",
            "objects/object_1/img_3.jpg",
            "objects/object_1/img_4.jpg"
        ]
    },
    {
        id: 2,
        title: "Дневник Тани Савичевой",
        description: "Страницы из дневника ленинградской школьницы Тани Савичевой, в котором она записывала даты смерти своих родных.",
        category: "document",
        year: "1941-1942",
        images: [
            "images/exhibits/tanya_diary_1.jpg",
            "images/exhibits/tanya_diary_2.jpg"
        ]
    },
    {
        id: 3,
        title: "Буржуйка",
        description: "Железная печь-буржуйка, которую использовали для обогрева и приготовления пищи в блокадном Ленинграде.",
        category: "object",
        year: "1941",
        images: [
            "images/exhibits/stove_1.jpg",
            "images/exhibits/stove_2.jpg",
            "images/exhibits/stove_3.jpg"
        ]
    },
    {
        id: 4,
        title: "Письмо с фронта",
        description: "Треугольное письмо, которое солдат отправил своей семье в блокадный Ленинград.",
        category: "personal",
        year: "1942",
        images: [
            "images/exhibits/letter_1.jpg",
            "images/exhibits/letter_2.jpg"
        ]
    },
    {
        id: 5,
        title: "Ленинград в блокаде",
        description: "Фотография Невского проспекта в блокадном Ленинграде. Видны баррикады и противотанковые ежи.",
        category: "photo",
        year: "1942",
        images: [
            "images/exhibits/nevsky_1.jpg",
            "images/exhibits/nevsky_2.jpg",
            "images/exhibits/nevsky_3.jpg"
        ]
    },
    {
        id: 6,
        title: "Медаль 'За оборону Ленинграда'",
        description: "Награда, учрежденная в 1942 году для награждения защитников и жителей блокадного Ленинграда.",
        category: "object",
        year: "1942",
        images: [
            "images/exhibits/medal_1.jpg",
            "images/exhibits/medal_2.jpg"
        ]
    },
    {
        id: 7,
        title: "Блокадная ласточка",
        description: "Жетон с изображением ласточки с письмом в клюве, который носили ленинградцы как символ надежды на хорошие вести.",
        category: "personal",
        year: "1942",
        images: [
            "images/exhibits/swallow_1.jpg",
            "images/exhibits/swallow_2.jpg",
            "images/exhibits/swallow_3.jpg"
        ]
    },
    {
        id: 8,
        title: "Прорыв блокады",
        description: "Фотография, сделанная в январе 1943 года, когда блокада Ленинграда была прорвана советскими войсками.",
        category: "photo",
        year: "1943",
        images: [
            "images/exhibits/breakthrough_1.jpg",
            "images/exhibits/breakthrough_2.jpg"
        ]
    }
    // ДОБАВЛЯЙТЕ НОВЫЕ ЭКСПОНАТЫ ЗДЕСЬ
    // Просто скопируйте и вставьте следующий шаблон:
    /*
    {
        id: 9, // Увеличьте ID на 1
        title: "Название экспоната",
        description: "Описание экспоната",
        category: "document", // или "photo", "object", "personal"
        year: "1941",
        images: [
            "images/exhibits/ваше_изображение_1.jpg",
            "images/exhibits/ваше_изображение_2.jpg"
        ]
    },
    */
];

// МОДЕЛЬ ДАННЫХ ГАЛЕРЕИ
// =====================
const galleryImages = [
    {
        id: 1,
        title: "Дорога жизни",
        description: "Автомобили, идущие по льду Ладожского озера - единственной связи блокадного Ленинграда с большой землей.",
        date: "Зима 1942",
        // ПУТЬ К ИЗОБРАЖЕНИЮ: относительный путь от корня сайта
        image: "images/gallery/road_of_life.jpg"
    },
    {
        id: 2,
        title: "Блокадный хлеб",
        description: "Хлеб, выпекавшийся в блокадном Ленинграде. Состоял из пищевой целлюлозы, жмыха, обойной пыли и хвои.",
        date: "1941-1942",
        image: "images/gallery/blockade_bread.jpg"
    },
    {
        id: 3,
        title: "Артиллерийский обстрел",
        description: "Ленинградцы во время артиллерийского обстрела. За время блокады город подвергался обстрелам 611 дней.",
        date: "1942",
        image: "images/gallery/shelling.jpg"
    },
    {
        id: 4,
        title: "Дети блокады",
        description: "Дети в бомбоубежище во время воздушной тревоги. За время блокады погибло около 400 тысяч детей.",
        date: "1942",
        image: "images/gallery/children.jpg"
    },
    {
        id: 5,
        title: "Работа на заводе",
        description: "Подростки, работающие на заводе. В блокадном Ленинграде к станкам вставали даже дети.",
        date: "1942",
        image: "images/gallery/factory.jpg"
    },
    {
        id: 6,
        title: "Салют в честь снятия блокады",
        description: "Салют 27 января 1944 года в честь полного освобождения Ленинграда от блокады.",
        date: "27 января 1944",
        image: "images/gallery/fireworks.jpg"
    }
    // ДОБАВЛЯЙТЕ НОВЫЕ ИЗОБРАЖЕНИЯ В ГАЛЕРЕЮ ЗДЕСЬ
    /*
    {
        id: 7,
        title: "Название изображения",
        description: "Описание изображения",
        date: "1942",
        image: "images/gallery/ваше_изображение.jpg"
    },
    */
];

// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
// =====================
let currentExhibit = null;
let currentImageIndex = 0; // Текущий индекс изображения в галерее экспоната
let scene, camera, renderer, object, controls;
let autoRotate = false;
let animationId = null;

// ЗАГРУЗОЧНЫЕ ИЗОБРАЖЕНИЯ (на случай если ваши изображения не загрузились)
const placeholderImages = {
    exhibits: [
        "https://images.unsplash.com/photo-1588666309990-d68f08e3d4c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
    ],
    gallery: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
};

// ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// ====================================
document.addEventListener('DOMContentLoaded', function() {
    console.log("Инициализация виртуального музея...");
    console.log("Всего экспонатов:", museumExhibits.length);
    console.log("Всего изображений в галерее:", galleryImages.length);
    
    // Инициализация экспонатов
    renderExhibits();
    updateExhibitCount();
    
    // Инициализация галереи
    renderGallery();
    updateGalleryCount();
    
    // Инициализация статистики
    animateStatistics();
    
    // Инициализация навигации
    initNavigation();
    
    // Инициализация поиска и фильтрации
    initSearchAndFilter();
    
    // Инициализация модального окна
    initModal();
    
    // Инициализация кнопок
    initButtons();
    
    // Инициализация 3D просмотра
    init3DViewer();
    
    // Прокрутка к разделу при клике на кнопку
    document.getElementById('exploreBtn').addEventListener('click', function() {
        document.getElementById('exhibits').scrollIntoView({ behavior: 'smooth' });
    });
    
    console.log("Инициализация завершена");
});

// ФУНКЦИИ ДЛЯ РАБОТЫ С ЭКСПОНАТАМИ
// ================================

// Отображение экспонатов
function renderExhibits(filter = 'all', searchTerm = '') {
    const container = document.getElementById('exhibitsContainer');
    container.innerHTML = '';
    
    let filteredExhibits = museumExhibits;
    
    // Применение фильтра по категории
    if (filter !== 'all') {
        filteredExhibits = museumExhibits.filter(exhibit => exhibit.category === filter);
    }
    
    // Применение поиска
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filteredExhibits = filteredExhibits.filter(exhibit => 
            exhibit.title.toLowerCase().includes(term) || 
            exhibit.description.toLowerCase().includes(term) ||
            exhibit.year.toLowerCase().includes(term)
        );
    }
    
    // Отображение отфильтрованных экспонатов
    filteredExhibits.forEach(exhibit => {
        const exhibitCard = createExhibitCard(exhibit);
        container.appendChild(exhibitCard);
    });
    
    // Обновление счетчика
    updateExhibitCount(filteredExhibits.length);
}

// Создание карточки экспоната
function createExhibitCard(exhibit) {
    const card = document.createElement('div');
    card.className = 'exhibit-card';
    card.dataset.id = exhibit.id;
    card.dataset.category = exhibit.category;
    
    // Используем первое изображение для превью
    const previewImage = exhibit.images && exhibit.images.length > 0 
        ? exhibit.images[0] 
        : placeholderImages.exhibits[exhibit.id % placeholderImages.exhibits.length];
    
    // Проверяем, локальный ли это путь
    const imageSrc = isLocalPath(previewImage) ? previewImage : previewImage;
    
    card.innerHTML = `
        <div class="exhibit-image">
            <img src="${imageSrc}" alt="${exhibit.title}" onerror="this.src='${placeholderImages.exhibits[exhibit.id % placeholderImages.exhibits.length]}'">
            <div class="image-counter">
                <i class="fas fa-images"></i> ${exhibit.images ? exhibit.images.length : 0}
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
    
    // Добавление обработчика клика для 3D просмотра
    card.addEventListener('click', function() {
        setCurrentExhibit(exhibit);
        update3DViewer();
        
        // Прокрутка к 3D просмотру
        document.getElementById('viewer').scrollIntoView({ behavior: 'smooth' });
    });
    
    return card;
}

// Проверка, является ли путь локальным
function isLocalPath(path) {
    return !path.startsWith('http') && !path.startsWith('//');
}

// Получение названия категории
function getCategoryName(category) {
    const categories = {
        'document': 'Документ',
        'photo': 'Фотография',
        'object': 'Предмет',
        'personal': 'Личная вещь'
    };
    
    return categories[category] || 'Другое';
}

// Обновление счетчика экспонатов
function updateExhibitCount(count = null) {
    const countElement = document.getElementById('exhibitCount');
    if (count !== null) {
        countElement.textContent = count;
    } else {
        countElement.textContent = museumExhibits.length;
    }
}

// Установка текущего экспоната для 3D просмотра
function setCurrentExhibit(exhibit) {
    currentExhibit = exhibit;
    currentImageIndex = 0; // Сбрасываем индекс изображения
    
    // Обновление информации об экспонате
    document.getElementById('currentExhibitTitle').textContent = exhibit.title;
    document.getElementById('currentExhibitDesc').textContent = exhibit.description;
    
    // Обновление информации в 3D просмотре
    updateExhibitInfo();
    
    // Обновление галереи изображений для этого экспоната
    updateExhibitGallery();
}

// Обновление информации об экспонате в 3D просмотре
function updateExhibitInfo() {
    if (!currentExhibit) return;
    
    const info = `
        <strong>${currentExhibit.title}</strong><br>
        ${currentExhibit.description}<br>
        <br>
        <strong>Год:</strong> ${currentExhibit.year}<br>
        <strong>Категория:</strong> ${getCategoryName(currentExhibit.category)}<br>
        <strong>Изображений:</strong> ${currentExhibit.images ? currentExhibit.images.length : 0}<br>
        <br>
        <em>Используйте мышь для вращения объекта</em>
    `;
    
    document.getElementById('viewerExhibitInfo').innerHTML = info;
}

// Обновление галереи изображений для текущего экспоната
function updateExhibitGallery() {
    const galleryContainer = document.querySelector('.viewer-display');
    
    // Удаляем старую галерею, если есть
    const oldGallery = document.getElementById('exhibitImageGallery');
    if (oldGallery) {
        oldGallery.remove();
    }
    
    if (!currentExhibit || !currentExhibit.images || currentExhibit.images.length <= 1) {
        return;
    }
    
    // Создаем контейнер для галереи
    const gallery = document.createElement('div');
    gallery.id = 'exhibitImageGallery';
    gallery.className = 'exhibit-gallery';
    
    gallery.innerHTML = `
        <div class="gallery-header">
            <h4><i class="fas fa-images"></i> Изображения экспоната (${currentExhibit.images.length})</h4>
            <div class="gallery-nav">
                <button id="prevImageBtn" class="gallery-nav-btn"><i class="fas fa-chevron-left"></i></button>
                <span id="currentImageIndex">1 / ${currentExhibit.images.length}</span>
                <button id="nextImageBtn" class="gallery-nav-btn"><i class="fas fa-chevron-right"></i></button>
            </div>
        </div>
        <div class="gallery-images">
            ${currentExhibit.images.map((img, index) => `
                <div class="gallery-thumb ${index === 0 ? 'active' : ''}" data-index="${index}">
                    <img src="${isLocalPath(img) ? img : img}" alt="Изображение ${index + 1}" 
                         onerror="this.src='${placeholderImages.exhibits[index % placeholderImages.exhibits.length]}'">
                </div>
            `).join('')}
        </div>
    `;
    
    // Добавляем галерею после 3D просмотра
    const viewerCanvas = document.getElementById('viewerCanvas');
    viewerCanvas.parentNode.insertBefore(gallery, viewerCanvas.nextSibling);
    
    // Добавляем стили для галереи
    addGalleryStyles();
    
    // Инициализируем навигацию по галерее
    initGalleryNavigation();
}

// Добавление стилей для галереи изображений
function addGalleryStyles() {
    if (document.getElementById('exhibitGalleryStyles')) return;
    
    const style = document.createElement('style');
    style.id = 'exhibitGalleryStyles';
    style.textContent = `
        .exhibit-gallery {
            background-color: var(--card-bg);
            border-radius: 10px;
            padding: 1.5rem;
            margin-top: 1.5rem;
            border: 1px solid var(--border-color);
        }
        
        .gallery-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }
        
        .gallery-header h4 {
            color: var(--accent-color);
            font-size: 1.1rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .gallery-nav {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .gallery-nav-btn {
            background-color: var(--accent-color);
            color: white;
            border: none;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s ease;
        }
        
        .gallery-nav-btn:hover {
            background-color: var(--accent-light);
        }
        
        #currentImageIndex {
            color: var(--text-color);
            font-weight: bold;
            min-width: 60px;
            text-align: center;
        }
        
        .gallery-images {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            padding-bottom: 10px;
        }
        
        .gallery-thumb {
            width: 80px;
            height: 80px;
            border-radius: 5px;
            overflow: hidden;
            cursor: pointer;
            border: 2px solid transparent;
            flex-shrink: 0;
        }
        
        .gallery-thumb.active {
            border-color: var(--accent-color);
        }
        
        .gallery-thumb img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        /* Стили для мобильных устройств */
        @media (max-width: 768px) {
            .gallery-header {
                flex-direction: column;
                align-items: flex-start;
                gap: 1rem;
            }
            
            .gallery-nav {
                align-self: flex-end;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// Инициализация навигации по галерее изображений
function initGalleryNavigation() {
    const prevBtn = document.getElementById('prevImageBtn');
    const nextBtn = document.getElementById('nextImageBtn');
    const thumbs = document.querySelectorAll('.gallery-thumb');
    const currentIndexElement = document.getElementById('currentImageIndex');
    
    if (!prevBtn || !nextBtn) return;
    
    // Обработчик для кнопки "назад"
    prevBtn.addEventListener('click', function() {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            updateGalleryView();
        }
    });
    
    // Обработчик для кнопки "вперед"
    nextBtn.addEventListener('click', function() {
        if (currentExhibit && currentExhibit.images && currentImageIndex < currentExhibit.images.length - 1) {
            currentImageIndex++;
            updateGalleryView();
        }
    });
    
    // Обработчики для миниатюр
    thumbs.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            currentImageIndex = index;
            updateGalleryView();
        });
    });
    
    // Функция обновления вида галереи
    function updateGalleryView() {
        // Обновляем активную миниатюру
        thumbs.forEach(thumb => {
            const index = parseInt(thumb.dataset.index);
            if (index === currentImageIndex) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
        
        // Обновляем счетчик
        if (currentIndexElement) {
            currentIndexElement.textContent = `${currentImageIndex + 1} / ${currentExhibit.images.length}`;
        }
        
        // Обновляем главное изображение (в 3D просмотре можно обновить текстуру)
        update3DTexture();
    }
}

// Обновление текстуры 3D объекта
function update3DTexture() {
    if (!currentExhibit || !currentExhibit.images || !object) return;
    
    const imageUrl = currentExhibit.images[currentImageIndex];
    
    // Загружаем новую текстуру
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
        isLocalPath(imageUrl) ? imageUrl : imageUrl,
        function(texture) {
            if (object.material) {
                object.material.map = texture;
                object.material.needsUpdate = true;
            }
        },
        undefined,
        function(err) {
            console.error('Ошибка загрузки текстуры:', err);
        }
    );
}

// ФУНКЦИИ ДЛЯ РАБОТЫ С ГАЛЕРЕЕЙ
// ==============================

// Отображение галереи
function renderGallery() {
    const container = document.getElementById('galleryContainer');
    container.innerHTML = '';
    
    galleryImages.forEach(image => {
        const galleryItem = createGalleryItem(image);
        container.appendChild(galleryItem);
    });
}

// Создание элемента галереи
function createGalleryItem(image) {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.dataset.id = image.id;
    
    // Проверяем, локальный ли это путь
    const imageSrc = isLocalPath(image.image) ? image.image : image.image;
    
    galleryItem.innerHTML = `
        <div class="gallery-image">
            <img src="${imageSrc}" alt="${image.title}" 
                 onerror="this.src='${placeholderImages.gallery}'">
        </div>
        <div class="gallery-caption">${image.title}</div>
    `;
    
    // Добавление обработчика клика для открытия модального окна
    galleryItem.addEventListener('click', function() {
        openModal(image);
    });
    
    return galleryItem;
}

// Обновление счетчика галереи
function updateGalleryCount() {
    const countElement = document.getElementById('galleryCount');
    countElement.textContent = galleryImages.length;
}

// ОТКРЫТИЕ МОДАЛЬНОГО ОКНА
// ========================
function openModal(image) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalDate = document.getElementById('modalDate');
    
    // Проверяем, локальный ли это путь
    const imageSrc = isLocalPath(image.image) ? image.image : image.image;
    
    modalImage.src = imageSrc;
    modalImage.alt = image.title;
    modalTitle.textContent = image.title;
    modalDescription.textContent = image.description;
    modalDate.textContent = image.date;
    
    modal.style.display = 'block';
}

// АНИМАЦИЯ СТАТИСТИКИ
// ===================
function animateStatistics() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach(statNumber => {
        const target = parseInt(statNumber.dataset.target);
        const increment = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            statNumber.textContent = Math.floor(current).toLocaleString();
        }, 20);
    });
}

// ИНИЦИАЛИЗАЦИЯ НАВИГАЦИИ
// =======================
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Удаление активного класса у всех ссылок
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Добавление активного класса текущей ссылке
            this.classList.add('active');
            
            // Прокрутка к разделу
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Обновление активной ссылки при прокрутке
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navHeight = document.querySelector('header').offsetHeight;
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

// ИНИЦИАЛИЗАЦИЯ ПОИСКА И ФИЛЬТРАЦИИ
// ==================================
function initSearchAndFilter() {
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Поиск
    searchInput.addEventListener('input', function() {
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        renderExhibits(activeFilter, this.value);
    });
    
    // Фильтрация
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Удаление активного класса у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавление активного класса текущей кнопке
            this.classList.add('active');
            
            // Применение фильтра
            const filter = this.dataset.filter;
            const searchTerm = searchInput.value;
            renderExhibits(filter, searchTerm);
        });
    });
}

// ИНИЦИАЛИЗАЦИЯ МОДАЛЬНОГО ОКНА
// ==============================
function initModal() {
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.close-modal');
    
    // Закрытие модального окна
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Закрытие при клике вне изображения
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Закрытие по клавише ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// ИНИЦИАЛИЗАЦИЯ КНОПОК
// =====================
function initButtons() {
    // Кнопка сброса вида в 3D просмотре
    document.getElementById('resetViewBtn').addEventListener('click', function() {
        if (controls) {
            controls.reset();
        }
    });
    
    // Кнопка автоповорота в 3D просмотре
    document.getElementById('toggleAutoRotateBtn').addEventListener('click', function() {
        autoRotate = !autoRotate;
        
        if (controls) {
            controls.autoRotate = autoRotate;
        }
        
        this.innerHTML = autoRotate ? 
            '<i class="fas fa-stop"></i> Остановить автоповорот' : 
            '<i class="fas fa-sync"></i> Автоповорот';
    });
}

// 3D ПРОСМОТР
// ===========

// Инициализация 3D просмотра
function init3DViewer() {
    const container = document.getElementById('viewerCanvas');
    
    // Проверяем, поддерживает ли браузер WebGL
    if (!WebGLRenderingContext) {
        container.innerHTML = '<div class="webgl-error"><p>Ваш браузер не поддерживает 3D просмотр. Пожалуйста, обновите браузер.</p></div>';
        return;
    }
    
    try {
        // Создание сцены
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x1a1a1a);
        
        // Создание камеры
        camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.1, 1000);
        camera.position.z = 5;
        
        // Создание рендерера
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);
        
        // Добавление освещения
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        scene.add(ambientLight);
        
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(5, 10, 7);
        scene.add(directionalLight);
        
        // Создание простого объекта по умолчанию
        createDefaultObject();
        
        // Создание OrbitControls для вращения мышью
        // В реальном проекте подключите OrbitControls из three.js
        // Для простоты создаем упрощенную версию
        initOrbitControls();
        
        // Анимация
        function animate() {
            animationId = requestAnimationFrame(animate);
            
            if (object && autoRotate) {
                object.rotation.y += 0.005;
            }
            
            renderer.render(scene, camera);
        }
        
        animate();
        
        // Обработка изменения размера окна
        window.addEventListener('resize', function() {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        });
        
    } catch (error) {
        console.error("Ошибка при инициализации 3D просмотра:", error);
        container.innerHTML = '<div class="webgl-error"><p>Ошибка при загрузке 3D просмотра. Пожалуйста, обновите страницу.</p></div>';
    }
}

// Упрощенная версия OrbitControls
function initOrbitControls() {
    const canvas = document.querySelector('#viewerCanvas canvas');
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    
    canvas.addEventListener('mousedown', function(e) {
        isDragging = true;
        previousMousePosition = {
            x: e.clientX,
            y: e.clientY
        };
    });
    
    canvas.addEventListener('mousemove', function(e) {
        if (!isDragging || !object) return;
        
        const deltaMove = {
            x: e.clientX - previousMousePosition.x,
            y: e.clientY - previousMousePosition.y
        };
        
        // Вращение объекта
        object.rotation.y += deltaMove.x * 0.01;
        object.rotation.x += deltaMove.y * 0.01;
        
        previousMousePosition = {
            x: e.clientX,
            y: e.clientY
        };
    });
    
    canvas.addEventListener('mouseup', function() {
        isDragging = false;
    });
    
    canvas.addEventListener('mouseleave', function() {
        isDragging = false;
    });
    
    // Зум колесиком мыши
    canvas.addEventListener('wheel', function(e) {
        e.preventDefault();
        
        if (!camera) return;
        
        const zoomSpeed = 0.1;
        camera.position.z += e.deltaY * zoomSpeed;
        
        // Ограничиваем зум
        camera.position.z = Math.max(2, Math.min(10, camera.position.z));
    });
    
    // Для сенсорных устройств
    canvas.addEventListener('touchstart', function(e) {
        if (e.touches.length === 1) {
            isDragging = true;
            previousMousePosition = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };
        }
    });
    
    canvas.addEventListener('touchmove', function(e) {
        if (!isDragging || e.touches.length !== 1 || !object) return;
        
        e.preventDefault();
        
        const deltaMove = {
            x: e.touches[0].clientX - previousMousePosition.x,
            y: e.touches[0].clientY - previousMousePosition.y
        };
        
        // Вращение объекта
        object.rotation.y += deltaMove.x * 0.01;
        object.rotation.x += deltaMove.y * 0.01;
        
        previousMousePosition = {
            x: e.touches[0].client
