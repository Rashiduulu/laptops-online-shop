import {Rule, SchemaTypeDefinition} from 'sanity'

const category: SchemaTypeDefinition = {
  name: 'category',
  title: 'Category',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'CatalogProduct',
      type: 'string',
    },
    {
        title: 'Image',
        name: 'image',
        type: 'image',
        validation: (rule: Rule) => rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
  ],
}

export default category
