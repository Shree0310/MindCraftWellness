"use client"
import Marquee from "react-fast-marquee";

const OurValues = () => {
    const data = [
        {
            heading: "Mind-Body Approach",
            content: `We use research-backed methods in our practice that 
            consider the mind, body, lifestyle, and lived experiences — 
            from stress and relationships to diet, exercise, and trauma into our care.`,
            image: "🧠",
            color: "#345041"
        },
        {
            heading: "Inclusive and Compassionate",
            content: `Whoever you are, and whatever you carry, you&rsquo;ll be met here with sensitivity, respect, and care.`,
            image: "🤝",
            color: "#E7CDBF"
        },
        {
            heading: "Focused and Ethical Practice",
            content: `With limited daily caseloads and strict confidentiality, our therapists bring full presence and integrity to every session.`,
            image:"⚖️",
            color: "#8B4513"

        },
        {
            heading: "Commitment to Growth",
            content: `Through ongoing training and supervision, we continually refine and deepen our practice.`,
            image: "🌱",
            color: "#654321"
        },
        {
            heading: "Shaped by You",
            content: `We actively invite and integrate client feedback, ensuring our services evolve with your needs.`,
            image: "💬",
            color:"#A0522D"
        }

    ]
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

                    <div className="flex">
                        <Marquee speed={50}>
                            {data.map((value,idx) => (
                                <div key={`value - ${idx}`} className="group hover:transform hover:scale-105 transition-all duration-300 max-w-80 h-[308px] flex-shrink-0 ml-10">
                                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 h-full border-l-4 transition-all duration-300"
                                         style={{borderColor: value.color}}>

                                        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                                             style={{ backgroundColor: value.color}}>
                                            <span className="text-white text-xl">{value.image}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-[#345041] mb-3"><p>{value.heading}</p></h3>
                                        <p className="text-gray-700 leading-relaxed">
                                            {value.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurValues;