<script setup>

</script>

<template>
  <form>
    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 w-full mb-6 group">
        <select id="floating_city" class="cajatexto  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " required>
          <option selected>Seleccione una ciudad</option>
          <option value="MO">Monteria</option>
          <option value="CE">Cerete</option>
          <option value="AR">Arboletes</option>
          <option value="SI">Sincelejo</option>
        </select>
        <label for="floating_city"
               class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Ciudad*</label>
        <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span
            class="font-medium">Oops!</span> El campo ciudad es obligatorio</p>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input type="text" name="floating_first_name" id="floating_first_name"
               class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
               placeholder=" " required />
        <label for="floating_first_name"
               class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre*</label>
        <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span
            class="font-medium">Oops!</span> El campo nombre es obligatorio</p>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input type="text" name="floating_nit" id="floating_nit"
               class="cajatexto  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
               placeholder=" " required />
        <label for="floating_nit"
               class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">NIT*</label>
        <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span
            class="font-medium">Oops!</span> El campo NIT es obligatorio</p>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input type="text" name="floating_address" id="floating_address"
               class="cajatexto  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
               placeholder=" " required />
        <label for="floating_address"
               class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Dirección*</label>
        <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span
            class="font-medium">Oops!</span> El campo Dirección es obligatorio</p>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <input type="text" name="floating_number_max" id="floating_number_max"
               class="cajatexto  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
               placeholder=" " required />
        <label for="floating_number_max"
               class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"># max de habitaciones*</label>
        <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span
            class="font-medium">Oops!</span> El campo # max de habitaciones es obligatorio</p>
      </div>
      <div class="relative z-0 w-full mb-6 group">
        <select id="floating_type_hab" class="cajatexto  text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" " required>
          <option selected>seleccione un tipo de habitacion</option>
          <option value="ES">Estándar</option>
          <option value="JU">Junior</option>
          <option value="SU">Suite</option>
        </select>
        <label for="floating_type_hab"
               class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tipo de Habitacion*</label>
        <p class="mt-2 text-sm text-red-600 dark:text-red-500"><span
            class="font-medium">Oops!</span> El campo Tipo de Habitacion es obligatorio</p>
      </div>
    </div>
    <button type="submit" class="boton">Guardar</button>
  </form>
</template>

<style scoped>

</style>