<template>
  <div>
    <Toolbar
      class="rounded-md py-8 border-0 px-72 drop-shadow-sm shadow-gray-600"
    >
      <template #start>
        <div class="flex items-center gap-2">
          <h3>Titulo o logo de la compañia - Reservas</h3>
        </div>
      </template>

      <template #end>
        <div class="flex items-center gap-2">
          <Avatar style="width: 32px; height: 32px" shape="circle">
            <template v-slot:icon>
              <user-icon class="size-6" />
            </template>
          </Avatar>
        </div>
      </template>
    </Toolbar>
  </div>
</template>

<script setup>
import { UserIcon } from "@heroicons/vue/24/outline";
</script>

<style>
</style>