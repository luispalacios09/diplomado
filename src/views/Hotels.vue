<script setup>
import { mdiHomeModern, mdiPlus } from "@mdi/js";
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import { ref } from "vue";
import TableSampleHotels from "../components/TableSampleHotels.vue";
import { useMainStore } from "../stores/main";
import BaseButton from "../components/BaseButton.vue";
import CardBoxModal from "../components/CardBoxModal.vue";
import SelectList from "../components/SelectList.vue";
import { createHotel } from "../Api/Hotels";
import CardFormHotel from "../components/CardFormHotel.vue";
const mainStore = useMainStore();
const isModalActive = ref(false)
const openModal = () => {
  mainStore.hotelSelect.value = null
  isModalActive.value = true
}
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <CardFormHotel v-model="isModalActive"/>
      <SectionTitleLineWithButton :icon="mdiHomeModern" title="Hotels" main>
        <BaseButton
          color="green"
          :icon="mdiPlus"
          small
          @click="openModal"
        />
      </SectionTitleLineWithButton>

      <CardBox class="mb-6" has-table v-if="mainStore.hotels">
        <TableSampleHotels :items="mainStore.hotels" checkable/>
      </CardBox>

    </SectionMain>
  </LayoutAuthenticated>
</template>
