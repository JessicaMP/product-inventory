<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import SideBar from '@/components/SideBar/SideBar.vue'
import Navbar from '@/components/Navbar.vue'

const hover = ref(false)
</script>

<template>
  <div class="flex h-screen bg-gray-100">
    <SideBar
      class="hidden sm:flex w-16 hover:w-44"
      :hover="hover"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    />
    <!-- container -->
    <div class="max-w-screen-xl w-full mx-auto space-y-4 sm:space-y-0">
      <div :class="{ 'sm:max-w-6xl mx-auto': hover }" class="px-0 sm:px-4 xl:px-0 w-full">
        <Navbar class="block sm:hidden" />
        <div class="px-2 sm:px-0">
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
