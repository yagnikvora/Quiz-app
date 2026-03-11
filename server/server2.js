
const express = require("express");
const cors = require('cors');
const quizRoute = require('./routes/quiz-route');
const mongoose = require('mongoose');   
// const corsOptions = {
//     origin: "http://localhost:5174/",
//     methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
//     credentials: true,
// };
const app = express();
const URI = "mongodb+srv://23010101661:Vyr%402956@yagnik.sc2rkml.mongodb.net/Quiz?retryWrites=true&w=majority";
// app.use(cors());
// Enable CORS for specific origin
app.use(cors({ 
    origin: 'http://localhost:5173', // Frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  }));app.options('*', cors());
app.use(express.json());
app.options('*', cors()); // Handle preflight requests

app.use("/quiz", quizRoute);


const PORT = 5001;

mongoose.connect(URI).then(() => {
    app.listen(PORT, () => {
        console.log(`Quiz server is running at port: ${PORT}`);
    });
});