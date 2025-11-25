"use client"
import { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import FAQItem from "./FAQItem";

const FAQs = () => {
    const faqData = [
    // Getting Started with Therapy
    {
        category: "Getting Started with Therapy",
        question: "How do I know if I need therapy?",
        answer: "Therapy can be helpful for anyone who wants to understand themselves better, improve relationships, manage stress or anxiety, heal from past experiences, or simply live with more clarity and balance. You don't need to be in crisis or have a diagnosed mental health condition to benefit from therapy. Many people come when they feel stuck, overwhelmed, or unsure about the next step in life."
    },
    {
        category: "Getting Started with Therapy",
        question: "Why can't I just talk to a friend? What does a therapist do differently?",
        answer: "Talking to a friend can bring comfort, but therapy offers something deeper. A therapist creates a safe, steady space where you can slow down and explore what's happening beneath the surface, the emotions, patterns, and body responses that often go unnoticed. Unlike friends who may offer advice or reassurance, a therapist helps you feel, make sense of, and work through what's difficult, so that healing and change can unfold at your pace."
    },
    {
        category: "Getting Started with Therapy",
        question: "What happens in therapy?",
        answer: "Therapy is a safe, non-judgemental, confidential space to talk about what's going on in your life and your feelings, relationships, stressors, or patterns you'd like to change. In your first few sessions, your therapist will get to know you, understand your background, and help you set goals for your healing or growth. As you continue, therapy becomes a process of exploring your emotions and experiences more deeply. You'll learn to understand yourself better, express feelings safely, and find new ways to cope or relate. Sometimes sessions feel light and reflective; other times, they may touch deeper emotions and your therapist will support you through all of it. You don't need to know what to say or how to 'do' therapy. Just bring yourself because therapy unfolds through conversation, reflection, and connection."
    },
    {
        category: "Getting Started with Therapy",
        question: "Do I need to have a 'big problem' or mental disorder to start therapy?",
        answer: "Not at all. Many people come to therapy simply to understand themselves better, make meaningful life choices, or grow emotionally. Therapy is for anyone seeking a safe space for self-reflection and growth."
    },
    {
        category: "Getting Started with Therapy",
        question: "How many sessions will I need?",
        answer: "The number of sessions varies for each person. Some people notice changes within a few weeks, while others continue therapy for months or years. It depends on your goals, the depth of the issues you're exploring, and the pace that feels right for you."
    },
    {
        category: "Getting Started with Therapy",
        question: "How long does it take for therapy to be effective?",
        answer: "You may begin noticing subtle shifts in awareness, perspective, or emotional regulation within the first few sessions. However, sustainable change often unfolds gradually over time. Consistency and a trusting relationship with your therapist are key factors in how effective therapy feels."
    },
    {
        category: "Getting Started with Therapy",
        question: "What should I look for in a therapist?",
        answer: "When choosing a therapist, you might consider: Qualifications - Look for a Master's degree or higher in Psychology, Counselling, or Clinical Psychology from a recognised institution in India or abroad. Certifications - Additional training in trauma, different therapies, or body-based work can be valuable. Experience - Ask about their years of practice and the kinds of concerns they typically work with. Supervision - This means the therapist consults regularly with a senior professional to ensure ethical, reflective, and high-quality practice, where no identifying information of the client is shared. Personal therapy - Therapists who have been or are in therapy themselves tend to work with greater empathy and self-awareness. At Mind Craft Wellness, all our therapists are in regular supervision and personal therapy. We see this as an ethical and essential part of providing safe, emotionally present, and effective care."
    },
    {
        category: "Getting Started with Therapy",
        question: "What is the experience of your therapists at Mind Craft Wellness?",
        answer: "Our therapists come from diverse training backgrounds and experience levels, ranging from 100 therapy hours to over 3,000 hours. Each therapist is qualified, trauma-informed, and regularly receives supervision to ensure high-quality care."
    },
    {
        category: "Getting Started with Therapy",
        question: "Are the therapists at Mind Craft Wellness trauma-informed?",
        answer: "Yes. All our therapists are trauma-informed and trained to work sensitively with emotional regulation, safety, and body-based awareness in the therapy process."
    },
    {
        category: "Getting Started with Therapy",
        question: "Is Mind Craft Wellness a queer-friendly organisation?",
        answer: "Yes. We are a queer-friendly organisation and committed to creating a safe, inclusive, and respectful space for clients from all identities. While we are not yet formally trained in queer-sensitive therapy, we are continuously learning and open to feedback."
    },
    {
        category: "Getting Started with Therapy",
        question: "How old do I have to be to start therapy?",
        answer: "We currently work with adults aged 22 years and above. We do not offer therapy for minors or adolescents at this time."
    },
    {
        category: "Getting Started with Therapy",
        question: "What is the duration of the session?",
        answer: "Therapy sessions at Mind Craft Wellness have a duration of 60 mins after which you will be charged for extra time."
    },

    // Understanding Therapy Approaches and Therapists
    {
        category: "Understanding Therapy Approaches and Therapists",
        question: "What is counselling or psychotherapy?",
        answer: "Therapy is a collaborative process that helps you understand yourself, your emotions, and your relationships more deeply. Sessions are about more than just talking; they're about being gently supported to notice, feel, and process your experiences in a safe and compassionate way. Over time, this helps you build clarity, confidence, and emotional ease in your daily life. Depending on your needs, therapy can be short-term (focused on specific concerns) or long-term (deeper emotional or relational work). Our therapists at Mind Craft Wellness integrate evidence-based and experiential approaches to support your healing and growth."
    },
    {
        category: "Understanding Therapy Approaches and Therapists",
        question: "What does 'safe' therapy really mean?",
        answer: "A 'safe' therapy space means you can show up exactly as you are without fear of being judged, criticised, or dismissed. It's a place where your feelings, thoughts, and experiences are met with respect, empathy, and confidentiality. Safety also means that your therapist moves at your pace. You are not pushed to share more than you're ready for. In trauma-informed therapy, safety is built through trust, consistency, clear boundaries, and collaboration so you always know what to expect and feel in control of your process. At its core, safe therapy isn't just about privacy, it's about feeling emotionally, mentally, and relationally held as you do the work of healing."
    },
    {
        category: "Understanding Therapy Approaches and Therapists",
        question: "Are therapists really non-judgmental?",
        answer: "Therapists are trained to listen with curiosity and compassion, not judgment. Therapy is meant to be a space where you can share anything, even thoughts or feelings you might not feel comfortable saying elsewhere and still feel respected and accepted. That said, therapists are also human. What makes therapy different is that a therapist is aware of their own biases and continuously works on them through supervision and personal therapy. At Mind Craft Wellness, all our therapists are in regular supervision and their own therapy helps them stay reflective, grounded, and genuinely open-minded with clients. So while no human being is completely without judgment, therapists are trained and supported to notice, reflect on, and move beyond their biases to hold space for you with understanding rather than opinion."
    },
    {
        category: "Understanding Therapy Approaches and Therapists",
        question: "What is AEDP (Accelerated Experiential Dynamic Psychotherapy)?",
        answer: "AEDP is a form of therapy that focuses on helping people feel safe enough to experience and process their emotions rather than avoid them. It rests on the belief that we are wired for healing and that, in a safe and attuned relationship, even painful emotions can become pathways for transformation. Therapists using AEDP pay close attention to emotional and bodily cues, helping you move from distress to a sense of relief, strength, and connection."
    },
    {
        category: "Understanding Therapy Approaches and Therapists",
        question: "What is CBT (Cognitive Behavioural Therapy)?",
        answer: "CBT is a structured, goal-oriented approach that helps you understand how your thoughts, emotions, and behaviours are connected. It focuses on identifying unhelpful patterns and developing more balanced ways of thinking and responding. CBT is often used to manage anxiety, depression, and stress, and helps build practical coping skills for everyday life."
    },
    {
        category: "Understanding Therapy Approaches and Therapists",
        question: "What is Emotionally Focused Therapy?",
        answer: "Emotionally Focused Therapy (EFT) helps people understand and express their emotions in ways that strengthen connection with themselves and others. Originally developed for couples, it's now used with individuals and families too. The focus is on identifying emotional needs and attachment patterns, so that relationships feel safer, more responsive, and more connected."
    },
    {
        category: "Understanding Therapy Approaches and Therapists",
        question: "Why are there so many different approaches in therapy? How do they matter?",
        answer: "Different approaches reflect different ways of understanding human experience. Some focus on thoughts, others on emotions, body awareness, relationships, or unconscious patterns. Each has its own tools, but the heart of therapy lies in the relationship between therapist and client. What truly matters is that you feel safe, supported, and seen that the specific approach is simply the language your therapist uses to help you get there. Think of it as though multiple different roads leading to the same destination, the different routes being the different approaches therapists take in sessions."
    },
    {
        category: "Understanding Therapy Approaches and Therapists",
        question: "How do I choose which therapy approach is right for me?",
        answer: "You don't have to know that before you begin. Many therapists, including ours at Mind Craft Wellness, integrate different approaches based on your needs and pace. What's most important is how you feel in the session safe, understood, and able to be honest. If something isn't working, you can share that with your therapist; good therapy is collaborative and responsive regardless of the approach."
    },
    {
        category: "Understanding Therapy Approaches and Therapists",
        question: "How do I choose the right therapist?",
        answer: "Finding the right therapist is often about comfort and connection. Look for someone whose style, values, age, gender, and experience resonate with you. It's okay to ask about their qualifications, certifications, approach, and experience with your concerns. We encourage clients to trust their gut. The right fit often shows up in how easy it feels to be honest even about what isn't working. Sharing feedback with your therapist and feeling heard in return is an essential part of the process, and a good sign that you're in a supportive therapeutic relationship."
    },
    {
        category: "Understanding Therapy Approaches and Therapists",
        question: "What kinds of problems can therapy help with?",
        answer: "Therapy can support a wide range of emotional and relational concerns. At Mind Craft Wellness, we work with: Anxiety, panic, and chronic stress; Depression and low mood; Relationship and boundary difficulties; Past trauma, abuse, or neglect; Fertility, perinatal, and postpartum emotional health; Self-esteem, identity, or life transitions; Emotional numbness, overthinking, or disconnection; Burnout and work-related stress; Personal growth and self-understanding. Therapy helps not only with 'problems' but also with building a deeper connection to yourself expanding your capacity for joy, love, and authenticity."
    },

    // Our Services & Accessibility
    {
        category: "Our Services & Accessibility",
        question: "What services do you offer?",
        answer: "At Mind Craft Wellness, we offer: Individual therapy for adults above 22 years of age; Trauma-informed psychotherapy; Fertility and perinatal mental health support; Emotional regulation and stress management therapy; Therapist supervision and consultation; Employee wellbeing workshops."
    },
    {
        category: "Our Services & Accessibility",
        question: "Do you offer online and in-person therapy?",
        answer: "Yes. We offer both online and in-person sessions at our Gurgaon-based clinic. You can choose whichever format feels more comfortable or accessible to you."
    },
    {
        category: "Our Services & Accessibility",
        question: "Can I walk in, or do I need to pre-book a session?",
        answer: "All sessions are by appointment only. We do not accept walk-ins, as each session is reserved in advance to ensure your therapist's availability."
    },
    {
        category: "Our Services & Accessibility",
        question: "Do you provide home visits?",
        answer: "No, we currently do not provide home visits. For those unable to travel, we recommend scheduling an online session."
    },
    {
        category: "Our Services & Accessibility",
        question: "What are your office timings?",
        answer: "Our therapy sessions are typically scheduled between 10:30 AM and 6 PM (5pm to 6pm is the last session for the day), Monday to Saturday. Therapist availability may vary, and appointments are confirmed in advance."
    },
    {
        category: "Our Services & Accessibility",
        question: "Is there wheel-chair access?",
        answer: "Yes. Although we are located on the 2nd floor of a building there is a lift through which our clinic can be accessed."
    },
    {
        category: "Our Services & Accessibility",
        question: "Is there parking available?",
        answer: "Yes. There is an empty parking space plot right opposite the building in which the clinic is located. For discretion, the clinic is located in a residential building."
    },

    // Bookings, Fees & Payments
    {
        category: "Bookings, Fees & Payments",
        question: "I want to talk before I book. How can I reach you?",
        answer: "You can reach out to us via our website contact form, email, or WhatsApp (we respond quickest to whatsapp messages). Once you share a brief idea of what you're looking for, our team will guide you through the next steps for booking a session. Additionally you can also use the Tealfeed calendar link provided on the website to book a free 15-min consultation call with one of our therapists."
    },
    {
        category: "Bookings, Fees & Payments",
        question: "When do I make the payment?",
        answer: "Once you reach out, we'll share a session booking link. You'll be asked to make the payment in advance to confirm your appointment."
    },
    {
        category: "Bookings, Fees & Payments",
        question: "What payment modes do you accept?",
        answer: "We currently only accept UPI and bank transfers."
    },
    {
        category: "Bookings, Fees & Payments",
        question: "Do you offer any discounts on the service fee?",
        answer: "No, we do not offer discounts. Our fees reflect the professional training, preparation, and reflective supervision that go into offering each session."
    },
    {
        category: "Bookings, Fees & Payments",
        question: "What is your cancellation policy?",
        answer: "We have a 24-hour cancellation policy. Any changes to your appointment can be made with at least 24 hours' notice. If notice is given in time, your payment can be refunded (within 5 - 7 business days) or carried forward to your next session. If less than 24 hours' notice is given, the session is charged in full regardless of the reason for the cancellation."
    },
    {
        category: "Bookings, Fees & Payments",
        question: "Why do you have a cancellation fee?",
        answer: "A therapy session is a reserved time created specifically for you. Late cancellations mean another client in need may not be able to use that slot. The cancellation fee helps maintain fairness and respect for the therapist's time and practice."
    },
    {
        category: "Bookings, Fees & Payments",
        question: "What if I have an emergency and need to cancel at the last minute?",
        answer: "We understand emergencies happen. However, to maintain fairness and professional boundaries, the cancellation policy and fee applies irrespective of the reason. Please proceed with booking only if you feel comfortable with this policy."
    },
    {
        category: "Bookings, Fees & Payments",
        question: "What if the therapist cancels my session?",
        answer: "If your therapist needs to cancel due to illness or emergency, you will be offered either a refund or reschedule at your convenience."
    },

    // Other Common Questions
    {
        category: "Other Common Questions",
        question: "Do you prescribe medication?",
        answer: "No. Our therapists are psychologists, not psychiatrists, and do not prescribe medication. If medication seems necessary, we may refer you to a trusted psychiatrist for consultation."
    },
    {
        category: "Other Common Questions",
        question: "Can I get a recommendation or leave letter from my therapist?",
        answer: "No. We do not provide letters or certificates for workplace or institutional leave requests. Unless you have been in therapy with us for a year."
    },
    {
        category: "Other Common Questions",
        question: "What languages do your therapists offer sessions in?",
        answer: "Sessions are primarily conducted in English and Hindi, depending on the therapist's comfort and your preference."
    },
    {
        category: "Other Common Questions",
        question: "Is therapy confidential?",
        answer: "Yes, confidentiality is central to therapy. Everything you share stays private, except in rare cases where there's risk of harm to self or others, or if required by law. Your therapist will discuss this in detail during your first session."
    },
    {
        category: "Other Common Questions",
        question: "Do you work with corporate or organizational clients?",
        answer: "Yes, we collaborate with organizations to offer employee wellness programs, workshops, and therapy referrals. Please write to us if your organisation is interested in partnering with Mind Craft Wellness."
    },
    {
        category: "Other Common Questions",
        question: "How do I prepare for my first session?",
        answer: "There's no special preparation needed. You can simply come as you are. It might help to reflect on what's been troubling you lately or what you hope to gain from therapy but your therapist will guide the process at your pace."
    },
    {
        category: "Other Common Questions",
        question: "How much does a therapy session cost?",
        answer: "Session fees vary based on the therapist's experience. Session fee starts at 1500 per hour and goes up to 3500 per hour for individual therapy. We'll share the fee details once you reach out, so you can choose a therapist and schedule that suits you best."
    },
    {
        category: "Other Common Questions",
        question: "What if I don't feel comfortable with my therapist?",
        answer: "It's completely okay. You can discuss your concerns openly with your therapist or request to switch to another therapist within our team or you will be provided with referrals for other therapists who don't work at Mind Craft Wellness. Finding the right fit is an important part of the process and we honestly value that you get the support and help you need whether it is within our organisation or outside of it."
    }
];

    const uniqueCategories = [...new Set(faqData.map(data => data.category))];
    const [inputValue, setInputValue] = useState("");
    const [results, setResults] = useState(faqData);

    const fetchData = () => {
        if (!inputValue.trim()) {
            setResults(faqData);
            return;
        }

        const query = inputValue.toLowerCase();
        const filtered = faqData.filter((item) =>
            item.category.toLowerCase().includes(query) ||
            item.question.toLowerCase().includes(query) ||
            item.answer.toLowerCase().includes(query)
        );

        setResults(filtered);
        //console.log(filtered);
    }

    useEffect(() => {
            fetchData();
    }, [inputValue])

    return <div className="div">
        <Header/>
        <div className="flex flex-col justify-center items-center">
            <div className="bg-yellow-50 w-full flex flex-col justify-center items-center">
                 <div className="absolute top-0 left-0 w-full h-32 opacity-20">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#345041" opacity=".25"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" fill="#E7CDBF" opacity=".5"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#345041" opacity=".15"></path>
                    </svg>
                </div>
                <h2 className="text-5xl font-extrabold text-[#345041] mb-6 py-24 " style={{ fontFamily: 'Lora, serif' }}>
                    FAQs
                </h2>
                <div className="">
                    <input type="text" 
                           placeholder="Search in FAQs" 
                           value={inputValue} 
                           onChange={(e) => setInputValue(e.target.value)}
                           className="flex justify-center h-10 w-80 mb-24 px-4 border-2 border-y-green-800 rounded-lg"/>
                </div>              
            </div>
            {results && results.length > 0 ? (
                <div className="div">
                    {uniqueCategories.map(category => {
                        const filteredResults = results.filter(faq => faq.category === category);
                        if (filteredResults.length === 0) return null;
                        return (
                            <div key={category} className="flex flex-col gap-8 mx-24">
                                <h2 className="text-[#345041] font-semibold tracking-wide font-serif  text-3xl my-10">
                                    {category}
                                </h2>
                                {filteredResults.map((faq, idx) => (
                                    <div className="w-full max-w-[880px]" key={`faq-${category}-${idx}`}>
                                        <FAQItem question={faq.question} answer={faq.answer} />
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                    </div>
                ) : (
                    <div className="div">
                        <p className="text-gray-500">No FAQs found.</p>
                    </div>
                )}
                </div>  
        <Footer/>      
    </div>
}
export default FAQs;