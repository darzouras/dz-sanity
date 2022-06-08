<template>
  <div>
    {{ content }}
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
}
</script>
