import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

export const gymData = {
    hero: {
        title: "Train with purpose.\nTransform with consistency.",
        subtitle: "Join a community of 500+ success stories. Expert coaching, personalized programs, real results.",
        ctaPrimary: "Get Started",
        ctaSecondary: "Watch Testimonials",
        backgroundImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2670&auto=format&fit=crop"
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
        image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=2576&auto=format&fit=crop"
    },
    testimonials: {
        videos: [
            {
                id: 1,
                name: "Alex M.",
                stat: "Lost 18kg in 5 months",
                image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop",
                videoUrl: ""
            },
            {
                id: 2,
                name: "Jordan T.",
                stat: "Gained 8kg muscle in 4 months",
                image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2670&auto=format&fit=crop",
                videoUrl: ""
            },
            {
                id: 3,
                name: "Sara K.",
                stat: "Ran first marathon at 38",
                image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2574&auto=format&fit=crop",
                videoUrl: ""
            },
            {
                id: 4,
                name: "Chris R.",
                stat: "Lost 12kg, gained confidence",
                image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2574&auto=format&fit=crop",
                videoUrl: ""
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
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
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
            name: "John D.",
            duration: "12-week transformation",
            beforeImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2670&auto=format&fit=crop",
            afterImage: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?q=80&w=2670&auto=format&fit=crop",
            caption: "–12kg, +4kg lean muscle"
        },
        {
            id: 2,
            name: "Maria S.",
            duration: "6-month journey",
            beforeImage: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2670&auto=format&fit=crop",
            afterImage: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=2576&auto=format&fit=crop",
            caption: "–15kg, total body recomp"
        },
        {
            id: 3,
            name: "Tim K.",
            duration: "8-week program",
            beforeImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2670&auto=format&fit=crop",
            afterImage: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=2574&auto=format&fit=crop",
            caption: "–8kg, improved endurance"
        },
        {
            id: 4,
            name: "Alicia M.",
            duration: "16-week strength plan",
            beforeImage: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2574&auto=format&fit=crop",
            afterImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop",
            caption: "–10kg, first deadlift 100kg"
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
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2670&auto=format&fit=crop"
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
