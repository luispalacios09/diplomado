<script setup>
import { mdiHomeModern } from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import { computed, onMounted, ref } from "vue";
import { getCities } from "../Api/Cities";
import TableSampleHotels from "../components/TableSampleHotels.vue";
import { useMainStore } from "../stores/main";

const mainStore = useMainStore();


</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiHomeModern" title="Hotels" main>

      </SectionTitleLineWithButton>

      <CardBox class="mb-6" has-table v-if="mainStore.hotels">
        <TableSampleHotels :items="mainStore.hotels" checkable/>
      </CardBox>

    </SectionMain>
  </LayoutAuthenticated>
</template>
