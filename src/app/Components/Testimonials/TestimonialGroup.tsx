interface TestimonialGroupProps {
    category?:string;
    id: number;
    text: string;
    author: string;
}

const TestimonialGroup = ({category,id,text,author}: TestimonialGroupProps) => {

    return <div className="div">
        <div key={id} className="relative group w-full md:w-auto">
                        {/* Enhanced Conversation bubble */}
                        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl w-full max-w-sm mx-auto md:mx-0 relative transition-all duration-300 transform hover:scale-105 border border-gray-100">
                            {/* Speech bubble tail */}
                            <div className="absolute -bottom-3 left-6 md:left-8 w-0 h-0 border-l-[12px] md:border-l-[15px] border-r-[12px] md:border-r-[15px] border-t-[12px] md:border-t-[15px] border-l-transparent border-r-transparent border-t-white"></div>

                            {/* Enhanced Quote mark */}
                            <div className="text-4xl md:text-6xl text-[#E7CDBF] mb-3 md:mb-4 opacity-80">&ldquo;</div>

                            {/* Enhanced Testimonial text */}
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4 md:mb-6 font-medium">
                                {text}
                            </p>

                            {/* Enhanced Author info */}
                            <div className="text-right border-t border-gray-100 pt-3 md:pt-4">
                                <p className="font-bold text-[#345041] text-sm md:text-base">{author}</p>
                                <div className="text-gray-500 text-xs md:text-sm"><p>{"Client"}</p></div>
                            </div>
                        </div>
                    </div>
    </div>
}
export default TestimonialGroup;