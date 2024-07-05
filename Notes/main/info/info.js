function loadInfoPage() {
    $$('.content').forEach(container => container.classList.add('d-none'));
    $('#info-content-container').classList.remove('d-none');

    renderNotesMain();
}

function infoPageTemplate() {
    const infoContainer = $('#info-content-container');
    infoContainer.innerHTML = '';
    
    const infoContent = /*html*/ `
        <div id="info-container" class="scroll column gap-20">
            <span id="lang-information-text" class="txt-600 txt-gray txt-big center">Here you can find the links to all icons used on this page</span>
            <div class="column gap-15 center">
                ${linksTemplate()}
            </div>
            ${legalAndPrivacyTemplate()}
        </div>
    `;

    includeTemplate(infoContainer, infoContent);
}

function linksTemplate() {
    return /*html*/ `
        <a href="https://www.flaticon.com/free-icons/open-menu" title="open-menu icons">Open-menu icons created by Pixel perfect - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/post-it" title="Post it icons">Post it icons created by Smashicons - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/search" title="search icons">Search icons created by Pixel perfect - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/settings" title="settings icons">Settings icons created by Freepik - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/cancel" title="cancel icons">Cancel icons created by Stockio - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/delete" title="delete icons">Delete icons created by feen - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/download-file" title="download-file icons">Download-file icons created by Rahul Kaklotar - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/color" title="color icons">Color icons created by See Icons - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/restore" title="restore icons">Restore icons created by Grand Iconic - Flaticon</a>
        <a href="https://www.flaticon.com/free-icons/info" title="info icons">Info icons created by Freepik - Flaticon</a>
    `;
}

function legalAndPrivacyTemplate() {
    return /*html*/ `
        <div id="legal-notice-privacy-container" class="row center gap-30">
            <a id="lang-privacy-policy" href="/Notes/main/privacy/privacy-${CURRENT_LANG}.html" target="_blank">Privacy policy</a>
            <a id="lang-legal-notice" href="/Notes/main/legal-notice/legal-notice-${CURRENT_LANG}.html" target="_blank">Legal notice</a>
        </div>
    `;
}