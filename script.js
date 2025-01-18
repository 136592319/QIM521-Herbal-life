// 修改默认语言为英文
let currentLanguage = localStorage.getItem('language') || 'en';

// 初始化函数
function initializeLanguage() {
    // 更新语言设置
    updateLanguage(currentLanguage);
    
    // 更新语言选择器显示
    const currentLangElement = document.querySelector('.current-lang');
    const currentLangOption = document.querySelector(`.lang-option[href="?lang=${currentLanguage}"]`);
    
    if (currentLangElement && currentLangOption) {
        currentLangElement.textContent = currentLangOption.querySelector('.lang-name').textContent;
        
        // 更新活动状态
        document.querySelectorAll('.lang-option').forEach(option => {
            option.classList.remove('active');
        });
        currentLangOption.classList.add('active');
    }
}

// DOM 加载完成后初始化
document.addEventListener('DOMContentLoaded', initializeLanguage); 

function updateLanguage(lang) {
    // 更新导航栏
    const navLinks = document.querySelectorAll('nav a');
    const navKeys = ['home', 'personalized', 'herbs', 'knowledge', 'tracking'];
    navLinks.forEach((link, index) => {
        link.textContent = translations[lang].nav[navKeys[index]];
    });

    // 更新视频区域
    const videoSection = document.querySelector('.video-section');
    if (videoSection) {
        videoSection.querySelector('h2').textContent = translations[lang].home.videos.title;
        
        // 更新视频卡片
        const videoCards = videoSection.querySelectorAll('.content-card');
        ['video1', 'video2', 'video3'].forEach((video, index) => {
            const card = videoCards[index];
            if (card) {
                const videoData = translations[lang].home.videos[video];
                card.querySelector('.card-tag').textContent = translations[lang].common.videoTag;
                card.querySelector('h3').textContent = videoData.title;
                card.querySelector('p').textContent = videoData.desc;
                card.querySelector('.read-more').textContent = translations[lang].home.videos.watchVideo;
            }
        });
    }

    // 更新文章区域
    const articleSection = document.querySelector('.article-section');
    if (articleSection) {
        articleSection.querySelector('h2').textContent = translations[lang].home.articles.title;
        
        // 更新文章卡片
        const articleCards = articleSection.querySelectorAll('.content-card');
        const articles = translations[lang].articles.list;
        Object.values(articles).forEach((article, index) => {
            const card = articleCards[index];
            if (card) {
                card.querySelector('.card-tag').textContent = article.tag;
                card.querySelector('h3').textContent = article.title;
                card.querySelector('p').textContent = article.desc;
                card.querySelector('.date').textContent = article.date;
                card.querySelector('.read-more').textContent = translations[lang].common.readMore;
            }
        });
    }

    // 更新搜索相关
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.placeholder = translations[lang].search.placeholder;
    }

    const searchTabs = document.querySelectorAll('.tab-btn');
    searchTabs.forEach(tab => {
        const tabKey = tab.dataset.tab;
        if (translations[lang].search.tabs[tabKey]) {
            tab.textContent = translations[lang].search.tabs[tabKey];
        }
    });

    // 更新页面标题
    document.title = translations[lang].pageTitles[window.location.pathname.split('/').pop().split('.')[0] || 'home'];

    // 根据当前页面更新特定内容
    const currentPage = window.location.pathname.split('/').pop().split('.')[0];
    if (currentPage === 'personalized') {
        updatePersonalizedPage(lang);
    } else if (currentPage.includes('herbs-identification')) {
        updateArticlePage(lang);
    }
} 

document.addEventListener('DOMContentLoaded', function() {
    // 初始化语言
    initializeLanguage();
    
    // 语言切换相关
    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    const arrowIcon = document.querySelector('.arrow-icon');
    
    if (languageBtn && languageDropdown && arrowIcon) {
        // 点击按钮切换下拉菜单显示状态
        languageBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            languageDropdown.classList.toggle('show');
            arrowIcon.classList.toggle('rotate');
        });

        // 点击语言选项
        document.querySelectorAll('.lang-option').forEach(option => {
            option.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('href').split('=')[1];
                const langName = this.querySelector('.lang-name').textContent;
                
                // 更新当前语言显示
                document.querySelector('.current-lang').textContent = langName;
                
                // 更新活动状态
                document.querySelectorAll('.lang-option').forEach(opt => 
                    opt.classList.remove('active'));
                this.classList.add('active');
                
                // 更新语言
                updateLanguage(lang);
                
                // 关闭下拉菜单
                languageDropdown.classList.remove('show');
                arrowIcon.classList.remove('rotate');
            });
        });

        // 点击其他地方关闭下拉菜单
        document.addEventListener('click', (e) => {
            if (!languageBtn.contains(e.target)) {
                languageDropdown.classList.remove('show');
                arrowIcon.classList.remove('rotate');
            }
        });
    }
}); 

