import { defineStore } from "pinia";

export const useReservaStore = defineStore("useReserva", {
  state: () => {
    return {
      steps: [
        {
          value: 1,
          title: "Servicio",
          disabled: false,
        },
        {
          value: 2,
          title: "Reserva",
          disabled: true,
        },
        {
          value: 3,
          title: "Informacion",
          disabled: true,
        },
        {
          value: 4,
          title: "Confirmacion",
          disabled: true,
        },
      ],
      reservation: {
        servicio: "",
      },
      valueStep: 1,
    };
  },

  actions: {
    async nextStep(value) {
      this.valueStep = value;
    },
  },
});
