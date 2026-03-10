import React from 'react';
import { motion } from 'framer-motion';
import { gymData } from '../data/gymData';


const Hero = () => {
    const { title, subtitle, ctaPrimary, ctaSecondary, backgroundImage } = gymData.hero;

    return (
        <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image with Parallax effect */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${backgroundImage}')` }}
                />
                <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-gray-900 to-transparent" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center mt-20">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-semibold tracking-wider mb-6">
                        PREMIUM FITNESS EXPERIENCE
                    </span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ whiteSpace: 'pre-line' }}
                >
                    {title}
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    {subtitle}
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <a href="#book-trial" className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,229,255,0.4)]">
                        {ctaPrimary}
                    </a>
                    <a href="#testimonials" className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all">
                        {ctaSecondary}
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <motion.div
                        className="w-1.5 h-2 bg-cyan-400 rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    />
                </div>
                <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
