<template>
  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <ItemsCard
        v-for="Item in Items"
        :key="Item.id"
        :id="Item.id"
        :title="Item.title"
        :description="Item.description"
        :image="Item.image"
      />
    </div>
  </div>
</template>

<script setup>
import ItemsCard from '@/components/ItemsCard.vue';
import { ref } from '@vue/reactivity';

const Items = ref([
  { id: 1, title: 'Mobile UI Kit', description: 'Mobile UI Kit', image: 'items-1.jpg' },
  { id: 2, title: 'Online Doctor Consultation', description: 'Mobile UI Kit', image: 'items-2.jpg' },
  { id: 3, title: 'Banking Crypto', description: 'Mobile UI Kit', image: 'items-3.jpg' },
]);
</script>