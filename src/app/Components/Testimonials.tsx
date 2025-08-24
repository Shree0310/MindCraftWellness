"use client"

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

// Custom hook for counting animation
const useCountUp = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);

            const currentCount = Math.floor(progress * end);
            setCount(currentCount);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => {
            if (animationFrame) {
                cancelAnimationFrame(animationFrame);
            }
        };
    }, [isVisible, end, duration]);

    return { count, ref };
};

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { count: clientsCount, ref: clientsRef } = useCountUp(200, 2500);

    const testimonials = [
        {
            id: 1,
            text: "Aishwaraya helped me find my way back to myself. Her warmth and expertise made me feel safe to explore the deepest parts of my healing journey.",
            author: "Sarah M.",
            role: "Client"
        },
        {
            id: 2,
            text: "The therapy sessions at Mind Craft Wellness have been transformative. I finally feel understood and supported in ways I never thought possible.",
            author: "Rahul K.",
            role: "Client"
        },
        {
            id: 3,
            text: "After struggling with anxiety for years, I found real relief here. The team's trauma-informed approach made all the difference in my recovery.",
            author: "Priya S.",
            role: "Client"
        },
        {
            id: 4,
            text: "Mind Craft Wellness provided the safe space I needed to process my trauma. The therapists here truly care about your healing and growth.",
            author: "Michael T.",
            role: "Client"
        },
        {
            id: 5,
            text: "I was skeptical about therapy at first, but the team here completely changed my perspective. They helped me develop tools I use every day to manage stress.",
            author: "Anjali R.",
            role: "Client"
        },
        {
            id: 6,
            text: "The personalized approach at Mind Craft Wellness is incredible. They took time to understand my unique situation and created a treatment plan that actually works for me.",
            author: "David L.",
            role: "Client"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const getCurrentTestimonials = () => {
        const first = testimonials[currentIndex];
        const second = testimonials[(currentIndex + 1) % testimonials.length];
        return [first, second];
    };

    return (
        <div className="py-20 px-8">
            {/* Enhanced Header Section */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center space-x-3 mb-6">
                    <div className="w-12 h-0.5 bg-[#345041] opacity-30"></div>
                    <span className="text-sm font-semibold text-[#345041] uppercase tracking-wider">Testimonials</span>
                    <div className="w-12 h-0.5 bg-[#345041] opacity-30"></div>
                </div>
                <h2 className="text-6xl font-bold text-[#345041] mb-6" style={{ fontFamily: 'BrittanySignature, serif' }}>
                    What Our Clients Say
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Lora, serif' }}>
                    Real stories from real people who have experienced transformation through our therapy.
                </p>
            </div>
            <div className="flex justify-center items-start gap-8 max-w-6xl mx-auto">
                {getCurrentTestimonials().map((testimonial, index) => (
                    <div key={testimonial.id} className="relative group">
                        {/* Enhanced Conversation bubble */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl max-w-sm relative transition-all duration-300 transform hover:scale-105 border border-gray-100">
                            {/* Speech bubble tail */}
                            <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent border-t-white"></div>

                            {/* Enhanced Quote mark */}
                            <div className="text-6xl text-[#E7CDBF] mb-4 opacity-80">"</div>

                            {/* Enhanced Testimonial text */}
                            <p className="text-gray-700 text-base leading-relaxed mb-6 font-medium">
                                {testimonial.text}
                            </p>

                            {/* Enhanced Author info */}
                            <div className="text-right border-t border-gray-100 pt-4">
                                <p className="font-bold text-[#345041] text-base">{testimonial.author}</p>
                                <p className="text-gray-500 text-sm">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 gap-2">
                {[0, 1].map((dotIndex) => (
                    <button
                        key={dotIndex}
                        onClick={() => setCurrentIndex(dotIndex * 2)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === dotIndex * 2 ? 'bg-[#345041]' : 'bg-gray-300'
                            }`}
                    />
                ))}
            </div>

            {/* Statistics Section */}
            <div className="bg-gradient-to-r from-[#f8f6f4] to-[#E7CDBF] rounded-3xl p-8 my-16 mx-8">
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-semibold text-[#345041] mb-2">Since 2022</h3>
                    <p className="text-gray-600">Trusted by clients across Gurgaon</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-center" ref={clientsRef}>
                        <div className="text-4xl font-bold text-[#345041] mb-2">
                            <span className="inline-block min-w-[80px]">
                                {clientsCount}+
                            </span>
                        </div>
                        <p className="text-gray-600 font-medium">Clients Helped</p>
                    </div>

                    <div className="text-center">
                        <div className="text-4xl font-bold text-[#345041] mb-2">
                            <span className="inline-block min-w-[80px]">
                                2,500+
                            </span>
                        </div>
                        <p className="text-gray-600 font-medium">Hours of Therapy</p>
                    </div>

                    <div className="text-center">
                        <div className="text-4xl font-bold text-[#345041] mb-2">
                            <span className="text-4xl">98%</span>
                        </div>
                        <p className="text-gray-600 font-medium">Client Satisfaction</p>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-gradient-to-br from-[#345041] to-[#2a4033] text-white rounded-3xl p-12 mt-16 mx-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6">
                        Ready to take the next step?
                    </h2>

                    <p className="text-xl mb-8 leading-relaxed opacity-90">
                        Book your free 15-minute consultation call today and be matched with the therapist who's right for you.
                    </p>

                    <div className="mb-10">
                        <Link href="/book-now" className="bg-white text-[#345041] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Book Your Free Consultation
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="text-center md:text-left">
                            <p className="text-lg mb-3 opacity-90">
                                Still have questions?
                            </p>
                            <button className="text-white border-b-2 border-white hover:border-opacity-70 transition-all duration-300 font-semibold">
                                Read our FAQs
                            </button>
                        </div>

                        <div className="text-center md:text-left">
                            <p className="text-lg mb-3 opacity-90">
                                Looking for tools and self-help materials?
                            </p>
                            <button className="text-white border-b-2 border-white hover:border-opacity-70 transition-all duration-300 font-semibold">
                                Explore our Resources
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;