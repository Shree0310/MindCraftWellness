"use client"

import Header from "./Header";
import Footer from "./Footer";
import Link from 'next/link';
import { useState } from "react";
import Testimonials from './Testimonials/Testimonials';

const WhatWeWorkWith = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const sections = [
        {
            number: "01",
            title: "MENTAL WELLBEING",
            heading: "Anxiety, Stress, Depression & Burnout",
            tag: "ANXIETY & BURNOUT",
            quotes: [
                "I feel like I'm always on edge. I can't switch off, even when I try.",
                "I feel too numb and disconnected from everything.",
                "I feel like I have to keep working even though I'm exhausted."
            ],
            description: `Life today moves fast, and the pressure to keep up can feel relentless.

For some, this shows up as anxiety — a constant hum of worry about work, relationships, health, or the future. For others, it's the heaviness of depression, where even simple tasks feel exhausting and joy seems out of reach.

Burnout often hides behind endless to-do lists and the sense that no amount of effort is ever enough — leaving you mentally foggy and emotionally drained. Whether it feels like restlessness, sadness, or complete numbness, these experiences are signals, not flaws. They are signs that something within you needs care and attention.`,
            howWork: "We begin by getting in touch with how your body is expressing its discomfort and saturation. From there, we co-create a path — both to build coping with what's happening now, and to explore what you internally need from all that life is asking of you.",
            bgColor: "bg-[#F8F3ED]"
        },
        {
            number: "02",
            title: "CONNECTION & INTIMACY",
            heading: "Self-worth & Confidence Challenges",
            tag: "RELATIONSHIPS",
            quotes: [
                "I keep ending up in the same arguments, no matter who I'm with.",
                "I want closeness but when it gets real, I pull away.",
                "I say yes to everyone but I'm exhausted and resentful."
            ],
            description: `Relationships are where our oldest wounds tend to show up.

It can also show up as a tendency to please, to avoid conflict at all costs, or to carry the weight of other people's feelings because saying "no" feels impossible.

These patterns aren't random. They often trace back to early attachment experiences and unmet needs that shaped how we learned to stay safe in connection. As children, we generally take the shape of the container we are born into - the environment, parental dynamics, financial circumstances, life events at that time.`,
            howWork: "Therapy offers a space to notice these patterns without judgment — to understand what purpose they served, and to work through the fears or beliefs that keep them alive. Together, we explore what gets in the way of authentic connection, so your relationships can feel safer, more nourishing, and more aligned with what you truly want.",
            bgColor: "bg-[#F2E8DD]"
        },
        {
            number: "03",
            title: "SPECIALISATION",
            heading: "Perinatal Mental Health & Fertility Challenges",
            tag: "PERINATAL HEALTH",
            quotes: [
                "Why am I not happier?",
                "This isn't what I imagined.",
                "I love my baby but I feel like I've lost myself."
            ],
            specialisation: "Advanced training in Perinatal Mental Health from NIMHANS (India) and PSI Collective (Washington, DC).",
            description: `Pregnancy and postpartum can bring joy — and also anxiety, loneliness, guilt, and overwhelm. If you've ever thought "Why am I not happier?" or "This isn't what I imagined," you are not alone. There's nothing wrong with you.

The journey to parenthood can stir unexpected emotions — hope, fear, grief, and everything in between. Whether you're navigating fertility struggles, pregnancy changes, postpartum shifts, grief from miscarriage, or adjusting to life with a baby, this is a space to feel, grieve, question, or wonder — without judgment.

In perinatal/postpartum therapy, we also explore how to stay connected to your own identity, and how to redefine it while embracing the all-encompassing role of parenthood.`,
            howWork: "I work with individuals through fertility challenges, conception, pregnancy, and the postpartum period. Sessions are paced carefully, with attention to a client's erratic availability. I also work with non-birthing partners who often carry invisible stress during this period.",
            bgColor: "bg-[#B6724F]",
            textColor: "text-white"
        },
        {
            number: "04",
            title: "TRAUMA-INFORMED CARE",
            heading: "Trauma & Emotional Healing",
            tag: "TRAUMA",
            quotes: [
                "I know it happened a long time ago, but it still affects everything.",
                "I don't even know if what I went through counts as trauma.",
                "I feel like something is wrong with me and I don't know why."
            ],
            description: `Trauma isn't only about what happened to you it's also about what didn't happen.

It can arise from overwhelming events like accidents, abuse, or loss. But just as often, it comes from the absence of what you deeply needed: comfort, safety, protection, or being truly seen and understood. When these essential experiences are missing when no one is there to soothe you, protect you, or affirm who you are it can leave an imprint just as deep as any visible wound.

Trauma often lives in the body and shows up quietly, long after the experience through anxiety, relationship struggles, hypervigilance, numbness, or the feeling that something is fundamentally "wrong" with you.`,
            howWork: "We work gently and at your pace to process both what happened and what didn't happen — helping you reclaim a sense of safety, connection, and wholeness. Every session is trauma-informed, so sensitivity and personalised attention are always part of how I show up.",
            bgColor: "bg-[#F2E8DD]"
        },
        {
            number: "05",
            title: "PERSONAL GROWTH",
            heading: "Self-Worth & Confidence Challenges",
            tag: "SELF-WORTH",
            quotes: [
                "No matter what I achieve, it never feels enough.",
                "I constantly need reassurance from others to feel okay.",
                "I say yes to everything and I don't know how to stop."
            ],
            description: `Struggles with self-worth can show up in ways that aren't always obvious.

Feeling like you're never doing enough. Constantly comparing yourself to others. Seeking validation, fearing failure, or feeling like your sense of value depends entirely on achievement, roles, or other people's approval. Sometimes it shows up as saying yes when you want to say no — or feeling guilty for prioritising your own needs.

These patterns often come from early experiences — from the messages we received (or didn't receive) about being lovable and worthy. Over time, they can create an inner voice that says: "You're not good enough."`,
            howWork: "We work to uncover and transform the beliefs keeping you stuck in self-doubt. The goal isn't to become someone else — it's to reconnect with the version of you that already feels whole, enough, and grounded in your own value.",
            bgColor: "bg-white"
        },
        {
            number: "06",
            title: "LIFE CHANGES",
            heading: "Life Transitions & Identity Shifts",
            tag: "LIFE TRANSITIONS",
            quotes: [
                "I don't know who I am anymore.",
                "Everything changed and I thought I'd be okay — but I'm not.",
                "I chose this change. So why does it feel so hard?"
            ],
            description: `Big changes can feel overwhelming — even when they're chosen or expected.

Moving cities or countries, shifting careers, getting married (whether a love or arranged marriage), entering a new relationship — these transitions often bring a sense of disorientation. The ground beneath you doesn't feel as steady as it used to.

Roles change, relationships shift, and the familiar markers of identity fall away. Questions like "Who am I now?" or "What does this new chapter mean for me?" can feel daunting to hold alone.`,
            howWork: "Therapy can be a grounding space during these times — a place to pause, process, and make sense of what feels unfamiliar. We work on re-rooting you in this new reality while honouring the old one, helping you rediscover strengths you may have forgotten and find clarity, belonging, and a deeper sense of self.",
            bgColor: "bg-[#F2E8DD]"
        },
        {
            number: "07",
            title: "BREAKING PATTERNS",
            heading: "Feeling Stuck",
            tag: "FEELING STUCK",
            quotes: [
                "I know what I should do. I just can't make myself do it.",
                "I keep reaching for my phone or food or a drink without even thinking.",
                "I feel like I'm going through the motions but nothing changes."
            ],
            description: `When clients tell me they feel "stuck," it's rarely about doing nothing. It's about being caught in cycles that no longer feel helpful.

It can show up as procrastination, avoidance, or habits like binge-watching, endless scrolling, smoking, drinking, overworking, or shopping when stressed. These patterns often get labelled as "bad" — but in my experience, they usually have a function. They've protected you from something, maybe big feelings, overwhelming stress, or a sense of loneliness.

At some point, they made sense. What once kept you safe can start to feel limiting. Coping strategies that worked for years might begin to leave you feeling disconnected or restless — like you're living life on autopilot.`,
            howWork: "Therapy becomes a place to pause and really understand what's underneath — to explore the role these behaviours play, what they're protecting you from, and what you truly need now. From there, we build new ways of coping that feel sustainable, nourishing, and aligned with the life you want to create.",
            bgColor: "bg-[#F8F3ED]"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <div
                className={`${
                isMenuOpen
                    ? "filter blur-sm pointer-events-none transition-filter duration-300"
                    : "transition-filter duration-300"
                }`}
            >
                <div className="w-full flex-grow">
                    {/* Hero Section */}
                    <div className="bg-[#F2E8DD] py-16 md:py-24 px-4 md:px-8">
                        <div className="max-w-6xl mx-auto">
                            <h1 className="text-[10px] md:text-xs tracking-widest mb-8" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, letterSpacing: '0.2em', color: '#B6724F' }}>
                                WHAT I WORK WITH
                            </h1>
                            <p className="text-3xl md:text-4xl lg:text-5xl text-[#5C4B3C] mb-12 text-left" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300, fontStyle: 'italic' }}>
                                These are <span style={{ fontStyle: 'normal', color: '#B6724F' }}>human experiences<span style={{ fontStyle: 'italic' }}>,</span></span><br />not diagnoses.
                            </p>
                            <div className="text-lg md:text-xl leading-relaxed text-[#5C4B3C] max-w-3xl text-left space-y-4" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                <p>Over the last five years, I've had the privilege of working with people through some of life's most challenging and transformative moments.</p>
                                <p>The concerns below aren't labels — they're an attempt to help you recognise yourself. If something resonates, that's enough of a reason to reach out.</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Tags */}
                    <div className="bg-[#F8F3ED] py-8 px-4 md:px-8 border-b border-[#E8DBC9]">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex flex-wrap gap-3 justify-center">
                                {sections.map((section, idx) => (
                                    <span key={idx} className="px-4 py-2 text-[#5C4B3C] text-xs md:text-sm" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500 }}>
                                        {section.tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sections */}
                    {sections.map((section, idx) => (
                        <div key={idx} className={`${section.bgColor} py-16 md:py-20 px-4 md:px-8`}>
                            <div className="max-w-6xl mx-auto">
                                <div className="grid md:grid-cols-2 gap-12 md:gap-16">
                                    {/* Conditional Column Order for Sections 02 and 05 */}
                                    {(idx === 1 || idx === 4) ? (
                                        <>
                                            {/* Left Column - Heading & Content for Section 02 */}
                                            <div className="space-y-8">
                                                <div>
                                                    <h2 className={`text-2xl md:text-3xl lg:text-4xl mb-6 ${section.textColor || 'text-[#5C4B3C]'}`} style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                                                        Relationship<br />
                                                        <span style={{ color: '#B6724F' }}>Difficulties</span>
                                                    </h2>
                                                    <div className={`text-base md:text-lg leading-relaxed space-y-4 ${section.textColor || 'text-[#5C4B3C]'}`} style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                                        {section.description.split('\n\n').map((para, pIdx) => (
                                                            <p key={pIdx}>{para}</p>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className={`p-8 md:p-10 rounded-lg ${section.bgColor === 'bg-[#B6724F]' ? 'bg-[#95573A]' : 'bg-[#B6724F]'}`}>
                                                    <h4 className="text-sm md:text-base tracking-wider mb-6 text-[#F2E8DD]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, letterSpacing: '0.1em' }}>
                                                        HOW I WORK WITH THIS
                                                    </h4>
                                                    <p className="text-base md:text-lg leading-relaxed text-white" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                                        {section.howWork}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Right Column - Number, Title & Quotes for Section 02 */}
                                            <div className="space-y-6">
                                                <div className="mb-6">
                                                    <span className={`text-6xl md:text-7xl tracking-wider ${section.textColor || 'text-[#95573A]'} opacity-30`} style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500, letterSpacing: '0.15em' }}>
                                                        {section.number}
                                                    </span>
                                                    <h3 className={`text-xs md:text-sm tracking-widest mt-2 ${section.textColor || 'text-[#5C4B3C]'}`} style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, letterSpacing: '0.2em', color: section.title === 'SPECIALISATION' ? 'white' : (['PERSONAL GROWTH', 'TRAUMA-INFORMED CARE', 'CONNECTION & INTIMACY', 'MENTAL WELLBEING', 'LIFE CHANGES', 'BREAKING PATTERNS'].includes(section.title)) ? '#B6724F' : undefined }}>
                                                        {section.title}
                                                    </h3>
                                                </div>
                                                <div className={`p-4 md:p-6 ${section.bgColor === 'bg-[#B6724F]' ? 'bg-[#95573A]' : 'bg-[#E8DBC9]'} rounded-lg space-y-4`}>
                                                    {section.quotes.map((quote, qIdx) => (
                                                        <p key={qIdx} className={`text-base md:text-lg italic ${section.textColor || 'text-[#5C4B3C]'}`} style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                                            &ldquo;{quote}&rdquo;
                                                        </p>
                                                    ))}
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {/* Left Column - Number, Title & Quotes for other sections */}
                                            <div className="space-y-6">
                                                <div className="mb-6">
                                                    <span className={`text-6xl md:text-7xl tracking-wider ${section.textColor || 'text-[#95573A]'} opacity-30`} style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500, letterSpacing: '0.15em' }}>
                                                        {section.number}
                                                    </span>
                                                    <h3 className={`text-xs md:text-sm tracking-widest mt-2 ${section.textColor || 'text-[#5C4B3C]'}`} style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, letterSpacing: '0.2em', color: section.title === 'SPECIALISATION' ? 'white' : (['PERSONAL GROWTH', 'TRAUMA-INFORMED CARE', 'CONNECTION & INTIMACY', 'MENTAL WELLBEING', 'LIFE CHANGES', 'BREAKING PATTERNS'].includes(section.title)) ? '#B6724F' : undefined }}>
                                                        {section.title}
                                                    </h3>
                                                </div>
                                                <div className={`p-4 md:p-6 ${section.bgColor === 'bg-[#B6724F]' ? 'bg-[#95573A]' : 'bg-[#E8DBC9]'} rounded-lg space-y-4`}>
                                                    {section.quotes.map((quote, qIdx) => (
                                                        <p key={qIdx} className={`text-base md:text-lg italic ${section.textColor || 'text-[#5C4B3C]'}`} style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                                            &ldquo;{quote}&rdquo;
                                                        </p>
                                                    ))}
                                                </div>
                                                {section.specialisation && (
                                                    <div className="bg-[#95573A] p-4 md:p-6 rounded-lg mt-6">
                                                        <p className="text-sm md:text-base text-white italic" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                                            {section.specialisation}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Right Column - Content for other sections */}
                                            <div className="space-y-8">
                                                <div>
                                                    <h2 className={`text-2xl md:text-3xl lg:text-4xl mb-6 ${section.textColor || 'text-[#5C4B3C]'}`} style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                                                        {idx === 0 ? (
                                                            <>
                                                                Anxiety, Stress,<br />
                                                                Depression & <span style={{ color: '#B6724F' }}>Burnout</span>
                                                            </>
                                                        ) : idx === 5 ? (
                                                            <>
                                                                Life Transitions &<br />
                                                                <span style={{ color: '#B6724F' }}>Identity Shifts</span>
                                                            </>
                                                        ) : idx === 6 ? (
                                                            <>
                                                                Feeling <span style={{ color: '#B6724F' }}>Stuck</span>
                                                            </>
                                                        ) : (
                                                            section.heading
                                                        )}
                                                    </h2>
                                                    <div className={`text-base md:text-lg leading-relaxed space-y-4 ${section.textColor || 'text-[#5C4B3C]'}`} style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                                        {section.description.split('\n\n').map((para, pIdx) => (
                                                            <p key={pIdx}>{para}</p>
                                                        ))}
                                                    </div>
                                                </div>

                                                <div className={`p-6 md:p-8 rounded-lg ${section.bgColor === 'bg-[#B6724F]' ? 'bg-[#95573A]' : 'bg-[#B6724F]'}`}>
                                                    <h4 className="text-sm md:text-base tracking-wider mb-4 text-[#F2E8DD]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 600, letterSpacing: '0.1em' }}>
                                                        HOW I WORK WITH THIS
                                                    </h4>
                                                    <p className="text-base md:text-lg leading-relaxed text-white" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                                        {section.howWork}
                                                    </p>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Closing Section 1 */}
                    <div className="bg-[#F8F3ED] py-16 md:py-20 px-4 md:px-8">
                        <div className="max-w-4xl mx-auto text-center space-y-8">
                            <p className="text-base md:text-lg leading-relaxed text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                This list has only attempted to cover some of the different human experiences within these areas — but being human means there is much more individual variation and humanness in how we feel and express things, far beyond any label.
                            </p>
                            <p className="text-base md:text-lg leading-relaxed text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                If you found yourself reflected in any of these experiences, there is no shame in reaching out for support in this period.
                            </p>
                            <p className="text-base md:text-lg leading-relaxed text-[#5C4B3C] italic" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                                If any of this sounds like what you've been feeling, you're not alone.
                            </p>
                        </div>
                    </div>

                    {/* Closing Section 2 - CTA */}
                    <div className="bg-[#E8DBC9] py-16 md:py-20 px-4 md:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h3 className="text-2xl md:text-3xl mb-6 text-[#5C4B3C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 300 }}>
                                Not sure if what you're going through is on this list?
                            </h3>
                            <p className="text-xl md:text-2xl mb-8 text-[#5C4B3C]" style={{ fontFamily: 'var(--font-fraunces), Georgia, serif', fontWeight: 400 }}>
                                Reach out anyway.
                            </p>
                            <Link href="/book-now">
                                <button className="bg-[#B6724F] text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg hover:bg-[#95573A] transition-all duration-300 shadow-lg hover:shadow-xl" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 500, letterSpacing: '0.05em' }}>
                                    BOOK A FREE CONSULTATION →
                                </button>
                            </Link>
                            <div className='flex justify-center mt-8'>
                                <Link href="/FAQs" className='text-[#B6724F] hover:text-[#95573A] transition-colors text-base' style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300 }}>
                                    Still have questions? → read our FAQs
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div className='bg-[#B6724F] h-full w-full text-white relative overflow-hidden py-12 md:py-16'>
                    <Testimonials category='specialities' />
                </div>

                <Footer className="bg-[#5C4B3C]" />
            </div>
        </div>
    );
};

export default WhatWeWorkWith;
