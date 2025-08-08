<template>
  <div class="px-72">
    <!-- <StepPanel
      v-for="component in components"
      :key="component.value"
      v-slot="{ activateCallback }"
      :value="component.value"
    >
      <div class="flex flex-col bg-white drop-shadow-md py-8 rounded-md px-5">
        <component
          :is="component.componentImport"
          :servicioInfo="infoServicio"
          @activateCallback="activateCallback"
          @buscarInfoServicio="getInfoServicio"
        />
      </div>
    </StepPanel> -->

    <StepPanel v-slot="{ activateCallback, active }" :value="1">
      <div class="flex flex-col bg-white drop-shadow-md py-8 rounded-md px-5">
        <servicios v-if="active" @activateCallback="activateCallback" />
      </div>
    </StepPanel>

    <StepPanel v-slot="{ activateCallback, active }" :value="2">
      <div class="flex flex-col bg-white drop-shadow-md py-8 rounded-md px-5">
        <reserva v-if="active" @activateCallback="activateCallback" />
      </div>
    </StepPanel>

    <StepPanel v-slot="{ activateCallback, active }" :value="3">
      <div class="flex flex-col bg-white drop-shadow-md py-8 rounded-md px-5">
        <informacion v-if="active" @activateCallback="activateCallback" />
      </div>
    </StepPanel>

    <StepPanel v-slot="{ activateCallback, active }" :value="4">
      <div class="flex flex-col bg-white drop-shadow-md py-8 rounded-md px-5">
        <confirmacion v-if="active" @activateCallback="activateCallback" />
      </div>
    </StepPanel>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const servicios = defineAsyncComponent(() => import("./steps/servicios.vue"));
const reserva = defineAsyncComponent(() => import("./steps/reserva.vue"));
const informacion = defineAsyncComponent(() =>
  import("./steps/informacion.vue")
);
const confirmacion = defineAsyncComponent(() =>
  import("./steps/confimacion.vue")
);

// Creamos un array con los componentes asíncronos
const components = [
  {
    componentImport: servicios,
    value: 1,
  },
  {
    componentImport: reserva,
    value: 2,
  },
  {
    componentImport: informacion,
    value: 3,
  },
  {
    componentImport: confirmacion,
    value: 4,
  },
];

const props = defineProps({
  valueStep: {
    type: Number,
    required: true,
  },
});
</script>

<style>
</style>
