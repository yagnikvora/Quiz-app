const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Define the User schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, { versionKey: false });

//? secure the password with the bcrypt
userSchema.pre("save", async function () {
    const user = this;

    if (!user.isModified) {
        return next();
    }

    try {
        const saltRound = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(user.password, saltRound);
        user.password = hashedPassword;
    } catch (error) {
        return next(error);
    }
});

userSchema.methods.generateToken = function () {
    try {
        return jwt.sign(
            {
                userId: this._id.toString(),
                email: this.email,
                isAdmin: this.isAdmin,
            },
            "yagnikniwebsite",
            {
                expiresIn: "2d",
            }
        );
    } catch (error) {
        console.error("Token Error: ", error);
    }
}

userSchema.methods.comparePassword = async function (password) {
    try {
        return bcrypt.compare(password, this.password);
    } catch (error) {
        console.error("Compare Password Error: ", error);
    }
}

// define the model or the collection name
const User = new mongoose.model("USER", userSchema);

module.exports = User; 