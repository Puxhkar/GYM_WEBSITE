import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiPlus, HiMinus } from 'react-icons/hi';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const faqs = [
    {
        question: "How long does it take to see results?",
        answer: "Most members start noticing visible changes within 4–6 weeks depending on consistency and program intensity. Nutrition plays a huge role, which is why we guide you on that as well."
    },
    {
        question: "Do you offer personal training?",
        answer: "Yes, certified trainers provide customized one-on-one sessions tailored to your fitness goals. We assess your body metrics and build a plan specifically for you."
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a complimentary 3-day trial session so you can experience our environment, equipment, and training style without commitment."
    },
    {
        question: "What are the membership options?",
        answer: "Flexible monthly, quarterly, and annual plans are available. We also offer drop-in rates for visitors. Annual plans offer the best value with included bonuses."
    },
    {
        question: "Do you provide diet guidance?",
        answer: "Yes, basic nutrition consultation is included with selected membership plans. For dedicated meal planning, our partnered nutritionists offer comprehensive support."
    }
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 bg-[#030712] relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Header and Contact Info */}
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="sticky top-32"
                        >
                            <span className="text-yellow-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Support</span>
                            <h2 className="text-4xl font-bold text-white mb-6">Common Questions</h2>
                            <p className="text-gray-400 text-lg mb-12 leading-relaxed">Everything you need to know before joining our elite facility.</p>

                            <div className="space-y-6">
                                <div className="bg-[#0B0F19] border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-yellow-500/30 transition-colors">
                                    <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-400 shrink-0">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Email Us</h4>
                                        <p className="text-gray-400 text-sm mb-2">We're here to help.</p>
                                        <a href="mailto:support@fitwithraj.com" className="text-yellow-400 hover:text-yellow-300 font-medium">support@fitwithraj.com</a>
                                    </div>
                                </div>

                                <div className="bg-[#0B0F19] border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-amber-500/30 transition-colors">
                                    <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-400 shrink-0">
                                        <FaPhoneAlt size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Call Us</h4>
                                        <p className="text-gray-400 text-sm mb-2">Talk to an expert.</p>
                                        <a href="tel:+15551234567" className="text-amber-400 hover:text-amber-300 font-medium">+1 (555) 123-4567</a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="lg:w-2/3">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${activeIndex === index ? 'bg-[#1A1F2B] border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.1)]' : 'bg-[#0B0F19] border-white/5 hover:border-white/20'}`}
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full text-left p-6 md:p-8 flex justify-between items-center bg-transparent focus:outline-none"
                                    >
                                        <span className="text-lg md:text-xl font-bold text-white pr-8">{faq.question}</span>
                                        <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${activeIndex === index ? 'bg-yellow-500 text-white' : 'bg-white/5 text-yellow-400'}`}>
                                            {activeIndex === index ? <HiMinus size={20} /> : <HiPlus size={20} />}
                                        </span>
                                    </button>

                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-6 md:px-8 pb-8 text-gray-400 leading-relaxed text-lg border-t border-white/5 pt-6 mt-2">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQSection;
