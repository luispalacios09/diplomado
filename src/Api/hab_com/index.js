import axiosClient from "../AxiosClient";


export const getRoomTypes = () => {
  return axiosClient.get('/room-types')
}

export const getAccommodationTypes = () => {
  return axiosClient.get('/accommodation-types')
}