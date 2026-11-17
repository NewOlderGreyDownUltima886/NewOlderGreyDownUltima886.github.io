// data.js
// Полная база данных ТТК (Обновлено 01.06)

const categories = [
    // Из листа "Б_А коктейли, Шоты"
    { id: 'shots', name: 'Шоты забористые', desc: 'Крепкие и яркие' },
    { id: 'tea', name: 'Чай', desc: 'Согревающие и авторские' },
    { id: 'lemonades', name: 'Лимонады', desc: 'Освежающие миксы' },
    { id: 'milkshakes', name: 'Милкшейки', desc: 'Сладкие и густые' },
    { id: 'cold-tea', name: 'Холодные чаи', desc: 'Освежающие шейки' },
    
    // Из листа "Коктейли по ГОСТу"
    { id: 'gost', name: 'Коктейли по ГОСТу', desc: 'Классика жанра' },
    
    // Из листа "Молодежная Запрещёнка"
    { id: 'youth', name: 'Молодежная Запрещёнка', desc: 'Бунтарские миксы' },
    
    // Из листа "Коктейли Буржуйские"
    { id: 'premium', name: 'Коктейли Буржуйские', desc: 'Премиум-класс' }
];

const menuData = [
    // ================= ШОТЫ ЗАБОРИСТЫЕ =================
    {
        id: 'b-52',
        category: 'shots',
        name: 'Б-52',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Cocktail_B52_Isolated.png',
        method: 'Слои',
        glass: 'Шот (45мл)',
        ingredients: [
            { name: 'Кофейный Ликер Фрукошульц / Гамбини', amount: '15', unit: 'мл' },
            { name: 'Сливочный ликер Царский / (Ирина Любовь)', amount: '15', unit: 'мл' },
            { name: 'Ликер Трипл Сек Фрукошульц / Гамбини', amount: '15', unit: 'мл' }
        ]
    },
    {
        id: 'b-53',
        category: 'shots',
        name: 'Б-53',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/B-52_Splash.jpg/800px-B-52_Splash.jpg',
        method: 'Слои',
        glass: 'Шот (45мл)',
        ingredients: [
            { name: 'Кофейный Ликер Фрукошульц / Гамбини', amount: '15', unit: 'мл' },
            { name: 'Сливочный ликер Царский / (Ирина Любовь)', amount: '15', unit: 'мл' },
            { name: 'Настойка Абсент Фрукошульц/Ксента/Оазиз', amount: '15', unit: 'мл' }
        ]
    },
    {
        id: 'fast-dead',
        category: 'shots',
        name: 'Быстрый и мёртвый',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop',
        method: 'Слои',
        glass: 'Шот (45мл)',
        ingredients: [
            { name: 'Самбука Ламоника / Фрукошульц', amount: '15', unit: 'мл' },
            { name: 'Сливочный ликер Царский / (Ирина Любовь)', amount: '15', unit: 'мл' },
            { name: 'Настойка Абсент Фрукошульц / Ксента / Оазиз', amount: '15', unit: 'мл' }
        ]
    },
    {
        id: 'popcorn',
        category: 'shots',
        name: 'Попкорн',
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop',
        method: 'Шейк (без льда)',
        glass: 'Шот (45мл)',
        ingredients: [
            { name: 'СуперДжусс', amount: '15', unit: 'мл' },
            { name: 'Водка Коктейльная Беленькая / Кедровица / Русская Валюта', amount: '15', unit: 'мл' },
            { name: 'Вода Фильтрованная', amount: '5', unit: 'мл' },
            { name: 'Сироп ПрофСироп "Попкорн"', amount: '10', unit: 'мл' }
        ]
    },
    {
        id: 'kis-kis',
        category: 'shots',
        name: 'Кис-кис (2 шт)',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cb699?q=80&w=600&auto=format&fit=crop',
        method: 'Шейк (без льда)',
        glass: 'Шот (45мл+45мл)',
        ingredients: [
            { name: 'Ликер "Амаретто" Фрукошульц / Гамбини', amount: '15', unit: 'мл' },
            { name: 'Ликер Черри Бренди Фрукошульц / Гамбини', amount: '10', unit: 'мл' },
            { name: 'Молоко Коровье 3,2%', amount: '25', unit: 'мл' },
            { name: 'Сливки 22%', amount: '25', unit: 'мл' },
            { name: 'Сироп ПрофСироп "Малина"', amount: '10', unit: 'мл' }
        ]
    },
    {
        id: 'empress',
        category: 'shots',
        name: 'Шальная Императрица',
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=600&auto=format&fit=crop',
        method: 'Билд',
        glass: 'Шот (45мл)',
        ingredients: [
            { name: 'Текила ЛаПавеса', amount: '15', unit: 'мл' },
            { name: 'СуперДжусс', amount: '15', unit: 'мл' },
            { name: 'Ликер Трипл Сек Фрукошульц / Гамбини', amount: '15', unit: 'мл' },
            { name: 'Соль (окаемка)', amount: '2', unit: 'Гр' }
        ]
    },
    {
        id: 'morning-after',
        category: 'shots',
        name: 'Утро после Корпоротива',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop',
        method: 'Билд',
        glass: 'Шот (45мл)',
        ingredients: [
            { name: 'водка «Тундра»', amount: '15', unit: 'мл' },
            { name: 'Кофейный Ликер Фрукошульц / Гамбини', amount: '15', unit: 'мл' },
            { name: 'Настойка Ирина Любовь', amount: '15', unit: 'мл' }
        ]
    },
    {
        id: 'who-are-you',
        category: 'shots',
        name: 'Вы кто такие? Я вас не звал!',
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop',
        method: 'Билд',
        glass: 'Шот (45мл)',
        ingredients: [
            { name: 'Джин Баристер Бартендерс Эдишен Шып', amount: '15', unit: 'мл' },
            { name: 'СуперДжусс', amount: '5', unit: 'мл' },
            { name: 'Ликер Биттер Тундра', amount: '15', unit: 'мл' },
            { name: 'Пюре-концентрат Винтаж "Дыня"', amount: '10', unit: 'мл' }
        ]
    },

    // ================= ЧАЙ =================
    {
        id: 'grape-jasmine',
        category: 'tea',
        name: 'Виноград-Жасмин',
        image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=600&auto=format&fit=crop',
        method: 'Заваривание',
        glass: 'Чайник',
        ingredients: [
            { name: 'Чайная основа виногра-жасмин', amount: '80', unit: 'мл' },
            { name: 'Чай «Молочный Улул»', amount: '8', unit: 'гр' },
            { name: 'Сок лимона', amount: '10', unit: 'мл' }
        ]
    },
    {
        id: 'seabuckthorn-ginger',
        category: 'tea',
        name: 'Облепиха-ИмбирЬ',
        image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop',
        method: 'Заваривание',
        glass: 'Чайник',
        ingredients: [
            { name: 'Чай черный “Ассам Дижу”', amount: '10', unit: 'гр' },
            { name: 'Ягода c/м “Облепиха”', amount: '60', unit: 'гр' },
            { name: 'Овощи свежие “Имбирь”', amount: '15', unit: 'гр' },
            { name: 'Чайная основа Облепиха', amount: '50', unit: 'гр' }
        ]
    },
    {
        id: 'spice-berries',
        category: 'tea',
        name: 'Ягоды пряности',
        image: 'https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=600&auto=format&fit=crop',
        method: 'Заваривание',
        glass: 'Чайник',
        ingredients: [
            { name: 'Чай “Дерзкий Фрукт” (красный)', amount: '10', unit: 'гр' },
            { name: 'Чайная основа Вишня', amount: '30', unit: 'гр' },
            { name: 'Ягода вишня', amount: '50', unit: 'гр' },
            { name: 'Корица палочка', amount: '2', unit: 'гр' },
            { name: 'Гвоздика цельная', amount: '1', unit: 'гр' },
            { name: 'Бадьян', amount: '1', unit: 'гр' },
            { name: 'Слайс апельсина', amount: '10', unit: 'гр' }
        ]
    },

    // ================= ЛИМОНАДЫ =================
    {
        id: 'strawberry-basil',
        category: 'lemonades',
        name: 'Клубника-базилик',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop',
        method: 'Билд',
        glass: '1 л / 250 мл',
        ingredients: [
            { name: 'чайная основа базилик', amount: '40 / 10', unit: 'мл' },
            { name: 'сироп клубника', amount: '60 / 15', unit: 'мл' },
            { name: 'кислота', amount: '60 / 15', unit: 'мл' },
            { name: 'газ вода', amount: 'топ ап', unit: '' }
        ]
    },
    {
        id: 'sparkling-grape',
        category: 'lemonades',
        name: 'Игристый виноград',
        image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=600&auto=format&fit=crop',
        method: 'Билд',
        glass: '1 л / 250 мл',
        ingredients: [
            { name: 'чайная основа виноград-жасмин', amount: '120 / 30', unit: 'мл' },
            { name: 'кислота', amount: '30 / 15', unit: 'мл' },
            { name: 'газ вода', amount: 'топ ап', unit: '' }
        ]
    },
    {
        id: 'summer-sochi',
        category: 'lemonades',
        name: 'Лето в Сочи',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600&auto=format&fit=crop',
        method: 'Билд',
        glass: '1 л / 250 мл',
        ingredients: [
            { name: 'чайная основа мята-лайм', amount: '120 / 30', unit: 'мл' },
            { name: 'кислота', amount: '30 / 15', unit: 'мл' },
            { name: 'газ вода', amount: 'топ ап', unit: '' }
        ]
    },
    {
        id: 'pina-colada-zero',
        category: 'lemonades',
        name: 'Пина-Колада 0%',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=600&auto=format&fit=crop',
        method: 'Блендер',
        glass: 'Слинг',
        ingredients: [
            { name: 'сок ананас', amount: '80', unit: 'мл' },
            { name: 'молоко', amount: '100', unit: 'мл' },
            { name: 'сироп кокос', amount: '30', unit: 'мл' }
        ]
    },

    // ================= МИЛКШЕЙКИ =================
    {
        id: 'milkshake-strawberry',
        category: 'milkshakes',
        name: 'Милкшейк Клубничный',
        image: 'https://images.unsplash.com/photo-1572490122747-3968b75cb699?q=80&w=600&auto=format&fit=crop',
        method: 'Блендер',
        glass: 'Айриш бокал',
        ingredients: [
            { name: 'мороженое', amount: '80', unit: 'гр' },
            { name: 'молоко', amount: '150', unit: 'мл' },
            { name: 'сироп клубника', amount: '15', unit: 'мл' },
            { name: 'топинг клубника', amount: '15', unit: 'мл' },
            { name: 'мята', amount: '1', unit: 'гр' },
            { name: 'клубника с/м', amount: '2', unit: 'гр' },
            { name: 'взбитые сливки', amount: '30', unit: 'мл' }
        ]
    },
    {
        id: 'milkshake-oreo',
        category: 'milkshakes',
        name: 'Милкшейк Орео',
        image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=600&auto=format&fit=crop',
        method: 'Блендер',
        glass: 'Айриш бокал',
        ingredients: [
            { name: 'мороженое', amount: '80', unit: 'гр' },
            { name: 'молоко', amount: '150', unit: 'мл' },
            { name: 'печенье орео', amount: '45', unit: 'гр' },
            { name: 'сироп брауни', amount: '15', unit: 'мл' },
            { name: 'топинг шоколад', amount: '15', unit: 'мл' },
            { name: 'взбитые сливки', amount: '30', unit: 'мл' }
        ]
    },

    // ================= ХОЛОДНЫЕ ЧАИ =================
    {
        id: 'cold-cranberry',
        category: 'cold-tea',
        name: 'Брусника-Клюква',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600&auto=format&fit=crop',
        method: 'Шейк',
        glass: 'Хайбол',
        ingredients: [
            { name: 'Основа брусника-клюква', amount: '30', unit: 'мл' },
            { name: 'Супер Джус', amount: '15', unit: 'мл' },
            { name: 'Сахарный сироп', amount: '15', unit: 'мл' },
            { name: 'Завар чая «Ассам»', amount: '120', unit: 'мл' },
            { name: 'Газ вода', amount: 'топ ап', unit: '' }
        ]
    },
    {
        id: 'cold-mint-lime',
        category: 'cold-tea',
        name: 'Мята-Лайм',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=600&auto=format&fit=crop',
        method: 'Шейк',
        glass: 'Хайбол',
        ingredients: [
            { name: 'Основа мята-лайм', amount: '30', unit: 'мл' },
            { name: 'Супер Джус', amount: '15', unit: 'мл' },
            { name: 'Сахарный сироп', amount: '15', unit: 'мл' },
            { name: 'Завар чая «Ассам»', amount: '120', unit: 'мл' },
            { name: 'Газ вода', amount: 'топ ап', unit: '' }
        ]
    },

    // ================= КОКТЕЙЛИ ПО ГОСТУ =================
    {
        id: 'gost-cosmopolitan',
        category: 'gost',
        name: 'Космополитен',
        image: 'https://uk.inshaker.com/uploads/cocktail/promo/29/wide_1629716851-%D0%9A%D0%BE%D1%81%D0%BC%D0%BE%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B5%D0%BD.jpg',
        method: 'Хард Шейк, Стрейн',
        glass: 'Шале',
        ice: '',
        ingredients: [
            { name: 'Водка "Тундра"/"Русская Валюта"', amount: '40', unit: 'мл' },
            { name: 'Ликер Трипл Сек Фрукошульц/Гамбини', amount: '20', unit: 'мл' },
            { name: 'Лимонный кордиал', amount: '15', unit: 'мл' },
            { name: 'Сироп сахарный', amount: '15', unit: 'мл' },
            { name: 'Сок Вишня "Добрый"/"ABC"', amount: '50', unit: 'мл' }
        ]
    },
    {
        id: 'gost-whiskey-cola',
        category: 'gost',
        name: 'Виски Кола',
        image: 'https://i2-prod.mirror.co.uk/article30513260.ece/ALTERNATES/s1200f/0_Cocktails.jpg',
        method: 'Билд',
        glass: 'Рокс',
        ice: 'Квадратный лёд',
        ingredients: [
            { name: 'Виски "Блэк Бист"', amount: '40', unit: 'мл' },
            { name: 'Вода Кока-Кола "Добрый"', amount: '150', unit: 'мл' }
        ]
    },
    {
        id: 'gost-cuba-libre',
        category: 'gost',
        name: 'Куба Либре',
        image: 'https://cdn.lentochka.lenta.com/resample/464x464/images/images/recipe/globalassets/recepty/k/--193/--_.jpg',
        method: 'Билд',
        glass: 'Рокс',
        ice: 'Квадратный лёд',
        ingredients: [
            { name: 'Ром "Скелетон"', amount: '40', unit: 'мл' },
            { name: 'Вода Кока-Кола "Добрый"', amount: '150', unit: 'мл' },
            { name: 'Фрукты свежие "Лайм"', amount: '20', unit: 'Гр' }
        ]
    },
    {
        id: 'gost-gin-tonic',
        category: 'gost',
        name: 'Джин Тоник',
        image: 'https://s0.rbk.ru/v6_top_pics/media/img/5/14/347472395737145.webp',
        method: 'Билд',
        glass: 'Рокс',
        ice: 'Квадратный лёд',
        ingredients: [
            { name: 'Джин "Баристер Драй"', amount: '40', unit: 'мл' },
            { name: 'Тоник "Рич"', amount: '150', unit: 'мл' },
            { name: 'Фрукты свежие "Лимон"', amount: '20', unit: 'Гр' }
        ]
    },
    {
        id: 'gost-long-island',
        category: 'gost',
        name: 'Лонг-Айленд',
        image: 'https://simplewine.ru/upload/medialibrary/19a/19a0ce76977ac1359b4e4377ce62db22.png',
        method: 'Хард Шейк',
        glass: 'Слинг',
        ice: 'Квадратный лёд',
        ingredients: [
            { name: 'Водка "Тундра"/"Русская Валюта"', amount: '15', unit: 'мл' },
            { name: 'Ром "Скелетон"', amount: '15', unit: 'мл' },
            { name: 'Джин "Баристер Драй"', amount: '15', unit: 'мл' },
            { name: 'Текила "Ла Павеса"', amount: '15', unit: 'мл' },
            { name: 'Ликер Трипл Сек Фрукошульц/Гамбини', amount: '15', unit: 'мл' },
            { name: 'Лимонный кордиал', amount: '15', unit: 'мл' },
            { name: 'Сироп сахарный', amount: '15', unit: 'мл' },
            { name: 'Вода Кока-Кола "Добрый"', amount: '100', unit: 'мл' },
            { name: 'Фрукты свежие "Лимон"', amount: '20', unit: 'гр' }
        ]
    },
    {
        id: 'gost-piter',
        category: 'gost',
        name: 'В Питере пить',
        image: 'https://avatars.mds.yandex.net/i?id=1b286cc91e48cc1f09b14426924c583b_l-5367291-images-thumbs&n=13',
        method: 'Хард Шейк',
        glass: 'Слинг',
        ice: 'Квадратный лёд',
        ingredients: [
            { name: 'Водка "Тундра"/"Русская Валюта"', amount: '40', unit: 'мл' },
            { name: 'Биттер Вишневый «Тундра»', amount: '20', unit: 'мл' },
            { name: 'Вермут красный "Чинзано Россо"', amount: '20', unit: 'мл' },
            { name: 'Шампанское «Российское»', amount: '80', unit: 'мл' },
            { name: 'Лимонный кордиал', amount: '10', unit: 'мл' },
            { name: 'Сироп сахарный', amount: '10', unit: 'мл' },
            { name: 'Фрукты свежие "Лимон"', amount: '20', unit: 'мл' }
        ]
    },
    {
        id: 'gost-tom-collins',
        category: 'gost',
        name: 'Том Колинз',
        image: 'https://www.cocktail.uk.com/wp-content/uploads/2003/01/a2639e05da809805f18a7.jpeg',
        method: 'Хард Шейк',
        glass: 'Слинг',
        ice: 'Квадратный лёд',
        ingredients: [
            { name: 'Джин "Баристер Драй"', amount: '40', unit: 'мл' },
            { name: 'Лимонный кордиал', amount: '25', unit: 'мл' },
            { name: 'Сироп сахарный', amount: '25', unit: 'мл' },
            { name: 'Содовая (газированная вода)', amount: '100', unit: 'мл' },
            { name: 'Фрукты свежие "Лимон"', amount: '10', unit: 'мл' }
        ]
    },
    {
        id: 'gost-aperol',
        category: 'gost',
        name: 'Апероль Спритц',
        image: 'https://s0.rbk.ru/v6_top_pics/media/img/7/44/347141472683447.webp',
        method: 'Билд',
        glass: 'Винный бокал',
        ice: 'Квадратный лёд',
        ingredients: [
            { name: 'Биттер Апероль «Гамбини»', amount: '50', unit: 'мл' },
            { name: 'Шампанское «Российское»', amount: '130', unit: 'мл' },
            { name: 'Содовая (газированная вода)', amount: '80', unit: 'мл' },
            { name: 'Фрукты свежие "Апельсин"', amount: '20', unit: 'гр' }
        ]
    },
    {
        id: 'gost-electronic',
        category: 'gost',
        name: 'Электроник',
        image: 'https://avatars.mds.yandex.net/i?id=8143bb1f42463b503ca63ef90ff3df8e_l-8805584-images-thumbs&n=13',
        method: 'Хард Шейк',
        glass: 'Слинг',
        ice: 'Квадратный лёд',
        ingredients: [
            { name: 'Джин "Баристер Драй"', amount: '40', unit: 'мл' },
            { name: 'Ликер Трипл Сек Фрукошульц/Гамбини', amount: '15', unit: 'мл' },
            { name: 'Сироп Кокос "Барлайн"', amount: '15', unit: 'мл' },
            { name: 'Лимонный кордиал', amount: '15', unit: 'мл' },
            { name: 'Сок Ананас "Добрый"/"ABC"', amount: '50', unit: 'мл' },
            { name: 'Содовая (газированная вода)', amount: '100', unit: 'мл' },
            { name: 'Фрукты свежие "Апельсин"', amount: '15', unit: 'гр' },
            { name: 'Краситель пищевой синий', amount: '1', unit: 'гр' }
        ]
    },

    // ================= МОЛОДЕЖНАЯ ЗАПРЕЩЁНКА =================
    {
        id: 'youth-red-flag',
        category: 'youth',
        name: 'Коктейль "Ред Флаг"',
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=600&auto=format&fit=crop',
        method: 'Хард Шейк, Стрейн',
        glass: 'Резной Хайбол',
        ice: 'Квадратный лёд',
        serving: 'Все компоненты смешать в шейкере(без содовой). Перелить все в резной хайбол наполненый квадратным льдом, сверху долить содовую и размешать барной ложкой. Украсить листом бамбука, флажком и конфетой',
        ingredients: [
            { name: 'Наливка "Шипучка"', amount: '30', unit: 'мл' },
            { name: 'Наливка "Лимончелло"', amount: '50', unit: 'мл' },
            { name: 'Содовая (газированная вода)', amount: '50', unit: 'мл' },
            { name: 'Сок Апельсин "Добрый"/"ABC"', amount: '50', unit: 'мл' },
            { name: 'Конфеты Шипучка', amount: '1', unit: 'шт' },
            { name: 'Красный Флажок', amount: '1', unit: 'шт' },
            { name: 'Лист Бамбука', amount: '1', unit: 'шт' }
        ]
    },
    {
        id: 'youth-idiot',
        category: 'youth',
        name: 'Коктейль "Идиот - Чехов А.П."',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop',
        method: 'Стир',
        glass: 'Олд Фешен',
        ice: 'Куб (ледянная глыба)',
        serving: 'В ОлдФешен поместить глыбу, влить все компоненты и хорошо стирануть барной ложкой. Украсить вишней',
        ingredients: [
            { name: 'Ром "Скелетон"', amount: '40', unit: 'мл' },
            { name: 'Настойка Абсент Фрукошульц/Ксента/Оазиз', amount: '20', unit: 'мл' },
            { name: 'Сироп Гренадин "Барлайн"', amount: '30', unit: 'мл' },
            { name: 'Лимонный кордиал', amount: '30', unit: 'мл' },
            { name: 'Ягода с/м "Вишня"', amount: '10', unit: 'гр' }
        ]
    },
    {
        id: 'youth-bucksbani',
        category: 'youth',
        name: 'Коктейль "БаксБани"',
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=600&auto=format&fit=crop',
        method: 'Билд',
        glass: 'Слинг',
        ice: 'Квадратный лёд',
        serving: 'Подготовить окантовку бокала с кокосовой стружкой, в бокал поместить лёд, влить все компоненты и хорошо размешать барной ложкой',
        ingredients: [
            { name: 'Джин "Баристер Драй на мармеладе"', amount: '50', unit: 'мл' },
            { name: 'Содовая "МилКис"', amount: '100', unit: 'мл' },
            { name: 'Сироп Клубника "Барлайн"', amount: '15', unit: 'мл' },
            { name: 'Специи стружка кокосовая', amount: '1', unit: 'гр' }
        ]
    },
    {
        id: 'youth-marmalade',
        category: 'youth',
        name: 'Коктейль "Мой Мармеладный - Я не Твоя"',
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=600&auto=format&fit=crop',
        method: 'Билд',
        glass: 'Олд Фешен',
        ice: 'Краш/Дробленный лёд',
        serving: 'В бокал поместить дробленный лед, добавить все компоненты и немного перемешать барной ложкой, досыпать дробленный лёд. Украсить мармеладными мишками',
        ingredients: [
            { name: 'Джин "Баристер Драй на мармеладе"', amount: '40', unit: 'мл' },
            { name: 'Ликер Трипл Сек Фрукошульц/Гамбини', amount: '25', unit: 'мл' },
            { name: 'Лимонный кордиал', amount: '10', unit: 'мл' },
            { name: 'Сироп сахарный', amount: '10', unit: 'мл' },
            { name: 'Содовая (газированная вода)', amount: '80', unit: 'мл' },
            { name: 'Мармелад "Мишки"', amount: '15', unit: 'гр' }
        ]
    },
    {
        id: 'youth-beaver',
        category: 'youth',
        name: 'Коктейль "Бобр Курва"',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop',
        method: 'Билд',
        glass: 'Резной Хайбол',
        ice: 'Квадратный лёд',
        serving: 'В бокал поместить лёд, влить все компоненты и хорошо размешать барной ложкой.',
        ingredients: [
            { name: 'Биттер Травянной «Егермейстер»', amount: '25', unit: 'мл' },
            { name: 'Биттер Травянной «Тундра»', amount: '25', unit: 'мл' },
            { name: 'Энергетический напиток "РедБулл"', amount: '150', unit: 'мл' }
        ]
    },
    {
        id: 'youth-long-ave',
        category: 'youth',
        name: 'Лонг Авель - Аве Мария',
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=600&auto=format&fit=crop',
        method: 'Хард Шейк, Стрейн',
        glass: 'Хайбол',
        ice: 'Квадратный лед',
        serving: 'Все компоненты смешать в шейкере. Перелить все в хайбол наполненный льдом.',
        ingredients: [
            { name: 'Джин «Барристер Лав Из»', amount: '40', unit: 'мл' },
            { name: 'Трипл Сек', amount: '20', unit: 'мл' },
            { name: 'Супер Джус', amount: '20', unit: 'мл' },
            { name: 'Клубничный сироп', amount: '20', unit: 'мл' },
            { name: 'Сок яблоко «Добрый»', amount: '50', unit: 'мл' }
        ]
    },
    {
        id: 'youth-rainbow',
        category: 'youth',
        name: 'Радуга',
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=600&auto=format&fit=crop',
        method: 'Драй шейк/шейк',
        glass: 'Шале',
        ice: '',
        serving: 'Добавить все компоненты в шейкер и активно взбейте без льда. Затем добавить лед и взбейте ещё. Процедите в бокал через стрейнер.',
        ingredients: [
            { name: 'Джин «Барристер Лав Из»', amount: '60', unit: 'мл' },
            { name: 'Клубничный ликер «Радикс»', amount: '25', unit: 'мл' },
            { name: 'Супер Джус', amount: '20', unit: 'мл' },
            { name: 'Сок яблоко «Добрый»', amount: '40', unit: 'мл' },
            { name: 'Мыльный корень', amount: '2 дэша(3 мл)', unit: '' }
        ]
    },
    {
        id: 'youth-raspberry-jacket',
        category: 'youth',
        name: 'Малиновый пиджак',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop',
        method: 'Хард Шейк, Стрейн',
        glass: 'Пивная кружка',
        ice: 'Квадратный лед',
        serving: 'Все компоненты смешать в шейкере(без газ воды). Перелить в пивную кружку, наполненную доверху льдом, сверху долить газ воды,украсить слайсом лимона.',
        ingredients: [
            { name: 'Джин «Барристер Лав Из»', amount: '15', unit: 'мл' },
            { name: 'Вермут красный «Ponti rosso»', amount: '15', unit: 'мл' },
            { name: 'Кампари', amount: '10', unit: 'мл' },
            { name: 'Основа Торри Брусника-Клюква', amount: '20', unit: 'мл' },
            { name: 'Наливка «Вишневая девятка»', amount: '50', unit: 'мл' },
            { name: 'Газ вода', amount: 'топ ап', unit: '' },
            { name: 'Слайс лимона', amount: '15', unit: 'гр' }
        ]
    },
    {
        id: 'youth-rooster',
        category: 'youth',
        name: 'Петушок Аркаша',
        image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=600&auto=format&fit=crop',
        method: 'Хард Шейк, Стрейн',
        glass: 'Хайбол',
        ice: 'Квадратный лёд',
        serving: 'Все компоненты смешать в шейкере. Перелить все в хайбол наполненный льдом.',
        ingredients: [
            { name: 'наливка «Доктор Пеппер»', amount: '30', unit: 'мл' },
            { name: 'Джин «Барристер Лав Из»', amount: '40', unit: 'мл' },
            { name: 'Сироп Клубника "Барлайн"', amount: '15', unit: 'мл' },
            { name: 'Супер Джус', amount: '15', unit: 'мл' },
            { name: 'Сок яблоко «Добрый»', amount: '50', unit: 'мл' }
        ]
    },

    // ================= КОКТЕЙЛИ БУРЖУЙСКИЕ =================
    {
        id: 'premium-negroni',
        category: 'premium',
        name: 'Коктейль "Негрони На Районе"',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Negroni_served_in_Vancouver_BC.jpg/800px-Negroni_served_in_Vancouver_BC.jpg',
        method: 'Стир, Стрейн',
        glass: 'Олд Фешен',
        ice: 'Куб (ледянная глыба)',
        serving: 'В ОлдФешен поместить глыбу, все компоненты стирануть в смесительном бокале, перелить через джулеп. Украсить цедрой апельсина окантовку бокала (сплеш арамасел с цедры)',
        ingredients: [
            { name: 'Джин "Баристер Драй"', amount: '30', unit: 'мл' },
            { name: 'Биттер «Кампари»', amount: '30', unit: 'мл' },
            { name: 'Вермут красный "Чинзано Россо"', amount: '30', unit: 'мл' },
            { name: 'Фрукты свежие "Апельсин"', amount: '25', unit: 'гр' }
        ]
    },
    {
        id: 'premium-margarita',
        category: 'premium',
        name: 'Коктейль "Маргарита Петровна"',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=600&auto=format&fit=crop',
        method: 'Хард Шейк, Стрейн',
        glass: 'Маргаритка',
        ice: '',
        serving: 'Все компоненты смешать в шейкере. Перелить все в маргаритку. Украсить сушеным апельсином',
        ingredients: [
            { name: 'Текила "Ла Павеса"', amount: '50', unit: 'мл' },
            { name: 'Ликер Трипл Сек Фрукошульц/Гамбини', amount: '25', unit: 'мл' },
            { name: 'Сок Апельсин "Добрый"/"ABC"', amount: '50', unit: 'мл' },
            { name: 'Чайная Основа Тархун "Барлайн"', amount: '25', unit: 'мл' },
            { name: 'Лимонный кордиал', amount: '20', unit: 'мл' },
            { name: 'Фрукты сушенные (дигедрированный) Апельсин', amount: '30', unit: 'гр' }
        ]
    },
    {
        id: 'premium-mai-tai',
        category: 'premium',
        name: 'Коктейль "Оу Май Тай"',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=600&auto=format&fit=crop',
        method: 'Хард Шейк, Стрейн',
        glass: 'Резной Хайбол',
        ice: 'Квадратный лёд',
        serving: 'Все компоненты смешать в шейкере. Перелить все в резной хайбол наполненый квадратным льдом. Украсить листом бамбука и вишней',
        ingredients: [
            { name: 'Ликер "Амаретто" Фрукошульц/Гамбини', amount: '10', unit: 'мл' },
            { name: 'Ликер Трипл Сек Фрукошульц/Гамбини', amount: '15', unit: 'мл' },
            { name: 'Сок Ананас "Добрый"/"ABC"', amount: '50', unit: 'мл' },
            { name: 'Ром «Кул Скелетон»', amount: '40', unit: 'мл' },
            { name: 'Сироп сахарный', amount: '10', unit: 'мл' },
            { name: 'Лимонный кордиал', amount: '15', unit: 'мл' },
            { name: 'Ягода с/м "Вишня"', amount: '20', unit: 'гр' },
            { name: 'Лист Бамбука', amount: '1', unit: 'шт' }
        ]
    },
    {
        id: 'premium-lazy-colada',
        category: 'premium',
        name: 'Коктейль "Лентяйка Коллада"',
        image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=600&auto=format&fit=crop',
        method: 'Хард Шейк, Стрейн',
        glass: 'Слинг',
        ice: '',
        serving: 'Все компоненты смешать в шейкере, затем перелить в резной хайбол и украсть кокосовой стружкой, ананасом и клубникой',
        ingredients: [
            { name: 'Ром "Окхарт"', amount: '60', unit: 'мл' },
            { name: 'Сироп Кокос "Барлайн"', amount: '15', unit: 'мл' },
            { name: 'Сироп Клубника "Барлайн"', amount: '15', unit: 'мл' },
            { name: 'Сок Ананас "Добрый"/"ABC"', amount: '50', unit: 'мл' },
            { name: 'Молоко коровье "Фермерское Подворье 3,2%"', amount: '50', unit: 'мл' },
            { name: 'Ягода с/м "Клубника"', amount: '15', unit: 'гр' },
            { name: 'Фрукты свежие "Ананас"', amount: '50', unit: 'гр' },
            { name: 'Специи стружка кокосовая', amount: '1', unit: 'гр' }
        ]
    }
];