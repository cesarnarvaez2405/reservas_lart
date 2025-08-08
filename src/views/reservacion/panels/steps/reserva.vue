<template>
  <div class="text-center">
    <h1 class="font-bold text-4xl">Reserva</h1>
    <small>Seleccione los siguientes campos</small>
  </div>

  <div class="flex flex-col gap-16 justify-center py-10 px-52">
    <!-- Contenedor de los elementos centrados -->
    <div class="card flex flex-col gap-8 items-center">
      <!-- DatePicker -->
      <div class="w-full md:w-1/2">
        <label for="datepicker-12h" class="font-bold block mb-2 text-center">
          Fecha a reservar
        </label>
        <FloatLabel variant="on">
          <DatePicker
            class="w-full"
            id="datepicker-12h"
            v-model="time"
            hourFormat="12"
            fluid
            :minDate="minDate"
            :maxDate="maxDate"
            :disabledDates="disableDates"
          >
            <template #date="slotProps">
              <span
                v-if="
                  disableDates.some(
                    (date) => date.getDate() === slotProps.date.day
                  )
                "
                >{{ slotProps.date.day }}</span
              >
              <template v-else>{{ slotProps.date.day }}</template>
            </template>
          </DatePicker>
          <label for="in_label">Fecha</label>
        </FloatLabel>
      </div>

      <!-- Listbox -->
      <div class="w-full md:w-1/2">
        <label for="listbox" class="font-bold block mb-2 text-center">
          Selecciona la hora
        </label>
        <Listbox
          v-model="horaSeleccionada"
          :options="horasServicio"
          optionLabel="hora"
          optionDisabled="disabled"
          emptyMessage="Debes seleccionar la fecha"
          class="w-full"
          :disabled="!time"
          @click="getReservasPorFecha()"
        />
      </div>
    </div>

    <!-- Botones -->
    <div class="flex justify-between">
      <Button label="Atras" iconPos="right" @click="save()" />
      <Button label="Siguiente" iconPos="right" @click="save()" />
    </div>
  </div>
</template>
  
<script setup>
import { onMounted, ref, watch } from "vue";
import { useReservaStore } from "../../../../store/reserva";
import serviciosService from "../../../../services/serviciosService";
import reservasService from "../../../../services/reservasService";

const emit = defineEmits(["activateCallback"]);

const store = useReservaStore();

const time = ref(null);
const minDate = ref(new Date());
const maxDate = ref(new Date());
const disableDates = ref([]);
const infoServicio = ref({});
const horasServicio = ref([]);
const horaSeleccionada = ref();
const cantidadPorHora = ref(0);

const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();

const nextMonth = month === 11 ? 0 : month + 1;
const nextYear = nextMonth === 0 ? year + 1 : year;

maxDate.value.setMonth(nextMonth);
maxDate.value.setFullYear(nextYear);

onMounted(async () => {
  today.setDate(4);
  disableDates.value.push(today);
  await getInfoServicio();
});

const getInfoServicio = async () => {
  infoServicio.value = await serviciosService.buscarPorId(
    store.reservation.servicio
  );

  cantidadPorHora.value = infoServicio.value.cant_total_hora;
};

const getReservasPorFecha = async (tiempo) => {
  const fecha = formatearFecha(tiempo);
  const reservas = await reservasService.buscarPorFecha(fecha);

  const conteo = reservas.reduce((acc, item) => {
    acc[item.hora] = (acc[item.hora] || 0) + 1;
    return acc;
  }, {});

  const repetidosMasDeCuatro = Object.entries(conteo).filter(
    ([hora, count]) => count >= 4
  );

  const horasADesactivar = [];

  for (const tiemposRepetidos of repetidosMasDeCuatro) {
    horasADesactivar.push(parseInt(tiemposRepetidos[0]));
  }

  const nHorasDeServicios =
    infoServicio.value.horaFinal - infoServicio.value.horaInicio;

  let index = 0;

  do {
    if (horasADesactivar.includes(infoServicio.value.horaInicio + index)) {
      horasServicio.value.push({
        disabled: true,
        hora: `${infoServicio.value.horaInicio + index}:00`,
        id: infoServicio.value.horaInicio + index,
      });
      index++;
      continue;
    }
    horasServicio.value.push({
      disabled: false,
      hora: `${infoServicio.value.horaInicio + index}:00`,
      id: infoServicio.value.horaInicio + index,
    });
    index++;
  } while (index <= nHorasDeServicios);
};

const formatearFecha = (fecha) => {
  return fecha.toISOString().split("T")[0];
};

const save = () => {
  emit("activateCallback", 3);
};

watch(time, async (newValue, oldValue) => {
  await getReservasPorFecha(newValue);
});
</script>
  
  <style>
</style>