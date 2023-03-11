import axios from "axios";
import { BASE_API_END_POINT } from "./constants";

export const setupAxios = () => {
  axios.defaults.baseURL = BASE_API_END_POINT;
};
