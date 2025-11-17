"use client"

import Header from "./Header";
import Footer from "./Footer";
import OurValues from "./OurValues";
import Testimonials from "./Testimonials/Testimonials";
import Link from 'next/link';
import TakingTherapy from '../Assets/images/Taking-Therapy.jpg';
import OurSpace from '../Assets/images/ourSpace.png';


const WhatWeWorkWith = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="bg-[#FFFADA] text-black w-full font-sans py-16 overflow-x-hidden flex-grow">
                <div className="max-w-7xl mx-auto px-8">
                    {/* Hero Quote Section */}
                    {/* Quote Section */}
                    <div className="py-20 px-8 mb-20">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="bg-white rounded-3xl p-12 shadow-lg">
                                <div className="mb-6">
                                    <svg className="w-12 h-12 text-[#345041] mx-auto" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                                    </svg>
                                </div>
                                <blockquote className="text-2xl md:text-3xl font-medium text-[#345041] leading-relaxed italic mb-6" style={{ fontFamily: 'BrittanySignature, serif' }}>
                                    &ldquo;There is no greater agony than bearing an untold story inside you.&rdquo;
                                </blockquote>
                                <p className="text-lg text-gray-600 mb-6" style={{ fontFamily: 'Lora, serif' }}>
                                    - Maya Angelou
                                </p>
                                <div className="w-24 h-1 bg-[#345041] mx-auto rounded-full"></div>
                            </div>
                        </div>
                    </div>

                    {/* Introduction Section */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <h1 className="text-4xl font-bold text-[#345041] mb-4 text-center" style={{ fontFamily: 'BodoniModa, serif' }}>
                            What We Support You Through
                        </h1>

                        <div className="space-y-6 text-lg leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                            <p>
                                Over the last five years, I&apos;ve had the privilege of working with people through some of life&apos;s most challenging and transformative moments. Many clients come to therapy feeling stuck, overwhelmed, or unsure if what they&apos;re feeling is &ldquo;serious enough.&rdquo;
                            </p>

                            <div className="bg-white rounded-2xl p-8 shadow-lg my-8">
                                <blockquote className="text-2xl md:text-3xl font-medium text-[#345041] text-center leading-relaxed italic" style={{ fontFamily: 'BrittanySignature, serif' }}>
                                    &ldquo;If you&apos;ve ever asked yourself, &lsquo;Do I really need therapy?&rsquo; - you are not alone.&rdquo;
                                </blockquote>
                            </div>

                            <div className="flex gap-8 items-start">
                                <img
                                    src={TakingTherapy.src}
                                    alt="Taking Therapy"
                                    width="400"
                                    height="300"
                                    className="object-cover rounded-lg"
                                />
                                <p>
                                    Therapy isn&apos;t just for crises. It&apos;s for anyone wanting more clarity, ease, and emotional freedom in their life. Below we have created a short list of concerns we have worked with, this list is merely here to help you explore & identify your experience.
                                </p>
                            </div>

                            <div className="flex gap-8 items-start">
                                <p className="flex-1">
                                    If you find yourself being reflected behind these phrases and experiences, this is not a diagnosis; it is just an explorative understanding of what you might be dealing with and how we intend to support you through/in it - Please note that even though some of these can be categorised as mental health disorders they are still human experiences, we as human beings are vulnerable to a lot of things like illnesses, calamities, accidents, and we are also vulnerable to heartbreaks, grief, and stressors of all kinds to name a few.
                                </p>
                                <img
                                    src={OurSpace.src}
                                    alt="Our Space"
                                    width="400"
                                    height="300"
                                    className="object-cover rounded-lg"
                                />
                            </div>

                            <p>
                                Having our own (symptomatic) reactions to them is an expression of our survival instinct kicking in. Therapy becomes a place where we safely & compassionately explore them to untangle from the imprint things have left on us, therefore this process will look and feel different for every individual.
                            </p>
                        </div>
                    </div>

                    {/* Concern Sections */}
                    <div className="space-y-20 mb-20">
                        {/* Anxiety, Stress, Depression & Burnout */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-[#345041] mb-6" style={{ fontFamily: 'Lora, serif' }}>
                                        Anxiety, Stress, Depression & Burnout
                                    </h2>
                                    <div className="space-y-4 mb-6">
                                        <p className="text-lg italic text-gray-700">&ldquo;I feel like I&apos;m always on edge. I can&apos;t switch off, even when I try.&rdquo;</p>
                                        <p className="text-lg italic text-gray-700">&ldquo;I feel too numb and disconnected from everything.&rdquo;</p>
                                        <p className="text-lg italic text-gray-700">&ldquo;I feel like I have to keep on working even though I feel exhausted; I am finding it hard to stop&rdquo;.</p>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-[#E7CDBF] to-[#f8f6f4] rounded-2xl p-6 h-64 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">😰</div>
                                        <p className="text-lg font-semibold text-[#345041]">Anxiety & Stress</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-lg leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                                <p className="mb-4">
                                    Life today moves fast, and the pressure to keep up can feel overwhelming. For some, this shows up as anxiety, a constant hum of worry about work, relationships, health, or the future. For others, it&apos;s the heaviness of depression, where even simple tasks feel exhausting and joy seems out of reach.
                                </p>
                                <p className="mb-4">
                                    Burnout on the other hand often hides behind endless to-do lists and the sense that no amount of effort is ever enough, leaving you mentally foggy and emotionally drained. Whether it feels like restlessness, sadness, or complete numbness, these experiences are signals, not flaws, they are signs that something within you needs care and attention.
                                </p>
                                <p>
                                    The goal in therapy is to start by getting in touch with how your body is expressing its discomfort, its saturation, its pain. And then co-creating a path to establish coping with it all while also exploring what you internally need from all that is happening in your life.
                                </p>
                            </div>
                        </div>

                        {/* Relationship Difficulties */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="bg-gradient-to-br from-[#E7CDBF] to-[#f8f6f4] rounded-2xl p-6 h-64 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">💕</div>
                                        <p className="text-lg font-semibold text-[#345041]">Relationships</p>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-[#345041] mb-6" style={{ fontFamily: 'Lora, serif' }}>
                                        Relationship Difficulties
                                    </h2>
                                    <blockquote className="text-lg italic text-gray-700 mb-6">
                                        &ldquo;The quality of your life ultimately depends on the quality of your relationships.&rdquo; - Esther Perel
                                    </blockquote>
                                </div>
                            </div>
                            <div className="mt-6 text-lg leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                                <p className="mb-4">
                                    Relationships can be deeply rewarding, yet they often become the space where our oldest wounds show up. Maybe you find yourself stuck in recurring conflicts, feeling like you&apos;re never understood, or shutting down when things get hard. Sometimes challenges in relationships look like wanting closeness, other times needing space and feeling overwhelmed when someone gets &ldquo;too near&rdquo;.
                                </p>
                                <p className="mb-4">
                                    It can also show up as a tendency to please, avoid conflict at all costs, or carry the weight of other people&apos;s feelings because saying &ldquo;no&rdquo; feels impossible.
                                </p>
                                <p className="mb-4">
                                    These patterns aren&apos;t random, they often trace back to early attachment experiences and unmet needs that shaped how we learned to stay safe in connection. As children, we generally take the shape of the container (environment, parental dynamics, financial circumstance, life events, etc) we are born into.
                                </p>
                                <p>
                                    Therapy offers a space to notice these patterns without judgment, to understand what purpose they served for you, and to work through the fears or beliefs that keep them alive. Together, we explore what gets in the way of authentic connection so your relationships can feel safer, more nourishing, and aligned with what you truly want.
                                </p>
                            </div>
                        </div>

                        {/* Perinatal Mental Health & Fertility Challenges */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-[#345041] mb-6" style={{ fontFamily: 'Lora, serif' }}>
                                        Perinatal Mental Health & Fertility Challenges
                                    </h2>
                                    <div className="space-y-4 mb-6">
                                        <p className="text-lg italic text-gray-700">&ldquo;Why am I not happier?&rdquo;</p>
                                        <p className="text-lg italic text-gray-700">&ldquo;This isn&apos;t what I imagined&rdquo;</p>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-[#E7CDBF] to-[#f8f6f4] rounded-2xl p-6 h-64 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🤱</div>
                                        <p className="text-lg font-semibold text-[#345041]">Parenthood Journey</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-lg leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                                <p className="mb-4">
                                    Pregnancy and postpartum can bring joy and also anxiety, loneliness, guilt, and overwhelm. If you&apos;ve ever thought, &lsquo;Why am I not happier?&rsquo; or &lsquo;This isn&apos;t what I imagined,&rsquo; you are not alone. There&apos;s nothing wrong with you. This is the part no one talks about, and that&apos;s where I come in.
                                </p>
                                <p className="mb-4">
                                    The journey to parenthood can stir unexpected emotions like hope, fears, grief, and everything in between. Whether you&apos;re navigating fertility struggles, pregnancy changes, postpartum shifts, grief of miscarriage(s), or adjusting to life with a baby, this is a safe space to feel, grieve, question, rage, or wonder, without any judgment.
                                </p>
                                <p className="mb-4">
                                    In therapy, we also explore how to stay connected to your own identity and redefine your identity while embracing this all-encompassing role of parenthood.
                                </p>
                                <p className="bg-[#E7CDBF] p-4 rounded-lg">
                                    <strong>Aishwaraya has completed advanced training in Perinatal Mental Health from NIMHANS (India)</strong> and <strong>PSI Collective (Washington, DC)</strong> to support women, men, and families through this journey, this is an area of her specialisation.
                                </p>
                            </div>
                        </div>

                        {/* Trauma & Emotional Healing */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="bg-gradient-to-br from-[#E7CDBF] to-[#f8f6f4] rounded-2xl p-6 h-64 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🦋</div>
                                        <p className="text-lg font-semibold text-[#345041]">Healing</p>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-[#345041] mb-6" style={{ fontFamily: 'Lora, serif' }}>
                                        Trauma & Emotional Healing
                                    </h2>
                                    <blockquote className="text-lg italic text-gray-700 mb-6">
                                        &ldquo;Trauma is not what happens to you. Trauma is what happens inside you as a result of what happens to you.&rdquo; - Gabor Maté
                                    </blockquote>
                                </div>
                            </div>
                            <div className="mt-6 text-lg leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                                <p className="mb-4">
                                    Sometimes, past pain quietly lingers and shows up in unexpected ways, in relationships, work, or as stress. Trauma isn&apos;t only about what happened to you it&apos;s also about what didn&apos;t happen.
                                </p>
                                <p className="mb-4">
                                    It can arise from overwhelming events like accidents, abuse, or loss, but just as often, it comes from the absence of what you deeply needed: comfort, safety, protection, or being truly seen and understood. When these essential experiences are missing, when no one is there to soothe you, protect you, or affirm who you are, it can leave an imprint just as deep as any visible wound.
                                </p>
                                <p className="mb-4">
                                    Trauma often lives in the body and shows up quietly, long after the experience, through anxiety, relationship struggles, hypervigilance, numbness, or feeling like something is &ldquo;wrong&rdquo; with you.
                                </p>
                                <p className="bg-[#E7CDBF] p-4 rounded-lg">
                                    In therapy, we work gently and at your pace to process what happened and what didn&apos;t happen, helping you reclaim safety, connection, and a sense of wholeness. At Mind Craft Wellness, all our therapists are trauma-informed, so that they can bring in the sensitivity and personalised attention to you and your wounds.
                                </p>
                            </div>
                        </div>

                        {/* Self-Worth & Confidence */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-[#345041] mb-6" style={{ fontFamily: 'Lora, serif' }}>
                                        Self-Worth & Confidence
                                    </h2>
                                    <div className="space-y-4 mb-6">
                                        <p className="text-lg italic text-gray-700">&ldquo;No matter what I achieve, it never feels enough.&rdquo; - anonymous</p>
                                        <blockquote className="text-lg italic text-gray-700">
                                            &ldquo;Owning our story and loving ourselves through that process is the bravest thing that we will ever do.&rdquo; - Brené Brown
                                        </blockquote>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-[#E7CDBF] to-[#f8f6f4] rounded-2xl p-6 h-64 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">💪</div>
                                        <p className="text-lg font-semibold text-[#345041]">Self-Worth</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-lg leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                                <p className="mb-4">
                                    Struggles with self-worth can show up in many ways - feeling like you&apos;re never doing enough, constantly comparing yourself to others, seeking validation, or fearing failure.
                                </p>
                                <p className="mb-4">
                                    It can feel like your sense of value depends on achievements, roles, or other people&apos;s approval and it can look like constantly seeking validation, saying yes when you want to say no, or feeling guilty for prioritizing your needs. Sometimes struggles with self-worth can also show up in our relationship with food and/or our body image.
                                </p>
                                <p className="mb-4">
                                    The truth is, these patterns often come from early experiences, from the messages we received (or didn&apos;t receive) about being lovable and worthy. Over time, they can create an inner voice and belief system that says, &ldquo;You&apos;re not good enough.&rdquo;
                                </p>
                                <p>
                                    In therapy, we work with you to uncover and transform the beliefs that keep you stuck in self-doubt. The goal isn&apos;t to &ldquo;become someone else&rdquo;, it is to reconnect with the version of you that already feels whole, enough, and deeply grounded in your own value.
                                </p>
                            </div>
                        </div>

                        {/* Life Transitions & Identity Shifts */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="bg-gradient-to-br from-[#E7CDBF] to-[#f8f6f4] rounded-2xl p-6 h-64 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🌱</div>
                                        <p className="text-lg font-semibold text-[#345041]">Transitions</p>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-[#345041] mb-6" style={{ fontFamily: 'Lora, serif' }}>
                                        Life Transitions & Identity Shifts
                                    </h2>
                                    <div className="space-y-4 mb-6">
                                        <p className="text-lg italic text-gray-700">&ldquo;I don&apos;t know who I am anymore.&rdquo; - Anonymous</p>
                                        <blockquote className="text-lg italic text-gray-700">
                                            &ldquo;We must be willing to let go of the life we planned so as to have the life that is waiting for us.&rdquo; - Joseph Campbell
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-lg leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                                <p className="mb-4">
                                    Big changes - like moving cities or countries, shifting careers, or getting married (whether love or arranged), can feel overwhelming, even when they&apos;re chosen or expected. These transitions often bring with them a sense of disorientation, like the ground beneath your feet isn&apos;t as steady as it used to be.
                                </p>
                                <p className="mb-4">
                                    You may feel unanchored, disconnected from yourself, or unsure where you truly belong. Displacement, whether physical or emotional, can have a ripple effect on our sense of self.
                                </p>
                                <p className="mb-4">
                                    Roles change, relationships shift, and the familiar markers of identity often fall away. Questions like &ldquo;Who am I now?&rdquo; or &ldquo;What does this new chapter mean for me?&rdquo; can feel daunting to hold alone.
                                </p>
                                <p>
                                    Therapy can be a grounding space in these times, a place to pause, process, and make sense of what feels unfamiliar. Together, we work on re-rooting you in this new reality while honoring the old one, helping you rediscover strengths you may have forgotten, and exploring what you need to feel whole and steady again. It&apos;s not just about adjusting to change, it&apos;s about finding clarity, belongingness, and a deeper sense of self in the midst of it all.
                                </p>
                            </div>
                        </div>

                        {/* Feeling Stuck */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-[#345041] mb-6" style={{ fontFamily: 'Lora, serif' }}>
                                        Feeling Stuck
                                    </h2>
                                </div>
                                <div className="bg-gradient-to-br from-[#E7CDBF] to-[#f8f6f4] rounded-2xl p-6 h-64 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-6xl mb-4">🔄</div>
                                        <p className="text-lg font-semibold text-[#345041]">Breaking Cycles</p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 text-lg leading-relaxed" style={{ fontFamily: 'Lora, serif' }}>
                                <p className="mb-4">
                                    When clients tell me they feel &ldquo;stuck,&rdquo; it&apos;s rarely about doing nothing, it&apos;s about being caught in cycles that no longer feel helpful.
                                </p>
                                <p className="mb-4">
                                    It can show up as procrastination, avoidance, or habits like binge-watching, endless scrolling, smoking, drinking, overworking, or shopping when stressed. These patterns often get labeled as &ldquo;bad,&rdquo; but in my experience, they usually have a function. They&apos;ve protected you from something, maybe big feelings, overwhelming stress, or a sense of loneliness.
                                </p>
                                <p className="mb-4">
                                    At some point, they made sense. The thing is, what once kept you safe can start to feel limiting. Coping strategies that worked for years might begin to leave you feeling disconnected or restless, like you&apos;re living life on autopilot.
                                </p>
                                <p>
                                    When that happens, therapy becomes a place to pause and really understand what&apos;s underneath. We explore the role these behaviors play, what they&apos;re protecting you from, and what you truly need now. From there, we work together to build new ways of coping, establishing approaches that feel sustainable, nourishing, and aligned with the life you want to create.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Closing Section */}
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <div className="bg-gradient-to-r from-[#f8f6f4] to-[#E7CDBF] rounded-3xl p-8">
                            <p className="text-lg leading-relaxed mb-6" style={{ fontFamily: 'Lora, serif' }}>
                                This list has only attempted to cover some of the different human experiences within these labels, but that doesn&apos;t mean that this is all there. Because being human, means that there is much more individualistic variation and humanness in how we experience things and express things, much beyond the labels.
                            </p>
                            <p className="text-xl font-semibold text-[#345041] mb-8" style={{ fontFamily: 'Lora, serif' }}>
                                If any of this sounds like what you&apos;ve been feeling, you&apos;re not alone and you don&apos;t have to navigate it by yourself.
                            </p>
                            <Link href="/book-now" className="bg-[#345041] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#2a4033] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Book a discovery call →
                            </Link>
                        </div>
                    </div>

                    {/* Our Values Section */}
                    <OurValues />

                    {/* Testimonials Section */}
                    <Testimonials category="specialities"/>

                    {/* Final Call to Action */}
                    <div className="text-center mt-16">
                        <Link href="/book-now" className="bg-[#345041] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#2a4033] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Book a discovery call →
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default WhatWeWorkWith;
