// 1. Данные из вашего документа (можно дополнять)
const menuData = [
    {
        id: 'b-52',
        category: 'shots',
        name: 'Б-52',
        image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop', // Временная картинка
        method: 'Слои',
        glass: 'Шот (45мл)',
        ingredients: [
            { name: 'Кофейный Ликер Фрукошульц/Гамбини', amount: '15', unit: 'мл' },
            { name: 'Сливочный ликер Царский/Ирина Любовь', amount: '15', unit: 'мл' },
            { name: 'Ликер Трипл Сек Фрукошульц/Гамбини', amount: '15', unit: 'мл' }
        ]
    },
    {
        id: 'popkorn',
        category: 'shots',
        name: 'Попкорн',
        image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop',
        method: 'Шейк (без льда)',
        glass: 'Шот (45мл)',
        ingredients: [
            { name: 'СуперДжусс', amount: '15', unit: 'мл' },
            { name: 'Водка Коктейльная Беленькая/Кедровица', amount: '15', unit: 'мл' },
            { name: 'Вода Фильтрованная', amount: '5', unit: 'мл' },
            { name: 'Сироп ПрофСироп "Попкорн"', amount: '10', unit: 'мл' }
        ]
    },
    // Добавьте сюда остальные шоты и чаи...
];

const categories = [
    { id: 'shots', name: 'Шоты забористые', desc: 'Крепкие и яркие' },
    { id: 'tea', name: 'Чай', desc: 'Согревающие' }
];

