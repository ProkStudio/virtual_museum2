// ================================
// КОНФИГУРАЦИЯ ЭКСПОНАТОВ
// ================================

const museumExhibits = [
    {
        id: 1,
        title: "Блокадный паек",
        description: "Хлебная карточка на ноябрь 1941 года. По этой карточке житель блокадного Ленинграда получал 125 грамм хлеба в сутки.",
        fullDescription: "Хлебные карточки были введены в Ленинграде 18 июля 1941 года. Карточка на ноябрь 1941 года давала право на получение 125 граммов хлеба в сутки для служащих, иждивенцев и детей. Этот кусочек хлеба, состоявший наполовину из пищевых суррогатов (целлюлоза, жмых, обойная пыль, хвоя), часто был единственной пищей в день. Потеря карточки означала верную смерть от голода.",
        category: "photo",
        year: "1941",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_1/img_1.png",
            "objects/object_1/img_2.jpg", 
            "objects/object_1/img_3.png",
            "objects/object_1/img_4.png"
        ]
    },
    {
        id: 2,
        title: "Пилотка",
        description: "Ее носили солдаты",
        fullDescription: "Пилотка - головной убор, который носили солдаты Красной Армии во время боев. В блокадном Ленинграде такие пилотки были у всех военнослужащих, защищавших город. Многие бойцы хранили в пилотках фотографии родных, письма от семьи или кусочки хлеба.",
        category: "object",
        year: "1941",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_2/img_1.png",
            "objects/object_2/img_2.png", 
            "objects/object_2/img_3.png",
            "objects/object_2/img_4.png"
        ]
    },
    {
        id: 3,
        title: "Бидон",
        description: "Блокадный бидон для воды",
        fullDescription: "Металлический бидон для воды - один из самых важных предметов в блокадном Ленинграде. Когда водопровод перестал работать, люди ходили за водой к Неве, Фонтанке и другим водоемам. В таком бидоне приносили 1-2 ведра воды в день на всю семью.",
        category: "object",
        year: "1941",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_3/img_1.png",
            "objects/object_3/img_2.png", 
            "objects/object_3/img_3.png",
            "objects/object_3/img_4.png"
        ]
    }
];

// ================================
// КОНФИГУРАЦИЯ ЭКСКУРСИЙ
// ================================

