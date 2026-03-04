import React, { useRef, useState, useCallback, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TransformationGallery.scss';
import { gymData } from '../data/gymData';

gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ── Single Before/After Slider Card ── */
const SliderCard = ({ item }) => {
    const [sliderPos, setSliderPos] = useState(50); // percentage
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    const getPositionFromEvent = useCallback((e) => {
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
        e.preventDefault();
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

    // Keyboard accessibility
    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') setSliderPos(p => Math.max(5, p - 5));
        if (e.key === 'ArrowRight') setSliderPos(p => Math.min(95, p + 5));
    };

    return (
        <div className="transform-card">
            <div
                className="transform-card__slider"
                ref={containerRef}
                onMouseDown={handleStart}
                onTouchStart={handleStart}
                onKeyDown={handleKeyDown}
                role="img"
                tabIndex={0}
                aria-label={`Before and after transformation photo of ${item.name}. Use arrow keys to compare.`}
            >
                {/* AFTER image (full width, underneath) */}
                <div className="transform-card__after">
                    <img
                        src={item.afterImage}
                        alt={`After transformation – ${item.name}`}
                        draggable={false}
                        loading="lazy"
                    />
                </div>

                {/* BEFORE image (clipped to slider position) */}
                <div
                    className="transform-card__before"
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                    <img
                        src={item.beforeImage}
                        alt={`Before transformation – ${item.name}`}
                        draggable={false}
                        loading="lazy"
                    />
                </div>

                {/* Labels */}
                <span className="transform-card__label transform-card__label--before">Before</span>
                <span className="transform-card__label transform-card__label--after">After</span>

                {/* Drag Handle */}
                <div
                    className="transform-card__handle"
                    style={{ left: `${sliderPos}%` }}
                    aria-hidden="true"
                >
                    <div className="transform-card__handle-line"></div>
                    <div className="transform-card__handle-btn">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M5 9L1 9M1 9L4 6M1 9L4 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M13 9L17 9M17 9L14 6M17 9L14 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Caption */}
            <div className="transform-card__caption">
                <div>
                    <h4>{item.name}</h4>
                    <p>{item.duration}</p>
                </div>
                <span className="transform-card__result">{item.caption}</span>
            </div>
        </div>
    );
};

/* ── Section Wrapper ── */
const TransformationGallery = () => {
    const sectionRef = useRef(null);
    const { transformations } = gymData;

    useGSAP(() => {
        gsap.from('.transform-card', {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out'
        });
    }, { scope: sectionRef });

    return (
        <section id="transformations" className="transformation-gallery" ref={sectionRef}>
            <div className="container">
                <div className="text-center mb-lg">
                    <p className="section-label">Real Proof</p>
                    <h2>Before &amp; After <span className="text-gradient">Transformations</span></h2>
                    <p className="subtitle">Drag the handle to compare. These are real results from our members.</p>
                </div>

                <div className="transformation-grid">
                    {transformations.map((item) => (
                        <SliderCard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TransformationGallery;
