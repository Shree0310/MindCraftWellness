'use client'
import takingTherapy from '../Assets/images/Taking-Therapy.jpg';

const HowItWorks = () => {
    return <>
        <div className="py-16 px-8 relative">
            {/* Decorative elements for How it Works */}
            {/* <div className="absolute top-24 left-12 opacity-20">
                <div className="w-16 h-20 bg-[#8B4513] rounded-lg transform rotate-12 shadow-lg"></div>
            </div> */}
            <div className="absolute top-28 right-16 opacity-15">
                <div className="w-12 h-12 bg-[#A0522D] rounded-full shadow-lg"></div>
            </div>
            <div className="absolute bottom-12 top-10 left-8 opacity-18">
                <svg className="w-20 h-8" viewBox="0 0 80 32" fill="none">
                    <path d="M0,16 Q20,8 40,16 T80,16" stroke="#654321" strokeWidth="1.5" fill="none" opacity="0.6" />
                </svg>
            </div>
            <div className="absolute bottom-8 right-12 opacity-15">
                <div className="w-14 h-18 bg-[#8B4513] rounded-lg transform -rotate-8 shadow-lg"></div>
            </div>
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    {/* Left side - Image placeholder */}

                    {/* Right side - How it works */}
                    <div>
                        <h2 className="text-4xl font-extrabold text-[#345041] mb-8" style={{ fontFamily: 'Lora, serif' }}>
                            <p>{"How Mind Craft Wellness works"}</p>
                        </h2>

                        <div className="space-y-6">
                            {/* Step 1 */}
                            <div className="bg-white rounded-2xl p-6 border border-[#E7CDBF] shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-start">
                                    <div className="text-5xl font-bold text-[#8B4513] mr-6 leading-none">1</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-[#345041] mb-3"><p>{"Schedule a Free Consultation"}</p></h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Book your free 15-minute consultation call. We'll discuss your concerns, answer questions, and explore how we can support your healing journey. No pressure, just a friendly conversation to see if we're the right fit.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="bg-white rounded-2xl p-6 border border-[#E7CDBF] shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-start">
                                    <div className="text-5xl font-bold text-[#8B4513] mr-6 leading-none">2</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-[#345041] mb-3"><p>{"Get Matched with Your Therapist"}</p></h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Based on your needs, preferences, and goals, we'll match you with the therapist who's best suited to support you. Our team includes specialists in trauma, anxiety, relationships, and more.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="bg-white rounded-2xl p-6 border border-[#E7CDBF] shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-start">
                                    <div className="text-5xl font-bold text-[#8B4513] mr-6 leading-none">3</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-[#345041] mb-3"><p>{"Begin Your Healing Journey"}</p></h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Start your therapy sessions at our welcoming Gurgaon clinic or online. Sessions are 60 minutes, starting at ₹1500, with fees varying by therapist specialization and experience.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Step 4 */}
                            <div className="bg-white rounded-2xl p-6 border border-[#E7CDBF] shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="flex items-start">
                                    <div className="text-5xl font-bold text-[#8B4513] mr-6 leading-none">4</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-[#345041] mb-3"><p>{"Switch Therapists Anytime"}</p></h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            If your first therapist isn't the right fit, it's easy to switch to another member of our team at no additional cost. Your comfort and connection with your therapist is our priority.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative mt-24">
                        <div className="bg-gray-200 rounded-lg h-[400px] overflow-hidden">
                            <img src={takingTherapy.src} className='w-full h-full object-cover' alt="Therapy session" />
                        </div>
                        {/* Chat bubble overlay */}
                        <div className="absolute bottom-4 left-4 bg-white rounded-lg p-4 shadow-lg max-w-xs">
                            <div className="flex items-center mb-2">
                                <div className="w-8 h-8 bg-[#345041] rounded-full mr-2"></div>
                                <div>
                                    <p className="font-semibold text-sm text-gray-700"><p>{"Aishwaraya G."}</p></p>
                                    <p className="text-xs text-gray-500"><p>{"Doctor, Professional Counselor, MS, NCC"}</p></p>
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
                </div>
            </div>
        </div>
    </>
}

export default HowItWorks;