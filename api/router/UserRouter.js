const mongoose = require("mongoose");
const express = require("express");
const {signUp,login,getCurrentUser} = require("../controller/UserController")
const router = express.Router();

router.post("/signup",signUp);
router.post("/login",login)
router.get("/getcurrent",getCurrentUser)


module.exports = router;