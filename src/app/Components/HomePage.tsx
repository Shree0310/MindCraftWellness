"use client"

import LandingPage from '../Assets/images/LandingPage.png'
import ProfilePic from '../Assets/images/Profile-pic.png';
import clinic from '../Assets/images/Clinic.png';

const HomePage = () => {
    return <>
    <div className='scroll-auto bg-white'>
    <img src={LandingPage.src}/>
        <div className='text-black px-24 py-10 w-[500px] text-2xl text-center mx-auto' style={{ fontFamily: 'BrittanySignature, serif' }}>
            "Owning our story and loving ourselves through that process is the bravest thing we'll ever do."
        </div>
        <div>
            <div className='bg-[#E7CDBF] h-full w-full  text-black'>
                <h1 className='font-sans font-bold text-2xl text-center pt-16 pb-8' style={{ fontFamily: 'BodoniModa, serif' }}>Life doesn’t always go as planned.</h1>
                <div className='flex justify-start items-start gap-6 mx-auto w-fit'>
                    <img src={ProfilePic.src} className='w-[300px] h-[400px] object-cover'/>
                    <p className='text-lg text-left w-[500px] pt-6' style={{ fontFamily: 'Lora, serif', lineHeight: '30px' }}>Sometimes we move through challenges with strength. Other times, the weight of it all starts to seep into every corner — our relationships feel strained, work or studies become overwhelming, sleep offers no real rest, and we start to feel disconnected from ourselves.
                        In these moments, it’s easy to feel stuck — like the way forward has blurred.
                        Whether you're navigating a heartbreak, trauma, anxiety, depression, fertility struggles, low self-esteem, or simply longing to understand yourself more deeply — you don’t have to do it alone.
                        Therapy is a space to slow down, make sense of what you’re carrying, and begin to reconnect with yourself. It’s a space for clarity, healing, and growth.
                        And often, the very places where we feel most stuck hold the seeds of our transformation. As David Richo says, ‘Our wounds are often the openings into the best and most beautiful part of us.’”
                    </p>
                </div>
                <div className='flex justify-start items-start gap-6 mx-auto w-fit py-16'>
                <p className='text-lg text-left w-[500px] pt-6' style={{ fontFamily: 'Lora, serif', lineHeight: '30px' }}>At Mind Craft Wellness, we believe therapy is most effective when it feels personal. That’s why, instead of asking you to choose a therapist from a list, we start with a 15-minute free consultation call.
                    You’ll share your needs, preferences, and goals — and we’ll match you with the right therapist on our team.
                    Our therapists are carefully selected, trained in trauma-informed, evidence-based approaches to provide a safe, non-judgemental space for you.
                    Here, we explore those openings together — with gentleness, curiosity, and care — so you can move toward the life you want to live.
                </p>
                <img src={ProfilePic.src} className='w-[300px] h-[400px] object-cover'/>
                </div>
                <h1 className='text-2xl pt-16 pb-3 text-center ' style={{ fontFamily: 'BrittanySignature, serif' }}>
                    Hi, I’m Aishwaraya Goud —
                </h1>
                <span className='text-lg py-2 text-center block pb-8' style={{ fontFamily: 'Lora, serif' }}>
                    Founder of Mind Craft Wellness,<br/>
                    and a certified AEDP and CBT therapist based in Gurgaon.
                </span>
                <div className='flex justify-start items-start gap-6 mx-auto w-fit'>
                    <img src={ProfilePic.src} className='w-[300px] h-[400px] object-cover'/>
                    <p className='text-lg text-left w-[500px] pt-6' style={{ fontFamily: 'Lora, serif', lineHeight: '30px' }}>
                        At Mind Craft Wellness, you might work with me directly, or with one of the other experienced therapists on our team. I ensure our team shares the same commitment to warmth, skill, and trauma-informed care, so that every client feels supported and understood.
                        Therapy here isn’t about quick fixes or advice-giving — it’s about creating a container for your emotions, where you feel deeply held and supported, so you can uncover your own way forward.
                        If you'd like to learn more about my approach and journey as a therapist, you can [read more about me here].
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default HomePage;
