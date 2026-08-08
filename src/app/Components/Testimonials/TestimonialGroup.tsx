'use client';
import { useEffect, useRef, useState } from 'react';

interface TestimonialGroupProps {
    category?:string;
    id: number;
    text: string;
    author: string;
    role: string;
}

const TestimonialGroup = ({category,id,text,author, role}: TestimonialGroupProps) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showScrollIndicator, setShowScrollIndicator] = useState(false);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        // Check if content is scrollable
        const checkScrollable = () => {
            const hasOverflow = container.scrollHeight > container.clientHeight;
            setShowScrollIndicator(hasOverflow);
        };

        // Check on mount and resize
        checkScrollable();
        window.addEventListener('resize', checkScrollable);

        // Hide indicator when scrolled
        const handleScroll = () => {
            const isScrolledToBottom =
                container.scrollHeight - container.scrollTop <= container.clientHeight + 10;
            if (isScrolledToBottom) {
                setShowScrollIndicator(false);
            } else {
                const hasOverflow = container.scrollHeight > container.clientHeight;
                setShowScrollIndicator(hasOverflow);
            }
        };

        container.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', checkScrollable);
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <div className="div">
        <div key={id} className="relative group w-full md:w-auto">
            {/* Enhanced Conversation bubble */}
            <div className="bg-white rounded-3xl p-5 md:p-6 max-w-[380px] md:w-[380px] md:min-h-[420px] md:max-h-[420px] shadow-xl hover:shadow-2xl w-full mx-auto md:mx-0 relative transition-all duration-300 transform hover:scale-105 border border-gray-100 flex flex-col overflow-hidden">
                {/* Speech bubble tail */}
                <div className="absolute -bottom-3 left-6 md:left-8 w-0 h-0 border-l-[12px] md:border-l-[15px] border-r-[12px] md:border-r-[15px] border-t-[12px] md:border-t-[15px] border-l-transparent border-r-transparent border-t-white"></div>

                {/* Enhanced Quote mark */}
                <div className="text-3xl md:text-5xl text-[#E7CDBF] mb-1 opacity-80 flex-shrink-0">&ldquo;</div>

                {/* Enhanced Testimonial text */}
                <div ref={scrollContainerRef} className="flex-1 mb-3 md:mb-4 overflow-y-auto relative testimonial-scroll-container">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
                        {text}
                    </p>
                    {/* Fade gradient at bottom when content overflows */}
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none scroll-fade"></div>

                    {/* Scroll indicator - down arrow */}
                    {showScrollIndicator && (
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 pointer-events-none animate-bounce">
                            <svg className="w-5 h-5 text-[#B6724F] opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    )}
                </div>
                <div className="text-3xl md:text-5xl text-[#E7CDBF] opacity-80 text-right flex-shrink-0">&rdquo;</div>

                {/* Enhanced Author info */}
                <div className="text-right border-t border-gray-100 pt-1 flex-shrink-0">
                    <p className="font-bold text-[#345041] text-sm md:text-base">{author}</p>
                    <div className="text-gray-500 text-xs md:text-sm"><p>{role}</p></div>
                </div>
            </div>
        </div>
    </div>
}
export default TestimonialGroup;