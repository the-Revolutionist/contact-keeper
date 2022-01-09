const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = require("../middleware/auth");
const Contact = require("../models/Contact");

//&  @route     GET api/contacts
//&  @dsc       Get all users contacts
//&  @access    private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//&  @route     POST api/contacts
//&  @desc      Add new contact
//&  @access    private
router.post("/", auth, async (req, res) => {
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
