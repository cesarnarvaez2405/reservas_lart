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

const dominio = `${API.node}/servicios`;

export default {
  async buscarTodos() {
    try {
      const response = await axios.get(dominio, configApi);
      return response.data;
    } catch (error) {
      alertErrorResponse(error);
    }
  },

  async buscarPorId(id) {
    try {
      const response = await axios.get(`${dominio}/${id}`);
      return response.data;
    } catch (error) {
      alertErrorResponse(error);
    }
  },
};
