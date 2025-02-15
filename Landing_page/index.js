function addLinkMore(item) {
    const submenu = document.querySelector('.more .submenu-wrapper');
    
    // Kiểm tra nếu phần tử đã tồn tại rồi thì không thêm lại
    if (document.querySelector(`.submenu-item.${ item }`)) return;

    // Tạo phần tử <li> mới
    const addItem = document.createElement('li');
    addItem.classList.add('submenu-item', `${ item }`);

    // Thêm nội dung HTML vào thẻ <li>
    addItem.innerHTML = `
        <a href="https://${ item }.riotgames.com/" target="_blank" class="submenu-link">
            ${ item.charAt(0).toUpperCase() + item.slice(1) }
            <svg width="7" height="7" viewBox="0 0 16 16">
                <title>mainNavLinkOut</title>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.916 4.158c0-.277-.116-.55-.32-.753a1.073 1.073 0 0 0-.752-.32H3.428l.144 2h5.93l-6.803 6.803 1.414 1.414L10.916 6.5v5.928l2 .144V4.158Z" fill="#737373"></path>
            </svg>
        </a>
    `;
    // Thêm thẻ <li> vào submenu
    submenu.insertBefore(addItem, submenu.querySelector('.submenu-item'));
    const addContainer = document.querySelector(`.desktop-link-item-${ item }`);
    addContainer.id = 'desktop-link-item-none';
}

// Kiểm tra kích thước màn hình và gọi hàm
function checkScreenSize() {
    if (window.innerWidth <= 1500) {
        addLinkMore("merch");
    } else {
        // Nếu màn hình to hơn 1500px, xóa phần tử để tránh trùng lặp
        const merchItem = document.querySelector('.submenu-item.merch');
        if (merchItem) {
            merchItem.remove();
            const addContainer = document.querySelector(`.desktop-link-item-merch`);
            addContainer.id = '';
        } 
    }
    if (window.innerWidth <= 1400) {
        addLinkMore("universe");
    } else {
        // Nếu màn hình to hơn 1500px, xóa phần tử để tránh trùng lặp
        const universeItem = document.querySelector('.submenu-item.universe');
        if (universeItem) {
            universeItem.remove();
            const addContainer = document.querySelector(`.desktop-link-item-universe`);
            addContainer.id = '';
        } 
    }
    if (window.innerWidth <= 1262) {
        addLinkMore("esports");
    } else {
        // Nếu màn hình to hơn 1500px, xóa phần tử để tránh trùng lặp
        const esportsItem = document.querySelector('.submenu-item.esports');
        if (esportsItem) {
            esportsItem.remove();
            const addContainer = document.querySelector(`.desktop-link-item-esports`);
            addContainer.id = '';
        } 
    }
    if (window.innerWidth <= 1135) {
        addLinkMore("discover");
    } else {
        // Nếu màn hình to hơn 1500px, xóa phần tử để tránh trùng lặp
        const discoverItem = document.querySelector('.submenu-item.discover');
        if (discoverItem) {
            discoverItem.remove();
            const addContainer = document.querySelector(`.desktop-link-item-discover`);
            addContainer.id = '';
        } 
    }
}

// Gọi hàm ngay khi trang tải
checkScreenSize();

// Lắng nghe sự kiện resize để cập nhật khi thay đổi kích thước cửa sổ
window.addEventListener('resize', checkScreenSize);


// Js for Champions section
const championsTitle = [
    "AKALI", "YASUO", "LUX", "JINX", "THRESH", "LEONA"
]

const championsDesc = [
    "The Rogue Assassin", "The Unforgiven", "The Lady of Luminosity", "The Loose Cannon", "The Chain Warden", "The Radiant Dawn"
];

