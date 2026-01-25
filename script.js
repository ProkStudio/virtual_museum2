// ================================
// ДАННЫЕ МУЗЕЯ - ДОБАВЛЯЕМ ЗДЕСЬ!
// ================================

const museumExhibits = [
    {
        id: 1,
        title: "Блокадный паек",
        description: "Хлебная карточка на ноябрь 1941 года. По этой карточке житель блокадного Ленинграда получал 125 грамм хлеба в сутки.",
        category: "document",
        year: "1941",
        fullDescription: `Хлебная карточка на ноябрь 1941 года - самый тяжелый период блокады. 
        
По этой карточке рабочие получали 250 грамм хлеба в сутки, служащие и дети - 125 грамм. 
Хлеб состоял из пищевой целлюлозы (10%), жмыха (10%), обойной пыли (2%), хвои (2%), ржаной муки (75%). 

Карточка была главной ценностью в блокадном Ленинграде. Ее потеря означала голодную смерть.`,
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
        description: "Страницы из дневника ленинградской школьницы.",
        category: "document",
        year: "1941-1942",
        fullDescription: `Дневник Тани Савичевой, ленинградской школьницы, который вела во время блокады. 
        
На девяти страницах дневника девочка записала даты смерти своих родных. Последняя запись: "Савичевы умерли. Умерли все. Осталась одна Таня". 

Таню эвакуировали в 1942 году, но она умерла от дистрофии в 1944 году. Ее дневник стал одним из символов блокады и был представлен на Нюрнбергском процессе как доказательство преступлений нацизма.`,
        images: [
            "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800",
            "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?w-800"
        ]
    }
];

const galleryImages = [
    {
        id: 1,
        title: "Дорога жизни",
        description: "Автомобили, идущие по льду Ладожского озера - единственной связи блокадного Ленинграда с большой землей.",
        date: "Зима 1942",
        image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800"
    }
];

// ================================
// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
// ================================

let currentExhibit = null;
let currentImageIndex = 0;
let isExhibitPage = false;

// ================================
// ЗАГРУЗКА СТРАНИЦЫ
// ================================

document.addEventListener('DOMContentLoaded', function() {
    console.log("Музей блокады Ленинграда загружен");
    
    // Проверяем, находимся ли на странице экспоната
    const urlParams = new URLSearchParams(window.location.search);
    const exhibitId = urlParams.get('exhibit');
    
    if (exhibitId) {
        // Показываем страницу экспоната
        showExhibitPage(parseInt(exhibitId));
        isExhibitPage = true;
    } else {
        // Показываем главную страницу
        showMainPage();
        isExhibitPage = false;
    }
    
    // Анимация статистики
    animateStatistics();
    
    // Навигация
    initNavigation();
    
    // Кнопка "Начать экскурсию"
    document.getElementById('exploreBtn')?.addEventListener('click', function() {
        document.getElementById('exhibits').scrollIntoView({ behavior: 'smooth' });
    });
});

// ================================
// ГЛАВНАЯ СТРАНИЦА
// ================================

function showMainPage() {
    // Показываем все секции
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'block';
    });
    
    // Скрываем детали экспоната
    const exhibitDetail = document.getElementById('exhibitDetail');
    if (exhibitDetail) exhibitDetail.style.display = 'none';
    
    // Загружаем экспонаты
    renderExhibits();
    updateExhibitCount();
    
    // Загружаем галерею
    renderGallery();
    updateGalleryCount();
}

