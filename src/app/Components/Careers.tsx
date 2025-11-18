"use client"
import { useState } from 'react';
const Careers = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        consultationType: 'free',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                preferredDate: '',
                preferredTime: '',
                consultationType: 'free',
                message: ''
            });
        }, 2000);
    };

    const timeSlots = [
        '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
        '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
    ];
    return (
        <div className="min-h-screen bg-[#FFFADA]">
            <div className="py-20 px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h1 className='text-4xl font-bold text-[#345041] mb-6' style={{ fontFamily: 'Lora, serif' }} >Our Commitment to You</h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto my-10" style={{ fontFamily: 'Lora, serif' }}>
                            We honour confidentiality and privacy throughout the hiring process. Your application is
                            held with the same respect we offer to our clients’ stories.
                        </p>
                        <h1 className="text-5xl font-bold text-[#345041] mb-10" style={{ fontFamily: 'BrittanySignature, serif' }}>
                            Apply Below
                        </h1>
                        <div className="w-16 h-0.5 bg-[#345041] mx-auto opacity-30"></div>
                    </div>

                    {/* Success Message */}
                    {submitSuccess && (
                        <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl text-center">
                            <div className="text-green-600 text-lg font-semibold mb-2">
                                Thank you for your booking request!
                            </div>
                            <p className="text-green-700">
                                We&rsquo;ve received your request and will contact you within 24 hours to confirm your appointment.
                            </p>
                        </div>
                    )}

                    {/* Booking Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Personal Information */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-[#345041] mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#345041] focus:border-transparent transition-all duration-300"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-semibold text-[#345041] mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#345041] focus:border-transparent transition-all duration-300"
                                        placeholder="Enter your email address"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-[#345041] mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#345041] focus:border-transparent transition-all duration-300"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-[#345041] mb-2">
                                    Purpose *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#345041] focus:border-transparent transition-all duration-300 resize-none"
                                    placeholder="Tell us a little about you and what draws you to working with us. We’ll get back to you soon...."
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="text-center pt-6">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="bg-[#345041] text-white px-12 py-4 rounded-full font-semibold text-lg hover:bg-[#2a4033] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Additional Information */}
                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                            <div className="w-12 h-12 bg-[#E7CDBF] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-[#345041] text-xl font-bold">1</span>
                            </div>
                            <h3 className="text-lg font-semibold text-[#345041] mb-2">Free Consultation</h3>
                            <p className="text-gray-600 text-sm">
                                Start with a 15-minute free consultation to discuss your needs and see if we&rsquo;re a good fit.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                            <div className="w-12 h-12 bg-[#E7CDBF] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-[#345041] text-xl font-bold">2</span>
                            </div>
                            <h3 className="text-lg font-semibold text-[#345041] mb-2">Flexible Scheduling</h3>
                            <p className="text-gray-600 text-sm">
                                Choose from morning, afternoon, or evening slots that work best with your schedule.
                            </p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                            <div className="w-12 h-12 bg-[#E7CDBF] rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-[#345041] text-xl font-bold">3</span>
                            </div>
                            <h3 className="text-lg font-semibold text-[#345041] mb-2">Confidential &amp; Safe</h3>
                            <p className="text-gray-600 text-sm">
                                Your privacy is our priority. All sessions are confidential and conducted in a safe environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Careers;