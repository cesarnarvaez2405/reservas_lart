<template>
  <div class="font-poppins">
    <div>
      <menu-reservation />
    </div>

    <div>
      <Stepper :value="valueStep">
        <div class="py-2 bg-slate-200 px-96 shadow-inner">
          <StepList> <steper-list :steps="store.steps" /></StepList>
        </div>

        <div class="py-8">
          <StepPanels>
            <index-panels :valueStep="valueStep" />
          </StepPanels>
        </div>
      </Stepper>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import menuReservation from "./components/menuReservation.vue";
import steperList from "./components/steperList.vue";
import indexPanels from "./panels/indexPanels.vue";
import { useReservaStore } from "../../store/reserva";

const store = useReservaStore();
const valueStep = store.valueStep;
</script>

<style>
</style>