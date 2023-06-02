const express=require("express");
const router=express.Router();
const noteController=require("../controller/note-app-controller");

router.get("/notes",noteController.getAllNotes);
router.post("/notes/save",noteController.saveNotes);

router.put("/notes/update",noteController.updateNotes);

router.delete("/notes/delete/:id",noteController.deleteNotes);


module.exports=router;