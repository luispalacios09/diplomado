<script setup>

import SelectList from "./SelectList.vue";
import CardBoxModal from "./CardBoxModal.vue";
import { createHotel, updateHotel } from "../Api/Hotels";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useMainStore } from "../stores/main";

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: null
  },
  updateCity: Boolean,
})

const emit = defineEmits(['update:modelValue', 'cancel', 'confirm'])

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const mainStore = useMainStore();
const city = ref()
const name = ref()
const nit = ref()
const number_rooms = ref()
const address = ref()
const updateSelectCity = (c) => {
  city.value = c
}

const valdiateInputs = () => {
  return !(city.value && name.value && nit.value && number_rooms.value > 0 && address.value);
}

watch(mainStore.hotelSelect, (newValue, oldValue) => {
  if (newValue) {
    city.value = newValue.value?.city
    name.value = newValue.value?.name
    nit.value = newValue.value?.nit
    number_rooms.value = newValue.value?.num_rooms
    address.value = newValue.value?.address
  }
}, {deep: true, immediate: true})
const handleCreate = () => {
  if (valdiateInputs()){
    alert("Please fill all the fields")
    return
  }
  const hotel = {
    name: name.value,
    nit: nit.value,
    city_id: city.value.id,
    address: address.value,
    num_rooms: number_rooms.value
  }
  createHotel(hotel).then((response) => {
    console.log(response.data.data)
    mainStore.hotels.push(response.data.data)
    alert(response.data.message)
  }).catch((error) => {
    alert(error.response.data.message)
  })
  // mainStore.hotels.push(hotel)
  value.value = false
}

const handleUpdate = () => {
  if (valdiateInputs()){
    alert("Please fill all the fields")
    return
  }
  const hotel = {
    id: mainStore.hotelSelect.value?.id,
    name: name.value,
    nit: nit.value,
    city_id: city.value.id,
    address: address.value,
    num_rooms: number_rooms.value
  }
  updateHotel(hotel).then((response) => {
    console.log(response.data.data)
    mainStore.hotels = mainStore.hotels.map((ho) => {
      if (ho.id === hotel.id) {
        return response.data.data
      }
      return ho
    })
    alert(response.data.message)
  }).catch((error) => {
    alert(error)
  })
  value.value = false
}

const handle = () => {
  if (props.updateCity) {
    handleUpdate()
  } else {
    handleCreate()
  }
}

</script>

<template>
  <CardBoxModal :button-label="updateCity ? 'Update' : 'Create' "  v-model="value" @confirm="handle" title="Create Hotel">
    <div class="border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <div class="px-4 pt-6 sm:grid sm:grid-cols-2 sm:gap-2 sm:px-0">
          <div>
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input v-model="name" type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hotel name" required>
          </div>
          <div>
            <label for="nit" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nit</label>
            <input v-model="nit" type="text" id="nit" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City nit" required>
          </div>
          <div>
            <label for="address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
            <input v-model="address" type="text" id="address" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="City address" required>
          </div>
          <div>
            <SelectList :items="mainStore.cities" label="City" v-model="city" />
            <!--                <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>-->
            <!--                <input type="text" id="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required>-->
          </div>
          <div>
            <label for="number_rooms" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of rooms</label>
            <input v-model="number_rooms" type="number" id="number_rooms" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="#" required>
          </div>
          <!--                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0"><b>Nit:</b> {{hotelShow?.nit}}</dd>-->
          <!--                <dt class="text-sm font-medium leading-6 text-gray-900"><b>Location:</b> {{hotelShow?.address}}, {{hotelShow?.city?.name}}</dt>-->
          <!--                <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0"><b>Number of rooms:</b> {{hotelShow?.num_rooms}}</dd>-->
        </div>
      </dl>
    </div>
  </CardBoxModal>
</template>

<style scoped>

</style>