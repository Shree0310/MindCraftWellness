
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
    const [activeImage, setActiveImage] = useState(0);



    // const goToImage = (index: number) => {
    //     setCurrentImageIndex(index);
    // };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="bg-[#FFFADA] text-black w-full font-sans py-8 md:py-16 overflow-x-hidden flex-grow">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Left side - Text content */}
                        <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
                            {/* <h1 className="text-4xl font-bold" style={{ fontFamily: 'BrittanySignature, serif' }}>
                                About Mind Craft Wellness
                            </h1> */}
                            <p className="text-xl md:text-xl leading-relaxed px-4 md:px-0 italic" style={{ fontFamily: 'GlacialIndifference, serif' }}>
                                &ldquo;In my early professional years I was asking the question: How can I treat, or cure, or change this person?
                                Now I would phrase the question in this way: <br />
                                <span className="font-bold">How can I provide a relationship which this person may use for his own personal growth?&rdquo;</span>
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed px-4 md:px-0" style={{ fontFamily: 'GlacialIndifference, serif' }}>
                                At Mind Craft Wellness, we believe in the power of authentic human connection and the transformative potential of a safe,
                                nurturing therapeutic relationship. Our approach is rooted in the understanding that healing happens within the context
                                of genuine care and understanding.
                            </p>
                            <p className="text-lg md:text-xl leading-relaxed px-4 md:px-0" style={{ fontFamily: 'GlacialIndifference, serif' }}>
                                We are committed to creating a space where you feel truly seen, heard, and supported on your journey toward
                                greater self-awareness, healing, and growth.
                            </p>
                            <div className='flex justify-center mb-6 md:mb-10 px-4 md:px-0'>
                                <BookFreeConsultationBtn />
                            </div>
                        </div>

                        {/* Right side - Images */}
                        <div className="ml-0 lg:ml-24 relative order-1 lg:order-2">
                            {/* Large background image */}
                            <div className="relative flex justify-center lg:justify-start">
                                <img
                                    src={AboutImg.src}
                                    alt="About Mind Craft Wellness"
                                    className="w-[280px] md:w-[330px] h-[280px] md:h-[330px] object-cover mt-12 md:mt-24"
                                />

                                {/* Two smaller images positioned on top */}

                                <div className="absolute -top-3 md:-top-6 right-1 md:right-2 mr-24 md:mr-48">
                                    <img
                                        src={AboutImg2.src}
                                        alt="Wellness space"
                                        className="w-20 md:w-24 h-12 md:h-16 object-cover transform -rotate-6"
                                    />
                                </div>
                                <div className="absolute -top-4 md:-top-8 -left-4 md:-left-8">
                                    <img
                                        src={AboutImg1.src}
                                        alt="Therapy session"
                                        className="w-36 md:w-48 h-24 md:h-32 object-cover transform -rotate-6"
                                    />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='bg-[#FBF4F1] w-full'>
                        <h1 className='text-2xl md:text-3xl pt-8 md:pt-16 pb-3 text-center font-bold px-4' style={{ fontFamily: 'BrittanySignature, serif' }}>
                            Hi, I&apos;m Aishwaraya Goud —
                        </h1>
                        <span className='text-base md:text-lg py-2 mb-6 md:mb-10 text-center block pb-6 md:pb-8 px-4' style={{ fontFamily: 'Lora, serif' }}>
                            Founder of Mind Craft Wellness,<br />
                            and a certified AEDP and CBT therapist based in Gurgaon.
                        </span>
                        <div className='flex flex-col md:flex-col justify-center items-center  gap-6 mx-auto max-w-6xl px-4 relative'>
                            <div className="flex">
                                <div className='relative w-full max-w-[350px] h-[400px] md:h-[500px] pt-6 pr-0 md:pr-6 mx-auto md:mx-0 rounded-xl overflow-hidden'>
                                    <img src={ProfilePic.src} className='w-full h-full object-cover rounded-xl shadow-2xl' alt="Aishwaraya Goud - Founder of Mind Craft Wellness" />
                                </div>
                                <p className='text-base md:text-lg text-left w-full md:w-[500px] pt-10 pl-10' style={{ fontFamily: 'Lora, serif', lineHeight: '1.6' }}>
                                    Hi, I’m Aishwarya, a trauma-informed therapist based in Gurgaon. My path into this work began with my own search for healing, which showed me how deeply we all long to be seen, understood, and supported.
                                    Those experiences continue to shape how I sit with others—with warmth, curiosity, and respect for each person’s pace.<br />
                                    <br />
                                    I work with adults (21+) navigating trauma recovery, relationship well-being, identity questions, and the emotional challenges of conceiving, pregnancy, and postpartum.
                                </p>
                            </div>

                            <div className="flex">
                                <p className='text-base text-left p-16 md:text-lg  w-full md:w-[500px] rounded-lg mb-10' style={{ fontFamily: 'Lora, serif', lineHeight: '1.6' }}>    
                                    My approach is not about “fixing,” but about creating a safe, collaborative space where you can listen to yourself, gain clarity, and move toward the life you want.
                                    Clients often tell me that therapy with me feels steady, supportive, and less like treatment—more like being accompanied through difficult terrain.<br />
                                    <br />
                                    Outside the therapy room, I love reading, tending to plants, exploring food and music, and planning my next beach trip. These small joys remind me of balance and presence—values I carry into my work too.<br />
                                    <br />
                                </p>
                                <img src={Books.src} className='w-full max-w-[400px] h-[400px] md:h-[500px] object-cover  pr-0 l-10 mx-auto md:mx-0 rounded-2xl shadow-2xl' alt="Aishwaraya Goud - Books in her space" />
                            </div>
                            
                        </div>
                        <DiagWaveConnector/>

                        {/* Educational Qualifications Section */}
                        <div className="mt-12 md:mt-16 mb-8 md:mb-12 px-4">
                            <div className="text-center mb-6 md:mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#345041] mb-4 px-4" style={{ fontFamily: 'Lora, serif' }}>
                                    Educational Qualifications
                                </h2>
                                <div className="w-12 md:w-16 h-0.5 bg-[#345041] mx-auto opacity-30"></div>
                            </div>
                            <div className="max-w-4xl mx-auto">
                                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
                                    <ul className="space-y-4">
                                        <li className="flex items-start space-x-3 md:space-x-4">
                                            <div className="w-3 h-3 bg-[#345041] rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <span className="text-base md:text-lg font-semibold text-[#345041]"><p>{"Bachelors of Arts in Psychology, Sociology, and English"}</p></span>
                                                <div className="text-sm md:text-base text-gray-600"><p>{"Christ University, Bangalore"}</p></div>
                                            </div>
                                        </li>
                                        <li className="flex items-start space-x-3 md:space-x-4">
                                            <div className="w-3 h-3 bg-[#345041] rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <span className="text-base md:text-lg font-semibold text-[#345041]"><p>{"Professional Diploma in Clinical Psychology"}</p></span>
                                                <div className="text-sm md:text-base text-gray-600"><p>{"SGT University, Gurgaon"}</p></div>
                                            </div>
                                        </li>
                                        <li className="flex items-start space-x-3 md:space-x-4">
                                            <div className="w-3 h-3 bg-[#345041] rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <span className="text-base md:text-lg font-semibold text-[#345041]"><p>{"MSc. in Counselling Psychology"}</p></span>
                                                <div className="text-sm md:text-base text-gray-600"><p>{"Sampurna Montfort College, Bangalore"}</p></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Additional Certifications & Trainings Section */}
                        <div className="mb-12 md:mb-16 px-4">
                            <div className="text-center mb-6 md:mb-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#345041] mb-4 px-4" style={{ fontFamily: 'Lora, serif' }}>
                                    Additional Certifications & Trainings
                                </h2>
                                <div className="w-12 md:w-16 h-0.5 bg-[#345041] mx-auto opacity-30"></div>
                            </div>
                            <div className="max-w-5xl mx-auto">
                                <div className="bg-white rounded-2xl shadow-lg p-8">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div className="flex items-start space-x-4">
                                                <div className="w-3 h-3 bg-[#E7CDBF] rounded-full mt-2 flex-shrink-0"></div>
                                                <div>
                                                    <span className="text-lg font-semibold text-[#345041]"><p>{"Essential Skills Course"}</p></span>
                                                    <div className="text-gray-600"><p>{"AEDP Institute, New York (June 2025 to February 2026)"}</p></div>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-4">
                                                <div className="w-3 h-3 bg-[#E7CDBF] rounded-full mt-2 flex-shrink-0"></div>
                                                <div>
                                                    <span className="text-lg font-semibold text-[#345041]"><p>{"AEDP Immersion"}</p></span>
                                                    <div className="text-gray-600"><p>{"AEDP Institute, New York (August, 2024)"}</p></div>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-4">
                                                <div className="w-3 h-3 bg-[#E7CDBF] rounded-full mt-2 flex-shrink-0"></div>
                                                <div>
                                                    <span className="text-lg font-semibold text-[#345041]">Trauma Informed Approach Workshop</span>
                                                    <p className="text-gray-600">12-Hours online workshop by Syam K Ravindran (February, 2023)</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-4">
                                                <div className="w-3 h-3 bg-[#E7CDBF] rounded-full mt-2 flex-shrink-0"></div>
                                                <div>
                                                    <span className="text-lg font-semibold text-[#345041]">CBT for Personality Disorders</span>
                                                    <p className="text-gray-600">Beck Institute, Pennsylvania (2022)</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-4">
                                                <div className="w-3 h-3 bg-[#E7CDBF] rounded-full mt-2 flex-shrink-0"></div>
                                                <div>
                                                    <span className="text-lg font-semibold text-[#345041]">Essentials of CBT</span>
                                                    <p className="text-gray-600">Beck Institute, Pennsylvania (2021)</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <div className="flex items-start space-x-4">
                                                <div className="w-3 h-3 bg-[#E7CDBF] rounded-full mt-2 flex-shrink-0"></div>
                                                <div>
                                                    <span className="text-lg font-semibold text-[#345041]">CBT for Anxiety Disorders</span>
                                                    <p className="text-gray-600">Beck Institute, Pennsylvania (2021)</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-4">
                                                <div className="w-3 h-3 bg-[#E7CDBF] rounded-full mt-2 flex-shrink-0"></div>
                                                <div>
                                                    <span className="text-lg font-semibold text-[#345041]">CBT for Depression</span>
                                                    <p className="text-gray-600">Beck Institute, Pennsylvania (2021)</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-4">
                                                <div className="w-3 h-3 bg-[#E7CDBF] rounded-full mt-2 flex-shrink-0"></div>
                                                <div>
                                                    <span className="text-lg font-semibold text-[#345041]">Maternal Mental Health</span>
                                                    <p className="text-gray-600">Postpartum Support International (2020-2021)</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-4">
                                                <div className="w-3 h-3 bg-[#E7CDBF] rounded-full mt-2 flex-shrink-0"></div>
                                                <div>
                                                    <span className="text-lg font-semibold text-[#345041]">Perinatal Mental Health</span>
                                                    <p className="text-gray-600">NIMHANS, India (June – July 2022)</p>
                                                </div>
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
                <OurValues />

                <Testimonials category="about us" />
                <Footer />
            </div>
        </div>
    )
}

export default About;