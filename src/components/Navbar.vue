<script setup>
import { ref } from 'vue'
import IconComponent from '@/components/ui/IconComponent.vue'
import SideBar from '@/components/SideBar/SideBar.vue'

const isOpenMenu = ref(false)

defineOptions({
  name: 'NavbarComponet'
})
</script>

<template>
  <div
    class="top-0 left-0 z-1000 w-full sticky"
    :class="{ 'h-full overflow-none scroll-none': isOpenMenu }"
  >
    <div class="bg-white shadow-md py-4 px-2 flex justify-between">
      <img
        src="https://i.ibb.co/dbC2HFM/Logo.png"
        alt="Isotipo OrganiClub"
        lazy="load"
        class="w-40"
      />

      <button
        class="hover:bg-[#6B99C3] hover:bg-opacity-20 text-[#16354D] p-2 rounded"
        @click="isOpenMenu = !isOpenMenu"
      >
        <IconComponent name="uil:bars" />
      </button>
    </div>
    <SideBar
      v-if="isOpenMenu"
      class="mt-2"
      :class="{ 'absolute top-0': isOpenMenu }"
      :hover="true"
      @close="isOpenMenu = false"
    />
  </div>
</template>
