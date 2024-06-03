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
  access: {
    read: () => {
      return true
    },
  },
}
