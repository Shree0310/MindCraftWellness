'use client';

import Header from "./Header";
import Footer from "./Footer";
import Link from 'next/link';
import { useState } from "react";
import { IconChevronDown } from '@tabler/icons-react';

export default function BookNow() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openAccordion, setOpenAccordion] = useState<number | null>(0); // First accordion open by default

    const toggleAccordion = (index: number) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <div className="bg-[#FAF6F0] min-h-screen">
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
            <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-20">

                {/* Header Section */}
                <div className="mb-16 text-left">
                    <h1 className="text-[10px] md:text-xs tracking-widest mb-8" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, letterSpacing: '0.2em', color: '#B6724F' }}>
                        BOOK A SESSION
                    </h1>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#5C4B3C] mb-8 text-left" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                        Taking the first step can feel like a big one.
                    </h2>
                    <div className="space-y-4 text-lg text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                        <p>
                            Whether you&apos;re feeling certain, curious, or a little anxious, you&apos;re welcome here. Beginning therapy doesn&apos;t require having everything figured out, it simply begins with a conversation.
                        </p>
                        <p className="font-medium" style={{ fontWeight: 400 }}>
                            There are two ways we can get started.
                        </p>
                    </div>
                </div>

                {/* Option 1: Book complimentary consultation */}
                <div className="bg-[#F2E8DD] p-8 md:p-10 mb-12" style={{ borderRadius: '20px' }}>
                    <h3 className="text-2xl md:text-3xl text-[#2B231C] mb-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                        Option 1: Book a complimentary 15-minute consultation
                    </h3>
                    <p className="text-lg text-[#5C4B3C] mb-6" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                        If you&apos;d like to understand how I work, ask questions, or see whether we&apos;d be a good fit before committing to therapy, you&apos;re welcome to book a free 15-minute consultation.
                    </p>
                    <p className="text-base text-[#5C4B3C] mb-8 italic" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                        The calendar below shows my available slots.
                    </p>

                    {/* Calendar Embed */}
                    <div className="bg-white p-4" style={{ borderRadius: '16px' }}>
                        <iframe
                            width="100%"
                            height="560"
                            title="Book Your Consultation"
                            src="https://www.tealfeed.com/goud_387923/connect/call?callType=67120307b554f31cdc8d94f9&embed=true&theme=light&brandColor=008080&hideDescription=false"
                            frameBorder="0"
                            allowFullScreen
                            className="rounded-xl"
                        >
                        </iframe>
                    </div>

                    <div className="text-center mt-4">
                        <p className="text-sm text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                            Having trouble with the calendar?
                            <a
                                href="https://www.tealfeed.com/goud_387923/connect/call?callType=67120307b554f31cdc8d94f9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#B6724F] hover:text-[#95573A] underline ml-1"
                                style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 400 }}
                            >
                                Open in new tab
                            </a>
                        </p>
                    </div>
                </div>

                {/* Option 2: WhatsApp */}
                <div className="bg-[#E8DBC9] p-8 md:p-10 mb-16" style={{ borderRadius: '20px' }}>
                    <h3 className="text-2xl md:text-3xl text-[#2B231C] mb-4" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                        Option 2: Reach out on WhatsApp
                    </h3>
                    <p className="text-lg text-[#5C4B3C] mb-6" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                        If you&apos;re ready to schedule your first therapy session, or if you&apos;d simply prefer speaking over WhatsApp, you&apos;re welcome to reach out directly.
                    </p>
                    <a
                        href="https://wa.me/919859080910"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#20BA5A] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                        style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500, letterSpacing: '0.05em' }}
                    >
                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                        </svg>
                        Message on WhatsApp
                    </a>
                </div>

                {/* Availability & Fees */}
                <div className="bg-white border-2 border-[#E8DBC9] p-8 md:p-10 mb-16" style={{ borderRadius: '20px' }}>
                    <h3 className="text-2xl md:text-3xl text-[#2B231C] mb-8" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                        Availability & Fees
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div>
                            <h4 className="text-lg text-[#2B231C] mb-2" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 500 }}>
                                Consultation Hours
                            </h4>
                            <p className="text-base text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                Wednesday – Saturday<br />
                                12:00 PM – 6:00 PM (IST)
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg text-[#2B231C] mb-2" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 500 }}>
                                Session Duration
                            </h4>
                            <p className="text-base text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                60 minutes
                            </p>
                        </div>
                        <div>
                            <h4 className="text-lg text-[#2B231C] mb-2" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 500 }}>
                                Fee
                            </h4>
                            <p className="text-base text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                ₹3,500 per session
                            </p>
                        </div>
                    </div>
                </div>

                {/* Questions Section - Accordions */}
                <div className="mb-16">
                    <h3 className="text-3xl md:text-4xl text-[#2B231C] mb-10" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                        Questions you might have
                    </h3>

                    <div className="space-y-0">
                        {/* Question 1 */}
                        <div className="border-b border-[#E8DBC9]">
                            <button
                                onClick={() => toggleAccordion(0)}
                                className="w-full py-6 flex justify-between items-center transition-colors"
                            >
                                <h4 className="text-base md:text-lg text-[#2B231C] text-left normal-case" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 400 }}>
                                    What happens in the first session?
                                </h4>
                                <IconChevronDown
                                    className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openAccordion === 0 ? 'rotate-180' : ''}`}
                                    size={24}
                                    color="#B6724F"
                                />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 0 ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="pb-6 space-y-4 text-base md:text-lg text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                    <p>
                                        The first session is an opportunity for us to get to know each other. We&apos;ll explore what&apos;s bringing you to therapy, understand your current concerns, talk about your personal history where relevant, and discuss what you hope to gain from the process.
                                    </p>
                                    <p>
                                        There is no pressure to share everything at once or have your thoughts perfectly organized. We&apos;ll begin wherever feels most comfortable for you.
                                    </p>
                                    <p>
                                        Towards the end of the session, we&apos;ll reflect on whether it feels like the right therapeutic fit. If we feel another therapist might better support your needs, I&apos;m happy to guide you towards appropriate referrals.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Question 2 */}
                        <div className="border-b border-[#E8DBC9]">
                            <button
                                onClick={() => toggleAccordion(1)}
                                className="w-full py-6 flex justify-between items-center transition-colors"
                            >
                                <h4 className="text-base md:text-lg text-[#2B231C] text-left normal-case" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 400 }}>
                                    How do I know if therapy is right for me?
                                </h4>
                                <IconChevronDown
                                    className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openAccordion === 1 ? 'rotate-180' : ''}`}
                                    size={24}
                                    color="#B6724F"
                                />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 1 ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="pb-6 space-y-4 text-base md:text-lg text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                    <p>
                                        You don&apos;t need to be in crisis to benefit from therapy.
                                    </p>
                                    <p>
                                        People come to therapy for many different reasons - anxiety, stress, relationship difficulties, burnout, grief, life transitions, low self-esteem, emotional overwhelm, or simply a desire to understand themselves more deeply.
                                    </p>
                                    <p>
                                        If something has been affecting your well-being or feels difficult to navigate alone, therapy can offer a space to explore it with curiosity, compassion, and support.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Question 3 */}
                        <div className="border-b border-[#E8DBC9]">
                            <button
                                onClick={() => toggleAccordion(2)}
                                className="w-full py-6 flex justify-between items-center transition-colors"
                            >
                                <h4 className="text-base md:text-lg text-[#2B231C] text-left normal-case" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 400 }}>
                                    What if I don&apos;t know where to begin or find it difficult to open up?
                                </h4>
                                <IconChevronDown
                                    className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openAccordion === 2 ? 'rotate-180' : ''}`}
                                    size={24}
                                    color="#B6724F"
                                />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 2 ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="pb-6 space-y-4 text-base md:text-lg text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                    <p>
                                        That&apos;s completely okay.
                                    </p>
                                    <p>
                                        Many people worry about what they&apos;ll say in therapy or whether they&apos;ll "do it right." There isn&apos;t a right way to begin.
                                    </p>
                                    <p>
                                        You can start wherever feels comfortable, even if all you know is that something doesn&apos;t feel okay. Building trust takes time, and we&apos;ll move at a pace that feels safe and respectful of where you are.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Question 4 */}
                        <div className="border-b border-[#E8DBC9]">
                            <button
                                onClick={() => toggleAccordion(3)}
                                className="w-full py-6 flex justify-between items-center transition-colors"
                            >
                                <h4 className="text-base md:text-lg text-[#2B231C] text-left normal-case" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 400 }}>
                                    How many sessions will I need?
                                </h4>
                                <IconChevronDown
                                    className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openAccordion === 3 ? 'rotate-180' : ''}`}
                                    size={24}
                                    color="#B6724F"
                                />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 3 ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="pb-6 space-y-4 text-base md:text-lg text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                    <p>
                                        There isn&apos;t a one-size-fits-all answer.
                                    </p>
                                    <p>
                                        The length of therapy depends on your goals, the concerns you&apos;re bringing, and the pace that feels right for you. Some people come for a few focused sessions around a particular challenge, while others choose longer-term therapy for deeper self-exploration and lasting change.
                                    </p>
                                    <p>
                                        We&apos;ll regularly review your progress together and decide what feels most helpful.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Question 5 */}
                        <div className="border-b border-[#E8DBC9]">
                            <button
                                onClick={() => toggleAccordion(4)}
                                className="w-full py-6 flex justify-between items-center transition-colors"
                            >
                                <h4 className="text-base md:text-lg text-[#2B231C] text-left normal-case" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 400 }}>
                                    Do I need to prepare for my first session?
                                </h4>
                                <IconChevronDown
                                    className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openAccordion === 4 ? 'rotate-180' : ''}`}
                                    size={24}
                                    color="#B6724F"
                                />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openAccordion === 4 ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                <div className="pb-6 space-y-4 text-base md:text-lg text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                                    <p>
                                        Not at all.
                                    </p>
                                    <p>
                                        You don&apos;t need to prepare, have everything figured out, or know exactly what you want to say. You&apos;re welcome to come exactly as you are.
                                    </p>
                                    <p>
                                        If it feels helpful, you might spend a few moments reflecting on what brought you to therapy, what you&apos;ve been finding difficult lately, or what you hope might be different in your life. These reflections are entirely optional.
                                    </p>
                                    <p>
                                        If you&apos;re feeling nervous, you&apos;re not alone. Starting therapy can feel like a big step, and it&apos;s natural to wonder what to expect. You don&apos;t have to carry that uncertainty by yourself. We&apos;ll take it one conversation at a time and create a space where you can feel heard, understood, and supported.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Have more questions? */}
                    <div className="bg-[#F2E8DD] p-6 md:p-8" style={{ borderRadius: '16px' }}>
                        <h4 className="text-xl text-[#2B231C] mb-3" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                            Have more questions?
                        </h4>
                        <p className="text-base text-[#5C4B3C] mb-4" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                            You can explore our complete FAQ section for more information about therapy, confidentiality, online sessions, cancellations, and the therapeutic process.
                        </p>
                        <Link
                            href="/FAQs"
                            className="inline-flex items-center text-[#B6724F] hover:text-[#95573A] transition-colors"
                            style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500 }}
                        >
                            → Read the FAQs
                        </Link>
                    </div>
                </div>

                {/* Final CTA - Ready when you are */}
                <div className="mb-16">
                    <h3 className="text-3xl md:text-4xl mb-6 text-center text-[#B6724F]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                        Ready when you are.
                    </h3>
                    <p className="text-lg md:text-xl mb-10 text-center text-[#2B231C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                        Whether you&apos;d like to start with a conversation or book your first session, you can choose whichever feels most comfortable.
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        {/* Option 1: Book Consultation Button */}
                        <a
                            href="https://www.tealfeed.com/goud_387923/connect/call?callType=67120307b554f31cdc8d94f9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#B6724F] text-white px-8 py-4 rounded-full hover:bg-[#95573A] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                            style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500, letterSpacing: '0.05em' }}
                        >
                            Book a complimentary 15-minute consultation
                        </a>

                        <span className="text-lg text-[#5C4B3C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                            or
                        </span>

                        {/* Option 2: WhatsApp Button */}
                        <a
                            href="https://wa.me/919859080910"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-[#25D366] text-white px-8 py-4 rounded-full hover:bg-[#20BA5A] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                            style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500, letterSpacing: '0.05em' }}
                        >
                            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            Message on WhatsApp
                        </a>
                    </div>
                </div>

            </div>

            <Footer />
        </div>
        </div>
    );
}
