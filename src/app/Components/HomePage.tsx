"use client"

import Link from 'next/link';
import LandingPage from '../Assets/images/LandingPage.png'
import ProfilePic from '../Assets/images/Profile-pic.png';
import couch from '../Assets/images/Couch.jpg';
import Testimonials from './Testimonials';
import HowItWorks from './HowItWorks';
import Footer from './Footer';

const HomePage = () => {
    return (
        <div className='scroll-auto bg-white'>
            {/* Landing page section with text overlay */}
            <div className='relative'>
                {/* Decorative elements for landing page */}
                <div className="absolute top-20 left-10 opacity-15 z-10">
                    <div className="w-16 h-20 border border-white rounded-lg transform rotate-12"></div>
                </div>
                <div className="absolute top-32 right-16 opacity-12 z-10">
                    <div className="w-12 h-12 bg-white rounded-full"></div>
                </div>
                <div className="absolute bottom-32 left-20 opacity-10 z-10">
                    <svg className="w-20 h-8" viewBox="0 0 80 32" fill="none">
                        <path d="M0,16 Q20,8 40,16 T80,16" stroke="white" strokeWidth="1" fill="none" opacity="0.6" />
                    </svg>
                </div>
                <div className="absolute bottom-20 right-10 opacity-15 z-10">
                    <div className="w-14 h-18 bg-white rounded-lg transform -rotate-8"></div>
                </div>

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
                            <Link href="/book-now" className='bg-[#345041] cursor-pointer text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#2a4033] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
                                Book Your Free Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative max-w-4xl mx-auto px-8 py-16'>
                <div className='bg-white rounded-2xl shadow-xl p-12 text-center relative overflow-hidden'>
                    {/* Decorative quote marks */}
                    <div className='absolute top-4 left-6 text-6xl text-[#345041] opacity-20' style={{ fontFamily: 'BrittanySignature, serif' }}>
                        &ldquo;
                    </div>
                    <div className='absolute bottom-4 right-6 text-6xl text-[#345041] opacity-20' style={{ fontFamily: 'BrittanySignature, serif' }}>
                        &rdquo;
                    </div>

                    {/* Main quote */}
                    <div className='relative z-10'>
                        <p className='text-3xl leading-relaxed text-[#2a4033] mb-6' style={{ fontFamily: 'BrittanySignature, serif' }}>
                            &ldquo;Owning our story and loving ourselves through that process is the bravest thing we&rsquo;ll ever do.&rdquo;
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

            <div className='bg-[#E7CDBF] h-full w-full text-black relative overflow-hidden'>
                {/* Decorative waves */}
                <div className="absolute top-0 left-0 w-full h-32 opacity-20">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#345041" opacity=".25"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#E7CDBF" opacity=".5"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#345041" opacity=".15"></path>
                    </svg>
                </div>
                <h1 className='font-sans font-bold text-2xl text-center pt-16 pb-8' style={{ fontFamily: 'BodoniModa, serif' }}>
                    Getting Started at Mind Craft Wellness
                </h1>
                <div className='flex justify-start items-start gap-6 mx-auto w-fit'>
                    <div className='relative'>
                        {/* Shadow elements behind couch - brown tones */}
                        <div className="absolute -top-6 -left-6 opacity-25 z-0">
                            <div className="w-20 h-24 bg-[#8B4513] rounded-lg transform rotate-8 shadow-lg"></div>
                        </div>
                        <div className="absolute -bottom-8 -right-8 opacity-20 z-0">
                            <div className="w-16 h-20 bg-[#654321] rounded-lg transform -rotate-6 shadow-lg"></div>
                        </div>
                        <div className="absolute top-1/3 -left-4 opacity-15 z-0">
                            <div className="w-12 h-12 bg-[#A0522D] rounded-full shadow-lg"></div>
                        </div>
                        <div className="absolute bottom-1/4 -right-4 opacity-18 z-0">
                            <div className="w-10 h-14 bg-[#8B4513] rounded-lg transform rotate-12 shadow-lg"></div>
                        </div>

                        <img src={couch.src} className='w-[400px] h-[380px] object-cover rounded-lg shadow-lg mt-8 relative z-10' alt="Comfortable therapy couch at Mind Craft Wellness" />
                        {/* <img src={flowers.src} className=' bg-[#E7CDBF] absolute w-[250px] h-[280px] object-cover rounded-lg shadow-lg transform rotate-16 mx-12 right-10 mb-10'/> */}
                    </div>
                    <div className='w-[500px] pt-6 pl-6 relative'>
                        <p className='text-lg text-left leading-relaxed py-4' style={{ fontFamily: 'Lora, serif', lineHeight: '40px' }}> At Mind Craft Wellness, we believe therapy works best when it feels personal.
                            Instead of leaving you to choose from a list, we begin with a free 15-minute consultation call. In this call, you’ll share what’s on your mind — your needs, preferences, and goals —
                            and we’ll help match you with the therapist who’s the best fit for you.
                            <br />
                            <span className='text-xl text-left leading-relaxed font-bold' style={{ fontFamily: 'BodoniModa, serif' }}>‘Our wounds are often the openings into the best and most beautiful part of us.’”</span>
                        </p>
                    </div>
                </div>

                {/* Diagonal Wave Connector */}
                <div className="relative py-2">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-64 h-12 transform rotate-12" viewBox="0 0 256 48" preserveAspectRatio="none">
                            <path
                                d="M0,24 Q32,8 64,24 Q96,40 128,24 Q160,8 192,24 Q224,40 256,24"
                                stroke="#345041"
                                strokeWidth="1.5"
                                fill="none"
                                opacity="0.4"
                                strokeLinecap="round"
                            />
                            <path
                                d="M0,28 Q32,12 64,28 Q96,44 128,28 Q160,12 192,28 Q224,44 256,28"
                                stroke="#E7CDBF"
                                strokeWidth="1"
                                fill="none"
                                opacity="0.3"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </div>

                {/* Background Decorative Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Decorative Frame peeking from top-left */}
                    <div className="absolute -top-8 -left-8 opacity-20">
                        <div className="w-24 h-32 border border-[#345041] rounded-lg bg-[#f8f6f4] transform rotate-12">
                            <div className="w-16 h-20 bg-[#E7CDBF] rounded-md opacity-60 m-2"></div>
                        </div>
                    </div>

                    {/* Decorative Plant peeking from top-right */}
                    <div className="absolute -top-6 -right-6 opacity-25">
                        <div className="w-12 h-16 bg-[#345041] rounded-full shadow-sm transform -rotate-6">
                            <div className="w-8 h-12 bg-[#2a4033] rounded-full m-1"></div>
                        </div>
                        {/* Plant leaves peeking out */}
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                            <div className="w-6 h-4 bg-[#345041] rounded-full opacity-80 transform rotate-12"></div>
                        </div>
                    </div>

                    {/* Decorative Wave peeking from bottom-left */}
                    <div className="absolute -bottom-4 -left-4 opacity-15">
                        <svg className="w-16 h-12 transform rotate-45" viewBox="0 0 64 48" fill="none">
                            <path d="M0,24 Q16,12 32,24 T64,24" stroke="#345041" strokeWidth="1" fill="none" opacity="0.6" />
                            <path d="M0,30 Q16,18 32,30 T64,30" stroke="#E7CDBF" strokeWidth="0.8" fill="none" opacity="0.4" />
                        </svg>
                    </div>

                    {/* Additional subtle elements */}
                    <div className="absolute top-1/4 right-1/4 w-12 h-12 border border-[#345041] rounded-full opacity-8 transform rotate-45"></div>
                    <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-[#E7CDBF] rounded-full opacity-10"></div>
                    <div className="absolute top-1/2 right-1/3 w-6 h-6 border border-[#345041] rounded-full opacity-6"></div>
                </div>

                <div className='flex justify-start items-start gap-6 mx-auto w-fit py-16'>
                    {/* <p className='text-lg text-left w-[500px] pt-6' style={{ fontFamily: 'Lora, serif', lineHeight: '30px' }}>At Mind Craft Wellness, we believe therapy is most effective when it feels personal. That’s why, instead of asking you to choose a therapist from a list, we start with a 15-minute free consultation call.<br/>
                    You’ll share your needs, preferences, and goals — and we’ll match you with the right therapist on our team.
                    <br/>
                    Our therapists are carefully selected, trained in trauma-informed, evidence-based approaches to provide a safe, non-judgemental space for you.
                    <br/>
                    Here, we explore those openings together — with gentleness, curiosity, and care — so you can move toward the life you want to live.
                    <br/>
                </p> */}
                    <div className='relative'>
                        {/* Shadow elements behind planter - brown tones */}
                        {/* <div className="absolute -top-4 -right-4 opacity-22 z-0">
                        <div className="w-18 h-22 bg-[#654321] rounded-full shadow-lg transform rotate-6"></div>
                    </div> */}
                        {/* <div className="absolute -bottom-6 -left-6 opacity-18 z-0">
                        <div className="w-14 h-14 bg-[#8B4513] rounded-full shadow-lg transform -rotate-12"></div>
                    </div> */}
                        {/* <div className="absolute top-1/4 -right-3 opacity-15 z-0">
                        <div className="w-12 h-16 bg-[#A0522D] rounded-lg shadow-lg transform rotate-8"></div>
                    </div> */}
                        <div className="absolute bottom-1/3 -left-3 opacity-20 z-0">
                            <div className="w-10 h-12 bg-[#654321] rounded-lg shadow-lg transform -rotate-6"></div>
                        </div>

                        {/* <img src={plantter.src} className='w-[400px] h-[400px] object-cover rounded-lg shadow-lg relative z-10'/> */}
                    </div>
                </div>

                {/* How it Works Section */}
                <HowItWorks />

                <h1 className='text-3xl pt-16 pb-3 text-center font-bold' style={{ fontFamily: 'BrittanySignature, serif' }}>
                    Hi, I’m Aishwaraya Goud —
                </h1>
                <span className='text-lg py-2 text-center block pb-8' style={{ fontFamily: 'Lora, serif' }}>
                    Founder of Mind Craft Wellness,<br />
                    and a certified AEDP and CBT therapist based in Gurgaon.
                </span>
                <div className='flex justify-start items-start gap-6 mx-auto w-fit'>
                    <img src={ProfilePic.src} className='w-[300px] h-[400px] object-cover' alt="Aishwaraya Goud - Founder of Mind Craft Wellness" />
                    <p className='text-lg text-left w-[500px] pt-6' style={{ fontFamily: 'Lora, serif', lineHeight: '30px' }}>
                        At Mind Craft Wellness, you might work with me directly, or with one of the other experienced therapists on our team. I ensure our team shares the same commitment to warmth, skill, and trauma-informed care, so that every client feels supported and understood.<br />
                        <br />
                        Therapy here isn’t about quick fixes or advice-giving — it’s about creating a container for your emotions, where you feel deeply held and supported, so you can uncover your own way forward.
                        {"If you&rsquo;d like to learn more about my approach and journey as a therapist, you can [read more about me here]."}
                    </p>
                </div>
                <div className='text-center block py-8 pl-8'>
                    <button className="bg-[#345041] font-sans text-xl rounded-md text-white font-medium p-2 cursor-pointer shadow-md w-72 h-12 m-2 hover:bg-[#2a4033] transition-colors duration-300 transform hover:scale-105">
                        Book a free consultation
                    </button>
                </div>

                {/* Services and Support Areas */}
                <div className="bg-gradient-to-br from-[#f8f6f4] to-[#E7CDBF] py-20 px-8 mx-8 rounded-3xl my-16 relative">
                    {/* Decorative elements for Services section */}
                    <div className="absolute top-8 left-8 opacity-15">
                        <div className="w-16 h-20 bg-[#8B4513] rounded-lg transform rotate-8 shadow-lg"></div>
                    </div>
                    <div className="absolute top-16 right-12 opacity-12">
                        <svg className="w-20 h-8" viewBox="0 0 80 32" fill="none">
                            <path d="M0,16 Q20,8 40,16 T80,16" stroke="#A0522D" strokeWidth="1.5" fill="none" opacity="0.6" />
                        </svg>
                    </div>
                    <div className="absolute bottom-12 left-16 opacity-18">
                        <div className="w-12 h-12 bg-[#654321] rounded-full shadow-lg"></div>
                    </div>
                    <div className="absolute bottom-8 right-8 opacity-15">
                        <div className="w-14 h-18 bg-[#8B4513] rounded-lg transform -rotate-6 shadow-lg"></div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl mb-12 text-center tracking-widest" style={{ fontFamily: 'BrittanySignature, serif' }}>
                            We support adults (21+) through:
                        </h2>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-3 h-3 bg-[#345041] rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-[#345041] mb-2"><p>{"Life Transitions & Identity Work"}</p></h3>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Navigating change, loss, or uncertainty.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-3 h-3 bg-[#345041] rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-[#345041] mb-2"><p>{"Trauma Recovery"}</p></h3>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Including developmental and relational trauma, abuse, and neglect.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-3 h-3 bg-[#345041] rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-[#345041] mb-2"><p>{"Perinatal Mental Health"}</p></h3>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        Emotional well-being during conception, pregnancy, and postpartum for women and men.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-3 h-3 bg-[#345041] rounded-full mt-3 flex-shrink-0"></div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-[#345041] mb-2"><p>{"Mood, Anxiety, and Stress-Related Concerns"}</p></h3>
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
                <div className="py-24 px-8 mx-8 relative bg-white/60 backdrop-blur-sm rounded-3xl border border-white/20 shadow-lg">
                    {/* Enhanced decorative elements */}
                    <div className="absolute top-8 left-8 opacity-20">
                        <div className="w-16 h-20 bg-[#8B4513] rounded-lg transform rotate-8 shadow-lg"></div>
                    </div>
                    <div className="absolute top-16 right-12 opacity-15">
                        <svg className="w-20 h-8" viewBox="0 0 80 32" fill="none">
                            <path d="M0,16 Q20,8 40,16 T80,16" stroke="#A0522D" strokeWidth="1.5" fill="none" opacity="0.6" />
                        </svg>
                    </div>
                    <div className="absolute bottom-12 left-16 opacity-25">
                        <div className="w-12 h-12 bg-[#654321] rounded-full shadow-lg"></div>
                    </div>
                    <div className="absolute bottom-8 right-8 opacity-20">
                        <div className="w-14 h-18 bg-[#8B4513] rounded-lg transform -rotate-6 shadow-lg"></div>
                    </div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        {/* Enhanced Header */}
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center space-x-3 mb-6">
                                <div className="w-8 h-0.5 bg-[#345041] opacity-30"></div>
                                <span className="text-sm font-semibold text-[#345041] uppercase tracking-wider"><p>{"Why Choose Us"}</p></span>
                                <div className="w-8 h-0.5 bg-[#345041] opacity-30"></div>
                            </div>
                            <h2 className="text-5xl font-bold text-[#345041] mb-6" style={{ fontFamily: 'BrittanySignature, serif' }}>
                                Here&rsquo;s what makes us different
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Lora, serif' }}>
                                We believe in creating an environment where healing happens naturally, with care that goes beyond traditional therapy.
                            </p>
                        </div>

                        {/* Enhanced Content Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Left Column */}
                            <div className="space-y-6">
                                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                                    <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg border-l-4 border-[#345041] transition-all duration-300 h-32">
                                        <div className="w-10 h-10 bg-[#345041] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                            <span className="text-white text-lg">🧠</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-[#345041] mb-1"><p>{"Evidence-Based Care"}</p></h3>
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                We offer evidence-based, trauma-informed care that&rsquo;s proven to work.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                                    <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg border-l-4 border-[#E7CDBF] transition-all duration-300 h-32">
                                        <div className="w-10 h-10 bg-[#E7CDBF] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                            <span className="text-white text-lg">🤝</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-[#345041] mb-1"><p>{"Safe & Inclusive"}</p></h3>
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                A welcoming environment for all identities and life experiences without judgment.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                                    <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg border-l-4 border-[#8B4513] transition-all duration-300 h-32">
                                        <div className="w-10 h-10 bg-[#8B4513] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                            <span className="text-white text-lg">❤️</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-[#345041] mb-1"><p>{"Compassionate Standards"}</p></h3>
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                Ethical, confidential practice that prioritises your well-being and privacy.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="space-y-6">
                                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                                    <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg border-l-4 border-[#654321] transition-all duration-300 h-32">
                                        <div className="w-10 h-10 bg-[#654321] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                            <span className="text-white text-lg">👥</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-[#345041] mb-1"><p>{"Focused Attention"}</p></h3>
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                Our therapists see no more than five clients a day for fresh focus and presence.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                                    <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg border-l-4 border-[#A0522D] transition-all duration-300 h-32">
                                        <div className="w-10 h-10 bg-[#A0522D] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                            <span className="text-white text-lg">🎓</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-[#345041] mb-1"><p>{"Continuous Learning"}</p></h3>
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                Ongoing supervision and training to maintain excellence in clinical practice.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                                    <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg border-l-4 border-[#345041] transition-all duration-300 h-32">
                                        <div className="w-10 h-10 bg-[#345041] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                            <span className="text-white text-lg">📊</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-[#345041] mb-1"><p>{"Client Feedback"}</p></h3>
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                A structured feedback system to continually refine and improve our services.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div className="text-center mt-16">
                            <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg">
                                <span className="text-[#345041] font-semibold"><p>{"Ready to experience the difference?"}</p></span>
                                <Link href="/book-now" className="bg-[#345041] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#2a4033] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg">
                                    Book Your Session
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <Testimonials />
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

export default HomePage;
