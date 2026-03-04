import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Hero.scss';
import { gymData } from '../data/gymData';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const actionsRef = useRef(null);
    const bgRef = useRef(null);

    const { title, subtitle, ctaPrimary, ctaSecondary, backgroundImage } = gymData.hero;

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Background Parallax
        gsap.to(bgRef.current, {
            y: '10%',
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        });

        // Entrance Animation
        tl.fromTo(titleRef.current,
            { y: 100, opacity: 0, clipPath: "inset(100% 0 0 0)" },
            { y: 0, opacity: 1, clipPath: "inset(0% 0 0 0)", duration: 1.5, delay: 0.2 }
        )
            .fromTo(subtitleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.9 },
                "-=0.8"
            )
            .fromTo(actionsRef.current.children,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, stagger: 0.15, duration: 0.8 },
                "-=0.5"
            )
            .fromTo('.scroll-indicator',
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 1 },
                "-=0.5"
            );

        // Mouse movement parallax effect (subtle)
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5) * 20;
            const yPos = (clientY / window.innerHeight - 0.5) * 20;

            gsap.to(bgRef.current, {
                x: xPos,
                y: yPos,
                duration: 1,
                ease: 'power2.out'
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);

    }, { scope: containerRef });

    return (
        <section id="home" className="hero" ref={containerRef}>
            <div className="hero__background" ref={bgRef} style={{ backgroundImage: `url('${backgroundImage}')` }}></div>
            <div className="hero__overlay"></div>

            <div className="hero__content container">
                <h1 className="hero__title" ref={titleRef} style={{ whiteSpace: 'pre-line' }}>
                    {title}
                </h1>

                <p className="hero__subtitle" ref={subtitleRef}>
                    {subtitle}
                </p>

                <div className="hero__actions" ref={actionsRef}>
                    <a href="#book-trial" className="btn btn-primary">{ctaPrimary}</a>
                    <a href="#testimonials" className="btn btn-secondary">{ctaSecondary}</a>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse"></div>
                <span>SCROLL</span>
            </div>
        </section>
    );
};

export default Hero;
