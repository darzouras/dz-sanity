<template>
  <div>
    <componentMapper v-for="component in data[0].components" :data="component" :key="component._key" />
  </div>
</template>

<script>
export default {
  setup() {
    const query = groq`*[_type == "page" && slug.current == "home"]`
    const { data } = useSanityQuery(query)

    return { data }
  },
}
</script>