const museumTours = [
    {
        id: 1,
        number: "01",
        title: "Блокадный быт: жизнь в осажденном городе",
        description: "Экскурсия о повседневной жизни ленинградцев в условиях блокады: как они выживали, работали, учились и сохраняли человеческое достоинство.",
        duration: "20-25 минут",
        steps: 5,
        image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800",
        stepsData: [
            {
                step: 1,
                title: "Хлебные карточки и пайки",
                description: "Система карточного снабжения была введена 18 июля 1941 года. Рабочие получали 250 грамм хлеба в день, служащие, иждивенцы и дети - всего 125 грамм. Этот хлеб наполовину состоял из пищевых суррогатов: целлюлозы, жмыха, обойной пыли, хвои.\n\nПотеря карточки означала верную смерть от голода. Люди берегли их как самую большую ценность, пришивали к одежде, хранили в специальных мешочках.",
                images: [
                    "objects/object_1/img_1.png",
                    "objects/object_1/img_2.jpg"
                ]
            },
            {
                step: 2,
                title: "Буржуйки и обогрев",
                description: "Зимой 1941-1942 годов в Ленинграде не работало отопление. Температура в квартирах опускалась до -5°C. Люди жгли мебель, книги, паркет.\n\n'Буржуйки' - небольшие печки из жести или металлических ведер - стали единственным источником тепла. В них сжигали все, что могло гореть.",
                images: [
                    "objects/object_2/img_1.png",
                    "objects/object_2/img_2.png"
                ]
            },
            {
                step: 3,
                title: "Вода и сангигиена",
                description: "Водопровод не работал. Люди ходили за водой к Неве, Фонтанке, каналам. Очереди у прорубей были длинными, стоять приходилось часами на морозе.\n\nСтандартная норма - 1-2 ведра воды в день на семью. Этой водой и пили, и готовили, и умывались.",
                images: [
                    "objects/object_3/img_1.png"
                ]
            },
            {
                step: 4,
                title: "Работа в блокадном городе",
                description: "Несмотря на голод и холод, заводы продолжали работать. Люди падали у станков от истощения, но продолжали выпускать снаряды, ремонтировать танки.\n\nЗавод 'Электросила' выпускал минометы, Кировский завод ремонтировал танки в нескольких километрах от линии фронта.",
                images: []
            },
            {
                step: 5,
                title: "Дети блокады",
                description: "В Ленинграде осталось 400 тысяч детей. Они учились в неотапливаемых классах, многие сидели в шубах и варежках. Учебники часто заменяли газеты.\n\nДети работали наравне со взрослыми: тушили зажигательные бомбы, ухаживали за ранеными, разбирали завалы.",
                images: [
                    "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800"
                ]
            }
        ]
    },
    {
        id: 2,
        number: "02",
        title: "Дорога жизни: артерия спасения",
        description: "История ледовой трассы через Ладожское озеро - единственной связи блокадного Ленинграда с большой землей.",
        duration: "15-20 минут",
        steps: 4,
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800",
        stepsData: [
            {
                step: 1,
                title: "Создание ледовой трассы",
                description: "22 ноября 1941 года по льду Ладожского озера прошла первая колонна из 60 грузовиков. Лед был тонким - всего 10-15 см, несколько машин ушли под лед.\n\nДорогу обслуживали 350 регулировщиков, которые отмечали безопасный путь вешками.",
                images: []
            },
            {
                step: 2,
                title: "Грузы и эвакуация",
                description: "По Дороге жизни везли муку, крупы, горючее, боеприпасы. Обратно вывозили людей: детей, женщин, стариков, раненых.\n\nВсего было перевезено свыше 1,6 млн тонн грузов и эвакуировано около 1,4 млн человек.",
                images: []
            },
            {
                step: 3,
                title: "Опасности пути",
                description: "Машины шли под обстрелами и бомбежками. Немецкая авиация совершала до 300 вылетов в сутки.\n\nВодители ехали с открытыми дверями, чтобы успеть выпрыгнуть, если машина начнет тонуть. Многие совершали по 2-3 рейса в сутки.",
                images: []
            },
            {
                step: 4,
                title: "Подвиг водителей",
                description: "Зимой 1941-1942 годов по Дороге жизни работало более 4000 машин. Каждый рейс был подвигом.\n\nВодитель Федор Егоров совершил 120 рейсов, перевезя 300 тонн грузов. Его машину несколько раз обстреливали, но он всегда доезжал до Ленинграда.",
                images: []
            }
        ]
    },
    {
        id: 3,
        number: "03",
        title: "Искусство и культура в блокаду",
        description: "Как в осажденном городе продолжали работать театры, филармония, радио и создавались произведения искусства.",
        duration: "15 минут",
        steps: 3,
        image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800",
        stepsData: [
            {
                step: 1,
                title: "Ленинградское радио",
                description: "Радио не замолкало ни на один день. Дикторы читали сводки Совинформбюро, передачи для детей, литературные чтения.\n\n9 августа 1942 года в Большом зале филармонии состоялось исполнение Седьмой симфонии Шостаковича, которую транслировали на весь город.",
                images: []
            },
            {
                step: 2,
                title: "Театры и библиотеки",
                description: "В городе работали 5 театров. Артисты выступали в холодных залах, часто падая в голодные обмороки.\n\nПубличная библиотека выдавала книги даже в самые тяжелые дни. Люди приходили читать при свете коптилок.",
                images: []
            },
            {
                step: 3,
                title: "Блокадный дневник",
                description: "Многие ленинградцы вели дневники. Самый известный - дневник Тани Савичевой, в котором она записывала даты смерти своих родных.\n\n'Савичевы умерли. Умерли все. Осталась одна Таня' - эти слова стали символом блокадной трагедии.",
                images: []
            }
        ]
    }
];

// ================================
// КОНФИГУРАЦИЯ ГАЛЕРЕИ
// ================================

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
let currentTour = null;
let currentStepIndex = 0;
let isTourOpen = false;

// ================================
// ИНИЦИАЛИЗАЦИЯ САЙТА
// ================================

document.addEventListener('DOMContentLoaded', function() {
    console.log("Музей блокады Ленинграда - запуск...");
    
    // Инициализация всех разделов
    initNavigation();
    renderExhibits();
    updateExhibitCount();
    renderTours();
    updateTourCount();
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
    
    // Инициализация кнопки поддержки
    initSupportButton();
});

// ================================
// ФУНКЦИИ ДЛЯ ЭКСПОНАТОВ
// ================================

