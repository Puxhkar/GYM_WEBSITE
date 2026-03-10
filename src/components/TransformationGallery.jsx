import React, { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gymData } from '../data/gymData';
import { FaArrowsAltH } from 'react-icons/fa';

const SliderCard = ({ item, index }) => {
    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const getPositionFromEvent = useCallback((e) => {
        if (!containerRef.current) return 50;
        const rect = containerRef.current.getBoundingClientRect();
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        return (x / rect.width) * 100;
    }, []);

    const handleMove = useCallback((e) => {
        if (!isDragging) return;
        setSliderPos(getPositionFromEvent(e));
    }, [isDragging, getPositionFromEvent]);

    const handleStart = useCallback((e) => {
        setIsDragging(true);
        setSliderPos(getPositionFromEvent(e));
    }, [getPositionFromEvent]);

    const handleEnd = useCallback(() => setIsDragging(false), []);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        el.addEventListener('mousemove', handleMove);
        el.addEventListener('mouseup', handleEnd);
        el.addEventListener('mouseleave', handleEnd);
        el.addEventListener('touchmove', handleMove, { passive: false });
        el.addEventListener('touchend', handleEnd);
        return () => {
            el.removeEventListener('mousemove', handleMove);
            el.removeEventListener('mouseup', handleEnd);
            el.removeEventListener('mouseleave', handleEnd);
            el.removeEventListener('touchmove', handleMove);
            el.removeEventListener('touchend', handleEnd);
        };
    }, [handleMove, handleEnd]);

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') setSliderPos(p => Math.max(0, p - 5));
        if (e.key === 'ArrowRight') setSliderPos(p => Math.min(100, p + 5));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col rounded-3xl overflow-hidden bg-[#1A1F2B] border border-white/5 shadow-2xl hover:border-cyan-500/30 transition-colors"
        >
            <div
                className="relative w-full aspect-[4/5] md:aspect-square cursor-ew-resize select-none overflow-hidden"
                ref={containerRef}
                onMouseDown={handleStart}
                onTouchStart={handleStart}
                onKeyDown={handleKeyDown}
                role="slider"
                tabIndex={0}
                aria-valuenow={sliderPos}
                aria-label="Image comparison slider"
            >
                {/* AFTER image (bottom layer, full width) */}
                <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <img
                        src={item.afterImage}
                        alt="After"
                        className="w-full h-full object-cover"
                        draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-50" />
                </div>

                {/* BEFORE image (top layer, clipped based on slider) */}
                <div
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                    <img
                        src={item.beforeImage}
                        alt="Before"
                        className="w-full h-full object-cover"
                        draggable={false}
                    />
                    {/* Add a generic filter so it looks like a "before" photo if they are identical placeholders */}
                    <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Vertical Divider Line */}
                <div
                    className="absolute top-0 bottom-0 w-0.5 bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)] z-10"
                    style={{ left: `${sliderPos}%` }}
                />

                {/* Drag Handle Button */}
                <div
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl text-gray-900 pointer-events-none"
                    style={{ left: `${sliderPos}%` }}
                >
                    <FaArrowsAltH size={20} className="opacity-80" />
                </div>

                {/* Labels overlay */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider border border-white/10 z-10 pointer-events-none">
                    Before
                </div>
                <div className="absolute top-4 right-4 bg-cyan-500/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white uppercase tracking-wider border border-cyan-400/50 z-10 pointer-events-none">
                    After
                </div>
            </div>

            {/* Content box */}
            <div className="p-8 pb-10 flex flex-col items-center text-center">
                <h4 className="text-2xl font-bold text-white mb-1">{item.name}</h4>
                <p className="text-cyan-400 font-semibold mb-4 text-sm">{item.duration}</p>
                <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent mb-4" />
                <p className="text-gray-400 italic font-medium leading-relaxed">
                    "{item.caption}"
                </p>
            </div>
        </motion.div>
    );
};

const TransformationGallery = () => {
    const { transformations } = gymData;

    return (
        <section id="transformations" className="py-24 bg-[#030712] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Real Proof</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Before & After <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Transformations</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Drag the slider on each image to compare. These are real results achieved through dedication and our guidance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {transformations.map((item, index) => (
                        <SliderCard key={item.id} item={item} index={index} />
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="#book-trial" className="inline-block bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-4 px-10 rounded-full transition-all duration-300">
                        Start Your Transformation
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TransformationGallery;
