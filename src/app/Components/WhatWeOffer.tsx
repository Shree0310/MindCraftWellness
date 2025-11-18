"use client"

import { cn } from "@/lib/utils";
import React from "react";

const WhatWeOffer = ({className, children}:{
    className?: string,
    children?: React.ReactNode
}) => {
    return <div className={cn("", className)}>
        {children}
        <div className="py-20">
            <div className="max-w-6xl mx-auto px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-3 mb-6">
                        <div className="w-12 h-0.5 bg-[#345041] opacity-30"></div>
                        <span className="text-sm font-semibold text-[#345041] uppercase tracking-wider">Join Our Team</span>
                        <div className="w-12 h-0.5 bg-[#345041] opacity-30"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#345041] mb-4" style={{ fontFamily: 'BodoniModa, serif' }}>
                        What We Offer
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'Lora, serif' }}>
                        Building a workplace where therapists can thrive, not just survive
                    </p>
                </div>

                {/* Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Benefit 1 */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#345041] to-[#2a4033] rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-gradient-to-br from-[#345041] to-[#2a4033] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">👥</span>
                            </div>
                            
                            {/* Content */}
                            <h3 className="text-2xl font-bold text-[#345041] mb-4" style={{ fontFamily: 'Lora, serif' }}>
                                Regular Peer Supervision & Mentorship
                            </h3>
                            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                                Supported by Aishwaraya. Thoughtful guidance, reflective practice and collaborative case discussions.
                            </p>
                            
                            {/* Decorative element */}
                            <div className="absolute top-4 right-4 w-20 h-20 bg-[#E7CDBF] rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
                        </div>
                    </div>

                    {/* Benefit 2 */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#E7CDBF] to-[#f8f6f4] rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#E7CDBF] to-[#f8f6f4] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">🤝</span>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-[#345041] mb-4" style={{ fontFamily: 'Lora, serif' }}>
                                A Supportive, Relational Work Culture
                            </h3>
                            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                                Rooted in mutual respect, healthy boundaries, honest feedback, and warmth.
                            </p>
                            
                            <div className="absolute top-4 right-4 w-20 h-20 bg-[#345041] rounded-full opacity-5 group-hover:scale-150 transition-transform duration-500"></div>
                        </div>
                    </div>

                    {/* Benefit 3 */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#345041] to-[#2a4033] rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#345041] to-[#2a4033] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">🎯</span>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-[#345041] mb-4" style={{ fontFamily: 'Lora, serif' }}>
                                Flexibility & Autonomy
                            </h3>
                            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                                Practise in your style, at your pace, with freedom to shape your clinical identity.
                            </p>
                            
                            <div className="absolute top-4 right-4 w-20 h-20 bg-[#E7CDBF] rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
                        </div>
                    </div>

                    {/* Benefit 4 */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#E7CDBF] to-[#f8f6f4] rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#E7CDBF] to-[#f8f6f4] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">📋</span>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-[#345041] mb-4" style={{ fontFamily: 'Lora, serif' }}>
                                Zero Admin Burden
                            </h3>
                            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                                We manage bookings, invoicing, reminders, notes and backend systems so you can focus fully on therapy.
                            </p>
                            
                            <div className="absolute top-4 right-4 w-20 h-20 bg-[#345041] rounded-full opacity-5 group-hover:scale-150 transition-transform duration-500"></div>
                        </div>
                    </div>

                    {/* Benefit 5 */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#345041] to-[#2a4033] rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#345041] to-[#2a4033] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">🌿</span>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-[#345041] mb-4" style={{ fontFamily: 'Lora, serif' }}>
                                Wellness Leave & Offline Therapy Space
                            </h3>
                            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                                Take the time you need. Work from a thoughtfully designed, grounded physical space.
                            </p>
                            
                            <div className="absolute top-4 right-4 w-20 h-20 bg-[#E7CDBF] rounded-full opacity-10 group-hover:scale-150 transition-transform duration-500"></div>
                        </div>
                    </div>

                    {/* Benefit 6 */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#E7CDBF] to-[#f8f6f4] rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                        <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#E7CDBF] to-[#f8f6f4] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-3xl">💰</span>
                            </div>
                            
                            <h3 className="text-2xl font-bold text-[#345041] mb-4" style={{ fontFamily: 'Lora, serif' }}>
                                Commission-Based Compensation
                            </h3>
                            <p className="text-gray-700 leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                                With a sustainable 4-session-per-day cap to ensure clinical quality and therapist wellbeing.
                            </p>
                            
                            <div className="absolute top-4 right-4 w-20 h-20 bg-[#345041] rounded-full opacity-5 group-hover:scale-150 transition-transform duration-500"></div>
                        </div>
                    </div>
                </div>

                {/* Bottom CTA or Quote */}
                <div className="mt-16 text-center">
                    <div className="bg-gradient-to-br from-[#345041] to-[#2a4033] rounded-3xl p-10 text-white max-w-3xl mx-auto shadow-2xl">
                        <p className="text-xl md:text-2xl font-light leading-relaxed mb-6" style={{ fontFamily: 'Lora, serif' }}>
                            "We believe therapists do their best work when they feel supported, valued, and free to grow."
                        </p>
                        <div className="w-16 h-1 bg-[#E7CDBF] mx-auto rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default WhatWeOffer;