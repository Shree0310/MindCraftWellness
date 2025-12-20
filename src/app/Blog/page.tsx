"use client"

import { useState } from 'react';
import Blog from '../Components/Blog';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function BlogPage() {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return <div className="div">
    <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {/* Blur the whole homepage when menu is open */}
        <div
            className={`${
            isMenuOpen
                ? "filter blur-sm pointer-events-none transition-filter duration-300"
                : "transition-filter duration-300"
            }`}
        >
            <Blog/>
            {/* Footer */}
            <Footer className='bg-[#ee7e1b]' />
            </div>
        </div>
}