const bcrypt = require("bcryptjs");
const { Java, Python, Ds } = require("../models/quiz-model");

const quiz = async (req, res) => {
    try {
        const subject = req.params.sub;
        const no = parseInt(req.params.no);
        let data;

        if (subject === "java")
            data = await Java.aggregate([{ $sample: { size: no } }]);
        else if (subject === "python")
            data = await Python.aggregate([{ $sample: { size: no } }]);
        else if (subject === "ds")
            data = await Ds.aggregate([{ $sample: { size: no } }]);
        else
            return res.status(404).json({ message: "subject not found" });

        if (!data)
            return res.status(400).json({ message: "No Questions found" });

        return res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getByIdQuiz = async(req,res) => {
    try {
        const subject = req.params.sub;
        const id = req.params.id;
        let data;
        if (subject === "java")
            data = await Java.findOne({ _id: id });
        else if (subject === "python")
            data = await Python.findOne({ _id: id });
        else if (subject === "ds")
            data = await Ds.findOne({ _id: id });
        else
        return res.status(404).json({ message: "subject not found" });
    
        if (!data)
            return res.status(400).json({ message: "No Questions found" });
        
        return res.status(201).json(data);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getAllQuiz = async (req,res)=>{
    try {
        const subject = req.params.sub;
        let data;

        if (subject === "java")
            data = await Java.find();
        else if (subject === "python")
            data = await Python.find();
        else if (subject === "ds")
            data = await Ds.find();
        else
            return res.status(404).json({ message: "subject not found" });

        if (!data)
            return res.status(400).json({ message: "No Questions found" });

        return res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteQuizById = async (req,res)=>{
    try {
        const subject = req.params.sub;
        const id = req.params.id;
        let data;

        if (subject === "java")
            data = await Java.deleteOne({_id : id});
        else if (subject === "python")
            data = await Python.deleteOne({_id : id});
        else if (subject === "ds")
            data = await Ds.deleteOne({_id : id});
        else
            return res.status(404).json({ message: "subject not found" });

        if (data.deletedCount == 0)
            return res.status(400).json({ message: "No Questions found" });

        return res.status(201).json({message: "Quiz Delete Successful" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateQuizById = async (req,res)=>{
    try {
        const subject = req.params.sub;
        const id = req.params.id;
        let data;
        let updateData = req.body;
        if (subject === "java")
            data = await Java.updateOne({_id : id}, updateData);
        else if (subject === "python")
            data = await Python.updateOne({_id : id}, updateData);
        else if (subject === "ds")
            data = await Ds.updateOne({_id : id}, updateData);
        else
        return res.status(404).json({ message: "subject not found" });
    
        if (!data)
            return res.status(400).json({ message: "No Questions found" });
        
        return res.status(201).json({message: "Quiz Update Successful" });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const insertQuiz = async (req, res) => {
    try {
        const subject = req.params.sub;
        const data = req.body;
        let result;

        if (subject === "java")
            result = await Java.create(data);
        else if (subject === "python")
            result = await Python.create(data);
        else if (subject === "ds")
            result = await Ds.create(data);
        else
            return res.status(404).json({ message: "subject not found" });
    
        if (!result){
            return res.status(400).json({ message: "Question not inserted" });
        }
        return res.status(201).json({message: "Quiz Insert Successful" });
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { quiz, getAllQuiz, deleteQuizById, updateQuizById, insertQuiz, getByIdQuiz };