import { Link } from "react-router-dom";
import "./css/Home.css"
import {useAuth} from '../store/auth';

function Home(){
    const {user} = useAuth();
    return (<div className="homepage">
        <header className="header">
            <h3>Hello, {user.username}</h3>
            <h1>Welcome to QuizMaster</h1>
            <p>Your ultimate destination for fun and challenging quizzes!</p>
            {/* <Link to="/quizzes" className="start-btn">Start Quiz</Link> */}
            <div className="dropdown">
                <Link className="start-btn dropdown-toggle" role="button" data-bs-toggle="dropdown">
                    Start Quiz
                </Link>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/quiz/java">Java</Link></li>
                    <li><Link className="dropdown-item" to="/quiz/ds">Data Structure</Link></li>
                    <li><Link className="dropdown-item" to="/quiz/python">Python</Link></li>
                </ul>
            </div>
        </header>
        <section className="features">
            <div className="feature">
                <h2>Wide Variety of Quizzes</h2>
                <p>Choose from a range of topics and difficulty levels.</p>
            </div>
            <div className="feature">
                <h2>Track Your Progress</h2>
                <p>Monitor your scores and improve over time.</p>
            </div>
            <div className="feature">
                <h2>Compete with Friends</h2>
                <p>Challenge your friends and see who tops the leaderboard.</p>
            </div>
        </section>
    </div>)
}

export default Home;