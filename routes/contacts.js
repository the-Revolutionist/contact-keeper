const express = require("express");
const router = express.Router();

//&  @route     GET api/contacts
//&  @dsc       Get all users contacts
//&  @access    private
router.get("/", (req, res) => {
  res.send("Get all contacts");
  console.log("Get all users contacts");
});

//&  @route     POST api/contacts
//&  @desc      Add new contact
//&  @access    private
router.post("/", (req, res) => {
  res.send("Add Contact");
  console.log("Add Contact");
});

//&  @route     PUT api/contacts/:id
//&  @desc      Update contact
//&  @access    Private
router.put("/:id", (req, res) => {
  res.send("Update contact");
  console.log("Update contact");
});

//&  @route     DELETE api/contacts/:id
//&  @desc      DELETE contact
//&  @access    Private
router.delete("/:id", (req, res) => {
  res.send("Delete contact");
  console.log("Delete contact");
});

module.exports = router;
