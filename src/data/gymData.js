import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export const gymData = {
    hero: {
        title: "Train with purpose.\nTransform with consistency.",
        subtitle: "Join a community of 500+ success stories. Expert coaching, personalized programs, real results.",
        ctaPrimary: "Get Started",
        ctaSecondary: "Watch Testimonials",
        backgroundImage: "/gym_content/premium_gym_interior_1773166962229.png"
    },
    about: {
        title: "More Than Just A Gym",
        text: [
            "We believe that true strength comes from consistency, not intensity. Our space is designed to be a sanctuary for your physical and mental well-being.",
            "No loud music, no crowded racks, just professional guidance and a community focused on sustainable progress."
        ],
        stats: [
            { value: "500+", label: "Lives Changed" },
            { value: "15+", label: "Expert Trainers" }
        ],
        image: "/gym_content/premium_workout_gym_1773167114690.png"
    },
    testimonials: {
        videos: [
            {
                id: 1,
                name: "Alex M.",
                stat: "Lost 18kg in 5 months",
                image: "/gym_content/IMG_5783.jpg",
                videoUrl: "/gym_content/IMG_8259.MP4"
            },
            {
                id: 2,
                name: "Jordan T.",
                stat: "Gained 8kg muscle in 4 months",
                image: "/gym_content/IMG_8324.JPG",
                videoUrl: "/gym_content/IMG_8323.MP4"
            },
            {
                id: 3,
                name: "Sara K.",
                stat: "Ran first marathon at 38",
                image: "/gym_content/IMG_6341.jpg",
                videoUrl: "/gym_content/IMG_8328.MP4"
            },
            {
                id: 4,
                name: "Chris R.",
                stat: "Lost 12kg, gained confidence",
                image: "/gym_content/cars_sampled (2).jpeg",
                videoUrl: "/gym_content/IMG_8329.MP4"
            },
        ],
        reviews: [
            {
                id: 1,
                name: "Sarah J.",
                role: "Member since 2023",
                stat: "–20kg in 6 months",
                text: "The personalized approach is a game changer. I've never felt more confident and the trainers genuinely care about your progress.",
                stars: 5,
                image: "/gym_content/IMG_5783.jpg"
            },
            {
                id: 2,
                name: "Mike T.",
                role: "Competitive Athlete",
                stat: "+12kg lean muscle",
                text: "Professional facilities and a calm environment. Perfect for focused training without the noise. My performance metrics have never been better.",
                stars: 5,
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
            },
            {
                id: 3,
                name: "Emily R.",
                role: "Beginner turned Regular",
                stat: "Completed 12-week program",
                text: "I was intimidated by gyms, but this place is completely different. So welcoming and the 12-week transformation program exceeded my expectations.",
                stars: 5,
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
            }
        ]
    },
    transformations: [
        {
            id: 1,
            name: "Alex M.",
            duration: "12-week transformation",
            beforeImage: "/gym_content/IMG_5783.jpg",
            afterImage: "/gym_content/IMG_6341.jpg",
            caption: "–12kg, +4kg lean muscle"
        },
        {
            id: 2,
            name: "Jordan T.",
            duration: "6-month journey",
            beforeImage: "/gym_content/cars_sampled (2).jpeg",
            afterImage: "/gym_content/IMG_8324.JPG",
            caption: "–15kg, total body recomp"
        }
    ],
    trainer: {
        title: "Meet Your Coach",
        subtitle: "Real results require real guidance.",
        bio: {
            quote: "My philosophy is simple: Consistency beats intensity. I help you build habits that last a lifetime, not just a summer.",
            highlights: [
                "Certified Fitness Expert",
                "10+ Years Experience",
                "Holistic Approach"
            ]
        },
        image: "/gym_content/IMG_5783.jpg"
    },
    booking: {
        title: "Ready to Start?",
        subtitle: "Book your free trial session below.",
        calendlyUrl: "https://calendly.com/"
    },
    social: [
        { platform: "Instagram", icon: FaInstagram, url: "#" },
        { platform: "Facebook", icon: FaFacebook, url: "#" },
        { platform: "Twitter", icon: FaTwitter, url: "#" }
    ]
};
