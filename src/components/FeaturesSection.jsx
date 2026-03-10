import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FaDumbbell, FaUserTie, FaClipboardList, FaLeaf, FaClock, FaChartLine, FaWifi, FaShower, FaParking } from 'react-icons/fa';
import { cn } from '../lib/utils';
// Note: We removed FeaturesSection.scss since we are using Tailwind now

const features = [
    { icon: <FaDumbbell />, title: "Modern Equipment", desc: "State-of-the-art machines and free weights for every fitness level." },
    { icon: <FaUserTie />, title: "Certified Trainers", desc: "Professional coaches guiding your transformation journey." },
    { icon: <FaClipboardList />, title: "Personalized Programs", desc: "Workout plans tailored to your body and goals." },
    { icon: <FaLeaf />, title: "Nutrition Guidance", desc: "Custom meal recommendations for optimal results." }
];

const FeatureCard = ({ feature, index }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative rounded-2xl border border-white/5 bg-[#1A1F2B] p-8 overflow-hidden hover:border-yellow-500/30 transition-colors"
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            rgba(0, 229, 255, 0.1),
                            transparent 40%
                        )
                    `,
                }}
            />

            <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center text-yellow-400 text-2xl mb-6 group-hover:scale-110 group-hover:bg-yellow-500/10 transition-all duration-300 group-hover:-rotate-3">
                    {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </div>
        </motion.div>
    );
};

const FeaturesSection = () => {
    return (
        <section id="features" className="py-24 bg-[#0B0F14] relative">
            <div className="container mx-auto px-6">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Everything You Need To <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">Transform</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-400 text-lg uppercase tracking-widest font-semibold"
                    >
                        We provide everything required for strength, endurance, and confidence.
                    </motion.p>
                </div>

                {/* Split Layout -> Bento Style Content */}
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Left: Introduction + Grid */}
                    <div className="flex-1 w-full flex flex-col gap-10">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white/5 rounded-3xl p-8 border border-white/10"
                        >
                            <p className="text-xl text-white font-medium mb-4">
                                Welcome to <strong className="text-yellow-400">FitWith Raj</strong>. We are committed to helping you achieve your ultimate fitness goals with state-of-the-art facilities, expert coaching, and a supportive community.
                            </p>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Whether you're a beginner taking your first steps or a seasoned athlete pushing your limits, we have everything you need to transform your body and mind in a clean, professional environment.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                            {features.map((feature, index) => (
                                <FeatureCard key={index} feature={feature} index={index} />
                            ))}
                        </div>
                    </div>

                    {/* Right: Feature Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 w-full relative rounded-3xl overflow-hidden group border border-white/10 aspect-[4/5] md:aspect-auto h-full min-h-[600px]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent z-10" />
                        <img
                            src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1000&auto=format&fit=crop"
                            alt="Modern gym interior"
                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />

                        {/* Overlay Bento Item */}
                        <div className="absolute bottom-8 left-8 right-8 z-20">
                            <div className="bg-[#1A1F2B]/80 backdrop-blur-md p-8 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">More Than Just A Gym</h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">Join today and get complementary access to our exclusive member's lounge, protein bar, and monthly fitness workshops.</p>
                                </div>
                                <a href="#book-trial" className="shrink-0 px-6 py-3 rounded-full bg-yellow-500 text-gray-900 font-bold hover:bg-yellow-400 transition-colors">
                                    Claim Spot
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default FeaturesSection;
