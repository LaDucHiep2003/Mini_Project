
<template>
  <SideBarAdmin :isSidebarOpen="isSidebarOpen" />

  <main class="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main" :class="{ active: isSidebarOpen }">

    <HeaderAdmin :toggleSidebar="toggleSidebar"/>

    <slot />
  </main>

</template>

<script setup>
import { ref } from 'vue';
import SideBarAdmin from "@/components/partials/SideBarAdmin.vue";
import HeaderAdmin from "@/components/partials/HeaderAdmin.vue";

const isSidebarOpen = ref(false);

const toggleSidebar = (e) => {
  e.preventDefault();
  isSidebarOpen.value = !isSidebarOpen.value;
};

</script>