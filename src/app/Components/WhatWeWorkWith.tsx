"use client"

import Header from "./Header";
import Footer from "./Footer";
import OurValues from "./OurValues";
import Testimonials from "./Testimonials/Testimonials";
import Link from 'next/link';
import TakingTherapy from '../Assets/images/Taking-Therapy.jpg';
import OurSpace from '../Assets/images/ourSpace.png';
import Concerns from "./Concerns/Concerns";
import { useState } from "react";


const WhatWeWorkWith = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-[#F2E8DD]">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {/* Blur the whole homepage when menu is open */}
            <div
                className={`${
                isMenuOpen
                    ? "filter blur-sm pointer-events-none transition-filter duration-300"
                    : "transition-filter duration-300"
                }`}
            >
            <div className="w-full flex-grow">

                {/* Hero Quote Section */}
                <div className="bg-[#F2E8DD] py-16 md:py-20 px-4 md:px-8">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="mb-6">
                            <svg className="w-16 h-16 text-[#B6724F] mx-auto opacity-40" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                            </svg>
                        </div>
                        <blockquote className="text-2xl md:text-3xl lg:text-4xl text-[#5C4B3C] leading-relaxed mb-8" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300, fontStyle: 'italic' }}>
                            &ldquo;We can&rsquo;t change the past but we can change the way the past lives in us.&rdquo;
                        </blockquote>
                        <div className="flex items-center justify-center space-x-4">
                            <div className="w-16 h-0.5 bg-[#B6724F] opacity-40"></div>
                            <p className="text-base md:text-lg text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 400 }}>
                                Maya Angelou
                            </p>
                            <div className="w-16 h-0.5 bg-[#B6724F] opacity-40"></div>
                        </div>
                    </div>
                </div>

                {/* Introduction Section */}
                <div className="bg-[#E8DBC9] py-16 md:py-20 px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="text-center mb-12 md:mb-16">
                            <div className="inline-flex items-center space-x-3 mb-6">
                                <div className="w-8 md:w-12 h-0.5 bg-[#B6724F] opacity-40"></div>
                                <span className="eyebrow-label">OUR APPROACH</span>
                                <div className="w-8 md:w-12 h-0.5 bg-[#B6724F] opacity-40"></div>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8 px-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300, color: '#5C4B3C' }}>
                                What We Support You Through
                            </h1>
                            <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto px-4" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, color: '#5C4B3C' }}>
                                Over the last five years, I have had the privilege of working with people through some of life&rsquo;s most challenging and transformative moments. Many clients come to therapy feeling stuck, overwhelmed, or unsure if what they&rsquo;re feeling is &ldquo;serious enough.&rdquo;
                            </p>
                        </div>

                        {/* Pull Quote - no box */}
                        <div className="max-w-4xl mx-auto mb-16 px-4 border-l-4 border-[#B6724F] pl-6 md:pl-8">
                            <blockquote className="text-2xl md:text-3xl leading-relaxed" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300, fontStyle: 'italic', color: '#5C4B3C' }}>
                                If you&rsquo;ve ever asked yourself, &lsquo;Do I really need therapy?&rsquo; — you are not alone.
                            </blockquote>
                        </div>

                        {/* Image + Text Grid Section 1 */}
                        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-16">
                            <div className="order-2 md:order-1">
                                <img
                                    src={TakingTherapy.src}
                                    alt="Taking Therapy"
                                    className="w-full h-[350px] md:h-[450px] object-cover shadow-lg"
                                    style={{ borderRadius: '20px' }}
                                />
                            </div>
                            <div className="order-1 md:order-2 space-y-6 px-4">
                                <div className="mb-2">
                                    <span className="eyebrow-label">OUR PHILOSOPHY</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300, color: '#5C4B3C' }}>
                                    Therapy isn&rsquo;t just for crises
                                </h2>
                                <p className="text-lg leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, color: '#5C4B3C' }}>
                                    It&rsquo;s for anyone wanting more clarity, ease, and emotional freedom in their life. Below we have created a short list of concerns we have worked with — this list is merely here to help you explore and identify your experience.
                                </p>
                            </div>
                        </div>

                        {/* Image + Text Grid Section 2 */}
                        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-16">
                            <div className="space-y-6 px-4">
                                <div className="mb-2">
                                    <span className="eyebrow-label">UNDERSTANDING YOUR EXPERIENCE</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300, color: '#5C4B3C' }}>
                                    These are human experiences
                                </h2>
                                <p className="text-lg leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, color: '#5C4B3C' }}>
                                    If you find yourself reflected in these phrases and experiences, this is not a diagnosis; it is just an explorative understanding of what you might be dealing with and how we intend to support you through it.
                                </p>
                            </div>
                            <div>
                                <img
                                    src={OurSpace.src}
                                    alt="Our Space"
                                    className="w-full h-[350px] md:h-[450px] object-cover shadow-lg"
                                    style={{ borderRadius: '20px' }}
                                />
                            </div>
                        </div>

                        {/* Key Message - simplified, no box */}
                        <div className="max-w-4xl mx-auto px-4 py-8 border-l-4 border-[#95573A] pl-6 md:pl-8 mb-16">
                            <h3 className="text-xl md:text-2xl mb-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400, color: '#5C4B3C' }}>
                                A Compassionate Perspective
                            </h3>
                            <p className="text-lg leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, color: '#5C4B3C' }}>
                                We as human beings are vulnerable to illnesses, calamities, accidents, and we are also vulnerable to heartbreaks, grief, and stressors of all kinds. Having our own (symptomatic) reactions to them is an expression of our survival instinct kicking in. Therapy becomes a place where we safely and compassionately explore them to untangle from the imprint things have left on us.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Concern Sections */}
                <div className="bg-[#F2E8DD]">
                    <Concerns/>
                </div>

                {/* Closing Section - simplified */}
                <div className="bg-[#E8DBC9] py-16 md:py-20 px-4 md:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-lg md:text-xl leading-relaxed mb-8 px-4" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, color: '#5C4B3C' }}>
                            This list has only attempted to cover some of the different human experiences within these labels, but that doesn&apos;t mean that this is all there is. Because being human means that there is much more individualistic variation and humanness in how we experience things and express things, much beyond the labels.
                        </p>
                        <p className="text-2xl md:text-3xl mb-10 px-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300, fontStyle: 'italic', color: '#5C4B3C' }}>
                            If any of this sounds like what you&apos;ve been feeling, you&apos;re not alone.
                        </p>
                        <Link href="/book-now">
                            <button className="bg-[#B6724F] text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-base hover:bg-[#95573A] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase tracking-wider" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500, letterSpacing: '0.08em' }}>
                                Book a Free Consultation
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Our Values Section */}
                <div className="bg-[#F2E8DD]">
                    <OurValues />
                </div>

                {/* Testimonials Section */}
                <div className="bg-[#95573A] py-16 md:py-20">
                    <Testimonials category="specialities"/>
                </div>

                {/* Final Call to Action */}
                <div className="bg-[#E8DBC9] text-center py-16 px-4">
                    <Link href="/book-now">
                        <button className="bg-[#B6724F] text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-sm md:text-base hover:bg-[#95573A] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl uppercase tracking-wider" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500, letterSpacing: '0.08em' }}>
                            Book a Free Consultation
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
        </div>
    );
};

export default WhatWeWorkWith;
