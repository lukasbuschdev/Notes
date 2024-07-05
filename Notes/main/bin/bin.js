function loadBinPage() {
    $$('.content').forEach(container => container.classList.add('d-none'));
    $('#bin-content-container').classList.remove('d-none');

    binPageTemplate();
    renderBinTemplate();
}



// RENDER BIN SKELETON

function binPageTemplate() {
    const binContainer = $('#bin-content-container');
    binContainer.innerHTML = '';

    const binContent = /*html*/ `
        <div id="bin-notification-container">
            ${renderBinNotification()}
        </div>
        <div id="bin-notes-container" class="scroll"></div>
        <div id="empty-bin-container" class="center column gap-30">
            <img src="./assets/icons/bin-white.png">
            <span id="lang-empty-bin">No notes in Recycle Bin</span>
        </div>
    `;

    includeTemplate(binContainer, binContent);
}



// RENDER BIN NOTIFICATION

function renderBinNotification() {
    return /*html*/ `
        <div id="bin-notification-wrapper" class="row">
            <span id="lang-delete-after-days">Notes in the Recycle Bin are deleted after 7 days</span>
            <button id="empty-bin-btn" onclick="emptyBin()">Empty bin</button>
        </div>
    `;
}



// RENDER BIN & BIN NOTE TEMPLATE

function renderBinTemplate() {
    $('#empty-bin-btn').style.display = 'content';

    renderNotesMain();
}

function renderBinNotesTemplate(note) {
    return /*html*/ `
        <div id="${note.id}" class="single-note-container ${note.color}">
            <div id="single-note-title-content-container" onclick="openNote(${note.id})">
                <div id="single-note-title">${note.title}</div>
                <div id="single-note-content">${note.content}</div>
            </div>
            <div id="single-note-addon-container" class="row gap-15">
                <div class="center" data-note-id="${note.id}" id="single-note-trash-delete" onclick="deletePermanently(${note.id})">
                    <img src="./assets/icons/trash-delete.png">
                </div>
                <div class="center single-note-bin" data-note-id="${note.id}" id="single-note-trash-restore" onclick="moveTo(${note.id}, 'notes')">
                    <img src="./assets/icons/trash-restore.png">
                </div>
            </div>
        </div>
    `;
}



// DELETE NOTES FROM BIN

async function deletePermanently(id) {
    await NOTES[id].deletePermanently();
    renderNotesMain();
}

async function emptyBin() {
    const deleteNotesPromise = Object.values(NOTES)
        .filter(note => note.location === 'bin')
        .map(note => note.deletePermanently());

    await Promise.all(deleteNotesPromise);
    renderNotesMain();
}



// CHECK THE 7 DAYS TO DELETE

function checkAndDeleteOldNotes() {
    Object.values(NOTES).forEach(note => {
        if(note.location === 'bin' && isOlderThan7Days(note.id)) return deletePermanently(note.id)
    });
}

function isOlderThan7Days(noteId) {
    const now = Date.now();
    const noteDate = noteId;
    const sevenDaysInMilliseconds = 7 * 24 * 60 * 60 * 1000;

    return (now - noteDate) > sevenDaysInMilliseconds;
}

