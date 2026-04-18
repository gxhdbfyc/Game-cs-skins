// ==================== ДАННЫЕ КЕЙСОВ ====================
// Цены указаны в USD (базовая валюта)

const casesData = {
    "Gamma Case": {
        name: "Кейс «Гамма»",
        price: 2.49,
        image: "img/Gamma Case/Gamma Case.png",
        items: [
            { name: "MAC-10 Carnivore", image: "img/Gamma Case/item Gamma Case/MAC-10 Carnivore.png", rarity: "consumer", price: 0.80 },
            { name: "Nova Exo", image: "img/Gamma Case/item Gamma Case/Nova Exo.png", rarity: "consumer", price: 0.65 },
            { name: "Sawed-Off Limelight", image: "img/Gamma Case/item Gamma Case/Sawed-Off Limelight.png", rarity: "consumer", price: 0.55 },
            { name: "PP-Bizon Harvester", image: "img/Gamma Case/item Gamma Case/PP-Bizon Harvester.png", rarity: "industrial", price: 1.20 },
            { name: "Tec-9 Ice Cap", image: "img/Gamma Case/item Gamma Case/Tec-9 Ice Cap.png", rarity: "industrial", price: 1.50 },
            { name: "P250 Iron Clad", image: "img/Gamma Case/item Gamma Case/P250 Iron Clad.png", rarity: "industrial", price: 1.35 },
            { name: "SG 553 Aerial", image: "img/Gamma Case/item Gamma Case/SG 553 Aerial.png", rarity: "mil-spec", price: 2.20 },
            { name: "Five-SeveN Violent Daimyo", image: "img/Gamma Case/item Gamma Case/Five-SeveN Violent Daimyo.png", rarity: "mil-spec", price: 2.80 },
            { name: "P90 Chopper", image: "img/Gamma Case/item Gamma Case/P90 Chopper.png", rarity: "mil-spec", price: 3.10 },
            { name: "R8 Revolver Reboot", image: "img/Gamma Case/item Gamma Case/R8 Revolver Reboot.png", rarity: "mil-spec", price: 2.50 },
            { name: "AUG Aristocrat", image: "img/Gamma Case/item Gamma Case/AUG Aristocrat.png", rarity: "restricted", price: 5.50 },
            { name: "P2000 Imperial Dragon", image: "img/Gamma Case/item Gamma Case/P2000 Imperial Dragon.png", rarity: "restricted", price: 7.00 },
            { name: "AWP Phobos", image: "img/Gamma Case/item Gamma Case/AWP Phobos.png", rarity: "restricted", price: 8.50 },
            { name: "SCAR-20 Bloodsport", image: "img/Gamma Case/item Gamma Case/SCAR-20 Bloodsport.png", rarity: "classified", price: 15.00 },
            { name: "Glock-18 Wasteland Rebel", image: "img/Gamma Case/item Gamma Case/Glock-18 Wasteland Rebel.png", rarity: "classified", price: 22.00 },
            { name: "M4A1-S Mecha Industries", image: "img/Gamma Case/item Gamma Case/M4A1-S Mecha Industries.png", rarity: "covert", price: 65.00 },
            { name: "M4A4 Desolate Space", image: "img/Gamma Case/item Gamma Case/M4A4 Desolate Space.png", rarity: "covert", price: 55.00 },
            { name: "★ Karambit Gamma Doppler Emerald", image: "img/Gamma Case/item Gamma Case/★ Karambit Gamma Doppler Emerald.png", rarity: "rare", price: 2500.00 }
        ]
    },
    "Kilowatt Case": {
        name: "Кейс «Киловатт»",
        price: 3.99,
        image: "img/Kilowatt Case/Kilowatt Case.png",
        items: [
            { name: "MAC-10 Light Box", image: "img/Kilowatt Case/item Kilowatt Case/MAC-10 Light Box.png", rarity: "consumer", price: 1.10 },
            { name: "Nova Dark Sigil", image: "img/Kilowatt Case/item Kilowatt Case/Nova Dark Sigil.png", rarity: "consumer", price: 0.95 },
            { name: "SSG 08 Dezastre", image: "img/Kilowatt Case/item Kilowatt Case/SSG 08 Dezastre.png", rarity: "consumer", price: 0.85 },
            { name: "Tec-9 Slag", image: "img/Kilowatt Case/item Kilowatt Case/Tec-9 Slag.png", rarity: "industrial", price: 1.80 },
            { name: "Sawed-Off Analog Input", image: "img/Kilowatt Case/item Kilowatt Case/Sawed-Off Analog Input.png", rarity: "industrial", price: 1.50 },
            { name: "Five-SeveN Hybrid", image: "img/Kilowatt Case/item Kilowatt Case/Five-SeveN Hybrid.png", rarity: "industrial", price: 1.65 },
            { name: "UMP-45 Motorized", image: "img/Kilowatt Case/item Kilowatt Case/UMP-45 Motorized.png", rarity: "mil-spec", price: 3.50 },
            { name: "MP7 Just Smile", image: "img/Kilowatt Case/item Kilowatt Case/MP7 Just Smile.png", rarity: "mil-spec", price: 4.20 },
            { name: "XM1014 Irezumi", image: "img/Kilowatt Case/item Kilowatt Case/XM1014 Irezumi.png", rarity: "mil-spec", price: 3.20 },
            { name: "Zeus x27 Olympus", image: "img/Kilowatt Case/item Kilowatt Case/Zeus x27 Olympus.png", rarity: "mil-spec", price: 4.80 },
            { name: "USP-S Jawbreaker", image: "img/Kilowatt Case/item Kilowatt Case/USP-S Jawbreaker.png", rarity: "restricted", price: 9.50 },
            { name: "M4A4 Etch Lord", image: "img/Kilowatt Case/item Kilowatt Case/M4A4 Etch Lord.png", rarity: "restricted", price: 12.00 },
            { name: "Glock-18 Block-18", image: "img/Kilowatt Case/item Kilowatt Case/Glock-18 Block-18.png", rarity: "restricted", price: 10.50 },
            { name: "AWP Chrome Cannon", image: "img/Kilowatt Case/item Kilowatt Case/AWP Chrome Cannon.png", rarity: "classified", price: 35.00 },
            { name: "M4A1-S Black Lotus", image: "img/Kilowatt Case/item Kilowatt Case/M4A1-S Black Lotus.png", rarity: "classified", price: 48.00 },
            { name: "AK-47 Inheritance", image: "img/Kilowatt Case/item Kilowatt Case/AK-47 Inheritance.png", rarity: "covert", price: 150.00 },
            { name: "★ Kukri Knife Fade", image: "img/Kilowatt Case/item Kilowatt Case/★ Kukri Knife Fade.png", rarity: "rare", price: 1800.00 }
        ]
    },
    "Revolution Case": {
        name: "Кейс «Революция»",
        price: 2.99,
        image: "img/Revolution Case/Revolution Case.png",
        items: [
            { name: "MP9 Featherweight", image: "img/Revolution Case/item Revolution Case/MP9 Featherweight.png", rarity: "consumer", price: 0.75 },
            { name: "MAG-7 Insomnia", image: "img/Revolution Case/item Revolution Case/MAG-7 Insomnia.png", rarity: "consumer", price: 0.60 },
            { name: "MP5-SD Liquidation", image: "img/Revolution Case/item Revolution Case/MP5-SD Liquidation.png", rarity: "consumer", price: 0.85 },
            { name: "Tec-9 Rebel", image: "img/Revolution Case/item Revolution Case/Tec-9 Rebel.png", rarity: "industrial", price: 1.40 },
            { name: "P250 Re.built", image: "img/Revolution Case/item Revolution Case/P250 Re.built.png", rarity: "industrial", price: 1.60 },
            { name: "SCAR-20 Fragments", image: "img/Revolution Case/item Revolution Case/SCAR-20 Fragments.png", rarity: "industrial", price: 1.25 },
            { name: "SG 553 Cyberforce", image: "img/Revolution Case/item Revolution Case/SG 553 Cyberforce.png", rarity: "mil-spec", price: 2.80 },
            { name: "MAC-10 Sakkaku", image: "img/Revolution Case/item Revolution Case/MAC-10 Sakkaku.png", rarity: "mil-spec", price: 3.30 },
            { name: "UMP-45 Wild Child", image: "img/Revolution Case/item Revolution Case/UMP-45 Wild Child.png", rarity: "mil-spec", price: 2.50 },
            { name: "R8 Revolver Banana Cannon", image: "img/Revolution Case/item Revolution Case/R8 Revolver Banana Cannon.png", rarity: "mil-spec", price: 3.60 },
            { name: "P2000 Wicked Sick", image: "img/Revolution Case/item Revolution Case/P2000 Wicked Sick.png", rarity: "restricted", price: 6.50 },
            { name: "Glock-18 Umbral Rabbit", image: "img/Revolution Case/item Revolution Case/Glock-18 Umbral Rabbit.png", rarity: "restricted", price: 8.00 },
            { name: "P90 Neoqueen", image: "img/Revolution Case/item Revolution Case/P90 Neoqueen.png", rarity: "restricted", price: 5.80 },
            { name: "M4A4 Temukau", image: "img/Revolution Case/item Revolution Case/M4A4 Temukau.png", rarity: "classified", price: 28.00 },
            { name: "M4A1-S Emphorosaur-S", image: "img/Revolution Case/item Revolution Case/M4A1-S Emphorosaur-S.png", rarity: "classified", price: 35.00 },
            { name: "AK-47 Head Shot", image: "img/Revolution Case/item Revolution Case/AK-47 Head Shot.png", rarity: "covert", price: 110.00 },
            { name: "AWP Duality", image: "img/Revolution Case/item Revolution Case/AWP Duality.png", rarity: "covert", price: 125.00 },
            { name: "★ Sport Gloves Amphibious", image: "img/Revolution Case/item Revolution Case/★ Sport Gloves Amphibious.png", rarity: "rare", price: 1200.00 }
        ]
    }
};

