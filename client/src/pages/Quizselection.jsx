import { useState } from 'react';
import './css/Quiz.css';

const Quizselection = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "Berlin", "London", "Madrid"],
            correctAnswer: "Paris"
        },
    ];

    const nextQuestion = () => {
        setCurrentQuestion(currentQuestion + 1);
    };

    const prevQuestion = () => {
        setCurrentQuestion(currentQuestion - 1);
    };

    return (
        <div className="quiz-container">
            {/* Display question */}
            <h2>{questions[currentQuestion].question}</h2>

            {/* Display options */}
            <div className="options">
                {questions[currentQuestion].options.map((option, index) => (
                    <div key={index} className="option">{option}</div>
                ))}
            </div>

            {/* Navigation arrows */}
            <div className="navigation">
                {currentQuestion > 0 && <button onClick={prevQuestion}>Previous</button>}
                {currentQuestion < questions.length - 1 && <button onClick={nextQuestion}>Next</button>}
            </div>
        </div>
    );
};

export default Quizselection;
