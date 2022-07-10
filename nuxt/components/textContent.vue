<template>
  <div class="text">
    <component v-for="block in content" :key="block._key" :is="getTagType(block.style)">
      <component v-for="line in block.children" :key="line._key" :is="line._type">
        {{ line.text}}
      </component>
    </component>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getTagType(type) {
      switch (type) {
        case 'normal':
          return 'p'
        default: 
          return type
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.text {
  margin-bottom: 3.2rem;

  > code {
    display: block;
    padding: 0.5rem;
    font-size: 1.6rem;
  }
}

p, blockquote, code {
  margin-bottom: 1em;
}

p {
  font-size: 1.8rem;
}

blockquote {
  padding: 1rem;
  background: $orange;
  font-size: 1.8rem;
  font-weight: bold;
}

code {
  background: $seafoam;
}
</style>
