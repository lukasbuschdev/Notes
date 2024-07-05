const paletteColors = ['white', 'sky', 'night', 'ocean', 'sun', 'moon', 'grass', 'earth', 'fire'];
let noteInputPlaceholderActive = false;

// LOAD AND RENDER NOTES INPUT FIELD CONTAINER

function loadNotesPage() {
    $$('.content').forEach(container => container.classList.add('d-none'));
    $('#notes-content-container').classList.remove('d-none');

    renderNotesMain();
}

function notesPageTemplate() {
    const notesContainer = $('#notes-content-container');

    const notesContent = /*html*/ `
        <div id="note-input-wrapper" class="center">
            ${renderNoteInputContainer()}
        </div>

        <div id="notes-notes-container" class="center scroll">
            <div id="notes-container" class=""></div>
        </div>
    `;

    includeTemplate(notesContainer, notesContent);
}

function renderNoteInputContainer() {
    return /*html*/ `
        <div id="note-input-container">
            <div id="title-content-wrapper">
                <input id="note-title-input" placeholder="Take a note..." onfocus="changeInput()">
                <input id="note-content-input" placeholder="Take a note...">
            </div>

            <div id="note-addons" class="right row">
                <button id="note-input-close-btn">Close</button>
            </div>
        </div>
    `;
}



// OPEN NOTES INPUT FIELD CONTAINER & CHANGE DESIGN/VALUES

async function changeInput() {
    noteInputPlaceholderActive = true;
    const noteTitle = $('#note-title-input');
    const noteInputContainer = $('#note-input-container');

    openNoteInput(noteTitle);
    addInputEventListeners(noteTitle);

    document.addEventListener('click', function(event) {
        if(!noteInputContainer.contains(event.target)) {
            closeNoteInput(noteTitle);
        }
    });
}

function addInputEventListeners(noteTitle) {
    $('#note-input-close-btn').addEventListener('click', function() {
        closeNoteInput(noteTitle);
    });
}

function openNoteInput(noteTitle) {
    checkNoteInputTitlePlaceholder(noteTitle);

    $('#note-content-input').style.display = 'flex';
    $('#note-addons').style.display = 'flex';
}



// CLOSE NOTES INPUT FIELD CONTAINER & CHANGE DESIGN/VALUES

function closeNoteInput(noteTitle) {
    const noteContent = $('#note-content-input');
    noteInputPlaceholderActive = false;
    
    if(noteTitle.value.length || noteContent.value.length > 0) saveNote(noteTitle.value, noteContent.value);
    
    resetInputValues(noteTitle, noteContent);
    
    $('#note-content-input').style.display = 'none';
    $('#note-addons').style.display = 'none';        
    checkNoteInputTitlePlaceholder(noteTitle);
}

function resetInputValues(noteTitle, noteContent) {
    noteTitle.value = '';
    noteContent.value = '';
    
    noteTitle.setAttribute('placeholder', 'Take a note...');
}

// SAVE NOTES 

async function saveNote(title, content) {
    const time = formatTime(Date.now());
    NOTE = new Note({ title, content, time, location: 'notes' });
    await NOTE.saveNote();
    renderNotesMain();
}



// GET AND FORMAT THE TIME THE NOTE WAS MADE/EDITED

function getTimeNow() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.toLocaleString('default', { month: 'short' });
    const day = now.getDate();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    
    return `${day} ${month} ${year} ${hours}:${minutes}`;
}

function formatTime(date) {
    const dateObj = new Date(date);
    const month = dateObj.toLocaleString('default', { month: 'short' });
    const day = dateObj.getDate();
    const hours = dateObj.getHours().toString().padStart(2, '0');
    const minutes = dateObj.getMinutes().toString().padStart(2, '0');
 
    return `${day} ${month} ${hours}:${minutes}`;
}



// LOAD/RENDER SINGLE NOTES

function renderNotesTemplate(note) {
    return /*html*/ `
        <div id="${note.id}" class="single-note-container ${note.color}" onclick="openNote(${note.id})">
            <div id="single-note-title-content-container">
                <div id="single-note-title">${note.title}</div>
                <div id="single-note-content">${note.content}</div>
            </div>
            <div id="single-note-addon-container" class="row gap-15">
                <div class="center" data-note-id="${note.id}" id="single-note-archive" onclick="moveTo(${note.id}, 'archive')">
                    <img src="./assets/icons/archive-white.png">
                </div>
                <div class="center single-note-bin" data-note-id="${note.id}" id="single-note-bin" onclick="moveTo(${note.id}, 'bin')">
                    <img src="./assets/icons/bin-white.png">
                </div>
            </div>
        </div>
    `;
}



// ADD COLOR PALETTE EVENT LISTENER

