<template>
  <div v-for="step in steps" :key="step">
    <Step :disabled="step.disabled" :value="step.value">{{ step.title }}</Step>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  steps: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
</style>