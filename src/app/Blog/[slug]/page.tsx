import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { POST_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import Link from "next/link";

const SingleBlogPage = async ({
    params
}:{
    params: Promise<{ slug: string }>
}) => {

    const { slug } = await params;
    console.log("Slug:", slug);

    const blog = await client.fetch(POST_QUERY, { slug });
    console.log("Blog data:", blog);

    if(!blog){
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-[#345041] mb-4">Post not found</h1>
                    <Link href="/blog" className="text-[#ee7e1b] hover:underline">
                        ← Back to Blog
                    </Link>
                </div>
            </div>
        )
    }

    return <div className="div">
        <Header/>
         <article className="bg-gradient-to-t from-[#ee7e1b] to-[#e9e0d3] min-h-screen">
                <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
                    
                    {/* Back Button */}
                    <Link href="/blog" className="inline-flex items-center text-[#345041] hover:text-[#2a4033] mb-8 transition-colors">
                        ← Back to Blog
                    </Link>

                    {/* Post Header */}
                    <header className="mb-8">
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

                    {/* Featured Image */}
                    {blog.mainImage && (
                        <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={urlFor(blog.mainImage).width(900).height(500).url()}
                                alt={blog.title}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    )}

                    {/* Post Content */}
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
        <Footer/>
    </div>
}
export default SingleBlogPage;