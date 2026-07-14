'use client'
import React from 'react';
import Image from 'next/image';
import { cn } from "../../lib/utils";
import HowMCWWorks from '../Assets/images/HowItWorks.jpg';

const HowItWorks = ({className, children}:{
    className?: string,
    children?: React.ReactNode
}) => {
    return <div className={cn("w-full", className)}>
        {children}
        {/* Quote Section */}
        <div className="bg-[#F2E8DD] py-20 px-8">
            <div className="max-w-5xl mx-auto text-center">
                <div className="bg-[#FAF6F0] p-12 shadow-lg" style={{ borderRadius: '20px' }}>
                    <div className="mb-6">
                        <svg className="w-12 h-12 text-[#B6724F] mx-auto" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                        </svg>
                    </div>
                    <blockquote className="text-2xl md:text-3xl text-[#2B231C] leading-relaxed mb-6" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300, fontStyle: 'italic' }}>
                        &ldquo;There is no greater agony than bearing an untold story inside you.&rdquo;
                        {/* Author attribution */}
                        <div className='flex items-center justify-center space-x-2 md:space-x-3'>
                            <div className='w-1 h-6 md:h-8 bg-[#B6724F] rounded-full mt-6'></div>
                            <span className='text-base md:text-lg text-[#5C4B3C] mt-6' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 400, fontStyle: 'normal' }}>
                                — Maya Angelou
                            </span>
                            <div className='w-1 h-6 md:h-8 bg-[#B6724F] rounded-full mt-6'></div>
                        </div>
                    </blockquote>
                    <div className="w-24 h-1 bg-[#B6724F] mx-auto rounded-full"></div>
                </div>
            </div>
        </div>

        <div className="py-16 px-8 relative">
            {/* Decorative elements for How it Works */}
            <div className="absolute top-28 right-16 opacity-15">
                <div className="w-12 h-12 bg-[#B6724F] rounded-full shadow-lg"></div>
            </div>
            <div className="absolute bottom-12 top-10 left-8 opacity-18">
                <svg className="w-20 h-8" viewBox="0 0 80 32" fill="none">
                    <path d="M0,16 Q20,8 40,16 T80,16" stroke="#B6724F" strokeWidth="1.5" fill="none" opacity="0.6" />
                </svg>
            </div>
            <div className="absolute bottom-8 right-12 opacity-15">
                <div className="w-14 h-18 bg-[#95573A] rounded-lg transform -rotate-8 shadow-lg"></div>
            </div>
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left side - Image placeholder */}

                    {/* Right side - How it works */}
                    <div>
                        <h2 className="md:text-4xl text-2xl text-[#2B231C] mb-8" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                            <p>{"How Mind Craft Wellness works"}</p>
                        </h2>

                        <div className="space-y-6">
                            {/* Step 1 */}
                            <div className="bg-[#FAF6F0] md:p-6 p-2 border border-[#E8DBC9] shadow-sm hover:shadow-md transition-shadow duration-300 md:w-full w-[350px]" style={{ borderRadius: '16px' }}>
                                <div className="flex items-start">
                                    <div className="md:text-5xl text-2xl text-[#B6724F] md:mr-6 mr-2 leading-none" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>1</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl text-[#2B231C] md:mb-3 mb-1" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}><p>{"Schedule a Free Consultation"}</p></h3>
                                        <p className="text-[#5C4B3C] leading-relaxed text-sm" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                            Book your free 15-minute consultation call. We&rsquo;ll discuss your concerns, answer questions, and explore how we can support your healing journey. No pressure, just a friendly conversation to see if we&rsquo;re the right fit.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-[#FAF6F0] md:p-6 p-2 border border-[#E8DBC9] shadow-sm hover:shadow-md transition-shadow duration-300 md:w-full w-[350px]" style={{ borderRadius: '16px' }}>
                                <div className="flex items-start">
                                    <div className="md:text-5xl text-2xl text-[#B6724F] md:mr-6 mr-2 leading-none" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>2</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl text-[#2B231C] md:mb-3 mb-1" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}><p>{"Get Matched with Your Therapist"}</p></h3>
                                        <p className="text-[#5C4B3C] leading-relaxed text-sm" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                            Based on your needs, preferences, and goals, we&rsquo;ll match you with the therapist who&rsquo;s best suited to support you. Our team includes specialists in trauma, anxiety, relationships, and more.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-[#FAF6F0] md:p-6 p-2 border border-[#E8DBC9] shadow-sm hover:shadow-md transition-shadow duration-300 md:w-full w-[350px]" style={{ borderRadius: '16px' }}>
                                <div className="flex items-start">
                                    <div className="md:text-5xl text-2xl text-[#B6724F] md:mr-6 mr-2 leading-none" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>3</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl text-[#2B231C] md:mb-3 mb-1" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}><p>{"Begin Your Healing Journey"}</p></h3>
                                        <p className="text-[#5C4B3C] leading-relaxed text-sm" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                            Start your therapy sessions at our welcoming Gurgaon clinic or online. Sessions are 60 minutes, starting at ₹1500, with fees varying by therapist specialization and experience.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="bg-[#FAF6F0] md:p-6 p-2 border border-[#E8DBC9] shadow-sm hover:shadow-md transition-shadow duration-300 md:w-full w-[350px]" style={{ borderRadius: '16px' }}>
                                <div className="flex items-start">
                                    <div className="md:text-5xl text-2xl text-[#B6724F] md:mr-6 mr-2 leading-none" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>4</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl text-[#2B231C] md:mb-3 mb-1" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}><p>{"Switch Therapists Anytime"}</p></h3>
                                        <p className="text-[#5C4B3C] leading-relaxed text-sm" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                            If your first therapist isn&rsquo;t the right fit, it&rsquo;s easy to switch to another member of our team at no additional cost. Your comfort and connection with your therapist is our priority.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative md:mt-24 mt-12">
                        <div className="rounded-lg max-h-[650px] w-[552px] overflow-hidden">
                            <Image src={HowMCWWorks} className='md:w-full max-w-[350px] md:max-w-[552px]  h-full object-cover rotate-180' alt="Therapy session" loading="lazy" placeholder="blur" sizes="(max-width: 768px) 350px, 552px" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default HowItWorks;