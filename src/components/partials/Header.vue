

<template>
    <div class="shadow-shadow-1 header">
        <div class="container mx-auto py-4 flex justify-between items-center ">
            <RouterLink :to="{ name : 'Home'}">
                <img src="https://hocaz.vn/images/home/logo.svg" alt="" class="max-lg:h-12">
            </RouterLink>
                <div class="flex gap-10 text-base font-semibold items-center">
                    <div class="block p-0">
                        <RouterLink :to="{ name : 'de-thi-dgnl'}">
                            <div class="p-3 flex nav items-center transition-all duration-300" :class="{ 'text-color-2': $route.name === 'de-thi-dgnl' }">
                                <span class="transition-all duration-500 max-lg:hidden max-xl:text-sm">Đề thi ĐGNL</span>
                            </div>
                        </RouterLink>
                    </div>
                    <div class="block p-0 relative item-menu">
                        <RouterLink to="/">
                            <div class="p-3 flex nav  items-center">
                                <span class="transition-all duration-500 max-lg:hidden max-xl:text-sm">THCS <i class="ri-arrow-down-s-line"></i></span>
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
                                <span class="transition-all duration-500 max-lg:hidden max-xl:text-sm">THPT <i class="ri-arrow-down-s-line"></i></span>
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
                                <span class="transition-all duration-500 max-lg:hidden max-xl:text-sm">Tài lệu</span>
                            </div>
                        </RouterLink>
                    </div>
                  <div class="flex items-center justify-center">
                    <button @click="openModal" class="max-h-12 border border-color-2 text-color-2 font-semibold bg-white px-5 py-2 text-base
                      rounded-lg hover:bg-color-2 hover:text-white transition-all duration-300 max-xl:text-sm">Đăng nhập</button>
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
                            class="flex min-h-full items-center justify-center p-4 text-center relative"
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
                                class="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white px-6 pt-16 pb-6 text-left align-middle shadow-xl transition-all"
                            >
                              <DialogTitle
                                  as="h3"
                                  class="text-center text-2xl font-semibold text-color-8 max-xl:text-sm"
                              >
                                Đăng nhập
                              </DialogTitle>
                              <div :onclick="closeModal" class="absolute top-5 right-10 text-color-10 font-semibold text-2xl shadow-shadow-1 w-10 h-10 flex justify-center items-center rounded-full cursor-pointer">x</div>
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
                                <div class="text-center mt-6 text-base">Bạn chưa có tài khoản? <span :onclick="openModalRegister" class="text-color-3 cursor-pointer">Đăng ký ngay</span></div>
                              </div>
                            </DialogPanel>
                          </TransitionChild>
                        </div>
                      </div>
                    </Dialog>
                  </TransitionRoot>
                  <TransitionRoot appear :show="isOpenRegister" as="template">
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
                            class="flex min-h-full items-center justify-center p-4 text-center relative"
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
                                class="w-full max-w-2xl transform rounded-2xl bg-white px-6 pt-16 pb-6 text-left align-middle shadow-xl transition-all"
                            >
                              <DialogTitle
                                  as="h3"
                                  class="text-center text-2xl font-semibold text-color-8"
                              >
                                Đăng ký
                              </DialogTitle>
                              <div @click="closeModal" class="absolute top-5 right-10 text-color-10 font-semibold text-2xl shadow-shadow-1 w-10 h-10 flex justify-center items-center rounded-full cursor-pointer">x</div>
                              <div class="mt-2">
                                <div class="grid grid-cols-2 gap-5">
                                  <div class="w-full h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-5">
                                    <v-icon name="fa-regular-user" scale="1.3" />
                                    <input placeholder="Nhập tài khoản " class="outline-none ml-3 text-base flex-1">
                                  </div>
                                  <div class="w-full h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-5">
                                    <v-icon name="fa-envelope" scale="1.3" />
                                    <input placeholder="Email" class="outline-none ml-3 text-base flex-1">
                                  </div>
                                </div>
                                <div class="grid grid-cols-2 gap-5">
                                  <div class="w-full h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-5">
                                    <v-icon name="fa-regular-user" scale="1.3" />
                                    <input placeholder="Nhập tên" class="outline-none ml-3 text-base flex-1">
                                  </div>
                                  <div class="w-full h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-5">
                                    <v-icon name="fa-phone-alt" scale="1.3" />
                                    <input placeholder="Nhập số điện thoại" class="outline-none ml-3 text-base flex-1">
                                  </div>
                                </div>
                                <div class="grid grid-cols-2 gap-5">
                                  <div class="w-full h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-5">
                                    <v-icon name="fa-lock" scale="1.3" />
                                    <input placeholder="Nhập mật khẩu " class="outline-none ml-3 text-base flex-1">
                                  </div>
                                  <div class="w-full h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-5 relative">
                                    <div class="outline-none ml-3 text-base flex-1">
                                      <input
                                          :value="selectedOption"
                                          @focus="showDropdown = true"
                                          class="w-full cursor-pointer outline-none"
                                          readonly
                                      >
                                      <div class="absolute my-2 top-0 left-0 min-w-[268px] bg-white rounded-md w-full"
                                           v-if="showDropdown"
                                           style="box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
                                           transition: opacity 322ms cubic-bezier(0.4, 0, 0.2, 1), transform 214ms cubic-bezier(0.4, 0, 0.2, 1);
                                           ">
                                        <ul class="py-2">
                                          <li class="flex justify-items-start items-center text-color-14 cursor-pointer py-[6px] px-4 whitespace-nowrap text-base bg-color-12 ">Chọn lớp của bạn</li>
                                          <li v-for="(option, index) in options"
                                              :key="index"
                                              @click="selectOption(option)"
                                              class="flex justify-items-start items-center cursor-pointer py-[6px] px-4 whitespace-nowrap text-base
                                              hover:bg-color-13">{{ option }}</li>
                                        </ul>
                                      </div>
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                        <path d="M12 14L8 10H16L12 14Z"></path>
                                    </svg>
                                  </div>
                                </div>
                                <div class="w-full h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-5">
                                  <v-icon name="fa-lock" scale="1.3" />
                                  <input placeholder="Nhập lại mật khẩu " class="outline-none ml-3 text-base flex-1">
                                </div>
                                <div class="mt-6 text-center">
                                  <button class="min-h-12 w-52 border border-color-2 text-white font-semibold bg-color-2 px-5 text-lg
                                      rounded-md transition-all duration-300 ">Đăng ký ngay</button>
                                </div>
                                <div class="text-center mt-6 text-base">Bạn đã có tài khoản? <span :onclick="closeModalRegister" class="text-color-3 cursor-pointer" >Đăng nhập ngay</span></div>
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
const isOpenRegister = ref(false)
const showDropdown = ref(false);
const selectedOption = ref("");

// Hàm xử lý chọn option
const selectOption = (option) => {
  selectedOption.value = option;
  showDropdown.value = false;
};
const options = ref(["Giáo viên", "Lớp 6", "Lớp 7", "Lớp 8","Lớp 9","Lớp 10"]);

function closeModal() {
  isOpen.value = false
  isOpenRegister.value = false
}
function openModal() {
  isOpen.value = true
}
function closeModalRegister() {
  isOpenRegister.value = false
  isOpen.value = true
}
function openModalRegister() {
  isOpenRegister.value = true
  isOpen.value = false
}

</script>