function renderExhibits(filter = 'all', searchTerm = '') {
    const container = document.getElementById('exhibitsContainer');
    if (!container) return;
    
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
    if (counter) {
        counter.textContent = count !== null ? count : museumExhibits.length;
    }
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
            const activeFilter = document.querySelector('.filter-btn.active');
            const filter = activeFilter ? activeFilter.dataset.filter : 'all';
            renderExhibits(filter, this.value);
        });
    }
    
    // Фильтрация
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
                                <span id="currentImageNum">1</span> / <span id="totalImages">${exhibit.images.length}</span>
                            </div>
                        </div>
                        
                        <!-- Миниатюры -->
                        ${exhibit.images.length > 1 ? `
                            <div class="thumbnail-container">
                                ${exhibit.images.map((img, index) => `
                                    <div class="thumbnail ${index === 0 ? 'active' : ''}" 
                                         data-index="${index}">
                                        <img src="${img}" 
                                             alt="Изображение ${index + 1}"
                                             onerror="this.src='${getPlaceholderImage()}'">
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                    
                    <!-- Информация об экспонате -->
                    <div class="viewer-info">
                        <h2 class="viewer-title">${exhibit.title}</h2>
                        <div class="viewer-meta">
                            <span class="meta-item"><i class="fas fa-calendar"></i> ${exhibit.year}</span>
                            <span class="meta-item"><i class="fas fa-tag"></i> ${getCategoryName(exhibit.category)}</span>
                            ${exhibit.author ? `<span class="meta-item"><i class="fas fa-user"></i> ${exhibit.author}</span>` : ''}
                            ${exhibit.location ? `<span class="meta-item"><i class="fas fa-map-marker-alt"></i> ${exhibit.location}</span>` : ''}
                        </div>
                        
                        <div class="viewer-description">
                            <h3><i class="fas fa-info-circle"></i> Описание</h3>
                            <p>${exhibit.fullDescription || exhibit.description}</p>
                        </div>
                        
                        <div class="viewer-stats">
                            <div class="stat-box">
                                <i class="fas fa-images"></i>
                                <span class="stat-number">${exhibit.images.length}</span>
                                <span class="stat-label">изображений</span>
                            </div>
                            <div class="stat-box">
                                <i class="fas fa-eye"></i>
                                <span class="stat-number">0</span>
                                <span class="stat-label">просмотров</span>
                            </div>
                        </div>
                        
                        <div class="viewer-actions">
                            <button class="action-btn share-btn">
                                <i class="fas fa-share-alt"></i> Поделиться
                            </button>
                            <button class="action-btn save-btn">
                                <i class="fas fa-bookmark"></i> Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Добавляем просмотрщик на страницу
    document.body.insertAdjacentHTML('beforeend', viewerHTML);
    
    // Блокируем прокрутку основного контента
    document.body.style.overflow = 'hidden';
    
    // Инициализируем навигацию по изображениям
    initImageNavigation();
    
    // Инициализируем кнопки
    initViewerButtons();
    
    // Добавляем стили для просмотрщика
    addViewerStyles();
}

function initImageNavigation() {
    const mainImage = document.getElementById('mainExhibitImage');
    const prevBtn = document.getElementById('prevImageBtn');
    const nextBtn = document.getElementById('nextImageBtn');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const currentNum = document.getElementById('currentImageNum');
    const totalImages = document.getElementById('totalImages');
    
    // Обновление главного изображения
    function updateMainImage() {
        if (!currentExhibit || !currentExhibit.images[currentImageIndex]) return;
        
        mainImage.src = currentExhibit.images[currentImageIndex];
        mainImage.alt = `${currentExhibit.title} - изображение ${currentImageIndex + 1}`;
        currentNum.textContent = currentImageIndex + 1;
        
        // Обновляем активную миниатюру
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === currentImageIndex);
        });
    }
    
    // Кнопка "Назад"
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentImageIndex > 0) {
                currentImageIndex--;
                updateMainImage();
            }
        });
    }
    
    // Кнопка "Вперед"
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (currentExhibit && currentImageIndex < currentExhibit.images.length - 1) {
                currentImageIndex++;
                updateMainImage();
            }
        });
    }
    
    // Миниатюры
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', function() {
            const index = parseInt(this.dataset.index);
            currentImageIndex = index;
            updateMainImage();
        });
    });
    
    // Клавиатурная навигация
    document.addEventListener('keydown', function(e) {
        if (!isViewerOpen) return;
        
        if (e.key === 'ArrowLeft') {
            if (currentImageIndex > 0) {
                currentImageIndex--;
                updateMainImage();
            }
        } else if (e.key === 'ArrowRight') {
            if (currentExhibit && currentImageIndex < currentExhibit.images.length - 1) {
                currentImageIndex++;
                updateMainImage();
            }
        } else if (e.key === 'Escape') {
            closeExhibitViewer();
        }
    });
}

function initViewerButtons() {
    // Кнопка закрытия
    const closeBtn = document.getElementById('closeViewerBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeExhibitViewer);
    }
    
    // Кнопка "Поделиться"
    const shareBtn = document.querySelector('.share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            if (navigator.share) {
                navigator.share({
                    title: currentExhibit.title,
                    text: currentExhibit.description,
                    url: window.location.href
                });
            } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Ссылка скопирована в буфер обмена!');
            }
        });
    }
    
    // Кнопка "Сохранить"
    const saveBtn = document.querySelector('.save-btn');
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            alert('Экспонат добавлен в избранное!');
            this.innerHTML = '<i class="fas fa-check"></i> Сохранено';
            this.disabled = true;
        });
    }
    
    // Закрытие по клику на оверлей
    const overlay = document.querySelector('.exhibit-viewer-overlay');
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closeExhibitViewer();
            }
        });
    }
}

