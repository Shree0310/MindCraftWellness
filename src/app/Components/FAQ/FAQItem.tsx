import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItemProps = {
    question: string;
    answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className={`border-b border-[#E8DBC9] transition-colors duration-300 ${isExpanded ? 'bg-[#FAF6F0]' : 'bg-transparent'}`} style={{ borderRadius: isExpanded ? '12px' : '0' }}>
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full py-6 px-6 flex justify-between items-center transition-colors"
            >
                <h3 className="text-left text-lg md:text-xl text-[#2B231C] pr-4" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 400 }}>
                    {question}
                </h3>
                <ChevronDown
                    className={`flex-shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    size={24}
                    color="#B6724F"
                />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pb-6 px-6 text-base md:text-lg text-[#5C4B3C]" style={{ fontFamily: 'var(--font-dm-sans), sans-serif', fontWeight: 300, lineHeight: '1.8' }}>
                    {answer}
                </div>
            </div>
        </div>
    );
}

export default FAQItem;