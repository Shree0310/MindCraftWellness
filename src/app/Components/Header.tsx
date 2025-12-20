"use client"

import Link from "next/link";
// remove local useState import
import React, { useState } from "react";
import { IconX } from "@tabler/icons-react";


const Header = ({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const navItems = [
        {
            title:"About Us",
            href:"/About"
        },
        {
            title:"Specialities",
            href:"/what-we-work-with"
        },
        {
            title:"Blog",
            href:"/Blog"
        },
        {
            title:"Careers",
            href:"/Careers"
        },
        {
            title:"Book Now",
            href:"/book-now"
        },
    ]

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
                    <div className="hidden md:flex items-center space-x-8 font-bold text-xl" style={{ fontFamily: 'Lora, serif' }}>
                        {navItems.map((item, idx) => (
                            <div key={idx} className="nav-item">
                                <Link
                                    href={item.href}
                                    className="text-gray-700 hover:text-[#345041] transition-colors duration-300 relative group"
                                >
                                    {item.title}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#345041] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </div>
                        ))}
                    </div>



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
                    <>
                        {/* Full-screen overlay with blur */}
                        <div
                            className="fixed inset-0 z-40 md:hidden bg-black/20 backdrop-blur-sm transition-opacity duration-300 "
                            style={{ WebkitBackdropFilter: 'blur(8px)', backdropFilter: 'blur(8px)' }}
                            onClick={() => setIsMenuOpen(false)}
                            aria-hidden="true"
                        />

                        {/* Mobile menu panel above the overlay */}
                        <div
                            className="absolute z-50 md:hidden border-t inset-x-4 top-8 p-8 rounded-3xl ring-1 ring-zinc-900/5 border-gray-100 bg-white w-96 h-96 shadow-2xl"
                            style={{ fontFamily: 'BodoniModa, serif' }}
                        >
                             <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Close menu"
                                className="absolute right-4 top-4 p-2 rounded-full ring-1 ring-neutral-200 dark:ring-neutral-600 bg-white dark:bg-neutral-800 shadow">
                                <IconX size={10}/>
                            </button>
                            {navItems.map((item, idx) => (
                                <div key={idx} className="flex flex-col space-y-4">
                                    <Link
                                        href={item.href}
                                        className="text-gray-700 hover:text-[#345041] font-medium transition-colors duration-300 px-4 py-2 rounded-md hover:bg-gray-50 text-lg"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </>
                )}

            </div>
        </header>
    );
};

export default Header;