function closeExhibitViewer() {
    const viewer = document.getElementById('exhibitViewer');
    if (viewer) {
        viewer.remove();
    }
    
    // Разблокируем прокрутку
    document.body.style.overflow = '';
    isViewerOpen = false;
}

function addViewerStyles() {
    if (document.getElementById('viewerStyles')) return;
    
    const styles = `
        <style id="viewerStyles">
            .exhibit-viewer-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.95);
                z-index: 2000;
                display: flex;
                justify-content: center;
                align-items: center;
                animation: fadeIn 0.3s ease;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            .exhibit-viewer-container {
                background-color: #1a1a1a;
                width: 95%;
                max-width: 1200px;
                max-height: 90vh;
                border-radius: 15px;
                overflow: hidden;
                position: relative;
                border: 1px solid #333;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.7);
            }
            
            .close-viewer-btn {
                position: absolute;
                top: 15px;
                right: 15px;
                background: rgba(0, 0, 0, 0.7);
                border: none;
                color: white;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                font-size: 1.2rem;
                cursor: pointer;
                z-index: 10;
                transition: all 0.3s ease;
            }
            
            .close-viewer-btn:hover {
                background: #8b0000;
                transform: rotate(90deg);
            }
            
            .viewer-content {
                display: flex;
                flex-direction: column;
                height: 100%;
                overflow-y: auto;
            }
            
            @media (min-width: 992px) {
                .viewer-content {
                    flex-direction: row;
                }
            }
            
            .viewer-gallery {
                flex: 1.5;
                padding: 30px;
                background: #0a0a0a;
            }
            
            .main-image-container {
                position: relative;
                height: 400px;
                border-radius: 10px;
                overflow: hidden;
                background: #000;
                margin-bottom: 20px;
            }
            
            .main-image-container img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                display: block;
            }
            
            .image-nav {
                position: absolute;
                top: 50%;
                width: 100%;
                display: flex;
                justify-content: space-between;
                padding: 0 20px;
                transform: translateY(-50%);
            }
            
            .nav-btn {
                background: rgba(0, 0, 0, 0.7);
                border: none;
                color: white;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                font-size: 1.2rem;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .nav-btn:hover {
                background: #8b0000;
                transform: scale(1.1);
            }
            
            .image-counter-display {
                position: absolute;
                bottom: 15px;
                right: 15px;
                background: rgba(0, 0, 0, 0.7);
                color: white;
                padding: 5px 15px;
                border-radius: 20px;
                font-size: 0.9rem;
            }
            
            .thumbnail-container {
                display: flex;
                gap: 10px;
                overflow-x: auto;
                padding: 10px 0;
            }
            
            .thumbnail {
                width: 80px;
                height: 80px;
                border-radius: 5px;
                overflow: hidden;
                cursor: pointer;
                border: 2px solid transparent;
                flex-shrink: 0;
                transition: all 0.3s ease;
            }
            
            .thumbnail.active {
                border-color: #8b0000;
                transform: scale(1.05);
            }
            
            .thumbnail:hover {
                border-color: #a52a2a;
            }
            
            .thumbnail img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
            
            .viewer-info {
                flex: 1;
                padding: 30px;
                overflow-y: auto;
            }
            
            .viewer-title {
                color: #fff;
                font-size: 2.2rem;
                margin-bottom: 15px;
                font-family: 'Playfair Display', serif;
            }
            
            .viewer-meta {
                display: flex;
                flex-wrap: wrap;
                gap: 15px;
                margin-bottom: 25px;
                padding-bottom: 20px;
                border-bottom: 1px solid #333;
            }
            
            .meta-item {
                display: flex;
                align-items: center;
                gap: 8px;
                color: #aaa;
                font-size: 0.9rem;
            }
            
            .meta-item i {
                color: #8b0000;
            }
            
            .viewer-description {
                margin-bottom: 25px;
            }
            
            .viewer-description h3 {
                color: #8b0000;
                margin-bottom: 15px;
                font-size: 1.3rem;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .viewer-description p {
                color: #ccc;
                line-height: 1.7;
                font-size: 1.05rem;
            }
            
            .viewer-stats {
                display: flex;
                gap: 20px;
                margin-bottom: 25px;
            }
            
            .stat-box {
                background: #0a0a0a;
                padding: 15px;
                border-radius: 10px;
                text-align: center;
                flex: 1;
                border: 1px solid #333;
            }
            
            .stat-box i {
                font-size: 1.5rem;
                color: #8b0000;
                margin-bottom: 5px;
            }
            
            .stat-number {
                display: block;
                font-size: 1.8rem;
                font-weight: bold;
                color: white;
            }
            
            .stat-label {
                color: #aaa;
                font-size: 0.9rem;
            }
            
            .viewer-actions {
                display: flex;
                gap: 15px;
            }
            
            .action-btn {
                flex: 1;
                padding: 15px;
                border: none;
                border-radius: 8px;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }
            
            .share-btn {
                background: #333;
                color: white;
            }
            
            .share-btn:hover {
                background: #444;
            }
            
            .save-btn {
                background: #8b0000;
                color: white;
            }
            
            .save-btn:hover {
                background: #a52a2a;
            }
            
            @media (max-width: 768px) {
                .main-image-container {
                    height: 300px;
                }
                
                .viewer-title {
                    font-size: 1.8rem;
                }
                
                .viewer-actions {
                    flex-direction: column;
                }
                
                .nav-btn {
                    width: 40px;
                    height: 40px;
                }
            }
            
            @media (max-width: 576px) {
                .exhibit-viewer-container {
                    width: 100%;
                    height: 100%;
                    max-height: 100%;
                    border-radius: 0;
                }
                
                .main-image-container {
                    height: 250px;
                }
                
                .viewer-gallery,
                .viewer-info {
                    padding: 20px;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}

// ================================
// ФУНКЦИИ ДЛЯ ЭКСКУРСИЙ
// ================================

function renderTours() {
    const container = document.getElementById('toursContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    museumTours.forEach(tour => {
        const card = createTourCard(tour);
        container.appendChild(card);
    });
    
    updateTourCount();
}

function createTourCard(tour) {
    const card = document.createElement('div');
    card.className = 'tour-card';
    card.dataset.id = tour.id;
    
    card.innerHTML = `
        <div class="tour-image">
            <img src="${tour.image}" alt="${tour.title}" 
                 onerror="this.src='${getPlaceholderImage()}'">
            <div class="tour-number">${tour.number}</div>
        </div>
        <div class="tour-info">
            <h3 class="tour-title">${tour.title}</h3>
            <p class="tour-description">${tour.description}</p>
            <div class="tour-meta">
                <div class="tour-steps">
                    <i class="fas fa-list-ol"></i>
                    <span>${tour.steps} шагов</span>
                </div>
                <div class="tour-duration">
                    <i class="fas fa-clock"></i>
                    <span>${tour.duration}</span>
                </div>
            </div>
            <button class="start-tour-btn" data-id="${tour.id}">
                <i class="fas fa-play-circle"></i> Начать экскурсию
            </button>
        </div>
    `;
    
    const startBtn = card.querySelector('.start-tour-btn');
    startBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        openTourViewer(tour);
    });
    
    card.addEventListener('click', function() {
        openTourViewer(tour);
    });
    
    return card;
}

function updateTourCount() {
    const counter = document.getElementById('tourCount');
    if (counter) {
        counter.textContent = museumTours.length;
    }
}

function openTourViewer(tour) {
    currentTour = tour;
    currentStepIndex = 0;
    isTourOpen = true;
    
    // Создаем HTML для просмотрщика экскурсии
    const viewerHTML = `
        <div class="tour-viewer-overlay" id="tourViewer">
            <div class="tour-viewer-container">
                <button class="close-tour-btn" id="closeTourBtn">
                    <i class="fas fa-times"></i>
                </button>
                
                <div class="tour-viewer-content">
                    <div class="tour-step-content" id="tourStepContent">
                        <!-- Контент будет загружен через renderCurrentStep() -->
                    </div>
                    
                    <div class="tour-step-nav">
                        <button class="tour-nav-btn tour-prev-btn" id="prevTourStepBtn" disabled>
                            <i class="fas fa-arrow-left"></i> Назад
                        </button>
                        
                        <div class="tour-progress">
                            <div class="progress-bar">
                                <div class="progress-fill" id="tourProgressFill" style="width: 0%"></div>
                            </div>
                            <div class="progress-text" id="tourProgressText">Шаг 1 из ${tour.steps}</div>
                        </div>
                        
                        <div class="tour-current-info">
                            Экскурсия: "${tour.title}"
                        </div>
                        
                        <button class="tour-nav-btn tour-next-btn" id="nextTourStepBtn">
                            Далее <i class="fas fa-arrow-right"></i>
                        </button>
                        
                        <button class="tour-nav-btn tour-menu-btn" id="tourMenuBtn">
                            <i class="fas fa-list"></i> Меню
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Добавляем просмотрщик на страницу
    document.body.insertAdjacentHTML('beforeend', viewerHTML);
    
    // Блокируем прокрутку
    document.body.style.overflow = 'hidden';
    
    // Рендерим первый шаг
    renderCurrentStep();
    
    // Инициализируем навигацию
    initTourNavigation();
    
    // Добавляем стили для просмотрщика
    addTourViewerStyles();
}