// ==================== НАСТРОЙКИ ВАЛЮТ ====================

const currencies = {
    USD: { symbol: '$', rate: 1, name: 'USD' },
    EUR: { symbol: '€', rate: 0.92, name: 'EUR' },
    RUB: { symbol: '₽', rate: 92.50, name: 'RUB' }
};

// По умолчанию рубли
let currentCurrency = localStorage.getItem('cs2_currency') || 'RUB';

// ==================== СТАТИСТИКА ====================

let stats = JSON.parse(localStorage.getItem('cs2_stats')) || {
    casesOpened: 0,
    moneySpent: 0,
    itemsSold: 0,
    moneyEarned: 0,
    rarityDrops: {
        consumer: 0,
        industrial: 0,
        'mil-spec': 0,
        restricted: 0,
        classified: 0,
        covert: 0,
        rare: 0
    }
};

// ==================== ДОСТИЖЕНИЯ ====================

const achievementsList = [
    { id: 'first_blood', name: 'Первая кровь', desc: 'Открыть первый кейс', icon: '🩸', check: (s) => s.casesOpened >= 1 },
    { id: 'gambler', name: 'Лудоман', desc: 'Открыть 50 кейсов', icon: '🎰', check: (s) => s.casesOpened >= 50 },
    { id: 'high_roller', name: 'High Roller', desc: 'Потратить более $500', icon: '💸', check: (s) => s.moneySpent >= 500 },
    { id: 'trash_king', name: 'Король ширпотреба', desc: 'Собрать 50 предметов Consumer Grade', icon: '🗑️', check: (s) => s.rarityDrops.consumer >= 50 },
    { id: 'lucky_shot', name: 'Счастливчик', desc: 'Выбить Тайное (Covert) оружие', icon: '🍀', check: (s) => s.rarityDrops.covert >= 1 },
    { id: 'legend', name: 'Легенда', desc: 'Выбить Нож или Перчатки (Rare)', icon: '👑', check: (s) => s.rarityDrops.rare >= 1 },
    { id: 'businessman', name: 'Бизнесмен', desc: 'Продать 100 предметов', icon: '💼', check: (s) => s.itemsSold >= 100 },
    { id: 'collector', name: 'Коллекционер', desc: 'Собрать 50 предметов в инвентаре', icon: '🎒', check: () => inventory.length >= 50 },
    { id: 'broke', name: 'На мели', desc: 'Остаться с балансом менее $1', icon: '📉', check: () => balance < 1 && stats.casesOpened > 0 }
];

