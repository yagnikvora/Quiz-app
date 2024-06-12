const { Schema, model } = require("mongoose");
const quizSchema = new Schema({
    question:String,
    option1:String,
    option2:String,
    option3:String,
    option4:String,
    correctOption:Number
}, { versionKey: false });
const Java = new model("java", quizSchema);
const Python = new model("python", quizSchema);
const Ds = new model("ds", quizSchema);
module.exports = {Java,Python,Ds}; 