function openPalette(noteId) {
    const paletteSelector = `.palette-container[data-note-id="${noteId}"]`;
    const paletteContainer = $(paletteSelector);
    const singleNoteSelector = `.single-note-container[data-note-id="${noteId}"]`;
    const singleNoteContainer = $(singleNoteSelector);
    
    paletteContainer.innerHTML = renderPaletteTemplate();
    paletteContainer.classList.toggle('d-none');

    addPaletteEventListeners(noteId, paletteContainer, singleNoteContainer);
}

function renderPaletteTemplate() {
    return /*html*/ `
        <div id="color-palette-container" class="row gap-10">
            <div id="white" class="circle white"></div>
            <div id="sky" class="circle sky"></div>
            <div id="ocean" class="circle ocean"></div>
            <div id="night" class="circle night"></div>
            <div id="moon" class="circle moon"></div>
            <div id="sun" class="circle sun"></div>
            <div id="grass" class="circle grass"></div>
            <div id="earth" class="circle earth"></div>
            <div id="fire" class="circle fire"></div>
        </div>
    `;
}

function addPaletteEventListeners(noteId, paletteContainer, singleNoteContainer) {
    const paletteColors = $$('.circle');
    paletteColors.forEach(color => {
        color.addEventListener('click', function() {
            event.stopPropagation();
            let colorId = event.currentTarget.id;
            addColorToCard(colorId, noteId, singleNoteContainer);
            paletteContainer.classList.add('d-none');
        });
    });
}

async function addColorToCard(colorId, noteId, singleNoteContainer) {
    let singleNote = NOTES[noteId];
    singleNote.color = colorId;
    
    paletteColors.forEach(color => singleNoteContainer.classList.remove(color));
    singleNoteContainer.classList.add(`${colorId}`);

    await singleNote.saveNote();
    if(filterActive) return searchNotes();
    renderNotesMain();
}



// MOVE SINGLE NOTE TO BIN

async function moveTo(id, location) {
    event.stopPropagation();
    if(!(id in NOTES)) return;

    await NOTES[id].moveTo(location);

    if(filterActive) return;
    renderNotesMain();
}



// ADD OPEN NOTE 

function openNote(noteId) {
    const note = NOTES[noteId];

    const openNoteContainer = $('#open-note-container');
    openNoteContainer.addEventListener('click', function() {
        closeNote(noteId);
    }, {once: true});

    openNoteContainer.innerHTML = '';
    openNoteContainer.style.display = 'flex';

    openNoteContainer.innerHTML = renderOpenNoteTemplate(note);
    lang_load();
}

function renderOpenNoteTemplate(note) {
    return /*html*/ `
        <div id="${note.id}" class="single-note-container opened ${note.color}" data-note-id="${note.id}" onclick="event.stopPropagation()">
            <div id="single-note-title-content-container">
                <div contenteditable id="single-note-title">${note.title}</div>
                <div contenteditable id="single-note-content">${note.content}</div>
            </div>
            <div class="right row gap-10" id="time-edited-container">
                <span id="lang-open-note-edited">Edited</span>
                <span>${note.time}</span>
            </div>
            ${openNoteAddonTemplate(note.id)}
        </div>
        <div data-note-id="${note.id}" class="palette-container center d-none"></div>
    `;
}

function openNoteAddonTemplate(noteId) {
    return /*html*/ `
        <div id="single-note-addon-container" class="row gap-15">
            <div class="center" id="single-note-pallete" onclick="openPalette(${noteId})">
                <img src="./assets/icons/pallete-white.png">
            </div>
            <div class="center" data-note-id="${noteId}" id="single-note-unarchive" onclick="moveTo(${noteId}, 'notes'), closeNote(${noteId})">
                <img src="./assets/icons/unarchive-white.png">
            </div>
            <div class="center" data-note-id="${noteId}" id="single-note-archive" onclick="moveTo(${noteId}, 'archive'), closeNote(${noteId})">
                <img src="./assets/icons/archive-white.png">
            </div>
            <div class="center single-note-bin" data-note-id="${noteId}" id="single-note-bin" onclick="moveTo(${noteId}, 'bin'), closeNote(${noteId})">
                <img src="./assets/icons/bin-white.png">
            </div>
        </div>
    `;
}

function closeNote(noteId) {
    const newTitle = $('.opened #single-note-title').innerText;
    const newContent = $('.opened #single-note-content').innerText;

    updateValues({noteId, newTitle, newContent});

    $('#open-note-container').style.display = 'none';
}

async function updateValues({noteId, newTitle, newContent}) {
    const newTime = formatTime(Date.now());
    const note = NOTES[noteId];

    if(newTitle === note.title && newContent === note.content) return log('NOT CHANGED!');

    if(newTitle !== undefined) note.title = newTitle;
    if(newContent !== undefined) note.content = newContent;

    note.time = newTime;

    await note.saveNote();

    if(filterActive) return searchNotes();
    renderNotesMain();
}