<script setup>
import NavView from "@/components/NavView.vue";
import SideView from "@/components/SideView.vue";
import { ref, onMounted } from 'vue'
import axios from "axios";

const hoteles = ref([])

onMounted(() => {
  axios.get('hotels')
    .then(function (response) {
      hoteles.value = response.data.data
      console.log(hoteles.value);
    })
    .catch(function (error) {
      console.log(error);
    });

  // axios.get('room-types')
  // .then(function (response) {
  //   types_hab.value = response.data
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
})
</script>

<template>
  <NavView></NavView>
  <SideView></SideView>
  <div class="pl-40">
  <div class="bg-gray-50 w-full">
      <div class="p-10">
        <div class="text-2xl mb-8">Listado general de hoteles</div>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  CIUDAD
                </th>
                <th scope="col" class="px-6 py-3">
                  NOMBRE
                </th>
                <th scope="col" class="px-6 py-3">
                  NIT
                </th>
                <th scope="col" class="px-6 py-3">
                  DIRECCIÓN
                </th>
                <th scope="col" class="px-6 py-3">
                  N° DE HABITACIONES
                </th>
                <th scope="col" class="px-6 py-3">
                  VER DETALLES
                </th>
                <th scope="col" class="px-6 py-3">
                  EDITAR
                </th>
                <th scope="col" class="px-6 py-3">
                  ELIMINAR
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="hotel in hoteles" :key="hotel.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ hotel.city.name }}
                </th>
                <td class="px-6 py-4">
                  {{ hotel.name }}
                </td>
                <td class="px-6 py-4">
                  {{ hotel.nit }}
                </td>
                <td class="px-6 py-4">
                  {{ hotel.address }}
                </td>
                <td class="px-6 py-4">
                  {{ hotel.num_rooms }}
                </td>
                <td class="px-6 py-4">
                  <a href="/Detail" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver mas...</a>
                </td>
                <td class="px-6 py-4">
                  <a href="/FormHotel" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a>
                </td>
                <td class="px-6 py-4">
                  <a href="#" class="font-medium text-red-600 dark:text-red-500 hover:underline">Eliminar</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
</div>
</template>
<style scoped></style>