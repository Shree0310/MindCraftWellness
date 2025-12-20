
"use client"

import { useState } from 'react';
import Careers from '../Components/Careers';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import HowItWorks from '../Components/HowItWorks';
import OurValues from '../Components/OurValues';
import WhatWeOffer from '../Components/WhatWeOffer';
import WhoWeFitFor from '../Components/WhoWeFitFor';

export default function CareersPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return <>
         <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {/* Blur the whole homepage when menu is open */}
            <div
                className={`${
                isMenuOpen
                    ? "filter blur-sm pointer-events-none transition-filter duration-300"
                    : "transition-filter duration-300"
                }`}
            >
        <WhatWeOffer className='bg-[#FFFADA]'/>
        {/* <HowItWorks className='bg-[#FFFADA]'/> */}
        <WhoWeFitFor className='bg-[#FFFADA]'/>
        <Careers/>
        <Footer/>
        </div>
    </>
}