let filterActive = false;

function loadHeader() {
    const headerContainer = $('header');

    headerContent = /*html*/ `
        ${logoTemplate()}
        ${searchBarTemplate()}
        ${settingsBtnTemplate()}
    `;

    includeTemplate(headerContainer, headerContent);
}

function logoTemplate() {
    return /*html*/ `
        <div id="menu-and-logo" class="row gap-15">
            <div id="logo" class="row gap-10">
                <img src="./assets/icons/notes-icon.png">
                <span id="lang-notes-heading">Notes</span>
            </div>
        </div>
    `;    
} 

function searchBarTemplate() {
    return /*html*/ `
        <div id="search-container">
            <div id="form" class="row gap-20">
                <div class="left gap-15">
                    <button class="center">
                        <img src="./assets/icons/loupe.png">
                    </button>
                    <input id="search" placeholder="Search" oninput="searchNotes()">
                </div>
                <button id="delete" class="center" onclick="deleteInput()">
                    <img src="./assets/icons/delete.png">
                </button>
            </div>
        </div>
    `;
}

function settingsBtnTemplate() {
    return /*html*/ `
        <div id="account-settings" class="row">
            <div id="settings" class="center" onclick="openSettings()">
                <img src="./assets/icons/settings.png">
            </div>
        </div>
    `;
} 

function deleteInput() {
    $('#search').value = '';
    searchNotes();
}

function highlightMatches(text, searchInput) {
    const escapedSearchInput = searchInput.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedSearchInput})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}


function searchNotes() {
    const searchContentContainer = $('#search-content-container');
    searchContentContainer.innerHTML = '';

    const searchInput = $('#search').value.toLowerCase();
    if(searchInput.length <= 2) return searchContentContainer.innerHTML = '';

    const filteredNotes = Object.values(NOTES).filter(note =>
        (note.title && note.title.toLowerCase().includes(searchInput)) || 
        (note.content && note.content.toLowerCase().includes(searchInput))
    );

    filterActive = true;
    renderSearchResults(filteredNotes, searchContentContainer, searchInput);
}

function renderSearchResults(filteredNotes, searchContentContainer, searchInput) {
    filteredNotes.forEach(note => 
        searchContentContainer.innerHTML += renderFilteredNotesTemplate(note, searchInput)
    );
}

function renderFilteredNotesTemplate(note, searchInput) {
    const highlightedTitle = highlightMatches(note.title, searchInput);
    const highlightedContent = highlightMatches(note.content, searchInput);

    return /*html*/ `
        <div id="${note.id}" class="single-note-container ${note.color}" onclick="openNote(${note.id})">
            <div id="single-note-title-content-container" class="filtered-note-container">
                <div id="single-note-title">${highlightedTitle}</div>
                <div id="single-note-content">${highlightedContent}</div>
            </div>
        </div>
    `;
}