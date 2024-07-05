class Note {
    constructor({ title, content, time, color = "white", id = Date.now(), location }) {
        this.title = title;
        this.content = content;
        this.color = color;
        this.time = time;
        this.id = id;
        this.location = location;
    }

    async saveNote() {
        const uploadedNoteData = await STORAGE.upload(`notes/${this.id}`, this);
        NOTES[this.id] = new Note(uploadedNoteData);
    }

    moveTo(location) {
        if(!/(notes|archive|bin)/.test(location)) throw Error(`Location ${location} of NOTE was not found!`);
        this.location = location;
        return this.saveNote();
    }

    async deletePermanently() {
        await STORAGE.delete(`notes/${this.id}`);
        delete NOTES[this.id];
    }
}