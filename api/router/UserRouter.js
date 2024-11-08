const mongoose = require("mongoose");
const express = require("express");
const {signUp,login,getCurrentUser} = require("../controller/UserController")
const AuthMiddleware = require("../middleware/AuthMiddleware")
const router = express.Router();

router.post("/signup",signUp);
router.post("/login",login)
router.get("/getcurrent",AuthMiddleware,getCurrentUser)


module.exports = router;