function updatePersonalizedPage(lang) {
    const trans = translations[lang].personalized;
    
    // 更新标题
    document.querySelector('.form-container h2').textContent = trans.title;
    
    // 更新表单字段
    Object.keys(trans.form).forEach(field => {
        const fieldTrans = trans.form[field];
        const fieldElement = document.getElementById(field);
        if (!fieldElement) return;
        
        // 更新标签
        const label = document.querySelector(`label[for="${field}"]`);
        if (label) label.textContent = fieldTrans.label;
        
        // 如果是选择框，更新选项
        if (fieldElement.tagName === 'SELECT') {
            // 更新占位符选项
            fieldElement.options[0].textContent = fieldTrans.placeholder;
            
            // 更新其他选项
            Object.entries(fieldTrans.options).forEach(([value, text]) => {
                const option = fieldElement.querySelector(`option[value="${value}"]`);
                if (option) option.textContent = text;
            });
        }
    });
    
    // 更新提交按钮
    document.querySelector('.generate-btn').textContent = trans.form.submit;
} 

function updateArticlePage(lang) {
    const trans = translations[lang].articles.herbs;
    
    // 更新标题和元数据
    document.querySelector('h1').textContent = trans.title;
    document.querySelector('.article-date').textContent = `${trans.date}${document.querySelector('.article-date').getAttribute('data-date')}`;
    document.querySelector('.article-author').textContent = `${trans.author}${trans.authorName}`;
    
    // 更新基本特征部分
    const basics = document.querySelector('.basics-section');
    if (basics) {
        basics.querySelector('h2').textContent = trans.sections.basics.title;
        basics.querySelector('p').textContent = trans.sections.basics.content;
    }
    
    // 更新鉴别要点部分
    const identification = document.querySelector('.identification-section');
    if (identification) {
        identification.querySelector('h2').textContent = trans.sections.identification.title;
        
        // 更新各个特征点
        Object.entries(trans.sections.identification.features).forEach(([key, value]) => {
            const feature = identification.querySelector(`.feature-${key}`);
            if (feature) {
                feature.querySelector('h3').textContent = value.title;
                feature.querySelector('p').textContent = value.desc;
            }
        });
    }
    
    // 更新质地检验部分
    const quality = document.querySelector('.quality-section');
    if (quality) {
        quality.querySelector('h2').textContent = trans.sections.quality.title;
        const points = quality.querySelectorAll('li');
        trans.sections.quality.points.forEach((point, index) => {
            if (points[index]) points[index].textContent = point;
        });
    }
} 

function updateIndexPage(lang) {
    // 更新页面标题
    document.title = translations[lang].pageTitles.home;
    
    // 更新搜索框
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.placeholder = translations[lang].search.placeholder;
    }

    // 更新文章列表
    const articles = translations[lang].articles.list;
    document.querySelectorAll('.article-section .content-card').forEach((card, index) => {
        const articleKey = Object.keys(articles)[index];
        const article = articles[articleKey];
        
        if (article) {
            card.querySelector('.card-tag').textContent = article.tag;
            card.querySelector('h3').textContent = article.title;
            card.querySelector('p').textContent = article.desc;
            card.querySelector('.date').textContent = article.date;
            card.querySelector('.read-more').textContent = translations[lang].common.readMore;
        }
    });

    // 更新视频标签
    document.querySelectorAll('.video-section .card-tag').forEach(tag => {
        tag.textContent = translations[lang].common.videoTag;
    });

    // 更新搜索选项卡
    document.querySelectorAll('.tab-btn').forEach(btn => {
        const tabKey = btn.dataset.tab;
        btn.textContent = translations[lang].search.tabs[tabKey];
    });
} 