import {DocumentTextIcon} from '@sanity/icons'
import { defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    // Simple category selector
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Mental Health', value: 'mental-health' },
          { title: 'Anxiety & Stress', value: 'anxiety-stress' },
          { title: 'Relationships', value: 'relationships' },
          { title: 'Self-Care', value: 'self-care' },
          { title: 'Therapy Tips', value: 'therapy-tips' },
          { title: 'Wellness', value: 'wellness' },
        ],
      },
      initialValue: 'mental-health',
    }),
    // Template field
    defineField({
      name: 'template',
      title: 'Blog Template Style',
      type: 'string',
      description: 'Choose how this blog post will be displayed',
      options: {
        list: [
          { title: 'Default (Standard Layout)', value: 'default' },
          { title: 'Featured (Large Hero Image)', value: 'featured' },
          { title: 'Minimal (Text-Focused)', value: 'minimal' },
        ],
      },
      initialValue: 'default',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent', // Keep your existing blockContent type
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      category: 'category',
    },
    prepare(selection) {
      const { title, media, category, author } = selection
      return {
        title: title,
        subtitle: category ? `${category}${author ? ` • by ${author}` : ''}` : author ? `by ${author}` : '',
        media: media,
      }
    },
  },
})