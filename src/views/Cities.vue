<script setup>
import { mdiCityVariant } from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import TableSampleCities from "../components/TableSampleCities.vue";
import { useMainStore } from "../stores/main";

const mainStore = useMainStore();

</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiCityVariant" title="Cities" main>

      </SectionTitleLineWithButton>

      <CardBox class="mb-6" has-table v-if="mainStore.cities">
        <TableSampleCities :items="mainStore.cities" :options="false"/>
      </CardBox>

    </SectionMain>
  </LayoutAuthenticated>
</template>
