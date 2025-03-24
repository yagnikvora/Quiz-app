
const express = require("express");
const cors = require('cors')
const authRoute = require("./routes/auth-route");
const adminRoute = require('./routes/admin-route');
const contactRoute = require("./routes/contact-route");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

// const corsOptions = {
    //     origin: "http://localhost:5174/",
    //     methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    //     credentials: true,
    // };
    
const app = express();
// app.use(cors());
// Enable CORS for specific origin
app.use(cors({ 
    origin: 'http://localhost:5173', // Frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  }));app.options('*', cors());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/admin", adminRoute);

app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`User server is running at port: ${PORT}`);
    });
});