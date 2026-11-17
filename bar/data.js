// data.js
// База данных всех напитков

const categories = [
    { id: 'shots', name: 'Шоты забористые', desc: 'Крепкие и яркие' },
    { id: 'tea', name: 'Чай', desc: 'Согревающие и авторские' },
    { id: 'lemonades', name: 'Лимонады', desc: 'Освежающие миксы' }
];

const menuData = [
    // ================= ШОТЫ =================
    {
        id: 'b-52',
        category: 'shots',
        name: 'Б-52',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop',
        method: 'Слои',
        glass: 'Шот (45мл)',
        ingredients: [
            { name: 'Кофейный Ликер Фрукошульц/Гамбини', amount: '15', unit: 'мл' },
            { name: 'Сливочный ликер Царский/(Ирина Любовь - Настойка)', amount: '15', unit: 'мл' },
            { name: 'Ликер Трипл Сек Фрукошульц/Гамбини', amount: '15', unit: 'мл' }
        ]
    },
    {
        id: 'b-53',
        category: 'shots',
        name: 'Б-53',
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop',
        method: 'Слои',
        glass: 'Шот (45мл)',
        ingredients: [
            { name: 'Кофейный Ликер Фрукошульц/Гамбини', amount: '15', unit: 'мл' },
            { name: 'Сливочный ликер Царский/(Ирина Любовь - Настойка)', amount: '15', unit: 'мл' },
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
            { name: 'Самбука Ламоника/Фрукошульц', amount: '15', unit: 'мл' },
            { name: 'Сливочный ликер Царский/(Ирина Любовь - Настойка)', amount: '15', unit: 'мл' },
            { name: 'Настойка Абсент Фрукошульц/Ксента/Оазиз', amount: '15', unit: 'мл' }
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
            { name: 'Водка Коктейльная Беленькая/Кедровица/Русская Валюта', amount: '15', unit: 'мл' },
            { name: 'Вода Фильтрованная', amount: '5', unit: 'мл' },
            { name: 'Сироп ПрофСироп "Попкорн"', amount: '10', unit: 'мл' }
        ]
    },
    {
        id: 'kis-kis',
        category: 'shots',
        name: 'Кис-кис (2 шт)',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop',
        method: 'Шейк (без льда)',
        glass: 'Шот (45мл+45мл)',
        ingredients: [
            { name: 'Ликер "Амаретто" Фрукошульц/Гамбини', amount: '15', unit: 'мл' },
            { name: 'Ликер Черри Бренди Фрукошульц/Гамбини', amount: '10', unit: 'мл' },
            { name: 'Молоко Коровье 3,2%', amount: '25', unit: 'мл' },
            { name: 'Сливки 22%', amount: '25', unit: 'мл' },
            { name: 'Сироп ПрофСироп "Малина"', amount: '10', unit: 'мл' }
        ]
    },
    {
        id: 'empress',
        category: 'shots',
        name: 'Шальная Императрица',
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop',
        method: 'Билд',
        glass: 'Шот (45мл)',
        ingredients: [
            { name: 'Текила ЛаПавеса', amount: '15', unit: 'мл' },
            { name: 'СуперДжусс', amount: '15', unit: 'мл' },
            { name: 'Ликер Трипл Сек Фрукошульц/Гамбини', amount: '15', unit: 'мл' },
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
            { name: 'Кофейный Ликер Фрукошульц/Гамбини', amount: '15', unit: 'мл' },
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
            { name: 'сироп клубника', amount: '60 / 15', unit: 'мл' }
        ]
    }
];