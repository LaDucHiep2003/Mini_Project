

<template>
    <div class="shadow-shadow-1 header">
        <div class="container mx-auto py-4 flex justify-between items-center ">
            <RouterLink :to="{ name : 'Home'}">
                <img src="https://hocaz.vn/images/home/logo.svg" alt="">
            </RouterLink>
                <div class="flex gap-10 text-base font-semibold items-center">
                    <div class="block p-0">
                        <RouterLink :to="{ name : 'de-thi-dgnl'}">
                            <div class="p-3 flex nav  items-center">
                                <span class="transition-all duration-500">Đề thi ĐGNL</span>
                            </div>
                        </RouterLink>
                    </div>
                    <div class="block p-0 relative item-menu">
                        <RouterLink to="/">
                            <div class="p-3 flex nav  items-center">
                                <span class="transition-all duration-500">THCS</span>
                            </div>
                        </RouterLink>
                        <div class="w-[200px] bg-white absolute rounded shadow-shadow-1 z-[2] hidden navbar">
                            <div class="py-[10px] px-4 text-color-5 font-normal hover:bg-bg-1">Lớp 6</div>
                            <div class="py-[10px] px-4 text-color-5 font-normal hover:bg-bg-1">Lớp 7</div>
                            <div class="py-[10px] px-4 text-color-5 font-normal hover:bg-bg-1">Lớp 8</div>
                            <div class="py-[10px] px-4 text-color-5 font-normal hover:bg-bg-1">Lớp 9</div>
                        </div>
                    </div>
                    <div class="block p-0 relative item-menu">
                        <RouterLink to="/">
                            <div class="p-3 flex nav  items-center">
                                <span class="transition-all duration-500">THPT</span>
                            </div>
                        </RouterLink>
                        <div class="w-[200px] bg-white absolute rounded shadow-shadow-1 z-[2] hidden navbar">
                            <div class="py-[10px] px-4 text-color-5 font-normal hover:bg-bg-1">Lớp 10</div>
                            <div class="py-[10px] px-4 text-color-5 font-normal hover:bg-bg-1">Lớp 11</div>
                            <div class="py-[10px] px-4 text-color-5 font-normal hover:bg-bg-1">Lớp 12</div>
                        </div>
                    </div>
                    <div class="block p-0">
                        <RouterLink to="/">
                            <div class="p-3 flex nav  items-center">
                                <span class="transition-all duration-500">Tài lệu</span>
                            </div>
                        </RouterLink>
                    </div>
                  <div class="flex items-center justify-center">
                    <button @click="openModal" class="min-h-12 border border-color-2 text-color-2 font-semibold bg-white px-5 text-base
                      rounded-lg hover:bg-color-2 hover:text-white transition-all duration-300">Đăng nhập</button>
                  </div>
                  <TransitionRoot appear :show="isOpen" as="template">
                    <Dialog as="div" @close="closeModal" class="relative z-10">
                      <TransitionChild
                          as="template"
                          enter="duration-300 ease-out"
                          enter-from="opacity-0"
                          enter-to="opacity-100"
                          leave="duration-200 ease-in"
                          leave-from="opacity-100"
                          leave-to="opacity-0"
                      >
                        <div class="fixed inset-0 bg-black/25" />
                      </TransitionChild>

                      <div class="fixed inset-0 overflow-y-auto">
                        <div
                            class="flex min-h-full items-center justify-center p-4 text-center"
                        >
                          <TransitionChild
                              as="template"
                              enter="duration-300 ease-out"
                              enter-from="opacity-0 scale-95"
                              enter-to="opacity-100 scale-100"
                              leave="duration-200 ease-in"
                              leave-from="opacity-100 scale-100"
                              leave-to="opacity-0 scale-95"
                          >
                            <DialogPanel
                                class="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white px-6 pt-16 pb-6 text-left align-middle shadow-xl transition-all"
                            >
                              <DialogTitle
                                  as="h3"
                                  class="text-center text-2xl font-semibold text-color-8"
                              >
                                Đăng nhập
                              </DialogTitle>
                              <div class="mt-2">
                                <div class="w-full h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-5">
                                  <v-icon name="fa-regular-user" scale="1.3" />
                                  <input placeholder="Nhập tài khoản " class="outline-none ml-3 text-base flex-1">
                                </div>
                                <div class="w-full h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-5">
                                  <v-icon name="fa-lock" scale="1.3" />
                                  <input placeholder="Nhập mật khẩu " class="outline-none ml-3 text-base flex-1">
                                </div>
                                <div class="mt-5 text-lg font-semibold text-color-3">Quên mật khẩu </div>
                                <div class="mt-6 text-center">
                                  <button class="min-h-12 w-52 border border-color-2 text-white font-semibold bg-color-2 px-5 text-lg
                                      rounded-md transition-all duration-300 ">Đăng nhập</button>
                                </div>
                                <div class="text-center mt-6 text-base">Bạn chưa có tài khoản? <span class="text-color-3" >Đăng ký ngay</span></div>
                              </div>
                            </DialogPanel>
                          </TransitionChild>
                        </div>
                      </div>
                    </Dialog>
                  </TransitionRoot>
                </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const isOpen = ref(false)

function closeModal() {
  isOpen.value = false
}
function openModal() {
  isOpen.value = true
}
</script>