function renderCurrentStep() {
    const content = document.getElementById('tourStepContent');
    const step = currentTour.stepsData[currentStepIndex];
    
    if (!content || !step) return;
    
    // Создаем HTML для шага
    let imagesHTML = '';
    if (step.images && step.images.length > 0) {
        imagesHTML = `
            <div class="tour-step-images">
                ${step.images.map(img => `
                    <div class="tour-step-image">
                        <img src="${img}" alt="Шаг ${step.step}" 
                             onerror="this.src='${getPlaceholderImage()}'">
                    </div>
                `).join('')}
            </div>
        `;
    }
    
    content.innerHTML = `
        <div class="tour-step-number">${step.step}</div>
        <h2 class="tour-step-title">${step.title}</h2>
        <div class="tour-step-description">${step.description}</div>
        ${imagesHTML}
    `;
    
    // Обновляем прогресс
    updateTourProgress();
}

function updateTourProgress() {
    const progressFill = document.getElementById('tourProgressFill');
    const progressText = document.getElementById('tourProgressText');
    
    if (!progressFill || !progressText) return;
    
    const progress = ((currentStepIndex + 1) / currentTour.steps) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Шаг ${currentStepIndex + 1} из ${currentTour.steps}`;
    
    // Обновляем состояние кнопок
    const prevBtn = document.getElementById('prevTourStepBtn');
    const nextBtn = document.getElementById('nextTourStepBtn');
    
    if (prevBtn) {
        prevBtn.disabled = currentStepIndex === 0;
    }
    
    if (nextBtn) {
        if (currentStepIndex === currentTour.steps - 1) {
            nextBtn.innerHTML = '<i class="fas fa-check"></i> Завершить';
        } else {
            nextBtn.innerHTML = 'Далее <i class="fas fa-arrow-right"></i>';
        }
    }
}

function initTourNavigation() {
    // Кнопка закрытия
    const closeBtn = document.getElementById('closeTourBtn');
    if (closeBtn) {
        closeBtn.addEventListener('click', closeTourViewer);
    }
    
    // Кнопка "Назад"
    const prevBtn = document.getElementById('prevTourStepBtn');
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentStepIndex > 0) {
                currentStepIndex--;
                renderCurrentStep();
                updateTourProgress();
            }
        });
    }
    
    // Кнопка "Далее"
    const nextBtn = document.getElementById('nextTourStepBtn');
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (currentStepIndex < currentTour.steps - 1) {
                currentStepIndex++;
                renderCurrentStep();
                updateTourProgress();
            } else {
                // Завершение экскурсии
                alert('Экскурсия завершена! Спасибо за внимание.');
                closeTourViewer();
            }
        });
    }
    
    // Кнопка "Меню"
    const menuBtn = document.getElementById('tourMenuBtn');
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            closeTourViewer();
            document.getElementById('tours').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    // Клавиатурная навигация
    document.addEventListener('keydown', function(e) {
        if (!isTourOpen) return;
        
        if (e.key === 'ArrowLeft') {
            if (currentStepIndex > 0) {
                currentStepIndex--;
                renderCurrentStep();
                updateTourProgress();
            }
        } else if (e.key === 'ArrowRight') {
            if (currentStepIndex < currentTour.steps - 1) {
                currentStepIndex++;
                renderCurrentStep();
                updateTourProgress();
            }
        } else if (e.key === 'Escape') {
            closeTourViewer();
        }
    });
    
    // Закрытие по клику на оверлей
    const overlay = document.querySelector('.tour-viewer-overlay');
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === this) {
                closeTourViewer();
            }
        });
    }
}

function closeTourViewer() {
    const viewer = document.getElementById('tourViewer');
    if (viewer) {
        viewer.remove();
    }
    
    // Разблокируем прокрутку
    document.body.style.overflow = '';
    isTourOpen = false;
}

function addTourViewerStyles() {
    if (document.getElementById('tourViewerStyles')) return;
    
    const styles = `
        <style id="tourViewerStyles">
            .tour-viewer-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.95);
                z-index: 3000;
                display: flex;
                justify-content: center;
                align-items: center;
                animation: fadeIn 0.3s ease;
                padding: 20px;
            }
            
            .tour-viewer-container {
                background-color: var(--card-bg);
                width: 100%;
                max-width: 1000px;
                max-height: 90vh;
                border-radius: 15px;
                overflow: hidden;
                position: relative;
                border: 1px solid var(--border-color);
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.7);
            }
            
            .close-tour-btn {
                position: absolute;
                top: 15px;
                right: 15px;
                background: rgba(0, 0, 0, 0.7);
                border: none;
                color: white;
                width: 40px;
                height: 40px;
                border-radius: 50%;
                font-size: 1.2rem;
                cursor: pointer;
                z-index: 10;
                transition: all 0.3s ease;
            }
            
            .close-tour-btn:hover {
                background: var(--accent-color);
                transform: rotate(90deg);
            }
            
            .tour-viewer-content {
                display: flex;
                flex-direction: column;
                height: 100%;
                overflow-y: auto;
            }
            
            .tour-step-content {
                flex: 1;
                padding: 40px;
                overflow-y: auto;
            }
            
            .tour-step-number {
                display: inline-block;
                background: var(--accent-color);
                color: white;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 1.5rem;
                margin-bottom: 20px;
            }
            
            .tour-step-title {
                color: white;
                font-size: 2.2rem;
                margin-bottom: 25px;
                font-family: 'Playfair Display', serif;
                line-height: 1.3;
            }
            
            .tour-step-description {
                color: #ccc;
                line-height: 1.8;
                font-size: 1.1rem;
                margin-bottom: 30px;
                white-space: pre-line;
            }
            
            .tour-step-images {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
                margin: 30px 0;
            }
            
            .tour-step-image {
                border-radius: 10px;
                overflow: hidden;
                border: 1px solid var(--border-color);
            }
            
            .tour-step-image img {
                width: 100%;
                height: 200px;
                object-fit: cover;
                display: block;
            }
            
            .tour-step-nav {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 25px 40px;
                background: var(--secondary-dark);
                border-top: 1px solid var(--border-color);
                gap: 15px;
            }
            
            .tour-progress {
                flex: 1;
                max-width: 300px;
            }
            
            .progress-bar {
                height: 6px;
                background: var(--border-color);
                border-radius: 3px;
                overflow: hidden;
                margin-bottom: 8px;
            }
            
            .progress-fill {
                height: 100%;
                background: var(--accent-color);
                border-radius: 3px;
                transition: width 0.3s ease;
            }
            
            .progress-text {
                color: var(--text-secondary);
                font-size: 0.9rem;
                text-align: center;
            }
            
            .tour-nav-btn {
                padding: 12px 25px;
                border: none;
                border-radius: 8px;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 10px;
                min-width: 140px;
                justify-content: center;
            }
            
            .tour-nav-btn:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
            
            .tour-prev-btn {
                background: transparent;
                border: 2px solid var(--border-color);
                color: var(--text-color);
            }
            
            .tour-prev-btn:hover:not(:disabled) {
                background: var(--border-color);
            }
            
            .tour-next-btn {
                background: var(--accent-color);
                color: white;
                border: 2px solid var(--accent-color);
            }
            
            .tour-next-btn:hover:not(:disabled) {
                background: var(--accent-light);
                border-color: var(--accent-light);
            }
            
            .tour-menu-btn {
                background: transparent;
                border: 2px solid var(--accent-color);
                color: var(--accent-color);
            }
            
            .tour-menu-btn:hover {
                background: var(--accent-color);
                color: white;
            }
            
            .tour-current-info {
                color: var(--text-secondary);
                font-size: 0.9rem;
                text-align: center;
            }
            
            @media (max-width: 768px) {
                .tour-viewer-container {
                    max-height: 100vh;
                    border-radius: 0;
                }
                
                .tour-step-content {
                    padding: 25px;
                }
                
                .tour-step-title {
                    font-size: 1.8rem;
                }
                
                .tour-step-nav {
                    flex-direction: column;
                    padding: 20px;
                }
                
                .tour-nav-btn {
                    width: 100%;
                    justify-content: center;
                }
                
                .tour-progress {
                    max-width: 100%;
                    margin-bottom: 15px;
                }
                
                .tour-step-images {
                    grid-template-columns: 1fr;
                }
            }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', styles);
}

