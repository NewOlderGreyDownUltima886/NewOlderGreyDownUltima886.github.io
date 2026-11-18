const app = {
    currentDrinkId: null,
    isEditing: false,
    history: [],
    pendingSwipeDirection: null,
    savedHomeScroll: 0,
    
    init() {
        this.loadData();
        this.renderCategories();
        this.renderFavorites();
        
        const savedData = localStorage.getItem('ttk_menu_data');
        if (savedData) {
            const parsed = JSON.parse(savedData);
            parsed.forEach(savedDrink => {
                const index = menuData.findIndex(d => d.id === savedDrink.id);
                if (index !== -1) menuData[index] = savedDrink;
            });
        }

        this.setupHistory();
        this.setupSwipe();
    },

    setupHistory() {
        if (!window.history.state?.ttkApp) {
            window.history.replaceState(
                { ttkApp: true, view: 'home' },
                ''
            );
        }

        window.addEventListener('popstate', (event) => {
            const activeView = document.querySelector('.view.active');

            if (!activeView || activeView.id === 'view-home') return;

            this.goBack(
                true,
                true,
                this.pendingSwipeDirection || 'right'
            );

            this.pendingSwipeDirection = null;
        });
    },

    clearSearch() {
        const input = document.getElementById('search-input');
        input.value = '';
        this.handleSearch('');
        input.focus();
    },


    setupSwipe() {
        let startX = 0;
        let startY = 0;
        let isSwiping = false;

        document.addEventListener('touchstart', (e) => {
            const activeView = document.querySelector('.view.active');

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

            if (diffY < 50) {

                if (diffX > 80) {
                    isSwiping = false;

                    this.goBack(true, false, 'right');
                }

                // else if (diffX < -80) {
                //     isSwiping = false;

                //     this.goBack(true, false, 'left');
                // }
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


    showView(viewId, addHistory = true) {
        document.querySelectorAll('.view').forEach(v =>
            v.classList.remove('active')
        );

        document.getElementById(`view-${viewId}`).classList.add('active');

        if (viewId === 'home') {
            const searchInput = document.getElementById('search-input');
            const query = searchInput ? searchInput.value : '';

            this.handleSearch(query);

        } else if (addHistory) {
            window.history.pushState(
                { ttkApp: true, view: viewId },
                ''
            );
        }

        document.querySelectorAll('.nav-item').forEach(n =>
            n.classList.remove('active')
        );

        if (viewId === 'home')
            document.querySelectorAll('.nav-item')[0].classList.add('active');

        if (viewId === 'favorites')
            document.querySelectorAll('.nav-item')[1].classList.add('active');

        if (viewId === 'home') {
            // Восстанавливаем прокрутку после отрисовки результатов
            requestAnimationFrame(() => {
                window.scrollTo(0, this.savedHomeScroll);
            });
        } else {
            window.scrollTo(0, 0);
        }
    },



    goBack(animate = true, fromPopState = false, direction = 'right') {
        const activeView = document.querySelector('.view.active');

        if (!activeView || activeView.id === 'view-home') return;

        // Определяем предыдущий экран
        const nextViewId = this.history.length > 0
            ? this.history.pop()
            : 'home';

        const outgoingView = activeView;

        // Сначала показываем предыдущий экран
        this.showView(nextViewId, false);

        if (animate) {
            const animationClass = direction === 'left'
                ? 'swipe-out-left'
                : 'swipe-out-right';

            outgoingView.classList.add(animationClass);

            setTimeout(() => {
                outgoingView.classList.remove(
                    'swipe-out-left',
                    'swipe-out-right'
                );
            }, 200);
        }

        // Синхронизируем историю браузера,
        // если возврат не вызван событием popstate
        if (!fromPopState && window.history.state?.ttkApp) {
            window.history.back();
        }
    },


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

    // Логика поиска (по названию И по ингредиентам)
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
        
        // УМНЫЙ ПОИСК: проверяем название коктейля ИЛИ наличие ингредиента
        const filteredDrinks = menuData.filter(drink => {
            // 1. Проверяем совпадение по названию коктейля
            const matchesName = drink.name.toLowerCase().includes(lowerQuery);
            
            // 2. Проверяем совпадение по любому ингредиенту в составе
            const matchesIngredient = drink.ingredients.some(ing => 
                ing.name.toLowerCase().includes(lowerQuery)
            );

            // Возвращаем true, если совпало хоть что-то
            return matchesName || matchesIngredient;
        });

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

    openDetail(id) {
        // Сохраняем положение главной страницы
        this.savedHomeScroll = window.scrollY;

        this.currentDrinkId = id;
        this.isEditing = false;
        this.renderDetail();

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

        const favBtn = document.getElementById('fav-btn');
        const isFav = this.favorites.includes(drink.id);
        favBtn.textContent = isFav ? '♥ В избранном' : '♡ Сохранить в избранное';
        favBtn.className = isFav ? 'main-btn saved' : 'main-btn';
        favBtn.style.display = this.isEditing ? 'none' : 'block';

        document.getElementById('edit-btn').textContent = this.isEditing ? '💾 Сохранить' : '✏️';
        document.getElementById('upload-label').classList.toggle('hidden', !this.isEditing);
    },

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

window.onload = () => app.init();