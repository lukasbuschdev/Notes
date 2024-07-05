function loadContent() {
    const contentContainer = $('#main-content');
    contentContainer.innerHTML = '';

    const contentTemplate = /*html*/ `
        <div id="notes-content-container" class="content column"></div>
        <div id="archive-content-container" class="content column d-none"></div>
        <div id="bin-content-container" class="content column d-none"></div>
        <div id="info-content-container" class="content column d-none"></div>
        <div id="search-content-container"></div>
    `;

    includeTemplate(contentContainer, contentTemplate);
    loadTemplates();
}

function loadTemplates() {
    notesPageTemplate();
    archivePageTemplate();
    binPageTemplate();
    infoPageTemplate();
    initSettings();
}

function renderNotesMain() {
    filterActive = false;

    deleteInput();
    if(CURRENT_LOCATION === 'info') return checkCurrentLocationInfo();

    renderTemplates();
    lang_load(CURRENT_LANG);
}

function checkCurrentLocationInfo() {
        const [infoPageTemplateFunc, langLoadFunc] = [infoPageTemplate, lang_load];
        infoPageTemplateFunc();
        langLoadFunc(CURRENT_LANG);
        return;
}

function renderTemplates() {
    let templateFunction = checkTemplateFunction();

    const container = $(`#${CURRENT_LOCATION}-notes-container`);
    container.innerHTML = '';

    Object.values(NOTES).reverse().forEach(note => {
        if(!(note.location === CURRENT_LOCATION)) return;
        container.innerHTML += templateFunction(note);
    });
}

function checkTemplateFunction() {
    if(CURRENT_LOCATION === 'notes') return renderNotesTemplate;
    if(CURRENT_LOCATION === 'archive') return renderArchivedNotesTemplate;
    if(CURRENT_LOCATION === 'bin') {
        checkAndDeleteOldNotes();
        return renderBinNotesTemplate;
    }
}