
<template>
  <div class="fixed left-0 top-0 w-64 h-full bg-gray-900 p-4 z-50 sidebar-menu transition-transform" :class="{ '-translate-x-full': isSidebarOpen }">
    <a href="#" class="flex items-center pb-4 border-b border-b-gray-800">
      <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded object-cover">
      <span class="text-lg font-semibold text-white ml-3">Giáo Viên</span>
    </a>
    <ul class="mt-4">
      <li class="mb-1 group active">
        <RouterLink :to="{ name : 'dashboard'}">
          <div class="flex items-center py-2 px-4 hover:bg-gray-950 hover:text-gray-100 rounded-md text-white" :class="{ 'bg-gray-800 ': $route.name === 'dashboard' }">
            <i class="ri-home-2-line mr-3 text-lg"></i>
            <span class="text-sm">Dashboard</span>
          </div>
        </RouterLink>
      </li>
      <li class="mb-1 group">
        <div class="w-full ">
          <div class="mx-auto w-full">
            <Disclosure v-slot="{ open }">
              <DisclosureButton
                  class="flex w-full justify-between items-center hover:bg-gray-950 hover:text-gray-100 rounded-md py-2 px-4"
                  :class="{ 'bg-gray-800 ': $route.name === 'danh-sach-bai-thi' }"
              >
                <RouterLink :to="{ name : 'danh-sach-bai-thi'}" class="flex items-center text-gray-300 ">
                  <div>
                    <i class="ri-instance-line mr-3 text-lg"></i>
                    <span class="text-sm">Bài thi</span>
                  </div>
                </RouterLink>
                <i class="ri-arrow-up-s-line text-color-6" :class="open ? 'rotate-180 transform' : 'rotate-90 transform'"></i>
              </DisclosureButton>
              <DisclosurePanel>
                <ul class="pl-7 mt-2">
                  <li class="mb-4">
                    <RouterLink :to="{ name : 'danh-sach-bai-thi'}" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Danh sách bài thi</RouterLink>
                  </li>
                  <li class="mb-4">
                    <RouterLink :to="{ name : 'them-bai-thi'}" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Tạo bài thi</RouterLink>
                  </li>
                  <li class="mb-4">
                    <RouterLink to="/" class="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Bài thi đã xóa</RouterLink>
                  </li>
                </ul>

              </DisclosurePanel>
            </Disclosure>

          </div>
        </div>
      </li>


    </ul>
  </div>
  <div class="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay" :class="{ hidden: !isSidebarOpen }"></div>
</template>
<script lang="ts">
import { defineComponent, onMounted, PropType, ref } from 'vue';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

export default defineComponent({
  props: {
    isSidebarOpen: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
  },
  components : {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  },

});

</script>
