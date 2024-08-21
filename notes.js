const fs = require('fs')

const getNotes = () => {
    try{
        const notesBuffer = fs.readFileSync('notes.json').toString()
        return JSON.parse(notesBuffer)
    }catch(err){
        return []
    }
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}

const getNote = (title) => {
    const notes = getNotes()
    const targetNote = notes.find(note => note.title = title)
    return targetNote
}

const createNote = (title, body) => {
    const notes = getNotes()
    if(notes.some((note) => note.title !== title)){
        notes.push({title, body})
        saveNotes(notes)
    }else{
        console.log(`The note with given title ${title} already exists.`)
    }
}

const removeNote = (title) => {
    const notes = getNotes()
    const targetNoteIndex = notes.findIndex(note => note.title === title)
    if(targetNoteIndex > -1){
        notes.splice(targetNoteIndex, 1)
        saveNotes(notes)
    }else{
        console.log(`Note with title - ${title} does not exists, hence cannot be removed!`)
    }
}

module.exports = { getNotes, createNote, removeNote, getNote }