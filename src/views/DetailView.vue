<template>
  <NavView></NavView>
    <SideView></SideView>
    <div class="pl-40">
    <div class="left-50 mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
      <div class="group relative">
        <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
          <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/160894730.jpg?k=d5ab2b349066c8048dff720eda6b9f76bf265e35ebd98db833521a7c6f653d84&o=" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." class="h-full w-full object-cover object-center">
        </div>
        <h3 class="mt-6 text-sm text-gray-500">
          <a href="#">
            <span class="absolute inset-0 text-base font-semibold text-gray-900"></span>
            Habitación deluxe con cama extragrande
          </a>
        </h3>
        <p class="text-base font-semibold text-gray-900">The double room features a seating area, a wardrobe, as well as a private bathroom boasting a shower and a hairdryer. The spacious air-conditioned double room offers a flat-screen TV with cable channels, soundproof walls, a minibar, a tea and coffee maker as well as city views.</p>
      </div>
      <div class="group relative">
        <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
          <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/138012489.jpg?k=4c952b609dc532e3aeb3806a4a9bb6fe951e9ebb8a02b33de66c761a80052aab&o=" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." class="h-full w-full object-cover object-center">
        </div>
        <h3 class="mt-6 text-sm text-gray-500">
          <a href="#">
            <span class="absolute inset-0"></span>
            Habitación doble Business
          </a>
        </h3>
        <p class="text-base font-semibold text-gray-900">The double room provides a wardrobe, a safe deposit box, as well as a private bathroom featuring a shower. The air-conditioned double room offers a flat-screen TV with cable channels, soundproof walls, a minibar, a tea and coffee maker as well as city views.</p>
      </div>
      <div class="group relative">
        <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
          <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/386153449.jpg?k=a9002ccbf5b2bd51d5ca142f8b5f6436029ff94928688bf1c54183bb7b081325&o=" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
        </div>
        <h3 class="mt-6 text-sm text-gray-500">
          <a href="#">
            <span class="absolute inset-0"></span>
            Habitación triple
          </a>
        </h3>
        <p class="text-base font-semibold text-gray-900">The triple room provides a wardrobe and a safe deposit box, as well as a private bathroom boasting a shower. The air-conditioned triple room features a flat-screen TV with cable channels, soundproof walls, a minibar, a tea and coffee maker as well as city views.</p>
      </div>
      <div class="group relative">
        <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
          <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/386153701.jpg?k=02a4950420fff7be51823563ccf4d6dcd4a5fa2f2642614b489fcb256cdea3a4&o=" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
        </div>
        <h3 class="mt-6 text-sm text-gray-500">
          <a href="#">
            <span class="absolute inset-0"></span>
            Habitación doble superior
          </a>
        </h3>
        <p class="text-base font-semibold text-gray-900"></p>
      </div>
      <div class="group relative">
        <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
          <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/173494239.jpg?k=64731f66bc0e185e216643b681ede583d8ed3ae08eeb988627f6faab4b2fced4&o=&hp=1" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
        </div>
        <h3 class="mt-6 text-sm text-gray-500">
          <a href="#">
            <span class="absolute inset-0"></span>
            Gym Hotel Sexta Avenida
          </a>
        </h3>
        <p class="text-base font-semibold text-gray-900"></p>
      </div>
      <div class="group relative">
        <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
          <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/386155677.jpg?k=7bac4294e17ecff1042ee7d9697a252d0b68d6766ef59e0198fcc03e2d54b3cb&o=&hp=1" alt="Collection of four insulated travel bottles on wooden shelf." class="h-full w-full object-cover object-center">
        </div>
        <h3 class="mt-6 text-sm text-gray-500">
          <a href="#">
            <span class="absolute inset-0"></span>
          </a>
        </h3>
        <p class="text-base font-semibold text-gray-900"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailView',
  components: { NavView, SideView }
}
import NavView from "@/components/NavView.vue";
import SideView from "@/components/SideView.vue";
</script>

<style scoped></style>