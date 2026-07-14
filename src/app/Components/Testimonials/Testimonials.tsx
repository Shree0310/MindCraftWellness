"use client"

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import TestimonialGroup from './TestimonialGroup';
import { IconChevronRight } from '@tabler/icons-react';

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

interface TestimonialsProps {
    category?: string; // optional, so it works on all pages
}

const Testimonials = ({category}: TestimonialsProps) => {
    const testimonials = [
        {
            id: 1,
            category: 'landing page',
            text: `Therapy for me has worked like a magic pill. It's given me a deeper understanding of my feelings, my thoughts, and consequently my actions. It has also been a safe outlet to release both the micro and macro emotions I'd been holding inside. 
                   Through this process, I've learned the value of being authentic and vulnerable. We don't always need to be the 'tough one.' Sometimes, it's perfectly okay to step back, simply observe, and let things pass.`,
            author: "Anonymous",
            role: "In-person Therapy sessions"
        },
        {
            id: 2,
            category: 'landing page',
            text: `Ever since I was young, all I heard was how therapy was a waste of time—a money-making scheme not to be entertained during times of turmoil—so I never gave it another thought. But choosing to tune out that noise and take a leap of faith has changed my life in ways I couldn't have imagined. 
                  With Aishwaraya, I've found a safe space, genuine care, and the kind of support I didn't even know I was missing.`,
            author: "A.S.",
            role: "22 years old, Male, India (Online & In-person Therapy)"
        },
        {
            id: 4,
            category: 'about us',
            text: `Whilst I would consider myself relatively new into therapy, the experience has been super insightful and telling - especially with Aishwaraya. Working with her has helped me develop the skills that I need to handle situations independently.
                   Aishwaraya's gentle approach to psychotherapy has really helped me ease into the process and truly make the most out of my experience.`,            
            author: "M.L.",
            role: "19,  female, Dubai, UAE (United Arab Emirates) / Spain (Online Therapy)"
        },
        {
            id: 5,
            category: 'about us',
            text: `Had incredible experience though our sessions; She was very empathetic & helpful through some of the very hard periods of my life. Incredibly grounded & professional; Highly recommend her.`,
            author: "Anonymous",
            role: "47, Male, Startup Founder, India (In-person Therapy)"
        },
        {
            id: 7,
            category: 'specialities',
            text: `I have been working with Aishwaraya for over a year through psychotherapy to manage my anxiety, and my experience has been excellent.
                  I attend in-person sessions with her, and she stands out as a psychologist who truly applies effective psychological practices. Her approach is both genuine and practical, and the serene, thoughtfully designed environment of her clinic further enhances the sense of calm and comfort during each session.`,
            author: "Anonymous",
            role: "India (In-person Therapy)"
        },
        {
            id: 8,
            category: 'specialities',
            text: `I had the privilege of first seeking guidance from Aishwaraya in 2022 , during one of the most tumultuous and transformative chapters of my life. Her support guided me through a toxic relationship, moments of deep self-doubt, deep seated resentment with my family and some of the hardest emotional battles I've faced.
                    What I cherish most is that she didn't just help me heal—she gave me tools I didn't even know I desperately needed: the ability to set and honor healthy boundaries.`,
            author: "M.L.",
            role: "Female, 25 Years Old, Gurgaon (In-person Therapy)"
        },
    ];

    const { count: clientsCount, ref: clientsRef } = useCountUp(200, 2500);
    const { count: therapyHRS, ref: therapyHRSRef} =useCountUp(1563, 2500);
    const {count: ClientSatisfaction, ref: clientSatisfactionRef} = useCountUp(98, 3000);
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

    useEffect(() => {
        console.log(groupedTestimonials);
        console.log(categories);
        console.log(testimonialsToShow);
    }, [category]);

    const groupedTestimonials = testimonials.reduce((acc, testimonial) => {
        if(!acc[testimonial.category]){
            acc[testimonial.category] = [];
        }
        acc[testimonial.category].push(testimonial);
        return acc;
    },{} as Record<string, typeof testimonials> );

    const categories = Object.keys(groupedTestimonials);

    const slideRightTestimonials = () => {
        setActiveCategoryIndex((prev) => {
            return prev >= categories.length -1 ? 0 : prev + 1;
        });
    }

    const slideLeftTestimonials = () => {
        setActiveCategoryIndex((prev) => {
            return prev <= 0 ? categories.length-1 : prev - 1;
        });
    }

    const currCategory = categories[activeCategoryIndex];
    const testimonialsToShow = groupedTestimonials[currCategory] || [];

    return (
        <div className="py-12 md:py-20 px-4 md:px-8">
            {/* Enhanced Header Section */}
            <div className="text-center mb-8 md:mb-10">
                <div className="inline-flex items-center space-x-3 mb-4 md:mb-6">
                    <div className="w-8 md:w-12 h-0.5 bg-[#B6724F] opacity-40"></div>
                    <span className="eyebrow-label"><p>{"Testimonials"}</p></span>
                    <div className="w-8 md:w-12 h-0.5 bg-[#B6724F] opacity-40"></div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-12 md:mb-6 lg:mb-10 px-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                    <p className='mb-4'>{"What Our Clients Say"}</p>
                </h2>
                <div className="text-base md:text-lg text-[#F2E8DD] max-w-2xl mx-auto px-4 mt-3" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                    <p>{"Real stories from real people who have experienced transformation through our therapy."}</p>
                </div>
            </div>

                <div className="relative flex flex-col md:flex-row justify-center items-start gap-6 md:gap-8 max-w-6xl mx-auto">
                    {testimonialsToShow
                        .map((testimonial) => (
                        <TestimonialGroup
                            key={testimonial.id}
                            category= {testimonial.category}
                            id={testimonial.id}
                            text={testimonial.text} 
                            author= {testimonial.author}
                            role={testimonial.role}
                        />
                    ))}
                    {/* Navigation Arrows */}
                                <button
                                    onClick={() => slideRightTestimonials()}
                                    className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 cursor-pointer hover:bg-white text-[#345041] p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                                    aria-hidden="false"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                <button
                                    onClick={() => slideLeftTestimonials()}
                                    className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#345041] p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                                    aria-hidden="false"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                </div>

                <div className='text-center block py-8 pl-8'>
                        <Link href="/testimonials">
                            <button className="bg-white/20 backdrop-blur-sm text-sm rounded-full text-[#5C4B3C] p-2 cursor-pointer shadow-lg w-72 h-12 m-2 hover:bg-white/30 transition-all duration-300 transform hover:scale-105 uppercase tracking-wider border border-white/30" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500, letterSpacing: '0.08em' }}>
                                <div className="flex justify-center items-center">
                                    <span className='mr-1'>Read More Testimonials</span>
                                    <span><IconChevronRight stroke={1} size={18} /></span>
                                </div>
                            </button>
                        </Link>
                    </div>

        </div>
    );
};

export default Testimonials;