import type { CollectionConfig } from 'payload/types'
import { HTMLConverterFeature, lexicalEditor, lexicalHTML } from '@payloadcms/richtext-lexical'

export const Presentation: CollectionConfig = {
  slug: 'presentation',
  access: {
    read: () => {
      return true
    },
  },
  admin: {
    useAsTitle: 'title',
    description: 'Une seule entrée, ne pas modifier, ne pas supprimer',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'titre',
      required: true,
    },
    {
      name: 'shortVersion',
      type: 'richText',
      label: 'Version courte',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
    lexicalHTML('shortVersion', { name: 'shortVersion_html' }),

    {
      name: 'longVersion',
      type: 'richText',
      label: 'versionLongue',
      required: true,
      editor: lexicalEditor({
        features: ({ defaultFeatures }) => [...defaultFeatures, HTMLConverterFeature({})],
      }),
    },
    lexicalHTML('longVersion', { name: 'longVersion_html' }),
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'medias',
      label: 'Logo du site',
      required: true,
    },
  ],
}
