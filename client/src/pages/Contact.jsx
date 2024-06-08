import { useState } from 'react';
import './css/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const [contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(contact);
    };

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <h1>Contact Us</h1>
                <p>We had love to hear from you! Reach out with any questions or feedback.</p>
            </section>

            <section className="contact-info">
                <div className="info-item">
                    <h2>Email</h2>
                    <p>support@quizmaster.com</p>
                </div>
                <div className="info-item">
                    <h2>Phone</h2>
                    <p>+1 (123) 456-7890</p>
                </div>
                <div className="info-item">
                    <h2>Address</h2>
                    <p>123 Quiz St, Knowledge City, World</p>
                </div>
            </section>

            <section className="contact-form-section">
                <h2>Send Us a Message</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={contact.name}
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={contact.email}
                            onChange={handleInput}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={contact.message}
                            onChange={handleInput}
                            required
                        ></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>

            </section>

            <section className="social-media">
                <h2>Follow Us</h2>
                <div className="social-links">
                    <a href="https://www.facebook.com/" className="social-link" target='blank'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://x.com/?lang=en" className="social-link" target='blank'>
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a href="https://www.instagram.com/" className="social-link" target='blank'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://in.linkedin.com/" className="social-link" target='blank'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Contact;
