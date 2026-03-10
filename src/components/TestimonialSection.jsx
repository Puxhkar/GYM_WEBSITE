import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaStar, FaQuoteLeft } from 'react-icons/fa';
import { gymData } from '../data/gymData';
import { cn } from '../lib/utils';
// Note: We removed TestimonialSection.scss since we are using Tailwind now

const VideoCard = ({ item, isPlaying, onPlay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
                "relative group overflow-hidden rounded-2xl cursor-pointer w-[300px] h-[400px] flex-shrink-0 border border-white/10",
                isPlaying ? "ring-2 ring-cyan-500 scale-[1.02]" : "hover:scale-[1.02] transition-transform"
            )}
            onClick={!isPlaying ? onPlay : undefined}
            aria-label={`Play testimonial from ${item.name}`}
        >
            {!isPlaying ? (
                <>
                    <img
                        src={item.image}
                        alt={`${item.name} gym transformation`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-cyan-500/80 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(0,229,255,0.6)]">
                            <FaPlay className="w-6 h-6 ml-1" />
                        </div>
                    </div>

                    <div className="absolute top-4 left-4 bg-cyan-500/20 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full border border-cyan-500/30 backdrop-blur-sm">
                        Success Story
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-xl font-bold text-white mb-1">{item.name}</h4>
                        <p className="text-cyan-400 text-sm font-semibold">{item.stat}</p>
                    </div>
                </>
            ) : (
                <video
                    src={item.videoUrl}
                    controls
                    autoPlay
                    className="w-full h-full object-cover rounded-2xl"
                >
                    Your browser does not support the video tag.
                </video>
            )}
        </motion.div>
    );
};

const TestimonialSection = () => {
    const { videos, reviews } = gymData.testimonials;
    const [playingId, setPlayingId] = useState(null);

    const handlePlayVideo = (id) => {
        setPlayingId(id);
    };

    return (
        <section id="testimonials" className="py-24 bg-[#0B0F14] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                {/* VIDEO TESTIMONIALS */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <span className="text-cyan-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Real People. Real Results.</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Stories</span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Watch how our members transformed their lives.</p>
                    </div>

                    <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide py-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {videos.map((item) => (
                            <div key={item.id} className="snap-center drop-shadow-2xl">
                                <VideoCard
                                    item={item}
                                    isPlaying={playingId === item.id}
                                    onPlay={() => handlePlayVideo(item.id)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* TEXT REVIEWS MARQUEE */}
                <div>
                    <div className="text-center mb-16">
                        <span className="text-indigo-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Community Voices</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Member <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Reviews</span>
                        </h2>
                    </div>

                    {/* Infinite Marquee Container */}
                    <div className="relative w-full flex overflow-hidden mask-image-gradient py-10">
                        <motion.div
                            className="flex gap-8 whitespace-nowrap min-w-full"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                        >
                            {/* Duplicate array for seamless looping */}
                            {[...reviews, ...reviews].map((item, index) => (
                                <div
                                    key={index}
                                    className="w-[400px] flex-shrink-0 bg-[#1A1F2B] border border-white/5 p-8 rounded-3xl hover:-translate-y-2 transition-transform duration-300"
                                >
                                    <FaQuoteLeft className="text-3xl text-cyan-500/30 mb-6" />
                                    <p className="text-gray-300 text-lg leading-relaxed mb-6 italic whitespace-normal">"{item.text}"</p>

                                    <div className="inline-block bg-cyan-500/10 text-cyan-400 px-4 py-2 rounded-lg font-bold mb-8">
                                        {item.stat}
                                    </div>

                                    <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-14 h-14 rounded-full object-cover ring-2 ring-cyan-500/50"
                                            loading="lazy"
                                        />
                                        <div>
                                            <h4 className="text-white font-bold text-lg">{item.name}</h4>
                                            <p className="text-gray-400 text-sm">{item.role}</p>
                                            <div className="flex text-yellow-400 text-sm mt-1">
                                                {[...Array(item.stars)].map((_, i) => <FaStar key={i} />)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    {/* Inline style for the fading edge effect */}
                    <style dangerouslySetInnerHTML={{
                        __html: `
                        .mask-image-gradient {
                            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
                        }
                    `}} />
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
