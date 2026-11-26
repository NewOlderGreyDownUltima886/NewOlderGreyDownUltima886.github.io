// data.js
// Полная база данных ТТК (Обновлено 01.06)

const categories = [
    // Из листа "Б_А коктейли, Шоты"
    { id: 'shots', name: 'Шоты забористые', desc: 'Крепкие и яркие' },
    
    // Из листа "Коктейли по ГОСТу"
    { id: 'gost', name: 'Коктейли по ГОСТу', desc: 'Барменская классика' },
    
    // Из листа "Молодежная Запрещёнка"
    { id: 'youth', name: 'Молодежная Запрещёнка', desc: 'Бунтарские миксы' },
    
    // Из листа "Коктейли Буржуйские"
    { id: 'premium', name: 'Коктейли Буржуйские', desc: 'Премиум-класс' },

    { id: 'lemonades', name: 'Лимонады', desc: 'Освежающие миксы' },

    { id: 'milkshakes', name: 'Милкшейки', desc: 'Сладкие и густые' },

    { id: 'tea', name: 'Чай', desc: 'Согревающие и холодные чаи' },

    { id: 'special', name: 'Для сильных духом!', desc: 'Спец подача' }


    // { id: 'cold-tea', name: 'Холодные чаи', desc: 'Освежающие шейки' },
    

];

