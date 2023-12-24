import axios from "../../lib/axios";
import { BreadBasketBeneficiary } from "./types";

const ROOT_PATH = "/api:36gfa0SR/bread-basket-beneficiaries";

export const BreadBasketBeneficiariesApi = {
  getAllBeneficiaries: (): Promise<BreadBasketBeneficiary[]> => {
    return axios.get(ROOT_PATH).then(({ data }) => data);
  },

  getBeneficiaryByToken: (token: string): Promise<BreadBasketBeneficiary> => {
    return axios.get(`${ROOT_PATH}/${token}`).then(({ data }) => data);
  },

  addBeneficiary: (
    beneficiary: Partial<BreadBasketBeneficiary>
  ): Promise<BreadBasketBeneficiary> => {
    return axios.post(ROOT_PATH, beneficiary).then(({ data }) => data);
  },

  updateBeneficiary: (
    beneficiary: Partial<BreadBasketBeneficiary>
  ): Promise<BreadBasketBeneficiary> => {
    return axios
      .patch(`${ROOT_PATH}/${beneficiary.token}`, beneficiary)
      .then(({ data }) => data);
  },

  removeBeneficiary: (token: string): Promise<boolean> => {
    return axios.delete(`${ROOT_PATH}/${token}`);
  },
};
