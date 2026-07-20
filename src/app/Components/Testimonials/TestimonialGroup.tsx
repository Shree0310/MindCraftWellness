interface TestimonialGroupProps {
    category?:string;
    id: number;
    text: string;
    author: string;
    role: string;
}

const TestimonialGroup = ({category,id,text,author, role}: TestimonialGroupProps) => {

    return <div className="div">
        <div key={id} className="relative group w-full md:w-auto">
            {/* Enhanced Conversation bubble */}
            <div className="bg-white rounded-3xl p-6 md:p-8 max-w-[450px] md:w-[450px] md:h-[500px] max-h-[500px] shadow-xl hover:shadow-2xl w-full mx-auto md:mx-0 relative transition-all duration-300 transform hover:scale-105 border border-gray-100 flex flex-col overflow-hidden">
                {/* Speech bubble tail */}
                <div className="absolute -bottom-3 left-6 md:left-8 w-0 h-0 border-l-[12px] md:border-l-[15px] border-r-[12px] md:border-r-[15px] border-t-[12px] md:border-t-[15px] border-l-transparent border-r-transparent border-t-white"></div>

                {/* Enhanced Quote mark */}
                <div className="text-4xl md:text-6xl text-[#E7CDBF] mb-1 md:mb-1 opacity-80 flex-shrink-0">&ldquo;</div>

                {/* Enhanced Testimonial text - scrollable container */}
                <div className="flex-1 overflow-y-auto mb-4 md:mb-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
                        {text}
                    </p>
                </div>
                <div className="text-4xl md:text-6xl text-[#E7CDBF] opacity-80 text-right flex-shrink-0">&rdquo;</div>

                {/* Enhanced Author info */}
                <div className="text-right border-t border-gray-100 pt-1 md:pt-1 flex-shrink-0">
                    <p className="font-bold text-[#345041] text-sm md:text-base">{author}</p>
                    <div className="text-gray-500 text-xs md:text-sm"><p>{role}</p></div>
                </div>
            </div>
        </div>
    </div>
}
export default TestimonialGroup;