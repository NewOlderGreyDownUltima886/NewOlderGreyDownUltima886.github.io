// 1. Данные из вашего документа (можно дополнять)
// удалил и вынес в отдельный data.js

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

        // Настройка навигации и свайпов
        this.setupHistory();
        this.setupSwipe();
    },

    // Настройка системной кнопки "Назад" (Android)
    setupHistory() {
        // Добавляем одну запись, чтобы перехватить первый клик
        history.pushState({ page: 'home' }, '');
        
        window.addEventListener('popstate', () => {
            const activeView = document.querySelector('.view.active');
            
            // Если мы не на главной
            if (activeView && activeView.id !== 'view-home') {
                // Вызываем возврат с анимацией
                this.goBack(true);
                // СРАЗУ возвращаем запись, чтобы следующее нажатие тоже перехватилось
                history.pushState({ page: 'home' }, ''); 
            }
        });
    },

    // Настройка свайпа вправо для возврата (работает по всему экрану)
    setupSwipe() {
        let startX = 0;
        let startY = 0;
        let isSwiping = false;

        // Вешаем события на весь документ
        document.addEventListener('touchstart', (e) => {
            const activeView = document.querySelector('.view.active');
            // Не свайпаем на главной странице
            if (!activeView || activeView.id === 'view-home') return;

            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isSwiping = true;
        }, { passive: true });

        document.addEventListener('touchmove', (e) => {
            if (!isSwiping) return;
            
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            
            const diffX = currentX - startX;
            const diffY = Math.abs(currentY - startY);

            // Проверяем: свайп вправо (diffX > 0) больше 80px и вертикальное отклонение маленькое
            if (diffX > 80 && diffY < 50) {
                isSwiping = false;
                this.goBack(true); 
            }
        }, { passive: true });

        document.addEventListener('touchend', () => {
            isSwiping = false;
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

// Возврат назад с анимацией
goBack(animate = false) {
    const activeView = document.querySelector('.view.active');
    
    if (animate && activeView) {
        // 1. Сразу вычисляем, куда нам нужно вернуться
        let nextViewId = 'home';
        if (this.history.length > 0) {
            nextViewId = this.history.pop();
        }

        // 2. Запускаем анимацию на текущем экране
        activeView.classList.add('swipe-out');
        
        // 3. Ждем 200мс, пока экран уезжает
        setTimeout(() => {
            // Убираем класс анимации
            activeView.classList.remove('swipe-out');
            
            // 4. Показываем новый экран
            this.showView(nextViewId);
        }, 200);
    } else {
        // Обычный возврат (без анимации)
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
        
        // Если поле пустое — показываем категории, скрываем результаты
        if (query.trim() === '') {
            categoryList.style.display = 'flex'; 
            searchResults.style.display = 'none';
            return;
        }

        // Если есть текст — скрываем категории, показываем результаты
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
