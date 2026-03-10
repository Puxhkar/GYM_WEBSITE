import React from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaCheckCircle } from 'react-icons/fa';
import { gymData } from '../data/gymData';

const TrainerSection = () => {
    const { title, subtitle, bio, image } = gymData.trainer;

    return (
        <section id="trainers" className="py-24 bg-[#030712] relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute -left-40 top-40 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-yellow-400 font-semibold tracking-wider uppercase text-sm mb-4 block"
                    >
                        Learn From The Best
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg max-w-2xl mx-auto"
                    >
                        {subtitle}
                    </motion.p>
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Video / Image Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50, rotateY: 15 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                        className="flex-1 w-full max-w-lg mx-auto lg:max-w-none perspective-1000"
                    >
                        <div className="relative rounded-3xl overflow-hidden group border border-white/10 aspect-[4/5] bg-gradient-to-b from-white/5 to-transparent p-2">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                <img
                                    src={image}
                                    alt="Trainer"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <button className="w-20 h-20 bg-yellow-500/90 text-white rounded-full flex items-center justify-center pl-2 shadow-[0_0_30px_rgba(234,179,8,0.6)] group-hover:scale-110 group-hover:bg-yellow-400 transition-all duration-300">
                                        <FaPlay className="w-8 h-8" />
                                    </button>
                                    <span className="text-white font-medium mt-6 tracking-wide drop-shadow-md bg-black/30 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10">
                                        Watch Introduction
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Trainer Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 w-full"
                    >
                        <h3 className="text-3xl font-bold text-white mb-8">Expert Guidance</h3>

                        <div className="relative mb-12">
                            <span className="absolute -top-6 -left-4 text-7xl text-yellow-500/20 font-serif">"</span>
                            <p className="text-xl md:text-2xl font-serif text-gray-300 italic leading-relaxed relative z-10 pl-6 border-l-2 border-yellow-500/30">
                                {bio.quote}
                            </p>
                        </div>

                        <ul className="space-y-6">
                            {bio.highlights.map((highlight, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + (index * 0.1) }}
                                    className="flex items-start gap-4"
                                >
                                    <FaCheckCircle className="text-yellow-400 w-6 h-6 shrink-0 mt-1 shadow-[0_0_10px_rgba(234,179,8,0.5)] rounded-full" />
                                    <span className="text-gray-300 text-lg">{highlight}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="mt-12">
                            <a href="#services" className="inline-block border border-yellow-500/50 hover:bg-yellow-500/10 text-yellow-400 font-bold py-3 px-8 rounded-full transition-colors duration-300">
                                View Training Programs
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TrainerSection;
