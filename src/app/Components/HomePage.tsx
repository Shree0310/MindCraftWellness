"use client"

import Link from 'next/link';
import LandingPage from '../Assets/images/LandingPage.jpg'
import ProfilePic from '../Assets/images/Profile-pic.jpg';
import couch from '../Assets/images/Couch.jpg';
import AboutPage from '../Assets/images/AboutPage.jpg';
import Testimonials from './Testimonials/Testimonials';
import HowItWorks from './HowItWorks';
import Footer from './Footer';
import DiagWaveConnector from './SVGs/DiagWaveConnector';
import WhatMakesUsDiff from './WhatMakesUsDiff';
import { IconChevronRight } from '@tabler/icons-react';

const HomePage = () => {
    return (
        <div className='scroll-auto bg-[#F2E8DD] relative'>
            {/* Landing page section with text overlay */}
            <div className='relative'>
                {/* Decorative elements for landing page */}
                <div className="absolute top-20 left-10 opacity-15 z-10">
                    <div className="w-16 h-20 border border-white rounded-lg transform rotate-12"></div>
                </div>
                <div className="absolute top-32 right-16 opacity-12 z-10">
                    <div className="w-12 h-12 bg-white rounded-full"></div>
                </div>
                <div className="absolute bottom-32 left-20 opacity-10 z-10">
                    <svg className="w-20 h-8" viewBox="0 0 80 32" fill="none">
                        <path d="M0,16 Q20,8 40,16 T80,16" stroke="white" strokeWidth="1" fill="none" opacity="0.6" />
                    </svg>
                </div>
                <div className="absolute bottom-20 right-10 opacity-15 z-10">
                    <div className="w-14 h-18 bg-white rounded-lg transform -rotate-8"></div>
                </div>

                <img className='w-full h-auto' src={LandingPage.src} alt="Landing Page" />
            </div>
            {/* HERO SECTION - Life can be messy */}
            <div className='relative max-w-5xl mx-auto px-4 md:px-8 py-20 md:py-28'>
                <div className='text-left'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-10 text-[#2B231C]' style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                        Life can be messy. So can being human.
                    </h1>

                    <div className='space-y-6 text-lg md:text-xl leading-relaxed text-[#5C4B3C]' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                        <p>
                            To feel deeply. To struggle. To question yourself. To grieve. To feel anxious, angry, lonely, or uncertain - these aren&apos;t signs that something is wrong with you. They&apos;re part of being human.
                        </p>
                        <p>
                            We all find ways to protect ourselves from life&apos;s challenges. Sometimes those ways help us. Sometimes they leave us feeling stuck, overwhelmed, or disconnected.
                        </p>
                        <p>
                            If you&apos;ve been carrying something that feels too heavy to hold alone, therapy offers a space to slow down, make sense of your experience, and reconnect with yourself - with curiosity, compassion, and care.
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-[#B6724F] h-full w-full text-white relative overflow-hidden py-16 md:py-20'>
                {/* Hi, I'm Aishwaraya Section */}
                <div className="max-w-6xl mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Left side - Image */}
                        <div className="order-2 md:order-1 flex justify-center md:justify-start">
                            <div className="w-64 md:w-80 lg:w-96">
                                <img
                                    src={ProfilePic.src}
                                    alt="Aishwarya - Clinical Psychologist"
                                    className="w-full h-auto shadow-2xl"
                                    style={{ borderRadius: '50%', aspectRatio: '3/4', objectFit: 'cover' }}
                                />
                            </div>
                        </div>

                        {/* Right side - Text Content */}
                        <div className="order-1 md:order-2">
                            <h2 className='text-3xl md:text-4xl mb-6 text-white' style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                                Hi, I&apos;m Aishwaraya.
                            </h2>

                            <div className='space-y-6 text-lg md:text-xl leading-relaxed text-white/90' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                <p>
                                    I&apos;m a Clinical Psychologist based in Gurgaon, supporting adults aged 21+ since 2020. My work is grounded in trauma-informed care, with advanced trainings in AEDP (Level 2), CBT (Level 2), and a special interest in perinatal mental health.
                                </p>
                                <p>
                                    To me, therapy is about more than understanding your struggles. It&apos;s about having someone beside you as you move through them.
                                </p>
                                <p>
                                    What I aim to offer is a space where you feel deeply seen, gently challenged, and never alone in what you&apos;re carrying. My hope is that what we build together stays with you long after therapy comes to an end.
                                </p>
                            </div>

                            <div className='text-left block py-8'>
                                <Link href="/About">
                                    <button className="bg-white text-[#B6724F] text-sm rounded-full px-6 py-3 cursor-pointer shadow-lg hover:bg-[#FAF6F0] transition-all duration-300 transform hover:scale-105 uppercase tracking-wider" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500, letterSpacing: '0.08em' }}>
                                        Learn More About Me
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* MY APPROACH Section */}
            <div className="bg-[#E8DBC9] py-16 md:py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6">
                        <span className="eyebrow-label">MY APPROACH</span>
                    </div>

                    <h2 className='text-3xl md:text-4xl mb-10 text-[#2B231C]' style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                        Therapy that&apos;s practical about something deeply human.
                    </h2>

                    {/* Couch Image */}
                    <div className="mb-10">
                        <img
                            src={couch.src}
                            alt="Therapy couch at MindCraft Wellness"
                            className="w-full h-auto shadow-lg"
                            style={{ borderRadius: '16px', objectFit: 'cover' }}
                        />
                    </div>

                    <div className="space-y-6">
                        {/* We work toward what's underneath */}
                        <div className="bg-white border-l-4 border-[#95573A] p-6 shadow-md" style={{ borderRadius: '12px' }}>
                            <h3 className='text-2xl mb-3 text-[#2B231C]' style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                We work toward what&apos;s underneath
                            </h3>
                            <p className='text-lg leading-relaxed text-[#5C4B3C]' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                My approach is AEDP-oriented — we work toward the core emotional experience beneath the fears and defences that get in the way, because healing is already innate in us.
                            </p>
                        </div>

                        {/* We also work with thought patterns */}
                        <div className="bg-white border-l-4 border-[#95573A] p-6 shadow-md" style={{ borderRadius: '12px' }}>
                            <h3 className='text-2xl mb-3 text-[#2B231C]' style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                We also work with thought patterns
                            </h3>
                            <p className='text-lg leading-relaxed text-[#5C4B3C]' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                Where useful, I draw on CBT to work directly with the thoughts and behaviours keeping you stuck.
                            </p>
                        </div>

                        {/* Sessions are collaborative */}
                        <div className="bg-white border-l-4 border-[#95573A] p-6 shadow-md" style={{ borderRadius: '12px' }}>
                            <h3 className='text-2xl mb-3 text-[#2B231C]' style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Sessions are collaborative, not prescriptive
                            </h3>
                            <p className='text-lg leading-relaxed text-[#5C4B3C]' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                This isn&apos;t a doctor-patient process. At the end of each session, I ask what the experience was like for you — because your experience shapes how we work together.
                            </p>
                        </div>

                        {/* Pacing is led by safety */}
                        <div className="bg-white border-l-4 border-[#95573A] p-6 shadow-md" style={{ borderRadius: '12px' }}>
                            <h3 className='text-2xl mb-3 text-[#2B231C]' style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Pacing is led by safety
                            </h3>
                            <p className='text-lg leading-relaxed text-[#5C4B3C]' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                Every session is trauma-informed — meaning we move at a pace that respects your history and your nervous system, not a fixed agenda.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* WHAT I WORK WITH Section */}
            <div className="bg-[#FAF6F0] py-16 md:py-20 px-4 md:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="mb-8">
                        <span className="eyebrow-label">WHAT I WORK WITH</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl mb-10 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                        The human challenges I see most often.
                    </h2>

                    <div className="bg-white shadow-lg overflow-hidden" style={{ borderRadius: '16px' }}>
                        {/* Anxiety & overthinking */}
                        <div className="p-6 hover:bg-[#95573A] hover:text-white transition-all duration-300 group cursor-pointer">
                            <h3 className="text-xl mb-2 text-[#2B231C] group-hover:text-white transition-colors" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Anxiety & overthinking
                            </h3>
                            <p className="text-base text-[#5C4B3C] group-hover:text-white/90 transition-colors" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                Generalised anxiety, self-criticism, low confidence
                            </p>
                        </div>

                        <div className="border-t border-[#E8DBC9]"></div>

                        {/* Relationships */}
                        <div className="p-6 hover:bg-[#95573A] hover:text-white transition-all duration-300 group cursor-pointer">
                            <h3 className="text-xl mb-2 text-[#2B231C] group-hover:text-white transition-colors" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Relationships
                            </h3>
                            <p className="text-base text-[#5C4B3C] group-hover:text-white/90 transition-colors" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                Partners, parents, joint families, friendships
                            </p>
                        </div>

                        <div className="border-t border-[#E8DBC9]"></div>

                        {/* Perinatal mental health */}
                        <div className="p-6 hover:bg-[#95573A] hover:text-white transition-all duration-300 group cursor-pointer">
                            <h3 className="text-xl mb-2 text-[#2B231C] group-hover:text-white transition-colors" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Perinatal mental health
                            </h3>
                            <p className="text-base text-[#5C4B3C] group-hover:text-white/90 transition-colors" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                Pregnancy, postpartum, early parenthood
                            </p>
                        </div>

                        <div className="border-t border-[#E8DBC9]"></div>

                        {/* Life transitions */}
                        <div className="p-6 hover:bg-[#95573A] hover:text-white transition-all duration-300 group cursor-pointer">
                            <h3 className="text-xl mb-2 text-[#2B231C] group-hover:text-white transition-colors" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Life transitions
                            </h3>
                            <p className="text-base text-[#5C4B3C] group-hover:text-white/90 transition-colors" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                New cities, marriages, identity shifts
                            </p>
                        </div>

                        <div className="border-t border-[#E8DBC9]"></div>

                        {/* Low mood & burnout */}
                        <div className="p-6 hover:bg-[#95573A] hover:text-white transition-all duration-300 group cursor-pointer">
                            <h3 className="text-xl mb-2 text-[#2B231C] group-hover:text-white transition-colors" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Low mood & burnout
                            </h3>
                            <p className="text-base text-[#5C4B3C] group-hover:text-white/90 transition-colors" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                Depression, exhaustion, emotional flatness
                            </p>
                        </div>

                        <div className="border-t border-[#E8DBC9]"></div>

                        {/* Trauma */}
                        <div className="p-6 hover:bg-[#95573A] hover:text-white transition-all duration-300 group cursor-pointer">
                            <h3 className="text-xl mb-2 text-[#2B231C] group-hover:text-white transition-colors" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Trauma
                            </h3>
                            <p className="text-base text-[#5C4B3C] group-hover:text-white/90 transition-colors" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                Childhood neglect, relational and developmental trauma
                            </p>
                        </div>
                    </div>

                    <div className='text-left block py-8'>
                        <Link href="/what-we-work-with">
                            <button className="bg-[#B6724F] text-sm rounded-full text-white px-6 py-3 cursor-pointer shadow-lg hover:bg-[#95573A] transition-all duration-300 transform hover:scale-105 uppercase tracking-wider" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500, letterSpacing: '0.08em' }}>
                                See Everything I Work With
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Quote Image Section */}
            <div className="relative w-full overflow-hidden">
                {/* Background Image */}
                <img
                    src={AboutPage.src}
                    alt="Therapy session at MindCraft Wellness"
                    className="w-full h-auto object-cover"
                    style={{ minHeight: '400px', maxHeight: '600px', objectFit: 'cover' }}
                />

                {/* Translucent Overlay */}
                <div className="absolute inset-0 bg-[#B6724F]/70"></div>

                {/* Quote Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12">
                    <blockquote className="text-white text-2xl md:text-4xl lg:text-5xl mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300, fontStyle: 'italic' }}>
                        &ldquo;This is not a doctor-patient relation, it&apos;s a human one.&rdquo;
                    </blockquote>
                    <div className="text-white text-lg md:text-xl" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 400 }}>
                        — Aishwarya, MindCraft Wellness
                    </div>
                </div>
            </div>

            {/* What to Expect Section */}
            <div className="bg-[#E8DBC9] py-16 md:py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6">
                        <span className="eyebrow-label">WHAT TO EXPECT</span>
                    </div>

                    <h2 className='text-3xl md:text-4xl mb-8 text-[#2B231C]' style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                        Starting therapy can feel like a big step, so we&apos;ll begin with something simple.
                    </h2>

                    <div className='space-y-6 text-lg leading-relaxed text-[#5C4B3C]' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                        <p>
                            You can schedule a free 15-minute call where we&apos;ll briefly get to know one another, talk about what&apos;s bringing you here, and see whether it feels like the right fit. If I don&apos;t think I&apos;m the best person to support you, I&apos;ll be happy to recommend another therapist who may be a better match.
                        </p>
                        <p>
                            If we decide to move forward, we&apos;ll schedule our first therapy session (around 60 minutes). I&apos;ll ask questions to better understand your story, but it&apos;s also an opportunity for you to experience how I work, ask any questions you may have, and decide whether you&apos;d like us to continue working together.
                        </p>
                    </div>

                    <div className='text-left block py-8'>
                        <Link href="/book-now">
                            <button className="bg-[#B6724F] text-sm rounded-full text-white px-6 py-3 cursor-pointer shadow-lg hover:bg-[#95573A] transition-all duration-300 transform hover:scale-105 uppercase tracking-wider" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500, letterSpacing: '0.08em' }}>
                                Book a Free 15-Minute Call
                            </button>
                        </Link>
                    </div>

                    <p className='text-base text-[#5C4B3C]' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                        Not comfortable speaking on a call? That&apos;s completely okay. You&apos;re welcome to send me a WhatsApp message or an email instead, and we can begin there. You&apos;ll find my contact details on the booking page.
                    </p>
                </div>
            </div>

            <div className='bg-[#B6724F] h-full w-full text-white relative overflow-hidden py-12 md:py-16'>
                <Testimonials category='landing page' />
            </div>

            {/* Final CTA Section - Whenever you're ready */}
            <div className="bg-[#E8DBC9] py-16 md:py-20 px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className='text-3xl md:text-4xl mb-6 text-[#2B231C]' style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300, fontStyle: 'italic' }}>
                        Whenever you&apos;re ready.
                    </h2>

                    <div className='space-y-4 text-lg leading-relaxed text-[#5C4B3C] mb-8' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                        <p>
                            If something you&apos;ve read here resonated with you, I&apos;d be honoured to be part of your journey.
                        </p>
                        <p>
                            Whether you&apos;re ready to begin therapy or simply have a few questions, you&apos;re welcome to reach out.
                        </p>
                    </div>

                    <div className='text-center block py-4'>
                        <Link href="/book-now">
                            <button className="bg-[#B6724F] text-sm rounded-full text-white px-8 py-4 cursor-pointer shadow-lg hover:bg-[#95573A] transition-all duration-300 transform hover:scale-105 uppercase tracking-wider" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500, letterSpacing: '0.08em' }}>
                                Book a Free Consultation
                            </button>
                        </Link>
                    </div>

                    <div className='flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mt-8 text-base' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                        <Link href="/FAQs" className='text-[#B6724F] hover:text-[#95573A] transition-colors'>
                            Still have questions? → read our FAQs
                        </Link>
                        <Link href="/resources" className='text-[#B6724F] hover:text-[#95573A] transition-colors'>
                            Want to learn more? → explore our Resources
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default HomePage;
