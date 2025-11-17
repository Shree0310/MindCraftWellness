'use client';

import Header from "./Header";
import HowItWorks from "./HowItWorks";
import Link from 'next/link';
import Testimonials from "./Testimonials/Testimonials";

export default function BookNow() {

    return (
        <div className="bg-[#E7CDBF] h-full pb-10 scroll-auto">
            <Header />

            {/* Tealfeed Calendar Section */}
            <div className="bg-white rounded-3xl p-8 my-16 mx-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-[#345041] mb-4" style={{ fontFamily: 'BrittanySignature, serif' }}>
                        Book Your Free Consultation
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose a convenient time for your 15-minute discovery call. We&apos;ll discuss your needs and see if we&apos;re a good fit for your healing journey.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <iframe
                        width="100%"
                        height="560"
                        title="Book Your Consultation"
                        src="https://www.tealfeed.com/goud_387923/connect/call?callType=67120307b554f31cdc8d94f9&embed=true&theme=light&brandColor=008080&hideDescription=false"
                        frameBorder="0"
                        allowFullScreen
                        className="rounded-2xl shadow-lg"
                    >
                    </iframe>
                </div>

                <div className="text-center mt-6">
                    <p className="text-sm text-gray-500">
                        Having trouble with the calendar?
                        <a
                            href="https://www.tealfeed.com/goud_387923/connect/call?callType=67120307b554f31cdc8d94f9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#345041] hover:text-[#2a4033] font-semibold underline ml-1"
                        >
                            Open in new tab
                        </a>
                    </p>
                </div>
            </div>

            <HowItWorks />

            {/* Review Ratings Section */}
            <div className="bg-white rounded-3xl p-8 my-16 mx-8 pb-10">
                <div className="text-center mb-8 pb-10">
                    <h3 className="text-2xl font-semibold text-[#345041] mb-4">What Our Clients Say</h3>
                    <div className="flex justify-center space-x-8">
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-2">
                                <span className="text-3xl font-bold text-[#345041]">4.9</span>
                                <span className="text-lg text-gray-600 ml-1">/5</span>
                            </div>
                            <div className="flex justify-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-sm text-gray-600">Google Reviews</p>
                        </div>
                        <div className="text-center">
                            <div className="flex items-center justify-center mb-2">
                                <span className="text-3xl font-bold text-[#345041]">5.0</span>
                                <span className="text-lg text-gray-600 ml-1">/5</span>
                            </div>
                            <div className="flex justify-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-sm text-gray-600">Practo Reviews</p>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <Link href="/testimonials" className="text-[#345041] hover:text-[#2a4033] font-semibold underline transition-colors duration-300">
                        Read All Testimonials →
                    </Link>
                </div>
            </div>
        </div>
    );
}
