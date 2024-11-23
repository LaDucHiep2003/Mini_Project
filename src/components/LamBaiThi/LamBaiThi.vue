
<template>
  <div class="container mx-auto">
    <div class="text-center mt-10 relative">
      <div class="text-2xl font-bold">{{ data.title }}</div>

      <div class="flex gap-3 mt-6 justify-center items-center">
        <v-icon name="fa-regular-clock" scale="1.5" class="text-gray-500" />
        <div class="text-sm font-bold text-green-500">{{ formattedTime }}</div>
      </div>
      <div class="flex gap-5">
          <CauHoi />
          <BangCauHoi :data="data" />
      </div>
    </div>
  </div>
</template>

<script>
  import BangCauHoi from "@/components/LamBaiThi/BangCauHoi.vue";
  import CauHoi from "@/components/LamBaiThi/CauHoi.vue";
  import {useRoute} from "vue-router";
  import {computed, onMounted, ref} from "vue";
  import {getDetailExam} from "@/service/ExamService.js";

  export  default {
    components:{
      BangCauHoi,
      CauHoi
    },
    setup(){
      const route = useRoute();
      const id = route.params.id;
      const data = ref([]);

      const loadExam = async () =>{
        const result = await getDetailExam(id);
        if(result){
          data.value = result.data
          data.value.duration = data.value.duration * 60;
        }
      }
      const formattedTime = computed(() => {
        const hours = Math.floor(data.value.duration / 3600);
        const minutes = Math.floor((data.value.duration % 3600) / 60);
        const seconds = data.value.duration % 60;
        const format = (num) => String(num).padStart(2, "0");

        return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
      });

      onMounted(loadExam)

      return{
        data,
        formattedTime
      }
    }
  }
</script>