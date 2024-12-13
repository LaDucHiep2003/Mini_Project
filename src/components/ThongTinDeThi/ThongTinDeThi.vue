
<template>
    <div>
        <div class="text-center mt-10 relative">
            <div class="text-2xl font-bold">{{ data.title }}</div>
            <div class="flex justify-center items-center gap-10 mt-10">
                <div class="flex gap-2 items-center">
                    <v-icon name="fa-regular-question-circle" scale="1.2" />
                    <div>{{ data.totalQuestion }} câu</div>
                </div>
                <div class="flex gap-2 items-center">
                    <v-icon name="fa-regular-clock" scale="1.2" />
                    <div>{{ data.duration }} phút</div>
                </div>
            </div>
            <div class="flex gap-2 items-center">
                <v-icon name="fa-file-alt" scale="1.2" />
                <div class="text-lg font-semibold text-color-4">Thông tin chung</div>
            </div>

            <div class="text-xl font-semibold text-center mt-10">Để làm bài hiệu quả</div>

            <div class="flex items-center gap-6 mt-6">
              <div class="flex items-center border border-color-7 p-4 rounded-lg w-1/2">
                <div class="text-lg font-semibold w-14">1</div>
                <div class="text-base ml-5">Ôn tập kiến thức trong chương trình học</div>
              </div>
              <div class="flex items-center border border-color-7 p-4 rounded-lg w-1/2">
                <div class="text-lg font-semibold w-14">2</div>
                <div class="text-base ml-5">Ôn tập kiến thức trong chương trình học</div>
              </div>
            </div>
          <RouterLink :to="`/luyen-tap/${data.id}`">
            <button class="min-h-10 w-52 border border-color-2 text-white font-semibold bg-color-2 px-5 text-base
                          rounded-md transition-all duration-300 mt-6">Làm bài </button>
          </RouterLink>
        </div>
    </div>
</template>
<script>
import {onMounted, ref} from "vue";
  import {getDetailExam} from "@/service/ExamService.js";
  import {useRoute} from "vue-router";

  export default {
    setup(){
      const data = ref([]);
      const route = useRoute();
      const id = route.params.id;

      const loadData = async () =>{
        const result = await getDetailExam(id)
        if(result){
          data.value = result.data
          console.log(result.data)
        }
      }
      onMounted((loadData))

      return{
        data
      }
    }
  }
</script>