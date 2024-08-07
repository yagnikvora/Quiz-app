const express = require("express");
const router = express.Router();
const quizControllers = require('../controllers/quiz-controller')

router.route("/select/:sub/:no").get(quizControllers.quiz);
router.route("/:sub/:id").get(quizControllers.getByIdQuiz);
router.route("/:sub").get(quizControllers.getAllQuiz);
router.route("/:sub/:id").delete(quizControllers.deleteQuizById);
router.route("/:sub/:id").put(quizControllers.updateQuizById);
router.route("/:sub").post(quizControllers.insertQuiz);


module.exports = router;