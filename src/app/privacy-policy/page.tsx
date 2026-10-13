'use client';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { useState } from 'react';

export default function PrivacyPolicyPage() {
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
                        Privacy Policy
                    </h1>

                    <div className="space-y-8 text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                        <p>
                            At Mind Craft Wellness, we believe that trust, respect, and confidentiality are essential to any therapeutic relationship.
                        </p>

                        <p>
                            This Privacy Policy explains how Mind Craft Wellness collects, uses, stores, and handles personal information when you visit our website, contact us, enquire about therapy, or use our booking services.
                        </p>

                        <p>
                            We are committed to treating your information with care and being transparent about how it is used.
                        </p>

                        {/* Section 1 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                1. Who We Are
                            </h2>
                            <p className="mb-4">
                                Mind Craft Wellness is a psychotherapy practice based in Gurgaon, Haryana, India, led by Aishwaraya, a clinical psychologist.
                            </p>
                            <p className="mb-4">
                                For questions about this Privacy Policy or the handling of your personal information, you can contact us at:
                            </p>
                            <p className="mb-2">
                                <strong>Email:</strong> mindcraftwellness@gmail.com
                            </p>
                            <p className="mb-4">
                                <strong>Location:</strong> Gurgaon, Haryana, India
                            </p>
                            <p>
                                In this policy, "we," "us," and "our" refer to Mind Craft Wellness.
                            </p>
                        </div>

                        {/* Section 2 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                2. Information We May Collect
                            </h2>
                            <p className="mb-4">
                                The information we collect depends on how you interact with our website and services.
                            </p>

                            <h3 className="text-xl mb-3 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                a. Contact information
                            </h3>
                            <p className="mb-4">
                                When you contact us by email, WhatsApp, or another communication channel, we may receive your name, phone number, email address, and the information you choose to share.
                            </p>

                            <h3 className="text-xl mb-3 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                b. Appointment and enquiry information
                            </h3>
                            <p className="mb-4">
                                If you enquire about therapy or request an appointment, we may receive information necessary to respond to your enquiry, arrange a consultation, or coordinate appointments.
                            </p>

                            <h3 className="text-xl mb-3 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                c. Information you voluntarily share
                            </h3>
                            <p className="mb-4">
                                You may choose to share information about your concerns, experiences, or reasons for seeking psychological support.
                            </p>
                            <p className="mb-4">
                                Please avoid sharing detailed personal or mental health information through ordinary website enquiries or other communication channels unless it is necessary and you are comfortable doing so.
                            </p>

                            <h3 className="text-xl mb-3 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                d. Technical information
                            </h3>
                            <p className="mb-4">
                                When you visit our website, certain technical information may be collected automatically, depending on the website's configuration. This may include your browser type, device information, IP address, pages visited, and general website usage information.
                            </p>

                            <h3 className="text-xl mb-3 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                e. Booking and third-party services
                            </h3>
                            <p>
                                Our website may direct you to external platforms for appointment scheduling or communication. These platforms may collect information under their own privacy policies. We encourage you to review their policies before submitting information.
                            </p>
                        </div>

                        {/* Section 3 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                3. How We Use Your Information
                            </h2>
                            <p className="mb-4">We may use your information to:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Respond to enquiries about our services.</li>
                                <li>Arrange complimentary consultations and therapy appointments.</li>
                                <li>Communicate about scheduling, rescheduling, or cancellations.</li>
                                <li>Provide information about our services.</li>
                                <li>Maintain appropriate administrative and business records.</li>
                                <li>Operate, maintain, and improve our website.</li>
                                <li>Protect the security and integrity of our services.</li>
                                <li>Meet applicable legal and professional obligations.</li>
                            </ul>
                            <p className="mt-4">
                                We aim to collect and use only information that is reasonably necessary for the relevant purpose.
                            </p>
                        </div>

                        {/* Section 4 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                4. Confidentiality and Psychological Services
                            </h2>
                            <p className="mb-4">
                                We recognise that information shared when seeking psychological support can be deeply personal.
                            </p>
                            <p className="mb-4">
                                Information shared during therapy is handled in accordance with applicable professional, ethical, and legal obligations, including the limits of confidentiality.
                            </p>
                            <p className="mb-4">
                                This website Privacy Policy is not a substitute for the separate informed-consent and confidentiality arrangements that apply to psychological services.
                            </p>
                            <p className="mb-4">
                                Information submitted through website enquiries, email, WhatsApp, or third-party booking systems may be handled differently from information recorded and maintained as part of clinical care.
                            </p>
                            <p>
                                Please be mindful of the information you share through these channels.
                            </p>
                        </div>

                        {/* Section 5 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                5. When Information May Be Shared
                            </h2>
                            <p className="mb-4">We do not sell your personal information.</p>
                            <p className="mb-4">
                                We may share information where reasonably necessary for the purposes described in this policy, including:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-4">
                                <li>With service providers who help operate our website, manage appointments, or provide technical support.</li>
                                <li>With communication or booking platforms you choose to use.</li>
                                <li>Where disclosure is required by applicable law or a lawful order.</li>
                                <li>Where disclosure is permitted or required under applicable professional, ethical, or legal obligations.</li>
                            </ul>
                            <p className="mb-4">
                                Where service providers process information on our behalf, their access should be limited to what is necessary for their services and governed by appropriate arrangements.
                            </p>
                            <p>
                                We do not authorise the use of your personal information for unrelated purposes merely because it has been shared with a service provider.
                            </p>
                        </div>

                        {/* Section 6 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                6. Data Storage and Security
                            </h2>
                            <p className="mb-4">
                                We take reasonable steps to protect information against unauthorised access, loss, misuse, or disclosure.
                            </p>
                            <p className="mb-4">
                                Depending on the information involved, safeguards may include access restrictions, secure account management, and appropriate technical and organisational measures.
                            </p>
                            <p className="mb-4">
                                However, no website, electronic communication channel, or storage system can be guaranteed to be completely secure.
                            </p>
                            <p>
                                Please avoid sending highly sensitive information through channels that may not be appropriate for it.
                            </p>
                        </div>

                        {/* Section 7 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                7. How Long We Retain Information
                            </h2>
                            <p className="mb-4">
                                We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, subject to applicable legal, professional, accounting, and record-retention requirements.
                            </p>
                            <p className="mb-4">
                                The retention period may differ depending on whether the information relates to a general enquiry, an appointment, website analytics, or clinical records.
                            </p>
                            <p className="mb-4">
                                When information is no longer required, we will take appropriate steps to delete it or otherwise handle it in accordance with applicable requirements.
                            </p>
                            <p>
                                Clinical records may be subject to separate retention requirements.
                            </p>
                        </div>

                        {/* Section 8 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                8. Cookies and Website Technologies
                            </h2>
                            <p className="mb-4">
                                Our website may use cookies or similar technologies to support essential functionality, understand website usage, or provide third-party services.
                            </p>
                            <p className="mb-4">
                                The technologies actually used depend on the website's configuration.
                            </p>
                            <p>
                                For more information, please refer to our Cookie Policy.
                            </p>
                        </div>

                        {/* Section 9 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                9. External Websites and Services
                            </h2>
                            <p className="mb-4">
                                Our website may link to third-party services, including appointment booking platforms, WhatsApp, social media, professional directories, and other external websites.
                            </p>
                            <p className="mb-4">
                                We do not control the privacy practices of these external services.
                            </p>
                            <p>
                                When you leave our website, we encourage you to review the privacy policy of the relevant service before sharing personal information.
                            </p>
                        </div>

                        {/* Section 10 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                10. Your Choices and Privacy Requests
                            </h2>
                            <p className="mb-4">
                                You may contact us to ask about personal information you have shared with us or to request appropriate corrections or deletion, where applicable.
                            </p>
                            <p className="mb-4">
                                Depending on the applicable law and the circumstances, you may also have rights relating to access, consent, withdrawal of consent, and other aspects of the handling of your personal information.
                            </p>
                            <p className="mb-4">
                                Some information may need to be retained to meet legal, professional, or other applicable obligations.
                            </p>
                            <p className="mb-4">
                                To make a privacy-related request, contact: mindcraftwellness@gmail.com
                            </p>
                            <p>
                                We may need to verify your identity before responding to certain requests.
                            </p>
                        </div>

                        {/* Section 11 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                11. Children's Privacy
                            </h2>
                            <p className="mb-4">
                                Our psychological services are described as being intended for adults aged 21 and above.
                            </p>
                            <p>
                                Our website is not designed to solicit information from children. Please do not submit a child's personal information through the website unless it is necessary and the relevant legal requirements have been considered.
                            </p>
                        </div>

                        {/* Section 12 */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                12. Changes to This Policy
                            </h2>
                            <p className="mb-4">
                                We may update this Privacy Policy to reflect changes in our services, website functionality, or applicable requirements.
                            </p>
                            <p>
                                The revised version will be published on this page with an updated revision date.
                            </p>
                        </div>

                        {/* Section 13 - Contact Section */}
                        <div>
                            <h2 className="text-2xl md:text-3xl mb-4 text-[#2B231C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                13. Contact Us
                            </h2>
                            <p className="mb-4">
                                If you have questions about this Privacy Policy or the handling of your personal information, please contact:
                            </p>
                            <p className="mb-2"><strong>Mind Craft Wellness</strong></p>
                            <p className="mb-2">Gurgaon, Haryana, India</p>
                            <p className="mb-4">Email: mindcraftwellness@gmail.com</p>
                            <p>
                                We appreciate the trust you place in us and are committed to handling your information thoughtfully and responsibly.
                            </p>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