let unlockedAchievements = JSON.parse(localStorage.getItem('cs2_achievements')) || [];

// ==================== СОСТОЯНИЕ ПРИЛОЖЕНИЯ ====================

// Начальный баланс: 1000 рублей = ~10.81 USD
const INITIAL_BALANCE_USD = 10.81;
let balance = parseFloat(localStorage.getItem('cs2_balance')) || INITIAL_BALANCE_USD;
let inventory = JSON.parse(localStorage.getItem('cs2_inventory')) || [];
let currentCase = null;
let wonItem = null;
let isSpinning = false;
let lastOpeningMode = 'normal'; // 'normal' или 'fast'

// ==================== ИНИЦИАЛИЗАЦИЯ ====================

document.addEventListener('DOMContentLoaded', () => {
    updateCurrencyDisplay();
    updateBalance();
    updateInventory();
    renderCases();
    initButtons();
    updateAchievementsBadge();
    
    // Закрытие меню валюты при клике вне его
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.currency-selector')) {
            document.getElementById('currencyMenu').classList.remove('show');
        }
    });
});

// ==================== ВАЛЮТА ====================

function formatPrice(priceUSD) {
    const currency = currencies[currentCurrency];
    const converted = priceUSD * currency.rate;
    
    if (currentCurrency === 'RUB') {
        return converted.toFixed(0) + currency.symbol;
    }
    return currency.symbol + converted.toFixed(2);
}

function formatPriceNumber(priceUSD) {
    const currency = currencies[currentCurrency];
    const converted = priceUSD * currency.rate;
    
    if (currentCurrency === 'RUB') {
        return converted.toFixed(0);
    }
    return converted.toFixed(2);
}

function toggleCurrencyMenu() {
    document.getElementById('currencyMenu').classList.toggle('show');
}

function setCurrency(currency) {
    currentCurrency = currency;
    localStorage.setItem('cs2_currency', currency);
    updateCurrencyDisplay();
    updateBalance();
    renderCases();
    renderInventory();
    updateStats();
    document.getElementById('currencyMenu').classList.remove('show');
}

function updateCurrencyDisplay() {
    const currency = currencies[currentCurrency];
    document.getElementById('currencySymbol').textContent = currency.symbol;
    document.getElementById('currentCurrency').textContent = currency.name;
}

