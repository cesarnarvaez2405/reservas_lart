<template>
  <div class="text-center">
    <h1 class="font-bold text-4xl">Servicios</h1>
    <small>Seleccione el tipo de servicio que quieres reservar</small>
  </div>

  <div class="flex flex-col gap-8 justify-center py-20 px-64">
    <span class="text-center" v-if="servicios.length <= 0"
      >No hay servicios para reservar por el momento, intentelo mas
      tarde...</span
    >
    <button
      @click="save(servicio)"
      v-for="servicio in servicios"
      :key="servicio._id"
      class="py-3 w-full bg-pink-100 text-center rounded-lg drop-shadow-lg text-black hover:scale-95 transition-all ease-in cursor-pointer hover:bg-pink-200 duration-100"
      :class="{
        'border-2 border-green-600': store.reservation.servicio == servicio._id,
      }"
    >
      <div class="flex justify-center gap-5">
        <check-badge-icon
          v-if="store.reservation.servicio == servicio._id"
          class="size-6 text-green-600"
        />
        <h3>{{ servicio.nombre }}</h3>
      </div>
    </button>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { CheckBadgeIcon } from "@heroicons/vue/24/outline";

import { useReservaStore } from "../../../../store/reserva";
import serviciosApi from "../../../../services/serviciosService";

const servicios = ref([]);
const store = useReservaStore();

onMounted(async () => {
  await obtenerServicio();
});

const emit = defineEmits(["activateCallback"]);

const obtenerServicio = async () => {
  servicios.value = await serviciosApi.buscarTodos();
};

const save = (servicio) => {
  emit("activateCallback", 2);
  store.steps[1].disabled = false;
  store.reservation.servicio = servicio._id;
};
</script>

<style>
</style>