
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

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Please provide all fields" });
    }


    const findUser = await User.findOne({ email });
    if (!findUser) {
      return res.status(400).json({ message: "User not found" });
    }

  
    const isPasswordMatch = await bcrypt.compare(password, findUser.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "Password is not correct" });
    }

    
    res.status(200).json({ message: "Login successful", user: findUser });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
module.exports ={
    signUp,
    login
}