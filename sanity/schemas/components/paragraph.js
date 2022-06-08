export default {
  name: 'textContent',
  title: 'Text Content',
  type: 'object',
  fields: [
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of : [{ type: 'block' }]
    }
  ]
}