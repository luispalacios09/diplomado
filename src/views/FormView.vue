<script setup>
import NavView from "@/components/NavView.vue";
import SideView from "@/components/SideView.vue";
import { ref, onMounted } from 'vue'
import axios from "axios";

const ciudades = ref([])
// const types_hab = ref([])
const errores = ref([])

const formulario = ref({
  'city_id': null,
  'name': null,
  'nit': null,
  'address': null,
  'num_rooms': null
});

onMounted(() => {
  axios.get('cities')
    .then(function (response) {
      ciudades.value = response.data
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

function enviar() {
  axios.post('hotels', formulario.value)
    .then(function (response) {
        console.log(response.data)
    })
    .catch(function (error) {
      errores.value = error.response.data.errors
    });
}

</script>

<template>
  <NavView></NavView>
  <SideView></SideView>
  <div class="pl-40">
    <div class="bg-gray-50 w-full">
      <div class="p-10">
        <div class="text-2xl mb-8">Registrar hotel</div>

        <form>
          <div class="grid md:grid-cols-2 md:gap-6">

            <div class="relative z-0 w-full mb-6 group">
              <label for="city"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ciudad*</label>
              <select v-model="formulario.city_id" id="city"
                class="cajatexto  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                <option selected>Seleccione una ciudad...</option>
                <option v-for="ciudad in ciudades" :key="ciudad.id">{{ ciudad.name }}</option>
            </select>
            <p v-if="errores.city_id" class="mt-2 text-sm text-red-600 dark:text-red-500"><span
                class="font-medium">Oops!</span>{{ errores.city_id[0] }}</p>
          </div>

          <div class="relative z-0 w-full mb-6 group">
            <label for="first_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre*</label>
            <input v-model="formulario.name" type="text" id="first_name"
              class="cajatexto  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder="Nombre del Hotel" required />
            <p v-if="errores.name" class="mt-2 text-sm text-red-600 dark:text-red-500"><span
                  class="font-medium">Oops!</span>{{ errores.name[0] }}</p>
            </div>

            <div class="relative z-0 w-full mb-6 group">
              <label for="nit"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NIT*</label>
              <input v-model="formulario.nit" type="text" id="nit"
                class="cajatexto  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="NIT del hotel" required />
              <p v-if="errores.nit" class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span>{{ errores.nit[0] }}</p>
            </div>

            <div class="relative z-0 w-full mb-6 group">
              <label for="address"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dirección*</label>
              <input v-model="formulario.address" type="text" id="address"
                class="cajatexto  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder="Ubicacion del hotel" required />
              <p v-if="errores.address" class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span>{{ errores.address[0] }}</p>
            </div>

            <div class="relative z-0 w-full mb-6 group">
              <label for="number_max"
                class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">#
                max de habitaciones*</label>
              <input v-model="formulario.num_rooms" type="number" id="number_max"
                class="cajatexto  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                required />
              <p v-if="errores.num_rooms" class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span>{{ errores.num_rooms[0] }}</p>
            </div>

            <!-- <div class="relative z-0 w-full mb-6 group">
                <label for="type_hab"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tipo
                  de Habitacion*</label>
                <select id="type_hab"
                  class="cajatexto  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" " required>
                  <option selected>seleccione un tipo de habitacion</option>
                  <option v-for="type_hab in  types_hab" :value="type_hab.id">{{ type_hab.name }}</option>
                </select>
                <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oops!</span> El campo Tipo
                  de Habitacion es obligatorio</p>
              </div> -->

          </div>
          <button @click="enviar()" class="boton">Guardar</button>
        </form>

      </div>
    </div>
  </div>
</template>

<style scoped></style>