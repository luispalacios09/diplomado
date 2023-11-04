<script setup>
import { computed, ref, watch } from "vue";
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/vue/20/solid'


const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  selected: Object,
  label: {
    type: String,
    default: ""
  },
  modelValue: {
    type: [String, Number, Boolean, Object],
    default: null
  },
})
// const emit = defineEmits(['update:','update-city'])
const emit = defineEmits(['update:modelValue', 'cancel', 'confirm'])

const value = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

</script>

<template>
  <Listbox as="div" v-model="value">
    <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900 dark:text-white">{{label}}</ListboxLabel>
    <div class="relative mt-2">
      <ListboxButton class="relative h-9 w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500  shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
        <span class="flex items-center">
<!--          <img :src="selected.avatar" alt="" class="h-5 w-5 flex-shrink-0 rounded-full" />-->
          <span class="ml-3 block truncate">{{ value?.name }}</span>
        </span>
        <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </ListboxButton>

      <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
        <ListboxOptions class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
          <ListboxOption as="template" v-for="item in items" :key="item.id" :value="item" v-slot="{ active, selected }">
            <li :class="[active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-3 pr-9']">
              <div class="flex items-center">
<!--                <img :src="item.avatar" alt="" class="h-5 w-5 flex-shrink-0 rounded-full" />-->
                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">{{ item.name }}</span>
              </div>

              <span v-if="selected" :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>

<style scoped>

</style>