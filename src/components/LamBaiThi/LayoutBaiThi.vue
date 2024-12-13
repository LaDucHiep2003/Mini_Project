
<template>
  <div class="container mx-auto">
    <div class="text-center mt-10 relative">
      <div class="text-2xl font-bold">{{ data.title }}</div>
      <div class="flex justify-center items-center gap-10 mt-10">
        <div class="flex gap-2 items-center">
          <v-icon name="fa-regular-question-circle" scale="1.2" />
          <div>{{ data.totalQuestion }} câu</div>
        </div>
        <div class="flex gap-2 items-center">
          <v-icon name="fa-regular-clock" scale="1.2" />
          <div v-if="data.duration_exam">{{ data.duration_exam }} phút</div>
          <div v-else>{{ data.duration }} phút</div>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import {onMounted, ref} from "vue";
import {getDetailExam} from "@/service/ExamService.js";
import {useRoute} from "vue-router";
import {getResultDetail} from "@/service/ResultService.js";

export default {
  setup(){
    const data = ref([]);
    const route = useRoute();
    const id = route.params.id;

    const loadData = async () =>{
      const result = await getDetailExam(id)
      if(result.data){
        data.value = result.data
        console.log(result)
      }else{
        const result = await getResultDetail(id);
        if(result){
          data.value = result.data
        }
      }
    }
    onMounted((loadData))

    return{
      data
    }
  }
}
</script>