export default {
  name: 'navigation',
  type: 'document',
  title: 'Navigation',
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
      validation: Rule => Rule.required()
    },
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [
        {
          name: 'link',
          type: 'object',
          title: 'Link',
          fields: [
            {
              name: 'text',
              type: 'string',
              title: 'Text'
            },
            {
              name: 'url',
              type: 'string',
              title: 'Url'
            }
          ]
        }
      ]
    }
  ]
}