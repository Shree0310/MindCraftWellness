import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

const Blog = () => {
    const blogImages = [
        { src: "/Assets/images/Blog1.jpg", alt: "Blog Image 1" },
        { src: "/Assets/images/Blog2.jpg", alt: "Blog Image 2" },
        { src: "/Assets/images/Blog3.jpg", alt: "Blog Image 3" },
        { src: "/Assets/images/Blog4.jpg", alt: "Blog Image 4" },
        { src: "/Assets/images/Blog5.jpg", alt: "Blog Image 5" },
        { src: "/Assets/images/Blog6.jpg", alt: "Blog Image 6" },
    ];

    return <div>
        <Header />

        {/* Quote Section */}
        <div className="bg-gradient-to-r from-[#f8f6f4] to-[#E7CDBF] py-20 px-8">
            <div className="max-w-4xl mx-auto text-center">
                <div className="bg-white rounded-3xl p-12 shadow-lg">
                    <div className="mb-6">
                        <svg className="w-12 h-12 text-[#345041] mx-auto" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                        </svg>
                    </div>
                    <blockquote className="text-2xl md:text-3xl font-medium text-[#345041] leading-relaxed italic mb-6" style={{ fontFamily: 'BrittanySignature, serif' }}>
                        &ldquo;Healing isn&apos;t about erasing your past, but about creating a future that isn&apos;t defined by it.&rdquo;
                    </blockquote>
                    <div className="w-24 h-1 bg-[#345041] mx-auto rounded-full"></div>
                </div>
            </div>
        </div>

        {/* Blog Images Grid Section */}
        <div className="py-20 px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-[#345041] mb-6" style={{ fontFamily: 'BrittanySignature, serif' }}>
                        Our Space & Journey
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore the serene environment where healing begins and witness the journey of transformation through our carefully curated spaces.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogImages.map((image, index) => (
                        <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                            {/* Image Container */}
                            <div className="relative" style={{ width: '100%', height: '340px' }}>
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    width="340"
                                    height="340"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content Section */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-[#345041] mb-3 group-hover:text-[#2a4033] transition-colors duration-300">
                                    Healing Journey: {index + 1}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    Discover the transformative power of therapy and healing through our carefully curated insights and experiences.
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-500">
                                        {new Date().toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </span>
                                    <button className="text-[#345041] hover:text-[#2a4033] text-sm font-medium transition-colors duration-300">
                                        Read More →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Book Free Consultation Section */}
        <div className="bg-gradient-to-r from-[#345041] to-[#2a4033] py-20 px-8">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'BrittanySignature, serif' }}>
                    Ready to Begin Your Healing Journey?
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                    Take the first step towards a more peaceful and fulfilling life. Book your free consultation today.
                </p>
                <Link
                    href="/book-now"
                    className="inline-block bg-white text-[#345041] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform duration-300"
                >
                    Book a Free Consultation
                </Link>
            </div>
        </div>

        {/* Footer */}
        <Footer />
    </div>
}
export default Blog;