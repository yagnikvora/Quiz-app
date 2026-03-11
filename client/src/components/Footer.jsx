
import './css/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-container px-3">
            <div className="footer-content">
                <div className="footer-left">
                    <h3>QuizMaster</h3>
                    <p>A platform for interactive learning</p>
                    <p>Copyrights &copy;2025</p>
                </div>
                <div className="footer-right">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
