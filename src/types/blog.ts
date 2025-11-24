import { SanityImageSource } from "@sanity/image-url/lib/types/types";

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
    body?: any[]; // Portable Text array
    excerpt?: string;
}