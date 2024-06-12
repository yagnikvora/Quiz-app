const express = require("express");
const router = express.Router();
const quizControllers = require('../controllers/quiz-controller')

router.route("/:sub/:no").get(quizControllers.quiz);

module.exports = router;