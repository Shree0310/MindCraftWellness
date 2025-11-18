import { cn } from "@/lib/utils"

const WhoWeFitFor = ({className}:{
    className?: string
}) => {
    return <div className={cn("", className)}>
        <div className="py-20 ">
            <div className="max-w-6xl mx-auto px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-3 mb-6">
                        <div className="w-12 h-0.5 bg-[#345041] opacity-30"></div>
                        <span className="text-sm font-semibold text-[#345041] uppercase tracking-wider">Are We Right For Each Other?</span>
                        <div className="w-12 h-0.5 bg-[#345041] opacity-30"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#345041] mb-4" style={{ fontFamily: 'BodoniModa, serif' }}>
                        Who We&rsquo;re a Good Fit For
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Lora, serif' }}>
                        We work well with therapists who share these values
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    {/* Left Side - Checklist */}
                    <div className="space-y-6">
                        {[
                            {
                                text: "Value depth over quick fixes",
                                icon: "🌊"
                            },
                            {
                                text: "Are process-oriented, relational, and emotionally present",
                                icon: "💫"
                            },
                            {
                                text: "Are open to reflective practice, feedback, and ongoing supervision",
                                icon: "🪞"
                            },
                            {
                                text: "Practise or want to integrate trauma-informed, somatic, AEDP, attachment-based, or experiential approaches",
                                icon: "🧠"
                            },
                            {
                                text: "Want a collaborative and learning-focused clinic culture",
                                icon: "🤝"
                            },
                            {
                                text: "Care about ethical, attuned, and grounded therapy",
                                icon: "⚖️"
                            }
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-4 group">
                                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#345041] to-[#2a4033] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <span className="text-xl">{item.icon}</span>
                                </div>
                                <div className="flex-1 pt-2">
                                    <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Visual Card */}
                    <div className="relative">
                        {/* Decorative elements */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#E7CDBF] rounded-full opacity-20 blur-2xl"></div>
                        <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#345041] rounded-full opacity-10 blur-3xl"></div>
                        
                        <div className="bg-gradient-to-br from-[#f8f6f4] to-[#E7CDBF] rounded-3xl p-10 shadow-xl relative overflow-hidden">
                            {/* Decorative pattern */}
                            <div className="absolute top-0 right-0 w-48 h-48 opacity-10">
                                <svg viewBox="0 0 200 200">
                                    <circle cx="100" cy="100" r="80" stroke="#345041" strokeWidth="2" fill="none"/>
                                    <circle cx="100" cy="100" r="60" stroke="#345041" strokeWidth="2" fill="none"/>
                                    <circle cx="100" cy="100" r="40" stroke="#345041" strokeWidth="2" fill="none"/>
                                </svg>
                            </div>

                            <div className="relative z-10 text-center">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                                    <span className="text-4xl">✨</span>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-[#345041] mb-4" style={{ fontFamily: 'Lora, serif' }}>
                                    Does This Sound Like You?
                                </h3>
                                
                                    <p className="text-lg text-gray-700 leading-relaxed mb-6" style={{ fontFamily: 'Lora, serif' }}>
                                    We&rsquo;re looking for therapists who bring curiosity, compassion, and a commitment to growth—both for themselves and their clients.
                                </p>

                                <div className="bg-white rounded-2xl p-6 shadow-lg">
                                    <p className="text-xl font-medium text-[#345041] italic" style={{ fontFamily: 'Lora, serif' }}>
                                        &ldquo;If this resonates, you&rsquo;ll likely find a home here.&rdquo;
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA Section */}
                <div className="bg-gradient-to-br from-[#345041] to-[#2a4033] rounded-3xl p-10 md:p-12 text-center shadow-2xl relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mt-32"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mb-32"></div>
                    
                    <div className="relative z-10">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6" style={{ fontFamily: 'BodoniModa, serif' }}>
                            Ready to Explore a Partnership?
                        </h3>
                        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Lora, serif' }}>
                            We&rsquo;d love to hear from you. Let&rsquo;s talk about how we might support your practice and growth.
                        </p>
                        <button className="bg-white text-[#345041] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Get in Touch
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default WhoWeFitFor;