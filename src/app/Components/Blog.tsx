import { sanityAPIClient } from "@/sanity/lib/client";
import BookFreeConsultationBtn from "./BookFreeConsulationBtn";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

type Post = {
    _id: string;
    title?: string;
    slug?: { current?: string };
    mainImage?: SanityImageSource;
    excerpt?: string;
    publishedAt?: string;
    category?:string;
};

const categoryColors: Record<string, string> = {
    'mental-health' : 'bg-blue-100 text-blue-800',
    'anxiety-stress': 'bg-purple-100 text-purple-800',
    'relationships': 'bg-pink-100 text-pink-800',
    'self-care': 'bg-green-100 text-green-800',
    'therapy-tips': 'bg-yellow-100 text-yellow-800',
    'wellness': 'bg-teal-100 text-teal-800',
}

const categoryLabels: Record<string, string> = {
    'mental-health': 'Mental Health',
    'anxiety-stress': 'Anxiety & Stress',
    'relationships': 'Relationships',
    'self-care': 'Self-Care',
    'therapy-tips': 'Therapy Tips',
    'wellness': 'Wellness',
}


const Blog = async() => {

    const posts = await sanityAPIClient.getAllPosts();

    return <div className="bg-gradient-to-t from-[#ee7e1b] to-[#e9e0d3]">

        {/* Quote Section */}
        <div className="py-12 md:py-12 px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <div className="bg-white rounded-3xl p-6 md:p-12 shadow-lg">
                    <div className="mb-4 md:mb-4">
                        <svg className="w-10 md:w-12 h-10 md:h-12 text-[#345041] mx-auto" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                        </svg>
                    </div>
                    <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium text-[#345041] leading-relaxed italic mb-4 md:mb-6 px-2" style={{ fontFamily: 'BrittanySignature, serif' }}>
                        &ldquo;Healing isn&apos;t about erasing your past, but about creating a future that isn&apos;t defined by it.&rdquo;
                    </blockquote>
                    <div className="w-20 md:w-24 h-1 bg-[#345041] mx-auto rounded-full"></div>
                </div>
            </div>
        </div>

        {/* Blog Images Grid Section */}
        <div className="py-12 md:py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#345041] mb-4 md:mb-6 px-4" style={{ fontFamily: 'BrittanySignature, serif' }}>
                        Our Space & Journey
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
                        Explore the serene environment where healing begins and witness the journey of transformation through our carefully curated spaces.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {posts.map((post: Post, index: number) => (
                            <Link href={`/Blog/${post.slug?.current}`} key={post._id}>
                            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                                {/* Image Container */}
                                <div className="relative cursor-pointer" style={{ width: '100%', height: '280px' }}>
                                    {post.mainImage && (
                                        <img
                                        src={urlFor(post.mainImage).width(400).height(280).url()}
                                        alt={post.title}
                                        width="340"
                                        height="340"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    )}
                                    {post.category && (
                                        <div className="absolute top-4 left-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[post.category] || 'bg-gray-100 text-gray-800'}`}>
                                                {categoryLabels[post.category] || post.category}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content Section */}
                                <div className="p-4 md:p-6">
                                    <h3 className="text-lg md:text-xl font-bold text-[#345041] mb-2 md:mb-3 group-hover:text-[#2a4033] transition-colors duration-300">
                                        {post.title}
                                    </h3>

                                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 md:mb-4">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500">
                                            {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    }) : 'No date'}
                                        </span>
                                        <button className="text-[#345041] hover:text-[#2a4033] text-xs md:text-sm font-medium transition-colors duration-300">
                                            Read More →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                        ))}
                </div>
            </div>
        </div>

        {/* Book Free Consultation Section */}
        <div className="bg-gradient-to-r from-[#345041] to-[#2a4033] py-12 md:py-20 px-4 md:px-8 mb-8 md:mb-16 bg-[#eeac56]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 px-4" style={{ fontFamily: 'BrittanySignature, serif' }}>
                    Ready to Begin Your Healing Journey?
                </h2>
                <p className="text-lg md:text-xl text-gray-200 mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                    Take the first step towards a more peaceful and fulfilling life. Book your free consultation today.
                </p>
                <BookFreeConsultationBtn />
            </div>
        </div>

        
    </div>
}
export default Blog;