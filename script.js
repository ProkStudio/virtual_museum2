// ================================
// КОНФИГУРАЦИЯ ЭКСПОНАТОВ
// ================================

const museumExhibits = [
    {
        id: 1,
        title: "Фляга",
        description: "Из нее пили",
        fullDescription: "Из нее пили солдаты воду во время войны",
        category: "photo",
        year: "-",
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
        description: "Головной убор солдата Красной Армии",
        fullDescription: "Пилотка - головной убор, который носили солдаты Красной Армии во время боев. В блокадном Ленинграде такие пилотки были у всех военнослужащих, защищавших город. Многие бойцы хранили в пилотках фотографии родных, письма от семьи или кусочки хлеба.",
        category: "object",
        year: "-",
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
        title: "Бидон для воды",
        description: "Металлический бидон для переноски воды",
        fullDescription: "Металлический бидон для воды - один из самых важных предметов в блокадном Ленинграде. Когда водопровод перестал работать, люди ходили за водой к Неве, Фонтанке и другим водоемам. В таком бидоне приносили 1-2 ведра воды в день на всю семью.",
        category: "object",
        year: "-",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_3/img_1.png",
            "objects/object_3/img_2.png", 
            "objects/object_3/img_3.png",
            "objects/object_3/img_4.png"
        ]
    },
    {
        id: 4,
        title: "Ленинградская поэма",
        description: "Ленинградская поэма, Ольга Берггольц",
        fullDescription: "Ленинградская поэма, Ольга Берггольц. Передала в музей Соволева М.В. - учитель литературы и русского языка школы №60",
        category: "object",
        year: "1942",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_4/img_1.jpeg",
        ]
    },
    {
        id: 5,
        title: "Часы",
        description: "soon",
        fullDescription: "soon",
        category: "object",
        year: "-",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_5/img_1.jpeg",
            "objects/object_5/img_2.jpeg", 
            "objects/object_5/img_3.jpeg",
            "objects/object_5/img_4.jpeg"
        ]
    },
    {
        id: 6,
        title: "Сертификат на блокадный хлеб",
        description: "Сертификат на изделие <БЛОКАДНЫЙ ХЛЕБ ЛЕНИНГРАДА>",
        fullDescription: "soon",
        category: "document",
        year: "-",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_6/img_1.jpeg",
            "objects/object_6/img_2.jpeg", 
            "objects/object_6/img_3.jpeg"
        ]
    },
    {
        id: 7,
        title: "Спичечный коробок",
        description: "Спичечный коробок со спичками блокадного Ленинграда",
        fullDescription: "soon",
        category: "object",
        year: "1942",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_7/img_1.jpeg",
            "objects/object_7/img_2.jpeg"
        ]
    },
    {
        id: 8,
        title: "Программка Седьмой симфонии",
        description: "soon",
        fullDescription: "soon",
        category: "object",
        year: "1942",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_8/img_1.jpg",
            "objects/object_8/img_2.jpg"
        ]
    },
    {
        id: 9,
        title: "Больничный лист",
        description: "soon",
        fullDescription: "soon",
        category: "document",
        year: "1942",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_9/img_1.jpg"
        ]
    },
    {
        id: 10,
        title: "Немецкие оккупационные деньги",
        description: "soon",
        fullDescription: "soon",
        category: "object",
        year: "-",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_10/img_1.jpg"
        ]
    },
    {
        id: 11,
        title: "Характеристика бойца",
        description: "soon",
        fullDescription: "soon",
        category: "object",
        year: "1945",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_11/img_1.jpg"
        ]
    },
    {
        id: 12,
        title: "Священная земля",
        description: "soon",
        fullDescription: "soon",
        category: "object",
        year: "1945",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_12/img_1.jpg"
        ]
    },
    {
        id: 13,
        title: "Красноармейская книжка",
        description: "soon",
        fullDescription: "soon",
        category: "object",
        year: "1945",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_13/img_1.jpg"
        ]
    },
    {
        id: 14,
        title: "Красноармейская книжка",
        description: "soon",
        fullDescription: "soon",
        category: "object",
        year: "1945",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_14/img_1.jpg"
        ]
    },
    {
        id: 15,
        title: "Текст военной присяги",
        description: "soon",
        fullDescription: "soon",
        category: "object",
        year: "-",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_15/img_1.jpg",
            "objects/object_15/img_2.jpg"
        ]
    },
    {
        id: 16,
        title: "Портсигар",
        description: "soon",
        fullDescription: "soon",
        category: "object",
        year: "-",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_16/img_1.jpg",
            "objects/object_16/img_2.jpg"
        ]
    },
    {
        id: 17,
        title: "Гимнастерка",
        description: "soon",
        fullDescription: "soon",
        category: "object",
        year: "-",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_17/img_1.jpg"
        ]
    },
    {
        id: 18,
        title: "Погоны ефрейтора",
        description: "soon",
        fullDescription: "soon",
        category: "object",
        year: "-",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_18/img_1.jpg",
            "objects/object_18/img_2.jpg"
        ]
    },
    {
        id: 19,
        title: "Портмоне",
        description: "soon",
        fullDescription: "soon",
        category: "object",
        year: "-",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_19/img_1.jpg",
            "objects/object_19/img_2.jpg"
        ]
    },
    {
        id: 20,
        title: "Бритвенный прибор",
        description: "soon",
        fullDescription: "soon",
        category: "object",
        year: "-",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_20/img_1.jpg",
            "objects/object_20/img_2.jpg",
            "objects/object_20/img_3.jpg"
        ]
    },
    {
        id: 21,
        title: "Кружка",
        description: "soon",
        fullDescription: "soon",
        category: "object",
        year: "-",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_21/img_1.jpg",
            "objects/object_21/img_2.jpg",
            "objects/object_21/img_3.jpg",
            "objects/object_21/img_4.jpg",
            "objects/object_21/img_5.jpg"
        ]
    },
    {
        id: 22,
        title: "Фляга",
        description: "soon",
        fullDescription: "soon",
        category: "object",
        year: "-",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_22/img_1.jpg",
            "objects/object_22/img_2.jpg"
        ]
    },
    {
        id: 23,
        title: "Письма",
        description: "soon",
        fullDescription: "soon",
        category: "object",
        year: "-",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_23/img_1.jpg",
            "objects/object_23/img_2.jpg",
            "objects/object_23/img_3.jpg"
        ]
    },
    {
        id: 24,
        title: "Кодограмма",
        description: "soon",
        fullDescription: "soon",
        category: "object",
        year: "-",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_24/img_1.jpg"
        ]
    },
    {
        id: 25,
        title: "Фотография",
        description: "soon",
        fullDescription: "soon",
        category: "object",
        year: "-",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_25/img_1.jpg"
        ]
    },
    {
        id: 26,
        title: "Послание",
        description: "soon",
        fullDescription: "soon",
        category: "object",
        year: "-",
        author: "Неизвестен",
        location: "Ленинград",
        images: [
            "objects/object_26/img_1.jpg",
            "objects/object_26/img_2.jpg"
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
        title: "По льду и под огнём: Ледовая Дорога Жизни",
        description: "Детальная экскурсия о создании, работе и героях ледовой военно-автомобильной дороги №101 — единственной артерии, связавшей блокадный Ленинград с Большой землёй в первую страшную зиму.",
        duration: "10-15 минут",
        steps: 6,
        image: "https://avatars.mds.yandex.net/i?id=98b1a60c2fd60d0a3a0732b735697cf3447383a8-4344310-images-thumbs&n=13?w=800",
        stepsData: [
            {
                step: 1,
                title: "Блокадное кольцо: приговор или вызов?",
                description: "8 сентября 1941 года с захватом Шлиссельбурга замкнулось блокадное кольцо. В окружении оказалось около 2,5 миллионов человек. План гитлеровского командования был не завоевать город, а стереть его с лица земли путём тотальной блокады. После пожара на Бадаевских складах продовольственные запасы стали катастрофически таять. К ноябрю 1941 года норма выдачи хлеба для рабочих упала до 250 граммов, для всех остальных — до 125 граммов. Этот хлеб состоял из муки, целлюлозы, жмыха и обойной пыли. Город стоял на пороге голодной смерти. Единственной ниточкой, связывавшей его с внешним миром, оставалось суровое Ладожское озеро.",
                images: [
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Siege_of_Leningrad%2C_1941-09-21.svg/1920px-Siege_of_Leningrad%2C_1941-09-21.svg.png",
                    "https://вдпо.рф/img/photo/443209d1-0ce4-4b92-96c2-c880b6b0c820.jpg"
                ]
            },
            {
                step: 2,
                title: "Приказ №00172: Рождение артерии на льду",
                description: "19 сентября 1941 года Военный совет Ленинградского фронта подписал постановление об организации автотракторной дороги через Ладогу. Создание стабильной трассы по озеру с его коварными течениями и штормами было невероятной инженерной задачей. Работа началась под постоянными обстрелами. 20 ноября по тонкому, неокрепшему льду отправился первый санно-гужевой обоз старшего лейтенанта М.С. Мурова, доставивший 63 тонны муки. 22 ноября в путь вышла первая автоколонна из 60 полуторок (ГАЗ-АА). Так родилась Военно-автомобильная дорога №101, которую ленинградцы с надеждой назвали «Дорогой Жизни».",
                images: [
                    "https://rmbs-ufa.ru/images/2021/11/Ladoga/09gqxc4keiQ.jpg",
                    "https://topwar.ru/uploads/posts/2021-11/1637354850_55577-main.jpg"
                ]
            },
            {
                step: 3,
                title: "Механизм жизни: люди и машины на ледовом фронте",
                description: "Дорога Жизни была сложнейшим инженерным организмом. Каждую ночь дорожники замеряли толщину льда, расставляли вешки и фонари, которые часто сносило ветром или уничтожали снаряды. Ключевой фигурой стала девушка-регулировщица, которая часами стояла на морозе, указывая путь колоннам. Главными героями стали водители «полуторок». Они совершали по 4-5 рейсов в сутки, перевозя за смену до 5 тонн груза. Машины шли с затемнёнными фарами, не останавливаясь при обстрелах. Многие водители месяцами не выходили из кабин, превращаясь в «многорейсовиков». Их подвиг был ежедневным балансированием на грани жизни и смерти.",
                images: [
                    "https://avatars.mds.yandex.net/i?id=b4f3705d831557e6fa6b966267ed058d_l-5661135-images-thumbs&n=13",
                    "https://i.ytimg.com/vi/03prg8ClEfc/maxresdefault.jpg",
                    "https://waralbum.ru/wp-content/uploads/2016/02/Trassa-ledyanaya-u-derevni-Kokorevo_1942.jpg"
                ]
            },
            {
                step: 4,
                title: "Цифры и судьбы: цена хлеба и цена жизни",
                description: "За 152 дня работы первой блокадной зимы по ледовой трассе было доставлено 361 109 тонн грузов, в основном продовольствия. Обратными рейсами из города было эвакуировано более 550 тысяч ленинградцев — детей, женщин, стариков, раненых. Благодаря этим поставкам с 25 декабря 1941 года в городе впервые были повышены хлебные нормы. Однако цена была страшной. Из-за бомбёжек, артобстрелов и полыней под лёд ушло более 1000 грузовиков. Вдоль трассы возникали стихийные кладбища для погибших при эвакуации. Каждая тонна муки и каждый спасённый человек оплачивались риском и жизнями тысяч людей.",
                images: [
                    "https://proza.ru/pics/2018/08/17/1367.jpg"
                ]
            },
            {
                step: 5,
                title: "Щит над Ладогой: оборона хрупкой трассы",
                description: "Ледовая дорога была идеальной мишенью для немецкой авиации. Для её защиты был создан целый Ладожский дивизионный район ПВО. Зенитные батареи и пулемётные расчёты выставлялись прямо на лёд, по обе стороны трассы, в шахматном порядке. Бойцы жили в палатках при морозе, постоянно рискуя провалиться под лёд. Помимо ПВО, для подавления вражеской артиллерии привлекались реактивные миномёты «Катюши» и корабли Балтийского флота. Без этого стального щита, без ежесекундного прикрытия работа Дороги Жизни была бы невозможна. Подвиг зенитчиков, связистов и сапёров — неотъемлемая часть этой истории.",
                images: [
                    "https://cdnn1.img.sputnik-abkhazia.info/img/102292/96/1022929685_0:192:2954:1854_2072x0_60_0_0_482ac31049bab735d403be09b3ba49af.jpg",
                    "https://avatars.mds.yandex.net/i?id=85d96a1baf24bdc1df92092ebf3f69c2_l-5877671-images-thumbs&n=13"
                ]
            },
            {
                step: 6,
                title: "Наследие: от ледовой трассы к Зелёному поясу Славы",
                description: "Подвиг Дороги Жизни не был забыт. После войны вдоль всей линии обороны Ленинграда был создан мемориальный комплекс «Зелёный пояс Славы». На местах ключевых событий встали памятники. «Разорванное кольцо» у Вагановского спуска символизирует прорыв энергетической блокады. «Цветок жизни» напоминает о детях блокадного города. Бронзовая «Полуторка» на Румболовской горе увековечила подвиг шофёров. В посёлке Осиновец работает музей, где можно увидеть подлинные машины и орудия. Дорога Жизни — это не только трасса на карте, а дорога беспримерного мужества, ставшая для осаждённого города путём к спасению и символом несгибаемой воли к жизни.",
                images: [
                    "https://resize.tripster.ru/eZ_zEJmQqmE9ZlE7OHEPdsRtzOk=/fit-in/1080x810/filters:no_upscale()/https://cdn.tripster.ru/photos/3271d069-85f2-4b4d-8654-cbb83e844918.jpg"
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
    
    // Создаем HTML для просмотрщика экскурсии (полноэкранный)
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
                             onerror="this.src='${getPlaceholderImage()}'"
                             style="max-width: 100%; height: auto; object-fit: contain;">
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
                padding: 0;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            .tour-viewer-container {
                background-color: var(--card-bg);
                width: 100%;
                height: 100%;
                max-width: 100%;
                max-height: 100%;
                border-radius: 0;
                overflow: hidden;
                position: relative;
                border: none;
                box-shadow: none;
            }
            
            .close-tour-btn {
                position: fixed;
                top: 25px;
                right: 25px;
                background: rgba(0, 0, 0, 0.7);
                border: none;
                color: white;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                font-size: 1.5rem;
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
                padding: 50px;
                overflow-y: auto;
                max-width: 1200px;
                margin: 0 auto;
                width: 100%;
            }
            
            .tour-step-number {
                display: inline-block;
                background: var(--accent-color);
                color: white;
                width: 60px;
                height: 60px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-weight: bold;
                font-size: 1.8rem;
                margin-bottom: 30px;
            }
            
            .tour-step-title {
                color: white;
                font-size: 2.8rem;
                margin-bottom: 30px;
                font-family: 'Playfair Display', serif;
                line-height: 1.3;
            }
            
            .tour-step-description {
                color: #ccc;
                line-height: 1.8;
                font-size: 1.3rem;
                margin-bottom: 40px;
                white-space: pre-line;
            }
            
            .tour-step-images {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
                gap: 30px;
                margin: 40px 0;
            }
            
            .tour-step-image {
                border-radius: 15px;
                overflow: hidden;
                border: 2px solid var(--border-color);
                position: relative;
                background: var(--secondary-dark);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                min-height: 300px;
            }
            
            .tour-step-image img {
                max-width: 100%;
                max-height: 500px;
                height: auto;
                object-fit: contain;
                display: block;
                border-radius: 10px;
            }
            
            .tour-step-nav {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 30px 50px;
                background: var(--secondary-dark);
                border-top: 2px solid var(--border-color);
                gap: 20px;
            }
            
            .tour-progress {
                flex: 1;
                max-width: 400px;
            }
            
            .progress-bar {
                height: 8px;
                background: var(--border-color);
                border-radius: 4px;
                overflow: hidden;
                margin-bottom: 10px;
            }
            
            .progress-fill {
                height: 100%;
                background: var(--accent-color);
                border-radius: 4px;
                transition: width 0.3s ease;
            }
            
            .progress-text {
                color: var(--text-secondary);
                font-size: 1rem;
                text-align: center;
            }
            
            .tour-nav-btn {
                padding: 15px 30px;
                border: none;
                border-radius: 10px;
                font-size: 1.1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 160px;
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
                font-size: 1rem;
                text-align: center;
            }
            
            @media (max-width: 1200px) {
                .tour-step-content {
                    padding: 40px;
                }
                
                .tour-step-title {
                    font-size: 2.4rem;
                }
                
                .tour-step-images {
                    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
                }
            }
            
            @media (max-width: 992px) {
                .tour-step-content {
                    padding: 35px;
                }
                
                .tour-step-title {
                    font-size: 2rem;
                }
                
                .tour-step-description {
                    font-size: 1.2rem;
                }
                
                .tour-step-images {
                    grid-template-columns: 1fr;
                    gap: 25px;
                }
                
                .tour-step-image {
                    min-height: 250px;
                }
                
                .tour-step-image img {
                    max-height: 400px;
                }
                
                .tour-step-nav {
                    padding: 25px 35px;
                    gap: 15px;
                }
                
                .tour-nav-btn {
                    padding: 12px 25px;
                    min-width: 140px;
                    font-size: 1rem;
                }
            }
            
            @media (max-width: 768px) {
                .tour-step-content {
                    padding: 30px;
                }
                
                .tour-step-title {
                    font-size: 1.8rem;
                }
                
                .tour-step-description {
                    font-size: 1.1rem;
                }
                
                .tour-step-number {
                    width: 50px;
                    height: 50px;
                    font-size: 1.5rem;
                }
                
                .tour-step-image {
                    min-height: 200px;
                    padding: 15px;
                }
                
                .tour-step-image img {
                    max-height: 350px;
                }
                
                .tour-step-nav {
                    flex-direction: column;
                    padding: 20px 30px;
                    gap: 15px;
                }
                
                .tour-nav-btn {
                    width: 100%;
                    justify-content: center;
                }
                
                .tour-progress {
                    max-width: 100%;
                    margin-bottom: 15px;
                }
                
                .close-tour-btn {
                    top: 20px;
                    right: 20px;
                    width: 45px;
                    height: 45px;
                }
            }
            
            @media (max-width: 576px) {
                .tour-step-content {
                    padding: 25px;
                }
                
                .tour-step-title {
                    font-size: 1.6rem;
                }
                
                .tour-step-description {
                    font-size: 1rem;
                }
                
                .tour-step-image {
                    min-height: 180px;
                    padding: 10px;
                }
                
                .tour-step-image img {
                    max-height: 300px;
                }
                
                .close-tour-btn {
                    top: 15px;
                    right: 15px;
                    width: 40px;
                    height: 40px;
                    font-size: 1.3rem;
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
