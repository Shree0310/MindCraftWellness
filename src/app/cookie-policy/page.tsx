'use client';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useState } from 'react';

export default function CookiePolicyPage() {
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
                        Cookie Policy
                    </h1>

                    <div className="space-y-8 text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                        <p>
                            This Cookie Policy explains how cookies and similar technologies may be used on the Mind Craft Wellness website.
                        </p>

                        <p>
                            We believe visitors should be able to understand how website technologies work and make informed choices about their use.
                        </p>

                        {/* Section 1 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                1. What Are Cookies?
                            </h2>
                            <p className="mb-4">
                                Cookies are small files stored on your device when you visit a website.
                            </p>
                            <p className="mb-4">
                                They can help websites remember preferences, support functionality, understand how visitors use a website, and enable certain third-party services.
                            </p>
                            <p>
                                Other technologies, such as local storage, pixels, and similar tracking technologies, may perform related functions.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                2. Why Cookies May Be Used
                            </h2>
                            <p className="mb-4">
                                Depending on the website's configuration, cookies and similar technologies may be used for the following purposes.
                            </p>

                            <h3 className="text-xl mb-3 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Essential functionality
                            </h3>
                            <p className="mb-4">
                                Some technologies may be necessary for the website to operate properly, maintain security, or provide a feature you have requested.
                            </p>

                            <h3 className="text-xl mb-3 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Preferences
                            </h3>
                            <p className="mb-4">
                                Certain technologies may help remember settings or preferences, where such functionality is available.
                            </p>

                            <h3 className="text-xl mb-3 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Website analytics
                            </h3>
                            <p className="mb-4">
                                If analytics tools are enabled, they may collect information about how visitors interact with the website, such as which pages are visited, how visitors navigate the site, and general technical information.
                            </p>

                            <h3 className="text-xl mb-3 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Third-party functionality
                            </h3>
                            <p className="mb-4">
                                External services linked to or embedded in the website may use their own cookies or similar technologies.
                            </p>

                            <p>
                                The actual categories used on this website will depend on the services and tools currently enabled.
                            </p>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                3. Third-Party Services
                            </h2>
                            <p className="mb-4">
                                Mind Craft Wellness may link to third-party services such as:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>Appointment scheduling platforms.</li>
                                <li>WhatsApp and other communication services.</li>
                                <li>Social media platforms.</li>
                                <li>Professional directories.</li>
                            </ul>
                            <p className="mb-4">
                                If you visit these services, they may collect information or use cookies under their own policies.
                            </p>
                            <p className="mb-4">
                                A link to an external service does not necessarily mean that the service sets cookies on our website. The behaviour depends on whether the service is linked, embedded, or otherwise integrated.
                            </p>
                            <p>
                                Please review the relevant third-party privacy and cookie policies for further information.
                            </p>
                        </div>

                        {/* Section 4 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                4. Managing Cookies
                            </h2>
                            <p className="mb-4">
                                You can usually manage or delete cookies through your browser settings.
                            </p>
                            <p className="mb-4">
                                Depending on your browser, you may be able to block some or all cookies, delete existing cookies, or receive notifications when cookies are set.
                            </p>
                            <p className="mb-4">
                                Please be aware that blocking certain cookies may affect the functionality of some websites.
                            </p>
                            <p>
                                Where applicable law requires consent for particular cookies or similar technologies, the website should obtain that consent before activating those technologies.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                5. Cookie Choices and Consent
                            </h2>
                            <p className="mb-4">
                                Where the website uses technologies that require consent, visitors should be given appropriate information and a meaningful way to make their choices.
                            </p>
                            <p className="mb-4">
                                Where a consent mechanism is provided, visitors should be able to change or withdraw their choices through an appropriate mechanism.
                            </p>
                            <p>
                                Essential technologies that are necessary for a service requested by the visitor may be treated differently, subject to applicable requirements.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                6. Changes to This Policy
                            </h2>
                            <p className="mb-4">
                                We may update this Cookie Policy when our website technologies, third-party integrations, or applicable requirements change.
                            </p>
                            <p>
                                The latest version will be published on this page.
                            </p>
                        </div>

                        {/* Section 7 - Contact */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                7. Contact Us
                            </h2>
                            <p className="mb-4">
                                If you have questions about cookies or similar technologies used by Mind Craft Wellness, please contact:
                            </p>
                            <p className="mb-2"><strong>Email:</strong> mindcraftwellness@gmail.com</p>
                            <p><strong>Location:</strong> Gurgaon, Haryana, India</p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
