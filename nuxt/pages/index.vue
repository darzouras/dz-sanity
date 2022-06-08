<template>
  <div>
    <h1>Hi</h1>
    <div v-if="data">
      <pre>
        {{ JSON.stringify(data, null, 2)}}
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const query = groq`*[_type == "page" && title == "Home"]`
    const { data } = useSanityQuery(query)

    return { data }
  },
}
</script>
