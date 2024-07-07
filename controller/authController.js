const User =require("../models/userModel.js") ;
const {hashPassword,comparePassword}=require('../helper/authHelper.js');
const JWT=require('jsonwebtoken');
require('dotenv').config();
exports.registerController=async(req,res)=>{
    try {
        const { name, email, answer, password, phone, address } = req.body;
        // console.log(email);
        //validations
        if (!name) {
          return res.send({ message: "Name is Required" });
        }
        if (!email) {
          return res.send({ message: "Email is Required" });
        }
        if (!password) {
          return res.send({ message: "Password is Required" });
        }
        if (!phone) {
          return res.send({ message: "Phone no is Required" });
        }
        if (!address) {
          return res.send({ message: "Address is Required" });
        }
        if (!answer) {
          return res.send({ message: "Answer is Required" });
        }
        //check user
        // console.log(User);
        // console.log("okey");
        const exisitingUser = await User.findOne({email});
        // console.log(exisitingUser);
        //exisiting user
        if (exisitingUser) {
          return res.status(200).send({
            success: false,
            message: "Already Register please login",
          });
        }
        //register user
        const hashedPassword = await hashPassword(password,10);
        //save
        const user = await User.create({
          name,
          email,
          phone,
          address,
          password: hashedPassword,
          answer,
        });
    
        res.status(201).send({
          success: true,
          message: "User Register Successfully",
          user,
        });
    } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Registeration",
      error,
    });
    }
}
exports.loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      //validation
      if (!email || !password) {
        return res.status(404).send({
          success: false,
          message: "Invalid email or password",
        });
      }
      //check user
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Email is not registerd",
        });
      }
      const match = await comparePassword(password, user.password);
      if (!match) {
        return res.status(200).send({
          success: false,
          message: "Invalid Password",
        });
      }
      //token
      const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });
      res.status(200).send({
        success: true,
        message: "login successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          adddress: user.address,
          role:user.role,
        },
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in login",
        error,
      });
    }
  };

  exports.testController = (req, res) => {
    try {
      res.send("Protected Routes");
    } catch (error) {
      console.log(error);
      res.send({ error });
    }
  };
  

  exports.forgotPasswordController=async(req,res)=>{
    try {
      const { email, answer, newPassword } = req.body;
    if (!email) {
      res.status(400).send({ message: "Email is required" });
    }
    if (!answer) {
      res.status(400).send({ message: "answer is required" });
    }
    if (!newPassword) {
      res.status(400).send({ message: "New Password is required" });
    }
    //check
    const user = await User.findOne({ email, answer });
    //validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Wrong Email Or Answer",
      });
    }
    const hashed = await hashPassword(newPassword);
    await User.findByIdAndUpdate(user._id, { password: hashed },{new:true});
    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
    } catch (error) {
      console.log(error);
     res.status(500).send({
      success: false,
      message: "Something went wrong",
      error,
    });
    }
  }