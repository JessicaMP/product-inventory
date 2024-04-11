<script setup>
import { RouterView } from 'vue-router'
import SideBar from '@/components/SideBar/SideBar.vue'
</script>

<template>
  <div class="flex h-screen">
    <SideBar class="hidden sm:block" />
    <div class="container mx-auto">
      <RouterView />
    </div>
  </div>
</template>