function initButtons() {
    const bindTap = (id, handler) => {
        const el = document.getElementById(id);
        if (!el) return;
        
        // Очищаем старые обработчики и клонируем элемент для сброса event listeners
        const newEl = el.cloneNode(true);
        el.parentNode.replaceChild(newEl, el);
        
        // Используем стандартный click. Из-за viewport meta tag задержки 300мс на мобильных нет.
        // Это самое надежное решение для всех браузеров, включая Telegram Webview.
        newEl.addEventListener('click', (e) => {
            e.preventDefault(); // Предотвращаем нативные действия (если есть)
            
            if (!newEl.disabled && newEl.style.display !== 'none') {
                handler();
            }
        });
    };
    
    bindTap('openCaseBtn', openCase);
    bindTap('openCaseFastBtn', openCaseFast);
    
    // Кнопка "Открыть снова"
    bindTap('openAgainBtn', () => {
        // Если предыдущий предмет не был обработан пользователем - сохраняем его
        if (wonItem) {
            if (inventory.length >= 50) {
                showNotification('Инвентарь полон (50/50)! Предмет продан автоматически.', 'error');
                sellWonItem();
                // Блокируем или продолжаем?
                // Логично продолжить открытие, но сообщить о продаже
            } else {
                inventory.push({...wonItem, id: Date.now()});
                saveData();
                checkAchievements();
                updateInventory();
                showNotification(`${wonItem.name} сохранен в инвентарь`, 'success');
                wonItem = null; // Сбрасываем, чтобы не задублировался
            }
        }
        
        // Скрываем результат победы
        document.getElementById('winDisplay').classList.remove('show');
        document.getElementById('rouletteContainer').classList.remove('show');
        
        // Запускаем новое открытие в том же режиме
        if (lastOpeningMode === 'fast') {
            openCaseFast();
        } else {
            openCase();
        }
    });
}

// ==================== РЕНДЕРИНГ ====================

function renderCases() {
    const grid = document.getElementById('casesGrid');
    grid.innerHTML = '';

    Object.keys(casesData).forEach(caseKey => {
        const caseData = casesData[caseKey];
        const card = document.createElement('div');
        card.className = 'case-card';
        card.onclick = () => openCaseModal(caseKey);
        card.innerHTML = `
            <img src="${caseData.image}" alt="${caseData.name}">
            <h3>${caseData.name}</h3>
            <p class="price">${formatPrice(caseData.price)}</p>
            <span class="open-text">Открыть кейс</span>
        `;
        grid.appendChild(card);
    });
}

function renderInventory() {
    const grid = document.getElementById('inventoryGrid');
    const empty = document.getElementById('emptyInventory');
    const valueEl = document.getElementById('inventoryValue');

    // Обновляем счетчики
    updateInventory();

    if (inventory.length === 0) {
        grid.innerHTML = '';
        empty.classList.add('show');
        valueEl.textContent = formatPrice(0);
        return;
    }

    empty.classList.remove('show');
    
    let totalValue = 0;
    grid.innerHTML = '';

    inventory.forEach((item, index) => {
        totalValue += item.price;
        const div = document.createElement('div');
        div.className = `inventory-item ${item.rarity}`;
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h4 title="${item.name}">${item.name}</h4>
            <p class="item-price">${formatPrice(item.price)}</p>
            <button class="sell-item-btn" onclick="sellItem(${index})">Продать</button>
        `;
        grid.appendChild(div);
    });

    valueEl.textContent = formatPrice(totalValue);
}

// ==================== НАВИГАЦИЯ ====================

function showSection(section) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));

    if (section === 'cases') {
        document.getElementById('casesSection').classList.add('active');
        document.querySelectorAll('.nav-btn')[0].classList.add('active');
    } else if (section === 'inventory') {
        document.getElementById('inventorySection').classList.add('active');
        document.querySelectorAll('.nav-btn')[1].classList.add('active');
        renderInventory();
    } else if (section === 'stats') {
        document.getElementById('statsSection').classList.add('active');
        document.querySelectorAll('.nav-btn')[2].classList.add('active');
        updateStats();
    } else if (section === 'achievements') {
        document.getElementById('achievementsSection').classList.add('active');
        document.querySelectorAll('.nav-btn')[3].classList.add('active');
        renderAchievements();
    }
}

// ==================== МОДАЛЬНОЕ ОКНО ====================

function openCaseModal(caseKey) {
    currentCase = casesData[caseKey];
    currentCase.key = caseKey; // Сохраняем ключ для статистики
    
    const currency = currencies[currentCurrency];
    document.getElementById('modalCaseImage').src = currentCase.image;
    document.getElementById('modalCaseName').textContent = currentCase.name;
    document.getElementById('modalCasePrice').textContent = formatPriceNumber(currentCase.price);
    document.getElementById('modalCurrencySymbol').textContent = currency.symbol;

    // Рендер содержимого кейса
    const contentsGrid = document.getElementById('contentsGrid');
    contentsGrid.innerHTML = '';
    
    // Сортируем по редкости
    const rarityOrder = ['consumer', 'industrial', 'mil-spec', 'restricted', 'classified', 'covert', 'rare'];
    const sortedItems = [...currentCase.items].sort((a, b) => 
        rarityOrder.indexOf(a.rarity) - rarityOrder.indexOf(b.rarity)
    );

    sortedItems.forEach(item => {
        const div = document.createElement('div');
        div.className = `content-item ${item.rarity}`;
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span class="item-name" title="${item.name}">${item.name}</span>
            <span class="item-price">${formatPrice(item.price)}</span>
        `;
        contentsGrid.appendChild(div);
    });

    // Сброс состояния
    document.getElementById('rouletteContainer').classList.remove('show');
    document.getElementById('winDisplay').classList.remove('show');
    document.getElementById('caseContents').style.display = 'block';
    document.getElementById('openCaseBtn').disabled = false;
    document.getElementById('openCaseBtn').style.display = 'flex';
    document.getElementById('openCaseFastBtn').disabled = false;
    document.getElementById('openCaseFastBtn').style.display = 'flex';
    document.getElementById('openAgainBtn').style.display = 'none';

    document.getElementById('caseModal').classList.add('show');
}

