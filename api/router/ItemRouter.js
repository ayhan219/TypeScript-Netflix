const mongoose = require("mongoose");
const express = require("express");
const {addFavorites,getFavorites} = require("../controller/ItemController")
const router = express.Router();


router.post("/addfavorites",addFavorites)
router.get("/getfavorites",getFavorites)



module.exports = router;