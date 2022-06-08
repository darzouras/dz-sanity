<template>
  <div>
    <component :is="data._type" v-bind="data" />
    {{ data }}
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
}
</script>