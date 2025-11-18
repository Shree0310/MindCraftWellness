const Concerns = () => {
    return <div className="div">
        {/* Concern Sections */}
        <div className="space-y-16 mb-20">
            {/* Anxiety, Stress, Depression & Burnout */}
            <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#E7CDBF] rounded-full opacity-10 blur-2xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#345041] rounded-full opacity-5 blur-3xl"></div>
                
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden border border-gray-100">
                    {/* Decorative wave */}
                    <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
                        <svg viewBox="0 0 256 256" className="w-full h-full">
                            <path
                                d="M0,128 Q64,64 128,128 T256,128"
                                stroke="#345041"
                                strokeWidth="2"
                                fill="none"
                            />
                        </svg>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                        <div>
                            <div className="inline-block bg-[#345041] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                Mental Wellbeing
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#345041] mb-6" style={{ fontFamily: 'Lora, serif' }}>
                                Anxiety, Stress, Depression & Burnout
                            </h2>
                            <div className="space-y-3 mb-6 border-l-4 border-[#E7CDBF] pl-4">
                                <p className="text-base md:text-lg italic text-gray-600">&ldquo;I feel like I&rsquo;m always on edge. I can&rsquo;t switch off, even when I try.&rdquo;</p>
                                <p className="text-base md:text-lg italic text-gray-600">&ldquo;I feel too numb and disconnected from everything.&rdquo;</p>
                                <p className="text-base md:text-lg italic text-gray-600">&ldquo;I feel like I have to keep on working even though I feel exhausted; I am finding it hard to stop.&rdquo;</p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-[#345041] to-[#2a4033] rounded-2xl p-8 h-64 flex items-center justify-center shadow-lg">
                            <div className="text-center">
                                <div className="text-7xl mb-4">😰</div>
                                <p className="text-xl font-semibold text-white">Anxiety & Stress</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 text-base md:text-lg leading-relaxed text-gray-700 space-y-4 relative z-10" style={{ fontFamily: 'Lora, serif' }}>
                        <p>
                            Life today moves fast, and the pressure to keep up can feel overwhelming. For some, this shows up as anxiety, a constant hum of worry about work, relationships, health, or the future. For others, it&rsquo;s the heaviness of depression, where even simple tasks feel exhausting and joy seems out of reach.
                        </p>
                        <p>
                            Burnout on the other hand often hides behind endless to-do lists and the sense that no amount of effort is ever enough, leaving you mentally foggy and emotionally drained. Whether it feels like restlessness, sadness, or complete numbness, these experiences are signals, not flaws, they are signs that something within you needs care and attention.
                        </p>
                        <div className="bg-gradient-to-r from-[#f8f6f4] to-[#E7CDBF] p-6 rounded-xl border-l-4 border-[#345041]">
                            <p className="font-medium">
                                The goal in therapy is to start by getting in touch with how your body is expressing its discomfort, its saturation, its pain. And then co-creating a path to establish coping with it all while also exploring what you internally need from all that is happening in your life.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Relationship Difficulties */}
            <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#E7CDBF] rounded-full opacity-10 blur-2xl"></div>
                
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden border border-gray-100">
                    {/* Decorative circles */}
                    <div className="absolute bottom-0 left-0 w-48 h-48 opacity-5">
                        <svg viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="80" stroke="#345041" strokeWidth="2" fill="none"/>
                            <circle cx="100" cy="100" r="60" stroke="#E7CDBF" strokeWidth="2" fill="none"/>
                        </svg>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                        <div className="bg-gradient-to-br from-[#E7CDBF] to-[#f8f6f4] rounded-2xl p-8 h-64 flex items-center justify-center shadow-lg order-2 md:order-1">
                            <div className="text-center">
                                <div className="text-7xl mb-4">💕</div>
                                <p className="text-xl font-semibold text-[#345041]">Relationships</p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="inline-block bg-[#E7CDBF] text-[#345041] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                Connection & Intimacy
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#345041] mb-6" style={{ fontFamily: 'Lora, serif' }}>
                                Relationship Difficulties
                            </h2>
                            <div className="bg-[#f8f6f4] p-6 rounded-xl border-l-4 border-[#345041]">
                                <blockquote className="text-lg italic text-gray-700">
                                    &ldquo;The quality of your life ultimately depends on the quality of your relationships.&rdquo;
                                    <span className="block mt-2 text-sm font-semibold text-[#345041]">- Esther Perel</span>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 text-base md:text-lg leading-relaxed text-gray-700 space-y-4 relative z-10" style={{ fontFamily: 'Lora, serif' }}>
                        <p>
                            Relationships can be deeply rewarding, yet they often become the space where our oldest wounds show up. Maybe you find yourself stuck in recurring conflicts, feeling like you&rsquo;re never understood, or shutting down when things get hard. Sometimes challenges in relationships look like wanting closeness, other times needing space and feeling overwhelmed when someone gets &ldquo;too near&rdquo;.
                        </p>
                        <p>
                            It can also show up as a tendency to please, avoid conflict at all costs, or carry the weight of other people&rsquo;s feelings because saying &ldquo;no&rdquo; feels impossible.
                        </p>
                        <p>
                            These patterns aren&rsquo;t random, they often trace back to early attachment experiences and unmet needs that shaped how we learned to stay safe in connection. As children, we generally take the shape of the container (environment, parental dynamics, financial circumstance, life events, etc) we are born into.
                        </p>
                        <div className="bg-gradient-to-r from-[#f8f6f4] to-[#E7CDBF] p-6 rounded-xl border-l-4 border-[#345041]">
                            <p className="font-medium">
                                Therapy offers a space to notice these patterns without judgment, to understand what purpose they served for you, and to work through the fears or beliefs that keep them alive. Together, we explore what gets in the way of authentic connection so your relationships can feel safer, more nourishing, and aligned with what you truly want.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Perinatal Mental Health & Fertility Challenges */}
            <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#345041] rounded-full opacity-5 blur-3xl"></div>
                
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden border border-gray-100">
                    {/* Decorative wave pattern */}
                    <div className="absolute top-0 right-0 opacity-5">
                        <svg className="w-64 h-32" viewBox="0 0 256 128">
                            <path
                                d="M0,64 Q32,32 64,64 Q96,96 128,64 Q160,32 192,64 Q224,96 256,64"
                                stroke="#E7CDBF"
                                strokeWidth="2"
                                fill="none"
                            />
                        </svg>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                        <div>
                            <div className="inline-block bg-[#345041] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                Specialization
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#345041] mb-6" style={{ fontFamily: 'Lora, serif' }}>
                                Perinatal Mental Health & Fertility Challenges
                            </h2>
                            <div className="space-y-3 mb-6 border-l-4 border-[#E7CDBF] pl-4">
                                <p className="text-base md:text-lg italic text-gray-600">&ldquo;Why am I not happier?&rdquo;</p>
                                <p className="text-base md:text-lg italic text-gray-600">&ldquo;This isn&rsquo;t what I imagined&rdquo;</p>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-[#345041] to-[#2a4033] rounded-2xl p-8 h-64 flex items-center justify-center shadow-lg">
                            <div className="text-center">
                                <div className="text-7xl mb-4">🤱</div>
                                <p className="text-xl font-semibold text-white">Parenthood Journey</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 text-base md:text-lg leading-relaxed text-gray-700 space-y-4 relative z-10" style={{ fontFamily: 'Lora, serif' }}>
                        <p>
                            Pregnancy and postpartum can bring joy and also anxiety, loneliness, guilt, and overwhelm. If you&rsquo;ve ever thought, &lsquo;Why am I not happier?&rsquo; or &lsquo;This isn&rsquo;t what I imagined,&rsquo; you are not alone. There&rsquo;s nothing wrong with you. This is the part no one talks about, and that&rsquo;s where I come in.
                        </p>
                        <p>
                            The journey to parenthood can stir unexpected emotions like hope, fears, grief, and everything in between. Whether you&rsquo;re navigating fertility struggles, pregnancy changes, postpartum shifts, grief of miscarriage(s), or adjusting to life with a baby, this is a safe space to feel, grieve, question, rage, or wonder, without any judgment.
                        </p>
                        <p>
                            In therapy, we also explore how to stay connected to your own identity and redefine your identity while embracing this all-encompassing role of parenthood.
                        </p>
                        <div className="bg-gradient-to-br from-[#345041] to-[#2a4033] p-6 rounded-xl text-white">
                            <p>
                                <strong className="text-[#E7CDBF]">Aishwaraya has completed advanced training in Perinatal Mental Health from NIMHANS (India)</strong> and <strong className="text-[#E7CDBF]">PSI Collective (Washington, DC)</strong> to support women, men, and families through this journey, this is an area of her specialisation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trauma & Emotional Healing */}
            <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#E7CDBF] rounded-full opacity-10 blur-2xl"></div>
                
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden border border-gray-100">
                    {/* Decorative spiral */}
                    <div className="absolute bottom-0 right-0 w-48 h-48 opacity-5">
                        <svg viewBox="0 0 200 200">
                            <path
                                d="M100,100 Q100,50 150,50 Q200,50 200,100 Q200,150 150,150 Q100,150 100,100"
                                stroke="#345041"
                                strokeWidth="2"
                                fill="none"
                            />
                        </svg>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                        <div className="bg-gradient-to-br from-[#E7CDBF] to-[#f8f6f4] rounded-2xl p-8 h-64 flex items-center justify-center shadow-lg order-2 md:order-1">
                            <div className="text-center">
                                <div className="text-7xl mb-4">🦋</div>
                                <p className="text-xl font-semibold text-[#345041]">Healing</p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="inline-block bg-[#E7CDBF] text-[#345041] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                Trauma-Informed Care
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#345041] mb-6" style={{ fontFamily: 'Lora, serif' }}>
                                Trauma & Emotional Healing
                            </h2>
                            <div className="bg-[#f8f6f4] p-6 rounded-xl border-l-4 border-[#345041]">
                                <blockquote className="text-lg italic text-gray-700">
                                    &ldquo;Trauma is not what happens to you. Trauma is what happens inside you as a result of what happened to you.&rdquo;
                                    <span className="block mt-2 text-sm font-semibold text-[#345041]">- Gabor Maté</span>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 text-base md:text-lg leading-relaxed text-gray-700 space-y-4 relative z-10" style={{ fontFamily: 'Lora, serif' }}>
                        <p>
                            Sometimes, past pain quietly lingers and shows up in unexpected ways, in relationships, work, or as stress. Trauma isn&rsquo;t only about what happened to you — it&rsquo;s also about what didn&rsquo;t happen.
                        </p>
                        <p>
                            It can arise from overwhelming events like accidents, abuse, or loss, but just as often, it comes from the absence of what you deeply needed: comfort, safety, protection, or being truly seen and understood. When these essential experiences are missing, when no one is there to soothe you, protect you, or affirm who you are, it can leave an imprint just as deep as any visible wound.
                        </p>
                        <p>
                            Trauma often lives in the body and shows up quietly, long after the experience, through anxiety, relationship struggles, hypervigilance, numbness, or feeling like something is &ldquo;wrong&rdquo; with you.
                        </p>
                        <div className="bg-gradient-to-br from-[#345041] to-[#2a4033] p-6 rounded-xl text-white">
                            <p>
                                In therapy, we work gently and at your pace to process what happened and what didn&rsquo;t happen, helping you reclaim safety, connection, and a sense of wholeness. <strong className="text-[#E7CDBF]">At Mind Craft Wellness, all our therapists are trauma-informed</strong>, so that they can bring in the sensitivity and personalised attention to you and your wounds.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Self-Worth & Confidence */}
            <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-[#345041] rounded-full opacity-5 blur-3xl"></div>
                
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden border border-gray-100">
                    {/* Decorative lines */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-5">
                        <svg className="w-full h-full" viewBox="0 0 400 400">
                            <line x1="0" y1="0" x2="400" y2="400" stroke="#E7CDBF" strokeWidth="2"/>
                            <line x1="400" y1="0" x2="0" y2="400" stroke="#345041" strokeWidth="2"/>
                        </svg>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                        <div>
                            <div className="inline-block bg-[#345041] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                Personal Growth
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#345041] mb-6" style={{ fontFamily: 'Lora, serif' }}>
                                Self-Worth & Confidence
                            </h2>
                            <div className="space-y-3 mb-6 bg-[#f8f6f4] p-6 rounded-xl border-l-4 border-[#E7CDBF]">
                                <p className="text-base md:text-lg italic text-gray-600">&ldquo;No matter what I achieve, it never feels enough.&rdquo; - anonymous</p>
                                <blockquote className="text-base md:text-lg italic text-gray-700 mt-4">
                                    &ldquo;Owning our story and loving ourselves through that process is the bravest thing that we will ever do.&rdquo;
                                    <span className="block mt-2 text-sm font-semibold text-[#345041]">- Brené Brown</span>
                                </blockquote>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-[#345041] to-[#2a4033] rounded-2xl p-8 h-64 flex items-center justify-center shadow-lg">
                            <div className="text-center">
                                <div className="text-7xl mb-4">💪</div>
                                <p className="text-xl font-semibold text-white">Self-Worth</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 text-base md:text-lg leading-relaxed text-gray-700 space-y-4 relative z-10" style={{ fontFamily: 'Lora, serif' }}>
                        <p>
                            Struggles with self-worth can show up in many ways - feeling like you&rsquo;re never doing enough, constantly comparing yourself to others, seeking validation, or fearing failure.
                        </p>
                        <p>
                            It can feel like your sense of value depends on achievements, roles, or other people&rsquo;s approval and it can look like constantly seeking validation, saying yes when you want to say no, or feeling guilty for prioritizing your needs. Sometimes struggles with self-worth can also show up in our relationship with food and/or our body image.
                        </p>
                        <p>
                            The truth is, these patterns often come from early experiences, from the messages we received (or didn&rsquo;t receive) about being lovable and worthy. Over time, they can create an inner voice and belief system that says, &ldquo;You&rsquo;re not good enough.&rdquo;
                        </p>
                        <div className="bg-gradient-to-r from-[#f8f6f4] to-[#E7CDBF] p-6 rounded-xl border-l-4 border-[#345041]">
                                <p className="font-medium">
                                In therapy, we work with you to uncover and transform the beliefs that keep you stuck in self-doubt. The goal isn&rsquo;t to &ldquo;become someone else&rdquo;, it is to reconnect with the version of you that already feels whole, enough, and deeply grounded in your own value.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Life Transitions & Identity Shifts */}
            <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#E7CDBF] rounded-full opacity-10 blur-2xl"></div>
                
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden border border-gray-100">
                    {/* Decorative growth pattern */}
                    <div className="absolute bottom-0 left-0 opacity-5">
                        <svg className="w-64 h-64" viewBox="0 0 200 200">
                            <path
                                d="M100,200 L100,150 M100,150 Q90,140 80,150 M100,150 Q110,140 120,150 M100,150 L100,100 M100,100 Q85,85 70,100 M100,100 Q115,85 130,100"
                                stroke="#345041"
                                strokeWidth="2"
                                fill="none"
                            />
                        </svg>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                        <div className="bg-gradient-to-br from-[#E7CDBF] to-[#f8f6f4] rounded-2xl p-8 h-64 flex items-center justify-center shadow-lg order-2 md:order-1">
                            <div className="text-center">
                                <div className="text-7xl mb-4">🌱</div>
                                <p className="text-xl font-semibold text-[#345041]">Transitions</p>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="inline-block bg-[#E7CDBF] text-[#345041] px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                Life Changes
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#345041] mb-6" style={{ fontFamily: 'Lora, serif' }}>
                                Life Transitions & Identity Shifts
                            </h2>
                            <div className="space-y-3 mb-6 bg-[#f8f6f4] p-6 rounded-xl border-l-4 border-[#345041]">
                                <p className="text-base md:text-lg italic text-gray-600">&ldquo;I don&rsquo;t know who I am anymore.&rdquo; - Anonymous</p>
                                <blockquote className="text-base md:text-lg italic text-gray-700 mt-4">
                                    &ldquo;We must be willing to let go of the life we planned so as to have the life that is waiting for us.&rdquo;
                                    <span className="block mt-2 text-sm font-semibold text-[#345041]">- Joseph Campbell</span>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 text-base md:text-lg leading-relaxed text-gray-700 space-y-4 relative z-10" style={{ fontFamily: 'Lora, serif' }}>
                        <p>
                            Big changes - like moving cities or countries, shifting careers, or getting married (whether love or arranged), can feel overwhelming, even when they&rsquo;re chosen or expected. These transitions often bring with them a sense of disorientation, like the ground beneath your feet isn&rsquo;t as steady as it used to be.
                        </p>
                        <p>
                            You may feel unanchored, disconnected from yourself, or unsure where you truly belong. Displacement, whether physical or emotional, can have a ripple effect on our sense of self.
                        </p>
                        <p>
                            Roles change, relationships shift, and the familiar markers of identity often fall away. Questions like &ldquo;Who am I now?&rdquo; or &ldquo;What does this new chapter mean for me?&rdquo; can feel daunting to hold alone.
                        </p>
                        <div className="bg-gradient-to-r from-[#f8f6f4] to-[#E7CDBF] p-6 rounded-xl border-l-4 border-[#345041]">
                            <p className="font-medium">
                                    Therapy can be a grounding space in these times, a place to pause, process, and make sense of what feels unfamiliar. Together, we work on re-rooting you in this new reality while honoring the old one, helping you rediscover strengths you may have forgotten, and exploring what you need to feel whole and steady again. It&rsquo;s not just about adjusting to change, it&rsquo;s about finding clarity, belongingness, and a deeper sense of self in the midst of it all.
                                </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feeling Stuck */}
            <div className="relative">
                {/* Background decorative elements */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#345041] rounded-full opacity-5 blur-3xl"></div>
                
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden border border-gray-100">
                    {/* Decorative circular pattern */}
                    <div className="absolute top-0 right-0 w-48 h-48 opacity-5">
                        <svg viewBox="0 0 200 200">
                            <circle cx="100" cy="100" r="90" stroke="#E7CDBF" strokeWidth="2" fill="none"/>
                            <circle cx="100" cy="100" r="70" stroke="#345041" strokeWidth="2" fill="none"/>
                            <circle cx="100" cy="100" r="50" stroke="#E7CDBF" strokeWidth="2" fill="none"/>
                        </svg>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                        <div>
                            <div className="inline-block bg-[#345041] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                                Breaking Patterns
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-[#345041] mb-6" style={{ fontFamily: 'Lora, serif' }}>
                                Feeling Stuck
                            </h2>
                        </div>
                        <div className="bg-gradient-to-br from-[#345041] to-[#2a4033] rounded-2xl p-8 h-64 flex items-center justify-center shadow-lg">
                            <div className="text-center">
                                <div className="text-7xl mb-4">🔄</div>
                                <p className="text-xl font-semibold text-white">Breaking Cycles</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 text-base md:text-lg leading-relaxed text-gray-700 space-y-4 relative z-10" style={{ fontFamily: 'Lora, serif' }}>
                        <p>
                            When clients tell me they feel &ldquo;stuck,&rdquo; it&rsquo;s rarely about doing nothing, it&rsquo;s about being caught in cycles that no longer feel helpful.
                        </p>
                        <p>
                            It can show up as procrastination, avoidance, or habits like binge-watching, endless scrolling, smoking, drinking, overworking, or shopping when stressed. These patterns often get labeled as &ldquo;bad,&rdquo; but in my experience, they usually have a function. They&rsquo;ve protected you from something, maybe big feelings, overwhelming stress, or a sense of loneliness.
                        </p>
                        <p>
                            At some point, they made sense. The thing is, what once kept you safe can start to feel limiting. Coping strategies that worked for years might begin to leave you feeling disconnected or restless, like you&rsquo;re living life on autopilot.
                        </p>
                        <div className="bg-gradient-to-r from-[#f8f6f4] to-[#E7CDBF] p-6 rounded-xl border-l-4 border-[#345041]">
                            <p className="font-medium">
                                When that happens, therapy becomes a place to pause and really understand what&rsquo;s underneath. We explore the role these behaviors play, what they&rsquo;re protecting you from, and what you truly need now. From there, we work together to build new ways of coping, establishing approaches that feel sustainable, nourishing, and aligned with the life you want to create.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Concerns;