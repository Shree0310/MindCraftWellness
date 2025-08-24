
"use client"
import Link from 'next/link';
import Header from "./Header";
import AboutImg from '../Assets/images/About.png'
import AboutImg1 from '../Assets/images/About2.png'
import AboutImg2 from '../Assets/images/About 5.png'
import ourSpace from '../Assets/images/ourSpace.png';
import ProfilePic from '../Assets/images/Profile-pic.png';
import Testimonials from './Testimonials';
import { useState } from 'react';
import Footer from './Footer';
import OurValues from './OurValues';

const About = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev: number) => (prev + 1) % 2);
    };

    const goToImage = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="bg-[#FFFADA] text-black w-full font-sans py-16 overflow-x-hidden flex-grow">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left side - Text content */}
                        <div className="space-y-8">
                            {/* <h1 className="text-4xl font-bold" style={{ fontFamily: 'BrittanySignature, serif' }}>
                                About Mind Craft Wellness
                            </h1> */}
                            <p className="text-xl leading-relaxed" style={{ fontFamily: 'GlacialIndifference, serif' }}>
                                "In my early professional years I was asking the question: How can I treat, or cure, or change this person?
                                Now I would phrase the question in this way: <br />
                                <span className="font-bold underline">How can I provide a relationship which this person may use for his own personal growth?"</span>
                            </p>
                            <p className="text-xl leading-relaxed" style={{ fontFamily: 'GlacialIndifference, serif' }}>
                                At Mind Craft Wellness, we believe in the power of authentic human connection and the transformative potential of a safe,
                                nurturing therapeutic relationship. Our approach is rooted in the understanding that healing happens within the context
                                of genuine care and understanding.
                            </p>
                            <p className="text-xl leading-relaxed" style={{ fontFamily: 'GlacialIndifference, serif' }}>
                                We are committed to creating a space where you feel truly seen, heard, and supported on your journey toward
                                greater self-awareness, healing, and growth.
                            </p>
                            <div className='flex justify-center'>
                                <Link href="/book-now" className='bg-[#ADC3E3] cursor-pointer text-black px-8 py-4 my-16 rounded-full font-semibold text-lg hover:bg-[#92b0dc] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
                                    Book Your Free Consultation
                                </Link>
                            </div>
                        </div>

                        {/* Right side - Images */}
                        <div className="ml-24 relative">
                            {/* Large background image */}
                            <div className="relative">
                                <img
                                    src={AboutImg.src}
                                    alt="About Mind Craft Wellness"
                                    className="w-[330px] h-[330px] object-cover mt-24"
                                />

                                {/* Two smaller images positioned on top */}

                                <div className="absolute -top-6 right-2 mr-48">
                                    <img
                                        src={AboutImg2.src}
                                        alt="Wellness space"
                                        className="w-24 h-16 object-cover transform -rotate-6"
                                    />
                                </div>
                                <div className="absolute -top-8 -left-8">
                                    <img
                                        src={AboutImg1.src}
                                        alt="Therapy session"
                                        className="w-48 h-32 object-cover transform -rotate-6"
                                    />
                                </div>


                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='bg-[#FBF4F1] w-full'>
                        <h1 className='text-3xl pt-16 pb-3 text-center font-bold' style={{ fontFamily: 'BrittanySignature, serif' }}>
                            Hi, I’m Aishwaraya Goud —
                        </h1>
                        <span className='text-lg py-2 mb-10 text-center block pb-8' style={{ fontFamily: 'Lora, serif' }}>
                            Founder of Mind Craft Wellness,<br />
                            and a certified AEDP and CBT therapist based in Gurgaon.
                        </span>
                        <div className='flex justify-start items-start gap-6 mx-auto w-fit'>
                            <img src={ProfilePic.src} className='w-[350px] h-[500px] object-cover pt-6 pr-6' />
                            <p className='text-lg text-left w-[500px]' style={{ fontFamily: 'Lora, serif', lineHeight: '30px' }}>
                                Hi, I’m Aishwarya, a trauma-informed therapist based in Gurgaon. My path into this work began with my own search for healing, which showed me how deeply we all long to be seen, understood, and supported.
                                Those experiences continue to shape how I sit with others—with warmth, curiosity, and respect for each person’s pace.<br />
                                <br />
                                I work with adults (21+) navigating trauma recovery, relationship well-being, identity questions, and the emotional challenges of conceiving, pregnancy, and postpartum.
                                My approach is not about “fixing,” but about creating a safe, collaborative space where you can listen to yourself, gain clarity, and move toward the life you want.
                                Clients often tell me that therapy with me feels steady, supportive, and less like treatment—more like being accompanied through difficult terrain.<br />
                                <br />
                                Outside the therapy room, I love reading, tending to plants, exploring food and music, and planning my next beach trip. These small joys remind me of balance and presence—values I carry into my work too.<br />
                                <br />
                            </p>
                        </div>
                        {/* Educational Qualifications Section */}
                        <div className="mt-16 mb-12">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-[#345041] mb-4" style={{ fontFamily: 'Lora, serif' }}>
                                    Educational Qualifications
                                </h2>
                                <div className="w-16 h-0.5 bg-[#345041] mx-auto opacity-30"></div>
                            </div>
                            <div className="max-w-4xl mx-auto">
                                <div className="bg-white rounded-2xl shadow-lg p-8">
                                    <ul className="space-y-4">
                                        <li className="flex items-start space-x-4">
                                            <div className="w-3 h-3 bg-[#345041] rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <span className="text-lg font-semibold text-[#345041]"><p>{"Professional Diploma in Clinical Psychology"}</p></span>
                                                <p className="text-gray-600"><p>{"SGT University, Gurgaon"}</p></p>
                                            </div>
                                        </li>
                                        <li className="flex items-start space-x-4">
                                            <div className="w-3 h-3 bg-[#345041] rounded-full mt-2 flex-shrink-0"></div>
                                            <div>
                                                <span className="text-lg font-semibold text-[#345041]"><p>{"MSc. in Counselling Psychology"}</p></span>
                                                <p className="text-gray-600"><p>{"Sampurna Montfort College, Bangalore"}</p></p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Additional Certifications & Trainings Section */}
                        <div className="mb-16">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-[#345041] mb-4" style={{ fontFamily: 'Lora, serif' }}>
                                    Additional Certifications & Trainings
                                </h2>
                                <div className="w-16 h-0.5 bg-[#345041] mx-auto opacity-30"></div>
                            </div>
                            <div className="max-w-5xl mx-auto">
                                <div className="bg-white rounded-2xl shadow-lg p-8">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-4">
                                            <div className="flex items-start space-x-4">
                                                <div className="w-3 h-3 bg-[#E7CDBF] rounded-full mt-2 flex-shrink-0"></div>
                                                <div>
                                                    <span className="text-lg font-semibold text-[#345041]"><p>{"Essential Skills Course"}</p></span>
                                                    <p className="text-gray-600"><p>{"AEDP Institute, New York (Currently pursuing)"}</p></p>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-4">
                                                <div className="w-3 h-3 bg-[#E7CDBF] rounded-full mt-2 flex-shrink-0"></div>
                                                <div>
                                                    <span className="text-lg font-semibold text-[#345041]"><p>{"AEDP Immersion"}</p></span>
                                                    <p className="text-gray-600"><p>{"AEDP Institute, New York (August, 2024)"}</p></p>
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
                        <div className="py-20 bg-white rounded-3xl">
                            <div className="max-w-7xl mx-auto px-8">
                                <div className="text-center mb-16">
                                    <h2 className="text-4xl font-bold text-[#345041] mb-6" style={{ fontFamily: 'BrittanySignature, serif' }}>
                                        Our Story, Our Space
                                    </h2>
                                    <div className="w-16 h-0.5 bg-[#345041] mx-auto opacity-30"></div>
                                </div>

                                {/* Combined Section: Text Left, Image Carousel Right */}
                                <div className="grid md:grid-cols-2 gap-12 items-center">
                                    {/* Left side - Combined Text Content */}
                                    <div>
                                        <h3 className="text-2xl font-semibold text-[#345041] mb-6" style={{ fontFamily: 'Lora, serif' }}>
                                            Our Story
                                        </h3>
                                        <p className="text-lg leading-relaxed text-gray-700 mb-6" style={{ fontFamily: 'Lora, serif' }}>
                                            Mind Craft Wellness was founded in 2022 with a simple vision — to make therapy more personal, accessible, and human. What began as a solo practice has grown into a team of therapists committed to putting clients first.
                                        </p>

                                        <h3 className="text-2xl font-semibold text-[#345041] mb-4" style={{ fontFamily: 'Lora, serif' }}>
                                            Our Space
                                        </h3>
                                        <p className="text-lg leading-relaxed text-gray-700" style={{ fontFamily: 'Lora, serif' }}>
                                            Located in the heart of Gurgaon, our clinic is designed to feel welcoming and safe — a quiet pause from the rush of daily life. With two thoughtfully curated therapy rooms and calming details, the space is built to help you feel at ease the moment you step in. At Mind Craft Wellness, inclusivity and sensitivity are at the heart of our work. We welcome people of all backgrounds, identities, and life experiences, ensuring therapy is a space where trust, openness, and growth can unfold.
                                        </p>
                                    </div>

                                    {/* Right side - Image Carousel */}
                                    <div className="relative w-full">
                                        <div className="relative overflow-hidden rounded-2xl shadow-lg w-full">
                                            <div
                                                className="flex transition-transform duration-500 ease-in-out"
                                                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                                            >
                                                {/* First Image */}
                                                <div className="w-full flex-shrink-0">
                                                    <img
                                                        src={ourSpace.src}
                                                        alt="Mind Craft Wellness Clinic Space"
                                                        className="w-full h-[400px] object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                                                </div>

                                                {/* Second Image */}
                                                <div className="w-full flex-shrink-0">
                                                    <img
                                                        src={ourSpace.src}
                                                        alt="Therapy Room Details"
                                                        className="w-full h-[400px] object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                                                </div>
                                            </div>

                                            {/* Carousel Navigation Dots */}
                                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                                <button
                                                    className={`w-3 h-3 rounded-full bg-white transition-opacity duration-200 ${currentImageIndex === 0 ? 'opacity-100' : 'opacity-50'
                                                        }`}
                                                    onClick={() => goToImage(0)}
                                                ></button>
                                                <button
                                                    className={`w-3 h-3 rounded-full bg-white transition-opacity duration-200 ${currentImageIndex === 1 ? 'opacity-100' : 'opacity-50'
                                                        }`}
                                                    onClick={() => goToImage(1)}
                                                ></button>
                                            </div>

                                            {/* Navigation Arrows */}
                                            <button
                                                onClick={() => goToImage(currentImageIndex === 0 ? 1 : 0)}
                                                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#345041] p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>

                                            <button
                                                onClick={() => goToImage(currentImageIndex === 0 ? 1 : 0)}
                                                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#345041] p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Our Values Section */}
                <OurValues />

                <Testimonials />
                <Footer />
            </div>
        </div>
    )
}

export default About;