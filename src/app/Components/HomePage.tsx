"use client"

import LandingPage from '../Assets/images/LandingPage.png'
import ProfilePic from '../Assets/images/Profile-pic.png';
import couch from '../Assets/images/Couch.jpg';
import plantter from '../Assets/images/Plantter.jpg';
import takingTherapy from '../Assets/images/Taking-Therapy.jpg';
import flowers from '../Assets/images/flowers.png';
import ceramics2 from '../Assets/images/ceramics2.jpg';
import Testimonials from './Testimonials';

const HomePage = () => {
    return (
        <div className='scroll-auto bg-white'>
            {/* Landing page section with text overlay */}
            <div className='relative'>
                <img className='w-full h-auto' src={LandingPage.src} alt="Landing Page" />
                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                    <div className='text-center text-white max-w-4xl px-8'>
                        <h1 className='text-5xl font-bold mb-6 tracking-wide drop-shadow-lg' style={{ fontFamily: 'BrittanySignature, serif' }}>
                            An in-person Therapy Clinic in Gurgaon
                        </h1>
                        <p className='text-xl leading-relaxed mb-8 drop-shadow-lg italic' style={{ fontFamily: 'Lora, serif' }}>
                            A warm, private space for you to heal, grow, and reconnect — with the support of compassionate, ethical therapists.
                        </p>
                        <div className='flex justify-center'>
                            <button className='bg-[#345041] cursor-pointer text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#2a4033] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
                                Book Your Free Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                        <div className='relative max-w-4xl mx-auto px-8 py-16'>
                <div className='bg-white rounded-2xl shadow-xl p-12 text-center relative overflow-hidden'>
                    {/* Decorative quote marks */}
                    <div className='absolute top-4 left-6 text-6xl text-[#345041] opacity-20' style={{ fontFamily: 'BrittanySignature, serif' }}>
                        "
                    </div>
                    <div className='absolute bottom-4 right-6 text-6xl text-[#345041] opacity-20' style={{ fontFamily: 'BrittanySignature, serif' }}>
                        "
                    </div>
                    
                    {/* Main quote */}
                    <div className='relative z-10'>
                        <p className='text-3xl leading-relaxed text-[#2a4033] mb-6' style={{ fontFamily: 'BrittanySignature, serif' }}>
                            "Owning our story and loving ourselves through that process is the bravest thing we'll ever do."
                        </p>
                        
                        {/* Author attribution */}
                        <div className='flex items-center justify-center space-x-3'>
                            <div className='w-1 h-8 bg-[#345041] rounded-full'></div>
                            <span className='text-lg text-[#345041] font-semibold' style={{ fontFamily: 'Lora, serif' }}>
                                — Brené Brown
                            </span>
                            <div className='w-1 h-8 bg-[#345041] rounded-full'></div>
                        </div>
                    </div>
                    
                    {/* Subtle background pattern */}
                    <div className='absolute inset-0 opacity-5'>
                        <div className='absolute top-8 right-8 w-16 h-16 border-2 border-[#345041] rounded-full'></div>
                        <div className='absolute bottom-8 left-8 w-12 h-12 border-2 border-[#E7CDBF] rounded-full'></div>
                    </div>
                </div>
            </div>
            
            <div className='bg-[#E7CDBF] h-full w-full  text-black'>
                <h1 className='font-sans font-bold text-2xl text-center pt-16 pb-8' style={{ fontFamily: 'BodoniModa, serif' }}>
                    Life doesn’t always go as planned.
                </h1>
                <div className='flex justify-start items-start gap-6 mx-auto w-fit'>
                    <div className='relative'>
                        <img src={couch.src} className='w-[400px] h-[500px] object-cover rounded-lg shadow-lg mt-24'/>
                        {/* <img src={flowers.src} className=' bg-[#E7CDBF] absolute w-[250px] h-[280px] object-cover rounded-lg shadow-lg transform rotate-16 mx-12 right-10 mb-10'/> */}
                    </div>
                    <div className='w-[500px] pt-6 relative'>
                        <p className='text-lg text-left leading-relaxed' style={{ fontFamily: 'Lora, serif', lineHeight: '30px' }}>Sometimes we move through challenges with strength. Other times, the weight of it all starts to seep into every corner — our relationships feel strained, work or studies become overwhelming, 
                            sleep offers no real rest, and we start to feel disconnected from ourselves.<br/>
                            <br/>
                        In these moments, it’s easy to feel stuck — like the way forward has blurred.<br/>
                        <br/>
                        Whether you're navigating a heartbreak, trauma, anxiety, depression, fertility struggles, low self-esteem, or simply longing to understand yourself more deeply — you don’t have to do it alone.<br/>
                        <br/>
                        Therapy is a space to slow down, make sense of what you’re carrying, and begin to reconnect with yourself. It’s a space for clarity, healing, and growth.<br/>
                        <br/>
                        And often, the very places where we feel most stuck hold the seeds of our transformation. As David Richo says,<br/>
                        <br/>
                        <span className='text-xl text-left leading-relaxed font-bold' style={{ fontFamily: 'BodoniModa, serif' }}>‘Our wounds are often the openings into the best and most beautiful part of us.’”</span>
                        </p>
                    </div>
                </div>
                <div className='flex justify-start items-start gap-6 mx-auto w-fit py-16'>
                <p className='text-lg text-left w-[500px] pt-6' style={{ fontFamily: 'Lora, serif', lineHeight: '30px' }}>At Mind Craft Wellness, we believe therapy is most effective when it feels personal. That’s why, instead of asking you to choose a therapist from a list, we start with a 15-minute free consultation call.
                    <br/>
                    You’ll share your needs, preferences, and goals — and we’ll match you with the right therapist on our team.
                    <br/>
                    Our therapists are carefully selected, trained in trauma-informed, evidence-based approaches to provide a safe, non-judgemental space for you.
                    <br/>
                    Here, we explore those openings together — with gentleness, curiosity, and care — so you can move toward the life you want to live.
                    <br/>
                </p>
                <img src={plantter.src} className='w-[300px] h-[400px] object-cover rounded-lg shadow-lg'/>
                </div>
                
                {/* How it Works Section */}
                <div className="py-16 px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            {/* Left side - Image placeholder */}
                            <div className="relative">
                                <div className="bg-gray-200 rounded-lg h-[400px] overflow-hidden">
                                    <img src={takingTherapy.src} className='w-full h-full object-cover' alt="Therapy session"/>
                                </div>
                                {/* Chat bubble overlay */}
                                <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                                    <div className="flex items-center mb-2">
                                        <div className="w-8 h-8 bg-[#345041] rounded-full mr-2"></div>
                                        <div>
                                            <p className="font-semibold text-sm">Aishwaraya G.</p>
                                            <p className="text-xs text-gray-500">Doctor, Professional Counselor, MS, NCC</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-700 mb-2">
                                        Hi, how have you been feeling? I'm really happy with the progress you've made this week. Take a few moments today to try that mindfulness techniques we discussed.
                                    </p>
                                    <div className="flex justify-end items-center text-xs text-gray-500">
                                        <span>✓✓</span>
                                        <span className="ml-1">1 week ago</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Right side - How it works */}
                            <div>
                                <h2 className="text-3xl font-bold text-[#345041] mb-4">How it works</h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    Taking care of your mental health should feel easy and supportive. With our approach, you'll find the guidance and care you need to feel empowered on your journey to well-being.
                                </p>
                                
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="w-3 rounded-2xl bg-[#345041] mr-6 mt-2 h-16"></div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Step 1: Schedule a Free Call</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Set up a free consultation with one of our specialists to discuss your concerns and explore the best options for your needs. We'll help you find the right path forward, whether you're seeking therapy, guidance, or support.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start">
                                        <div className="w-1 bg-gray-500 mr-6 mt-2 h-16"></div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Step 2: Get Matched</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Tell us what's on your mind — your concerns, preferences, and therapy goals. We'll match you with a therapist who's the best fit for your unique needs.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-start">
                                        <div className="w-1 bg-gray-500 mr-6 mt-2 h-16"></div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-800 mb-2">Step 3: Begin Your Journey</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                Start your sessions online or in person at our Gurgaon clinic. Sessions begin at ₹1500 for 60 minutes, with fees varying by therapist.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <h1 className='text-3xl pt-16 pb-3 text-center font-bold' style={{ fontFamily: 'BrittanySignature, serif' }}>
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
                
                {/* Services and Support Areas */}
                <div className="bg-gradient-to-br from-[#f8f6f4] to-[#E7CDBF] py-20 px-8 mx-8 rounded-3xl my-16">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'BrittanySignature, serif' }}>
                            We support adults (21+) through:
                        </h2>
                        
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-3 h-3 bg-[#345041] rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-[#345041] mb-2">Life Transitions & Identity Work</h3>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Navigating change, loss, or uncertainty.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="w-3 h-3 bg-[#345041] rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-[#345041] mb-2">Trauma Recovery</h3>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Including developmental and relational trauma, abuse, and neglect.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="w-3 h-3 bg-[#345041] rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-[#345041] mb-2">Perinatal Mental Health</h3>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Emotional well-being during conception, pregnancy, and postpartum for women and men.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-start space-x-4">
                                <div className="w-3 h-3 bg-[#345041] rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-[#345041] mb-2">Mood, Anxiety, and Stress-Related Concerns</h3>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Including depression, generalised anxiety, social anxiety, low self-esteem, body image difficulties, and eating disorders.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-12 p-6 bg-white rounded-xl shadow-sm border-l-4 border-[#345041]">
                            <p className="text-lg leading-relaxed text-gray-700">
                                While we do not currently offer specialised support for neurodivergence or queer-affirmative therapy, we can connect you with trusted referral options for these needs.
                            </p>
                        </div>
                    </div>
                </div>
                
                {/* What Makes Us Different Section */}
                <div className="py-20 px-8 mx-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl mb-12 text-center" style={{ fontFamily: 'BrittanySignature, serif' }}>
                            Here's what makes us different:
                        </h2>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-2 h-2 bg-[#345041] rounded-full mt-3 flex-shrink-0"></div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        We offer evidence-based, trauma-informed care.
                                    </p>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-2 h-2 bg-[#345041] rounded-full mt-3 flex-shrink-0"></div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        A safe and inclusive environment that welcomes all identities and life experiences without judgment.
                                    </p>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-2 h-2 bg-[#345041] rounded-full mt-3 flex-shrink-0"></div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Ethical, confidential, and compassionate practice standards that prioritise your well-being and privacy.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="w-2 h-2 bg-[#345041] rounded-full mt-3 flex-shrink-0"></div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Our therapists see no more than five clients a day, ensuring they bring fresh focus and presence to every session.
                                    </p>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-2 h-2 bg-[#345041] rounded-full mt-3 flex-shrink-0"></div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Ongoing professional supervision and training for all therapists to maintain excellence in clinical practice.
                                    </p>
                                </div>
                                
                                <div className="flex items-start space-x-4">
                                    <div className="w-2 h-2 bg-[#345041] rounded-full mt-3 flex-shrink-0"></div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        A structured client feedback system to continually refine and improve our services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Testimonials/>
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
    )
}

export default HomePage;