function renderExhibits(filter = 'all', searchTerm = '') {
    const container = document.getElementById('exhibitsContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    let filteredExhibits = museumExhibits;
    
    // Фильтрация
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
    
    // Отрисовка
    filteredExhibits.forEach(exhibit => {
        const card = createExhibitCard(exhibit);
        container.appendChild(card);
    });
    
    updateExhibitCount(filteredExhibits.length);
}

function createExhibitCard(exhibit) {
    const card = document.createElement('div');
    card.className = 'exhibit-card';
    
    // Берем первое изображение для превью
    const previewImage = exhibit.images && exhibit.images.length > 0 
        ? exhibit.images[0] 
        : getPlaceholderImage(exhibit.category);
    
    card.innerHTML = `
        <div class="exhibit-image">
            <img src="${previewImage}" alt="${exhibit.title}" 
                 onerror="this.src='${getPlaceholderImage(exhibit.category)}'">
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
            <button class="view-exhibit-btn" data-id="${exhibit.id}">
                <i class="fas fa-eye"></i> Подробнее
            </button>
        </div>
    `;
    
    // Обработчик кнопки "Подробнее"
    card.querySelector('.view-exhibit-btn').addEventListener('click', function(e) {
        e.stopPropagation();
        const exhibitId = parseInt(this.dataset.id);
        openExhibitPage(exhibitId);
    });
    
    // Обработчик клика по всей карточке
    card.addEventListener('click', function() {
        const exhibitId = parseInt(this.querySelector('.view-exhibit-btn').dataset.id);
        openExhibitPage(exhibitId);
    });
    
    return card;
}

function openExhibitPage(exhibitId) {
    // Переходим на страницу экспоната
    window.location.href = `?exhibit=${exhibitId}`;
}

function updateExhibitCount(count = null) {
    const countElement = document.getElementById('exhibitCount');
    if (!countElement) return;
    
    if (count !== null) {
        countElement.textContent = count;
    } else {
        countElement.textContent = museumExhibits.length;
    }
}

// ================================
// СТРАНИЦА ЭКСПОНАТА
// ================================

function showExhibitPage(exhibitId) {
    // Находим экспонат
    const exhibit = museumExhibits.find(e => e.id === exhibitId);
    if (!exhibit) {
        window.location.href = window.location.pathname; // Возвращаем на главную
        return;
    }
    
    currentExhibit = exhibit;
    currentImageIndex = 0;
    
    // Скрываем все секции
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Создаем или показываем секцию деталей
    let detailSection = document.getElementById('exhibitDetail');
    
    if (!detailSection) {
        detailSection = document.createElement('section');
        detailSection.id = 'exhibitDetail';
        detailSection.className = 'exhibit-detail-section';
        document.querySelector('main').appendChild(detailSection);
    }
    
    // Заполняем контентом
    detailSection.innerHTML = `
        <div class="container">
            <button id="backToMain" class="back-button">
                <i class="fas fa-arrow-left"></i> Назад к коллекции
            </button>
            
            <div class="exhibit-detail">
                <div class="exhibit-gallery">
                    <div class="main-image">
                        <img id="mainExhibitImage" src="${exhibit.images[0]}" 
                             alt="${exhibit.title}"
                             onerror="this.src='${getPlaceholderImage(exhibit.category)}'">
                    </div>
                    
                    ${exhibit.images.length > 1 ? `
                    <div class="thumbnail-gallery">
                        ${exhibit.images.map((img, index) => `
                            <div class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
                                <img src="${img}" alt="Изображение ${index + 1}"
                                     onerror="this.src='${getPlaceholderImage(exhibit.category)}'">
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}
                    
                    <div class="image-counter">
                        <i class="fas fa-images"></i> Изображение <span id="currentImgIndex">1</span> из ${exhibit.images.length}
                    </div>
                </div>
                
                <div class="exhibit-info-detail">
                    <h1 class="exhibit-title-detail">${exhibit.title}</h1>
                    
                    <div class="exhibit-meta-detail">
                        <span class="category-badge">${getCategoryName(exhibit.category)}</span>
                        <span class="year-badge">${exhibit.year}</span>
                    </div>
                    
                    <div class="exhibit-description-detail">
                        <h3><i class="fas fa-info-circle"></i> Описание</h3>
                        <p>${exhibit.fullDescription || exhibit.description}</p>
                    </div>
                    
                    <div class="exhibit-stats">
                        <div class="stat-item">
                            <i class="fas fa-images"></i>
                            <span>${exhibit.images.length} фото</span>
                        </div>
                        <div class="stat-item">
                            <i class="fas fa-calendar"></i>
                            <span>${exhibit.year}</span>
                        </div>
                        <div class="stat-item">
                            <i class="fas fa-tag"></i>
                            <span>${getCategoryName(exhibit.category)}</span>
                        </div>
                    </div>
                    
                    <div class="navigation-buttons">
                        ${exhibit.id > 1 ? `
                            <button class="nav-exhibit-btn prev-btn" data-id="${exhibit.id - 1}">
                                <i class="fas fa-chevron-left"></i> Предыдущий
                            </button>
                        ` : ''}
                        
                        ${exhibit.id < museumExhibits.length ? `
                            <button class="nav-exhibit-btn next-btn" data-id="${exhibit.id + 1}">
                                Следующий <i class="fas fa-chevron-right"></i>
                            </button>
                        ` : ''}
                    </div>
                </div>
            </div>
        </div>
    `;
    
    detailSection.style.display = 'block';
    
    // Добавляем стили для страницы экспоната
    addExhibitPageStyles();
    
    // Инициализируем события
    initExhibitPageEvents();
}

function initExhibitPageEvents() {
    // Кнопка "Назад"
    document.getElementById('backToMain').addEventListener('click', function() {
        window.location.href = window.location.pathname;
    });
    
    // Миниатюры
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            changeMainImage(index);
            
            // Обновляем активную миниатюру
            thumbnails.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Кнопки навигации между экспонатами
    document.querySelectorAll('.nav-exhibit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const exhibitId = parseInt(this.dataset.id);
            openExhibitPage(exhibitId);
        });
    });
    
    // Клавиши клавиатуры для навигации
    document.addEventListener('keydown', function(e) {
        if (!currentExhibit) return;
        
        // Стрелка влево - предыдущее изображение или экспонат
        if (e.key === 'ArrowLeft') {
            if (currentImageIndex > 0) {
                changeMainImage(currentImageIndex - 1);
                updateThumbnailActive(currentImageIndex);
            } else if (currentExhibit.id > 1) {
                openExhibitPage(currentExhibit.id - 1);
            }
        }
        
        // Стрелка вправо - следующее изображение или экспонат
        if (e.key === 'ArrowRight') {
            if (currentImageIndex < currentExhibit.images.length - 1) {
                changeMainImage(currentImageIndex + 1);
                updateThumbnailActive(currentImageIndex);
            } else if (currentExhibit.id < museumExhibits.length) {
                openExhibitPage(currentExhibit.id + 1);
            }
        }
        
        // Escape - назад
        if (e.key === 'Escape') {
            window.location.href = window.location.pathname;
        }
    });
}

