import { Link, Navigate } from "react-router-dom";
import "./css/Home.css"
import { useAuth } from '../store/auth';

function Home() {
    const { user, isLoggedIn } = useAuth();
    if (!isLoggedIn) {
        return <Navigate to="/info" />;
    } else {
        return (
            <div className="homepage">
                <header className="header">
                    <h3>Hello, {user.username}</h3>
                    <h1>Welcome to QuizMaster</h1>
                    <p>Your ultimate destination for fun and challenging quizzes!</p>
                    <Link to="/quiz-selection" className="start-btn">Start Quiz</Link>
                
                        {/* <Link to="/quiz-selection">
                            Start Quiz
                        </Link>
                    </div> */}
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
            </div>
        )
    }
}

export default Home;