function closeModal() {
    if (isSpinning) return;
    
    // Если есть выигранный предмет и он ещё не обработан
    if (wonItem) {
        if (inventory.length >= 50) {
            showNotification('Инвентарь полон! Предмет автоматически продан.', 'error');
            sellWonItem();
        } else {
            inventory.push({...wonItem, id: Date.now()});
            saveData();
            checkAchievements();
            updateInventory();
            showNotification(`${wonItem.name} добавлен в инвентарь!`, 'success');
        }
    }
    
    document.getElementById('caseModal').classList.remove('show');
    currentCase = null;
    wonItem = null;
}

// ==================== ОТКРЫТИЕ КЕЙСА ====================

function openCase() {
    if (!currentCase || isSpinning) return;
    
    // Запоминаем режим открытия
    lastOpeningMode = 'normal';

    if (balance < currentCase.price) {
        showNotification('Недостаточно средств!', 'error');
        return;
    }

    // Списываем стоимость
    balance -= currentCase.price;
    updateBalance();
    
    // Обновляем статистику
    stats.casesOpened++;
    stats.moneySpent += currentCase.price;
    checkAchievements();
    saveData();

    isSpinning = true;
    document.getElementById('openCaseBtn').disabled = true;
    document.getElementById('openCaseBtn').style.display = 'none';
    document.getElementById('openCaseFastBtn').disabled = true;
    document.getElementById('openCaseFastBtn').style.display = 'none';
    document.getElementById('openAgainBtn').style.display = 'none';
    document.getElementById('caseContents').style.display = 'none';

    // Определяем выигрыш
    wonItem = determineWin();
    
    // Обновляем статистику редкости
    stats.rarityDrops[wonItem.rarity]++;
    checkAchievements();
    saveData();

    // Генерируем рулетку
    generateRoulette();

    // Показываем рулетку
    document.getElementById('rouletteContainer').classList.add('show');

    // Запускаем анимацию
    setTimeout(() => {
        spinRoulette();
    }, 100);
}

// Быстрое открытие без анимации
function openCaseFast() {
    if (!currentCase || isSpinning) return;
    
    // Запоминаем режим открытия
    lastOpeningMode = 'fast';

    if (balance < currentCase.price) {
        showNotification('Недостаточно средств!', 'error');
        return;
    }

    // Списываем стоимость
    balance -= currentCase.price;
    updateBalance();
    
    // Обновляем статистику
    stats.casesOpened++;
    stats.moneySpent += currentCase.price;

    // Определяем выигрыш
    wonItem = determineWin();
    
    // Обновляем статистику редкости
    stats.rarityDrops[wonItem.rarity]++;
    checkAchievements();
    saveData();

    // Скрываем содержимое кейса
    document.getElementById('caseContents').style.display = 'none';
    document.getElementById('openCaseBtn').style.display = 'none';
    document.getElementById('openCaseFastBtn').style.display = 'none';

    // Сразу показываем результат
    showWinResult();
}

