const path = require("path");
const router = require("express").Router();

//anything that matches /notes, send the notes.html file
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "..public/notes.html"));
});
// Otherwise, all other routes respond with the index.html file
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..public/index.html"));
});
