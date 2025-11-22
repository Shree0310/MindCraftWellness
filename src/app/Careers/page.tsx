
import Careers from '../Components/Careers';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import HowItWorks from '../Components/HowItWorks';
import OurValues from '../Components/OurValues';
import WhatWeOffer from '../Components/WhatWeOffer';
import WhoWeFitFor from '../Components/WhoWeFitFor';

export default function CareersPage() {
    return <>
        <Header/>
        <WhatWeOffer className='bg-[#FFFADA]'/>
        {/* <HowItWorks className='bg-[#FFFADA]'/> */}
        <WhoWeFitFor className='bg-[#FFFADA]'/>
        <Careers/>
        <Footer/>
    </>
}