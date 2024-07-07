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
    <h1 class="title">标题</h1>
    <img :src="src" alt="image" class="image m-1" />
  </div>
</template>

<style lang="scss" scoped>
.image {
  width: 200px;
  height: 200px;
}
.title {
  font-size: 50px;
  color: red;
}
@container (max-width: 600px) {
  .title {
    font-size: 20px;
    color: blue;
  }
}
</style>
