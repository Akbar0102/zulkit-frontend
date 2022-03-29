<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
    <div class="container flex flex-wrap items-center justify-between mx-auto my-2">
      <logo />
      <navigation-links />
      <user-info />
    </div>
  </nav>
</template>

<script>
import Logo from '@/components/layouts/Logo.vue';
import NavigationLinks from '@/components/layouts/NavigationLinks.vue';
import UserInfo from '@/components/layouts/UserInfo.vue';

export default {
  name: 'Navbar',
  components: {
    Logo,
    NavigationLinks,
    UserInfo,
  },
};
</script>
