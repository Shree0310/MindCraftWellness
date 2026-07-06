'use client';

import { useState, ReactNode } from 'react';
import Header from '@/app/Components/Header';
import Footer from '@/app/Components/Footer';

interface BlogPostWrapperProps {
    children: ReactNode;
}

export default function BlogPostWrapper({ children }: BlogPostWrapperProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {/* Blur the whole content when menu is open */}
            <div
                className={`${
                    isMenuOpen
                        ? "filter blur-sm pointer-events-none transition-filter duration-300"
                        : "transition-filter duration-300"
                }`}
            >
                {children}
                <Footer className='bg-[#ee7e1b]' />
            </div>
        </div>
    );
}
