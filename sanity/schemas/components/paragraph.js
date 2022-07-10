import React from 'react'

const CodeblockStyle = props => (
  <span style={{fontFamily: 'monospace', fontSize: '1em', background: 'lightgrey'}}>{props.children}</span>
)

export default {
  name: 'textContent',
  title: 'Text Content',
  type: 'object',
  fields: [
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of : [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Quote', value: 'blockquote' },
            { title: 'Code block', value: 'code', blockEditor: { render: CodeblockStyle } }
          ]
        }
      ]
    }
  ]
}