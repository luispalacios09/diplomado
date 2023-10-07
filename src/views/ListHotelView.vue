<script setup>
import Container from "@/components/Container.vue";
</script>

<template>
  <Container>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
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
        <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Monteria
          </th>
          <td class="px-6 py-4">
            Hotel Silver
          </td>
          <td class="px-6 py-4">
            12312312312
          </td>
          <td class="px-6 py-4">
            Cr 12 #54-65
          </td>
          <td class="px-6 py-4">
            <a href="#"
               class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver mas...</a>
          </td>
          <td class="px-6 py-4">
            <a href="#"
               class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a>
          </td>
          <td class="px-6 py-4">
            <a href="#"
               class="font-medium text-red-600 dark:text-red-500 hover:underline">Eliminar</a>
          </td>
        </tr>
        <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Sincelejo
          </th>
          <td class="px-6 py-4">
            Hotel White
          </td>
          <td class="px-6 py-4">
            545678923
          </td>
          <td class="px-6 py-4">
            Cr 89 #21-89
          </td>
          <td class="px-6 py-4">
            <a href="#"
               class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver mas...</a>
          </td>
          <td class="px-6 py-4">
            <a href="#"
               class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a>
          </td>
          <td class="px-6 py-4">
            <a href="#"
               class="font-medium text-red-600 dark:text-red-500 hover:underline">Eliminar</a>
          </td>
        </tr>
        <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Arboletes
          </th>
          <td class="px-6 py-4">
            Hotel Magic
          </td>
          <td class="px-6 py-4">
            5609784523
          </td>
          <td class="px-6 py-4">
            Cr 89 # 78-43
          </td>
          <td class="px-6 py-4">
            <a href="#"
               class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Ver mas...</a>
          </td>
          <td class="px-6 py-4">
            <a href="#"
               class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Editar</a>
          </td>
          <td class="px-6 py-4">
            <a href="#"
               class="font-medium text-red-600 dark:text-red-500 hover:underline">Eliminar</a>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </Container>
</template>

<style scoped>

</style>