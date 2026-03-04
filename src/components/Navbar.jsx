import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import './Navbar.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Variants for mobile menu animation
    const menuVariants = {
        hidden: {
            opacity: 0,
            clipPath: "circle(0% at 100% 0%)"
        },
        visible: {
            opacity: 1,
            clipPath: "circle(150% at 100% 0%)",
            transition: {
                type: "spring",
                stiffness: 40,
                damping: 40
            }
        },
        exit: {
            opacity: 0,
            clipPath: "circle(0% at 100% 0%)",
            transition: {
                type: "spring",
                stiffness: 40,
                damping: 40,
                delay: 0.2
            }
        }
    };

    const linkVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const navLinks = [
        { name: 'Home', to: '#home' },
        { name: 'Trainers', to: '#trainers' },
        { name: 'Features', to: '#features' },
        { name: 'Stories', to: '#testimonials' },
        { name: 'FAQ', to: '#faq' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <a href="#home" className="logo">
                    MY<span>GYM</span>
                </a>

                {/* Desktop Menu */}
                <ul className="nav-menu">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.to}>{link.name}</a>
                        </li>
                    ))}
                    <li>
                        <a href="#book-trial" className="btn btn-primary">Book Free Trial</a>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" onClick={toggleMenu}>
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {navLinks.map((link, index) => (
                            <motion.li
                                key={link.name}
                                variants={linkVariants}
                                transition={{ delay: 0.1 + index * 0.1 }}
                            >
                                <a href={link.to} onClick={toggleMenu}>{link.name}</a>
                            </motion.li>
                        ))}
                        <motion.li
                            variants={linkVariants}
                            transition={{ delay: 0.6 }}
                            className="mobile-cta"
                        >
                            <a href="#book-trial" className="btn btn-primary" onClick={toggleMenu}>Book Free Trial</a>
                        </motion.li>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
