class Storage {
    STORAGE_URL = 'https://notes-71741-default-rtdb.firebaseio.com/';

    data;

    async getAllData() {
        const data = await (await fetch(this.STORAGE_URL + '.json')).json();
        this.data = data;  
        return data;
    }
    
    async upload(path = '', uploadContent) {
        const data = await (await fetch(this.STORAGE_URL + path + '.json', {method: 'PUT', body: JSON.stringify(uploadContent)})).json();
        return data;
    }

    async delete(path) {
        const data = await (await fetch(this.STORAGE_URL + path + '.json', {method: 'DELETE'})).json();
    }

    getAllNotes() {
        return Object.values(this.data.notes).reduce((notes, note) => {
            const newNote = new Note(note);
            notes[note.id] = newNote;
            return notes;
        }, {});
    }
}

const STORAGE = new Storage();