// 2. Состояние приложения
const app = {
    currentDrinkId: null,
    isEditing: false,
    history: [],
    
    // Инициализация
    init() {
        this.loadData();
        this.renderCategories();
        this.renderFavorites();
        
        // Восстановление данных из LocalStorage (если редактировали ранее)
        const savedData = localStorage.getItem('ttk_menu_data');
        if (savedData) {
            // Заменяем дефолтные данные на отредактированные
            const parsed = JSON.parse(savedData);
            parsed.forEach(savedDrink => {
                const index = menuData.findIndex(d => d.id === savedDrink.id);
                if (index !== -1) menuData[index] = savedDrink;
            });
        }
    },

    loadData() {
        this.favorites = JSON.parse(localStorage.getItem('ttk_favorites')) || [];
    },

    saveFavorites() {
        localStorage.setItem('ttk_favorites', JSON.stringify(this.favorites));
        this.renderFavorites();
    },

    saveMenuData() {
        localStorage.setItem('ttk_menu_data', JSON.stringify(menuData));
    },

    // Навигация
    showView(viewId) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById(`view-${viewId}`).classList.add('active');
        
        // Подсветка нижнего меню
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        if(viewId === 'home') document.querySelectorAll('.nav-item')[0].classList.add('active');
        if(viewId === 'favorites') document.querySelectorAll('.nav-item')[1].classList.add('active');
        
        window.scrollTo(0, 0);
    },

    goBack() {
        if (this.history.length > 0) {
            const prevView = this.history.pop();
            this.showView(prevView);
        } else {
            this.showView('home');
        }
    },

    // Рендер Главной
    renderCategories() {
        const container = document.getElementById('category-list');
        container.innerHTML = categories.map(cat => `
            <div class="category-card" onclick="app.openCategory('${cat.id}', '${cat.name}')">
                <div>
                    <h3>${cat.name}</h3>
                    <p>${cat.desc}</p>
                </div>
                <span>›</span>
            </div>
        `).join('');
    },

    // Открытие категории
    openCategory(catId, catName) {
        document.getElementById('category-title').textContent = catName;
        const drinks = menuData.filter(d => d.category === catId);
        
        const grid = document.getElementById('drink-grid');
        grid.innerHTML = drinks.map(drink => `
            <div class="drink-card" onclick="app.openDetail('${drink.id}')">
                <img src="${drink.image}" alt="${drink.name}">
                <h4>${drink.name}</h4>
            </div>
        `).join('');
        
        this.history.push('home');
        this.showView('category');
    },

    // Открытие карточки напитка
    openDetail(id) {
        this.currentDrinkId = id;
        this.isEditing = false;
        this.renderDetail();
        
        // Сохраняем историю для кнопки "Назад"
        const currentView = document.querySelector('.view.active').id.replace('view-', '');
        this.history.push(currentView);
        this.showView('detail');
    },

    renderDetail() {
        const drink = menuData.find(d => d.id === this.currentDrinkId);
        if (!drink) return;

        document.getElementById('detail-image').src = drink.image;
        document.getElementById('detail-name').textContent = drink.name;
        document.getElementById('detail-glass').textContent = drink.glass;
        document.getElementById('detail-method').textContent = drink.method;

        // Рендер ингредиентов
        const list = document.getElementById('ingredients-list');
        list.innerHTML = drink.ingredients.map((ing, index) => {
            if (this.isEditing) {
                return `
                    <li>
                        <input type="text" value="${ing.name}" onchange="app.updateIngredient(${index}, 'name', this.value)" style="width: 60%; text-align: left;">
                        <div>
                            <input type="number" value="${ing.amount}" onchange="app.updateIngredient(${index}, 'amount', this.value)">
                            <span>${ing.unit}</span>
                        </div>
                    </li>
                `;
            } else {
                return `
                    <li>
                        <span>${ing.name}</span>
                        <span><b>${ing.amount}</b> ${ing.unit}</span>
                    </li>
                `;
            }
        }).join('');

        // Настройка кнопок
        const favBtn = document.getElementById('fav-btn');
        const isFav = this.favorites.includes(drink.id);
        favBtn.textContent = isFav ? '♥ В избранном' : '♡ Сохранить в избранное';
        favBtn.className = isFav ? 'main-btn saved' : 'main-btn';
        favBtn.style.display = this.isEditing ? 'none' : 'block';

        // Настройка режима редактирования
        document.getElementById('edit-btn').textContent = this.isEditing ? '💾 Сохранить' : '✏️';
        document.getElementById('upload-label').classList.toggle('hidden', !this.isEditing);
    },

    // Избранное
    toggleFavorite() {
        const index = this.favorites.indexOf(this.currentDrinkId);
        if (index === -1) {
            this.favorites.push(this.currentDrinkId);
        } else {
            this.favorites.splice(index, 1);
        }
        this.saveFavorites();
        this.renderDetail();
    },

    renderFavorites() {
        const grid = document.getElementById('favorites-grid');
        const favDrinks = menuData.filter(d => this.favorites.includes(d.id));
        
        if (favDrinks.length === 0) {
            grid.innerHTML = '<p style="color: gray; grid-column: span 2; text-align: center; margin-top: 20px;">Пока пусто</p>';
            return;
        }

        grid.innerHTML = favDrinks.map(drink => `
            <div class="drink-card" onclick="app.openDetail('${drink.id}')">
                <img src="${drink.image}" alt="${drink.name}">
                <h4>${drink.name}</h4>
            </div>
        `).join('');
    },

    // Редактирование
    toggleEdit() {
        if (this.isEditing) {
            // Сохраняем
            this.saveMenuData();
            this.isEditing = false;
        } else {
            // Включаем режим редактирования
            this.isEditing = true;
        }
        this.renderDetail();
    },

    updateIngredient(index, field, value) {
        const drink = menuData.find(d => d.id === this.currentDrinkId);
        drink.ingredients[index][field] = value;
    },

    // Загрузка фото (Base64)
    handleImageUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            const drink = menuData.find(d => d.id === this.currentDrinkId);
            drink.image = e.target.result; // Ссылка Base64
            this.renderDetail();
        };
        reader.readAsDataURL(file);
    }
};

// Запуск
window.onload = () => app.init();