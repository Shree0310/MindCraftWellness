import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import { sanityAPIClient } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { BlogPost } from "@/types/blog";
import { PortableText } from "next-sanity";
import Link from "next/link";

const categoryColors: Record<string, string> = {
    'mental-health': 'bg-blue-100 text-blue-800',
    'anxiety-stress': 'bg-purple-100 text-purple-800',
    'relationships': 'bg-pink-100 text-pink-800',
    'self-care': 'bg-green-100 text-green-800',
    'therapy-tips': 'bg-yellow-100 text-yellow-800',
    'wellness': 'bg-teal-100 text-teal-800',
};

const categoryLabels: Record<string, string> = {
    'mental-health': 'Mental Health',
    'anxiety-stress': 'Anxiety & Stress',
    'relationships': 'Relationships',
    'self-care': 'Self-Care',
    'therapy-tips': 'Therapy Tips',
    'wellness': 'Wellness',
};


const SingleBlogPage = async ({
    params
}:{
    params: Promise<{ slug: string }>
}) => {

    const { slug } = await params;
    console.log("Slug:", slug);

    const blog = await sanityAPIClient.getPost(slug);
    console.log("Blog data:", blog);

    if(!blog){
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-[#345041] mb-4">Post not found</h1>
                    <Link href="/Blog" className="text-[#ee7e1b] hover:underline">
                        ← Back to Blog
                    </Link>
                </div>
            </div>
        )
    }

    // Render different templates based on blog.template
    const renderTemplate = () => {
        switch(blog.template) {
            case 'featured':
                return <FeaturedTemplate blog={blog} />;
            case 'minimal':
                return <MinimalTemplate blog={blog} />;
            default:
                return <DefaultTemplate blog={blog} />;
        }
    };

    return (
        <div>
            <Header/>
            {renderTemplate()}
            <Footer className='bg-[#ee7e1b]' />
        </div>
    )
}

// Default Template
const DefaultTemplate = ({ blog }: { blog: BlogPost }) => (
    <article className="bg-gradient-to-t from-[#ee7e1b] to-[#e9e0d3] min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
            
            <Link href="/Blog" className="inline-flex items-center text-[#345041] hover:text-[#2a4033] mb-8 transition-colors">
                ← Back to Blog
            </Link>

            <header className="mb-8">
                {blog.category && (
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${categoryColors[blog.category] || 'bg-gray-100 text-gray-800'}`}>
                        {categoryLabels[blog.category] || blog.category}
                    </span>
                )}
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#345041] mb-4" style={{ fontFamily: 'Lora, serif' }}>
                    {blog.title}
                </h1>
                
                {blog.publishedAt && (
                    <p className="text-gray-600">
                        {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })}
                    </p>
                )}
            </header>

            {blog.mainImage && (
                <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                    <img
                        src={urlFor(blog.mainImage).width(900).height(500).url()}
                        alt={blog.title}
                        className="w-full h-auto object-cover"
                    />
                </div>
            )}

            <div className="bg-white rounded-2xl p-6 md:p-10 shadow-lg prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed
                    [&>p]:mb-4 
                    [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-[#345041] [&>h2]:mt-8 [&>h2]:mb-4
                    [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-[#345041] [&>h3]:mt-6 [&>h3]:mb-3
                    [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4
                    [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4
                    [&>blockquote]:border-l-4 [&>blockquote]:border-[#ee7e1b] [&>blockquote]:pl-4 [&>blockquote]:italic
                ">
                    {blog.body && <PortableText value={blog.body} />}
                </div>
            </div>

        </div>
    </article>
);

// Featured Template - Large Hero Style
const FeaturedTemplate = ({ blog }: { blog: BlogPost }) => (
    <article className="bg-white min-h-screen">
        {/* Full-width hero image */}
        {blog.mainImage && (
            <div className="relative h-[60vh] w-full">
                <img
                    src={urlFor(blog.mainImage).width(1920).height(1080).url()}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Overlay content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                    <div className="max-w-4xl mx-auto">
                        {blog.category && (
                            <span className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-white/20 backdrop-blur-sm">
                                {categoryLabels[blog.category] || blog.category}
                            </span>
                        )}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: 'Lora, serif' }}>
                            {blog.title}
                        </h1>
                        {blog.publishedAt && (
                            <p className="text-lg">
                                {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                                    month: 'long',
                                    day: 'numeric',
                                    year: 'numeric'
                                })}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        )}

        <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
            <Link href="/Blog" className="inline-flex items-center text-[#345041] hover:text-[#2a4033] mb-8 transition-colors">
                ← Back to Blog
            </Link>

            <div className="prose prose-xl max-w-none">
                <div className="text-gray-700 leading-relaxed
                    [&>p]:mb-6 [&>p]:text-lg
                    [&>h2]:text-3xl [&>h2]:font-bold [&>h2]:text-[#345041] [&>h2]:mt-12 [&>h2]:mb-6
                    [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-[#345041] [&>h3]:mt-8 [&>h3]:mb-4
                    [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6
                    [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-6
                    [&>blockquote]:border-l-4 [&>blockquote]:border-[#ee7e1b] [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-xl
                ">
                    {blog.body && <PortableText value={blog.body} />}
                </div>
            </div>
        </div>
    </article>
);

// Minimal Template - Text-Focused
const MinimalTemplate = ({ blog }: { blog: BlogPost }) => (
    <article className="bg-white min-h-screen">
        <div className="max-w-2xl mx-auto px-4 py-12 md:py-20">
            
            <Link href="/blog" className="inline-flex items-center text-gray-500 hover:text-[#345041] mb-12 transition-colors text-sm">
                ← Back
            </Link>

            <header className="mb-12 text-center">
                {blog.category && (
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6 ${categoryColors[blog.category] || 'bg-gray-100 text-gray-800'}`}>
                        {categoryLabels[blog.category] || blog.category}
                    </span>
                )}
                
                <h1 className="text-4xl md:text-5xl font-bold text-[#345041] mb-6 leading-tight">
                    {blog.title}
                </h1>
                
                {blog.publishedAt && (
                    <p className="text-gray-500 text-sm">
                        {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric'
                        })}
                    </p>
                )}
            </header>

            <div className="prose prose-lg max-w-none">
                <div className="text-gray-800 leading-relaxed
                    [&>p]:mb-6 [&>p]:text-base
                    [&>p:first-of-type]:text-xl [&>p:first-of-type]:text-gray-600
                    [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-[#345041] [&>h2]:mt-12 [&>h2]:mb-4
                    [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-[#345041] [&>h3]:mt-8 [&>h3]:mb-3
                    [&>ul]:list-none [&>ul]:pl-0 [&>ul]:mb-6
                    [&>ul>li]:mb-2 [&>ul>li]:pl-6 [&>ul>li]:relative
                    [&>ul>li:before]:content-['—'] [&>ul>li:before]:absolute [&>ul>li:before]:left-0
                    [&>blockquote]:border-l-2 [&>blockquote]:border-[#345041] [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:my-8
                ">
                    {blog.body && <PortableText value={blog.body} />}
                </div>
            </div>

            {/* Small image at bottom if exists */}
            {blog.mainImage && (
                <div className="mt-12 rounded-lg overflow-hidden">
                    <img
                        src={urlFor(blog.mainImage).width(700).height(400).url()}
                        alt={blog.title}
                        className="w-full h-auto object-cover"
                    />
                </div>
            )}
        </div>
    </article>
);

export default SingleBlogPage;