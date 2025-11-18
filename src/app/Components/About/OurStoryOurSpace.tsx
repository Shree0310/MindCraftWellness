import OurStory from '../../Assets/images/OurStory.jpg';
import OurSpace from '../../Assets/images/OurSpace.jpg';
import OurStory2 from '../../Assets/images/OurStory2.jpg';
import OurSpace2 from '../../Assets/images/OurSpace2.jpg';
import OurStory3 from '../../Assets/images/OurStory2.jpg';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const OurStoryOurSpace = () => {
    useEffect(() => {
        const timer = setInterval(() => {
            slideLeftImage();
        }, 3000);

        return () => clearInterval(timer);
    },[])
    const [activeImage, setActiveImage] = useState(0);

    const images = [
        OurStory, OurSpace, OurStory2, OurSpace2, OurStory3
    ];

    const slideLeftImage = () => {
        setActiveImage(prev => (prev + 1) % images.length);
    }

    const slideRightImage = () => {
        setActiveImage(prev => (prev - 1 < 0 ? images.length-1 : prev-1 ));
    }

return <div className="div">
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
                                >
                                    {/* First Image */}
                                    <div className="w-full flex-shrink-0">
                                        <Image
                                            src={images[activeImage]}
                                            alt="Mind Craft Wellness Clinic Space"
                                            className="w-full h-[400px] object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                                    </div>
                                </div>

                                {/* Carousel Navigation Dots */}
                                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                    <button
                                        className={`w-3 h-3 rounded-full bg-white transition-opacity duration-200 ${activeImage === 0 ? 'opacity-100' : 'opacity-50'
                                            }`}
                                        onClick={() => slideLeftImage()}
                                    ></button>
                                    <button
                                        className={`w-3 h-3 rounded-full bg-white transition-opacity duration-200 ${activeImage === 1 ? 'opacity-100' : 'opacity-50'
                                            }`}
                                        onClick={() => slideRightImage()}
                                    ></button>
                                </div>

                                {/* Navigation Arrows */}
                                <button
                                    onClick={() => slideRightImage()}
                                    className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 cursor-pointer hover:bg-white text-[#345041] p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                <button
                                    onClick={() => slideLeftImage()}
                                    className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white text-[#345041] p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
}
export default OurStoryOurSpace;