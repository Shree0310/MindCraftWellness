import Link from 'next/link';
import Header from "./Header";
import AboutImg from '../Assets/images/About.png'
import AboutImg1 from '../Assets/images/About2.png'
import AboutImg2 from '../Assets/images/About 5.png'

const About = () => {
    return (
        <div>
            <Header/>
            <div className="bg-[#FFFADA] text-black w-full font-sans min-h-screen py-16">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left side - Text content */}
                        <div className="space-y-8">
                            {/* <h1 className="text-4xl font-bold" style={{ fontFamily: 'BrittanySignature, serif' }}>
                                About Mind Craft Wellness
                            </h1> */}
                            <p className="text-lg leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                                "In my early professional years I was asking the question: How can I treat, or cure, or change this person?
                                Now I would phrase the question in this way: 
                                <span className="font-bold">How can I provide a relationship which this person may use for his own personal growth?"</span>
                            </p>
                            <p className="text-lg leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                                At Mind Craft Wellness, we believe in the power of authentic human connection and the transformative potential of a safe, 
                                nurturing therapeutic relationship. Our approach is rooted in the understanding that healing happens within the context 
                                of genuine care and understanding.
                            </p>
                            <p className="text-lg leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                                We are committed to creating a space where you feel truly seen, heard, and supported on your journey toward 
                                greater self-awareness, healing, and growth.
                            </p>
                             <div className='flex justify-center'>
                            <Link href="/book-now" className='bg-[#ADC3E3] cursor-pointer text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#92b0dc] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
                                Book Your Free Consultation
                            </Link>
                        </div>
                        </div>
                        
                        {/* Right side - Images */}
                        <div className="relative">
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
            </div>
        </div>
    )
}

export default About;