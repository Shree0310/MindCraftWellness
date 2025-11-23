import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId } from '../env'
import axios from 'axios';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Change to false for fresh data
  perspective: 'published', // Only fetch published content
})

// import { defineQuery } from "next-sanity";

export class SanityAPI {
  // baseURL: string
  // datasetURL: string;

  async getPost(slug: string) {
    console.log('@@ slug:', slug)
    return client.fetch(`
    *[_type == "post" && slug.current == "${slug}"][0] {
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        body
        }
    `)
  }

  async getAllPosts() {
    return client.fetch(`
    *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        "excerpt": array::join(string::split((pt::text(body)), "")[0..150], "")
       }
    `)
  }

  // constructor(private projectId: string, private apiVersion: string, private dataset: string) {
  //   this.apiVersion = apiVersion
  //   this.projectId  = projectId
  //   this.dataset = dataset

  //   this.baseURL = `https://${projectId}.api.sanity.io/${apiVersion}`
  //   this.datasetURL = `${this.baseURL}/data/query/${dataset}` 
  // }

  // private async fetch(query: string) {    
  //   const res = await axios.get(
  //     this.datasetURL, 
  //     {
  //       params: {
  //         'query': query
  //       },
  //       fetchOptions: {
  //         'cache': 'no-store'
  //       }
  //     }
  //   )

  //   console.log('res', res)

  //   const resJSON = res.data['result']
  //   console.log('@@', resJSON)
  //   return resJSON;
  // }
}

export const sanityAPIClient = new SanityAPI()
