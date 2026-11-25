const app = {
    currentDrinkId: null,
    history: [],
    favorites: [],
    visual: { glass: 'rocks', color: '#dca16c', garnishes: [], ice: true, foam: false },
    activeGarnishIndex: -1,
    dragIndex: -1,
    startX: 0, startY: 0, initialX: 0, initialY: 0,
    isDragging: false,
    isEditorOpen: false,

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
        this.setupSwipe();
    },

    loadData() {
        this.favorites = JSON.parse(localStorage.getItem('ttk_favorites')) || [];
    },

    saveFavorites() {
        localStorage.setItem('ttk_favorites', JSON.stringify(this.favorites));
        this.renderFavorites();
    },

    showView(viewId) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById(`view-${viewId}`).classList.add('active');

        // СБРОС РЕДАКТОРА ПРИ УХОДЕ С ЭКРАНА
        if (viewId !== 'detail') {
            const panel = document.getElementById('visualEditorPanel');
            if (panel) panel.classList.remove('active');
            this.isEditorOpen = false;
            this.activeGarnishIndex = -1;
        }

        if (viewId === 'home') {
            const searchInput = document.getElementById('search-input');
            if (searchInput) searchInput.value = '';
            const catList = document.getElementById('category-list');
            if (catList) catList.style.display = 'flex'; 
            const searchRes = document.getElementById('search-results');
            if (searchRes) searchRes.style.display = 'none';
        }

        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        if(viewId === 'home') document.querySelectorAll('.nav-item')[0].classList.add('active');
        if(viewId === 'favorites') document.querySelectorAll('.nav-item')[1].classList.add('active');
        window.scrollTo(0, 0);
    },

    goHome() { this.showView('home'); },

    goBack() {
        // СБРОС РЕДАКТОРА ПРИ ВОЗВРАТЕ
        const panel = document.getElementById('visualEditorPanel');
        if (panel) panel.classList.remove('active');
        this.isEditorOpen = false;
        this.activeGarnishIndex = -1;

        if (this.history.length > 0) this.showView(this.history.pop());
        else this.showView('home');
    },

    setupSwipe() {

        // return;

        let startX = 0, startY = 0, isSwiping = false;
        document.addEventListener('touchstart', (e) => {
            const activeView = document.querySelector('.view.active');
            if (!activeView || activeView.id === 'view-home' || e.target.closest('.visual-editor-panel') || e.target.closest('.garnish-tools')) return;
            startX = e.touches[0].clientX; startY = e.touches[0].clientY; isSwiping = true;
        }, { passive: true });
        
        document.addEventListener('touchmove', (e) => {
            if (!isSwiping) return;
            const diffX = e.touches[0].clientX - startX;
            const diffY = Math.abs(e.touches[0].clientY - startY);
            if (diffY < 50 && (diffX > 80 || diffX < -80)) {
                isSwiping = false; this.goBack(); 
            }
        }, { passive: true });
        document.addEventListener('touchend', () => { isSwiping = false; });
    },

    getVisualStateFor(id, glassName) {
        const saved = localStorage.getItem(`ttk_visual_${id}`);
        if (saved) return JSON.parse(saved);
        const glassId = this.getGlassId(glassName);
        return {
            glass: glassId, color: '#dca16c', garnishes: [], 
            ice: !this.glasses[glassId].noIce, foam: false
        };
    },

    renderCategories() {
        const container = document.getElementById('category-list');
        if (!container) return;
        container.innerHTML = categories.map(cat => `
            <div class="category-card" onclick="app.openCategory('${cat.id}', '${cat.name}')">
                <div><h3>${cat.name}</h3><p>${cat.desc}</p></div><span>›</span>
            </div>
        `).join('');
    },

    handleSearch(query) {
        const catList = document.getElementById('category-list');
        const searchRes = document.getElementById('search-results');
        if (!catList || !searchRes) return;
        
        if (query.trim() === '') {
            catList.style.display = 'flex'; searchRes.style.display = 'none'; return;
        }
        catList.style.display = 'none'; searchRes.style.display = 'grid';

        const lowerQuery = query.toLowerCase();
        const filtered = menuData.filter(d => 
            d.name.toLowerCase().includes(lowerQuery) || 
            d.ingredients.some(i => i.name.toLowerCase().includes(lowerQuery))
        );

        if (filtered.length === 0) {
            searchRes.innerHTML = '<p style="color: gray; text-align: center; grid-column: span 2;">Ничего не найдено</p>';
            return;
        }
        searchRes.innerHTML = filtered.map(d => {
            const vs = this.getVisualStateFor(d.id, d.glass);
            return `
            <div class="drink-card" onclick="app.openDetail('${d.id}')">
                <div class="drink-thumb">${this.generateSVG(vs)}</div>
                <h4>${d.name}</h4>
            </div>`;
        }).join('');
    },

    clearSearch() {
        const input = document.getElementById('search-input');
        if (input) { input.value = ''; input.blur(); this.handleSearch(''); }
    },

    openCategory(catId, catName) {
        document.getElementById('category-title').textContent = catName;
        const drinks = menuData.filter(d => d.category === catId);
        
        const grid = document.getElementById('drink-grid');
        grid.innerHTML = drinks.map(d => {
            const vs = this.getVisualStateFor(d.id, d.glass);
            return `
            <div class="drink-card" onclick="app.openDetail('${d.id}')">
                <div class="drink-thumb">${this.generateSVG(vs)}</div>
                <h4>${d.name}</h4>
            </div>`;
        }).join('');
        
        this.history.push('home');
        this.showView('category');
    },

    openDetail(id) {
        this.currentDrinkId = id;
        const drink = menuData.find(d => d.id === id);
        if (!drink) return;

        this.visual = this.getVisualStateFor(id, drink.glass);
        this.activeGarnishIndex = -1;

        this.renderDetailText(drink);
        this.renderVisual();
        
        const currentView = document.querySelector('.view.active').id.replace('view-', '');
        this.history.push(currentView);
        this.showView('detail');
        
        setTimeout(() => this.initDragAndDrop(), 50);
    },

    renderDetailText(drink) {
        document.getElementById('detail-name').textContent = drink.name;
        document.getElementById('detail-glass').textContent = drink.glass;
        document.getElementById('detail-method').textContent = drink.method;

        const list = document.getElementById('ingredients-list');
        list.innerHTML = drink.ingredients.map(ing => `
            <li><span>${ing.name}</span> <span><b>${ing.amount}</b> ${ing.unit}</span></li>
        `).join('');

        const favBtn = document.getElementById('fav-btn');
        const isFav = this.favorites.includes(drink.id);
        favBtn.textContent = isFav ? '♥ В избранном' : '♡ Сохранить в избранное';
        favBtn.className = isFav ? 'main-btn saved' : 'main-btn';
    },

    toggleFavorite() {
        const index = this.favorites.indexOf(this.currentDrinkId);
        if (index === -1) this.favorites.push(this.currentDrinkId);
        else this.favorites.splice(index, 1);
        this.saveFavorites();
        this.renderDetailText(menuData.find(d => d.id === this.currentDrinkId));
    },

    renderFavorites() {
        const grid = document.getElementById('favorites-grid');
        if (!grid) return;
        const favDrinks = menuData.filter(d => this.favorites.includes(d.id));
        if (favDrinks.length === 0) {
            grid.innerHTML = '<p style="color: gray; text-align: center; grid-column: span 2;">Пока пусто</p>';
            return;
        }
        grid.innerHTML = favDrinks.map(d => {
            const vs = this.getVisualStateFor(d.id, d.glass);
            return `
            <div class="drink-card" onclick="app.openDetail('${d.id}')">
                <div class="drink-thumb">${this.generateSVG(vs)}</div>
                <h4>${d.name}</h4>
            </div>`;
        }).join('');
    },

    // ================= ВИЗУАЛИЗАТОР =================
    glasses: {
        rocks: { name:"Рокс", icon:"M6 6 H18 L16 21 H8 Z", bowl:"M65 130 H255 L235 350 H85 Z", inner:"M73 137 H247 L228 342 H92 Z", top:[65,130,255,130], clip:[73,137,174,205], garnish:[85,130] },
        oldfashioned: { name:"Олд Фэшн", icon:"M3 5 H21 V21 H3 Z", bowl:"M65 130 H255 V345 Q255 355 245 355 H75 Q65 355 65 345 Z", inner:"M73 137 H247 V340 Q247 347 238 347 H82 Q73 347 73 340 Z", top:[65,130,255,130], clip:[73,137,174,205], garnish:[85,130] },
        highball: { name:"Хайбол", icon:"M5 2 H19 L18 22 H6 Z", bowl:"M85 70 H235 L225 350 H95 Z", inner:"M93 77 H227 L218 343 H102 Z", top:[85,70,235,70], clip:[93,77,134,260], garnish:[100,70] },
        sling: { name:"Слинг", icon:"M5 2 H19 L15 15 L12 19 L9 15 Z", bowl:"M65 60 H255 L160 320 L220 345 H100 L160 320 Z", inner:"M75 68 H245 L160 310 Z", top:[65,60,255,60], clip:[75,68,170,242], garnish:[85,60] },
        martini: { name:"Мартини", icon:"M3 3 H21 L12 14 Z M12 14 V22 M7 22 H17", bowl:"M65 65 H255 L160 215 Z", inner:"M74 72 H246 L160 202 Z", top:[65,65,255,65], clip:[74,72,172,135], garnish:[80,65], stem:"M160 215 V350 M110 350 Q160 357 210 350" },
        coupe: { name:"Шале", icon:"M3 5 Q12 19 21 5 M3 5 H21 M12 14 V22 M7 22 H17", bowl:"M65 130 Q65 190 160 205 Q255 190 255 130 Z", inner:"M73 137 Q74 183 160 197 Q246 183 247 137 Z", top:[65,130,255,130], clip:[73,82,174,115], garnish:[80,130], stem:"M160 205 V350 M110 350 Q160 357 210 350" },
        wine: { name:"Вино", icon:"M7 3 Q7 16 12 16 Q17 16 17 3 Z M12 16 V22 M7 22 H17", bowl:"M95 65 Q95 195 160 220 Q225 195 225 65 Z", inner:"M103 72 Q103 188 160 212 Q217 188 217 72 Z", top:[95,65,225,65], clip:[103,72,114,140], garnish:[105,65], stem:"M160 220 V350 M110 350 Q160 357 210 350" },
        champagne: { name:"Флюте", icon:"M8 2 Q8 17 12 17 Q16 17 16 2 Z M12 17 V22 M7 22 H17", bowl:"M115 65 Q115 190 160 220 Q205 190 205 65 Z", inner:"M123 72 Q123 185 160 212 Q197 185 197 72 Z", top:[115,65,205,65], clip:[123,72,74,140], garnish:[125,65], stem:"M160 220 V350 M110 350 Q160 357 210 350" },
        shot: { name:"Шот", icon:"M6 5 H18 L16 22 H8 Z", bowl:"M112 165 H208 L197 350 H123 Z", inner:"M120 172 H200 L190 343 H130 Z", top:[112,165,208,165], clip:[120,172,80,171], garnish:[130,165], noIce:true, noGarnish:true, noFoam:true },
        beer: { name:"Кружка", icon:"M5 3 H16 V22 H5 Z M16 8 H21 V18 H16", bowl:"M82 100 H218 V350 H82 Z", inner:"M90 108 H210 V342 H90 Z", top:[82,100,218,100], clip:[90,108,120,234], garnish:[95,100], handle:true }
    },

    getGlassId(glassName) {
        if (!glassName) return 'rocks';
        const name = glassName.toLowerCase();
        if (name.includes('шот')) return 'shot';
        if (name.includes('рокс')) return 'rocks';
        if (name.includes('олд')) return 'oldfashioned';
        if (name.includes('слинг')) return 'sling';
        if (name.includes('хайбол')) return 'highball';
        if (name.includes('шале')) return 'coupe';
        if (name.includes('мартини') || name.includes('маргарит')) return 'martini';
        if (name.includes('вино')) return 'wine';
        if (name.includes('флюте') || name.includes('шампан') || name.includes('айриш')) return 'champagne';
        if (name.includes('кружка')) return 'beer';
        return 'rocks';
    },

    // Замените generateSVG и renderVisual на эти:
    generateSVG(vs) {
        const uid = Math.random().toString(36).substring(2, 8); 
        const clipId = `clip_${uid}`;
        const liquidId = `liquid_${uid}`;
        const glassId = `glass_${uid}`;
        const iceId = `ice_${uid}`;

        const g = this.glasses[vs.glass] || this.glasses.rocks;
        const clipPath = `<clipPath id="${clipId}"><path d="${g.inner}"/></clipPath>`;
        
        const handle = g.handle ? `<path d="M218 145 H239 Q260 145 260 185 V260 Q260 285 218 285" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="9"/><path d="M221 155 H237 Q251 155 251 185 V255 Q251 274 221 275" fill="none" stroke="#fff" stroke-opacity=".15" stroke-width="4"/>` : "";
        const stem = g.stem ? `<path d="${g.stem}" fill="none" stroke="rgba(255,255,255,.6)" stroke-width="4" stroke-linecap="round"/><path d="${g.stem}" fill="none" stroke="rgba(255,255,255,.23)" stroke-width="1.2"/>` : "";
        
        const liquid = this.getLiquidSVG(g, vs, liquidId);
        const ice = this.getIceSVG(g, vs, iceId);
        
        // Окантовка
        let rim = "";
        if (vs.rim && vs.rim !== 'none') {
            const [x1,y1,x2,y2] = g.top;
            let fill = vs.rim === 'salt' ? '#fffdf3' : vs.rim === 'coconut' ? '#eee2cb' : '#5b291c';
            const length = Math.hypot(x2-x1, y2-y1);
            let rimOut = `<path d="M${x1} ${y1} H${x2}" stroke="${fill}" stroke-width="5" stroke-opacity=".4" stroke-linecap="round" fill="none"/>`;
            for(let i=0; i<=length; i+=4){
                const t=i/length, x=x1+(x2-x1)*t, y=y1+(y2-y1)*t;
                const r = vs.rim === 'coconut' ? 1.7 : 1.35;
                rimOut += `<circle cx="${x}" cy="${y+Math.sin(i)*3}" r="${r+Math.random()*.8}" fill="${fill}"/>`;
                if(vs.rim === 'coconut' && i%8===0) rimOut += `<path d="M${x-2} ${y-3} l4 5" stroke="#fff" stroke-width="1.2"/>`;
                if(vs.rim === 'chocolate' && i%12===0) rimOut += `<circle cx="${x+1}" cy="${y+2}" r="2" fill="#9b6040"/>`;
            }
            rim = rimOut;
        }

        let decorations = "";
        if(vs.garnishes) {
            decorations = vs.garnishes.map((item, index) => {
                const isSelected = this.activeGarnishIndex === index;
                return `
                <g class="garnish-wrapper ${isSelected ? 'selected-garnish' : ''}" 
                   data-index="${index}"
                   transform="translate(${item.x} ${item.y}) rotate(-15) scale(${item.scale})"
                   style="cursor: ${this.isEditorOpen ? 'move' : 'default'}; pointer-events: ${this.isEditorOpen ? 'all' : 'none'};">
                    ${this.getGarnishPath(item.id)}
                    <circle cx="20" cy="20" r="30" fill="transparent"/>
                    <circle cx="20" cy="20" r="30" stroke="#9663ff" stroke-width="2" stroke-dasharray="4" fill="none" class="${isSelected ? '' : 'hidden'}"/>
                </g>`;
            }).join('');
        }

        // Применяем зум к SVG
        const zoom = vs.zoom || 100;

        return `
        <svg viewBox="0 0 320 420" style="width: 100%; height: 100%; display: block; transform: scale(${zoom/100}); transition: transform 0.2s;">
            <defs>
                ${clipPath}
                <linearGradient id="${liquidId}" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stop-color="${this.colorChange(vs.color,35)}"/>
                    <stop offset=".5" stop-color="${vs.color}"/>
                    <stop offset="1" stop-color="${this.colorChange(vs.color,-25)}"/>
                </linearGradient>
                <linearGradient id="${glassId}" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset=".12" stop-color="#fff" stop-opacity=".08"/><stop offset=".45" stop-color="#fff" stop-opacity=".02"/><stop offset=".8" stop-color="#fff" stop-opacity=".05"/><stop offset="1" stop-color="#fff" stop-opacity=".4"/>
                </linearGradient>
                <linearGradient id="${iceId}" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#fff" stop-opacity=".9"/><stop offset=".45" stop-color="#d9efff" stop-opacity=".5"/><stop offset="1" stop-color="#a2c9e7" stop-opacity=".3"/>
                </linearGradient>
            </defs>
            ${stem} ${handle}
            <path d="${g.bowl}" fill="rgba(255,255,255,.035)"/>
            <g clip-path="url(#${clipId})">${liquid} ${ice}</g>
            <path d="${g.bowl}" fill="url(#${glassId})" fill-opacity=".2" stroke="rgba(255,255,255,.85)" stroke-width="2.5" stroke-linejoin="round"/>
            <path d="${g.inner}" fill="none" stroke="rgba(255,255,255,.17)" stroke-width="1.2"/>
            <path d="${g.bowl}" fill="none" stroke="#fff" stroke-opacity=".16" stroke-width=".8"/>
            ${rim}
            ${decorations}
        </svg>`;
    },

    // Замените renderVisual на этот (тут мы добавляем панель управления гарниром в DOM)
    renderVisual() {
        const container = document.getElementById('generator-preview');
        container.innerHTML = this.generateSVG(this.visual);
        
        // Если гарнир НЕ выбран, скрываем панель
        if (this.activeGarnishIndex === -1) {
            const tools = document.getElementById('garnishTools');
            if (tools) tools.style.display = 'none';
        }

        this.initDragAndDrop();
    },


    colorChange(hex, amount) {
        const n = parseInt(hex.slice(1), 16);
        const r = Math.max(0, Math.min(255, (n >> 16) + amount));
        const g = Math.max(0, Math.min(255, ((n >> 8) & 255) + amount));
        const b = Math.max(0, Math.min(255, (n & 255) + amount));
        return "#" + [r, g, b].map(v => Math.round(v).toString(16).padStart(2, "0")).join("");
    },

    getLiquidSVG(g, vs, liquidId) {
        let out = `<rect width="320" height="420" fill="url(#${liquidId})"/>`;
        if (vs.foam && !g.noFoam) {
            const topY = g.top[1];
            let foamHTML = `<rect x="0" y="${topY}" width="320" height="15" fill="#fffcf5"/>`;
            const bubbles = [{x:20,y:topY+7,r:4},{x:60,y:topY+9,r:6},{x:105,y:topY+5,r:4},{x:145,y:topY+10,r:5},{x:185,y:topY+8,r:7},{x:230,y:topY+7,r:5},{x:275,y:topY+9,r:6},{x:310,y:topY+5,r:4}];
            bubbles.forEach(b => {
                foamHTML += `<circle cx="${b.x}" cy="${b.y}" r="${b.r}" fill="#fffcf5"/><circle cx="${b.x - b.r/3}" cy="${b.y - b.r/3}" r="${b.r/2.5}" fill="#fff" opacity="0.6"/>`;
            });
            foamHTML += `<path d="M0 ${topY+15} Q20 ${topY+18} 40 ${topY+15} T80 ${topY+15} T120 ${topY+15} T160 ${topY+15} T200 ${topY+15} T240 ${topY+15} T280 ${topY+15} T320 ${topY+15} V${topY+20} H0 Z" fill="#f2e6d8" opacity="0.9"/>`;
            out += `<g>${foamHTML}</g>`;
        }
        return out;
    },

    getIceSVG(g, vs, iceId) {
        if (!vs.ice || g.noIce) return "";
        let out = "";
        const size = 32; // Тот самый крупный лед
        const gap = 45;
        const startY = g.top[1] + 20;
        let row = 0;
        for (let cy = startY; cy < 420; cy += gap) {
            const offsetX = (row % 2) * (gap / 2);
            for (let cx = 0; cx < 320; cx += gap) {
                const ix = cx + offsetX + (Math.random() * 10 - 5);
                const iy = cy + (Math.random() * 10 - 5);
                const a = Math.random() * 40 - 20;
                out += `<g transform="translate(${ix} ${iy}) rotate(${a} ${size/2} ${size/2})"><rect width="${size}" height="${size}" rx="6" fill="url(#${iceId})" stroke="#fff" stroke-opacity=".3" stroke-width="1"/><path d="M4 4 H16 L4 16Z" fill="#fff" opacity=".3"/></g>`;
            }
            row++;
        }
        return out;
    },

    getGarnishPath(id) {
        if (id === "lemon") return `<path d="M0 19 Q28 -11 57 19 Q28 47 0 19Z" fill="#f5a52d" stroke="#c47720" stroke-width="2"/><path d="M5 19 Q28 -4 52 19 Q28 40 5 19Z" fill="#ffe28a" stroke="#fff" stroke-opacity=".5"/><path d="M28 3 V35 M12 11 L21 19 M44 11 L35 19" stroke="#c47720" stroke-width="1.7" fill="none"/><path d="M28 5 L28 33 M8 19 H49" stroke="#fff" stroke-opacity=".35" stroke-width="1"/>`;
        if (id === "lime") return `<path d="M0 19 Q28 -11 57 19 Q28 47 0 19Z" fill="#79bd48" stroke="#3d8539" stroke-width="2"/><path d="M5 19 Q28 -4 52 19 Q28 40 5 19Z" fill="#b8e889" stroke="#fff" stroke-opacity=".5"/><path d="M28 3 V35 M12 11 L21 19 M44 11 L35 19" stroke="#3d8539" stroke-width="1.7" fill="none"/><path d="M28 5 L28 33 M8 19 H49" stroke="#fff" stroke-opacity=".35" stroke-width="1"/>`;
        if (id === "orange") return `<circle cx="22" cy="22" r="21" fill="#e98722" stroke="#ad5919" stroke-width="2"/><circle cx="22" cy="22" r="17" fill="#ffc65e"/><circle cx="22" cy="22" r="3" fill="#fff1b4"/>`;
        if (id === "oreo") return `<circle cx="22" cy="22" r="21" fill="#171414" stroke="#57504c" stroke-width="2"/><circle cx="22" cy="22" r="16" fill="#282322" stroke="#70615a"/><circle cx="22" cy="22" r="10" fill="#f3e9d7"/><circle cx="22" cy="22" r="6" fill="#292322"/>`;
        if (id === "bamboo") return `<path d="M0 0 Q-10 -45 4 -100 Q15 -155 5 -205 Q38 -170 30 -120 Q25 -65 0 0Z" fill="#3f983c" stroke="#286b30" stroke-width="2"/><path d="M0 0 Q20 -90 5 -205" stroke="#a5d76b" stroke-width="2.4" fill="none"/>`;
        if (id === "straw") return `<path d="M0 0 L60 -155" stroke="#1a1a1a" stroke-width="10" stroke-linecap="round"/><path d="M1 0 L61 -155" stroke="#4a4a4a" stroke-width="3" stroke-linecap="round"/><path d="M-1 0 L59 -155" stroke="#fff" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>`;
        if (id === "flag") return `<path d="M0 0 L0 -125" stroke="#c9a96c" stroke-width="3"/><path d="M2 -125 Q25 -115 52 -120 L48 -90 Q24 -94 2 -83Z" fill="#e94555" stroke="#a52b3b" stroke-width="1.5"/>`;
        return "";
    },

    // ================= РЕДАКТОР =================
    toggleVisualEditor() {
        const panel = document.getElementById('visualEditorPanel');
        panel.classList.toggle('active');
        this.isEditorOpen = panel.classList.contains('active');

        if (!this.isEditorOpen) {
            this.activeGarnishIndex = -1;
            const tools = document.getElementById('garnishTools');
            if (tools) tools.style.display = 'none';
        }
        
        this.renderVisual();
        if(this.isEditorOpen) this.initVisualEditorUI();
    },

    // Замените initVisualEditorUI (добавил rim и zoom)
    initVisualEditorUI() {
        document.getElementById('v-glassPicker').innerHTML = Object.entries(this.glasses).map(([id, g]) => `
            <button class="v-btn ${this.visual.glass === id ? 'active' : ''}" onclick="app.updateVisual('glass', '${id}'); app.initVisualEditorUI();">${g.name}</button>
        `).join('');

        const colors = ["#f6d15a","#e75b5b","#58a9e8","#8bdb70","#592b1c","#dca16c","#eee9df","#b47ce0","#ef8b38","#c94f91","#4dc9b2","#6074cc"];
        document.getElementById('v-colorPicker').innerHTML = colors.map(c => `
            <div class="v-color ${this.visual.color === c ? 'active' : ''}" style="background:${c}" onclick="app.updateVisual('color', '${c}'); app.initVisualEditorUI();"></div>
        `).join('');

        const garnishes = { lemon:"Лимон", lime:"Лайм", orange:"Апельсин", straw:"Трубочка", bamboo:"Бамбук", flag:"Флажок", oreo:"Oreo" };
        document.getElementById('v-garnishPicker').innerHTML = Object.entries(garnishes).map(([id, name]) => {
            const has = this.visual.garnishes.some(g => g.id === id);
            return `<button class="v-btn ${has ? 'active' : ''}" onclick="app.toggleGarnish('${id}')">${name}</button>`;
        }).join('');

        document.getElementById('v-iceToggle').checked = this.visual.ice;
        document.getElementById('v-foamToggle').checked = this.visual.foam;
        document.getElementById('v-rimSelect').value = this.visual.rim || 'none';
        document.getElementById('v-zoomSlider').value = this.visual.zoom || 100;
    },

    updateVisual(key, value) {
        this.visual[key] = value;
        this.renderVisual();
    },

    toggleGarnish(id) {
        const idx = this.visual.garnishes.findIndex(g => g.id === id);
        if (idx > -1) {
            this.visual.garnishes.splice(idx, 1);
            if(this.activeGarnishIndex === idx) this.activeGarnishIndex = -1;
        } else {
            const g = this.glasses[this.visual.glass];
            this.visual.garnishes.push({ id: id, x: g.garnish[0] - 20, y: g.garnish[1] - 10, scale: 1.5 });
            this.activeGarnishIndex = this.visual.garnishes.length - 1;
        }
        this.renderVisual();
        this.initVisualEditorUI();
    },

    saveVisualState() {
        localStorage.setItem(`ttk_visual_${this.currentDrinkId}`, JSON.stringify(this.visual));
        this.toggleVisualEditor();
    },


    initDragAndDrop() {
        const svg = document.querySelector('#generator-preview svg');
        if(!svg) return;

        let dragIdx = -1;
        let startX, startY, initialX, initialY;
        let isDragging = false;

        const getCoords = (e) => {
            const rect = svg.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            const zoom = (this.visual.zoom || 100) / 100;
            return { 
                x: ((clientX - rect.left) / rect.width) * 320 / zoom, 
                y: ((clientY - rect.top) / rect.height) * 420 / zoom 
            };
        };

        svg.addEventListener("pointerdown", (e) => {
            // ПРОВЕРКА: Работает только если открыт редактор
            const panel = document.getElementById('visualEditorPanel');
            if (!panel.classList.contains('active')) return;

            const wrapper = e.target.closest('.garnish-wrapper');
            if (!wrapper) {
                if (this.activeGarnishIndex !== -1) {
                    this.activeGarnishIndex = -1;
                    this.renderVisual();
                }
                return;
            }
            
            e.preventDefault();
            dragIdx = parseInt(wrapper.dataset.index);
            this.activeGarnishIndex = dragIdx;
            
            this.showGarnishTools();
            svg.querySelectorAll('.garnish-wrapper circle:last-child').forEach(c => c.classList.add('hidden'));
            wrapper.querySelector('circle:last-child').classList.remove('hidden');

            const coords = getCoords(e);
            startX = coords.x; startY = coords.y;
            initialX = this.visual.garnishes[dragIdx].x;
            initialY = this.visual.garnishes[dragIdx].y;
            isDragging = true;

            svg.setPointerCapture(e.pointerId);
        });

        svg.addEventListener("pointermove", (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const coords = getCoords(e);
            this.visual.garnishes[dragIdx].x = initialX + (coords.x - startX);
            this.visual.garnishes[dragIdx].y = initialY + (coords.y - startY);

            const wrapper = svg.querySelector(`.garnish-wrapper[data-index="${dragIdx}"]`);
            if(wrapper) {
                const item = this.visual.garnishes[dragIdx];
                wrapper.setAttribute("transform", `translate(${item.x} ${item.y}) rotate(-15) scale(${item.scale})`);
            }
        });

        svg.addEventListener("pointerup", (e) => {
            isDragging = false;
            svg.releasePointerCapture(e.pointerId);
        });
        svg.addEventListener("pointercancel", (e) => {
            isDragging = false;
            svg.releasePointerCapture(e.pointerId);
        });
    },

    // Выносим показ панели в отдельную функцию
    showGarnishTools() {
        let tools = document.getElementById('garnishTools');
        if (!tools) {
            tools = document.createElement('div');
            tools.id = 'garnishTools';
            tools.className = 'garnish-tools';
            tools.innerHTML = `
                <label>Размер:</label>
                <input type="range" id="garnishScaleInput" min="0.5" max="5" step="0.1" value="${this.visual.garnishes[this.activeGarnishIndex].scale}" oninput="app.updateGarnishScale(this.value)">
                <button onclick="app.deleteActiveGarnish()" style="background:rgba(255,75,75,0.2); color:#ff6b6b; border:1px solid rgba(255,75,75,0.4); border-radius:6px; padding:5px 10px; font-size:12px; cursor:pointer;">Удалить</button>
            `;
            document.querySelector('.detail-hero').appendChild(tools);
        } else {
            tools.style.display = 'flex';
            document.getElementById('garnishScaleInput').value = this.visual.garnishes[this.activeGarnishIndex].scale;
        }
    },





    // Функция обновления шкалы (замените)
    updateGarnishScale(val) {
        if (this.activeGarnishIndex >= 0) {
            this.visual.garnishes[this.activeGarnishIndex].scale = parseFloat(val);
            const svg = document.querySelector('#generator-preview svg');
            const wrapper = svg.querySelector(`.garnish-wrapper[data-index="${this.activeGarnishIndex}"]`);
            if(wrapper) {
                const item = this.visual.garnishes[this.activeGarnishIndex];
                wrapper.setAttribute("transform", `translate(${item.x} ${item.y}) rotate(-15) scale(${item.scale})`);
            }
        }
    },

    deleteActiveGarnish() {
        if (this.activeGarnishIndex >= 0) {
            this.visual.garnishes.splice(this.activeGarnishIndex, 1);
            this.activeGarnishIndex = -1;
            this.renderVisual();
            this.initVisualEditorUI();
        }
    },

    // ================= ЭКСПОРТ / ИМПОРТ =================
    exportData() {
        let data = {};
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('ttk_visual_')) {
                data[key] = JSON.parse(localStorage.getItem(key));
            }
        }
        const blob = new Blob([JSON.stringify(data, null, 2)], {type: "application/json"});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cocktails_visuals.json';
        a.click();
    },

    importData(event) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result);
                Object.keys(data).forEach(key => {
                    if(key.startsWith('ttk_visual_')) {
                        localStorage.setItem(key, JSON.stringify(data[key]));
                    }
                });
                alert('Настройки загружены!');
                this.renderCategories();
                this.renderFavorites();
                if(this.currentDrinkId) {
                    const drink = menuData.find(d => d.id === this.currentDrinkId);
                    this.visual = this.getVisualStateFor(this.currentDrinkId, drink.glass);
                    this.renderVisual();
                }
            } catch(err) {
                alert('Ошибка при чтении файла!');
            }
        };
        reader.readAsText(file);
    }
};

window.onload = () => app.init();