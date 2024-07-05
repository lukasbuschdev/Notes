let NOTES = {};
let CURRENT_LOCATION = 'notes';
let CURRENT_LANG;

const includeTemplate = (selector, htmlContent) => {
    const targetElement = selector;
    if(targetElement) return targetElement.innerHTML += htmlContent;
};

function storeCurrentLang() {
    localStorage.setItem('currentLang', CURRENT_LANG);
}

function lang_load() {
    CURRENT_LANG = localStorage.getItem('currentLang', CURRENT_LANG);
    if(!CURRENT_LANG) return CURRENT_LANG = 'en';
    lang_change(CURRENT_LANG);
}