function determineWin() {
    // Шансы на редкость (реалистичные, как в CS2)
    // Используем массив для гарантии правильного порядка обхода
    const chancesArray = [
        { rarity: 'consumer', chance: 0.35 },     // 35%
        { rarity: 'industrial', chance: 0.30 },   // 30%
        { rarity: 'mil-spec', chance: 0.20 },     // 20%
        { rarity: 'restricted', chance: 0.10 },   // 10%
        { rarity: 'classified', chance: 0.035 },  // 3.5%
        { rarity: 'covert', chance: 0.012 },      // 1.2%
        { rarity: 'rare', chance: 0.003 }         // 0.3% (нож/перчатки)
    ];

    const random = Math.random();
    let cumulative = 0;
    let selectedRarity = 'consumer';

    for (const item of chancesArray) {
        cumulative += item.chance;
        if (random < cumulative) {
            selectedRarity = item.rarity;
            break;
        }
    }

    // Выбираем случайный предмет данной редкости
    let itemsOfRarity = currentCase.items.filter(item => item.rarity === selectedRarity);
    
    if (itemsOfRarity.length === 0) {
        // Если нет предметов данной редкости, ищем ближайшую доступную редкость
        const rarityOrder = ['consumer', 'industrial', 'mil-spec', 'restricted', 'classified', 'covert', 'rare'];
        const currentIndex = rarityOrder.indexOf(selectedRarity);
        
        // Сначала ищем редкость ниже, потом выше
        for (let offset = 1; offset < rarityOrder.length; offset++) {
            // Проверяем редкость ниже
            if (currentIndex - offset >= 0) {
                itemsOfRarity = currentCase.items.filter(item => item.rarity === rarityOrder[currentIndex - offset]);
                if (itemsOfRarity.length > 0) break;
            }
            // Проверяем редкость выше
            if (currentIndex + offset < rarityOrder.length) {
                itemsOfRarity = currentCase.items.filter(item => item.rarity === rarityOrder[currentIndex + offset]);
                if (itemsOfRarity.length > 0) break;
            }
        }
        
        // Крайний случай - любой предмет из кейса
        if (itemsOfRarity.length === 0) {
            itemsOfRarity = currentCase.items;
        }
    }

    return itemsOfRarity[Math.floor(Math.random() * itemsOfRarity.length)];
}

// Константы рулетки
const TOTAL_ITEMS = 70; // Общее количество предметов
const WIN_POSITION = 50; // Позиция выигрышного предмета

// Кэширование ширины элемента
let cachedItemWidth = null;
let lastWindowWidth = null;

// Динамический расчёт ширины элемента в зависимости от размера экрана
function getItemWidth() {
    const currentWidth = window.innerWidth;
    const currentHeight = window.innerHeight;
    
    // Используем кэш, если ширина не изменилась
    if (cachedItemWidth !== null && lastWindowWidth === currentWidth) {
        return cachedItemWidth;
    }
    
    lastWindowWidth = currentWidth;
    
    // Ландшафтный режим на мобильных
    const isLandscape = currentHeight < 500 && currentWidth > currentHeight;
    
    if (isLandscape) {
        cachedItemWidth = 100; // 90px + 10px margin для ландшафта
    } else if (currentWidth <= 380) {
        cachedItemWidth = 110; // 100px + 10px margin
    } else if (currentWidth <= 768) {
        cachedItemWidth = 130; // 120px + 10px margin
    } else {
        cachedItemWidth = 160; // 150px + 10px margin
    }
    
    return cachedItemWidth;
}

// Сброс кэша при изменении размера окна или ориентации
window.addEventListener('resize', () => {
    cachedItemWidth = null;
});

window.addEventListener('orientationchange', () => {
    cachedItemWidth = null;
});

