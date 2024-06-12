const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        res.status(200).json({ msg: "Welcome to our home page" });
    } catch (error) {
        console.log(error);
    }
};

const register = async (req, res) => {
    try {
        // const data = req.body;
        console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(400).json({ message: "email already exists" });
        }

        const userCreated = await User.create({ username, email, phone, password });

        res.status(201).json({ message: "Registration successful", token: await userCreated.generateToken(), userId: userCreated._id.toString() });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const user = await userExist.comparePassword(password);
        
        if(user){
            res.status(200).json({ message: "Login successful", token: await userExist.generateToken(), userId: userExist._id.toString() });
        }else{
            return res.status(401).json({ message: "Invalid credentials" });
        }
    }catch(error){
        console.error(error);
    }
}

const user = async (req,res)=>{
    try {
        const userData = req.user;
        return res.status(200).json({userData});
    } catch (error) {
        console.log("Error from user root",error);
    }
}

module.exports = { home, register, login, user };