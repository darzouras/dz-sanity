export default {
  name: 'heading',
  title: 'Heading',
  type: 'object',
  fields: [
    {
      name: 'text',
      type: 'string',
      title: 'Text',
      validation: Rule => Rule.required()
    },
    {
      name: 'level',
      type: 'string',
      title: 'Level',
      initialValue: 'h2',
      options: {
        list: [
          'h1',
          'h2',
          'h3',
          'h4'
        ],
        layout: 'dropdown'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'style',
      type: 'string',
      title: 'Style',
      initialValue: 'headline',
      options: {
        list: [
          'headline',
          'subheader',
          'normal'
        ],
        layout: 'dropdown'
      },
      validation: Rule => Rule.required()
    }
  ]
}
