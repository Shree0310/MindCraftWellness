import Link from "next/link"

const WhatMakesUsDiff = () => {
    return <div className="div">
        <div className="py-24 mb-2 px-8 mx-8 relative bg-white/60 backdrop-blur-sm rounded-3xl border border-white/20 shadow-lg">
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
                            <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg border-l-4 border-[#345041] transition-all duration-300 h-36">
                                <div className="w-10 h-10 bg-[#345041] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                    <span className="text-white text-lg">🧠</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-[#345041] mb-1"><p>{"Evidence-Based Care"}</p></h3>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        We offer evidence-based, trauma-informed care that&rsquo;s proven to work.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg border-l-4 border-[#E7CDBF] transition-all duration-300 h-36">
                                <div className="w-10 h-10 bg-[#E7CDBF] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                    <span className="text-white text-lg">🤝</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-[#345041] mb-1"><p>{"Safe & Inclusive"}</p></h3>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        We strive to offer a welcoming environment for all identities and life experiences without judgement.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group hover:transform hover:scale-105 transition-all duration-300 mb-2">
                            <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg border-l-4 border-[#8B4513] transition-all duration-300 h-36">
                                <div className="w-10 h-10 bg-[#8B4513] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                    <span className="text-white text-lg">❤️</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-[#345041] mb-1"><p>{"Compassionate Standards"}</p></h3>
                                    <p className="text-gray-700 text-lg leading-relaxed mb-10">
                                        We mindfully work toward offering an Ethical and Compassionate practice that prioritises your wellbeing and privacy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <div className="group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg border-l-4 border-[#654321] transition-all duration-300 h-36">
                                <div className="w-10 h-10 bg-[#654321] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                    <span className="text-white text-lg">👥</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-[#345041] mb-1"><p>{"Focused Attention"}</p></h3>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Our therapists see no more than four clients a day for fresh focus and presence.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg border-l-4 border-[#A0522D] transition-all duration-300 h-36">
                                <div className="w-10 h-10 bg-[#A0522D] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                    <span className="text-white text-lg">🎓</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-[#345041] mb-1"><p>{"Continuous Learning"}</p></h3>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Our therapists undergo ongoing supervision and training to maintain excellence in clinical practice.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg border-l-4 border-[#345041] transition-all duration-300 h-36">
                                <div className="w-10 h-10 bg-[#345041] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                    <span className="text-white text-lg">📊</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-[#345041] mb-1"><p>{"Client Feedback"}</p></h3>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        We implement a structured feedback system with our clients to continually refine and improve our services.
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
    </div>
}
export default WhatMakesUsDiff;