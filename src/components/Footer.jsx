import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import './Footer.scss';
import { gymData } from '../data/gymData';

const Footer = () => {
    const { social } = gymData;
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
        }
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Brand Column */}
                    <div className="footer-brand">
                        <h3>MY<span>GYM</span></h3>
                        <p>Train with purpose. Transform with consistency. Join a community that pushes you forward.</p>
                        <div className="social-icons">
                            {social.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <a key={index} href={item.url} aria-label={item.platform}>
                                        <Icon />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div className="footer-links">
                        <h4>Explore</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#features">Programs</a></li>
                            <li><a href="#trainers">Coaches</a></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div className="footer-links">
                        <h4>Resources</h4>
                        <ul>
                            <li><a href="#testimonials">Success Stories</a></li>
                            <li><a href="#transformations">Transformations</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#book-trial">Book Trial</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="footer-newsletter">
                        <h4>Stay Motivated</h4>
                        <p>Get weekly tips, workout plans, and success stories straight to your inbox.</p>
                        {subscribed ? (
                            <div className="newsletter-success">
                                ✅ You're subscribed! Check your inbox.
                            </div>
                        ) : (
                            <form className="newsletter-form" onSubmit={handleSubscribe}>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    required
                                    aria-label="Email address for newsletter"
                                />
                                <button type="submit" className="btn btn-primary">Subscribe</button>
                            </form>
                        )}
                        <div className="footer-contact">
                            <p>📍 123 Fitness St, Wellness City</p>
                            <p>✉️ hello@mygym.com</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} My Gym. All rights reserved.</p>
                    <div className="legal-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
