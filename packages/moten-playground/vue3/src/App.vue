<script setup lang="ts">
import moten from '@moten/ui'
import { ref } from 'vue'
const { MoImage } = moten

const width = ref('')
const changeWidth = () => {
  width.value = '300px'
}
</script>

<template>
  <div class="container" :style="{ width }">
    <mo-image src="http://quiz.aklry.com/logo.png" @click="changeWidth" />
  </div>
</template>

<style scoped>
.container {
  container-type: inline-size;
  width: 100%;
}
</style>
