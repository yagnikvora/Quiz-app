const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res
            .status(401)
            .json({ message: "Unauthorized HTTP, Token not provided" });
    }

    const jwtToken = token.replace("Bearer", "").trim();

    try {
        const isVerified = jwt.verify(jwtToken, "yagnikniwebsite");

        const userData = await User.findOne({ email: isVerified.email }).select({password: 0,});

        req.token = token;
        req.user = userData;
        req.userID = userData._id;

        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized. Invalid token.", error: error });
    }
};

module.exports = authMiddleware;