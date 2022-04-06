<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <ItemCard
        v-for="Item in Items"
        :key="Item.id"
        :id="Item.id"
        :title="Item.name"
        :description="Item.subtitle"
        :image="Item.thumbnails"
      />
    </div>
  </div>
</template>

<script setup>
import ItemCard from '@/components/ItemCard.vue';
import { ref, onMounted } from 'vue';
const axios = require('axios');

const Items = ref([]);

async function getItemsData() {
  try {
    const response = await axios.get('http://zullkit-backend.buildwithangga.id/api/products')
    const res = response.data
    Items.value = res.data.data
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getItemsData();
})
</script>