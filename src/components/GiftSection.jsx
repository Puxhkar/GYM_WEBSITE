import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiX } from 'react-icons/hi';
import './GiftSection.scss';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const GiftSection = () => {
    const sectionRef = useRef(null);
    const cardRef = useRef(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        goal: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    useGSAP(() => {
        gsap.from(cardRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    }, { scope: sectionRef });

    const handleOpen = () => setIsModalOpen(true);
    const handleClose = () => {
        setIsModalOpen(false);
        setIsSubmitted(false);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            setIsSubmitted(true);
        }, 1000);
    };

    return (
        <section id="gift" className="gift-section" ref={sectionRef}>
            <div className="container">
                <div className="gift-card pastel-gradient" ref={cardRef}>
                    <div className="gift-content">
                        <h2>🎁 Start With a Gift</h2>
                        <p>Claim your <strong>Free 3-Day Pass</strong> & Consultation.</p>
                        <p className="small-text">Limited time offer for new members.</p>
                        <button className="btn btn-primary" onClick={handleOpen}>Get My Coupon</button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                    >
                        <motion.div
                            className="modal-content"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            <button className="modal-close" onClick={handleClose}><HiX /></button>

                            {!isSubmitted ? (
                                <>
                                    <div className="modal-header">
                                        <h3>Claim Your Free Pass</h3>
                                        <p>Enter your details to receive your 3-day access code.</p>
                                    </div>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input type="text" name="name" required onChange={handleChange} placeholder="John Doe" />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input type="email" name="email" required onChange={handleChange} placeholder="john@example.com" />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input type="tel" name="phone" required onChange={handleChange} placeholder="(555) 123-4567" />
                                        </div>
                                        <div className="form-group">
                                            <label>Fitness Goal</label>
                                            <select name="goal" onChange={handleChange}>
                                                <option value="">Select a goal...</option>
                                                <option value="weight_loss">Weight Loss</option>
                                                <option value="muscle_gain">Muscle Gain</option>
                                                <option value="endurance">Endurance</option>
                                                <option value="flexibility">Flexibility</option>
                                            </select>
                                        </div>
                                        <button type="submit" className="btn btn-submit">Send Coupon</button>
                                    </form>
                                </>
                            ) : (
                                <div className="success-message text-center">
                                    <h3>🎉 You're In!</h3>
                                    <p>Check your email for your coupon code.</p>
                                    <button className="btn btn-primary" onClick={handleClose}>Close</button>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GiftSection;
