import React from 'react';
import { InlineWidget } from 'react-calendly';
import { motion } from 'framer-motion';
import { gymData } from '../data/gymData';

const BookingSection = () => {
    const { title, subtitle, calendlyUrl } = gymData.booking;

    return (
        <section id="book-trial" className="py-24 bg-[#0B0F19] relative">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-yellow-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Take Action</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {title.split('Free')[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-400">Free Trial</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">{subtitle}</p>

                        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base mb-12">
                            <span className="flex items-center gap-2 bg-[#1A1F2B] text-gray-300 px-4 py-2 rounded-full border border-white/5">
                                <span className="text-yellow-400">✓</span> No Credit Card Required
                            </span>
                            <span className="flex items-center gap-2 bg-[#1A1F2B] text-gray-300 px-4 py-2 rounded-full border border-white/5">
                                <span className="text-yellow-400">✓</span> 1-on-1 Consultation
                            </span>
                            <span className="flex items-center gap-2 bg-[#1A1F2B] text-gray-300 px-4 py-2 rounded-full border border-white/5">
                                <span className="text-yellow-400">✓</span> Full Facility Tour
                            </span>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-white/5 backdrop-blur-sm rounded-3xl p-2 border border-white/10 shadow-2xl"
                >
                    <div className="bg-white rounded-2xl overflow-hidden min-h-[700px]">
                        <InlineWidget
                            url={calendlyUrl}
                            styles={{
                                height: '700px',
                                width: '100%',
                            }}
                            pageSettings={{
                                backgroundColor: 'ffffff',
                                hideEventTypeDetails: false,
                                hideLandingPageDetails: false,
                                primaryColor: '06b6d4',
                                textColor: '111827'
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BookingSection;
