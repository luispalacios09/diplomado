<template>
  <div class="container mx-auto">
    <form v-on:submit.prevent="login">
      <div class="mb-6">
        <label for="user" class="block mb-2 text-sm font-medium text-gray-900 text-black">Usuario</label>
        <input v-model="usuario" type="user" id="user"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-100 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
          placeholder="name123" required>
      </div>
      <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 text-black">Contraseña</label>
        <input v-model="password" type="password" id="password"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-100 border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
          placeholder="********" required>
      </div>
      <button type="submit"
        class="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Iniciar</button>
    </form>
    <div class="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 text-red-400" role="alert"
      v-if="error">
      <span class="font-medium">Danger alert!</span> Verifica que los datos sean correctos
    </div>
  </div>
</template>

<script>

export default {
  name: 'LoginView',
  components: {

  },
  data: function () {
    return {
      usuario: "",
      password: "",
      error: false,
      error_msg: "",
    }
  },
  methods: {
    login() {
      if (this.usuario == "admin" && this.password == "123") {
        this.$router.push('ListHotel');
      } else {
        this.error = true;
        this.error_msg = "Error";
      }

    }
  }
}
</script>
