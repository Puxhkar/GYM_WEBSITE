import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaPlay } from 'react-icons/fa';
import './TrainerSection.scss';
import { gymData } from '../data/gymData';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TrainerSection = () => {
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const textRef = useRef(null);
    const { title, subtitle, bio, image } = gymData.trainer;

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 70%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });

        tl.from(videoRef.current, {
            x: -100,
            opacity: 0,
            rotationY: 45,
            duration: 1.2,
            ease: 'power3.out'
        })
            .from(textRef.current, {
                x: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            }, "-=0.8");

    }, { scope: containerRef });

    return (
        <section id="trainers" className="trainer-section" ref={containerRef}>
            <div className="container">
                <div className="trainer-section__header text-center">
                    <h2>{title}</h2>
                    <p className="subtitle">{subtitle}</p>
                </div>

                <div className="trainer-section__content">
                    <div className="video-card-container" ref={videoRef}>
                        <div className="video-wrapper">
                            <div className="video-placeholder">
                                <img
                                    src={image}
                                    alt="Trainer Video Thumbnail"
                                    className="video-thumbnail"
                                />
                                <div className="play-button">
                                    <FaPlay />
                                </div>
                                <div className="video-overlay">
                                    <span>Watch Introduction</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="trainer-info" ref={textRef}>
                        <h3>Expert Guidance</h3>
                        <p>
                            "{bio.quote}"
                        </p>
                        <ul className="trainer-highlights">
                            {bio.highlights.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrainerSection;
