const mongoose = require("mongoose");


const UserSchema = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
      favorites: [
        {
          id: { type: String, required: true }, 
          title: { type: String, required: true },
          poster_path: { type: String }, 
        },
      ],
});

module.exports = mongoose.model("User",UserSchema);