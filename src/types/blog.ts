import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { PortableTextBlock } from "next-sanity";


export interface BlogPost {
    _id: string;
    title: string;
    slug: {
        current: string;
    };
    mainImage?: SanityImageSource;
    publishedAt?: string;
    category?: string;
    template?: 'default' | 'featured' | 'minimal';
    body?: PortableTextBlock[];
    excerpt?: string;
}