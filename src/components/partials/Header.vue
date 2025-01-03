

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
                  <div v-if="token" class="w-56 text-right">
                    <Menu as="div" class="relative inline-block text-left">
                      <div>
                        <MenuButton
                            class="inline-flex w-full justify-center  px-4 py-2 text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                        >
                          <button class="flex justify-center items-center h-10 text-base font-semibold text-color-2 bg-white border border-color-2 rounded-md min-w-16 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM12.1597 16C10.1243 16 8.29182 16.8687 7.01276 18.2556C8.38039 19.3474 10.114 20 12 20C13.9695 20 15.7727 19.2883 17.1666 18.1081C15.8956 16.8074 14.1219 16 12.1597 16ZM12 4C7.58172 4 4 7.58172 4 12C4 13.8106 4.6015 15.4807 5.61557 16.8214C7.25639 15.0841 9.58144 14 12.1597 14C14.6441 14 16.8933 15.0066 18.5218 16.6342C19.4526 15.3267 20 13.7273 20 12C20 7.58172 16.4183 4 12 4ZM12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5ZM12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7Z"></path></svg>
                          </button>
                        </MenuButton>
                      </div>

                      <transition
                          enter-active-class="transition duration-100 ease-out"
                          enter-from-class="transform scale-95 opacity-0"
                          enter-to-class="transform scale-100 opacity-100"
                          leave-active-class="transition duration-75 ease-in"
                          leave-from-class="transform scale-100 opacity-100"
                          leave-to-class="transform scale-95 opacity-0"
                      >
                        <MenuItems
                            class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                        >
                          <div>
                            <MenuItem v-slot="{ active }">
                              <div class="py-[10px] px-4 text-color-5 font-normal hover:bg-bg-1">
                                <v-icon name="fa-regular-user" scale="1.2" /> {{ infoUser.name}}
                              </div>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                              <div class="py-[10px] px-4 text-color-5 font-normal hover:bg-bg-1">
                                <v-icon name="fa-graduation-cap" scale="1.5" /> Kết quả học tập
                              </div>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                              <div @click="handleLogout" class="py-[10px] px-4 text-color-5 font-normal hover:bg-bg-1">
                                <v-icon name="fa-sign-out-alt" scale="1.2" /> Đăng xuất
                              </div>
                            </MenuItem>

                          </div>
                        </MenuItems>
                      </transition>
                    </Menu>
                  </div>
                  <div v-else class="flex items-center justify-center" >
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
                                  <v-icon name="fa-envelope" scale="1.3" />
                                  <input v-model="dataLogin.email" placeholder="Nhập Email" class="outline-none ml-3 text-base flex-1">
                                </div>
                                <div class="w-full h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-5">
                                  <v-icon name="fa-lock" scale="1.3" />
                                  <input v-model="dataLogin.password" placeholder="Nhập mật khẩu " class="outline-none ml-3 text-base flex-1">
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
                                <div class="mt-5 text-lg font-semibold text-color-3">Quên mật khẩu </div>
                                <div class="mt-6 text-center">
                                  <button @click="handleLogin" class="min-h-12 w-52 border border-color-2 text-white font-semibold bg-color-2 px-5 text-lg
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
                                    <input v-model="sendData.username" placeholder="Nhập tài khoản " class="outline-none ml-3 text-base flex-1">
                                  </div>
                                  <div class="w-full h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-5">
                                    <v-icon name="fa-envelope" scale="1.3" />
                                    <input v-model="sendData.email" placeholder="Email" class="outline-none ml-3 text-base flex-1">
                                  </div>
                                </div>
                                <div class="grid grid-cols-2 gap-5">
                                  <div class="w-full h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-5">
                                    <v-icon name="fa-regular-user" scale="1.3" />
                                    <input v-model="sendData.name" placeholder="Nhập tên" class="outline-none ml-3 text-base flex-1">
                                  </div>
                                  <div class="w-full h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-5">
                                    <v-icon name="fa-phone-alt" scale="1.3" />
                                    <input v-model="sendData.phone" placeholder="Nhập số điện thoại" class="outline-none ml-3 text-base flex-1">
                                  </div>
                                </div>
                                <div class="grid grid-cols-2 gap-5">
                                  <div class="w-full h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-5">
                                    <v-icon name="fa-lock" scale="1.3" />
                                    <input v-model="sendData.password" placeholder="Nhập mật khẩu " class="outline-none ml-3 text-base flex-1">
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
                                  <button @click="handleRegister" class="min-h-12 w-52 border border-color-2 text-white font-semibold bg-color-2 px-5 text-lg
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
import {onMounted, ref} from 'vue'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import {getUserToken, login, register} from "@/service/UserService.js";
import Cookies from 'js-cookie';
import {useRouter} from "vue-router";

const isOpen = ref(false)
const isOpenRegister = ref(false)
const showDropdown = ref(false);
const selectedOption = ref("");
const router = useRouter();
const infoUser = ref({});

// Hàm xử lý chọn option
const selectOption = (option) => {
  selectedOption.value = option;
  showDropdown.value = false;
};
const options = ref(["Giáo viên", "Học sinh"]);

const token = Cookies.get("tokenStudent");

const loadUser = async () =>{
  try {
    const response = await fetch('http://localhost:3000/user/token', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (response.ok) {
      const data = await response.json();
      infoUser.value = data.user
    } else {
      const error = await response.json();
    }
  } catch (error) {
    console.error('Lỗi:', error);
  }
}
onMounted(loadUser);

const sendData = ref({
  name : '',
  password : '',
  email : '',
  role : '',
  username : '',
  phone : ''
})

const dataLogin = ref({
  email : '',
  password : '',
  role : ''
})

const handleLogin = async () =>{
  dataLogin.value.role = selectedOption.value;
  const result = await login(dataLogin.value);
  if(result){
    const jwt = result.jwtStudent || result.jwtTeacher;
    if(result.jwtStudent){
      Cookies.set("tokenStudent", jwt);
      isOpen.value = false;
    }else if(result.jwtTeacher){
      Cookies.set("tokenTeacher", jwt);
      router.push({ name : 'dashboard'})
    }
  }
}
const handleRegister = async () =>{
  sendData.value.role = selectedOption.value;
  const result = await register(sendData.value);
  if(result){
    isOpen.value = false;
    console.log("ok")
  }
}

const handleLogout = () =>{
  Cookies.remove("tokenStudent");
}

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