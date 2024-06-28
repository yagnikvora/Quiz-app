import { useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import './css/Quiz.css';
import { data } from "./Quizselection";
import { toast } from "react-toastify";
export const Quiz = () => {

    const params = useParams();
    let subject = "";
    if (params.sub === "ds")
        subject = "data-structure";
    else
        subject = params.sub;

    const navigate = useNavigate();
    let [index, setIndex] = useState(0);
    let [score, setScore] = useState(0);
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
            setIndex(++index);
            setQuestion(data[index]);
            setLock(false);
            options_array.map((op) => {
                op.current.classList.remove('correct');
                op.current.classList.remove('wrong');
                return null;
            })
        }
        else{
            toast.warn("Plese select any one option");
        }
    }
    if(data.length > 0){
        return (
            < div className="container" >
                <h1>{subject.charAt(0).toUpperCase() + subject.slice(1)} Quiz</h1>
                <hr />
                {
                    result ? <>
                        <h2>Your Score is {score} from {data.length}</h2>
                        <button onClick={() => {
                            navigate("/quiz-selection");
                        }}>Reset</button>
                    </> :
                        <><h2>{index + 1}. {question.question}</h2>
                            <ul>
                                <li ref={option1} onClick={(e) => { check_answer(e, 1) }}>{question.option1}</li>
                                <li ref={option2} onClick={(e) => { check_answer(e, 2) }}>{question.option2}</li>
                                <li ref={option3} onClick={(e) => { check_answer(e, 3) }}>{question.option3}</li>
                                <li ref={option4} onClick={(e) => { check_answer(e, 4) }}>{question.option4}</li>
                            </ul>
                            <button onClick={nextQuestion}>Next</button>
                            <div className="index">{index + 1} of {data.length} Question</div></>
                }
            </div >
        )
    }else{
        return <Navigate to="/quiz-selection" />
    }

    
}