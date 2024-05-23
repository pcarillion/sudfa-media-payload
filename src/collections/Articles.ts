import type { CollectionConfig } from 'payload/types'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
  },
  // auth: true,
  fields: [
    {
      name: 'titre',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'article',
      type: 'richText',
    },
  ],
}
