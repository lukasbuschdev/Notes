async function init() {
    await STORAGE.getAllData();
    NOTES = STORAGE.getAllNotes();
    loadHeader();
    loadContent();
    loadNav();
    lang_load();
}