<script setup>
import { computed, ref } from 'vue'
import { useMainStore } from '@/stores/main'
import { mdiEye, mdiTrashCan } from '@mdi/js'
import CardBoxModal from '@/components/CardBoxModal.vue'
import TableCheckboxCell from '@/components/TableCheckboxCell.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import BaseButton from '@/components/BaseButton.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import { deleteHotel } from "../Api/Hotels";

const props = defineProps({
  checkable: Boolean,
  options: {
    type: Boolean,
    default: true
  },
  items: {
    type: Array,
    default: () => []
  }
})

console.log(props.items)

const isModalActive = ref(false)

const isModalDangerActive = ref(false)

const hotelShow = ref({})

const perPage = ref(5)

const currentPage = ref(0)

const checkedRows = ref([])

const showHotel = (hotel) => {
  hotelShow.value = hotel
  isModalActive.value = true
}

const handleDelete = () => {
  const id = hotelShow.value?.id
  deleteHotel(id).then(() => {
    mainStore.hotels = mainStore.hotels.filter((hotel) => hotel.id !== id)
    isModalDangerActive.value = false
  })
}

const itemsPaginated = computed(() =>
  props.items.slice(perPage.value * currentPage.value, perPage.value * (currentPage.value + 1))
)

const numPages = computed(() => Math.ceil(props.items.length / perPage.value))

const currentPageHuman = computed(() => currentPage.value + 1)

const pagesList = computed(() => {
  const pagesList = []

  for (let i = 0; i < numPages.value; i++) {
    pagesList.push(i)
  }

  return pagesList
})

const remove = (arr, cb) => {
  const newArr = []

  arr.forEach((item) => {
    if (!cb(item)) {
      newArr.push(item)
    }
  })

  return newArr
}

const checked = (isChecked, client) => {
  if (isChecked) {
    checkedRows.value.push(client)
  } else {
    checkedRows.value = remove(checkedRows.value, (row) => row.id === client.id)
  }
}
</script>

<template>
  <CardBoxModal  v-model="isModalActive" title="Hotel Information">
    <div v-if="hotelShow">
      <div class="border-t border-gray-100">
        <dl class="divide-y divide-gray-100">
          <div class="px-4 pt-6 sm:grid sm:grid-cols-2 sm:gap-2 sm:px-0">
            <dt class="text-sm font-medium leading-6 text-gray-900"><b>Name:</b> {{hotelShow?.name}}</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0"><b>Nit:</b> {{hotelShow?.nit}}</dd>
            <dt class="text-sm font-medium leading-6 text-gray-900"><b>Location:</b> {{hotelShow?.address}}, {{hotelShow?.city?.name}}</dt>
            <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-1 sm:mt-0"><b>Number of rooms:</b> {{hotelShow?.num_rooms}}</dd>
          </div>
        </dl>
      </div>
    </div>
  </CardBoxModal>

  <CardBoxModal v-model="isModalDangerActive" @confirm="handleDelete" title="Please confirm" button-label="Delete" button="danger" has-cancel>
    <p>Are you sure you want to <b>delete</b> the hotel?</p>
    <p>The hotel cannot be recovered.</p>
  </CardBoxModal>

  <table>
    <thead>
      <tr>
        <th v-if="checkable" />
        <th>Id</th>
        <th>Name</th>
        <th>Nit</th>
        <th>Address</th>
        <th>City</th>
        <th v-if="options" />
      </tr>
    </thead>
    <tbody>
      <tr v-for="Hotels in itemsPaginated" :key="Hotels.id">
        <TableCheckboxCell v-if="checkable" @checked="checked($event, Hotels)" />
        <td data-label="Id">
          {{ Hotels.id }}
        </td>
        <td data-label="Name">
          {{ Hotels.name }}
        </td>
        <td data-label="Nit">
          {{ Hotels.nit }}
        </td>
        <td data-label="Address">
          {{ Hotels.address }}
        </td>
        <td data-label="City">
          {{ Hotels.city.name }}
        </td>
        <td v-if="options" class="before:hidden lg:w-1 whitespace-nowrap">
          <BaseButtons type="justify-start lg:justify-end" no-wrap>
            <BaseButton color="info" :icon="mdiEye" small @click="showHotel(Hotels)" />
            <BaseButton
              color="danger"
              :icon="mdiTrashCan"
              small
              @click="()=>{
                isModalDangerActive = true
                hotelShow = Hotels
              }"
            />
          </BaseButtons>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
    <BaseLevel>
      <BaseButtons>
        <BaseButton
          v-for="page in pagesList"
          :key="page"
          :active="page === currentPage"
          :label="page + 1"
          :color="page === currentPage ? 'lightDark' : 'whiteDark'"
          small
          @click="currentPage = page"
        />
      </BaseButtons>
      <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
    </BaseLevel>
  </div>
</template>
