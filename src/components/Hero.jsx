import React from 'react';
import { motion } from 'framer-motion';
import { gymData } from '../data/gymData';

// 21st.dev inspired Background Elements
const GlowingStars = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Spotlight Gradient Top */}
            <div className="absolute -top-[40%] left-1/2 -translate-x-1/2 w-[80%] h-[80%] bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.15)_0%,transparent_70%)] blur-[100px]" />

            {/* Spotlight Gradient Bottom Left */}
            <div className="absolute top-[60%] -left-[20%] w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.1)_0%,transparent_70%)] blur-[120px]" />

            {/* Simulated particles/stars in the background */}
            {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-500 rounded-full"
                    style={{
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        filter: 'blur(1px)'
                    }}
                    animate={{
                        opacity: [0.2, 1, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        ease: "linear",
                        delay: Math.random() * 2
                    }}
                />
            ))}

            {/* Animated Grid / Scanning Line effect */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CgkJPGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDIwNCgwLDAuMikiLz4KCTwvc3ZnPg==')] opacity-20" />
            <motion.div
                className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"
                animate={{ top: ['0%', '100%'], opacity: [0, 1, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            />
        </div>
    );
};

const Hero = () => {
    const { title, subtitle, ctaPrimary, ctaSecondary } = gymData.hero;

    return (
        <section id="home" className="relative h-screen w-full flex items-center justify-center bg-[#050505]">
            <GlowingStars />

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 mt-24">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Left: Text Content (Spotlight Focus) */}
                    <div className="flex-1 w-full text-center md:text-left">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="inline-block py-1.5 px-4 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                                Elite Experience
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-8xl font-black text-white tracking-tighter mb-6 leading-[1.1]"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            style={{ whiteSpace: 'pre-line' }}
                        >
                            {/* Animated Gradient Text inspired by 21st.dev */}
                            Train with <span className="text-transparent bg-clip-text bg-[linear-gradient(110deg,#FBBF24,45%,#ffffff,55%,#FBBF24)] bg-[length:200%_100%] animate-gradient">purpose</span>.
                            <br />
                            <span className="text-gray-400">Transform with</span> consistency.
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed font-medium"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            {subtitle}
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start"
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            <a href="#book-trial" className="px-8 py-4 rounded-xl bg-yellow-500 text-black font-black text-lg hover:bg-yellow-400 transition-all shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:shadow-[0_0_40px_rgba(250,204,21,0.6)] hover:-translate-y-1 relative overflow-hidden group">
                                <span className="relative z-10">{ctaPrimary}</span>
                                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-shimmer" />
                            </a>
                            <a href="#testimonials" className="px-8 py-4 rounded-xl bg-[#111111] border border-white/10 text-white font-bold text-lg hover:bg-white/5 hover:border-yellow-500/50 transition-all">
                                {ctaSecondary}
                            </a>
                        </motion.div>
                    </div>

                    {/* Right: Visual Element (Bento Card Style Image) */}
                    <motion.div
                        className="flex-1 w-full hidden md:block"
                        initial={{ opacity: 0, x: 50, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 40 }}
                    >
                        <div className="relative rounded-[2rem] overflow-hidden p-1 bg-gradient-to-b from-yellow-500/30 to-transparent shadow-[0_0_50px_rgba(245,158,11,0.1)] rotate-3 hover:rotate-0 transition-transform duration-700">
                            <div className="relative w-full aspect-[4/5] rounded-[1.8rem] overflow-hidden bg-[#111111]">
                                <img
                                    src="/gym_content/premium_gym_interior_1773166962229.png"
                                    alt="Elite Gym Interior"
                                    className="w-full h-full object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                                />
                                {/* Bottom Inner Shadow */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

                                {/* Floating Overlay Card */}
                                <div className="absolute bottom-6 left-6 right-6 bg-[#111111]/80 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-black text-xl">
                                        +500
                                    </div>
                                    <div>
                                        <p className="text-white font-bold leading-tight">Elite Members</p>
                                        <p className="text-yellow-500 text-sm font-medium">Join the community</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            {/* Clean minimal scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
            >
                <motion.div
                    className="w-[1px] h-16 bg-gradient-to-b from-yellow-500 to-transparent"
                    animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
            </motion.div>
        </section>
    );
};

export default Hero;
