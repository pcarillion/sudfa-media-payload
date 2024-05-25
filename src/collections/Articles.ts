import type { CollectionConfig } from 'payload/types'
// import moment from 'moment'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'titre',
  },
  // auth: true,
  fields: [
    {
      name: 'titre',
      type: 'text',
      label: 'Titre',
      required: true,
      unique: true,
    },
    {
      name: 'date',
      type: 'date',
      label: 'Date de Publication',
      required: true,
      // defaultValue: moment().toString(),
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
          displayFormat: 'd MMM yyy',
        },
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'auteurs',
      required: true,
    },
    {
      name: 'presentation',
      type: 'richText',
      label: 'Présentation',
      required: true,
    },
    {
      name: 'photoPrincipale',
      type: 'upload',
      relationTo: 'medias',
      required: true,
    },
    {
      name: 'article',
      type: 'richText',
      label: 'Article',
    },
  ],
}
