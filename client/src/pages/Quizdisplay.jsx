import { useRef, useState } from "react";
import {useNavigate} from 'react-router-dom'
import "./css/Quizdisplay.css"
const Quizdisplay = () => {
    const data = [
        {
            "question": "What is the time complexity of inserting an element in a stack?",
            "option1": "O(1)",
            "option2": "O(log n)",
            "option3": "O(n)",
            "option4": "O(n log n)",
            "correctOption": 1
        },
        {
            "question": "Which data structure follows the Last In First Out (LIFO) principle?",
            "option1": "Queue",
            "option2": "Stack",
            "option3": "Heap",
            "option4": "Linked List",
            "correctOption": 2
        },
        {
            "question": "What is the time complexity of inserting an element at the beginning of an array?",
            "option1": "O(1)",
            "option2": "O(log n)",
            "option3": "O(n)",
            "option4": "O(n log n)",
            "correctOption": 3
        },
        {
            "question": "Which data structure is used in Depth First Search (DFS) algorithm?",
            "option1": "Stack",
            "option2": "Queue",
            "option3": "Heap",
            "option4": "Linked List",
            "correctOption": 1
        },
        {
            "question": "What is the time complexity of binary search in an array?",
            "option1": "O(1)",
            "option2": "O(log n)",
            "option3": "O(n)",
            "option4": "O(n log n)",
            "correctOption": 2
        }];

    const navigate = useNavigate()

    let [index, setindex] = useState(0);
    let [score,setScore] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [lock, setLock] = useState(false);
    const [result, setResult] = useState(false);
    let option1 = useRef(null);
    let option2 = useRef(null);
    let option3 = useRef(null);
    let option4 = useRef(null);

    let options_array = [option1, option2, option3, option4];

    const check_answer = (e, ans) => {
        if (!lock) {
            if (question.correctOption == ans) {
                e.target.classList.add("correct");
                setLock(true);
                setScore(++score);
            }
            else {
                e.target.classList.add("wrong");
                setLock(true);
                options_array[question.correctOption - 1].current.classList.add('correct');
            }
        }
    }

    const nextQuestion = () => {
        if (lock) {
            if (index === data.length - 1) {
                setResult(true);
                return 0;
            }
            setindex(++index);
            setQuestion(data[index]);
            setLock(false);
            options_array.map((op) => {
                op.current.classList.remove('correct');
                op.current.classList.remove('wrong');
                return null;
            })

        }
    }

    const resetQuiz = ()=>{
        navigate("/quiz-selection")
    }

    return (
        <div className="container">
            <h1>Subject Quiz</h1>
            <hr />
            {result ? <>
                <h2>Your Score is {score} from {data.length}</h2>
                <button onClick={resetQuiz}>Reset</button>
            </> : 
            <><h2>{index + 1}. {question.question}</h2>
                <ul>
                    <li ref={option1} onClick={(e) => { check_answer(e, 1) }}>{question.option1}</li>
                    <li ref={option2} onClick={(e) => { check_answer(e, 2) }}>{question.option2}</li>
                    <li ref={option3} onClick={(e) => { check_answer(e, 3) }}>{question.option3}</li>
                    <li ref={option4} onClick={(e) => { check_answer(e, 4) }}>{question.option4}</li>
                </ul>
                <button onClick={nextQuestion}>Next</button>
                <div className="index">1 of {data.length} Question</div></>}
            
        </div>
    )
}
export default Quizdisplay;