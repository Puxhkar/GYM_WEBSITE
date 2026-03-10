import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { cn } from '../lib/utils';

const navLinks = [
    { name: 'Home', to: '#home' },
    { name: 'Trainers', to: '#trainers' },
    { name: 'Features', to: '#features' },
    { name: 'Stories', to: '#testimonials' },
    { name: 'FAQ', to: '#faq' },
];

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

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // Prevent body scroll when menu is open
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

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

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex items-center h-20",
                    scrolled ? "bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20" : "bg-transparent"
                )}
            >
                <div className="container mx-auto px-6 flex justify-between items-center w-full">
                    {/* Logo */}
                    <a href="#home" className="text-2xl font-bold tracking-tight text-white z-50">
                        FitWith<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">Raj</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <ul className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.to}
                                        className="text-gray-300 hover:text-yellow-400 font-medium transition-colors duration-300 text-sm tracking-wide uppercase"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <a
                            href="#book-trial"
                            className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-white font-bold py-2.5 px-6 rounded-full shadow-[0_0_15px_rgba(234,179,8,0.4)] hover:shadow-[0_0_25px_rgba(234,179,8,0.6)] hover:scale-105 transition-all duration-300"
                        >
                            Book Free Trial
                        </a>
                    </div>

                    {/* Mobile Toggle Button */}
                    <button
                        className="md:hidden text-white z-50 p-2 focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <HiX className="w-7 h-7" /> : <HiMenuAlt3 className="w-7 h-7" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 z-40 bg-[#0B0F19] flex flex-col justify-center items-center h-screen"
                        variants={menuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <ul className="flex flex-col items-center gap-8 mb-10 w-full px-6">
                            {navLinks.map((link, index) => (
                                <motion.li
                                    key={link.name}
                                    variants={linkVariants}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                    className="w-full text-center"
                                >
                                    <a
                                        href={link.to}
                                        onClick={toggleMenu}
                                        className="block text-3xl font-bold text-gray-200 hover:text-yellow-400 transition-colors py-2"
                                    >
                                        {link.name}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                        <motion.div
                            variants={linkVariants}
                            transition={{ delay: 0.6 }}
                            className="w-full px-10 max-w-sm"
                        >
                            <a
                                href="#book-trial"
                                className="block w-full text-center bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-bold py-4 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)]"
                                onClick={toggleMenu}
                            >
                                Book Free Trial
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
