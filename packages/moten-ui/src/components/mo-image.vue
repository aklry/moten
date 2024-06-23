<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    src: String
  },
  setup() {
    const data = ref(111)
    console.log(data.value)
  }
})
</script>
<template>
  <img :src="src" alt="image" class="mo-image" />
</template>

<style scoped>
.mo-image {
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
</style>
