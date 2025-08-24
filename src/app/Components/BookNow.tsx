'use client';

import Header from "./Header";
import HowItWorks from "./HowItWorks";
import Link from 'next/link';
import Testimonials from "./Testimonials";

export default function BookNow() {

    return (
        <div className="bg-[#E7CDBF] h-full scroll-auto">
            <Header/>
            <HowItWorks/>
            <div className='flex justify-center'>
                <Link href="/book-now" className='bg-[#345041] cursor-pointer text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#2a4033] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
                    Book Your Free Consultation
                </Link>
            </div>
            <Testimonials/>
        </div>
    );
}
