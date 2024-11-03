
const mongoose = require("mongoose");
const User = require("../model/User")
const bcrypt = require("bcrypt")


const signUp = async(req,res)=>{
    const {username,email,password} = req.body;
    

    if(!username || !email || !password){
        return res.status(400).json({message:"provide all area"})
    }
    try {
        const existingUser = await User.findOne({
            $or: [{ email }, { username }],
          });
          if(existingUser){
            return res.status(400).json({message:"user already exist"})
          }

          const hashedPW = await bcrypt.hash(password,10);

          const newUser = new User({
            username,
            email,
            password:hashedPW
          });

          await newUser.save();
          res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

module.exports ={
    signUp
}