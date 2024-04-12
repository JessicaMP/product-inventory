<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import SideBar from '@/components/SideBar/SideBar.vue'
import Navbar from '@/components/Navbar.vue'

const hover = ref(false)
</script>

<template>
  <div class="flex h-screen">
    <SideBar
      class="hidden sm:flex w-16 hover:w-44"
      :hover="hover"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    />
    <div class="container mx-auto space-y-4 sm:space-y-0">
      <Navbar class="block sm:hidden" />
      <RouterView />
    </div>
  </div>
</template>
