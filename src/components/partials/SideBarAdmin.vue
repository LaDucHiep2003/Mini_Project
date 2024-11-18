
<template>
  <div class="fixed left-0 top-0 w-72 h-full shadow-shadow-1 p-4 z-50 sidebar-menu transition-transform bg-gray-100" :class="{ '-translate-x-full': isSidebarOpen }">
    <a href="#" class="flex items-center pb-4 border-b border-b-gray-800">
      <img src="https://placehold.co/32x32" alt="" class="w-8 h-8 rounded object-cover">
      <span class="text-lg font-semibold ml-3">Giáo Viên</span>
    </a>
    <ul class="mt-4">
      <li class="mb-3 group active">
        <RouterLink :to="{ name : 'dashboard'}">
          <div class="flex items-center py-2 px-4  rounded-lg border-2 border-color-2 hover:bg-color-11 text-color-4 hover:text-white" :class="{ 'bg-color-11 text-white': $route.name === 'dashboard' }">
            <i class="ri-home-2-line mr-3 text-lg"></i>
            <span class="text-base font-semibold ">Dashboard</span>
          </div>
        </RouterLink>
      </li>
      <li class="mb-3 group">
        <div class="w-full ">
          <div class="mx-auto w-full border-2 border-color-2 rounded-lg">
            <Disclosure v-slot="{ open }">
              <DisclosureButton
                  class="flex w-full justify-between  items-center rounded-md py-2 px-4 text-color-4 hover:bg-color-11 hover:text-white"
                  :class="{ 'bg-color-11 text-white': $route.name === 'danh-sach-bai-thi' }"
              >
                <RouterLink :to="{ name : 'danh-sach-bai-thi'}" class="flex items-center font-semibold">
                  <div>
                    <i class="ri-instance-line mr-3 text-lg"></i>
                    <span class="text-base">Bài thi</span>
                  </div>
                </RouterLink>
                <i class="ri-arrow-up-s-line " :class="open ? 'rotate-180 transform' : 'rotate-90 transform'"></i>
              </DisclosureButton>
              <DisclosurePanel>
                <ul class="pl-7 mt-2">
                  <li class="mb-4">
                    <RouterLink :to="{ name : 'danh-sach-bai-thi'}" class="text-color-5 text-sm font-medium flex items-center hover:text-color-11 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Danh sách bài thi</RouterLink>
                  </li>
                  <li class="mb-4">
                    <RouterLink :to="{ name : 'them-bai-thi'}" class="text-color-5 text-sm font-medium flex items-center hover:text-color-11 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Tạo bài thi</RouterLink>
                  </li>
                  <li class="mb-4">
                    <RouterLink to="/" class="text-color-5 text-sm flex items-center font-medium hover:text-color-11 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Bài thi đã xóa</RouterLink>
                  </li>
                </ul>

              </DisclosurePanel>
            </Disclosure>

          </div>
        </div>
      </li>
      <li class="mb-3 group">
        <div class="w-full ">
          <div class="mx-auto w-full border-2 border-color-2 rounded-lg">
            <Disclosure v-slot="{ open }">
              <DisclosureButton
                  class="flex w-full justify-between  items-center rounded-md py-2 px-4 hover:bg-color-11 text-color-4 hover:text-white"
                  :class="{ 'bg-color-11 text-white': $route.name === 'danh-sach-danh-muc' }"
              >
                <RouterLink :to="{ name : 'danh-sach-danh-muc'}" class="flex items-center font-semibold">
                  <div>
                    <i class="ri-instance-line mr-3 text-lg"></i>
                    <span class="text-base">Danh mục</span>
                  </div>
                </RouterLink>
                <i class="ri-arrow-up-s-line" :class="open ? 'rotate-180 transform' : 'rotate-90 transform'"></i>
              </DisclosureButton>
              <DisclosurePanel>
                <ul class="pl-7 mt-2">
                  <li class="mb-4">
                    <RouterLink :to="{ name : 'danh-sach-danh-muc'}" class="text-color-5 text-sm flex items-center hover:text-color-11
                       before:w-1 before:h-1 before:rounded-full font-medium before:bg-gray-300 before:mr-3 ">Danh sách danh mục</RouterLink>
                  </li>
                  <li class="mb-4">
                    <RouterLink :to="{ name : 'them-danh-muc'}" class="text-color-5  font-medium text-sm flex items-center hover:text-color-11
                      before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Tạo danh mục bài thi</RouterLink>
                  </li>
                  <li class="mb-4">
                    <RouterLink to="/" class="text-color-5 text-sm flex items-center font-medium hover:text-color-11 before:contents-['']
                      before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Danh mục đã xóa</RouterLink>
                  </li>
                </ul>

              </DisclosurePanel>
            </Disclosure>

          </div>
        </div>
      </li>
      <li class="mb-3 group">
        <div class="w-full ">
          <div class="mx-auto w-full">
            <Disclosure v-slot="{ open }">
              <DisclosureButton
                  class="flex w-full justify-between  items-center rounded-md py-2 px-4 text-color-4 hover:bg-color-11 hover:text-white"
                  :class="{ 'bg-color-11 text-white': $route.name === 'danh-sach-cau-hoi' }"
              >
                <RouterLink :to="{ name : 'danh-sach-cau-hoi'}" class="flex items-center   font-semibold">
                  <div>
                    <i class="ri-instance-line mr-3 text-lg"></i>
                    <span class="text-base">Câu hỏi</span>
                  </div>
                </RouterLink>
                <i class="ri-arrow-up-s-line" :class="open ? 'rotate-180 transform' : 'rotate-90 transform'"></i>
              </DisclosureButton>
              <DisclosurePanel>
                <ul class="pl-7 mt-2">
                  <li class="mb-4">
                    <RouterLink :to="{ name : 'danh-sach-cau-hoi'}" class="text-color-5 text-sm flex items-center hover:text-color-11
                       before:w-1 before:h-1 before:rounded-full font-medium before:bg-gray-300 before:mr-3 ">Danh sách câu hỏi</RouterLink>
                  </li>
                  <li class="mb-4">
                    <RouterLink :to="{ name : 'them-cau-hoi'}" class="text-color-5  font-medium text-sm flex items-center hover:text-color-11
                      before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Tạo câu hỏi</RouterLink>
                  </li>
                  <li class="mb-4">
                    <RouterLink to="/" class="text-color-5 text-sm flex items-center font-medium hover:text-color-11 before:contents-['']
                      before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Câu hỏi đã xóa</RouterLink>
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
