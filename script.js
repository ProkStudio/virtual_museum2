// ================================
// КОНФИГУРАЦИЯ ЭКСПОНАТОВ
// ================================

const museumExhibits = [
    {
        id: 1,
        title: "Блокадный паек",
        description: "Хлебная карточка на ноябрь 1941 года. По этой карточке житель блокадного Ленинграда получал 125 грамм хлеба в сутки.",
        fullDescription: "Хлебные карточки были введены в Ленинграде 18 июля 1941 года. Карточка на ноябрь 1941 года давала право на получение 125 граммов хлеба в сутки для служащих, иждивенцев и детей. Этот кусочек хлеба, состоявший наполовину из пищевых суррогатов (целлюлоза, жмых, обойная пыль, хвоя), часто был единственной пищей в день. Потеря карточки означала верную смерть от голода.",
        category: "document",
        year: "1941",
        author: "Неизвестен",
        location: "Ленинград",
        // ПУТИ К ИЗОБРАЖЕНИЯМ - ЗАМЕНИТЕ НА СВОИ!
        images: [
            "objects/object_1/img_1.jpg",
            "objects/object_1/img_2.jpg", 
            "objects/object_1/img_3.jpg",
            "objects/object_1/img_4.jpg"
        ]
    }
    // ДОБАВЛЯЙТЕ НОВЫЕ ЭКСПОНАТЫ ЗДЕСЬ
];

const galleryImages = [
    {
        id: 1,
        title: "Дорога жизни",
        description: "Автомобили, идущие по льду Ладожского озера - единственной связи блокадного Ленинграда с большой землей.",
        date: "Зима 1942",
        image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800"
    },
    {
        id: 2,
        title: "Блокадный хлеб",
        description: "Хлеб, выпекавшийся в блокадном Ленинграде. Состоял из пищевой целлюлозы, жмыха, обойной пыли и хвои.",
        date: "1941-1942",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800"
    }
];

// ================================
// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
// ================================

let currentExhibit = null;
let currentImageIndex = 0;
let isViewerOpen = false;

// ================================
// ИНИЦИАЛИЗАЦИЯ САЙТА
// ================================

document.addEventListener('DOMContentLoaded', function() {
    console.log("Музей блокады Ленинграда - запуск...");
    
    // Инициализация всех разделов
    initNavigation();
    renderExhibits();
    updateExhibitCount();
    renderGallery();
    updateGalleryCount();
    animateStatistics();
    initModal();
    
    // Кнопка "Начать экскурсию"
    document.getElementById('exploreBtn').addEventListener('click', function() {
        document.getElementById('exhibits').scrollIntoView({ behavior: 'smooth' });
    });
    
    // Поиск и фильтры
    initSearchAndFilter();
    
    // Проверка загрузки изображений
    setTimeout(checkImageLoad, 1000);
});

// ================================
// ФУНКЦИИ ДЛЯ ЭКСПОНАТОВ
// ================================

function renderExhibits(filter = 'all', searchTerm = '') {
    const container = document.getElementById('exhibitsContainer');
    container.innerHTML = '';
    
    let filteredExhibits = museumExhibits;
    
    // Фильтрация по категории
    if (filter !== 'all') {
        filteredExhibits = museumExhibits.filter(exhibit => exhibit.category === filter);
    }
    
    // Поиск
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filteredExhibits = filteredExhibits.filter(exhibit => 
            exhibit.title.toLowerCase().includes(term) || 
            exhibit.description.toLowerCase().includes(term)
        );
    }
    
    // Отображение
    filteredExhibits.forEach(exhibit => {
        const card = createExhibitCard(exhibit);
        container.appendChild(card);
    });
    
    // Обновление счетчика
    updateExhibitCount(filteredExhibits.length);
}

function createExhibitCard(exhibit) {
    const card = document.createElement('div');
    card.className = 'exhibit-card';
    card.dataset.id = exhibit.id;
    
    // Берем первое изображение для превью
    const previewImage = exhibit.images && exhibit.images.length > 0 
        ? exhibit.images[0] 
        : getPlaceholderImage();
    
    card.innerHTML = `
        <div class="exhibit-image">
            <img src="${previewImage}" alt="${exhibit.title}" 
                 onerror="this.src='${getPlaceholderImage()}'">
            ${exhibit.images.length > 1 ? `
                <div class="image-counter">
                    <i class="fas fa-images"></i> ${exhibit.images.length}
                </div>
            ` : ''}
        </div>
        <div class="exhibit-info">
            <h3 class="exhibit-title">${exhibit.title}</h3>
            <p class="exhibit-description">${exhibit.description}</p>
            <div class="exhibit-meta">
                <span class="exhibit-category">${getCategoryName(exhibit.category)}</span>
                <span class="exhibit-year">${exhibit.year}</span>
            </div>
            <button class="view-details-btn" data-id="${exhibit.id}">
                <i class="fas fa-eye"></i> Подробнее
            </button>
        </div>
    `;
    
    // Обработчик для кнопки "Подробнее"
    const detailsBtn = card.querySelector('.view-details-btn');
    detailsBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        openExhibitViewer(exhibit);
    });
    
    // Обработчик клика по всей карточке
    card.addEventListener('click', function() {
        openExhibitViewer(exhibit);
    });
    
    return card;
}

function updateExhibitCount(count = null) {
    const counter = document.getElementById('exhibitCount');
    counter.textContent = count !== null ? count : museumExhibits.length;
}

function getCategoryName(category) {
    const categories = {
        'document': 'Документ',
        'photo': 'Фотография',
        'object': 'Предмет',
        'personal': 'Личная вещь'
    };
    return categories[category] || 'Экспонат';
}

// ================================
// ПОИСК И ФИЛЬТРАЦИЯ
// ================================

function initSearchAndFilter() {
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Поиск
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
            renderExhibits(activeFilter, this.value);
        });
    }
    
    // Фильтрация
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            const searchTerm = searchInput ? searchInput.value : '';
            renderExhibits(filter, searchTerm);
        });
    });
}

// ================================
// ПРОСМОТР ЭКСПОНАТА
// ================================

function openExhibitViewer(exhibit) {
    currentExhibit = exhibit;
    currentImageIndex = 0;
    isViewerOpen = true;
    
    // Создаем HTML для просмотра экспоната
    const viewerHTML = `
        <div class="exhibit-viewer-overlay" id="exhibitViewer">
            <div class="exhibit-viewer-container">
                <button class="close-viewer-btn" id="closeViewerBtn">
                    <i class="fas fa-times"></i>
                </button>
                
                <div class="viewer-content">
                    <!-- Галерея изображений -->
                    <div class="viewer-gallery">
                        <div class="main-image-container">
                            <img id="mainExhibitImage" 
                                 src="${exhibit.images[0]}" 
                                 alt="${exhibit.title}"
                                 onerror="this.src='${getPlaceholderImage()}'">
                            <div class="image-nav">
                                <button class="nav-btn prev-btn" id="prevImageBtn">
                                    <i class="fas fa-chevron-left"></i>
                                </button>
                                <button class="nav-btn next-btn" id="nextImageBtn">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                            <div class="image-counter-display">
                               
