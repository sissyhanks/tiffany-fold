const app = require("express").Router();
const fs = require("fs");

app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", "utf8", (err, dbNotes) => {
        if(err) throw err;
        return res.json(JSON.parse(dbNotes));
    });
});

app.post("/api/notes", (req, res) => {
    let newNote = {
        noteTitle: req.body.noteTitle,
        noteText: req.body.noteText
    };
    fs.readFile("./db/db.json", "utf8", (err, dbNotes) => {
        if (err) throw err;
        let noteList = JSON.parse(dbNotes);
        noteList.push(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(noteList), (err) => {
            if (err) throw err;
            return res.json(noteList);
        });
    });
});


module.exports = app;