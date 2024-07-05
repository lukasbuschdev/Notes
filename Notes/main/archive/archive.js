function loadArchivePage() {
    $$('.content').forEach(container => container.classList.add('d-none'));
    $('#archive-content-container').classList.remove('d-none');

    renderNotesMain();
}



// ARCHIVE SKELETON TEMPLATE

function archivePageTemplate() {
    const archiveContainer = $('#archive-content-container');

    const archiveContent = /*html*/ `
        <div id="archive-notes-container" class="scroll"></div>
        
        <div id="empty-archive-container" class="center column gap-20">
            <img src="./assets/icons/archive-white.png">
            <span id="lang-empty-archive">Your archived notes appear here</span>
        </div>
    `;

    includeTemplate(archiveContainer, archiveContent);
}

function renderArchivedNotesTemplate(note) {
    return /*html*/ `
        <div id="${note.id}" class="single-note-container ${note.color}">
            <div id="single-note-title-content-container" onclick="openNote(${note.id})">
                <div id="single-note-title">${note.title}</div>
                <div id="single-note-content">${note.content}</div>
            </div>
            <div id="single-note-addon-container" class="row gap-15">
                <div class="center" data-note-id="${note.id}" id="single-note-unarchive" onclick="moveTo(${note.id}, 'notes')">
                    <img src="./assets/icons/unarchive-white.png">
                </div>
                <div class="center single-note-bin" data-note-id="${note.id}" id="single-note-bin" onclick="moveTo(${note.id}, 'bin')">
                    <img src="./assets/icons/bin-white.png">
                </div>
            </div>
        </div>
    `;
}