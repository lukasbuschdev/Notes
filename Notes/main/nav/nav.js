// LOAD NAVBAR SKELETON

async function loadNav() {
    const navContainer = $('nav');

    const navContent = /*html*/ `
        <div id="navbar" class="column">
            ${navbarNotesTemplate()}
            ${navbarArchiveTemplate()}
            ${navbarBinTemplate()}
            ${navbarInfoTemplate()}
        </div>
    `;

    includeTemplate(navContainer, navContent);
    $('#notes-navbar').click();
}



// RENDER NAVBAR BUTTONS/TEMPLATES

function navbarNotesTemplate() {
    return /*html*/ `
        <div class="navbar-btn row gap-30 left active" id="notes-navbar" onclick="selectNavButton('notes'), loadNotesPage()">
            <img src="./assets/icons/notes-icon-small.png">
            <span id="lang-notes">Notes</span>
        </div>
    `;
}

function navbarArchiveTemplate() {
    return /*html*/ `
        <div class="navbar-btn row gap-30 left" id="archive-navbar" onclick="selectNavButton('archive'), loadArchivePage()">
            <img src="./assets/icons/archive.png">
            <span id="lang-archive">Archive</span>
        </div>
    `;
}

function navbarBinTemplate() {
    return /*html*/ `
        <div class="navbar-btn row gap-30 left" id="bin-navbar" onclick="selectNavButton('bin'), loadBinPage()">
            <img src="./assets/icons/bin.png">
            <span id="lang-bin">Bin</span>
        </div>
    `;
}

function navbarInfoTemplate() {
    return /*html*/ `
        <div class="navbar-btn row gap-30 left" id="info-navbar" onclick="selectNavButton('info'), loadInfoPage()">
            <img src="./assets/icons/info.png">
            <span id="lang-info">Info</span>
        </div>
    `;
}

function selectNavButton(location) {
    $$('.navbar-btn').forEach(button => button.classList.toggle('active', event.currentTarget === button));
    CURRENT_LOCATION = location;
}