// 1. Данные из вашего документа (можно дополнять)
// удалил и вынес в отдельный data.js

// 2. Состояние приложения
const app = {
    currentDrinkId: null,
    isEditing: false,
    history: [],
    
    // Переменные для свайпа
    touchStartX: 0,
    touchStartY: 0,
    isSwiping: false,
    
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

        // Настройка навигации и свайпов
        this.setupHistory();
        this.setupSwipe();
    },

    // Настройка системной кнопки "Назад"
    setupHistory() {
        // Добавляем фейковую запись, чтобы кнопка "Назад" на Android не закрывала приложение сразу
        history.pushState({ page: 'home' }, '');
        
        window.addEventListener('popstate', () => {
            const activeView = document.querySelector('.view.active');
            if (activeView && activeView.id !== 'view-home') {
                // Если мы не на главной, кнопка "Назад" возвращает на предыдущий экран
                this.goBack();
                // Возвращаем запись в историю
                history.pushState({ page: 'home' }, ''); 
            }
        });
    },

    // Настройка свайпа от левого края (для карточки)
    setupSwipe() {
        const detailView = document.getElementById('view-detail');
        if (!detailView) return;
        
        detailView.addEventListener('touchstart', (e) => {
            // Срабатывает только если палец коснулся левых 50 пикселей экрана
            if (e.touches[0].clientX < 50) {
                this.touchStartX = e.touches[0].clientX;
                this.touchStartY = e.touches[0].clientY;
                this.isSwiping = true;
            }
        }, { passive: true });

        detailView.addEventListener('touchmove', (e) => {
            if (!this.isSwiping) return;
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            
            const diffX = currentX - this.touchStartX;
            const diffY = Math.abs(currentY - this.touchStartY);

            // Проверяем, что свайп вправо и больше 80px, а вертикальное отклонение маленькое
            if (diffX > 80 && diffY < 50) {
                this.isSwiping = false;
                this.goBack(true); // Передаем true для анимации
            }
        }, { passive: true });

        detailView.addEventListener('touchend', () => {
            this.isSwiping = false;
        });
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

        // СБРОС ПОИСКА ПРИ ПЕРЕХОДЕ НА ГЛАВНУЮ
        if (viewId === 'home') {
            const searchInput = document.getElementById('search-input');
            if (searchInput) searchInput.value = '';
            
            const categoryList = document.getElementById('category-list');
            if (categoryList) categoryList.style.display = 'flex'; 
            
            const searchResults = document.getElementById('search-results');
            if (searchResults) searchResults.style.display = 'none';
        }

        // Подсветка нижнего меню
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        if(viewId === 'home') document.querySelectorAll('.nav-item')[0].classList.add('active');
        if(viewId === 'favorites') document.querySelectorAll('.nav-item')[1].classList.add('active');
        
        window.scrollTo(0, 0);
    },

    // Обновленный метод возврата с анимацией
    goBack(animate = false) {
        const activeView = document.querySelector('.view.active');
        
        if (animate && activeView) {
            activeView.classList.add('swipe-out');
            setTimeout(() => {
                activeView.classList.remove('swipe-out');
                if (this.history.length > 0) {
                    this.showView(this.history.pop());
                } else {
                    this.showView('home');
                }
            }, 300);
        } else {
            if (this.history.length > 0) {
                this.showView(this.history.pop());
            } else {
                this.showView('home');
            }
        }
    },

    // Рендер Главной
    renderCategories() {
        const container = document.getElementById('category-list');
        if (!container) return;
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

    // Логика поиска
    handleSearch(query) {
        const categoryList = document.getElementById('category-list');
        const searchResults = document.getElementById('search-results');
        if (!categoryList || !searchResults) return;
        
        if (query.trim() === '') {
            categoryList.style.display = 'flex'; 
            searchResults.style.display = 'none';
            return;
        }

        categoryList.style.display = 'none';
        searchResults.style.display = 'grid';

        const lowerQuery = query.toLowerCase();
        const filteredDrinks = menuData.filter(drink => 
            drink.name.toLowerCase().includes(lowerQuery)
        );

        if (filteredDrinks.length === 0) {
            searchResults.innerHTML = '<p style="color: gray; grid-column: span 2; text-align: center; margin-top: 20px;">Ничего не найдено</p>';
            return;
        }

        searchResults.innerHTML = filteredDrinks.map(drink => `
            <div class="drink-card" onclick="app.openDetail('${drink.id}')">
                <img src="${drink.image}" alt="${drink.name}">
                <h4>${drink.name}</h4>
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
        
        let html = '';
        if (drink.serving && !this.isEditing) {
            html += `
                <li style="display: block; border-bottom: none; padding-bottom: 20px;">
                    <h3 style="margin: 0 0 10px 0; font-size: 16px; color: var(--text-muted);">Метод / Сервировка</h3>
                    <p style="font-size: 14px; line-height: 1.4;">${drink.serving}</p>
                </li>
            `;
        }

        html += drink.ingredients.map((ing, index) => {
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
        
        list.innerHTML = html;

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
        if (!grid) return;
        
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
            this.saveMenuData();
            this.isEditing = false;
        } else {
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
            drink.image = e.target.result; 
            this.renderDetail();
        };
        reader.readAsDataURL(file);
    }
};

// Запуск
window.onload = () => app.init();
