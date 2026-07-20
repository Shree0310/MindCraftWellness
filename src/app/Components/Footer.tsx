"use client"

import { cn } from "@/lib/utils";

const Footer = ({className}:{className?: string}) => {
    return (
        <div className={cn("", className)}>
            <footer className="bg-[#95573A] text-white mt-auto">
                {/* Main Footer Content */}
                <div className="max-w-7xl mx-auto px-8 py-20">
                    <div className="grid md:grid-cols-4 gap-8 mb-12">
                        {/* Company Info */}
                        <div className="md:col-span-2">
                            <h3 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                                <p>{"Mind Craft Wellness"}</p>
                            </h3>
                            <p className="text-white/90 mb-4 leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                {"Providing compassionate, trauma-informed therapy in Gurgaon."}
                                {"We're here to support your healing journey with warmth, skill, and care."}
                            </p>
                            <div className="flex space-x-4 mb-6">
                                <a href="https://www.instagram.com/mindcraftwellness/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F2E8DD] transition-colors duration-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a href="http://linkedin.com/in/aishwarayagoud" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#F2E8DD] transition-colors duration-300">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg mb-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}><p>{"Quick Links"}</p></h4>
                            <ul className="space-y-2" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                <li><a href="/About" className="text-white/80 hover:text-white hover:underline transition-colors duration-300"><p>{"About"}</p></a></li>
                                <li><a href="/what-I-work-with" className="text-white/80 hover:text-white hover:underline transition-colors duration-300"><p>{"What I Work With"}</p></a></li>
                                <li><a href="/testimonials" className="text-white/80 hover:text-white hover:underline transition-colors duration-300"><p>{"Testimonials"}</p></a></li>
                                <li><a href="/FAQs" className="text-white/80 hover:text-white hover:underline transition-colors duration-300"><p>{"FAQs"}</p></a></li>
                                <li><a href="/book-now" className="text-white/80 hover:text-white hover:underline transition-colors duration-300"><p>{"Book Now"}</p></a></li>
                                <li><a href="/Blog" className="text-white/80 hover:text-white hover:underline transition-colors duration-300"><p>{"Blog"}</p></a></li>
                            </ul>
                        </div>

                        {/* Social Media & Professional Links */}
                        <div>
                            <h4 className="text-lg mb-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}><p>{"Connect With Us"}</p></h4>
                            <ul className="space-y-3" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                <li>
                                    <a href="https://wa.me/919859080910" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                        </svg>
                                        <span>{"WhatsApp"}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/mindcraftwellness/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                        <span>{"Instagram"}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="http://linkedin.com/in/aishwarayagoud" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        <span>{"LinkedIn - Aishwaraya"}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/mind-craft-wellness/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                        <span>{"LinkedIn - Mind Craft Wellness"}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.practo.com/gurgaon/clinic/mind-craft-wellness-dlf-phase-i" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                        <span>{"Practo"}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact & Address */}
                        <div>
                            <h4 className="text-lg mb-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}><p>{"Contact"}</p></h4>
                            <div className="space-y-2 text-white/80" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                <div><p>{"📍 Gurgaon, Haryana"}</p></div>
                                <div className="flex items-center space-x-2">
                                    <span>{"📞 +91 9859080910"}</span>
                                    <a href="https://wa.me/919859080910" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors duration-300">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                        </svg>
                                    </a>
                                </div>
                                <div><p>{"📧 mindcraftwellness@gmail.com "}</p></div>
                                <div><p>{"🕒 Wed to Sat, 12 pm to 6 pm"}</p></div>
                            </div>
                        </div>
                    </div>

                    {/* Map Section */}
                    <div className="mb-12">
                        <h4 className="text-lg mb-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}><p>{"Find Us"}</p></h4>
                        <a href="https://maps.app.goo.gl/qwQTr2csPZBWyDAw5" target="_blank" rel="noopener noreferrer" className="block bg-[#B6724F] p-4 text-center hover:bg-[#95573A] transition-colors duration-300" style={{ borderRadius: '16px' }}>
                            <div className="w-full h-48 bg-[#95573A] rounded flex items-center justify-center">
                                <div className="text-center">
                                    <span className="text-4xl mb-2 block">📍</span>
                                    <span className="text-white text-lg" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 400 }}><p>{"Click to view on Google Maps"}</p></span>
                                    <span className="text-white/80 text-sm" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}><p>{"Mind Craft Wellness, Gurgaon"}</p></span>
                                </div>
                            </div>
                        </a>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-[#B6724F] p-6 mb-8" style={{ borderRadius: '16px' }}>
                        <div className="flex items-start space-x-3">
                            <span className="text-2xl">⚠️</span>
                            <div>
                                <h5 className="mb-2" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}><p>{"Important Disclaimer"}</p></h5>
                                <div className="text-white/90 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                    <strong><p>{"Mind Craft Wellness does not provide crisis intervention services."}</p></strong>
                                    <p>{"If you are experiencing a mental health crisis, suicidal thoughts, or need immediate assistance,"}</p>
                                    <p>{"please contact emergency services or a crisis helpline immediately."}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="border-t border-white/20 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <div className="text-white/80 text-sm" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                <p>{"© 2024 Mind Craft Wellness. All rights reserved."}</p>
                            </div>
                            <div className="flex space-x-6 text-sm" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                <a href="#" className="text-white/80 hover:text-white transition-colors duration-300"><p>{"Privacy Policy"}</p></a>
                                <a href="#" className="text-white/80 hover:text-white transition-colors duration-300"><p>{"Terms of Service"}</p></a>
                                <a href="#" className="text-white/80 hover:text-white transition-colors duration-300"><p>{"Cookie Policy"}</p></a>
                                <a href="#" className="text-white/80 hover:text-white transition-colors duration-300"><p>{"Accessibility"}</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;