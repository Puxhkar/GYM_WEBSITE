import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { gymData } from '../data/gymData';

const Footer = () => {
    const { social } = gymData;
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 5000); // reset after 5s
        }
    };

    return (
        <footer className="bg-[#030712] pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
            {/* Soft bottom glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/10 blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 xl:gap-16 mb-20">

                    {/* Brand Column */}
                    <div className="lg:col-span-1">
                        <a href="#home" className="text-3xl font-bold tracking-tight text-white mb-6 inline-block">
                            FitWith<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Raj</span>
                        </a>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            Train with purpose. Transform with consistency. Join a community that pushes you forward to achieve your ultimate fitness goals.
                        </p>
                        <div className="flex gap-4">
                            {social.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={index}
                                        href={item.url}
                                        aria-label={item.platform}
                                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:bg-cyan-500 hover:text-white hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1"
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Links Column 1 */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Explore</h4>
                        <ul className="space-y-4">
                            <li><a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</a></li>
                            <li><a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors">Premium Programs</a></li>
                            <li><a href="#trainers" className="text-gray-400 hover:text-cyan-400 transition-colors">Elite Coaches</a></li>
                        </ul>
                    </div>

                    {/* Links Column 2 */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Resources</h4>
                        <ul className="space-y-4">
                            <li><a href="#testimonials" className="text-gray-400 hover:text-cyan-400 transition-colors">Success Stories</a></li>
                            <li><a href="#transformations" className="text-gray-400 hover:text-cyan-400 transition-colors">Transformations</a></li>
                            <li><a href="#faq" className="text-gray-400 hover:text-cyan-400 transition-colors">FAQ</a></li>
                            <li><a href="#book-trial" className="text-gray-400 hover:text-cyan-400 transition-colors">Book Free Trial</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Stay Motivated</h4>
                        <p className="text-gray-400 mb-6">Get weekly tips, workout plans, and success stories straight to your inbox.</p>

                        {subscribed ? (
                            <div className="bg-[#0B0F19] border border-cyan-500/30 rounded-xl p-4 text-center">
                                <span className="text-cyan-400 font-bold block mb-1">✓ Subscribed!</span>
                                <span className="text-gray-400 text-sm">Check your inbox for a welcome gift.</span>
                            </div>
                        ) : (
                            <form className="flex flex-col gap-3" onSubmit={handleSubscribe}>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    required
                                    aria-label="Email address for newsletter"
                                    className="w-full bg-[#0B0F19] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-gray-500"
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white font-bold py-3 rounded-xl shadow-lg transition-all"
                                >
                                    Subscribe Now
                                </button>
                            </form>
                        )}

                        <div className="mt-8 space-y-2 text-gray-500 text-sm">
                            <p className="flex items-center gap-2">
                                <span className="text-cyan-500">📍</span> 123 Fitness St, Wellness City
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="text-cyan-500">✉️</span> hello@fitwithraj.com
                            </p>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">&copy; {currentYear} FitWith Raj. All rights reserved.</p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-cyan-400 transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
