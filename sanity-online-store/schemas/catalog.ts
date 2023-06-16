import {Rule, SchemaTypeDefinition} from 'sanity'
import {TbCategory} from "react-icons/all";

const catalog: SchemaTypeDefinition = {
    name: 'catalog',
    title: 'Catalog',
    type: 'document',
    icon: TbCategory,

    fields: [
        {
            name: 'title',
            title: 'CatalogProduct',
            type: 'string',
        },
        // {
        //     title: 'Image',
        //     name: 'image',
        //     type: 'image',
        //     validation: (rule) => rule.required(),
        // },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            of: [{type: 'image'}],
            options: {
                hotspot: true,
            },
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

export default catalog
