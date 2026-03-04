import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPlay, FaStar, FaQuoteLeft } from 'react-icons/fa';
import './TestimonialSection.scss';
import { gymData } from '../data/gymData';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const VideoCard = ({ item }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (item.videoUrl) {
            setIsPlaying(true);
        }
    };

    return (
        <div className="video-card" onClick={handlePlay} aria-label={`Play testimonial from ${item.name}`}>
            <div className="video-card__thumb">
                <img
                    src={item.image}
                    alt={`${item.name} gym transformation`}
                    loading="lazy"
                />
                <div className="video-card__overlay"></div>
                <div className="video-card__play">
                    <FaPlay />
                </div>
                <div className="video-card__badge">Success Story</div>
            </div>
            <div className="video-card__info">
                <h4>{item.name}</h4>
                <p className="video-card__stat">{item.stat}</p>
            </div>
        </div>
    );
};

const TestimonialSection = () => {
    const containerRef = useRef(null);
    const { videos, reviews } = gymData.testimonials;

    useGSAP(() => {
        // Video cards
        gsap.from('.video-card', {
            scrollTrigger: {
                trigger: '.video-testimonials',
                start: 'top 80%',
            },
            x: 60,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: 'power2.out'
        });

        // Review cards
        gsap.from('.review-card', {
            scrollTrigger: {
                trigger: '.reviews-grid',
                start: 'top 85%',
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out'
        });
    }, { scope: containerRef });

    return (
        <section id="testimonials" className="testimonial-section" ref={containerRef}>
            {/* Decorative background blobs */}
            <div className="testimonial-section__blob testimonial-section__blob--1"></div>
            <div className="testimonial-section__blob testimonial-section__blob--2"></div>

            <div className="container">

                {/* PART 1: Video Testimonials */}
                <div className="section-block video-testimonials">
                    <div className="text-center mb-lg">
                        <p className="section-label">Real People. Real Results.</p>
                        <h2>Success <span className="text-gradient">Stories</span></h2>
                        <p className="subtitle">Watch how our members changed their lives.</p>
                    </div>

                    <div className="video-scroll">
                        {videos.map((item) => (
                            <VideoCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>

                {/* PART 2: Quote Reviews */}
                <div className="section-block reviews-section">
                    <div className="text-center mb-lg">
                        <p className="section-label">Community Voices</p>
                        <h2>Member <span className="text-gradient">Reviews</span></h2>
                        <p className="subtitle">What our people say about training with us.</p>
                    </div>

                    <div className="reviews-grid">
                        {reviews.map((item) => (
                            <div key={item.id} className="review-card">
                                <FaQuoteLeft className="review-card__quote-icon" />
                                <p className="review-card__text">"{item.text}"</p>
                                <div className="review-card__stat-highlight">{item.stat}</div>
                                <div className="review-card__footer">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="review-card__avatar"
                                        loading="lazy"
                                    />
                                    <div>
                                        <h4 className="review-card__name">{item.name}</h4>
                                        <p className="review-card__role">{item.role}</p>
                                        <div className="review-card__stars">
                                            {[...Array(item.stars)].map((_, i) => <FaStar key={i} />)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TestimonialSection;