const menuData = [
    // ================= ШОТЫ ЗАБОРИСТЫЕ =================
    {
        id: 'b-52',
        category: 'shots',
        name: 'Б-52',
        image: 'https://yandex-images.clstorage.net/kLVg98354/de9af6kx/6Q2m4tHWUBL0ZS8psnKvIs4nyM4GKNjXQhhJOfexOm1L94cxtUin8vgkxz7RgNg2H3DVS50C4QC96T5VZBB5EEwpk4bEwuX2hGV-bQLWboIPJpwP0hmM9tJYPKk3F9y6HPWR9sNKINVvQGIOBIX8gsth0818cDHg-x8tQtVjjpcKXPeiwKWhBKWVTC_BMN6C3EVtfmaZfsWl2gkvE2Q_aC2F8uRhK_DUj8HQTCVX7xbogYM8ugKwYCpMbTI1kA0Gio9k4QGE8RTmxP9-EHBfM5wUjY5muD8l5Hn5zgK1T4pt1PM1Ueuy5N8DcK4GZI-nG1OiXAvz0aC6b_yxNWA9Fbg8lCECx_PEllX8j2BxnNDuJO0fdosNB2d72l5jJU1aXFcSJUEJE7V-w2DdR6VuNpowIX3p8XNgus6McRSzn3d5b8RgwTdDNofnjO4A8S2wPma8zHd43Of3yhn9cQbNGu50oScQ-HL2zxMhfJbkDVS6kpEv6NLRY_tun7NXkO61W2wlc4KlkEc2ll2-Y0PusMxl3v6E6J8lhzg6XSKGjhruRRKHseqi9R_i4p-kVq2EuqPyX8lQEnL7Pf6CxYIP9-g89_EQ5cBlhYbM7-OTrWJMBr08lxk-hoUYaC-zht5ZXGbQ5PJaY_WPceNeV9Vfx7gwYkwJ0tDy2zxOoJbh_zX7fDeisQfTxXel_G0BEE0SfWYPvaZJrzXGqagucRRteF5VkCbCGbJ1r8CAXtTX7xZb4-E-6QHhc-sf_2Dks-0VO7-WgLOH0lZUdG6_Y4GNIc5FD0z0Ct2kxNo53qJVPfiMpRFUkngzBl_x0t3XxK2HiDHyDZtjkkPajVxzVKHvRLpN1oFRBWJlJDb874Cz7NGtR96eZwsddYe6W55yp74LTefQ9nB6ImZs0ZA8xGXN57oCQWzKkBLB-e6M8LawD5e7XqRhQkeT5DR3vp9xEY9hjeVcfEdrPnWnGZlMUOU8I',
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
        image: 'https://kokteil-bar.ru/wp-content/uploads/2019/12/kokteil-b-53-e1575404907241.jpg',
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
        image: 'https://avatars.mds.yandex.net/i?id=d53e2da3015a3b0e42534cc0ed1fd3ae_l-5336145-images-thumbs&n=13',
        method: 'Слои',
        glass: 'Шот (45мл)',
        ingredients: [
            { name: 'Самбука Ламоника / Фрукошульц', amount: '15', unit: 'мл' },
            { name: 'Сливочный ликер Царский / (Ирина Любовь)', amount: '15', unit: 'мл' },
            { name: 'Настойка Абсент Фрукошульц / Ксента / Оазиз', amount: '15', unit: 'мл' }
        ]
    },

    {
       id: 'who-are-you',
        category: 'shots',
        name: 'Вы кто такие? Я вас не звал!',
        image: 'https://i.pinimg.com/736x/a5/55/9d/a5559d44953e3f7126d093d46febadcd.jpg',
        method: 'Билд',
        glass: 'Шот (45мл)',
        ingredients: [
            { name: 'Джин Баристер Бартендерс Эдишен Шып', amount: '15', unit: 'мл' },
            { name: 'СуперДжусс', amount: '5', unit: 'мл' },
            { name: 'Ликер Биттер Тундра', amount: '15', unit: 'мл' },
            { name: 'Пюре-концентрат Винтаж "Дыня"', amount: '10', unit: 'мл' }
        ]
    },

    {
        id: 'popcorn',
        category: 'shots',
        name: 'Попкорн',
        image: 'https://avatars.mds.yandex.net/i?id=5c4f99c72427834d474044811196d9a6_l-10414649-images-thumbs&n=13',
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
        image: 'https://i.pinimg.com/originals/98/fa/13/98fa13b082c0544fe0b564636e680e7c.png',
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
    // {
    //     id: 'empress',
    //     category: 'shots',
    //     name: 'Шальная Императрица',
    //     image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=600&auto=format&fit=crop',
    //     method: 'Билд',
    //     glass: 'Шот (45мл)',
    //     ingredients: [
    //         { name: 'Текила ЛаПавеса', amount: '15', unit: 'мл' },
    //         { name: 'СуперДжусс', amount: '15', unit: 'мл' },
    //         { name: 'Ликер Трипл Сек Фрукошульц / Гамбини', amount: '15', unit: 'мл' },
    //         { name: 'Соль (окаемка)', amount: '2', unit: 'Гр' }
    //     ]
    // },
    // {
    //     id: 'morning-after',
    //     category: 'shots',
    //     name: 'Утро после Корпоротива',
    //     image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop',
    //     method: 'Билд',
    //     glass: 'Шот (45мл)',
    //     ingredients: [
    //         { name: 'водка «Тундра»', amount: '15', unit: 'мл' },
    //         { name: 'Кофейный Ликер Фрукошульц / Гамбини', amount: '15', unit: 'мл' },
    //         { name: 'Настойка Ирина Любовь', amount: '15', unit: 'мл' }
    //     ]
    // },

    // ================= ЧАЙ =================
    {
        id: 'grape-jasmine',
        category: 'tea',
        name: 'Виноград-Жасмин',
        image: 'https://sportkp.ru/sites/default/files/styles/post_850x666/public/text-images/2023-04/chaynik_azerbaijan_stockers_freepik.com__1680971694_1680973162.png?itok=nKUuY0kd',
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
        image: 'https://sportkp.ru/sites/default/files/styles/post_850x666/public/text-images/2023-04/chaynik_azerbaijan_stockers_freepik.com__1680971694_1680973162.png?itok=nKUuY0kd',
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
        image: 'https://sportkp.ru/sites/default/files/styles/post_850x666/public/text-images/2023-04/chaynik_azerbaijan_stockers_freepik.com__1680971694_1680973162.png?itok=nKUuY0kd',
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

        {
        id: 'cold-cranberry',
        category: 'tea',
        name: 'Брусника-Клюква',
        image: 'https://avatars.mds.yandex.net/get-mpic/4012682/2a0000018e102c252102d0e32b14b5cb8112/orig',
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
        category: 'tea',
        name: 'Мята-Лайм',
        image: 'https://avatars.mds.yandex.net/get-mpic/4012682/2a0000018e102c252102d0e32b14b5cb8112/orig',
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

    // ================= ЛИМОНАДЫ =================
    {
        id: 'strawberry-basil',
        category: 'lemonades',
        name: 'Клубника-базилик',
        image: 'https://img.povar.ru/mobile/58/40/0a/9a/limonad_s_bazilikom_i_klubnikoi-597374.jpeg',
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
        image: 'https://thumbs.dreamstime.com/b/none-207018544.jpg',
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
        image: 'https://yandex-images.clstorage.net/kLVg98354/de9af6kx/6Q2m4tHWUBL0ZS8psnKvIs4nyM4GKNjXQhhJOfIEHwgrcid0ZVjnwriUYjuBkC0zf0DFLrgnsQC9edtwdBGM4cwJo7ak8hRzIGX-zUOS7vZfNs1-NlioR8c53MzH8Tp7_RWgFhOaQYVv02D_dNVNRnvEYR_bgQVSSMwtc2Syf0YqTtWzoJYgRMSX3z1x0C0Q7zYeHccpHMc1CqtO8nceCB7HkWZwiOPkv9KAfsaXbJRoUEL_i3DDIMlM_CAkwp-1qd9VYDPV4WWUh5xswoH8UG6HXkwn2RzmdOrq7QKWD9luJdE3cVnTJP3i0LxmdU-nCOGxLaoQctGojGwDtUGfRZnMZ9PDFeImllfs_cFwjFGtZCx8R0gM1UbIae8hBm5JbPXgtJBJw8Zcs3F8dgYOZulwME4pMZDTCkxsosWBvpY7rqaAk1Qh1ial_U-xEezRHAT8PhabDSaXKPle4qV8auy1UpcjS5I3PfDArDen3yeKEhDsmWOR8KhPLQLWQ_21SmyEg3JHYkT11Ew-YEGPY98EDj10qf621OqJrMEFL-qvtVKmkOszJe3zEF30RO2VKsIQ3foTsHJrXi1Rt3Jvp6suN9OgxfAEpfb_LvEQD7Oc1o5eF2vtR3VJi4yTd77q__bghVKIcJUs84DO9YUeFtiBEk5qAHDwqd4NUAdQPMRb7CSTYJZR5rZWDQ3Bku0wfKa_PqXq3Bfk-sg9U3Z8eEzX4rYSSkDW_XOgf5aFnRRoUPGd6XKQI5hfPXO2kE6WSczkUMG0U2a3xS7cU0CPobyVDB2lG45UlmvKTsKGrzkcVzBGkzgQt3wAUE7EBp4HKsEiT_pB4kHrbwzhFYP-hEudZaKBtbHkB_ZensEQbJPdZW8fdMkdVVa6iS6gxn_Ln6TxBFKa8rVtYGNuhueNpkqhEHxJILOya-0vgsUAHJWrTmSx81WipvZ3Tt-DYJ0xvtVPvfYrPTV1uqmNYhRdg',
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
        image: 'https://i.pinimg.com/originals/b6/0a/b9/b60ab90b4f3252e3b56ec3be622b3270.jpg',
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
        image: 'https://i.pinimg.com/originals/43/c8/16/43c816270b374afc7db9dd3a2f21f865.png?nii=t',
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
        image: 'https://i.pinimg.com/736x/dd/a6/1f/dda61f7480d13acfe8e7c7be20789f51.jpg',
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

    // ================= КОКТЕЙЛИ ПО ГОСТУ =================
    {
        id: 'gost-cosmopolitan',
        category: 'gost',
        name: 'Космополитен',
        image: 'https://i.pinimg.com/736x/b7/fd/7e/b7fd7e2378751b32eb35022778eb0818.jpg',
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
        image: 'https://i.pinimg.com/736x/a5/55/9d/a5559d44953e3f7126d093d46febadcd.jpg',
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
        image: 'https://i.pinimg.com/736x/a5/55/9d/a5559d44953e3f7126d093d46febadcd.jpg',
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
        image: 'https://i.pinimg.com/736x/a5/55/9d/a5559d44953e3f7126d093d46febadcd.jpg',
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
        image: 'https://i.pinimg.com/736x/a5/55/9d/a5559d44953e3f7126d093d46febadcd.jpg',
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
        image: 'https://i.pinimg.com/736x/a5/55/9d/a5559d44953e3f7126d093d46febadcd.jpg',
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
        image: 'https://i.pinimg.com/736x/a5/55/9d/a5559d44953e3f7126d093d46febadcd.jpg',
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
        image: 'https://i.pinimg.com/736x/a5/55/9d/a5559d44953e3f7126d093d46febadcd.jpg',
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
        image: 'https://i.pinimg.com/736x/a5/55/9d/a5559d44953e3f7126d093d46febadcd.jpg',
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
        image: 'https://i.pinimg.com/736x/a5/55/9d/a5559d44953e3f7126d093d46febadcd.jpg',
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
        image: 'https://avatars.mds.yandex.net/i?id=a1d581ffd484f1e343c7589a2a3a8a51_l-5653325-images-thumbs&n=13',
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
        image: 'https://i.pinimg.com/originals/2a/55/09/2a5509a133632208976e91cb39420fa3.png',
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
        image: 'https://yandex-images.clstorage.net/kLVg98354/de9af61E/WF3HxjUzgTd0pC4MctZfEs9Crb72mdx2Uwg5LWbUXxlKNtJVESgjky0BA0_EJb3C3wXFW-1npDR4PAtFUpU9lV3Mk-P0w6RmUaBqzUO3ypZeM8wO0wmJEsL9zFxGxI5IehKnYTVpN7KYpPHtFte_Jdizoqz64BDAmJweQZMBnJbq6MQzIbQSVUZ37S4B8f_z3ycu_sTIvAXlegsdYnYcaV5nUubSGoB3rpCyDsTmz0bKEcN8-wCRctq9zFIHInzGGy62sqFlQRU2lx6tkHEsYJzmD67Ui-22tKtLnNM2TYmuZ3OnMlsjh0-BY34mpp5HGyEDPstQU9I4nv8yttGu53ufR9Nh9WKEtZfunYNDn5Bc5UysBPt8tUXbSl8wRH3pP3dAlRDYIaTf4PN89pcdpgsx4Z-a8ZPCS98-0ydQzWRafUVxofXD9HW2PT_hgszAHSa8HPbqzsUku8ruUJQ_uOx2s0TwSJBnfPLQ_LYlPhUJYBD-2UBDg-oOf7BFcG_UCHxm06K0Y-e39R5OI6DPIQ5lLs-HW78UdNh4LVBmPNrehSMHMjhiRNyhUL-2JQ-mqcECLtqQskAJPM0QlXBet3hd5BCztDCGhmcMr2ETn_OM926fpeivhSVYqG6C5l-5HJbSppE6QhauMFDv9ZcsZMqCsu_aACFByM9O4tZyzSdrnWbSM5QxNqQ0b1-jAN8z31aMjAUajLWnuiuO8tc_C52ngjciefPWr_LCXNSVHyQIsvE-WiCQIshMTFIHkR6kGX2147KkEodkRj1Ng8Ackv1UDI2WOV0nddi6TsFkHAts9cFFs3uAR18hgwxUR--leuKQvynQoXBLT18QlkLMtyoP15CClYAkd_YvT9JB7tL8to49pUkftSU7iC8xBx7avmbAhWI44CUf8XGPp4atZNgAkq5J44Eyqlz-cPZw_wRLXiQQALbj9PQUPq8BQP2gHKXMzCRZXvdVyipMgSe8U',
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
        image: 'https://images.gastronom.ru/PEYr0FlxTnb2vN2Fwx4i3CIVBphE0Bt290oe4GIErvU/pr:article-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzc3NzM0M2ExLTQ5ZDAtNDIzZi1iYzU3LWJjMzVjNzZmMjIwMy5wbmc.webp',
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
    },

    {
        id: 'kaska-tekila-bum',
        category: 'special',
        name: 'Текила в каску Бум',
        image: 'https://images.gastronom.ru/q1jzVWmdNqrI3aSb7Vh07B8UxgvgnY9yMzuqTDtdt-g/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzL2MyNWY4NWRiLWZlYmEtNGZhNS1iZjE3LTQwZTJiYTYxNGE5NS5qcGc.webp',
        method: 'Билд',
        glass: 'Рокс',
        ice: '',
        serving: 'Приготовить текилу со «Швепсом» в бокале рокс. Накрыть стакан салфетками, раскрутить его на столе, ударить им по каске и поставить обратно на стол. После того как гость выпьет напиток залпом, нанести несколько ударов битой по каске',
        ingredients: [
            { name: 'Текила ЛаПавеса', amount: '50', unit: 'мл' },
            { name: 'Тоник "Рич"', amount: '100', unit: 'мл' }
        ]
    }
];