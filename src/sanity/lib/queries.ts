import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`
    *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        "excerpt": array::join(string::split((pt::text(body)), "")[0..150], "")
       }
    `)

export const POST_QUERY = defineQuery(`
    *[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        body
        }
    `)