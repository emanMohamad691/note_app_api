var generator = require("../util/generator");
var store = require("../util/mystorage");
var noteModel = require("../models/noteModel");

//get all note
exports.getAllNotes = (req, res) => {
    var values = store.getValues(store.myStorage)
    console.log(JSON.stringify(values))
    res.send("All notes" + JSON.stringify(values))

}

//save note
exports.saveNotes = (req, res) => {
    var seqId = generator.generate();
    var title = req.body.title;
    var content = req.body.content;
    var createdBy = "admin";
    var createdOn = new Date();

    if (!title || !content) {
        res.status(500).send("title and content must be entered");
    }

    var note = new noteModel.note(seqId, title, content, createdBy, createdOn);
    store.myStorage.setItem(seqId, note);

    res.status(201).send("save note")
}


//update note
exports.updateNotes = (req, res) => {
    var id = req.body.id;
    var title = req.body.title;
    var content = req.body.content;
    var createdBy = "admin";
    var createdOn = new Date();

    var noteId = store.myStorage.getItem(id);

    if (!id) {
        res.status(500).send("id must be entered");
    }
    else if (!title || !content) {
        res.status(500).send("title and content must be entered");

    }
    else if (!noteId) {
        res.status(500).send("id doesn't exist");

    }

    var note = new noteModel.note(id, title, content, createdBy, createdOn);
    store.myStorage.setItem(id, note);

    res.status(200).send("update note")
}

//delete note
exports.deleteNotes = (req, res) => {
    id = req.params.id;
    var noteId = store.myStorage.getItem(id);

    if (!id) {
        res.status(500).send("id must be entered");
    }

    else if (!noteId) {
        res.status(500).send("id doesn't exist");

    }

    store.myStorage.removeItem(id);
    res.status(200).send("delete done");
}