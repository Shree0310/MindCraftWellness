"use client"
import { cn } from "@/lib/utils";
import React from "react";
import Marquee from "react-fast-marquee";

const OurValues = ({className, children}: {
    className?: string,
    children?: React.ReactNode
}) => {
    const data = [
        {
            heading: "Mind-Body Approach",
            content: `We use research-backed methods in our practice that
            consider the mind, body, lifestyle, and lived experiences —
            from stress and relationships to diet, exercise, and trauma into our care.`,
            image: "🧠",
            color: "#B6724F"
        },
        {
            heading: "Inclusive and Compassionate",
            content: `Whoever you are, and whatever you carry, you'll be met here with sensitivity, respect, and care.`,
            image: "🤝",
            color: "#E8DBC9"
        },
        {
            heading: "Focused and Ethical Practice",
            content: `With limited daily caseloads and strict confidentiality, our therapists bring full presence and integrity to every session.`,
            image:"⚖️",
            color: "#95573A"

        },
        {
            heading: "Commitment to Growth",
            content: `Through ongoing training and supervision, we continually refine and deepen our practice.`,
            image: "🌱",
            color: "#B6724F"
        },
        {
            heading: "Shaped by You",
            content: `We actively invite and integrate client feedback, ensuring our services evolve with your needs.`,
            image: "💬",
            color:"#95573A"
        }

    ]
    return (
        <div className={cn("w-full", className)}>
            {children}
            <div className="py-20" style={{ borderRadius: '20px' }}>
                <div className="max-w-6xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl text-[#2B231C] mb-6" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                            Our Values
                        </h2>
                        <div className="w-16 h-0.5 bg-[#B6724F] mx-auto opacity-40"></div>
                    </div>

                    <div className="flex overflow-visible">
                        <Marquee speed={50} pauseOnHover={true}>
                            {data.map((value,idx) => (
                                <div key={`value - ${idx}`} className="group hover:transform transition-all duration-300 max-w-80 h-[308px] flex-shrink-0 ml-10">
                                    <div className="bg-[#FAF6F0] hover:scale-110 shadow-lg hover:shadow-2xl p-6 h-full border-l-4 transition-all duration-300"
                                         style={{borderColor: value.color, borderRadius: '16px'}}>

                                        <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                                             style={{ backgroundColor: value.color}}>
                                            <span className="text-white text-xl">{value.image}</span>
                                        </div>
                                        <h3 className="text-xl text-[#2B231C] mb-3" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}><p>{value.heading}</p></h3>
                                        <p className="text-[#5C4B3C] leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                            {value.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurValues;