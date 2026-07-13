
"use client"
// import Link from 'next/link';
import Header from "../Header";
import AboutImg from '../../Assets/images/About.png'
import AboutImg1 from '../../Assets/images/About2.png'
import AboutImg2 from '../../Assets/images/About 5.png'
import ProfilePic from '../../Assets/images/Profile-pic2.jpg';
import Books from '../../Assets/images/AboutPage.jpg';
import Testimonials from '../Testimonials/Testimonials';
import BookFreeConsultationBtn from '../BookFreeConsulationBtn';
import { useState } from 'react';
import Footer from '../Footer';
import OurValues from '../OurValues';
import DiagWaveConnector from "../SVGs/DiagWaveConnector";
import OurStoryOurSpace from "./OurStoryOurSpace";

const About = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);



    // const goToImage = (index: number) => {
    //     setCurrentImageIndex(index);
    // };

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
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
                        {/* Left side - Text content */}
                        <div className="space-y-6 md:space-y-8 order-last lg:order-1">
                            <blockquote className="text-xl md:text-2xl leading-relaxed px-4 md:px-0 text-[#5C4B3C] border-l-4 border-[#B6724F] pl-6 md:pl-8" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300, fontStyle: 'italic' }}>
                                &ldquo;In my early professional years I was asking the question: How can I treat, or cure, or change this person?
                                Now I would phrase the question in this way:
                                <span style={{ fontWeight: 400 }}> How can I provide a relationship which this person may use for his own personal growth?&rdquo;</span>
                            </blockquote>
                            <div className="flex items-center space-x-4 px-4 md:px-0 md:pl-8">
                                <div className="w-12 h-0.5 bg-[#B6724F] opacity-40"></div>
                                <p className="text-base text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 400 }}>
                                    Carl Rogers
                                </p>
                            </div>
                            <p className="text-lg md:text-xl leading-relaxed px-4 md:px-0 text-[#5C4B3C] pt-4" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                At Mind Craft Wellness, we believe in the power of authentic human connection and the transformative potential of a safe,
                                nurturing therapeutic relationship. Our approach is rooted in the understanding that healing happens within the context
                                of genuine care and understanding.
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed px-4 md:px-0 text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                We are committed to creating a space where you feel truly seen, heard, and supported on your journey toward
                                greater self-awareness, healing, and growth.
                            </p>
                            <div className='flex justify-center lg:justify-start mb-6 md:mb-10 px-4 md:px-0'>
                                <BookFreeConsultationBtn />
                            </div>
                        </div>

                        {/* Right side - Images */}
                        <div className="ml-0 lg:ml-24 relative order-first lg:order-2">
                            {/* Large background image */}
                            <div className="relative flex justify-center lg:justify-start">
                                <img
                                    src={AboutImg.src}
                                    alt="About Mind Craft Wellness"
                                    className="w-[280px] md:w-[330px] h-[280px] md:h-[330px] object-cover lg:mt-24 shadow-lg"
                                    style={{ borderRadius: '20px' }}
                                />

                                {/* Two smaller images positioned on top */}

                                <div className="absolute -top-3 md:-top-6 right-1 md:right-2 mr-24 md:mr-48">
                                    <img
                                        src={AboutImg2.src}
                                        alt="Wellness space"
                                        className="w-20 md:w-24 h-12 md:h-16 object-cover transform -rotate-6 shadow-lg"
                                        style={{ borderRadius: '12px' }}
                                    />
                                </div>
                                <div className="absolute -top-4 md:-top-8 -left-4 md:-left-8">
                                    <img
                                        src={AboutImg1.src}
                                        alt="Therapy session"
                                        className="w-36 md:w-48 h-24 md:h-32 object-cover transform -rotate-6 shadow-lg"
                                        style={{ borderRadius: '16px' }}
                                    />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='bg-[#E8DBC9] w-full py-16 md:py-20'>
                        <div className="text-center mb-12 md:mb-16">
                            <div className="inline-flex items-center space-x-3 mb-6">
                                <div className="w-8 md:w-12 h-0.5 bg-[#B6724F] opacity-40"></div>
                                <span className="eyebrow-label">MEET THE FOUNDER</span>
                                <div className="w-8 md:w-12 h-0.5 bg-[#B6724F] opacity-40"></div>
                            </div>
                            <h1 className='text-3xl md:text-4xl lg:text-5xl pb-4 text-center text-[#5C4B3C] px-4' style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                                Hi, I&apos;m Aishwaraya Goud
                            </h1>
                            <p className='text-lg md:text-xl text-center text-[#5C4B3C] block px-4' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                Founder of Mind Craft Wellness,<br />
                                and a certified AEDP and CBT therapist based in Gurgaon.
                            </p>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-12 md:gap-16 mx-auto max-w-6xl px-4 relative'>
                            <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
                                <div className='relative w-full max-w-[400px] h-[450px] md:h-[500px] mx-auto md:mx-0 order-first md:order-1'>
                                    <img src={ProfilePic.src} className='w-full h-full object-cover shadow-lg' style={{ borderRadius: '20px' }} alt="Aishwaraya Goud - Founder of Mind Craft Wellness" />
                                </div>
                                <div className='space-y-6 order-last md:order-2'>
                                    <p className='text-base md:text-lg text-left text-[#5C4B3C]' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                        Hi, I&apos;m Aishwarya, a trauma-informed therapist based in Gurgaon. My path into this work began with my own search for healing, which showed me how deeply we all long to be seen, understood, and supported.
                                        Those experiences continue to shape how I sit with others—with warmth, curiosity, and respect for each person&apos;s pace.
                                    </p>
                                    <p className='text-base md:text-lg text-left text-[#5C4B3C]' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                        I work with adults (21+) navigating trauma recovery, relationship well-being, identity questions, and the emotional challenges of conceiving, pregnancy, and postpartum.
                                    </p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
                                <div className='space-y-6 order-2 md:order-1'>
                                    <p className='text-base md:text-lg text-left text-[#5C4B3C]' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                        My approach is not about &ldquo;fixing,&rdquo; but about creating a safe, collaborative space where you can listen to yourself, gain clarity, and move toward the life you want.
                                        Clients often tell me that therapy with me feels steady, supportive, and less like treatment—more like being accompanied through difficult terrain.
                                    </p>
                                    <p className='text-base md:text-lg text-left text-[#5C4B3C]' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                        Outside the therapy room, I love reading, tending to plants, exploring food and music, and planning my next beach trip. These small joys remind me of balance and presence—values I carry into my work too.
                                    </p>
                                </div>
                                <img src={Books.src} className='w-full max-w-[400px] h-[450px] md:h-[500px] object-cover mx-auto md:mx-0 shadow-lg order-1 md:order-2' style={{ borderRadius: '20px' }} alt="Aishwaraya Goud - Books in her space" />
                            </div>

                        </div>
                        <DiagWaveConnector/>

                        {/* Educational Qualifications Section */}
                        <div className="mt-12 md:mt-16 mb-8 md:mb-12 px-4">
                            <div className="text-center mb-8 md:mb-12">
                                <div className="inline-flex items-center space-x-3 mb-6">
                                    <div className="w-8 md:w-12 h-0.5 bg-[#B6724F] opacity-40"></div>
                                    <span className="eyebrow-label">CREDENTIALS</span>
                                    <div className="w-8 md:w-12 h-0.5 bg-[#B6724F] opacity-40"></div>
                                </div>
                                <h2 className="text-3xl md:text-4xl text-[#5C4B3C] px-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                                    Educational Qualifications
                                </h2>
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
                    
                    {/* Our Story, Our Space Section */}
                    <OurStoryOurSpace/>

                        
                    </div>
                </div>

                {/* Our Values Section */}
                <OurValues className="bg-[#F2E8DD]" />

                <Testimonials category="about us" />
                <Footer />
            </div>
        </div>
        </div>
    )
}

export default About;