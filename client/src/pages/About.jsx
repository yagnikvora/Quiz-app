import './css/About.css';

const About = () => {
    return (
        <div className="about-page">
            <section className="hero">
                <h1>About QuizMaster</h1>
                <p>Discover our mission, values, and the team behind QuizMaster.</p>
            </section>

            <section className="mission">
                <h2>Our Mission</h2>
                <p>
                    At QuizMaster, our mission is to provide a fun and engaging platform where users can test their knowledge and learn new things every day. We believe in the power of education and entertainment combined to foster a love for learning.
                </p>
            </section>

            <section className="values">
                <h2>Our Values</h2>
                <ul>
                    <li><strong>Quality:</strong> We strive to provide high-quality content that is both informative and entertaining.</li>
                    <li><strong>Integrity:</strong> We maintain the highest standards of integrity in all our actions.</li>
                    <li><strong>Community:</strong> We build a strong community of quiz enthusiasts who love to learn and share knowledge.</li>
                    <li><strong>Innovation:</strong> We are committed to innovation and continuously improving our platform.</li>
                </ul>
            </section>

            <section className="team">
                <h2>Meet the Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/483.jpg" alt="Team Member" />
                        <h3>John Doe</h3>
                        <p>Founder & CEO</p>
                    </div>
                    <div className="team-member">
                        <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/589.jpg" alt="Team Member" />
                        <h3>Jane Smith</h3>
                        <p>Chief Officer</p>
                    </div>
                    <div className="team-member">
                        <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/489.jpg" alt="Team Member" />
                        <h3>Sam Wilson</h3>
                        <p>Lead Developer</p>
                    </div>
                    <div className="team-member">
                        <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/490.jpg" alt="Team Member" />
                        <h3>Emily Johnson</h3>
                        <p>Marketing Manager</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
