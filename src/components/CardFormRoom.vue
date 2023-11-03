<script setup>

import SelectList from "./SelectList.vue";
import CardBoxModal from "./CardBoxModal.vue";
import { createHotel, updateHotel } from "../Api/Hotels";
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useMainStore } from "../stores/main";
import { createRoom, updateRoom } from "../Api/Rooms";

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
const hotel = ref()
const room_type = ref()
const accommodation = ref()
const quantity = ref()

watch(hotel, (newValue, oldValue) => {
  console.log(newValue)
}, {deep: true})

watch(mainStore.roomSelect, (newValue, oldValue) => {
  if (newValue) {
    hotel.value = newValue.value
    room_type.value = newValue.value?.room.type
    accommodation.value = newValue.value?.room.accommodation
    quantity.value = newValue.value?.room?.quantity
  }
}, {deep: true, immediate: true})

//validate inputs
const valdiateInputs = () => {
  return !(hotel.value && room_type.value && accommodation.value && quantity.value > 0 && quantity.value <= hotel.value?.num_rooms);
}
const handleCreate = () => {
  if (valdiateInputs()){
    alert("Please fill all the fields")
    return
  }
  const room = {
    hotel_id: hotel.value?.id,
    room_type_id: room_type.value.id,
    accommodation_id: accommodation.value.id,
    quantity: quantity.value,
  }
  createRoom(room).then((response) => {
    mainStore.loadHotels().then(()=>{})
    alert(response.data.message)
  }).catch((error) => {
    alert(error.response.data.message)
  })
  value.value = false
}

const handleUpdate = () => {
  if (valdiateInputs){
    alert("Please fill all the fields")
    return
  }
  const room = {
    id: hotel.value?.room?.id,
    hotel_id: hotel.value?.id,
    room_type_id: room_type.value.id,
    accommodation_id: accommodation.value.id,
    quantity: quantity.value,
  }
  updateRoom(room).then((response) => {
    mainStore.loadHotels()
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
            <SelectList :items="mainStore.hotels" label="Hotels" v-model="hotel" />
            <!--                <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>-->
            <!--                <input type="text" id="city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required>-->
          </div>
          <div>
            <SelectList :items="mainStore.roomTypes" label="Room type" v-model="room_type" />
          </div>
          <div>
            <SelectList :items="mainStore.roomAccommodations" label="Room accommodation" v-model="accommodation" />
          </div>
          <div>
            <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
            <input v-model="quantity" :max="hotel?.num_rooms" type="number" id="quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="#" required>
            <span class="text-xs text-gray-500">Max: {{hotel?.num_rooms}}</span>
            <p v-if="quantity > hotel?.num_rooms" class="mt-2 text-sm text-red-600 dark:text-red-500">Error, surplus of rooms</p>

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