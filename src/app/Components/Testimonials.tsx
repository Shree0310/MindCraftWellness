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
            text: "Therapy for me has worked like a magic pill. It's given me a deeper understanding of my feelings, my thoughts, and consequently my actions. It has also been a safe outlet to release both the micro and macro emotions I'd been holding inside. Through this process, I've learned the value of being authentic and vulnerable. We don't always need to be the 'tough one.' Sometimes, it's perfectly okay to step back, simply observe, and let things pass.",
            author: "Anonymous",
            role: "In-person Therapy sessions"
        },
        {
            id: 2,
            text: "Ever since I was young, all I heard was how therapy was a waste of time—a money-making scheme not to be entertained during times of turmoil—so I never gave it another thought. But choosing to tune out that noise and take a leap of faith has changed my life in ways I couldn't have imagined. With Aishwarya, I've found a safe space, genuine care, and the kind of support I didn't even know I was missing.",
            author: "A.S.",
            role: "22 years old, Male, India (Online & In-person Therapy)"
        },
        {
            id: 3,
            text: "I've been working with Aishwarya for a year now, and the journey has been truly life-changing. Over this time, I've quit smoking—a habit I never thought I could break—and learned how to be more present, self-aware, and in control of my emotions. My anxiety levels have significantly reduced, and I feel more at peace with myself than I have in years. What I value most about our sessions is Aishwarya's ability to create a safe, non-judgmental space where I can openly share my thoughts.",
            author: "Anonymous",
            role: "India (In-person Therapy)"
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
        <div className="py-12 md:py-20 px-4 md:px-8">
            {/* Enhanced Header Section */}
            <div className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center space-x-3 mb-4 md:mb-6">
                    <div className="w-8 md:w-12 h-0.5 bg-[#345041] opacity-30"></div>
                    <span className="text-xs md:text-sm font-semibold text-[#345041] uppercase tracking-wider"><p>{"Testimonials"}</p></span>
                    <div className="w-8 md:w-12 h-0.5 bg-[#345041] opacity-30"></div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#345041] mb-4 md:mb-6 px-4" style={{ fontFamily: 'BrittanySignature, serif' }}>
                    <p>{"What Our Clients Say"}</p>
                </h2>
                <div className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4" style={{ fontFamily: 'Lora, serif' }}>
                    <p>{"Real stories from real people who have experienced transformation through our therapy."}</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-start gap-6 md:gap-8 max-w-6xl mx-auto">
                {getCurrentTestimonials().map((testimonial) => (
                    <div key={testimonial.id} className="relative group w-full md:w-auto">
                        {/* Enhanced Conversation bubble */}
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl w-full max-w-sm mx-auto md:mx-0 relative transition-all duration-300 transform hover:scale-105 border border-gray-100">
                            {/* Speech bubble tail */}
                            <div className="absolute -bottom-3 left-6 md:left-8 w-0 h-0 border-l-[12px] md:border-l-[15px] border-r-[12px] md:border-r-[15px] border-t-[12px] md:border-t-[15px] border-l-transparent border-r-transparent border-t-white"></div>

                            {/* Enhanced Quote mark */}
                            <div className="text-4xl md:text-6xl text-[#E7CDBF] mb-3 md:mb-4 opacity-80">&ldquo;</div>

                            {/* Enhanced Testimonial text */}
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 md:mb-6 font-medium">
                                {testimonial.text}
                            </p>

                            {/* Enhanced Author info */}
                            <div className="text-right border-t border-gray-100 pt-3 md:pt-4">
                                <p className="font-bold text-[#345041] text-sm md:text-base">{testimonial.author}</p>
                                <div className="text-gray-500 text-xs md:text-sm"><p>{"Client"}</p></div>
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
            <div className="bg-gradient-to-r from-[#f8f6f4] to-[#E7CDBF] rounded-3xl p-6 md:p-8 my-12 md:my-16 mx-4 md:mx-8">
                <div className="text-center mb-6 md:mb-8">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#345041] mb-2 px-4"><p>{"Supporting clients since January 2022"}</p></h3>
                    <div className="text-sm md:text-base text-gray-600 px-4"><p>{"Trusted by clients across Gurgaon"}</p></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
                    <div className="text-center" ref={clientsRef}>
                        <div className="text-3xl md:text-4xl font-bold text-[#345041] mb-2">
                            <span className="inline-block min-w-[60px] md:min-w-[80px]">
                                {clientsCount}+
                            </span>
                        </div>
                        <div className="text-sm md:text-base text-gray-600 font-medium px-2"><p>{"Clients Supported (Indian & International)"}</p></div>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-[#345041] mb-2">
                            <span className="inline-block min-w-[60px] md:min-w-[80px]">
                                1,563+
                            </span>
                        </div>
                        <div className="text-sm md:text-base text-gray-600 font-medium px-2"><p>{"Therapy Hours Conducted"}</p></div>
                    </div>

                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold text-[#345041] mb-2">
                            <span className="text-3xl md:text-4xl">98%</span>
                        </div>
                        <div className="text-sm md:text-base text-gray-600 font-medium px-2"><p>{"Client Satisfaction"}</p></div>
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-gradient-to-br from-[#345041] to-[#2a4033] text-white rounded-3xl p-8 md:p-12 mt-12 md:mt-16 mx-4 md:mx-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 px-4">
                        <p>{"Ready to take the next step?"}</p>
                    </h2>

                    <div className="text-lg md:text-xl mb-6 md:mb-8 leading-relaxed opacity-90 px-4">
                        <p>{"Book your free 15-minute consultation call today and be matched with the therapist who's right for you."}</p>
                    </div>

                    <div className="mb-8 md:mb-10">
                        <Link href="/book-now" className="bg-white text-[#345041] px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Book Your Free Consultation
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                        <div className="text-center md:text-left">
                            <div className="text-lg mb-3 opacity-90">
                                <p>{"Still have questions?"}</p>
                            </div>
                            <button className="text-white border-b-2 border-white hover:border-opacity-70 transition-all duration-300 font-semibold">
                                <Link href='/FAQs'>{"Read our FAQs"}</Link>
                            </button>
                        </div>

                        <div className="text-center md:text-left">
                            <div className="text-lg mb-3 opacity-90">
                                <p>{"Looking for tools and self-help materials?"}</p>
                            </div>
                            <button className="text-white border-b-2 border-white hover:border-opacity-70 transition-all duration-300 font-semibold">
                                <p>{"Explore our Resources"}</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;