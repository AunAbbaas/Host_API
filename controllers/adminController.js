const Admin = require("../model/admin.js");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const AdminSignup = async (req, res) => {
  const { username, email, password, DOB, gender, profilepicture } = req.body;
  try {
    const exisitingUser = await Admin.findOne({ email: email });
    if (exisitingUser) {
      return res.status(401).json({ message: "User Already exist" });
    }
    const hashedPassword = await bcryptjs.hash(password, 10);
    const result = await Admin.create({
      username: username,
      email: email,
      password: hashedPassword,
      DOB:DOB,
      gender:gender,
      profilepicture:profilepicture,
    });
    const token = jwt.sign(
      { email: result.email, id: result._id },
      "secretkey"
    );
    res.status(200).json({ user: result, token });
  } catch (error) {
    res.status(401).json({ message: "Something went Wrong" });
  }
};

const AdminSignin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const exisitingUser = await Admin.findOne({ email: email });
    if (!exisitingUser) {
      return res.status(404).json({ error });
    }
    const matchPassword = await bcryptjs.compare(
      password,
      exisitingUser.password
    );
    if (!matchPassword) {
      res.status(400).json({ error });
    }
    const token = jwt.sign(
      { email: exisitingUser.email, id: exisitingUser._id },
      "secretkey"
    );
    res.status(200).json({ user: exisitingUser, token: token });
  } catch (error) {
    res.status(400).json({ message: "Error" });
  }
};

module.exports = { AdminSignin, AdminSignup };
