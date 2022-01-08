const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/User");

//*  @route POST api/users
//*  @desc Register a user
//*  @access Public

router.post(
  "/",
  [
    check("name", "Please enter a name").notEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email: email });
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }
      user = new User();
    } catch (error) {}
  }
);

module.exports = router;
