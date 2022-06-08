import components from './components'

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: input => input.toLowerCase().replace(/\s+/g, '-').slice(0, 96)
      },
      validation: Rule => Rule.required()
    },  
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'seoImage',
      type: 'image',
      title: 'SEO Image'
    },
    {
      name: 'components',
      type: 'array',
      title: 'Components',
      of: components.map((component) => (component))
    }
  ]
}
