<script setup lang="ts"></script>
<template>
  <div class="edit-container">
    <edit-header />
    <div class="container">
      <edit-block />
      <edit-render />
      <edit-config />
    </div>
  </div>
</template>

<style scoped lang="scss">
.edit-container {
  .container {
    display: flex;
  }
}
</style>
