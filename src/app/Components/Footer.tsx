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
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-[#E7CDBF] transition-colors duration-300">
                                <span className="text-2xl">📱</span>
                            </a>
                            <a href="#" className="text-white hover:text-[#E7CDBF] transition-colors duration-300">
                                <span className="text-2xl">📧</span>
                            </a>
                            <a href="#" className="text-white hover:text-[#E7CDBF] transition-colors duration-300">
                                <span className="text-2xl">💬</span>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4"><p>{"Quick Links"}</p></h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300"><p>{"About Us"}</p></a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300"><p>{"Our Therapists"}</p></a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300"><p>{"Services"}</p></a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300"><p>{"Blog"}</p></a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300"><p>{"Careers"}</p></a></li>
                        </ul>
                    </div>

                    {/* Contact & Address */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4"><p>{"Contact"}</p></h4>
                        <div className="space-y-2 text-gray-300">
                            <p><p>{"📍 Gurgaon, Haryana"}</p></p>
                            <p><p>{"📞 +91 98765 43210"}</p></p>
                            <p><p>{"📧 hello@mindcraftwellness.com"}</p></p>
                            <p><p>{"🕒 Mon-Sat: 9 AM - 7 PM"}</p></p>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mb-12">
                    <h4 className="text-lg font-semibold mb-4"><p>{"Find Us"}</p></h4>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                        <div className="w-full h-48 bg-gray-600 rounded flex items-center justify-center">
                            <span className="text-gray-400"><p>{"📍 Interactive Map Coming Soon"}</p></span>
                        </div>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="bg-[#345041] rounded-lg p-6 mb-8">
                    <div className="flex items-start space-x-3">
                        <span className="text-2xl">⚠️</span>
                        <div>
                            <h5 className="font-semibold mb-2"><p>{"Important Disclaimer"}</p></h5>
                            <p className="text-gray-200 text-sm leading-relaxed">
                                <strong><p>{"Mind Craft Wellness does not provide crisis intervention services."}</p></strong>
                                <p>{"If you are experiencing a mental health crisis, suicidal thoughts, or need immediate assistance,"}</p>
                                <p>{"please contact emergency services or a crisis helpline. We recommend referring to our"}</p>
                                <a href="#" className="text-white underline hover:text-[#E7CDBF] transition-colors duration-300"><p>{" Resources page"}</p></a>
                                <p>{"for crisis intervention information and emergency contacts."}</p>
                            </p>
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