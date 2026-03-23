// SereneWing Components
// Unified header and footer for all pages

/* ========================================
   Icon Color Theme Variables
   ======================================== */
const iconColors = {
    games: { primary: '#f97316', secondary: '#fb923c' },      // 橙色 - 热闹游戏
    blog: { primary: '#8b5cf6', secondary: '#a78bfa' },       // 紫色 - 博客思考
    tools: { primary: '#0891b2', secondary: '#22d3ee' },      // 青色 - 工具技术
    wiki: { primary: '#16a34a', secondary: '#4ade80' },       // 绿色 - 知识积累
    feature: { primary: '#0969da', secondary: '#58a6ff' }    // 蓝色 - 特性说明
};

// SVG Icons with optimized style
const icons = {
    logo: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 1316 1024"><path d="M486.770116 995.320869s333.298009-224.782378-15.502233-527.075922-395.306941-348.800242-426.311407-434.062523c0 0-116.266747 108.515631 147.271213 418.56029 0 0-77.511165-15.502233-155.02233-116.266747 0 0-77.511165 131.76898 240.284611 325.546893 0 0-100.764514 23.253349-170.524562-54.257816 0 0-46.506699 108.515631 186.026795 201.529029 0 0 124.017864 38.755582 193.777913 186.026796zM829.369465 995.320869s-333.298009-224.782378 15.502233-527.075922 395.306941-348.800242 426.311407-434.062523c0 0 116.266747 108.515631-147.271213 418.56029 0 0 77.511165-15.502233 155.022329-116.266747 0 0 77.511165 131.76898-240.284611 325.546893 0 0 100.764514 23.253349 170.524563-54.257816 0 0 46.506699 108.515631-186.026796 201.529029 0 0-124.017864 38.755582-193.777912 186.026796z" fill="#ffffff" stroke="#000000" stroke-width="12" fill-rule="evenodd"/></svg>`,
    
    games: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h4"/><path d="M8 10v4"/><circle cx="17" cy="10" r="1" fill="#f97316"/><circle cx="15" cy="13" r="1" fill="#f97316"/></svg>`,
    
    blog: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
    
    tools: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    
    wiki: `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><circle cx="12" cy="10" r="2"/></svg>`,
    
    card: {
        games: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 12h4"/><path d="M8 10v4"/><circle cx="17" cy="10" r="1" fill="#f97316"/><circle cx="15" cy="13" r="1" fill="#f97316"/></svg>`,
        
        blog: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>`,
        
        tools: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
        
        wiki: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><circle cx="12" cy="10" r="2"/></svg>`,
        
        json: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="12" y2="17"/></svg>`,
        
        encoder: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#0891b2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
        
        sunwukong: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="5"/><path d="M12 13v8"/><path d="M9 18h6"/><path d="M3 21v-2a7 7 0 0 1 7-7h4a7 7 0 0 1 7 7v2"/><circle cx="12" cy="5" r="7" stroke-dasharray="4 2"/></svg>`,
        
        journey: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`
    },
    
    feature: {
        friendly: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0969da" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
        spec: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0969da" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>`,
        tools: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="#f97316" stroke="#f97316" stroke-width="1" stroke-linejoin="round"/></svg>`,
        knowledge: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0969da" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><circle cx="12" cy="10" r="2"/></svg>`
    },
    
    glossary: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><circle cx="12" cy="10" r="2"/></svg>`,
    
    practices: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`,
    
    patterns: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
    
    templates: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,
    
    resources: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#16a34a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`
};

// Calculate relative path prefix to navigate from current page to site root
function getPathPrefix() {
    // Get current path relative to site root
    const path = window.location.pathname;
    
    // Count directory levels to go back to reach root
    // Root index.html: / -> 0 levels
    // Module index: /s/{module}/ -> 1 level (back to root)
    // Sub-page: /s/{module}/{subpage}/ -> 2 levels
    // Deep sub-page: /s/{module}/{year}/{month}/{slug}/ -> 4 levels
    
    const segments = path.split('/').filter(s => s.length > 0);
    // segments = ['s', 'module', 'subpage1', ...]
    // Number of ../ needed = number of segments (each segment is one level down from root)
    
    if (segments.length <= 1) {
        // At root or index page, no prefix needed
        return '';
    }
    
    // Each segment needs one ../ to go back
    return '../'.repeat(segments.length);
}

