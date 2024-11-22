const mongoose = require("mongoose");
const express = require("express");
const {addFavorites} = require("../controller/ItemController")
const router = express.Router();


router.post("/addfavorites",addFavorites)



module.exports = router;