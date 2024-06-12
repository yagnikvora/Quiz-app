const bcrypt = require("bcryptjs");
const {Java , Python , Ds} = require("../models/quiz-model");

const quiz = async (req, res) => {
    try {
        
        const subject = req.params.sub;
        const no = parseInt(req.params.no);
        let data = [];

        if(subject === "java"){
            data = await Java.aggregate([{ $sample: { size: no }}]);
        }else if(subject === "python"){
            data = await Python.aggregate([{ $sample: { size: no }}]);
        }else if(subject === "ds"){
            data = await Ds.aggregate([{ $sample: { size: no } }]);
        }else{
            res.status(404).json({ message: "subject not found" });
        }

        if (!data) {
            return res.status(400).json({ message: "No Questions found" });
        }

        return res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


module.exports = { quiz };