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
            text: `Ever since I was young, all I heard was how therapy was a waste of time—a money-making scheme not to be entertained during times of turmoil—so I never gave it another thought. But choosing to tune out that noise and take a leap of faith has changed my life in ways I couldn't have imagined. With Aishwarya, I've found a safe space, genuine care, and the kind of support I didn't even know I was missing.`,
            author: "A.S.",
            role: "22 years old, Male, India (Online & In-person Therapy)"
        },
        {
            id: 3,
            category: 'about us',
            text: `I've been working with Aishwarya for a year now, and the journey has been truly life-changing. Over this time, I've quit smoking—a habit I never thought I could break—and learned how to be more present, self-aware, and in control of my emotions. My anxiety levels have significantly reduced, and I feel more at peace with myself than I have in years.

What I value most about our sessions is Aishwarya's ability to create a safe, non-judgmental space where I can openly share my thoughts`,
            author: "Anonymous",
            role: "India (In-person Therapy)"
        },
        {
            id: 4,
            category: 'about us',
            text: `Whilst I would consider myself relatively new into therapy, the experience has been super insightful and telling - especially with Aishwarya. Working with her has helped me develop the skills that I need to handle situations independently and has given me a chance to chat with someone so kind and caring, when I'm feeling down. Aishwarya's gentle approach to psychotherapy has really helped me ease into the process and truly make the most out of my experience.`,
            author: "M.L.",
            role: "19, female, Dubai, UAE (United Arab Emirates) / Spain (Online Therapy)"
        },
        {
            id: 5,
            category: 'specialities',
            text: `I have been Ms. Aishwarya's client for over 2 years now and I have experienced immense self reflection, growth and increase in self esteem during this time. Not only have I been able to work on my relationships and my difficulties to manage my work, but also my anxieties and past traumas. I would highly recommend Aishwarya because she is a professional who keeps evolving and working hard to help clients (new and old) grow and gain the most out of their therapy. In addition, she is the right combination of being a kind and flexible, yet stern and disciplined professional. I highly recommend Aishwarya!`,
            author: "S.K.",
            role: "Female, New Delhi (Online therapy)"
        },
        {
            id: 6,
            category: 'specialities',
            text: `So I started my therapy when I was not in a good place in life mentally. I'd been contemplating about it for months but one day I just went for it without any second thoughts and I can gladly say it was the best decision I made. Aishwaraya being my therapist was the second best decision I'd made because from the very first session itself I felt so comfortable sharing anything everything with her, which is huge because I have difficulty opening about my issues.

The whole process of starting therapy and taking sessions has been very beneficial for me so far! I've had better energy and a better outlook towards most situations in life! Aishwaraya has helped me and is still helping me get better with my relationships, be it romantic or family. I've gained a lot of perspective about my childhood trauma and I feel I'm better equipped now to deal with certain situations. She really empathises and listens to me when I need it and that makes a world of a difference, after each session I step out a little lighter and a little happier!

To anyone out there still contemplating, my advice is to just go for it, at least give it a shot because if you never try, you'll never know!`,
            author: "V.S.",
            role: "Male, 29 Year Old, Gurgaon (In-person Therapy)"
        },
        {
            id: 7,
            category: 'book now',
            text: `I've been seeing Aishwarya for a long time now, and I can honestly say she has made a profound difference in my life. From the very first session, she created a safe and welcoming space where I felt truly heard and understood.

She is a wonderful listener—patient, compassionate, and fully present. I've been working through issues related to anxiety and perfectionism, and her gentle, thoughtful approach has helped me gain insight into patterns I wasn't even fully aware of. She doesn't rush to offer advice but instead helps guide me to my own realizations, which has been incredibly empowering.

What I appreciate most is her calming presence. No matter how overwhelmed I feel going into a session, I always leave feeling more grounded and hopeful. Her support has been instrumental in helping me manage my anxiety and let go of the unrealistic standards I've held myself to for so long.

If you're looking for a therapist who is kind, attentive, and genuinely committed to helping you grow, I couldn't recommend Aishwarya more highly.`,
            author: "A.S.",
            role: "Female, 33 Year Old, Gurgaon (In-person Therapy)"
        },
        {
            id: 8,
            category: 'book now',
            text: `So I started my therapy when I was not in a good place in life mentally. I'd been contemplating about it for months but one day I just went for it without any second thoughts and I can gladly say it was the best decision I made. Aishwaraya being my therapist was the second best decision I'd made because from the very first session itself I felt so comfortable sharing anything everything with her, which is huge because I have difficulty opening about my issues.

The whole process of starting therapy and taking sessions has been very beneficial for me so far! I've had better energy and a better outlook towards most situations in life! Aishwaraya has helped me and is still helping me get better with my relationships, be it romantic or family. I've gained a lot of perspective about my childhood trauma and I feel I'm better equipped now to deal with certain situations. She really empathises and listens to me when I need it and that makes a world of a difference, after each session I step out a little lighter and a little happier!

To anyone out there still contemplating, my advice is to just go for it, at least give it a shot because if you never try, you'll never know!`,
            author: "V.S.",
            role: "Male, 29 Year Old, Gurgaon (In-person Therapy)"
        },
    ];

    const { count: clientsCount, ref: clientsRef } = useCountUp(200, 2500);
    const { count: therapyHRS, ref: therapyHRSRef} =useCountUp(1563, 2500);
    const {count: ClientSatisfaction, ref: clientSatisfactionRef} = useCountUp(98, 3000);

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
    const testimonialsToShow = category ? groupedTestimonials[category] || [] : [];

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