// ================================
// ГАЛЕРЕЯ
// ================================

function renderGallery() {
    const container = document.getElementById('galleryContainer');
    if (!container) return;
    
    container.innerHTML = '';
    
    galleryImages.forEach(image => {
        const item = createGalleryItem(image);
        container.appendChild(item);
    });
}

function createGalleryItem(image) {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    
    item.innerHTML = `
        <div class="gallery-image">
            <img src="${image.image}" alt="${image.title}" 
                 onerror="this.src='${getPlaceholderImage()}'">
        </div>
        <div class="gallery-caption">${image.title}</div>
    `;
    
    item.addEventListener('click', function() {
        openGalleryModal(image);
    });
    
    return item;
}

function updateGalleryCount() {
    const counter = document.getElementById('galleryCount');
    if (counter) {
        counter.textContent = galleryImages.length;
    }
}

function openGalleryModal(image) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalDate = document.getElementById('modalDate');
    
    if (!modal || !modalImage || !modalTitle || !modalDescription || !modalDate) return;
    
    modalImage.src = image.image;
    modalImage.alt = image.title;
    modalTitle.textContent = image.title;
    modalDescription.textContent = image.description;
    modalDate.textContent = `Дата: ${image.date}`;
    
    modal.style.display = 'block';
}

// ================================
// МОДАЛЬНОЕ ОКНО ДЛЯ ГАЛЕРЕИ
// ================================

