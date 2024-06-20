import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth"
import "../css/Adminquiz.css"
import { Link } from "react-router-dom";

const Demo = () => {
    const { fetchData } = useAuth();

    const [subject, setSubject] = useState("java");
    const [quiz, setQuiz] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchData(subject)
            .then(res => {
                setQuiz(res);
                setLoading(false);
            });
    }, [subject]);

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 10;
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const records = quiz.slice(indexOfFirstRecord, indexOfLastRecord);

    const npages = Math.ceil(quiz.length / recordsPerPage);
    const numbers = [...Array(npages + 1).keys()].slice(1);

    const nextPage = () => {
        if (currentPage !== npages) {
            setCurrentPage(currentPage + 1);
        }
    }
    const prePage = () => {
        if(currentPage !== 1){
            setCurrentPage(currentPage - 1);
        }

    }
    const changeCurrentPage = (number) => {
        setCurrentPage(number);
    }


    if (loading) {
        return <h1 className="text-center">Loading...</h1>
    } else {
        return (
            <>
                < div className="container" >
                    <h1 className="text-center ">Edit Quiz</h1>
                    <h2 className="text-center m-0">Select Subject</h2>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="radio">
                            <input className="radio_input" type="radio" name="language" value="java" id="java" onClick={(e) => { setSubject(e.target.value); setCurrentPage(1) }} defaultChecked />
                            <label className="radio_label" htmlFor="java">Java</label>
                            <input className="radio_input" type="radio" value="python" name="language" id="python" onClick={(e) => { setSubject(e.target.value); setCurrentPage(1) }} />
                            <label className="radio_label" htmlFor="python">Python</label>
                            <input className="radio_input" type="radio" value="ds" name="language" id="ds" onClick={(e) => { setSubject(e.target.value); setCurrentPage(1) }} />
                            <label className="radio_label" htmlFor="ds">Data Structure</label>
                        </div>
                    </div>
                    <div className="text-center">
                        <Link className="btn btn-info mb-5">Add Quiz</Link>
                        {records.map((q, index) => {
                            return (
                                <>
                                    <div key={index}>
                                        <h3> {q.question}</h3>
                                        <ul>
                                            <li> 1:  {q.option1}</li>
                                            <li> 2:  {q.option2}</li>
                                            <li> 3:  {q.option3}</li>
                                            <li> 4:  {q.option4}</li>
                                        </ul>
                                        <p className="fw-bold h5">Correct option: {q.correctOption}</p>
                                        <Link className="btn btn-danger mx-3 ms-0">Delete</Link>
                                        <Link className="btn btn-warning">Edit</Link>

                                        <hr />
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <nav>
                        <ul className="pagination">
                            <li className="page-item m-1">
                                <a href="#" className="page-link" onClick={prePage}> Prev</a>
                            </li>
                            {
                                numbers.map((number, i) => {
                                    return (
                                        <li className={`page-item m-1 ${currentPage === number ? `active` : ``}`} key={i}>
                                            <a href="#" className="page-link" onClick={() => { changeCurrentPage(number) }}>{number}</a>
                                        </li>
                                    )
                                })
                            }
                            <li className="page-item m-1">
                                <a href="#" className="page-link" onClick={nextPage}> Next</a>
                            </li>
                        </ul>
                    </nav>
                   
                </div >
            </>
        )
    }
}
export default Demo;