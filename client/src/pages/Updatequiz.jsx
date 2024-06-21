import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Updatequiz = () => {
    const navigate = useNavigate();
    // eslint-disable-next-line no-unused-vars
    const { sub, id } = useParams();
    const [data, setData] = useState({});
    useEffect(() => {
        if (id) {
            fetch(`http://localhost:5001/quiz/${sub}/${id}`)
                .then(res => res.json()).then(res => setData(res));
        }
    }, []);
    return (<>
        <div className="m-5" >
            <div className="row form-group">
                <label className="col-1 pt-2 d-inline">Question : </label>
                <input type="text" className="col form-input d-inline" value={data.question} onChange={(e) => {
                    setData({ ...data, question: e.target.value });
                }} />
            </div>
            <div className="row form-group">
                <label className="col-1 pt-2 d-inline">Option1 : </label>
                <input type="text" className="col form-input d-inline" value={data.option1} onChange={(e) => {
                    setData({ ...data, option1: e.target.value });
                }} />
            </div>
            <div className="row form-group">
                <label className="col-1 pt-2 d-inline">Option2 : </label>
                <input type="text" className="col form-input d-inline" value={data.option2} onChange={(e) => {
                    setData({ ...data, option2: e.target.value });
                }} />
            </div>
            <div className="row form-group">
                <label className="col-1 pt-2 d-inline">Option3 : </label>
                <input type="text" className="col form-input d-inline" value={data.option3} onChange={(e) => {
                    setData({ ...data, option3: e.target.value });
                }} />
            </div>
            <div className="row form-group">
                <label className="col-1 pt-2 d-inline">Option4 : </label>
                <input type="text" className="col form-input d-inline" value={data.option4} onChange={(e) => {
                    setData({ ...data, option4: e.target.value });
                }} />
            </div>
            <div className="row form-group">
                <label className="col-2 pt-2 d-inline">correctOption : </label>
                <input type="text" className="col form-input d-inline" value={data.correctOption} onChange={(e) => {
                    setData({ ...data, correctOption: e.target.value });
                }} />
            </div>
            <div>
                <div><button className={id ? "btn btn-warning px-5" : "btn btn-success px-5"} onClick={() => {
                    if (id) {
                        fetch(`http://localhost:5001/quiz/${sub}/${id}`, {
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json"
                            },
                            method: "PUT"
                        }).then(() => { toast.success("Quiz Updated Successfully"); navigate("/admin/quiz") });
                    } else {
                        fetch(`http://localhost:5001/quiz/${sub}`, {
                            body: JSON.stringify(data),
                            headers: {
                                "Content-Type": "application/json"
                            },
                            method: "POST"
                        }).then(() => { toast.success("Quiz Inserted Successfully"); navigate("/admin/quiz") });
                    }
                }}>
                    {id && "Edit"}
                    {!(id) && "Add"}
                </button></div>
            </div>
        </div>
    </>)
}

export default Updatequiz;