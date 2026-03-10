import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';
import { FaGift } from 'react-icons/fa';

const GiftSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', goal: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleOpen = () => setIsModalOpen(true);
    const handleClose = () => {
        setIsModalOpen(false);
        setTimeout(() => setIsSubmitted(false), 500); // reset after animation
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => setIsSubmitted(true), 800);
    };

    return (
        <section id="gift" className="py-24 bg-[#0B0F19] relative">
            <div className="container mx-auto px-6">

                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-yellow-600 via-amber-700 to-orange-800 p-1 md:p-2 shadow-[0_0_50px_rgba(245,158,11,0.3)]"
                >
                    <div className="bg-[#0B0F19]/60 backdrop-blur-xl rounded-[1.3rem] md:rounded-[1.4rem] p-10 md:p-16 text-center border border-white/10 relative overflow-hidden">

                        {/* Interactive floating elements inside banner */}
                        <div className="absolute top-0 right-0 p-8 opacity-20 hidden md:block">
                            <FaGift className="w-64 h-64 text-yellow-400 rotate-12" />
                        </div>

                        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 text-white mb-6 shadow-xl">
                                <FaGift className="w-8 h-8" />
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                                Start With A <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300">Gift</span>
                            </h2>
                            <p className="text-xl text-gray-200 mb-4 font-medium">Claim your Free 3-Day Pass & Expert Consultation.</p>
                            <p className="text-yellow-400 text-sm font-bold uppercase tracking-widest mb-10">Limited time offer for new members</p>

                            <button
                                onClick={handleOpen}
                                className="bg-white text-amber-900 hover:bg-gray-100 font-black text-lg py-4 px-12 rounded-full shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.4)] hover:-translate-y-1 transition-all duration-300"
                            >
                                Get My Coupon
                            </button>
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {isModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                        onClick={handleClose}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-[#1A1F2B] border border-white/10 rounded-3xl p-8 md:p-10 w-full max-w-lg relative shadow-2xl overflow-hidden"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={handleClose}
                                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full p-2"
                            >
                                <HiX className="w-6 h-6" />
                            </button>

                            {!isSubmitted ? (
                                <>
                                    <div className="mb-8">
                                        <h3 className="text-3xl font-bold text-white mb-2">Claim Free Pass</h3>
                                        <p className="text-gray-400">Enter your details to receive your 3-day access code.</p>
                                    </div>
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div>
                                            <input
                                                type="text" name="name" required onChange={handleChange}
                                                placeholder="Full Name"
                                                className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="email" name="email" required onChange={handleChange}
                                                placeholder="Email Address"
                                                className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                type="tel" name="phone" required onChange={handleChange}
                                                placeholder="Phone Number"
                                                className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                                            />
                                        </div>
                                        <div>
                                            <select
                                                name="goal" required onChange={handleChange}
                                                className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-5 py-4 text-gray-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition-all"
                                            >
                                                <option value="">Select Primary Goal...</option>
                                                <option value="weight_loss">Weight Loss</option>
                                                <option value="muscle_gain">Muscle Gain</option>
                                                <option value="endurance">Endurance & Cardio</option>
                                                <option value="flexibility">Flexibility & Mobilty</option>
                                            </select>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-gradient-to-r from-yellow-500 to-amber-500 text-white font-bold py-4 rounded-xl mt-4 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all"
                                        >
                                            Send My Coupon
                                        </button>
                                    </form>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-10"
                                >
                                    <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">You're In!</h3>
                                    <p className="text-gray-400 mb-8 max-w-sm mx-auto">Your exclusive 3-day pass has been sent to your email. Check your inbox to get started.</p>
                                    <button
                                        onClick={handleClose}
                                        className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-10 rounded-full transition-colors"
                                    >
                                        Close
                                    </button>
                                </motion.div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default GiftSection;
