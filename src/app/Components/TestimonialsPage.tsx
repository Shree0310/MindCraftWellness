"use client"

import Header from "./Header";
import Footer from "./Footer";
import Link from 'next/link';

const TestimonialsPage = () => {
    const allTestimonials = [
        // Landing Page Testimonials
        {
            id: 1,
            text: "Therapy for me has worked like a magic pill. It's given me a deeper understanding of my feelings, my thoughts, and consequently my actions. It has also been a safe outlet to release both the micro and macro emotions I'd been holding inside. Through this process, I've learned the value of being authentic and vulnerable. We don't always need to be the 'tough one.' Sometimes, it's perfectly okay to step back, simply observe, and let things pass.",
            author: "Anonymous",
            role: "In-person Therapy sessions",
            category: "Landing Page"
        },
        {
            id: 2,
            text: "Ever since I was young, all I heard was how therapy was a waste of time—a money-making scheme not to be entertained during times of turmoil—so I never gave it another thought. But choosing to tune out that noise and take a leap of faith has changed my life in ways I couldn't have imagined. With Aishwarya, I've found a safe space, genuine care, and the kind of support I didn't even know I was missing.",
            author: "A.S.",
            role: "22 years old, Male, India (Online & In-person Therapy)",
            category: "Landing Page"
        },
        {
            id: 3,
            text: "I've been working with Aishwarya for a year now, and the journey has been truly life-changing. Over this time, I've quit smoking—a habit I never thought I could break—and learned how to be more present, self-aware, and in control of my emotions. My anxiety levels have significantly reduced, and I feel more at peace with myself than I have in years. What I value most about our sessions is Aishwarya's ability to create a safe, non-judgmental space where I can openly share my thoughts.",
            author: "Anonymous",
            role: "India (In-person Therapy)",
            category: "Landing Page"
        },
        // About Page Testimonials
        {
            id: 4,
            text: "I have been working with Aishwarya for over a year through psychotherapy to manage my anxiety, and my experience has been excellent. I attend in-person sessions with her, and she stands out as a psychologist who truly applies effective psychological practices. Her approach is both genuine and practical, and the serene, thoughtfully designed environment of her clinic further enhances the sense of calm and comfort during each session.",
            author: "S.B.",
            role: "Female, 25 Years Old, Gurgaon (In-person Therapy)",
            category: "About Page"
        },
        {
            id: 5,
            text: "Whilst I would consider myself relatively new into therapy, the experience has been super insightful and telling - especially with Aishwarya. Working with her has helped me develop the skills that I need to handle situations independently and has given me a chance to chat with someone so kind and caring, when I'm feeling down. Aishwarya's gentle approach to psychotherapy has really helped me ease into the process and truly make the most out of my experience.",
            author: "M.L.",
            role: "19, female, Dubai, UAE (United Arab Emirates) / Spain (Online Therapy)",
            category: "About Page"
        },
        {
            id: 6,
            text: "Had incredible experience though our sessions; She was very empathetic & helpful through some of the very hard period of my life. Incredibly grounded & professional; Highly recommend her.",
            author: "Anonymous",
            role: "47, Male, Startup Founder, India (In-person Therapy)",
            category: "About Page"
        },
        // Specialties Page Testimonials
        {
            id: 7,
            text: "I have been Ms. Aishwarya's client for over 2 years now and I have experienced immense self reflection, growth and increase in self esteem during this time. Not only have I been able to work on my relationships and my difficulties to manage my work, but also my anxieties and past traumas. I would highly recommend Aishwarya because she is a professional who keeps evolving and working hard to help clients (new and old) grow and gain the most out of their therapy. In addition, she is the right combination of being a kind and flexible, yet stern and disciplined professional. I highly recommend Aishwarya!",
            author: "S.K.",
            role: "Female, New Delhi (Online therapy)",
            category: "Specialties Page"
        },
        {
            id: 8,
            text: "I'm so grateful to have found Aishwarya as my therapist. I've seen others before but this was the first time things really clicked. Each session feels so comfortable and relaxed- it really feels like I'm talking to a big sister. A lot of therapists proclaim to have a no judgement policy, but this was the first time I actually felt that was true. The topics we explore together, and particularly, her words on those topics, resonate with me far beyond the session itself. While I don't have the privilege of taking her in person sessions, the space is so well done and cosy. If you're around NCR, the trip is worth it!",
            author: "S.V.",
            role: "25, Female, Chennai, India. (Online & In-person Therapy)",
            category: "Specialties Page"
        },
        {
            id: 9,
            text: "I had the privilege of first seeking guidance from Aishwarya in 2022, during one of the most tumultuous and transformative chapters of my life. Her support guided me through a toxic relationship, moments of deep self-doubt, deep seated resentment with my family and some of the hardest emotional battles I've faced. What I cherish most is that she didn't just help me heal—she gave me tools I didn't even know I desperately needed: the ability to set and honor healthy boundaries. That understanding has changed my life in ways I can't overstate. Because of her guidance, I've grown into a version of myself that is stronger, happier, and more self-respecting. I will always be grateful for the clarity, compassion, and wisdom she brought into my life when I needed it most.",
            author: "M.L.",
            role: "Female, 25 Years Old, Gurgaon (In-person Therapy)",
            category: "Specialties Page"
        },
        // Book Now Page Testimonials
        {
            id: 10,
            text: "So I started my therapy when I was not in a good place in life mentally. I'd been contemplating about it for months but one day I just went for it without any second thoughts and I can gladly say it was the best decision I made. Aishwaraya being my therapist was the second best decision I'd made because from the very first session itself I felt so comfortable sharing anything everything with her, which is huge because I have difficulty opening about my issues. The whole process of starting therapy and taking sessions has been very beneficial for me so far! I've had better energy and a better outlook towards most situations in life! Aishwaraya has helped me and is still helping me get better with my relationships, be it romantic or family. I've gained a lot of perspective about my childhood trauma and I feel I'm better equipped now to deal with certain situations. She really empathises and listens to me when I need it and that makes a world of a difference, after each session I step out a little lighter and a little happier! To anyone out there still contemplating, my advice is to just go for it, at least give it a shot because if you never try, you'll never know!",
            author: "V.S.",
            role: "Male, 29 Year Old, Gurgaon (In-person Therapy)",
            category: "Book Now Page"
        },
        {
            id: 11,
            text: "My experience in the last couple of years- I've been seeing Aishwarya for a long time now, and I can honestly say she has made a profound difference in my life. From the very first session, she created a safe and welcoming space where I felt truly heard and understood. She is a wonderful listener—patient, compassionate, and fully present. I've been working through issues related to anxiety and perfectionism, and her gentle, thoughtful approach has helped me gain insight into patterns I wasn't even fully aware of. She doesn't rush to offer advice but instead helps guide me to my own realizations, which has been incredibly empowering. What I appreciate most is her calming presence. No matter how overwhelmed I feel going into a session, I always leave feeling more grounded and hopeful. Her support has been instrumental in helping me manage my anxiety and let go of the unrealistic standards I've held myself to for so long. If you're looking for a therapist who is kind, attentive, and genuinely committed to helping you grow, I couldn't recommend Aishwarya more highly.",
            author: "A.S.",
            role: "Female, 33 Year Old, Gurgaon (In-person Therapy)",
            category: "Book Now Page"
        }
    ];

    const googleReviews = [
        {
            id: 1,
            text: "Absolutely incredible! Helped me get through a tough time with care and empathy and really helped me understand myself better. I highly recommend her.",
            rating: 5,
            date: "10th September 2025"
        },
        {
            id: 2,
            text: "I have been working with Aishwarya for over a year through psychotherapy to manage my anxiety, and my experience has been excellent. I attend in-person sessions with her, and she stands out as a psychologist who truly applies effective psychological practices. Her approach is both genuine and practical, and the serene, thoughtfully designed environment of her clinic further enhances the sense of calm and comfort during each session.",
            rating: 5,
            date: "2025"
        },
        {
            id: 3,
            text: "My experience with Aishwarya has been good. She is a great listener and comes in with advice and insights only when required, lets you find your own way out of stress, anxiety, and grief.",
            rating: 4,
            date: "2025"
        },
        {
            id: 4,
            text: "Aishwaraya has been my therapist for almost 2 years now. We've closely worked together on various aspects of my life. I find her approach to be well documented, detail oriented and empathy driven. I'd recommend her to anyone seeking a compassionate, thoughtful and constructive person to help you see things in a new light P.S her clinic in Gurgaon has the best aesthetic vibe!",
            rating: 5,
            date: "20th July 2024"
        },
        {
            id: 5,
            text: "I've been seeing Aishwarya for therapy for several months now, and I can confidently say she's been instrumental in helping me navigate some challenging times. I highly recommend her to anyone seeking a compassionate and skilled therapist.",
            rating: 5,
            date: "29th May 2024"
        },
        {
            id: 6,
            text: "I have been in therapy with Aishwarya for past 5 months. Her ability to quickly grasp and diagnose my years long struggles in professional, interpersonal relations and mental blockages helped me immensely, providing a roadmap to understanding and healing. She has a compassionate demeanor and insightful approach which made each and every session transformative for me. I wholeheartedly recommend her for anyone seeking counselling and therapy.",
            rating: 5,
            date: "27th May 2024"
        },
        {
            id: 7,
            text: "It has really been a great experience to consult her for a range of mental health issues. She patiently listened to me without any sort of judgment or prejudices. Her approach towards councelling is properly structured and well documented which has been quite helpful to deal with my problems. I feel a lot better and confident now. I would certainly recommend her.",
            rating: 5,
            date: "24th May, 2022"
        }
    ];

    const practoReviews = [
        {
            id: 1,
            text: "I'm really grateful to have found Aishwarya. Her style of therapy feels friendly and she's been really accomodating to help me figure out how I can help myself. I started about 2 months ago so it's still pretty new but what gives me confidence are all these little thoughtful things she does to make me comfortable. I also appreciate how she'll seemingly gently nudge me when I'm going off track and if I listen when she's doing that, I find what she's saying to be very insightful. It's tough to find the right fit with a therapist and I'm glad I found mine. :)",
            rating: 5,
            date: "2022"
        },
        {
            id: 2,
            text: "I have been in therapy with Aishwarya for past 5 months. Her ability to quickly grasp and diagnose my years long struggles in professional, interpersonal relations and mental blockages helped me immensely, providing a roadmap to understanding and healing. She has a compassionate demeanor and insightful approach which made each and every session transformative for me. I wholeheartedly recommend her for anyone seeking counselling and therapy.",
            rating: 5,
            date: "2024"
        },
        {
            id: 3,
            text: "Aishwarya is excellent in her approach and a very dedicated and good therapist. I would recommend her to everyone. Her approach works very well for me and her openness and flexibility to try new techniques or towards the needs of the client, as a professional is what I like the most about her!",
            rating: 5,
            date: "2024"
        },
        {
            id: 4,
            text: "I've been seeing Aishwarya for a long time now, and I can honestly say she has made a profound difference in my life. From the very first session, she created a safe and welcoming space where I felt truly heard and understood. She is a wonderful listener—patient, compassionate, and fully present. I've been working through issues related to anxiety and perfectionism, and her gentle, thoughtful approach has helped me gain insight into patterns I wasn't even fully aware of. She doesn't rush to offer advice but instead helps guide me to my own realizations, which has been incredibly empowering. What I appreciate most is her calming presence. No matter how overwhelmed I feel going into a session, I always leave feeling more grounded and hopeful. Her support has been instrumental in helping me manage my anxiety and let go of the unrealistic standards I've held myself to for so long.",
            rating: 5,
            date: "2025"
        },
        {
            id: 5,
            text: "warm, calm, with you at every step. she's amazing :) If it weren't for me leaving, i'd see her more often.",
            rating: 5,
            date: "2022"
        },
        {
            id: 6,
            text: "It has really been a great experience to consult her for a range of mental health issues. She patiently listened to me without any sort of judgment or prejudices. Her approach towards councelling is properly structured and well documented which has been quite helpful to deal with my problems. I feel a lot better and confident now. Would certainly recommend her.",
            rating: 5,
            date: "2022"
        },
        {
            id: 7,
            text: "I'm so grateful to have found Aishwarya as my therapist. I've seen others before but this was the first time things really clicked. Each session feels so comfortable and relaxed- it really feels like I'm talking to a big sister. A lot of therapists proclaim to have a no judgement policy, but this was the first time I actually felt that was true. The topics we explore together, and particularly, her words on those topics, resonate with me far beyond the session itself.",
            rating: 5,
            date: "2025"
        },
        {
            id: 8,
            text: "The most patient and easy to talk to doctor! Loved speaking to her about the things bothering me. Looking forward to my next session!",
            rating: 5,
            date: "2022"
        },
        {
            id: 9,
            text: "Its was great experience.. she listened very patiently.. Loved while taking to her .. Would love to recommend her.",
            rating: 5,
            date: "2022"
        },
        {
            id: 10,
            text: "I'm able to rediscover my innate self . It's very easy to connect with her. Her suggestive measures are effective and easy to follow",
            rating: 5,
            date: "2023"
        }
    ];

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="bg-[#FFFADA] text-black w-full font-sans py-16 overflow-x-hidden flex-grow">
                <div className="max-w-7xl mx-auto px-8">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-[#345041] mb-6" style={{ fontFamily: 'BrittanySignature, serif' }}>
                            Client Testimonials
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Hear from our clients about their transformative therapy experiences at Mind Craft Wellness
                        </p>
                    </div>

                    {/* Review Ratings Summary */}
                    <div className="bg-gradient-to-r from-[#f8f6f4] to-[#E7CDBF] rounded-3xl p-8 mb-16">
                        <div className="text-center">
                            <h2 className="text-3xl font-semibold text-[#345041] mb-8">What Our Clients Say</h2>
                            <div className="flex justify-center space-x-12">
                                <div className="text-center">
                                    <div className="flex items-center justify-center mb-2">
                                        <span className="text-4xl font-bold text-[#345041]">4.9</span>
                                        <span className="text-xl text-gray-600 ml-1">/5</span>
                                    </div>
                                    <div className="flex justify-center mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-lg font-medium text-gray-600">Google Reviews</p>
                                </div>
                                <div className="text-center">
                                    <div className="flex items-center justify-center mb-2">
                                        <span className="text-4xl font-bold text-[#345041]">5.0</span>
                                        <span className="text-xl text-gray-600 ml-1">/5</span>
                                    </div>
                                    <div className="flex justify-center mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-lg font-medium text-gray-600">Practo Reviews</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Testimonials */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-[#345041] mb-8 text-center" style={{ fontFamily: 'Lora, serif' }}>
                            Detailed Client Stories
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {allTestimonials.map((testimonial) => (
                                <div key={testimonial.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-sm font-medium text-[#345041] bg-[#E7CDBF] px-3 py-1 rounded-full">
                                                {testimonial.category}
                                            </span>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed text-sm">
                                            &ldquo;{testimonial.text}&rdquo;
                                        </p>
                                    </div>
                                    <div className="border-t pt-4">
                                        <p className="font-semibold text-[#345041] text-sm">{testimonial.author}</p>
                                        <p className="text-gray-600 text-xs">{testimonial.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Google Reviews Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-[#345041] mb-8 text-center" style={{ fontFamily: 'Lora, serif' }}>
                            Google Reviews
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {googleReviews.map((review) => (
                                <div key={review.id} className="bg-white rounded-2xl p-6 shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed text-sm">
                                        &ldquo;{review.text}&rdquo;
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Practo Reviews Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-[#345041] mb-8 text-center" style={{ fontFamily: 'Lora, serif' }}>
                            Practo Reviews
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {practoReviews.map((review) => (
                                <div key={review.id} className="bg-white rounded-2xl p-6 shadow-lg">
                                    <div className="flex items-center mb-4">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-500 ml-2">{review.date}</span>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed text-sm">
                                        &ldquo;{review.text}&rdquo;
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="bg-gradient-to-br from-[#345041] to-[#2a4033] text-white rounded-3xl p-12 text-center">
                        <h2 className="text-4xl font-bold mb-6">
                            Ready to Start Your Healing Journey?
                        </h2>
                        <p className="text-xl mb-8 leading-relaxed opacity-90">
                            Join hundreds of clients who have found healing and growth at Mind Craft Wellness.
                        </p>
                        <Link href="/book-now" className="bg-white text-[#345041] px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Book Your Free Consultation
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TestimonialsPage;
