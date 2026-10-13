'use client';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useState } from 'react';

export default function TermsOfServicePage() {
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
                        Terms of Service
                    </h1>

                    <div className="space-y-8 text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                        <p>Welcome to Mind Craft Wellness.</p>

                        <p>
                            These Terms of Service explain the terms governing your use of our website and the information and services made available through it.
                        </p>

                        <p>
                            By accessing or using this website, you agree to use it responsibly and in accordance with these terms. If you do not agree with these terms, please discontinue using the website.
                        </p>

                        {/* Section 1 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                1. About Mind Craft Wellness
                            </h2>
                            <p className="mb-4">
                                Mind Craft Wellness is a psychotherapy practice based in Gurgaon, Haryana, India, led by Aishwaraya, a clinical psychologist.
                            </p>
                            <p className="mb-4">
                                Our work includes psychological support for adults, using a trauma-informed approach informed by AEDP and CBT, where appropriate.
                            </p>
                            <p>
                                Our website provides information about our approach, areas of work, consultation process, and available services.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                2. Nature of Our Services
                            </h2>
                            <p className="mb-4">
                                Psychological services are individualised and depend on the concerns, needs, and circumstances of each person.
                            </p>
                            <p className="mb-4">
                                Information on this website is intended to help visitors understand our approach and services. It is not a substitute for an individual psychological assessment, consultation, or therapeutic relationship.
                            </p>
                            <p className="mb-4">
                                Reading our website, contacting us, or booking a consultation does not, by itself, establish an ongoing therapeutic relationship.
                            </p>
                            <p>
                                A therapeutic relationship begins through the appropriate consultation, assessment, and consent process.
                            </p>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                3. Website Information
                            </h2>
                            <p className="mb-4">
                                We aim to ensure that the information on this website is clear and accurate.
                            </p>
                            <p className="mb-4">
                                However, information may occasionally be incomplete, out of date, or subject to change. Service availability, fees, consultation hours, and other details may be updated from time to time.
                            </p>
                            <p className="mb-4">
                                Website content should not be interpreted as a guarantee of a particular therapeutic outcome.
                            </p>
                            <p>
                                Every person's experience of therapy is different, and no specific result can be guaranteed.
                            </p>
                        </div>

                        {/* Section 4 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                4. Client Testimonials and Experiences
                            </h2>
                            <p>
                                Client testimonials published on this website are shared with the consent of the individuals concerned. They reflect personal experiences and perspectives and should not be interpreted as a representation of typical results or a guarantee of any particular outcome from therapy. Each person's therapeutic process is different, and experiences and outcomes vary.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                5. Consultations and Appointments
                            </h2>
                            <p className="mb-4">
                                Mind Craft Wellness offers a complimentary 15-minute consultation to help prospective clients understand our approach, ask initial questions, and consider whether working together may be appropriate.
                            </p>
                            <p className="mb-4">
                                The consultation is an introductory conversation and is not a substitute for a full therapy session, psychological assessment, or emergency support.
                            </p>
                            <p className="mb-4">
                                Appointments may be requested through the booking arrangements or contact methods listed on our website.
                            </p>
                            <p className="mb-4">
                                Submitting an appointment request does not necessarily mean that an appointment has been confirmed. Confirmation will depend on availability and the applicable booking process.
                            </p>
                            <p>
                                We reserve the right to update consultation arrangements and appointment availability.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                6. Fees and Payments
                            </h2>
                            <p className="mb-4">
                                The website may display fees for psychological services.
                            </p>
                            <p className="mb-4">
                                At the time these terms were drafted, the Book Now page displayed a fee of ₹3,500 for a 60-minute therapy session and a complimentary 15-minute consultation.
                            </p>
                            <p className="mb-4">
                                Please check the current booking page or confirm the applicable fee before scheduling.
                            </p>
                            <p className="mb-4">
                                Payment methods, payment timing, and any applicable payment conditions will be communicated during the booking process.
                            </p>
                            <p>
                                Any changes to fees will be communicated appropriately before they apply to a new booking.
                            </p>
                        </div>

                        {/* Section 7 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                7. Cancellations and Rescheduling
                            </h2>
                            <p className="mb-4">
                                Appointment cancellation and rescheduling arrangements will be communicated to clients during the booking or onboarding process.
                            </p>
                            <p className="mb-4">
                                If you need to change an appointment, please contact Mind Craft Wellness as early as possible.
                            </p>
                            <p className="mb-4">
                                Any applicable cancellation charges, notice periods, or rescheduling conditions will be explained separately and should be agreed upon before they apply.
                            </p>
                            <p>
                                These Terms of Service do not override any specific arrangements agreed upon with a client.
                            </p>
                        </div>

                        {/* Section 8 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                8. No Emergency or Crisis Services
                            </h2>
                            <p className="mb-4">
                                <strong>Mind Craft Wellness does not provide crisis intervention or emergency services through this website.</strong>
                            </p>
                            <p className="mb-4">
                                The website, email, WhatsApp, and appointment booking system are not monitored as emergency response services.
                            </p>
                            <p className="mb-4">
                                If you are experiencing a mental health emergency, are at immediate risk of harming yourself or someone else, or require urgent assistance, please contact local emergency services or visit the nearest emergency department.
                            </p>
                            <p>
                                Please do not rely on a website enquiry or appointment request for urgent support.
                            </p>
                        </div>

                        {/* Section 9 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                9. Confidentiality and Professional Boundaries
                            </h2>
                            <p className="mb-4">
                                Confidentiality is an important part of psychological care.
                            </p>
                            <p className="mb-4">
                                The handling of information shared during therapy is governed by the applicable professional, ethical, legal, and informed-consent arrangements.
                            </p>
                            <p className="mb-4">
                                Contacting us through this website, email, WhatsApp, or an external booking service does not guarantee that the communication channel offers the same protections or confidentiality arrangements as clinical care.
                            </p>
                            <p>
                                Please avoid sharing detailed sensitive information through general enquiry forms.
                            </p>
                        </div>

                        {/* Section 10 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                10. Website Content and Intellectual Property
                            </h2>
                            <p className="mb-4">
                                Unless otherwise stated, the content on this website, including original written material, descriptions, graphics, branding, and other materials, belongs to Mind Craft Wellness or is used with appropriate permission.
                            </p>
                            <p className="mb-4">
                                You may access the website for personal, non-commercial purposes.
                            </p>
                            <p className="mb-4">
                                You may not reproduce, republish, distribute, modify, or commercially exploit website content without prior permission, except where permitted by applicable law.
                            </p>
                            <p>
                                If you wish to reproduce or reference our original content, please contact us.
                            </p>
                        </div>

                        {/* Section 11 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                11. Third-Party Links and Services
                            </h2>
                            <p className="mb-4">
                                Our website may link to external platforms, including appointment scheduling services, social media, professional directories, and communication tools.
                            </p>
                            <p className="mb-4">
                                These services operate independently and may have their own terms, privacy policies, and service limitations.
                            </p>
                            <p className="mb-4">
                                Mind Craft Wellness does not control the operation or content of external websites and cannot guarantee their availability or accuracy.
                            </p>
                            <p>
                                Your use of third-party services is subject to the terms applicable to those services.
                            </p>
                        </div>

                        {/* Section 12 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                12. Responsible Use of the Website
                            </h2>
                            <p className="mb-4">
                                You agree not to misuse the website, attempt to gain unauthorised access to its systems, interfere with its operation, or use it for unlawful purposes.
                            </p>
                            <p>
                                We may take reasonable steps to protect the website and its users against misuse, security threats, or unauthorised activity.
                            </p>
                        </div>

                        {/* Section 13 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                13. Limitation of Responsibility
                            </h2>
                            <p className="mb-4">
                                We make reasonable efforts to maintain the website and provide accurate information.
                            </p>
                            <p className="mb-4">
                                However, the website is provided for general informational purposes, and we do not guarantee uninterrupted availability or that all information will always be free from errors.
                            </p>
                            <p className="mb-4">
                                Nothing in these terms excludes or limits any liability that cannot lawfully be excluded or limited under applicable law.
                            </p>
                            <p>
                                These terms do not remove or diminish any professional duties or legal responsibilities that apply to psychological services.
                            </p>
                        </div>

                        {/* Section 14 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                14. Changes to These Terms
                            </h2>
                            <p className="mb-4">
                                We may update these Terms of Service to reflect changes to our website, services, or applicable requirements.
                            </p>
                            <p>
                                Updated terms will be published on this page with a revised date.
                            </p>
                        </div>

                        {/* Section 15 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                15. Applicable Law
                            </h2>
                            <p className="mb-4">
                                These terms are intended to be interpreted in accordance with the laws applicable in India, subject to any mandatory legal requirements.
                            </p>
                            <p>
                                Any disputes will be addressed in accordance with applicable law.
                            </p>
                        </div>

                        {/* Section 16 - Contact */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                16. Contact Us
                            </h2>
                            <p className="mb-4">
                                For questions about these Terms of Service, please contact:
                            </p>
                            <p className="mb-2"><strong>Mind Craft Wellness</strong></p>
                            <p className="mb-2">Gurgaon, Haryana, India</p>
                            <p>Email: mindcraftwellness@gmail.com</p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
