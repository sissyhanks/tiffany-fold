// establishes app as variable for these specialized routs
const app = require("express").Router();
//include the node file system module for reading and writing files
const fs = require("fs");
// requires uniqid package to generate a unique ID for each note
const uniqid = require('uniqid');

//methods to display API
app.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, dbNotes) => {
        if(err) throw err;
        return res.json(JSON.parse(dbNotes));
    });
});

// method for creating new notes & save them to db.json file
app.post("/api/notes", (req, res) => {
    let newNote = {
        id: uniqid('note'),
        title: req.body.title,
        text: req.body.text
    };
    fs.readFile("./db/db.json", (err, dbNotes) => {
        if (err) throw err;
        let noteList = JSON.parse(dbNotes);
        noteList.push(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(noteList), (err) => {
            if (err) throw err;
            return res.json(noteList);
        });
    });
});

//methods to display individual note by ID
app.get("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    let noteList = JSON.parse(dbNotes);
      for (let i = 0; i < noteList.length; i++) {
    if (chosen === noteList[i].routeName) {
      return res.json(noteList[i]);
    }
}
});
// app.delete("/api/notes/:id", (req, res) =>{

// });

module.exports = app;