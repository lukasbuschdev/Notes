function initSettings() {
    $('#settings-container').innerHTML = settingsTemplate();
}

function openSettings() {
    const settingsContainer = $('#settings-container');
    settingsContainer.style = 'display: flex';

    $('#settings-card').classList.add('card-opened');

    settingsContainer.addEventListener('click', function() {
        closeSettings(settingsContainer);
    }, {once: true});
}

function settingsTemplate() {
    return /*html*/ `
        <div id="settings-card" class="column gap-20" onclick="event.stopPropagation()">
            <div id="settings-heading" class="center">
                <span id="lang-settings-heading">Settings</span>
            </div>
            ${languageTemplate()}
            ${darkModeTemplate()}
        </div>
    `;
}

function languageTemplate() {
    return /*html*/ `
        <div id="language-container" class="column gap-20">
            <span id="lang-language-heading">Language</span>
            <div class="language-img-containers row gap-10">
                <div id="english" class="language-img-container" onclick="lang_change('en')">
                    <img src="assets/img/usa.png">
                </div>
                <div id="german" class="language-img-container" onclick="lang_change('de')">
                    <img src="assets/img/germany.png">
                </div>
                <div id="spanish" class="language-img-container" onclick="lang_change('es')">
                    <img src="assets/img/mexico.png">
                </div>
                <div id="portuguese" class="language-img-container" onclick="lang_change('pg')">
                    <img src="assets/img/brazil.png">
                </div>
                <div id="french" class="language-img-container" onclick="lang_change('fr')">
                    <img src="assets/img/france.png">
                </div>
            </div>
        </div>
    `;
}

function darkModeTemplate() {
    return /*html*/ `
        <div id="dark-mode-container"></div>
    `;
}

function closeSettings(settingsContainer) {
    settingsContainer.style = 'disply: none';
    $('#settings-card').classList.remove('card-opened');
}