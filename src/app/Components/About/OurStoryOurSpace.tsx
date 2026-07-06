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
         setActiveImage(prev => (prev - 1 < 0 ? images.length-1 : prev-1 ));
    }

    const slideRightImage = () => {
        setActiveImage(prev => (prev + 1) % images.length);
    }

return <div className="bg-[#F2E8DD] py-16 md:py-20">
            {/* Our Story, Our Space Section */}
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-flex items-center space-x-3 mb-6">
                        <div className="w-8 md:w-12 h-0.5 bg-[#B6724F] opacity-40"></div>
                        <span className="eyebrow-label">THE BEGINNING</span>
                        <div className="w-8 md:w-12 h-0.5 bg-[#B6724F] opacity-40"></div>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#5C4B3C] mb-4 px-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                        Our Story, Our Space
                    </h2>
                </div>

                {/* Combined Section: Text Left, Image Carousel Right */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left side - Combined Text Content */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl md:text-3xl text-[#5C4B3C] mb-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Our Story
                            </h3>
                            <p className="text-base md:text-lg leading-relaxed text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                Mind Craft Wellness was founded in 2022 with a simple vision — to make therapy more personal, accessible, and human. What began as a solo practice has grown into a team of therapists committed to putting clients first.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl md:text-3xl text-[#5C4B3C] mb-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Our Space
                            </h3>
                            <p className="text-base md:text-lg leading-relaxed text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                Located in the heart of Gurgaon, our clinic is designed to feel welcoming and safe — a quiet pause from the rush of daily life. With two thoughtfully curated therapy rooms and calming details, the space is built to help you feel at ease the moment you step in. At Mind Craft Wellness, inclusivity and sensitivity are at the heart of our work. We welcome people of all backgrounds, identities, and life experiences, ensuring therapy is a space where trust, openness, and growth can unfold.
                            </p>
                        </div>
                    </div>

                    {/* Right side - Image Carousel */}
                    <div className="relative w-full">
                        <div className="relative overflow-hidden shadow-lg w-full" style={{ borderRadius: '20px' }}>
                            <div className="flex transition-transform duration-500 ease-in-out">
                                {/* First Image */}
                                <div className="w-full flex-shrink-0">
                                    <Image
                                        src={images[activeImage]}
                                        alt="Mind Craft Wellness Clinic Space"
                                        className="w-full h-[400px] md:h-[500px] object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" style={{ borderRadius: '20px' }}></div>
                                </div>
                            </div>

                            {/* Carousel Navigation Dots */}
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                                {images.map((_, index) => (
                                    <button
                                        key={index}
                                        className={`w-3 h-3 rounded-full bg-white transition-opacity duration-200 ${activeImage === index ? 'opacity-100' : 'opacity-50'}`}
                                        onClick={() => setActiveImage(index)}
                                    ></button>
                                ))}
                            </div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={() => slideRightImage()}
                                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/90 cursor-pointer hover:bg-white text-[#B6724F] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            <button
                                onClick={() => slideLeftImage()}
                                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#B6724F] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
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
}
export default OurStoryOurSpace;