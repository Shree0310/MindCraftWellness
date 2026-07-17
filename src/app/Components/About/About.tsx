
"use client"
// import Link from 'next/link';
import Header from "../Header";
import Image from 'next/image';
import AboutPageBanner from '../../Assets/images/AboutPageBanner.png'
import AboutImg1 from '../../Assets/images/About2.png'
import AboutImg2 from '../../Assets/images/About 5.png'
import ProfilePic from '../../Assets/images/Profile-pic2.jpg';
import Books from '../../Assets/images/AboutPage.jpg';
import Testimonials from '../Testimonials/Testimonials';
import BookFreeConsultationBtn from '../BookFreeConsulationBtn';
import { useState } from 'react';
import Footer from '../Footer';
import DiagWaveConnector from "../SVGs/DiagWaveConnector";
import OurStoryOurSpace from "./OurStoryOurSpace";

const About = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                {/* Blur the whole homepage when menu is open */}
                <div
                    className={`${
                    isMenuOpen
                        ? "filter blur-sm pointer-events-none transition-filter duration-300"
                        : "transition-filter duration-300"
                    }`}
                >
            <div className="bg-[#F2E8DD] text-black w-full font-sans py-16 md:py-20 overflow-x-hidden flex-grow">
                {/* Opening Section */}
                <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 md:mb-20">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                        {/* Left side - Text content */}
                        <div className="space-y-6 md:space-y-8 order-last lg:order-1">
                            <p className="text-lg md:text-xl leading-relaxed px-4 md:px-0 text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                At Mind Craft Wellness, we believe in the power of authentic human connection and the transformative potential of a safe, nurturing therapeutic relationship. Our approach is rooted in the understanding that healing happens within the context of genuine care and understanding.
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed px-4 md:px-0 text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                We are committed to creating a space where you feel truly seen, heard, and supported on your journey toward greater self-awareness, healing, and growth.
                            </p>
                        </div>

                        {/* Right side - Illustration */}
                        <div className="ml-0 lg:ml-24 relative order-first lg:order-2">
                            <div className="relative flex justify-center lg:justify-start">
                                <Image
                                    src={AboutPageBanner}
                                    alt="About Mind Craft Wellness"
                                    className="w-[380px] md:w-[450px] h-[380px] md:h-[450px] object-cover lg:mt-12 shadow-xs"
                                    style={{ borderRadius: '20px', filter: 'blur(1px) brightness(0.95)' }}
                                    loading="lazy"
                                    placeholder="blur"
                                    sizes="(max-width: 768px) 380px, 450px"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* My Story Section */}
                <div className='bg-[#E8DBC9] w-full py-16 md:py-20'>
                    <div className="max-w-6xl mx-auto px-4 md:px-8">
                        <div className="text-center mb-12 md:mb-16">
                            <div className="inline-flex items-center space-x-3 mb-6">
                                <div className="w-8 md:w-12 h-0.5 bg-[#B6724F] opacity-40"></div>
                                <span className="eyebrow-label">MEET AISHWARYA</span>
                                <div className="w-8 md:w-12 h-0.5 bg-[#B6724F] opacity-40"></div>
                            </div>
                            <h1 className='text-3xl md:text-4xl lg:text-5xl text-[#5C4B3C] mb-6' style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                                My Story
                            </h1>
                        </div>

                        <div className='flex flex-col justify-center items-center gap-12 md:gap-16 mx-auto max-w-6xl relative'>
                            <div className="flex flex-col md:grid md:grid-cols-2 gap-4 items-start w-full">
                                <div className='relative w-full max-w-[400px] h-[450px] md:h-[500px] mx-auto md:mx-0 order-first md:order-1'>
                                    <Image src={ProfilePic} className='w-full h-full object-cover shadow-lg' style={{ borderRadius: '20px' }} alt="Aishwaraya Goud - Founder of Mind Craft Wellness" loading="lazy" placeholder="blur" sizes="(max-width: 768px) 100vw, 400px" />
                                </div>
                                <div className='space-y-6 order-last md:order-2'>
                                    <p className='text-2xl md:text-3xl text-[#5C4B3C] leading-relaxed' style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                                        A therapist who believes healing is already <span style={{ color: '#B6724F' }}>within you.</span>
                                    </p>
                                    <p className='text-xl md:text-2xl text-[#5C4B3C] italic' style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                                        I came to this work through my own experience of feeling unseen.
                                    </p>
                                    <p className='text-base md:text-lg text-left text-[#5C4B3C]' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                        My path into therapy began with my own search for understanding, a search that showed me how deeply we all long to be truly seen, heard, and supported. Those experiences continue to shape how I sit with others: with warmth, curiosity, and deep respect for each person&apos;s pace.
                                    </p>
                                    <p className='text-base md:text-lg text-left text-[#5C4B3C]' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                        I work with adults navigating trauma, relationship difficulties, identity questions, anxiety, burnout, and the emotional challenges of the perinatal period - conception, pregnancy, and postpartum.
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
                                <div className='space-y-6 order-2 md:order-1'>
                                    <p className='text-base md:text-lg text-left text-[#5C4B3C]' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                        My approach is not about fixing you. It&apos;s about creating a safe, collaborative space where you can listen to yourself, gain clarity, and move toward the life you want.
                                    </p>
                                    <p className='text-base md:text-lg text-left text-[#5C4B3C]' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                        Clients often tell me that working with me feels steady and supportive — less like treatment, more like being accompanied through difficult terrain.
                                    </p>
                                    <p className='text-base md:text-lg text-left text-[#5C4B3C]' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                        Outside the therapy room, I love reading, tending to my plants, exploring food and music, and planning my next beach trip.
                                    </p>
                                </div>
                                <Image src={Books} className='w-full max-w-[400px] h-[450px] md:h-[500px] object-cover mx-auto md:mx-0 shadow-lg order-1 md:order-2' style={{ borderRadius: '20px' }} alt="Aishwaraya Goud - Books in her space" loading="lazy" placeholder="blur" sizes="(max-width: 768px) 100vw, 400px" />
                            </div>
                        </div>
                    </div>

                    <DiagWaveConnector/>

                    {/* My Orientation Section */}
                    <div className="max-w-5xl mx-auto px-4 md:px-8 mt-16 md:mt-20">
                        <div className="text-center mb-12 md:mb-16">
                            <h2 className="text-3xl md:text-4xl text-[#5C4B3C] mb-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                                My Orientation
                            </h2>
                        </div>
                        <div className="space-y-8">
                            <div className="bg-[#F2E8DD] p-6 md:p-8 rounded-2xl">
                                <p className='text-base md:text-lg text-[#5C4B3C]' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                    My work is rooted in <strong style={{ fontWeight: 500 }}>AEDP - Accelerated Experiential Dynamic Psychotherapy</strong>. In practice, that means we focus on reaching the emotional experience underneath your thoughts, not just talking about what happened.
                                </p>
                            </div>
                            <div className="bg-[#F2E8DD] p-6 md:p-8 rounded-2xl">
                                <p className='text-base md:text-lg text-[#5C4B3C]' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                    Where useful, I draw on <strong style={{ fontWeight: 500 }}>CBT</strong> to work directly with thought patterns and behaviours that keep you stuck.
                                </p>
                            </div>
                            <div className="bg-[#F2E8DD] p-6 md:p-8 rounded-2xl">
                                <p className='text-base md:text-lg text-[#5C4B3C]' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                    Every session is <strong style={{ fontWeight: 500 }}>trauma-informed</strong>, meaning that it is paced around safety, never around a fixed agenda.
                                </p>
                            </div>
                        </div>
                    </div>

                    <DiagWaveConnector/>

                    {/* Education & Certifications Section */}
                    <div className="mt-12 md:mt-16 mb-8 md:mb-12 px-4 md:px-8">
                        <div className="text-center mb-8 md:mb-12">
                            <div className="inline-flex items-center space-x-3 mb-6">
                                <div className="w-8 md:w-12 h-0.5 bg-[#B6724F] opacity-40"></div>
                                <span className="eyebrow-label">CREDENTIALS</span>
                                <div className="w-8 md:w-12 h-0.5 bg-[#B6724F] opacity-40"></div>
                            </div>
                            <h2 className="text-3xl md:text-4xl text-[#5C4B3C] mb-6" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                                Education & Certifications
                            </h2>
                            <p className="text-base md:text-lg text-[#5C4B3C] max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                Every certification below reflects a deliberate commitment - to keep learning, stay current, and bring the best of evidence-based practice into every session.
                            </p>
                        </div>
                            <div className="max-w-4xl mx-auto">
                                <ul className="space-y-6">
                                    <li className="flex items-start space-x-4 md:space-x-6">
                                        <div className="w-3 h-3 bg-[#B6724F] rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <span className="text-lg md:text-xl text-[#5C4B3C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>Professional Diploma in Clinical Psychology</span>
                                            <p className="text-base md:text-lg text-[#5C4B3C] mt-1" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>SGT University, Gurgaon</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start space-x-4 md:space-x-6">
                                        <div className="w-3 h-3 bg-[#B6724F] rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <span className="text-lg md:text-xl text-[#5C4B3C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>MSc. in Counselling Psychology</span>
                                            <p className="text-base md:text-lg text-[#5C4B3C] mt-1" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>Sampurna Montfort College, Bangalore</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start space-x-4 md:space-x-6">
                                        <div className="w-3 h-3 bg-[#B6724F] rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <span className="text-lg md:text-xl text-[#5C4B3C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>Bachelors of Arts in Psychology, Sociology, and English</span>
                                            <p className="text-base md:text-lg text-[#5C4B3C] mt-1" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>Christ University, Bangalore</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Additional Certifications & Trainings Section */}
                        <div className="mb-16 md:mb-20 px-4">
                            <div className="text-center mb-8 md:mb-12">
                                <h2 className="text-3xl md:text-4xl text-[#5C4B3C] px-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                                    Additional Certifications & Trainings
                                </h2>
                                <div className="w-16 h-0.5 bg-[#B6724F] mx-auto mt-6 opacity-40"></div>
                            </div>
                            <div className="max-w-5xl mx-auto">
                                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-3 h-3 bg-[#B6724F] rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <span className="text-lg text-[#5C4B3C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>Essential Skills Course</span>
                                                <p className="text-base text-[#5C4B3C] mt-1" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>AEDP Institute, New York (June 2025 to February 2026)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="w-3 h-3 bg-[#B6724F] rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <span className="text-lg text-[#5C4B3C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>AEDP Immersion</span>
                                                <p className="text-base text-[#5C4B3C] mt-1" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>AEDP Institute, New York (August, 2024)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="w-3 h-3 bg-[#B6724F] rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <span className="text-lg text-[#5C4B3C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>Trauma Informed Approach Workshop</span>
                                                <p className="text-base text-[#5C4B3C] mt-1" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>12-Hours online workshop by Syam K Ravindran (February, 2023)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="w-3 h-3 bg-[#B6724F] rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <span className="text-lg text-[#5C4B3C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>CBT for Personality Disorders</span>
                                                <p className="text-base text-[#5C4B3C] mt-1" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>Beck Institute, Pennsylvania (2022)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="w-3 h-3 bg-[#B6724F] rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <span className="text-lg text-[#5C4B3C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>Essentials of CBT</span>
                                                <p className="text-base text-[#5C4B3C] mt-1" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>Beck Institute, Pennsylvania (2021)</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-3 h-3 bg-[#B6724F] rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <span className="text-lg text-[#5C4B3C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>CBT for Anxiety Disorders</span>
                                                <p className="text-base text-[#5C4B3C] mt-1" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>Beck Institute, Pennsylvania (2021)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="w-3 h-3 bg-[#B6724F] rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <span className="text-lg text-[#5C4B3C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>CBT for Depression</span>
                                                <p className="text-base text-[#5C4B3C] mt-1" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>Beck Institute, Pennsylvania (2021)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="w-3 h-3 bg-[#B6724F] rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <span className="text-lg text-[#5C4B3C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>Maternal Mental Health</span>
                                                <p className="text-base text-[#5C4B3C] mt-1" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>Postpartum Support International (2020-2021)</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4">
                                            <div className="w-3 h-3 bg-[#B6724F] rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <span className="text-lg text-[#5C4B3C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>Perinatal Mental Health</span>
                                                <p className="text-base text-[#5C4B3C] mt-1" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>NIMHANS, India (June – July 2022)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* The Space Section - Our Story, Our Space */}
                <OurStoryOurSpace/>

                <Testimonials category="about us" />

                {/* Whenever You're Ready Section */}
                <div className="bg-[#E8DBC9] py-16 md:py-20 px-4 md:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl text-[#5C4B3C] mb-6" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300, fontStyle: 'italic' }}>
                            Whenever you&apos;re ready.
                        </h2>
                        <p className="text-base md:text-lg text-[#5C4B3C] mb-4" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                            If something you&apos;ve read here resonated with you, I&apos;d be honoured to be part of your journey.
                        </p>
                        <p className="text-base md:text-lg text-[#5C4B3C] mb-8" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                            Whether you&apos;re ready to begin therapy or simply have a few questions, you&apos;re welcome to reach out.
                        </p>
                        <BookFreeConsultationBtn />
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 text-sm md:text-base text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                            <a href="/FAQs" className="hover:text-[#B6724F] transition-colors duration-300">
                                Still have questions? → read our FAQs
                            </a>
                        </div>
                    </div>
                </div>


                <Footer />
            </div>
        </div>
    )
}

export default About;