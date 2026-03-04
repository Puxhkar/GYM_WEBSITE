import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import './FAQSection.scss';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FAQSection = () => {
    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "How long does it take to see results?",
            answer: "Most members start noticing visible changes within 4–6 weeks depending on consistency and program intensity."
        },
        {
            question: "Do you offer personal training?",
            answer: "Yes, certified trainers provide customized one-on-one sessions tailored to your fitness goals."
        },
        {
            question: "Is there a free trial available?",
            answer: "Yes, we offer a complimentary trial session so you can experience our environment and training style."
        },
        {
            question: "What are the membership options?",
            answer: "Flexible monthly, quarterly, and annual plans are available."
        },
        {
            question: "Do you provide diet guidance?",
            answer: "Yes, nutrition consultation is included with selected membership plans."
        }
    ];

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 75%',
            }
        });

        tl.fromTo('.faq-header h2, .faq-header p, .faq-header .info-box',
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        )
            .fromTo('.faq-item',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
                "-=0.4"
            );
    }, { scope: containerRef });

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq-section" ref={containerRef}>
            <div className="container faq-container">
                <div className="faq-header">
                    <h2>Common Questions</h2>
                    <p className="subtitle">Everything you need to know before joining our elite facility.</p>

                    <div className="faq-info-boxes">
                        <div className="info-box">
                            <div className="info-icon"><FaEnvelope /></div>
                            <div className="info-text">
                                <h4>Any other questions?</h4>
                                <p>We're here to help. Reach out to our dedicated support team anytime to clarify your doubts.</p>
                                <span>support@mygym.com</span>
                            </div>
                        </div>
                        <div className="info-box">
                            <div className="info-icon"><FaPhoneAlt /></div>
                            <div className="info-text">
                                <h4>Talk to an expert</h4>
                                <p>Need personalized advice about which membership tier is right for you? Give us a call.</p>
                                <span>+1 (555) 123-4567</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                            <button className="faq-question" onClick={() => toggleAccordion(index)}>
                                <span>{faq.question}</span>
                                <span className="icon">
                                    {activeIndex === index ? <HiMinus /> : <HiPlus />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        className="faq-answer"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="faq-answer-content">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
