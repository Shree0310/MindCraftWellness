"use client"

import Link from "next/link";
// remove local useState import
import React, { useState } from "react";
import { IconX } from "@tabler/icons-react";
import { usePathname } from "next/navigation";


const Header = ({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const pathname = usePathname();
    const navItems = [
        {
            title:"About",
            href:"/About"
        },
        {
            title:"What We Work With",
            href:"/what-we-work-with"
        },
        {
            title:"Blog",
            href:"/Blog"
        },
        {
            title:"Book Now",
            href:"/book-now"
        },
    ]

    return (
        <header className="sticky top-0 z-50 bg-[#FAF6F0]/95 backdrop-blur-sm border-b border-[#E8DBC9] shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <Link href="/" className="group">
                            <h1 className="text-3xl cursor-pointer md:text-4xl text-[#2B231C] transition-colors duration-300 group-hover:text-[#B6724F]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Mind Craft Wellness
                            </h1>
                            <span className="text-xs md:text-sm text-[#5C4B3C] block mt-1" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500, letterSpacing: '0.08em' }}>
                                Therapy that holds, heals, and grows
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8 text-base" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500 }}>
                        {navItems.map((item, idx) => {
                            const isActive = pathname === item.href;
                            const isBookNow = item.title === "Book Now";

                            if (isBookNow) {
                                return (
                                    <div key={idx}>
                                        <Link
                                            href={item.href}
                                            className="bg-[#B6724F] text-white px-6 py-2 rounded-full hover:bg-[#95573A] transition-all duration-300 shadow-md hover:shadow-lg"
                                        >
                                            {item.title}
                                        </Link>
                                    </div>
                                );
                            }

                            return (
                                <div key={idx} className="nav-item">
                                    <Link
                                        href={item.href}
                                        className={`${isActive ? 'text-[#B6724F]' : 'text-[#2B231C]'} hover:text-[#B6724F] transition-colors duration-300 relative group`}
                                    >
                                        {item.title}
                                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-[#B6724F] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>



                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-md text-[#2B231C] hover:text-[#B6724F] hover:bg-[#F2E8DD] transition-colors duration-300"
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
                            className="absolute z-50 md:hidden border-t inset-x-4 top-8 p-8 ring-1 ring-zinc-900/5 border-[#E8DBC9] bg-[#FAF6F0] w-96 h-96 shadow-2xl"
                            style={{ fontFamily: 'var(--font-dm-sans), sans-serif', borderRadius: '20px' }}
                        >
                             <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Close menu"
                                className="absolute right-4 top-4 p-2 rounded-full ring-1 ring-[#E8DBC9] bg-[#FAF6F0] shadow">
                                <IconX size={10}/>
                            </button>
                            {navItems.map((item, idx) => {
                                const isActive = pathname === item.href;
                                return (
                                    <div key={idx} className="flex flex-col space-y-4">
                                        <Link
                                            href={item.href}
                                            className={`${isActive ? 'text-[#B6724F] bg-[#F2E8DD]' : 'text-[#2B231C]'} hover:text-[#B6724F] transition-colors duration-300 px-4 py-2 rounded-md hover:bg-[#F2E8DD] text-lg`}
                                            style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 400 }}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.title}
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}

            </div>
        </header>
    );
};

export default Header;