function changeMainImage(index) {
    if (!currentExhibit || !currentExhibit.images[index]) return;
    
    currentImageIndex = index;
    const mainImage = document.getElementById('mainExhibitImage');
    const counter = document.getElementById('currentImgIndex');
    
    mainImage.src = currentExhibit.images[index];
    if (counter) counter.textContent = index + 1;
}

function updateThumbnailActive(index) {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

function addExhibitPageStyles() {
    if (document.getElementById('exhibitPageStyles')) return;
    
    const style = document.createElement('style');
    style.id = 'exhibitPageStyles';
    style.textContent = `
        .exhibit-detail-section {
            padding: 2rem;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
            min-height: 100vh;
            padding-top: 100px;
        }
        
        .container {
            max-width: 1400px;
            margin: 0 auto;
        }
        
        .back-button {
            background: #8b0000;
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 5px;
            cursor: pointer;
            margin-bottom: 2rem;
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 1rem;
            transition: background 0.3s;
        }
        
        .back-button:hover {
            background: #a52a2a;
        }
        
        .exhibit-detail {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            background: #1e1e1e;
            border-radius: 15px;
            padding: 2rem;
            border: 1px solid #333;
        }
        
        .exhibit-gallery {
            background: #2a2a2a;
            border-radius: 10px;
            padding: 1rem;
        }
        
        .main-image {
            width: 100%;
            height: 400px;
            overflow: hidden;
            border-radius: 10px;
            margin-bottom: 1rem;
        }
        
        .main-image img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            background: #1a1a1a;
        }
        
        .thumbnail-gallery {
            display: flex;
            gap: 10px;
            overflow-x: auto;
            padding: 10px 0;
            margin-bottom: 1rem;
        }
        
        .thumbnail {
            width: 80px;
            height: 80px;
            border-radius: 5px;
            overflow: hidden;
            cursor: pointer;
            border: 2px solid transparent;
            flex-shrink: 0;
        }
        
        .thumbnail.active {
            border-color: #8b0000;
        }
        
        .thumbnail img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .image-counter {
            text-align: center;
            color: #aaa;
            font-size: 0.9rem;
        }
        
        .exhibit-info-detail {
            color: #e0e0e0;
        }
        
        .exhibit-title-detail {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            color: #fff;
            font-family: 'Playfair Display', serif;
        }
        
        .exhibit-meta-detail {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
        }
        
        .category-badge, .year-badge {
            padding: 0.5rem 1rem;
            background: #333;
            border-radius: 20px;
            font-size: 0.9rem;
        }
        
        .category-badge {
            background: #8b0000;
            color: white;
        }
        
        .exhibit-description-detail h3 {
            color: #8b0000;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .exhibit-description-detail p {
            line-height: 1.8;
            margin-bottom: 2rem;
            white-space: pre-line;
        }
        
        .exhibit-stats {
            display: flex;
            gap: 2rem;
            background: #2a2a2a;
            padding: 1.5rem;
            border-radius: 10px;
            margin-bottom: 2rem;
        }
        
        .stat-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
        
        .stat-item i {
            font-size: 1.5rem;
            color: #8b0000;
        }
        
        .navigation-buttons {
            display: flex;
            justify-content: space-between;
            gap: 1rem;
        }
        
        .nav-exhibit-btn {
            padding: 1rem 2rem;
            background: #333;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: background 0.3s;
        }
        
        .nav-exhibit-btn:hover {
            background: #8b0000;
        }
        
        .prev-btn {
            margin-right: auto;
        }
        
        .next-btn {
            margin-left: auto;
        }
        
        .view-exhibit-btn {
            background: #8b0000;
            color: white;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 1rem;
            display: flex;
            align-items: center;
            gap: 10px;
            width: 100%;
            justify-content: center;
            transition: background 0.3s;
        }
        
        .view-exhibit-btn:hover {
            background: #a52a2a;
        }
        
        @media (max-width: 992px) {
            .exhibit-detail {
                grid-template-columns: 1fr;
            }
            
            .main-image {
                height: 300px;
            }
        }
        
        @media (max-width: 768px) {
            .exhibit-title-detail {
                font-size: 2rem;
            }
            
            .navigation-buttons {
                flex-direction: column;
            }
            
            .nav-exhibit-btn {
                width: 100%;
                justify-content: center;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// ================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ================================

function getCategoryName(category) {
    const categories = {
        'document': 'Документ',
        'photo': 'Фотография',
        'object': 'Предмет',
        'personal': 'Личная вещь'
    };
    return categories[category] || 'Экспонат';
}

function getPlaceholderImage(category) {
    const placeholders = {
        'document': 'https://images.unsplash.com/photo-1588666309990-d68f08e3d4c6?w=500',
        'photo': 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500',
        'object': 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
        'personal': 'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?w=500'
    };
    return placeholders[category] || placeholders.document;
}

// ================================
// ГАЛЕРЕЯ (главная страница)
// ================================

function renderGallery() {
    const container = document.getElementById('galleryContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    galleryImages.forEach(image => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        item.innerHTML = `
            <div class="gallery-image">
                <img src="${image.image}" alt="${image.title}" 
                     onerror="this.src='${getPlaceholderImage('photo')}'">
            </div>
            <div class="gallery-caption">${image.title}</div>
        `;
        
        item.addEventListener('click', function() {
            alert(`${image.title}\n\n${image.description}\n\nДата: ${image.date}`);
        });
        
        container.appendChild(item);
    });
}

function updateGalleryCount() {
    const countElement = document.getElementById('galleryCount');
    if (!countElement) return;
    countElement.textContent = galleryImages.length;
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
            // Если мы на странице экспоната, игнорируем навигацию
            if (isExhibitPage) return;
            
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
    if (!isExhibitPage) {
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
}

// ================================
// ПОИСК И ФИЛЬТРЫ (главная страница)
// ================================

function initSearchAndFilter() {
    if (isExhibitPage) return;
    
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
            renderExhibits(activeFilter, this.value);
        });
    }
    
    if (filterButtons.length > 0) {
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
}

// Инициализируем поиск и фильтры после загрузки главной страницы
if (!isExhibitPage) {
    setTimeout(initSearchAndFilter, 100);
}
