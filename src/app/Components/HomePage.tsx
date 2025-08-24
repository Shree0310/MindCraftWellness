"use client"

import LandingPage from '../Assets/images/LandingPage.png'
import ProfilePic from '../Assets/images/Profile-pic.png';
import clinic from '../Assets/images/Clinic.png';
import Testimonials from './Testimonials';

const HomePage = () => {
    return <>
    <div className='scroll-auto bg-white'>
    <div className="relative">
        <img src={LandingPage.src}/>
        {/* Text overlay on the image */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8">
            <h1 className="text-5xl font-bold text-white mb-4 drop-shadow-2xl" style={{ fontFamily: 'Lora, serif' }}>
                An in-person Therapy Clinic in Gurgaon
            </h1>
            <p className="text-xl text-white max-w-2xl leading-relaxed drop-shadow-lg" style={{ fontFamily: 'DMSans, serif', fontStyle: 'italic' }}>
                A warm, private space for you to heal, grow, and reconnect — with the support of compassionate, ethical therapists.
            </p>
        </div>
    </div>
        <div className='text-black px-24 py-10 w-[500px] text-2xl text-center mx-auto' style={{ fontFamily: 'BrittanySignature, serif' }}>
            "Owning our story and loving ourselves through that process is the bravest thing we'll ever do."
        </div>
        <div>
            <div className='bg-[#E7CDBF] h-full w-full  text-black'>
                <h1 className='font-sans font-bold text-2xl text-center pt-16 pb-8' style={{ fontFamily: 'BodoniModa, serif' }}>Life doesn’t always go as planned.</h1>
                <div className='flex justify-start items-start gap-6 mx-auto w-fit'>
                    <img src={clinic.src} className='w-[300px] h-[400px] object-cover'/>
                    <p className='text-lg text-left w-[500px] pt-6' style={{ fontFamily: 'Lora, serif', lineHeight: '30px' }}>Sometimes we move through challenges with strength. Other times, the weight of it all starts to seep into every corner — our relationships feel strained, work or studies become overwhelming, sleep offers no real rest, and we start to feel disconnected from ourselves.
                        In these moments, it’s easy to feel stuck — like the way forward has blurred.
                        Whether you're navigating a heartbreak, trauma, anxiety, depression, fertility struggles, low self-esteem, or simply longing to understand yourself more deeply — you don’t have to do it alone.
                        Therapy is a space to slow down, make sense of what you’re carrying, and begin to reconnect with yourself. It’s a space for clarity, healing, and growth.
                        And often, the very places where we feel most stuck hold the seeds of our transformation. As David Richo says, ‘Our wounds are often the openings into the best and most beautiful part of us.’”
                    </p>
                </div>
                <div className='flex justify-start items-start gap-6 mx-auto w-fit py-16'>
                <p className='text-lg text-left w-[500px] pt-6' style={{ fontFamily: 'Lora, serif', lineHeight: '30px' }}>At Mind Craft Wellness, we believe therapy is most effective when it feels personal. That’s why, instead of asking you to choose a therapist from a list, we start with a 15-minute free consultation call.
                    You’ll share your needs, preferences, and goals — and we’ll match you with the right therapist on our team.
                    Our therapists are carefully selected, trained in trauma-informed, evidence-based approaches to provide a safe, non-judgemental space for you.
                    Here, we explore those openings together — with gentleness, curiosity, and care — so you can move toward the life you want to live.
                </p>
                <img src={clinic.src} className='w-[300px] h-[400px] object-cover'/>
                </div>
                <h1 className='text-2xl pt-16 pb-3 text-center ' style={{ fontFamily: 'BrittanySignature, serif' }}>
                    Hi, I’m Aishwaraya Goud —
                </h1>
                <span className='text-lg py-2 text-center block pb-8' style={{ fontFamily: 'Lora, serif' }}>
                    Founder of Mind Craft Wellness,<br/>
                    and a certified AEDP and CBT therapist based in Gurgaon.
                </span>
                <div className='flex justify-start items-start gap-6 mx-auto w-fit'>
                    <img src={ProfilePic.src} className='w-[300px] h-[400px] object-cover'/>
                    <p className='text-lg text-left w-[500px] pt-6' style={{ fontFamily: 'Lora, serif', lineHeight: '30px' }}>
                        At Mind Craft Wellness, you might work with me directly, or with one of the other experienced therapists on our team. I ensure our team shares the same commitment to warmth, skill, and trauma-informed care, so that every client feels supported and understood.
                        Therapy here isn’t about quick fixes or advice-giving — it’s about creating a container for your emotions, where you feel deeply held and supported, so you can uncover your own way forward.
                        If you'd like to learn more about my approach and journey as a therapist, you can [read more about me here].
                    </p>
                </div>
                <div className='text-center block py-8 pl-8'>
                    <button className="bg-[#345041] font-sans text-xl rounded-md text-white font-medium p-2 cursor-pointer shadow-md w-72 h-12 m-2 hover:bg-[#2a4033] transition-colors duration-300 transform hover:scale-105">
                        Book a free consultation
                    </button>
                </div>
                
                {/* New section before testimonials */}
                <div className="bg-gradient-to-br from-[#f8f6f4] to-[#E7CDBF] py-20 px-8 mx-8 rounded-3xl my-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl mb-8" style={{ fontFamily: 'BrittanySignature, serif' }}>
                            Ready to Begin Your Healing Journey?
                        </h2>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto">
                            Every step toward healing is a step toward the life you deserve. 
                            Our compassionate team is here to walk alongside you, providing 
                            the support and guidance you need to thrive.
                        </p>
                        
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-[#345041] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl">✨</span>
                                </div>
                                <h3 className="text-xl font-semibold text-[#345041] mb-3">Safe Space</h3>
                                <p className="text-gray-600">Create a judgment-free environment where you can be your authentic self</p>
                            </div>
                            
                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-[#345041] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl">🌱</span>
                                </div>
                                <h3 className="text-xl font-semibold text-[#345041] mb-3">Personal Growth</h3>
                                <p className="text-gray-600">Develop tools and insights that support your ongoing healing journey</p>
                            </div>
                            
                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <div className="w-16 h-16 bg-[#345041] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white text-2xl">💝</span>
                                </div>
                                <h3 className="text-xl font-semibold text-[#345041] mb-3">Expert Care</h3>
                                <p className="text-gray-600">Work with trauma-informed therapists who truly understand your needs</p>
                            </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <button className="bg-[#345041] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#2a4033] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Start Your Journey
                            </button>
                            <button className="border-2 border-[#345041] text-[#345041] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#345041] hover:text-white transition-all duration-300 transform hover:scale-105">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
                
                <Testimonials/>
            </div>
        </div>
        
        {/* Footer */}
        <footer className="bg-[#2a4033] text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-8 py-16">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'BrittanySignature, serif' }}>
                            Mind Craft Wellness
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Providing compassionate, trauma-informed therapy in Gurgaon. 
                            We're here to support your healing journey with warmth, skill, and care.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-[#E7CDBF] transition-colors duration-300">
                                <span className="text-2xl">📱</span>
                            </a>
                            <a href="#" className="text-white hover:text-[#E7CDBF] transition-colors duration-300">
                                <span className="text-2xl">📧</span>
                            </a>
                            <a href="#" className="text-white hover:text-[#E7CDBF] transition-colors duration-300">
                                <span className="text-2xl">💬</span>
                            </a>
                        </div>
                    </div>
                    
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Our Therapists</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Services</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Blog</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Careers</a></li>
                        </ul>
                    </div>
                    
                    {/* Contact & Address */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <div className="space-y-2 text-gray-300">
                            <p>📍 Gurgaon, Haryana</p>
                            <p>📞 +91 98765 43210</p>
                            <p>📧 hello@mindcraftwellness.com</p>
                            <p>🕒 Mon-Sat: 9 AM - 7 PM</p>
                        </div>
                    </div>
                </div>
                
                {/* Map Section */}
                <div className="mb-12">
                    <h4 className="text-lg font-semibold mb-4">Find Us</h4>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                        <div className="w-full h-48 bg-gray-600 rounded flex items-center justify-center">
                            <span className="text-gray-400">📍 Interactive Map Coming Soon</span>
                        </div>
                    </div>
                </div>
                
                {/* Disclaimer */}
                <div className="bg-[#345041] rounded-lg p-6 mb-8">
                    <div className="flex items-start space-x-3">
                        <span className="text-2xl">⚠️</span>
                        <div>
                            <h5 className="font-semibold mb-2">Important Disclaimer</h5>
                            <p className="text-gray-200 text-sm leading-relaxed">
                                <strong>Mind Craft Wellness does not provide crisis intervention services.</strong> 
                                If you are experiencing a mental health crisis, suicidal thoughts, or need immediate assistance, 
                                please contact emergency services or a crisis helpline. We recommend referring to our 
                                <a href="#" className="text-white underline hover:text-[#E7CDBF] transition-colors duration-300"> Resources page</a> 
                                for crisis intervention information and emergency contacts.
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* Bottom Footer */}
                <div className="border-t border-gray-600 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-300 text-sm">
                            © 2024 Mind Craft Wellness. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Privacy Policy</a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Terms of Service</a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Cookie Policy</a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Accessibility</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    </>
}

export default HomePage;
