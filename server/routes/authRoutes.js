const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const PostBlog = mongoose.model("PostBlog");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

require("dotenv").config();

router.post("/signup", async (req, res) => {
  console.log("sent by client - ", req.body);
  const { name, email, password, dob, address } = req.body;

  try {
    if (!email || !password || !name || !dob || !address) {
      return res.status(422).json({ error: "Please fill all the fields" });
    }

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(422).json({ error: "Email Already Exists" });
    }

    const user = new User({
      name,
      email,
      password,
      dob,
      address,
    });

    await user.save();
    // res.json({ message: "User saved successfully" });
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.send({ token });
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "please add email or password" });
  }
  const savedUser = await User.findOne({ email: email });
  if (!savedUser) {
    return res.status(422).json({ error: "Invalid Credentials" });
  }

  try {
    bcrypt.compare(password, savedUser.password, (err, result) => {
      if (result) {
        console.log(`password matched`);
        const token = jwt.sign({ _id: savedUser._id }, process.env.JWT_SECRET);
        res.send({ token });
      } else {
        console.log(`password dose not match`);
        return res.status(422).json({ error: "Invaild Credentials " });
      }
    });
  } catch (err) {
    console.log(err);
  }
});

router.post("/postblog", async (req, res) => {
  console.log(req.body);
  const data = new PostBlog(req.body);
  await data.save();
  res.send({
    success: true,
    message: "data save succcessfully and refresh the to view new contact",
  });
});

router.get("/postblog", async (req, res) => {
  try {
    // Assuming 'userData' is your model or data source for user data
    const data = await PostBlog.find(); // Retrieve user data from the database

    // res.send({
    //   success: true,
    //   data: users,
    //   message: "Data retrieved successfully",
    // });
    res.status(200).json(data);
  } catch (error) {
    console.error("Error while fetching data", error);
    res.status(500).send({
      success: false,
      message: "An error occurred while fetching data",
    });
  }
});

module.exports = router;
