const mongoose = require("mongoose");
const express = require("express");
const {signUp} = require("../controller/UserController")
const router = express.Router();

router.post("/signup",signUp);


module.exports = router;