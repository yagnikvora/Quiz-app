import { useState } from 'react';
import './css/Quizselection.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

let data = [];
const Quizselection = () => {
    const [subject, setSubject] = useState('java');
    const [numQuestions, setNumQuestions] = useState(0);
    // const [data , setData] = useState([]);
    const navigate = useNavigate();

    let url = "http://localhost:5001/quiz/" + subject + "/" + numQuestions;

    if (subject === "data-structure") {
        setSubject("ds");
    }

    return (
        <div className="quiz-selection-container bg-dark">
            <form className="quiz-selection-form">
                <h2>Select Quiz</h2>
                <div className="form-group">
                    <label htmlFor="subject">Subject:</label>
                    <select
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    >
                        <option value="java">Java</option>
                        <option value="python">Python</option>
                        <option value="data-structure">Data Structure</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="numQuestions">Number of Questions:</label>
                    <input
                        type="number"
                        id="numQuestions"
                        value={numQuestions}
                        onChange={(e) => setNumQuestions(e.target.value)}
                    />
                </div>
                <button onClick={async (e) => {
                    e.preventDefault();
                    if (parseInt(numQuestions) > 30 || parseInt(numQuestions) <= 4) {
                        toast.warn("No of Quiestions must between 5 to 30");
                    } else {
                        await fetch(url)
                        .then(res => res.json())
                        .then(res=>{
                            data = res;
                            console.log(data);
                        });
                        navigate("/quiz/" + subject + "/" + numQuestions);
                    }
                }} className="btn button">Start Quiz</button>
            </form>
        </div>
    );
};

export { Quizselection };
export {data};