function generateRoulette() {
    const track = document.getElementById('rouletteTrack');
    track.innerHTML = '';
    track.style.transition = 'none';
    track.style.transform = 'translateY(-50%) translateX(0px)';

    for (let i = 0; i < TOTAL_ITEMS; i++) {
        let item;
        if (i === WIN_POSITION) {
            item = wonItem;
        } else {
            // Случайный предмет с учётом шансов
            item = getRandomItemForRoulette();
        }

        const div = document.createElement('div');
        div.className = `roulette-item ${item.rarity}`;
        if (i === WIN_POSITION) {
            div.setAttribute('data-winner', 'true');
        }
        div.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name}</span>
        `;
        track.appendChild(div);
    }
}

function getRandomItemForRoulette() {
    // Визуально показываем разнообразие предметов
    const random = Math.random();
    let selectedRarity;
    
    if (random < 0.35) selectedRarity = 'consumer';
    else if (random < 0.60) selectedRarity = 'industrial';
    else if (random < 0.80) selectedRarity = 'mil-spec';
    else if (random < 0.92) selectedRarity = 'restricted';
    else if (random < 0.97) selectedRarity = 'classified';
    else if (random < 0.995) selectedRarity = 'covert';
    else selectedRarity = 'rare';

    const items = currentCase.items.filter(item => item.rarity === selectedRarity);
    if (items.length === 0) {
        return currentCase.items[Math.floor(Math.random() * currentCase.items.length)];
    }
    return items[Math.floor(Math.random() * items.length)];
}

function spinRoulette() {
    const track = document.getElementById('rouletteTrack');
    const container = document.getElementById('rouletteContainer');
    const containerWidth = container.offsetWidth;
    
    // Получаем актуальную ширину элемента (зависит от размера экрана)
    const itemWidth = getItemWidth();
    
    // Вычисляем точное смещение до центра выигрышного предмета
    // Центр контейнера - это containerWidth / 2
    // Центр предмета на позиции WIN_POSITION = WIN_POSITION * itemWidth + itemWidth / 2
    const itemCenter = WIN_POSITION * itemWidth + itemWidth / 2;
    const containerCenter = containerWidth / 2;
    
    // Смещение чтобы центр предмета был в центре контейнера
    // Добавляем небольшое случайное смещение в пределах предмета (но не выходя за его границы)
    // Ограничиваем смещение до ±30% ширины для гарантии попадания
    const randomOffset = (Math.random() - 0.5) * (itemWidth * 0.3);
    const targetOffset = itemCenter - containerCenter + randomOffset;

    // Применяем анимацию с requestAnimationFrame для плавности
    requestAnimationFrame(() => {
        track.style.transition = 'transform 5s cubic-bezier(0.15, 0.8, 0.3, 1)';
        track.style.transform = `translateY(-50%) translateX(-${targetOffset}px)`;
    });

    // После анимации
    setTimeout(() => {
        isSpinning = false;
        showWinResult();
    }, 5200);
}

function showWinResult() {
    document.getElementById('rouletteContainer').classList.remove('show');
    
    const winDisplay = document.getElementById('winDisplay');
    const winGlow = document.getElementById('winGlow');
    const currency = currencies[currentCurrency];
    
    document.getElementById('winImage').src = wonItem.image;
    document.getElementById('winName').textContent = wonItem.name;
    document.getElementById('winPrice').textContent = formatPriceNumber(wonItem.price);
    document.getElementById('winCurrencySymbol').textContent = currency.symbol;
    
    winGlow.className = `win-glow ${wonItem.rarity}`;
    
    winDisplay.classList.add('show');
    document.getElementById('openCaseBtn').style.display = 'none';
    document.getElementById('openCaseFastBtn').style.display = 'none';
    
    const openAgainBtn = document.getElementById('openAgainBtn');
    openAgainBtn.innerHTML = `<span class="key-icon">🔄</span> Открыть ещё раз <span style="margin-left:5px; opacity:0.8; font-size:0.9em">${formatPrice(currentCase.price)}</span>`;
    openAgainBtn.style.display = 'flex';
}

function keepItem() {
    if (!wonItem) return;

    if (inventory.length >= 50) {
        showNotification('Инвентарь полон! Максимум 50 предметов.', 'error');
        return;
    }
    
    inventory.push({...wonItem, id: Date.now()});
    saveData();
    checkAchievements();
    updateInventory();
    
    showNotification(`${wonItem.name} добавлен в инвентарь!`, 'success');
    
    // Очищаем wonItem перед закрытием, чтобы не добавился повторно
    wonItem = null;
    document.getElementById('caseModal').classList.remove('show');
    currentCase = null;
}

function sellWonItem() {
    if (!wonItem) return;
    
    balance += wonItem.price;
    stats.itemsSold++;
    stats.moneyEarned += wonItem.price;
    updateBalance();
    checkAchievements();
    saveData();
    
    showNotification(`Продано за ${formatPrice(wonItem.price)}`, 'success');
    
    // Очищаем wonItem перед закрытием, чтобы не добавился в инвентарь
    wonItem = null;
    document.getElementById('caseModal').classList.remove('show');
    currentCase = null;
}

// ==================== ИНВЕНТАРЬ ====================

function sellItem(index) {
    const item = inventory[index];
    if (!item) return;

    balance += item.price;
    stats.itemsSold++;
    stats.moneyEarned += item.price;
    inventory.splice(index, 1);
    
    updateBalance();
    saveData();
    checkAchievements();
    renderInventory();
    
    showNotification(`Продано за ${formatPrice(item.price)}`, 'success');
}

function sellAll() {
    if (inventory.length === 0) {
        showNotification('Инвентарь пуст!', 'error');
        return;
    }

    const total = inventory.reduce((sum, item) => sum + item.price, 0);
    const count = inventory.length;
    balance += total;
    stats.itemsSold += count;
    stats.moneyEarned += total;
    inventory = [];
    
    updateBalance();
    saveData();
    checkAchievements();
    renderInventory();
    
    showNotification(`Продано ${count} предметов за ${formatPrice(total)}`, 'success');
}

function updateInventory() {
    // Счетчик в навигации (просто число)
    document.getElementById('inventoryCount').textContent = inventory.length;
    // Счетчик в заголовке инвентаря (X/50)
    const limitEl = document.getElementById('inventoryLimitCount');
    if (limitEl) {
        limitEl.textContent = `${inventory.length}/50`;
        // Красим в красный, если инвентарь полон
        limitEl.style.color = inventory.length >= 50 ? '#ff4444' : '';
    }
}

// ==================== БАЛАНС ====================

function updateBalance() {
    document.getElementById('balance').textContent = formatPriceNumber(balance);
}

function addBalance() {
    balance += 100;
    updateBalance();
    saveData();
    showNotification(`+${formatPrice(100)} добавлено!`, 'success');
}

// ==================== УВЕДОМЛЕНИЯ ====================

function showNotification(message, type = 'info') {
    const container = document.getElementById('notifications');
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span>
        <span>${message}</span>
    `;
    container.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100px)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==================== ЛОГИКА ДОСТИЖЕНИЙ ====================

