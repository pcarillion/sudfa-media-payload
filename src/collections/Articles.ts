import type { CollectionConfig } from 'payload/types'
// import moment from 'moment'

import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'titre',
  },
  // auth: true,
  fields: [
    {
      name: 'Published',
      type: 'checkbox',
      label: 'Publier',
      defaultValue: false,
    },
    {
      name: 'titre',
      type: 'text',
      label: 'Titre',
      required: true,
      unique: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug (url)',
      required: true,
      unique: true,
      validate: (val) => {
        if (val?.includes(' ')) {
          return "Pas d'espace dans le slug, suivre le modèle 'titre-de-l-article'"
        }
        return true
      },
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
      name: 'authors',
      type: 'relationship',
      relationTo: 'auteurs',
      required: true,
      hasMany: true,
    },
    {
      name: 'presentation',
      type: 'textarea',
      label: 'Chapeau',
      required: true,
    },
    {
      name: 'photoPrincipale',
      type: 'upload',
      relationTo: 'medias',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      label: "Contenu de l'article",
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
    lexicalHTML('content', { name: 'content_html' }),
  ],
  access: {
    read: () => {
      return true
    },
  },
}
