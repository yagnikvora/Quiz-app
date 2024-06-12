
const express = require("express");
const cors = require('cors');
const quizRoute = require('./routes/quiz-route');
const mongoose = require('mongoose');   
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};
const app = express();
const URI = "mongodb+srv://23010101661:yagnik123@yagnik.sc2rkml.mongodb.net/Quiz?retryWrites=true&w=majority";

app.use(cors(corsOptions));
app.use(express.json());

app.use("/quiz", quizRoute);


const PORT = 5001;

mongoose.connect(URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Quiz server is running at port: ${PORT}`);
    });
});