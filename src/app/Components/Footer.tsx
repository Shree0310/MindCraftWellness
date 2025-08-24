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
                            Mind Craft Wellness
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Providing compassionate, trauma-informed therapy in Gurgaon.
                            We're here to support your healing journey with warmth, skill, and care.
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
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Our Therapists</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Services</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Blog</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Careers</a></li>
                        </ul>
                    </div>

                    {/* Contact & Address */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact</h4>
                        <div className="space-y-2 text-gray-300">
                            <p>📍 Gurgaon, Haryana</p>
                            <p>📞 +91 98765 43210</p>
                            <p>📧 hello@mindcraftwellness.com</p>
                            <p>🕒 Mon-Sat: 9 AM - 7 PM</p>
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mb-12">
                    <h4 className="text-lg font-semibold mb-4">Find Us</h4>
                    <div className="bg-gray-700 rounded-lg p-4 text-center">
                        <div className="w-full h-48 bg-gray-600 rounded flex items-center justify-center">
                            <span className="text-gray-400">📍 Interactive Map Coming Soon</span>
                        </div>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="bg-[#345041] rounded-lg p-6 mb-8">
                    <div className="flex items-start space-x-3">
                        <span className="text-2xl">⚠️</span>
                        <div>
                            <h5 className="font-semibold mb-2">Important Disclaimer</h5>
                            <p className="text-gray-200 text-sm leading-relaxed">
                                <strong>Mind Craft Wellness does not provide crisis intervention services.</strong>
                                If you are experiencing a mental health crisis, suicidal thoughts, or need immediate assistance,
                                please contact emergency services or a crisis helpline. We recommend referring to our
                                <a href="#" className="text-white underline hover:text-[#E7CDBF] transition-colors duration-300"> Resources page</a>
                                for crisis intervention information and emergency contacts.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-600 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-300 text-sm">
                            © 2024 Mind Craft Wellness. All rights reserved.
                        </div>
                        <div className="flex space-x-6 text-sm">
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Privacy Policy</a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Terms of Service</a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Cookie Policy</a>
                            <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Accessibility</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;