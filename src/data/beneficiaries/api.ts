import axios from "../../lib/axios";
import { Beneficiary } from "./types";

const ROOT_PATH = "/beneficiaries";

export const BeneficiariesApi = {
  getAllBeneficiaries: (): Promise<Beneficiary[]> => {
    return axios.get(ROOT_PATH).then(({ data }) => data);
  },

  getBeneficiaryByToken: (token: string): Promise<Beneficiary> => {
    return axios.get(`${ROOT_PATH}/${token}`).then(({ data }) => data);
  },

  addBeneficiary: (beneficiary: Partial<Beneficiary>): Promise<Beneficiary> => {
    return axios.post(ROOT_PATH, beneficiary).then(({ data }) => data);
  },

  updateBeneficiary: (
    beneficiary: Partial<Beneficiary>
  ): Promise<Beneficiary> => {
    return axios
      .post(`${ROOT_PATH}/${beneficiary.token}`, beneficiary)
      .then(({ data }) => data);
  },

  removeBeneficiary: (token: string): Promise<boolean> => {
    return axios.delete(`${ROOT_PATH}/${token}`);
  },
};
