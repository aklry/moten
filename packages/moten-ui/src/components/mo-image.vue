<script lang="ts">
import { defineComponent } from 'vue-demi'
export default defineComponent({
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      value: 1111
    }
  },
  mounted() {
    console.warn(this.value)
  }
})
</script>
<template>
  <div class="mo-image-container">
    <img :src="src" alt="image" class="image" />
  </div>
</template>

<style scoped>
.image {
  width: 200px;
  height: 200px;
}
</style>
