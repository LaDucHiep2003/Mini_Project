
<template>
  <div class="text-center mt-10 relative">
    <div class="flex gap-2 items-center">
      <v-icon name="fa-file-alt" scale="1.2" />
      <div class="text-lg font-semibold text-color-4">Kết quả bài thi</div>
    </div>
    <div class="flex justify-center items-center gap-[150px] mt-10">
      <div class="flex flex-col gap-2 text-center items-center">
        <div class="bg-green-600 w-9 h-9 rounded-xl flex justify-center items-center">
          <v-icon name="fa-check" class="text-white" />
        </div>
        <div class="text-base font-medium text-color-4">Đã làm</div>
        <div class="text-lg font-semibold">{{ selectedAnswers }}</div>
      </div>
      <div class="flex flex-col gap-2 text-center items-center">
        <div class="bg-gray-400 w-9 h-9 rounded-xl flex justify-center text-2xl items-center text-white font-bold">
          !
        </div>
        <div class="text-base font-medium text-color-4">Chưa làm</div>
        <div class="text-lg font-semibold">{{ blank_question }}</div>
      </div>
      <div class="flex flex-col gap-2 text-center items-center">
        <div class="bg-orange-400 w-9 h-9 rounded-xl flex justify-center items-center">
          <v-icon name="fa-regular-clock" class="text-white" />
        </div>
        <div class="text-base font-medium text-color-4">Thời gian</div>
        <div class="text-lg font-semibold">{{ formatTime(timeLeft) }}</div>
      </div>
    </div>
    <div class="flex justify-center items-center mt-10 gap-5">
      <button @click="onBack" class="min-h-12 w-[220px] border-2 border-green-700 font-semibold px-5 text-base
                              rounded-lg bg-color-2 text-white transition-all duration-500 mt-5 hover:translate-y-[-6px]">Tiếp tục làm</button>
      <button class="min-h-12 w-[220px] border-2 border-color-5 text-color-5 font-semibold bg-white px-5 text-base
                              rounded-lg transition-all duration-500 mt-5 hover:translate-y-[-6px]">Làm lại</button>
    </div>
  </div>
</template>
<script>
import {useRoute, useRouter} from "vue-router";

  export default {
    data(){
      return{
        timeLeft : 0,
        selectedAnswers : 0,
        blank_question : 0
      }
    },
    setup(){
      const router = useRouter()
      const onBack = () =>{
        router.go(-1)
      }

      return {
        onBack
      }
    },
    mounted() {
      const state = history.state;
      if (state) {
        this.timeLeft = state.timeLeft;
        this.selectedAnswers = state.selectedAnswers;
        this.blank_question = state.blank_question;
      }
    },
    methods :{
      formatTime(data){
        const hours = Math.floor(data / 3600);
        const minutes = Math.floor((data % 3600) / 60);
        const seconds = data % 60;
        const format = (num) => String(num).padStart(2, "0");

        return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
      }
    }
  }
</script>