function checkAchievements() {
    let newUnlock = false;
    
    achievementsList.forEach(ach => {
        if (!unlockedAchievements.includes(ach.id)) {
            if (ach.check(stats)) {
                unlockedAchievements.push(ach.id);
                showNotification(`🏆 Достижение: ${ach.name}`, 'success');
                newUnlock = true;
            }
        }
    });
    
    if (newUnlock) {
        localStorage.setItem('cs2_achievements', JSON.stringify(unlockedAchievements));
        updateAchievementsBadge();
    }
}

function updateAchievementsBadge() {
    const badge = document.getElementById('achievementsCount');
    const count = unlockedAchievements.length;
    if (count > 0) {
        badge.textContent = count;
        badge.style.display = 'inline-flex';
    } else {
        badge.style.display = 'none';
    }
}

function renderAchievements() {
    const grid = document.getElementById('achievementsGrid');
    grid.innerHTML = '';
    
    document.getElementById('achievementsUnlockedCount').textContent = unlockedAchievements.length;
    document.getElementById('achievementsTotalCount').textContent = achievementsList.length;
    
    achievementsList.forEach(ach => {
        const isUnlocked = unlockedAchievements.includes(ach.id);
        const card = document.createElement('div');
        card.className = `achievement-card ${isUnlocked ? 'unlocked' : ''}`;
        
        card.innerHTML = `
            <div class="achievement-icon">${ach.icon}</div>
            <div class="achievement-info">
                <h3>${ach.name}</h3>
                <p>${ach.desc}</p>
                <div class="achievement-status">${isUnlocked ? '✅ Получено' : '🔒 Заблокировано'}</div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ==================== СОХРАНЕНИЕ ====================

function saveData() {
    localStorage.setItem('cs2_balance', balance.toString());
    localStorage.setItem('cs2_inventory', JSON.stringify(inventory));
    localStorage.setItem('cs2_stats', JSON.stringify(stats));
}

// ==================== СТАТИСТИКА ====================

function updateStats() {
    const totalDrops = Object.values(stats.rarityDrops).reduce((a, b) => a + b, 0);
    const inventoryValue = inventory.reduce((sum, item) => sum + item.price, 0);
    const profit = stats.moneyEarned + inventoryValue - stats.moneySpent;
    
    document.getElementById('statCasesOpened').textContent = stats.casesOpened;
    document.getElementById('statMoneySpent').textContent = formatPrice(stats.moneySpent);
    document.getElementById('statItemsSold').textContent = stats.itemsSold;
    document.getElementById('statMoneyEarned').textContent = formatPrice(stats.moneyEarned);
    document.getElementById('statItemsKept').textContent = inventory.length;
    
    const profitEl = document.getElementById('statProfit');
    profitEl.textContent = (profit >= 0 ? '+' : '') + formatPrice(profit);
    profitEl.style.color = profit >= 0 ? '#4CAF50' : '#f44336';
    
    // Обновляем полоски редкости
    const rarities = ['consumer', 'industrial', 'mil-spec', 'restricted', 'classified', 'covert', 'rare'];
    const maxDrops = Math.max(...Object.values(stats.rarityDrops), 1);
    
    rarities.forEach(rarity => {
        const count = stats.rarityDrops[rarity] || 0;
        const percentage = (count / maxDrops) * 100;
        const fillId = 'rarity' + rarity.charAt(0).toUpperCase() + rarity.slice(1).replace('-', '');
        const fillEl = document.getElementById(fillId);
        if (fillEl) {
            fillEl.style.width = percentage + '%';
        }
        
        const countId = 'count' + rarity.charAt(0).toUpperCase() + rarity.slice(1).replace('-', '');
        const countEl = document.getElementById(countId);
        if (countEl) {
            countEl.textContent = count;
        }
    });
    
    // Специальные ID для mil-spec
    const milSpecFill = document.getElementById('rarityMilSpec');
    if (milSpecFill) {
        milSpecFill.style.width = ((stats.rarityDrops['mil-spec'] || 0) / maxDrops * 100) + '%';
    }
    document.getElementById('countMilSpec').textContent = stats.rarityDrops['mil-spec'] || 0;
}

function resetStats() {
    if (confirm('Вы уверены, что хотите сбросить всю статистику?')) {
        stats = {
            casesOpened: 0,
            moneySpent: 0,
            itemsSold: 0,
            moneyEarned: 0,
            rarityDrops: {
                consumer: 0,
                industrial: 0,
                'mil-spec': 0,
                restricted: 0,
                classified: 0,
                covert: 0,
                rare: 0
            }
        };
        saveData();
        updateStats();
        showNotification('Статистика сброшена!', 'success');
    }
}

// ==================== ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ПО ESC ====================

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// Закрытие по клику вне модального окна
document.getElementById('caseModal').addEventListener('click', (e) => {
    if (e.target.id === 'caseModal') {
        closeModal();
    }
});

// Предотвращение прокрутки страницы при открытом модальном окне
const modal = document.getElementById('caseModal');
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            if (modal.classList.contains('show')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    });
});
observer.observe(modal, { attributes: true });
