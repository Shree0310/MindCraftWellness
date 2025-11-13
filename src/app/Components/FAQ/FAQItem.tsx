import { useState } from "react";
import { IconChevronCompactDown } from "@tabler/icons-react";

type FAQItemProps = {
    question: string;
    answer: string;
};

const FAQItem = ({ question, answer }: FAQItemProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return <div className="div">
        <div className={`flex justify-between shadow-2xl max-w-[880px] w-full cursor-pointer rounded-4xl py-2 px-3 ${isExpanded ? 'bg-[#cfe7c6]': '' }`}
              onClick={() => setIsExpanded(!isExpanded) }>
            <h2 className="flex justify-start text-xl  drop-shadow-gray-500 text-gray-700">{question}</h2>
            <IconChevronCompactDown 
                stroke={4} 
                className={`w-6 h-4 my-2 cursor-pointer transition-transform duration-200  
                    ${isExpanded ? 'rotate-180' : ''}`}/>
        </div>
        <div className="div">
            {isExpanded && <p className="py-8 text-lg mx-8 font-sans">{answer}</p>}
        </div>
    </div>
}
export default FAQItem;