"use client"

import Header from "./Header";
import Footer from "./Footer";
import OurValues from "./OurValues";
import Testimonials from "./Testimonials/Testimonials";
import Link from 'next/link';
import TakingTherapy from '../Assets/images/Taking-Therapy.jpg';
import OurSpace from '../Assets/images/ourSpace.png';
import Concerns from "./Concerns/Concerns";


const WhatWeWorkWith = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="bg-[#FFFADA] text-black w-full font-sans py-16 overflow-x-hidden flex-grow">
                <div className="max-w-7xl mx-auto px-8">
                    {/* Hero Quote Section */}
                    {/* Quote Section */}
                    <div className="py-20 px-8 mb-20">
                        <div className="max-w-4xl mx-auto">
                            <div className="bg-gradient-to-br from-[#345041] to-[#2a4033] rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
                                {/* Decorative element */}
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                                
                                <div className="relative z-10">
                                    <div className="text-6xl md:text-8xl text-[#E7CDBF] opacity-30 mb-4">&ldquo;</div>
                                    <blockquote className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8" style={{ fontFamily: 'Lora, serif' }}>
                                        We can&rsquo;t change the past but we can change the way the past lives in us.
                                    </blockquote>
                                    <div className="flex items-center justify-end">
                                        <div className="w-16 h-0.5 bg-[#E7CDBF] mr-4"></div>
                                        <p className="text-lg text-[#E7CDBF] font-medium" style={{ fontFamily: 'Lora, serif' }}>
                                            Maya Angelou
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* Introduction Section */}
                <div className="max-w-6xl mx-auto mb-20">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-3 mb-6">
                            <div className="w-12 h-0.5 bg-[#345041] opacity-30"></div>
                            <span className="text-sm font-semibold text-[#345041] uppercase tracking-wider">Our Approach</span>
                            <div className="w-12 h-0.5 bg-[#345041] opacity-30"></div>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-[#345041] mb-6" style={{ fontFamily: 'BodoniModa, serif' }}>
                            What We Support You Through
                        </h1>
                    </div>

                    {/* Content Container */}
                    <div className="space-y-12">
                        {/* Opening Paragraph */}
                        <div className="max-w-4xl mx-auto">
                            <p className="text-lg md:text-xl leading-relaxed text-gray-700 text-center" style={{ fontFamily: 'Lora, serif' }}>
                                Over the last five years, We have had the privilege of working with people through some of life&rsquo;s most challenging and transformative moments. Many clients come to therapy feeling stuck, overwhelmed, or unsure if what they&rsquo;re feeling is &ldquo;serious enough.&rdquo;
                            </p>
                        </div>
                        <div className="max-w-4xl mx-auto">
                            <div className="flex gap-6 items-start">
                                {/* Large quote mark on left */}
                                <div className="text-[120px] leading-none text-[#345041] opacity-20 font-serif">&ldquo;</div>
                                
                                <div className="flex-1">
                                    <blockquote className="text-2xl md:text-3xl font-medium text-[#345041] leading-relaxed mb-6" style={{ fontFamily: 'Lora, serif' }}>
                                        If you&rsquo;ve ever asked yourself, &lsquo;Do I really need therapy?&rsquo; - you are not alone.
                                    </blockquote>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-1 bg-[#345041] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image + Text Grid Section 1 */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="order-2 md:order-1">
                                <img
                                    src={TakingTherapy.src}
                                    alt="Taking Therapy"
                                    className="w-full h-[350px] object-cover rounded-2xl shadow-xl"
                                />
                            </div>
                            <div className="order-1 md:order-2 space-y-4">
                                <div className="inline-block bg-[#E7CDBF] px-4 py-2 rounded-full mb-4">
                                    <span className="text-sm font-semibold text-[#345041] uppercase tracking-wide">Our Philosophy</span>
                                </div>
                                <p className="text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Lora, serif' }}>
                                    Therapy isn&rsquo;t just for crises. It&rsquo;s for anyone wanting more clarity, ease, and emotional freedom in their life. Below we have created a short list of concerns we have worked with, this list is merely here to help you explore &amp; identify your experience.
                                </p>
                            </div>
                        </div>

                        {/* Image + Text Grid Section 2 */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="space-y-4">
                                <div className="inline-block bg-[#E7CDBF] px-4 py-2 rounded-full mb-4">
                                    <span className="text-sm font-semibold text-[#345041] uppercase tracking-wide">Understanding Your Experience</span>
                                </div>
                                <p className="text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Lora, serif' }}>
                                    If you find yourself being reflected behind these phrases and experiences, this is not a diagnosis; it is just an explorative understanding of what you might be dealing with and how we intend to support you through it. Please note that even though some of these can be categorised as mental health disorders, they are still human experiences.
                                </p>
                            </div>
                            <div>
                                <img
                                    src={OurSpace.src}
                                    alt="Our Space"
                                    className="w-full h-[350px] object-cover rounded-2xl shadow-xl"
                                />
                            </div>
                        </div>

                        {/* Highlighted Box for Key Message */}
                        <div className="bg-gradient-to-r from-[#f8f6f4] to-[#E7CDBF] rounded-2xl p-8 md:p-10 border-l-4 border-[#345041]">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#345041] flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-2xl">💚</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#345041] mb-3" style={{ fontFamily: 'Lora, serif' }}>
                                        A Compassionate Perspective
                                    </h3>
                                    <p className="text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Lora, serif' }}>
                                        We as human beings are vulnerable to illnesses, calamities, accidents, and we are also vulnerable to heartbreaks, grief, and stressors of all kinds. Having our own (symptomatic) reactions to them is an expression of our survival instinct kicking in. Therapy becomes a place where we safely & compassionately explore them to untangle from the imprint things have left on us, therefore this process will look and feel different for every individual.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                    {/* Concern Sections */}
                    <Concerns/>

                    {/* Closing Section */}
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="bg-gradient-to-r from-[#f8f6f4] to-[#E7CDBF] rounded-3xl p-8">
                            <p className="text-lg leading-relaxed mb-6" style={{ fontFamily: 'Lora, serif' }}>
                                This list has only attempted to cover some of the different human experiences within these labels, but that doesn&apos;t mean that this is all there. Because being human, means that there is much more individualistic variation and humanness in how we experience things and express things, much beyond the labels.
                            </p>
                            <p className="text-xl font-semibold text-[#345041] mb-8" style={{ fontFamily: 'Lora, serif' }}>
                                If any of this sounds like what you&apos;ve been feeling, you&apos;re not alone and you don&apos;t have to navigate it by yourself.
                            </p>
                            <Link href="/book-now" className="bg-[#345041] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#2a4033] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Book a discovery call →
                            </Link>
                        </div>
                    </div>

                    {/* Our Values Section */}
                    <OurValues />

                    {/* Testimonials Section */}
                    <Testimonials category="specialities"/>

                    {/* Final Call to Action */}
                    <div className="text-center mt-16">
                        <Link href="/book-now" className="bg-[#345041] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#2a4033] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Book a discovery call →
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default WhatWeWorkWith;