const championsImg = [
    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/befd42ad6d2564159a441d08cfc3bf511532eb74-1628x1628.png?auto=format&fit=fill&q=80&w=836",
    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/70c26e49de8a2c79ac3de144772d2debd195edff-1628x1628.png?auto=format&fit=fill&q=80&w=869",
    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ff6c8c57411e5c7e0551b02334fccedc78866143-1628x1628.png?auto=format&fit=fill&q=80&w=869",
    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/f136500bd46f823d37515a72b867425d3a0b3e54-1628x1628.png?auto=format&fit=fill&q=80&w=869",
    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/dbdded937cd214bb2a1189697a9e4f49f8c04505-1628x1628.png?auto=format&fit=fill&q=80&w=869",
    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/95daf6dd2b28f03d5ba2ea1fabbabc3bc3ff6e6e-1628x1628.png?auto=format&fit=fill&q=80&w=869"
];

const championsFullBg = [
    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/2037fa505fd6b830ad9212f57865bbf49014e2e3-656x656.png?auto=format&fit=fill&q=80&w=656",
    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/fab36e5433f9457968d5f4e5c2ebed38fdd4b17c-656x657.png?auto=format&fit=fill&q=80&w=656",
    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/b5fc531af3d3e8ef47d72cbf5a2ccdddd7912276-656x657.png?auto=format&fit=fill&q=80&w=656",
    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/e5282eb187f0a06c879fe6996c9831ff2d7752a3-656x657.svg?auto=format&fit=fill&q=80&w=656",
    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/a2d0a92f82549cafa4006bc47e8d7287505a3c40-656x657.png?auto=format&fit=fill&q=80&w=656",
    "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ac80f85e9c522cb59b932c1b95caf3fa1ef81a13-656x657.png?auto=format&fit=fill&q=80&w=656"
];

const championsTitleContainer = document.querySelector('.champions-media-title');
const championsDescContainer = document.querySelector('.champions-media-subtitle');
const championsImgContainer = document.querySelector('.champions-media-wrapper img');
const championsContainerFullBgContainer = document.querySelector('.chammpions-backdrop-full-background img');

document.querySelectorAll('.champions-role-item').forEach(card => {
    card.addEventListener('click', function() {
        document.querySelectorAll('.champions-role-item').forEach(c => c.classList.remove('champions-role-item-active'));
        this.classList.add('champions-role-item-active');
        let index = this.getAttribute('data-index');
        championsTitleContainer.textContent = championsTitle[index];
        championsDescContainer.textContent = championsDesc[index];
        championsImgContainer.src = championsImg[index];
        championsContainerFullBgContainer.src = championsFullBg[index];
    });
});

// Js for Mutiple to play section
const videoElement = document.querySelector('.play-media-video source');
const videoContainer = document.querySelector('.play-media-video');
const videoSources = [
    "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/bbc27473157462adacf0de441a8796268eb2d0ac.mp4",
    "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/0a9b9f8dacb54086c58c1af8aa880d7cf6d7fea6.mp4",
    "https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/e5791dbc0787a96e83b82df20d44375f09f4d861.mp4"
];


document.querySelectorAll('.play-card').forEach(card => {
    card.addEventListener('click', function() {
        document.querySelectorAll('.play-card').forEach(c => c.classList.remove('play-card-active'));
        this.classList.add('play-card-active');
        let index = this.getAttribute('data-index');
        videoElement.src = videoSources[index]; 
        videoContainer.load();
        videoContainer.play();
    });
});


// Js for Mobile navigation
const mobileNav = document.querySelector('.bar-mobile-nav');
const mobileMenu = document.querySelector('.bar-mobile-menu');
const mobileClose = document.querySelector('.mobile-menu-close');
const mobileIcon = document.querySelector('.bar-menu-icon');

mobileIcon.addEventListener('click', function() {
    mobileMenu.classList.add('bar-mobile-menu-active');
    mobileIcon.classList.add('none');
});

mobileClose.addEventListener('click', function() {
    mobileMenu.classList.remove('bar-mobile-menu-active');
    mobileIcon.classList.remove('none');
});