import AxiosClient from "../AxiosClient";

export const getCities = async () => {
  return AxiosClient.get("/cities");
};



