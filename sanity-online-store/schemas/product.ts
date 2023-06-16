import {Rule, SchemaTypeDefinition} from 'sanity'

const product: SchemaTypeDefinition = {

  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'CatalogProduct',
      type: 'string',
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
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'catalog',
      title: 'Catalog',
      type: 'reference',
      to: [{type: 'catalog'}],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'oldPrice',
      title: 'OldPrice',
      type: 'number',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'number',
    },
    {
      name: 'CPU',
      title: 'CPU',
      type: 'string',
    },
    {
      name: 'RAM',
      title: 'RAM',
      type: 'string',
    },
    {
      name: 'SSD',
      title: 'SSD',
      type: 'string',
    },
    {
      name: 'Display',
      title: 'Display',
      type: 'string',
    },
    {
      name: 'VideoCard',
      title: 'VideoCard',
      type: 'string',
    },
    {
      name: 'OS',
      title: 'OS',
      type: 'string',
    },
    {
      name: 'Color',
      title: 'Color',
      type: 'string',
    },
    {
      name: 'Weight',
      title: 'Weight',
      type: 'string',
    },

    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    },
  ],
}

export default product
