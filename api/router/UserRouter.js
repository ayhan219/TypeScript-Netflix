const mongoose = require("mongoose");
const express = require("express");
const {signUp,login} = require("../controller/UserController")
const router = express.Router();

router.post("/signup",signUp);
router.post("/login",login)


module.exports = router;