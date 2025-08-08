<template>
  <div class="flex flex-col h-96">
    <div
      class="border-2 border-dashed border-surface-200 dark:border-surface-700 rounded bg-surface-50 flex-auto flex justify-center items-center font-medium"
    >
      Content Informacion
    </div>

    <div class="flex pt-6 justify-end">
      <Button
        label="Next"
        icon="pi pi-arrow-right"
        iconPos="right"
        @click="save()"
      />
    </div>
  </div>
</template>
  
  <script setup>
const emit = defineEmits(["activateCallback"]);

const save = () => {
  emit("activateCallback", 4);
};
</script>
  
  <style>
</style>