// script.js
const mockNews = [
    {
        id: 1,
        title: "Adubação Verde: Como recuperar solos cansados naturalmente",
        excerpt: "Plantas como crotalária e mucuna preta são aliadas poderosas na reposição de nitrogênio e matéria orgânica.",
        category: "Técnicas",
        image: "https://picsum.photos/id/1016/600/400",
        date: "04 Jun 2026",
        readTime: "8 min"
    },
    {
        id: 2,
        title: "Plantio Direto revoluciona a agricultura familiar no Brasil",
        excerpt: "Técnica conserva umidade, reduz erosão e aumenta a produtividade em até 30% em áreas recuperadas.",
        category: "Inovação",
        image: "https://picsum.photos/id/1077/600/400",
        date: "03 Jun 2026",
        readTime: "12 min"
    },
    {
        id: 3,
        title: "Reflorestamento econômico: árvores nativas que geram renda",
        excerpt: "Espécies como ipê, jacarandá e mogno podem ser integradas à produção agrícola com benefícios ambientais.",
        category: "Reflorestamento",
        image: "https://picsum.photos/id/133/600/400",
        date: "02 Jun 2026",
        readTime: "6 min"
    },
    {
        id: 4,
        title: "Correção do solo: quando e como aplicar calcário",
        excerpt: "Entenda os indicadores de acidez e o impacto da calagem na produtividade de grãos e pastagens.",
        category: "Manejo",
        image: "https://picsum.photos/id/201/600/400",
        date: "01 Jun 2026",
        readTime: "9 min"
    },
    {
        id: 5,
        title: "Rotação de culturas: a estratégia milenar que ainda funciona",
        excerpt: "Alternar leguminosas, cereais e cobertura morta reduz pragas e mantém o solo vivo.",
        category: "Gestão",
        image: "https://picsum.photos/id/251/600/400",
        date: "31 Mai 2026",
        readTime: "7 min"
    },
    {
        id: 6,
        title: "Sucesso em Minas: Fazenda recupera 120 hectares degradados",
        excerpt: "Caso real demonstra que a recuperação de áreas degradadas é economicamente viável.",
        category: "Casos Reais",
        image: "https://picsum.photos/id/870/600/400",
        date: "30 Mai 2026",
        readTime: "15 min"
    }
];

// Render news cards
function renderNews() {
    const grid = document.getElementById('news-grid');
    grid.innerHTML = '';

    mockNews.forEach(news => {
        const cardHTML = `
            <article class="news-card">
                <img src="${news.image}" alt="${news.title}">
                <div class="card-content">
                    <div class="card-category">${news.category}</div>
                    <h3 class="card-title">${news.title}</h3>
                    <p class="card-excerpt">${news.excerpt}</p>
                    <div class="card-meta">
                        <span>${news.date}</span>
                        <span>${news.readTime}</span>
                    </div>
                </div>
            </article>
        `;
        grid.innerHTML += cardHTML;
    });
}

// Popular posts (subset)
function renderPopular() {
    const container = document.getElementById('popular-list');
    container.innerHTML = '';
    
    mockNews.slice(0, 4).forEach(news => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#">${news.title}</a>`;
        container.appendChild(li);
    });
}

// Hamburger menu
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        
        const icon = hamburger.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    });
}

// Dark Mode
function initDarkMode() {
    const toggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');
    
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    toggle.addEventListener('click', () => {
        if (document.documentElement.getAttribute('data-theme') === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            toggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            toggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    });
}

// Search functionality
function initSearch() {
    const searchInput = document.getElementById('search-input');
    
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase().trim();
        
        const cards = document.querySelectorAll('.news-card');
        
        cards.forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const excerpt = card.querySelector('.card-excerpt').textContent.toLowerCase();
            
            if (title.includes(term) || excerpt.includes(term)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    renderNews();
    renderPopular();
    initMobileMenu();
    initDarkMode();
    initSearch();
    
    // Keyboard support for search
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.getElementById('search-input') !== document.activeElement) {
            e.preventDefault();
            document.getElementById('search-input').focus();
        }
    });
});