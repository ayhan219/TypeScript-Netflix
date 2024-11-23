const mongoose = require("mongoose");
const express = require("express");
const {addFavorites,getFavorites,deleteFavorites} = require("../controller/ItemController")
const router = express.Router();


router.post("/addfavorites",addFavorites)
router.get("/getfavorites",getFavorites)
router.delete("/deletefavorites",deleteFavorites);



module.exports = router;