// Get the target module path from current location
function getModulePath(moduleId) {
    const prefix = getPathPrefix();
    if (prefix === '') {
        // At root, use root-relative path
        return `s/${moduleId}/`;
    }
    // From sub-pages, go back to root then to target module
    return `${prefix}s/${moduleId}/`;
}

// Get back link (to parent module index)
function getBackLink() {
    const segments = window.location.pathname.split('/').filter(s => s.length > 0);
    // Root index: segments.length = 1 (just 'index.html') -> stay at root
    // Module index: segments.length = 3 (s, module, index.html) -> stay at module
    // Sub-pages: segments.length > 3 -> go back one level to module index
    if (segments.length <= 2) {
        return './';
    }
    return '../';
}

// Get root path for logo/home link
function getRootPath() {
    const prefix = getPathPrefix();
    if (prefix === '') {
        return './';
    }
    // Go back to root
    return prefix;
}

// Generate header HTML
function generateHeader(activePage = '') {
    const navItems = [
        { id: 'games', label: 'Games', icon: icons.games },
        { id: 'blog', label: 'Blog', icon: icons.blog },
        { id: 'tools', label: 'Tools', icon: icons.tools },
        { id: 'wiki', label: 'Wiki', icon: icons.wiki }
    ];
    
    const pathPrefix = getPathPrefix();
    const backLink = getBackLink();
    
    const navHtml = navItems.map(item => {
        const targetPath = getModulePath(item.id);
        
        if (item.id === activePage) {
            return `<a href="${backLink}" class="nav-link active">
            <span class="nav-icon">${item.icon}</span>
            <span>${item.label}</span>
        </a>`;
        } else {
            return `<a href="${targetPath}" class="nav-link">
            <span class="nav-icon">${item.icon}</span>
            <span>${item.label}</span>
        </a>`;
        }
    }).join('');
    
    // Get root path for logo link (same as getPathPrefix, which gives ../ needed to reach root)
    const rootPath = getPathPrefix() || './';
    
    return `
    <header class="header">
        <div class="container header-inner">
            <a href="${rootPath}" class="site-logo">
                <span class="logo-icon">${icons.logo}</span>
                <span>SereneWing</span>
            </a>
            <nav class="nav">
                ${navHtml}
            </nav>
        </div>
    </header>`;
}

// Generate footer HTML
function generateFooter() {
    const currentYear = new Date().getFullYear();
    return `
    <footer class="footer">
        <div class="container">
            <p>
                &copy; ${currentYear} <a href="https://github.com/SereneWing/SereneWing.github.io" target="_blank" rel="noopener">SereneWing</a> · 
                <a href="${getPathPrefix() || './'}s/LICENSE.txt" target="_blank" rel="noopener">MIT License</a>
            </p>
        </div>
    </footer>`;
}

// Inject components into page
function initComponents(headerActive = '', footerExtra = '') {
    const header = document.querySelector('div.component-header');
    const footer = document.querySelector('div.component-footer');
    
    if (header) {
        header.innerHTML = generateHeader(headerActive);
        header.remove();
        document.body.insertBefore(createHeaderElement(headerActive), document.body.firstChild);
    }
    
    if (footer) {
        footer.innerHTML = generateFooter();
        footer.remove();
        document.body.appendChild(createFooterElement());
    }
}

function createHeaderElement(activePage) {
    const div = document.createElement('div');
    div.innerHTML = generateHeader(activePage);
    return div.firstElementChild;
}

function createFooterElement() {
    const div = document.createElement('div');
    div.innerHTML = generateFooter();
    return div.firstElementChild;
}

// Export for use
window.SereneWing = {
    icons,
    generateHeader,
    generateFooter,
    initComponents
};
