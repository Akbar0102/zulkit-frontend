<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <CategoryCard
        v-for="category in categories"
        :key="category.id"
        :title="category.name"
        :count="category.products.length"
        :image="category.thumbnails"
      />
    </div>
  </div>
</template>

<script setup>
import CategoryCard from '@/components/CategoryCard.vue';
import { ref, onMounted } from 'vue';
const axios = require('axios');

const categories = ref([]);

async function getCategoriesData() {
  try {
    const response = await axios.get('http://zullkit-backend.buildwithangga.id/api/categories?show_product=1&limit=4')
    const res = response.data
    categories.value = res.data.data
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getCategoriesData();
})

</script>