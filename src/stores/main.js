import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'
import { getCities } from "../Api/Cities";
import { getHotels } from "../Api/Hotels";
import { getAllRooms } from "../Api/Rooms";
import { getAccommodationTypes, getRoomTypes } from "../Api/hab_com";

export const useMainStore = defineStore('main', () => {
  const userName = ref('John Doe')
  const userEmail = ref('doe.doe.doe@example.com')

  const userAvatar = computed(
    () =>
      `https://api.dicebear.com/7.x/avataaars/svg?seed=${userEmail.value.replace(
        /[^a-z0-9]+/gi,
        '-'
      )}`
  )

  const isFieldFocusRegistered = ref(false)

  const clients = ref([])
  const history = ref([])
  const cities = ref([])
  const hotels = ref([])
  const hotelSelect = ref({ })
  const rooms = ref([])
  const roomSelect = ref({ })
  const roomTypes = ref([])
  const roomAccommodations = ref([])
  function setUser(payload) {
    if (payload.name) {
      userName.value = payload.name
    }
    if (payload.email) {
      userEmail.value = payload.email
    }
  }

  function fetchSampleClients() {
    axios
      .get(`data-sources/clients.json?v=3`)
      .then((result) => {
        clients.value = result?.data?.data
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  function fetchSampleHistory() {
    axios
      .get(`data-sources/history.json`)
      .then((result) => {
        history.value = result?.data?.data
      })
      .catch((error) => {
        alert(error.message)
      })
  }

  function loadCities() {
    getCities().then((result) => {
      cities.value = result.data
    }).catch((error) => {
      alert(error.message)
    })
  }
  async function loadHotels() {
    const h =  (await getHotels()).data.data
    const load = [];
    for (const hotel of h) {
      let room = (await getAllRooms(hotel.id)).data.data
      const hotelRooms = {
        ...hotel,
        rooms: room
      }
      load.push(hotelRooms)
    }
    hotels.value = load
  }

  function loadHabCom(){
    getRoomTypes().then((result) => {
      roomTypes.value = result.data
    })
    getAccommodationTypes().then((result) => {
      roomAccommodations.value = result.data
    })
  }


  return {
    userName,
    userEmail,
    userAvatar,
    isFieldFocusRegistered,
    clients,
    history,
    cities,
    hotels,
    hotelSelect,
    rooms,
    roomSelect,
    roomTypes,
    roomAccommodations,
    setUser,
    fetchSampleClients,
    fetchSampleHistory,
    loadCities,
    loadHotels,
    loadHabCom,
  }
})
