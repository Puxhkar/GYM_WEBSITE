import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutSection.scss';
import { gymData } from '../data/gymData';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const AboutSection = () => {
    const containerRef = useRef(null);
    const imgRef = useRef(null);
    const textRef = useRef(null);

    const { title, text, stats, image } = gymData.about;

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });

        tl.from(imgRef.current, {
            y: 30,  // fade + translateY 30px
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        })
            .from(textRef.current, {
                y: 30,  // fade + translateY 30px
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            }, "-=0.8");

        // Animate Stats
        stats.forEach((stat, index) => {
            // Check if value is a number to animate (e.g. "500+")
            const rawValue = parseInt(stat.value);
            if (!isNaN(rawValue)) {
                gsap.fromTo(`.stat-val-${index}`,
                    { innerText: 0 },
                    {
                        innerText: rawValue,
                        duration: 2,
                        ease: 'power2.out',
                        snap: { innerText: 1 },
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: 'top 70%'
                        },
                        onUpdate: function () {
                            this.targets()[0].innerText = Math.ceil(this.targets()[0].innerText) + "+";
                        }
                    }
                );
            }
        });

    }, { scope: containerRef });

    return (
        <section id="about" className="about-section" ref={containerRef}>
            <div className="container">
                <div className="about-content">
                    <div className="about-image" ref={imgRef}>
                        <img src={image} alt="Gym Interior" />
                    </div>

                    <div className="about-text" ref={textRef}>
                        <h2>{title}</h2>
                        <div className="divider"></div>
                        {text.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}

                        <div className="stats">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-item">
                                    <h3 className={`stat-val-${index}`}>{stat.value}</h3>
                                    <span>{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
