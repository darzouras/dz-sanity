<template>
  <component :is="level" :class="styleOption">
    {{ text }}
  </component>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    styleOption: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.headline {
  font-size: 3.6rem;
  letter-spacing: 0em;
  @include font-weight(bold);
  word-wrap: break-word;
  margin-bottom: 1.6rem;
  color: $tan;
  line-height: .8em;
}

.subheader {
  font-size: 2.4rem;
  letter-spacing: 0.1em;
  @include font-weight(bold);
  background: $tan;
  color: $white;
  padding: 5px;
  width: 100%;
  margin-bottom: 1.6rem;
  line-height: .8em;
}

.normal {
  font-size: 2.4rem;
  letter-spacing: 0.05em;
  @include font-weight(650);
  word-wrap: break-word;
  line-height: .8em;
  margin-bottom: 1.6rem;
  background: transparent;
  padding: 0;
  color: unset;
}

</style>
