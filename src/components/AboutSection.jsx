import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gymData } from '../data/gymData';
import { cn } from '../lib/utils';

// Helper component for counting up numbers
const AnimatedCounter = ({ value }) => {
    const rawValue = parseInt(value.replace(/\D/g, ''), 10);
    const hasPlus = value.includes('+');
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const duration = 2000; // 2 seconds
            const increment = rawValue / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= rawValue) {
                    setCount(rawValue);
                    clearInterval(timer);
                } else {
                    setCount(Math.ceil(start));
                }
            }, 16);

            return () => clearInterval(timer);
        }
    }, [inView, rawValue]);

    return (
        <span ref={ref}>
            {count}{hasPlus ? '+' : ''}
        </span>
    );
};

const AboutSection = () => {
    const { title, text, stats, image } = gymData.about;

    return (
        <section id="about" className="py-24 bg-[#0B0F19] relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-16">

                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden border border-white/10 aspect-[4/5] md:aspect-square md:aspect-[4/5] shadow-[0_0_40px_rgba(250,204,21,0.1)]">
                            <img
                                src={image}
                                alt="Gym Interior"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent" />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-gradient-to-br from-[#1A1F2B] to-[#0B0F19] p-6 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-md"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center border border-yellow-500/50 text-yellow-400 font-bold text-xl">
                                    5+
                                </div>
                                <div>
                                    <p className="text-white font-bold leading-tight">Years Of</p>
                                    <p className="text-yellow-400 text-sm font-semibold">Excellence</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Content */}
                    <div className="flex-1 w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Our Story</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                {title.replace('Our Story', '')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-400">Our Story</span>
                            </h2>
                            <div className="w-20 h-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full mb-8" />

                            <div className="space-y-6 text-gray-400 text-lg leading-relaxed mb-12">
                                {text.map((paragraph, index) => (
                                    <p key={index}>{paragraph}</p>
                                ))}
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (index * 0.1), duration: 0.5 }}
                                        className="text-center md:text-left"
                                    >
                                        <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">
                                            <AnimatedCounter value={stat.value} />
                                        </h3>
                                        <p className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutSection;
