import axiosClient from "../AxiosClient";

export const getAllRooms = (hotel) => {
  return axiosClient.get(`/rooms/${hotel}`)
}

export const showRoom = (id) => {
  return axiosClient.get(`/rooms/show/${id}`)
}

export const createRoom = (room) => {
  return axiosClient.post('/rooms', room)
}

export const updateRoom = (room) => {
  return axiosClient.put(`/rooms/${room.id}`, room)
}

export const deleteRoom = (roomId) => {
  return axiosClient.delete(`/rooms/${roomId}`)
}