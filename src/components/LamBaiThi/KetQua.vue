
<template>
  <div>
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
          <div class="text-lg font-semibold">{{ data.correct_question}}</div>
        </div>
        <div class="flex flex-col gap-2 text-center items-center">
          <div class="bg-red-500 w-9 h-9 rounded-xl flex justify-center text-2xl items-center text-white font-bold">
            x
          </div>
          <div class="text-base font-medium text-color-4">Số câu sai</div>
          <div class="text-lg font-semibold">{{ data.incorrect_question }}</div>
        </div>
        <div class="flex flex-col gap-2 text-center items-center">
          <div class="bg-orange-400 w-9 h-9 rounded-xl flex justify-center items-center">
            <v-icon name="fa-regular-clock" class="text-white" />
          </div>
          <div class="text-base font-medium text-color-4">Thời gian</div>
          <div class="text-lg font-semibold">{{ formattedTime }}</div>
        </div>
      </div>
      <div class="flex justify-center items-center mt-10 gap-5">
        <RouterLink :to="`/giai-chi-tiet/${data.id_exam}`">
          <button class="min-h-12 w-[220px] border-2 border-green-700 font-semibold px-5 text-base
                                  rounded-lg bg-color-2 text-white transition-all duration-500 mt-5 hover:translate-y-[-6px]">Xem giải chi tiết</button>
        </RouterLink>
        <button class="min-h-12 w-[220px] border-2 border-color-5 text-color-5 font-semibold bg-white px-5 text-base
                                rounded-lg transition-all duration-500 mt-5 hover:translate-y-[-6px]">Làm lại</button>
      </div>
    </div>
    <div class="mt-20">
      <div class="bg-color-3 inline-block px-10 py-5 rounded-se-2xl rounded-ss-2xl">
        <div class="text-xl text-white font-semibold">Lịch sử luyện tập</div>
      </div>
      <div class="mt-6 px-5">
        <div v-for="item in listResults" key="item.id" class="bg-color-6 p-3 flex justify-between items-center rounded-lg">
          <div class="text-base font-medium text-color-5">Đề Thi Thử ĐGNL ĐHQG Hà Nội 2024 - Đề số 1</div>
          <div class="flex gap-3">
            <div class="text-base text-green-500 font-medium border border-green-400 px-2 py-1 rounded-md">{{ item.score }} điểm</div>
            <div class="text-base text-color-5 font-medium border border-color-5 px-5 py-1 rounded-md">{{ item.created_at }}</div>
            <div class="text-base font-medium border border-green-300 px-2 py-1 rounded-xl bg-green-600 text-white">Xem lại ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {computed, onMounted, ref} from "vue";
  import {getResult, getResultDetail} from "@/service/ResultService.js";
  import {useRoute} from "vue-router";

  export default {
    setup(){
      const data = ref([]);
      const route = useRoute();
      const id = route.params.id;
      const listResults = ref([]);

      const loadData = async () =>{
        const result = await getResultDetail(id);
        if(result){
          data.value = result.data;
        }
      }

      const loadListResult = async () =>{
        const result = await getResult();
        if(result){
          listResults.value = result.results.data;
        }
      }
      const formattedTime = computed(() => {
        const hours = Math.floor(data.value.duration / 3600);
        const minutes = Math.floor((data.value.duration % 3600) / 60);
        const seconds = data.value.duration % 60;
        const format = (num) => String(num).padStart(2, "0");

        return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
      });

      onMounted( async () =>{
        await loadData();
        await loadListResult();
      })

      return{
        data,
        formattedTime,
        listResults
      }
    }
  }
</script>