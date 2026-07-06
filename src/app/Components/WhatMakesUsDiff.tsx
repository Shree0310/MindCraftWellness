import Link from "next/link"

const WhatMakesUsDiff = () => {
    return <div className="div">
        <div className="py-24 mb-2 px-8 mx-8 relative bg-[#FAF6F0]/90 backdrop-blur-sm border border-[#E8DBC9]/20 shadow-lg" style={{ borderRadius: '20px' }}>
            {/* Enhanced decorative elements */}
            <div className="absolute top-8 left-8 opacity-15">
                <div className="w-16 h-20 bg-[#95573A] rounded-lg transform rotate-8"></div>
            </div>
            <div className="absolute top-16 right-12 opacity-12">
                <svg className="w-20 h-8" viewBox="0 0 80 32" fill="none">
                    <path d="M0,16 Q20,8 40,16 T80,16" stroke="#B6724F" strokeWidth="1.5" fill="none" opacity="0.6" />
                </svg>
            </div>
            <div className="absolute bottom-12 left-16 opacity-15">
                <div className="w-12 h-12 bg-[#B6724F] rounded-full"></div>
            </div>
            <div className="absolute bottom-8 right-8 opacity-12">
                <div className="w-14 h-18 bg-[#95573A] rounded-lg transform -rotate-6"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Enhanced Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-3 mb-6">
                        <div className="w-8 h-0.5 bg-[#B6724F] opacity-40"></div>
                        <span className="eyebrow-label"><p>{"Why Choose Us"}</p></span>
                        <div className="w-8 h-0.5 bg-[#B6724F] opacity-40"></div>
                    </div>
                    <h2 className="md:text-5xl text-3xl text-[#2B231C] mb-6" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                        Here&rsquo;s what makes us different
                    </h2>
                    <p className="md:text-lg text-lg text-[#5C4B3C] max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                        We believe in creating an environment where healing happens naturally, with care that goes beyond traditional therapy.
                    </p>
                </div>

                {/* Enhanced Content Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                        <div className="group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="flex items-start space-x-4 p-4 bg-[#F2E8DD] shadow-md hover:shadow-lg border-l-4 border-[#B6724F] transition-all duration-300 h-36" style={{ borderRadius: '16px' }}>
                                <div className="w-10 h-10 bg-[#B6724F] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                    <span className="text-white text-lg">🧠</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg text-[#2B231C] mb-1" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}><p>{"Evidence-Based Care"}</p></h3>
                                    <p className="text-[#5C4B3C] md:text-lg text-sm leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                        We offer evidence-based, trauma-informed care that&rsquo;s proven to work.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="flex items-start space-x-4 p-4 bg-[#F2E8DD] shadow-md hover:shadow-lg border-l-4 border-[#E8DBC9] transition-all duration-300 h-36" style={{ borderRadius: '16px' }}>
                                <div className="w-10 h-10 bg-[#E8DBC9] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                    <span className="text-[#2B231C] text-lg">🤝</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg text-[#2B231C] mb-1" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}><p>{"Safe & Inclusive"}</p></h3>
                                    <p className="text-[#5C4B3C] md:text-lg text-sm leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                        We strive to offer a welcoming environment for all identities and life experiences without judgement.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group hover:transform hover:scale-105 transition-all duration-300 mb-2">
                            <div className="flex items-start space-x-4 p-4 bg-[#F2E8DD] shadow-md hover:shadow-lg border-l-4 border-[#95573A] transition-all duration-300 h-36" style={{ borderRadius: '16px' }}>
                                <div className="w-10 h-10 bg-[#95573A] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                    <span className="text-white text-lg">❤️</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg text-[#2B231C] mb-1" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}><p>{"Compassionate Ways"}</p></h3>
                                    <p className="text-[#5C4B3C] md:text-lg text-sm leading-relaxed mb-10" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                        We mindfully work toward a Compassionate and Ethical, practice that prioritises your wellbeing and privacy.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        <div className="group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="flex items-start space-x-4 p-4 bg-[#F2E8DD] shadow-md hover:shadow-lg border-l-4 border-[#95573A] transition-all duration-300 h-36" style={{ borderRadius: '16px' }}>
                                <div className="w-10 h-10 bg-[#95573A] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                    <span className="text-white text-lg">👥</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg text-[#2B231C] mb-1" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}><p>{"Focused Attention"}</p></h3>
                                    <p className="text-[#5C4B3C] md:text-lg text-sm leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                        Our therapists see no more than four clients a day for fresh focus and presence.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="flex items-start space-x-4 p-4 bg-[#F2E8DD] shadow-md hover:shadow-lg border-l-4 border-[#B6724F] transition-all duration-300 h-36" style={{ borderRadius: '16px' }}>
                                <div className="w-10 h-10 bg-[#B6724F] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                    <span className="text-white text-lg">🎓</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg text-[#2B231C] mb-1" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}><p>{"Continuous Learning"}</p></h3>
                                    <p className="text-[#5C4B3C] md:text-lg text-sm leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                        Our therapists undergo ongoing supervision and training to maintain excellence in clinical practice.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group hover:transform hover:scale-105 transition-all duration-300">
                            <div className="flex items-start space-x-4 p-4 bg-[#F2E8DD] shadow-md hover:shadow-lg border-l-4 border-[#B6724F] transition-all duration-300 h-36" style={{ borderRadius: '16px' }}>
                                <div className="w-10 h-10 bg-[#B6724F] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                                    <span className="text-white text-lg">📊</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg text-[#2B231C] mb-1" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}><p>{"Client Feedback"}</p></h3>
                                    <p className="text-[#5C4B3C] md:text-lg text-sm leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                        We implement a structured feedback system with our clients to continually refine and improve our services.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-16">
                    <div className="inline-flex items-center space-x-4 bg-[#F2E8DD] rounded-full md:px-8 px-4 md:py-4 py-2 shadow-lg">
                        <span className="text-[#2B231C] md:text-lg text-sm" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 400 }}><p>{"Ready to experience the difference?"}</p></span>
                        <Link href="/book-now" className="bg-[#B6724F] md:text-sm text-xs text-white md:px-6 px-4 md:py-2 py-1 rounded-full hover:bg-[#95573A] transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg uppercase tracking-wider" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500, letterSpacing: '0.08em' }}>
                            Book Your Session
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default WhatMakesUsDiff;