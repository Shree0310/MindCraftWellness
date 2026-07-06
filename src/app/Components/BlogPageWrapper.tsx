'use client';

import { useState, ReactNode } from 'react';
import Header from './Header';

interface BlogPageWrapperProps {
    children: ReactNode;
}

export default function BlogPageWrapper({ children }: BlogPageWrapperProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="div">
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
            </div>
        </div>
    );
}
