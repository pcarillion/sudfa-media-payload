import type { CollectionConfig } from 'payload/types'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nom',
    },
    {
      name: 'order',
      type: 'number',
      label: 'ordre dans le menu',
      unique: true,
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
    },
  ],
  access: {
    read: () => {
      return true
    },
  },
}