function initModal() {
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (!modal || !closeBtn) return;
    
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// ================================
// СТАТИСТИКА
// ================================

function animateStatistics() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.dataset.target);
        const step = target / 100;
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current).toLocaleString();
        }, 20);
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
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
    
    // Автоматическое выделение активного раздела при скролле
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navHeight = document.querySelector('header').offsetHeight;
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 50;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });
        
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });
}

// ================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ================================

function getPlaceholderImage() {
    return "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=80";
}

function checkImageLoad() {
    console.log("=== ПРОВЕРКА ЗАГРУЗКИ ИЗОБРАЖЕНИЙ ===");
    
    // Проверка экспонатов
    museumExhibits.forEach(exhibit => {
        console.log(`Экспонат: ${exhibit.title}`);
        
        exhibit.images.forEach((imgPath, index) => {
            const img = new Image();
            img.onload = () => {
                console.log(`  ✓ Изображение ${index + 1}: Загружено успешно`);
            };
            img.onerror = () => {
                console.log(`  ✗ Изображение ${index + 1}: Ошибка загрузки (${imgPath})`);
            };
            img.src = imgPath;
        });
    });
    
    // Проверка экскурсий
    museumTours.forEach(tour => {
        console.log(`Экскурсия: ${tour.title}`);
        
        // Проверка основного изображения экскурсии
        const mainImg = new Image();
        mainImg.onload = () => {
            console.log(`  ✓ Основное изображение: Загружено успешно`);
        };
        mainImg.onerror = () => {
            console.log(`  ✗ Основное изображение: Ошибка загрузки`);
        };
        mainImg.src = tour.image;
        
        // Проверка изображений в шагах
        tour.stepsData.forEach((step, stepIndex) => {
            step.images.forEach((imgPath, imgIndex) => {
                const img = new Image();
                img.onload = () => {
                    console.log(`  ✓ Шаг ${stepIndex + 1}, изображение ${imgIndex + 1}: Загружено успешно`);
                };
                img.onerror = () => {
                    console.log(`  ✗ Шаг ${stepIndex + 1}, изображение ${imgIndex + 1}: Ошибка загрузки`);
                };
                img.src = imgPath;
            });
        });
    });
}

