"use client"

import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Link href="/" className="group">
                            <h1 className="text-3xl cursor-pointer md:text-4xl font-extrabold text-[#345041] transition-colors duration-300 group-hover:text-[#2a4033]" style={{ fontFamily: 'BodoniModa, serif' }}>
                                Mind Craft Wellness
                            </h1>
                            <span className="font-sans text-xs md:text-sm text-gray-600 block mt-1">
                                THERAPY THAT HOLDS, HEALS AND GROWS
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8 font-bold text-xl" style={{ fontFamily: 'Lora, serif' }}>
                        <Link
                            href="/About"
                            className="text-gray-700 hover:text-[#345041] transition-colors duration-300 relative group"
                        >
                            About
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#345041] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="/what-we-work-with"
                            className="text-gray-700 hover:text-[#345041] transition-colors duration-300 relative group"
                        >
                            Specialities
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#345041] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="/Blog"
                            className="text-gray-700 hover:text-[#345041] transition-colors duration-300 relative group"
                        >
                            Blog
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#345041] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="/Careers"
                            className="text-gray-700 hover:text-[#345041] transition-colors duration-300 relative group"
                        >
                            Careers
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#345041] transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            href="/book-now"
                            className="bg-[#345041] hover:bg-[#2a4033] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-lg"
                        >
                            Book Now
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#345041] hover:bg-gray-100 transition-colors duration-300"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-100 py-4" style={{ fontFamily: 'BodoniModa, serif' }}>
                        <div className="flex flex-col space-y-4">
                            <Link
                                href="/About"
                                className="text-gray-700 hover:text-[#345041] font-medium transition-colors duration-300 px-4 py-2 rounded-md hover:bg-gray-50 text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/what-we-work-with"
                                className="text-gray-700 hover:text-[#345041] font-medium transition-colors duration-300 px-4 py-2 rounded-md hover:bg-gray-50 text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Specialities
                            </Link>
                            <Link
                                href="/Blog"
                                className="text-gray-700 hover:text-[#345041] font-medium transition-colors duration-300 px-4 py-2 rounded-md hover:bg-gray-50 text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Blog
                            </Link>
                            <Link
                                href="/Careers"
                                className="text-gray-700 hover:text-[#345041] font-medium transition-colors duration-300 px-4 py-2 rounded-md hover:bg-gray-50 text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Careers
                            </Link>
                            <Link
                                href="/book-now"
                                className="bg-[#345041] hover:bg-[#2a4033] text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 mx-4 text-lg"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Book Now
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;