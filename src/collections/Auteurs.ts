import type { CollectionConfig } from 'payload/types'

export const Auteurs: CollectionConfig = {
  slug: 'auteurs',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nom',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
    {
      name: 'photo',
      type: 'upload',
      relationTo: 'medias',
      // required: true,
    },
  ],
}
