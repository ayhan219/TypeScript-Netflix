const mongoose = require("mongoose");
const express = require("express");
const {signUp,login,getCurrentUser,logoutUser} = require("../controller/UserController")
const AuthMiddleware = require("../middleware/AuthMiddleware")
const router = express.Router();

router.post("/signup",signUp);
router.post("/login",login)
router.get("/getcurrent",AuthMiddleware,getCurrentUser)
router.delete("/logout",logoutUser)


module.exports = router;