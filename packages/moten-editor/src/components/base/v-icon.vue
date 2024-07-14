<script setup lang="ts">
import iconConfig, { type ConfigIcon } from '@/config/icon'
import { computed } from 'vue'

const props = defineProps({
  icon: {
    type: String,
    default: ''
  }
})

const iconSrc = computed(() => iconConfig[props.icon as ConfigIcon])
</script>
<template>
  <div class="v-icon-container">
    <Icon :icon="iconSrc" />
  </div>
</template>

<style scoped lang="scss"></style>