// ================================
// КНОПКА ПОДДЕРЖКИ
// ================================

function initSupportButton() {
    const supportBtn = document.querySelector('.support-btn');
    if (supportBtn) {
        supportBtn.addEventListener('click', function() {
            alert('Спасибо за желание поддержать проект! В настоящее время мы принимаем пожертвования через банковский перевод. Пожалуйста, свяжитесь с нами по email: museum@blockade.ru');
        });
    }
}

// ================================
// ДОБАВЛЕНИЕ НОВЫХ ЭКСПОНАТОВ И ЭКСКУРСИЙ
// ================================

/*
ПРИМЕР ДОБАВЛЕНИЯ НОВОГО ЭКСПОНАТА:

{
    id: 4, // Увеличьте номер на 1
    title: "Название вашего экспоната",
    description: "Краткое описание (отображается в карточке)",
    fullDescription: "Полное подробное описание (отображается при просмотре)",
    category: "object", // document, photo, object, personal
    year: "1941",
    author: "Автор (если известен)",
    location: "Место нахождения",
    images: [
        "objects/object_4/img_1.jpg", // Пути к вашим изображениям
        "objects/object_4/img_2.jpg",
        "objects/object_4/img_3.jpg"
    ]
}
*/

/*
ПРИМЕР ДОБАВЛЕНИЯ НОВОЙ ЭКСКУРСИИ:

{
    id: 4, // Увеличьте номер
    number: "04",
    title: "Название вашей экскурсии",
    description: "Краткое описание экскурсии",
    duration: "10-15 минут",
    steps: 3, // Количество шагов
    image: "ссылка_на_изображение.jpg",
    stepsData: [
        {
            step: 1,
            title: "Название шага 1",
            description: "Подробное описание шага 1\\n\\nМожно использовать переносы строк",
            images: [
                "путь/к/изображению1.jpg",
                "путь/к/изображению2.jpg"
            ] // Может быть пустым массивом
        },
        {
            step: 2,
            title: "Название шага 2",
            description: "Описание шага 2",
            images: [] // Без изображений
        },
        // ... остальные шаги
    ]
}
*/
