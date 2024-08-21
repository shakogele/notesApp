const { createNote, removeNote, getNotes, getNote } = require('./notes')
const yargs = require('yargs')

yargs.command({
    command: "add",
    describe: "Add a note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) =>  {
        console.log("Adding a note with title - ", argv.title, " And with body: ", argv.body)
        createNote(argv.title, argv.body)
    }
})

yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: "string"
        },
    },
    handler: (argv) => {
        console.log(`Removing a note with title - ${argv.title}`)
        removeNote(argv.title)
    }
})

yargs.command({
    command: "read",
    describe: "Read a note",
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: "string"
        },
    },
    handler: (argv) => {
        console.log("Reading a note!")
        getNote(argv.title)
    }
})

yargs.command({
    command: "list",
    describe: "List all notes",
    handler: () => {
        console.log("List all notes!")
        getNotes()
    }
})

yargs.parse()
