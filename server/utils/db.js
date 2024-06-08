const mongoose = require("mongoose");

const URI = "mongodb+srv://23010101661:yagnik123@yagnik.sc2rkml.mongodb.net/Accounts?retryWrites=true&w=majority";

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("connection successful to DB");
    } catch (error) {
        console.error("database connection fail");
        process.exit(0);
    }
};

module.exports = connectDb;