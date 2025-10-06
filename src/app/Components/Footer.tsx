"use client"

const Footer = () => {
    return (
        <footer className="bg-[#2a4033] text-white mt-auto">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-8 py-16">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    {/* Company Info */}
                    <div className="md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'BrittanySignature, serif' }}>
                            <p>{"Mind Craft Wellness"}</p>
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            {"Providing compassionate, trauma-informed therapy in Gurgaon."}
                            {"We're here to support your healing journey with warmth, skill, and care."}
                        </p>
                        <div className="flex space-x-4 mb-6">
                            <a href="https://www.instagram.com/mindcraftwellness/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E7CDBF] transition-colors duration-300">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="http://linkedin.com/in/aishwarayagoud" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#E7CDBF] transition-colors duration-300">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4"><p>{"Quick Links"}</p></h4>
                        <ul className="space-y-2">
                            <li><a href="/About" className="text-gray-300 hover:text-white transition-colors duration-300"><p>{"About Us"}</p></a></li>
                            <li><a href="/what-we-work-with" className="text-gray-300 hover:text-white transition-colors duration-300"><p>{"What We Work With"}</p></a></li>
                            <li><a href="/testimonials" className="text-gray-300 hover:text-white transition-colors duration-300"><p>{"Testimonials"}</p></a></li>
                            <li><a href="/book-now" className="text-gray-300 hover:text-white transition-colors duration-300"><p>{"Book Now"}</p></a></li>
                            <li><a href="/Careers" className="text-gray-300 hover:text-white transition-colors duration-300"><p>{"Careers"}</p></a></li>
                        </ul>
                    </div>

                    {/* Social Media & Professional Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4"><p>{"Connect With Us"}</p></h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="https://www.instagram.com/mindcraftwellness/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                    <span>{"Instagram"}</span>
                                </a>
                            </li>
                            <li>
                                <a href="http://linkedin.com/in/aishwarayagoud" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    <span>{"LinkedIn - Aishwara"}</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/mind-craft-wellness/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    <span>{"LinkedIn - Mind Craft Wellness"}</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.practo.com/gurgaon/clinic/mind-craft-wellness-dlf-phase-i" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center space-x-2">
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
                        <h4 className="text-lg font-semibold mb-4"><p>{"Contact"}</p></h4>
                        <div className="space-y-2 text-gray-300">
                            <div><p>{"📍 Gurgaon, Haryana"}</p></div>
                            <div><p>{"📞 +91 98765 43210"}</p></div>
                            <div><p>{"📧 hello@mindcraftwellness.com"}</p></div>
                            <div><p>{"🕒 Mon-Sat: 9 AM - 7 PM"}</p></div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mb-12">
                    <h4 className="text-lg font-semibold mb-4"><p>{"Find Us"}</p></h4>
                    <a href="https://maps.app.goo.gl/qwQTr2csPZBWyDAw5" target="_blank" rel="noopener noreferrer" className="block bg-gray-700 rounded-lg p-4 text-center hover:bg-gray-600 transition-colors duration-300">
                        <div className="w-full h-48 bg-gray-600 rounded flex items-center justify-center">
                            <div className="text-center">
                                <span className="text-4xl mb-2 block">📍</span>
                                <span className="text-gray-300 text-lg font-medium"><p>{"Click to view on Google Maps"}</p></span>
                                <span className="text-gray-400 text-sm"><p>{"Mind Craft Wellness, Gurgaon"}</p></span>
                            </div>
                        </div>
                    </a>
                </div>

                {/* Disclaimer */}
                <div className="bg-[#345041] rounded-lg p-6 mb-8">
                    <div className="flex items-start space-x-3">
                        <span className="text-2xl">⚠️</span>
                        <div>
                            <h5 className="font-semibold mb-2"><p>{"Important Disclaimer"}</p></h5>
                            <div className="text-gray-200 text-sm leading-relaxed">
                                <strong><p>{"Mind Craft Wellness does not provide crisis intervention services."}</p></strong>
                                <p>{"If you are experiencing a mental health crisis, suicidal thoughts, or need immediate assistance,"}</p>
                                <p>{"please contact emergency services or a crisis helpline. We recommend referring to our"}</p>
                                <a href="#" className="text-white underline hover:text-[#E7CDBF] transition-colors duration-300"><p>{" Resources page"}</p></a>
                                <p>{"for crisis intervention information and emergency contacts."}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-600 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-300 text-sm">
                            <p>{"© 2024 Mind Craft Wellness. All rights reserved."}</p>
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300"><p>{"Privacy Policy"}</p></a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300"><p>{"Terms of Service"}</p></a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300"><p>{"Cookie Policy"}</p></a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300"><p>{"Accessibility"}</p></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;