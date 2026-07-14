import OurStory from '../../Assets/images/OurStory.jpg';
import OurStory2 from '../../Assets/images/OurStory2.jpg';
import OurStory3 from '../../Assets/images/OurStory3.jpg';
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
        OurStory, OurStory2, OurStory3
    ];

    const slideLeftImage = () => {
         setActiveImage(prev => (prev - 1 < 0 ? images.length-1 : prev-1 ));
    }

    const slideRightImage = () => {
        setActiveImage(prev => (prev + 1) % images.length);
    }

return <div className="bg-[#F2E8DD] py-16 md:py-20">
            {/* The Space Section */}
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#5C4B3C] mb-4 px-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                        The Space
                    </h2>
                    <p className="text-xl md:text-2xl text-[#5C4B3C] italic max-w-3xl mx-auto" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                        A room designed for real conversations.
                    </p>
                </div>

                {/* Section: Text on Top, Image Carousel Below */}
                <div className="flex flex-col items-center">
                    {/* Text Content on Top */}
                    <div className="max-w-4xl mx-auto mb-12 md:mb-16 px-4">
                        <p className="text-base md:text-lg leading-relaxed text-[#5C4B3C] text-center" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                            Located in Gurgaon, the clinic is designed to feel welcoming from the moment you step in, a quiet pause from the rush of daily life. Warm textures, natural light, and a calm atmosphere make it easier to slow down and be present.
                        </p>
                    </div>

                    {/* Image Carousel in the Middle */}
                    <div className="relative w-full max-w-5xl mx-auto">
                        <div className="relative overflow-hidden shadow-lg w-full" style={{ borderRadius: '20px' }}>
                            <div className="flex transition-transform duration-500 ease-in-out">
                                {/* First Image */}
                                <div className="w-full flex-shrink-0">
                                    <Image
                                        src={images[activeImage]}
                                        alt="Mind Craft Wellness Clinic Space"
                                        className="w-full h-[400px] md:h-[500px] object-cover"
                                        width={1200}
                                        height={500}
                                        priority
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