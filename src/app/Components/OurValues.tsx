"use client"
const OurValues = () => {
    return (
        <>
            <div className="py-20 bg-gradient-to-br from-[#f8f6f4] to-[#E7CDBF] rounded-3xl">
                <div className="max-w-6xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-[#345041] mb-6" style={{ fontFamily: 'Lora, serif' }}>
                            Our Values
                        </h2>
                        <div className="w-16 h-0.5 bg-[#345041] mx-auto opacity-30"></div>
                    </div>

                    {/* Horizontal Scrolling Values */}
                    <div className="relative">
                        <div className="flex animate-scroll-horizontal">
                            {/* First set of values */}
                            <div className="flex gap-8 min-w-max">
                                {/* Mind-Body Approach */}
                                <div className="group hover:transform hover:scale-105 transition-all duration-300 w-80 flex-shrink-0">
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 h-full border-l-4 border-[#345041] transition-all duration-300">
                                        <div className="w-12 h-12 bg-[#345041] rounded-full flex items-center justify-center mb-4">
                                            <span className="text-white text-xl">🧠</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#345041] mb-3"><p>{"Mind-Body Approach"}</p></h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            We use research-backed methods in our practice that consider the mind, body, lifestyle, and lived experiences — from stress and relationships to diet, exercise, and trauma into our care.
                                        </p>
                                    </div>
                                </div>

                                {/* Inclusive and Compassionate */}
                                <div className="group hover:transform hover:scale-105 transition-all duration-300 w-80 flex-shrink-0">
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 h-full border-l-4 border-[#E7CDBF] transition-all duration-300">
                                        <div className="w-12 h-12 bg-[#E7CDBF] rounded-full flex items-center justify-center mb-4">
                                            <span className="text-white text-xl">🤝</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#345041] mb-3"><p>{"Inclusive and Compassionate"}</p></h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Whoever you are, and whatever you carry, you&rsquo;ll be met here with sensitivity, respect, and care.
                                        </p>
                                    </div>
                                </div>

                                {/* Focused and Ethical Practice */}
                                <div className="group hover:transform hover:scale-105 transition-all duration-300 w-80 flex-shrink-0">
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 h-full border-l-4 border-[#8B4513] transition-all duration-300">
                                        <div className="w-12 h-12 bg-[#8B4513] rounded-full flex items-center justify-center mb-4">
                                            <span className="text-white text-xl">⚖️</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#345041] mb-3"><p>{"Focused and Ethical Practice"}</p></h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            With limited daily caseloads and strict confidentiality, our therapists bring full presence and integrity to every session.
                                        </p>
                                    </div>
                                </div>

                                {/* Commitment to Growth */}
                                <div className="group hover:transform hover:scale-105 transition-all duration-300 w-80 flex-shrink-0">
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 h-full border-l-4 border-[#654321] transition-all duration-300">
                                        <div className="w-12 h-12 bg-[#654321] rounded-full flex items-center justify-center mb-4">
                                            <span className="text-white text-xl">🌱</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#345041] mb-3"><p>{"Commitment to Growth"}</p></h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Through ongoing training and supervision, we continually refine and deepen our practice.
                                        </p>
                                    </div>
                                </div>

                                {/* Shaped by You */}
                                <div className="group hover:transform hover:scale-105 transition-all duration-300 w-80 flex-shrink-0">
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 h-full border-l-4 border-[#A0522D] transition-all duration-300">
                                        <div className="w-12 h-12 bg-[#A0522D] rounded-full flex items-center justify-center mb-4">
                                            <span className="text-white text-xl">💬</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#345041] mb-3"><p>{"Shaped by You"}</p></h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            We actively invite and integrate client feedback, ensuring our services evolve with your needs.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Duplicate set for seamless loop */}
                            <div className="flex gap-8 min-w-max">
                                {/* Mind-Body Approach */}
                                <div className="group hover:transform hover:scale-105 transition-all duration-300 w-80 flex-shrink-0">
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 h-full border-l-4 border-[#345041] transition-all duration-300">
                                        <div className="w-12 h-12 bg-[#345041] rounded-full flex items-center justify-center mb-4">
                                            <span className="text-white text-xl">🧠</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-[#345041] mb-3">Mind-Body Approach</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            We use research-backed methods in our practice that consider the mind, body, lifestyle, and lived experiences — from stress and relationships to diet, exercise, and trauma into our care.
                                        </p>
                                    </div>
                                </div>

                                {/* Inclusive and Compassionate */}
                                <div className="group hover:transform hover:scale-105 transition-all duration-300 w-80 flex-shrink-0">
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 h-full border-l-4 border-[#E7CDBF] transition-all duration-300">
                                        <div className="w-12 h-12 bg-[#E7CDBF] rounded-full flex items-center justify-center mb-4">
                                            <span className="text-white text-xl">🤝</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-[#345041] mb-3">Inclusive and Compassionate</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Whoever you are, and whatever you carry, you&rsquo;ll be met here with sensitivity, respect, and care.
                                        </p>
                                    </div>
                                </div>

                                {/* Focused and Ethical Practice */}
                                <div className="group hover:transform hover:scale-105 transition-all duration-300 w-80 flex-shrink-0">
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 h-full border-l-4 border-[#8B4513] transition-all duration-300">
                                        <div className="w-12 h-12 bg-[#8B4513] rounded-full flex items-center justify-center mb-4">
                                            <span className="text-white text-xl">⚖️</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-[#345041] mb-3">Focused and Ethical Practice</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            With limited daily caseloads and strict confidentiality, our therapists bring full presence and integrity to every session.
                                        </p>
                                    </div>
                                </div>

                                {/* Commitment to Growth */}
                                <div className="group hover:transform hover:scale-105 transition-all duration-300 w-80 flex-shrink-0">
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 h-full border-l-4 border-[#654321] transition-all duration-300">
                                        <div className="w-12 h-12 bg-[#654321] rounded-full flex items-center justify-center mb-4">
                                            <span className="text-white text-xl">🌱</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-[#345041] mb-3">Commitment to Growth</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            Through ongoing training and supervision, we continually refine and deepen our practice.
                                        </p>
                                    </div>
                                </div>

                                {/* Shaped by You */}
                                <div className="group hover:transform hover:scale-105 transition-all duration-300 w-80 flex-shrink-0">
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 h-full border-l-4 border-[#A0522D] transition-all duration-300">
                                        <div className="w-12 h-12 bg-[#A0522D] rounded-full flex items-center justify-center mb-4">
                                            <span className="text-white text-xl">💬</span>
                                        </div>
                                        <h3 className="text-xl font-semibold text-[#345041] mb-3">Shaped by You</h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            We actively invite and integrate client feedback, ensuring our services evolve with your needs.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurValues;