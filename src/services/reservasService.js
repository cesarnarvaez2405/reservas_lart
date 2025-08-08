import axios from "axios";
import API from "../api/apiNode";
import {
  alertErrorResponse,
  alertSuccessReponse,
} from "../utils/alertResponseHttpUtils";

const configApi = {
  headers: {
    Authorization: "",
  },
};

const dominio = `${API.node}/reservas`;

export default {
  async buscarPorFecha(fecha) {
    try {
      const response = await axios.get(
        `${dominio}/buscar-por-fecha?fecha=${fecha}`
      );
      return response.data;
    } catch (error) {
      alertErrorResponse(error);
    }
  },
};
