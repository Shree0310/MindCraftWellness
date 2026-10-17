'use client';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useState } from 'react';

export default function AccessibilityPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="bg-[#F2E8DD] min-h-screen">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

            {/* Blur the whole page when menu is open */}
            <div
                className={`${
                    isMenuOpen
                        ? "filter blur-sm pointer-events-none transition-filter duration-300"
                        : "transition-filter duration-300"
                }`}
            >
                {/* Main Content */}
                <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-20">
                    {/* Header */}
                    <h1 className="text-4xl md:text-5xl mb-8 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                        Accessibility Statement
                    </h1>

                    <div className="space-y-8 text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                        <p>
                            At Mind Craft Wellness, we believe that seeking psychological support should feel as approachable and accessible as possible.
                        </p>

                        <p>
                            We want our website to be usable by people with different needs, abilities, and ways of accessing information.
                        </p>

                        <p>
                            We recognise that accessibility is an ongoing process, and we are committed to identifying and improving barriers wherever reasonably possible.
                        </p>

                        {/* Section 1 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                1. Our Commitment
                            </h2>
                            <p className="mb-4">
                                We aim to make the Mind Craft Wellness website clear, welcoming, and accessible to as many people as possible.
                            </p>
                            <p className="mb-4">
                                We recognise that people may access our website using different devices, browsers, assistive technologies, and methods of navigation.
                            </p>
                            <p>
                                Our aim is to make it easier for visitors to learn about our services, understand our approach, and find ways to contact us.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                2. Accessibility Features We Aim to Support
                            </h2>
                            <p className="mb-4">
                                As we develop and maintain our website, we aim to support the following:
                            </p>

                            <h3 className="text-xl mb-3 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Readable content
                            </h3>
                            <p className="mb-4">
                                We aim to use clear language, meaningful headings, and a readable layout to make information easier to understand.
                            </p>

                            <h3 className="text-xl mb-3 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Colour contrast
                            </h3>
                            <p className="mb-4">
                                We aim to use text and background combinations that provide sufficient contrast and make content easier to read.
                            </p>

                            <h3 className="text-xl mb-3 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Keyboard navigation
                            </h3>
                            <p className="mb-4">
                                We aim to make important website functions accessible to people who navigate using a keyboard rather than a mouse or touchscreen.
                            </p>

                            <h3 className="text-xl mb-3 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Screen-reader compatibility
                            </h3>
                            <p className="mb-4">
                                We aim to use meaningful headings, labels, and descriptions so visitors using screen readers can understand and navigate the content.
                            </p>

                            <h3 className="text-xl mb-3 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Images and alternative text
                            </h3>
                            <p className="mb-4">
                                We aim to provide appropriate alternative text for meaningful images, while avoiding unnecessary descriptions for purely decorative images.
                            </p>

                            <h3 className="text-xl mb-3 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Forms and booking
                            </h3>
                            <p className="mb-4">
                                We aim to make important forms, appointment links, and contact information easy to locate and use.
                            </p>

                            <h3 className="text-xl mb-3 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Responsive design
                            </h3>
                            <p className="mb-4">
                                We aim to make the website usable across different screen sizes, including mobile phones, tablets, and desktop computers.
                            </p>

                            <p>
                                These are our accessibility goals and should not be interpreted as a claim that every feature has already been independently tested or meets every applicable technical standard.
                            </p>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                3. Ongoing Improvements
                            </h2>
                            <p className="mb-4">
                                Accessibility is an ongoing process.
                            </p>
                            <p className="mb-4">
                                We may review our website's layout, text readability, navigation, image descriptions, and interactive elements as opportunities for improvement arise.
                            </p>
                            <p className="mb-4">
                                Some third-party services linked from our website may have their own accessibility features and limitations.
                            </p>
                            <p>
                                We encourage visitors to let us know if they encounter a barrier while using our website.
                            </p>
                        </div>

                        {/* Section 4 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                4. Need Information in Another Format?
                            </h2>
                            <p className="mb-4">
                                If you have difficulty accessing information on this website, please contact us.
                            </p>
                            <p className="mb-4">
                                Where reasonably possible, we will try to provide the relevant information in an alternative format or suggest another way to access it.
                            </p>
                            <p className="mb-4">
                                You can reach us at:
                            </p>
                            <p className="mb-2">
                                <strong>Email:</strong> mindcraftwellness@gmail.com
                            </p>
                            <p className="mb-4">
                                <strong>Location:</strong> Gurgaon, Haryana, India
                            </p>
                            <p>
                                If you are trying to arrange a consultation and encounter difficulty with the booking system, you may also contact us through the alternative contact options listed on our website.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                5. Reporting an Accessibility Issue
                            </h2>
                            <p className="mb-4">
                                If you experience an accessibility problem, please tell us:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Which page or feature you were trying to use.</li>
                                <li>What difficulty you encountered.</li>
                                <li>Which device or assistive technology you were using, if you are comfortable sharing that information.</li>
                            </ul>
                            <p className="mb-4">
                                You do not need to disclose any medical or psychological information to report an accessibility issue.
                            </p>
                            <p>
                                We will review your feedback and consider what improvements may be appropriate.
                            </p>
                        </div>

                        {/* Section 6 - Contact */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                6. Contact Us
                            </h2>
                            <p className="mb-4">
                                For accessibility questions, feedback, or requests for assistance, please contact:
                            </p>
                            <p className="mb-2"><strong>Mind Craft Wellness</strong></p>
                            <p className="mb-2">Gurgaon, Haryana, India</p>
                            <p className="mb-4">Email: mindcraftwellness@gmail.com</p>
                            <p>
                                Thank you for helping us make our website more accessible and welcoming.
                            </p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
