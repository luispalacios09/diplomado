<script setup>
import { mdiBed, mdiPlus } from "@mdi/js";
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import { ref } from "vue";
import TableSampleRooms from "../components/TableSampleRooms.vue";
import { useMainStore } from "../stores/main";
import BaseButton from "../components/BaseButton.vue";
import CardFormHotel from "../components/CardFormHotel.vue";
import CardFormRoom from "../components/CardFormRoom.vue";
const mainStore = useMainStore();
const isModalActive = ref(false)

const openModal = () => {
  mainStore.roomSelect.value = null
  isModalActive.value = true
}
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <CardFormRoom v-model="isModalActive"/>
      <SectionTitleLineWithButton :icon="mdiBed" title="Rooms" main>
        <BaseButton
          color="green"
          :icon="mdiPlus"
          small
          @click="openModal"
        />
      </SectionTitleLineWithButton>

      <CardBox class="mb-6" has-table v-if="mainStore.hotels">
        <TableSampleRooms :items="mainStore.hotels" checkable/>
      </CardBox>

    </SectionMain>
  </LayoutAuthenticated>
</template>
