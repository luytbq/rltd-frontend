<script setup>

const props = defineProps({
  errorMsg: {
    type: String,
    default: 'Something went wrong!',
  },
  description: String,
  routerLink: String
});

</script>

<template>
  <div class="error-container">
    <p class="error-message">{{ errorMsg }}</p>
  </div>
</template>

<style scoped>
  .error-container .error-message {
    color: red;
  }
</style>
