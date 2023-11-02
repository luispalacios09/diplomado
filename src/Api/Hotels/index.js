import axiosClient from "../AxiosClient";

export const getHotels = () => {
  return axiosClient.get('/hotels')
}

export const createHotel = (hotel) => {
  return axiosClient.post('/hotels', hotel)
}

export const updateHotel = (hotel) => {
  return axiosClient.put(`/hotels/${hotel.id}`, hotel)
}

export const deleteHotel = (hotelId) => {
  return axiosClient.delete(`/hotels/${hotelId}`)
}