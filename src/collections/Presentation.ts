import type { CollectionConfig } from 'payload/types'

export const Presentation: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'title',
    description: 'Une seule entrée, ne pas modifier, ne pas supprimer',
  },
  auth: true,
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
    },
    {
      name: 'longVersion',
      type: 'richText',
      label: 'versionLongue',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'medias',
      label: 'Logo du site',
      required: true,
    },
  ],
}
