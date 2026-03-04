import React, { useRef } from 'react';
import { FaDumbbell, FaUserTie, FaClipboardList, FaLeaf, FaClock, FaChartLine, FaWifi, FaShower, FaParking } from 'react-icons/fa';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './FeaturesSection.scss';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const FeaturesSection = () => {
    const containerRef = useRef(null);

    const features = [
        {
            icon: <FaDumbbell />,
            title: "Modern Equipment",
            desc: "State-of-the-art machines and free weights for every fitness level."
        },
        {
            icon: <FaUserTie />,
            title: "Certified Trainers",
            desc: "Professional coaches guiding your transformation journey."
        },
        {
            icon: <FaClipboardList />,
            title: "Personalized Programs",
            desc: "Workout plans tailored to your body and goals."
        },
        {
            icon: <FaLeaf />,
            title: "Nutrition Guidance",
            desc: "Custom meal recommendations for optimal results."
        },
        {
            icon: <FaClock />,
            title: "Flexible Timings",
            desc: "Early morning to late night access."
        },
        {
            icon: <FaChartLine />,
            title: "Progress Tracking",
            desc: "Track workouts, results, and performance improvements."
        },
        {
            icon: <FaWifi />,
            title: "Free Wi-Fi",
            desc: "Stay connected and stream your favorite workout playlists seamlessly."
        },
        {
            icon: <FaShower />,
            title: "Luxury Amenities",
            desc: "Premium showers, saunas, and locker rooms for post-workout recovery."
        },
        {
            icon: <FaParking />,
            title: "Dedicated Parking",
            desc: "Ample, secure parking space available exclusively for our members."
        }
    ];

    useGSAP(() => {
        gsap.from('.feature-card', {
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out'
        });
    }, { scope: containerRef });

    // Mouse tracking for hover glow effect
    const handleMouseMove = (e) => {
        const cards = document.querySelectorAll('.feature-card');
        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    };

    return (
        <section id="features" className="features-section" ref={containerRef} onMouseMove={handleMouseMove}>
            <div className="container">
                <div className="features-section__header text-center">
                    <h2>Everything You Need To Transform</h2>
                    <p>We provide everything required for strength, endurance, and confidence.</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="features-promo-box">
                    <div className="promo-content">
                        <h3>More Than Just A Gym</h3>
                        <p>Join today and get complementary access to our exclusive member's lounge, protein bar, and monthly fitness workshops.</p>
                    </div>
                    <div className="promo-action">
                        <a href="#book-trial" className="btn btn-primary">Claim Your Spot</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
