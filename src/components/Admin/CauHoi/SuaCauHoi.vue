

<template>
  <div class="p-10 mx-auto">
    <div class="text-[50px] text-color-11 font-great text-center">
      Sửa câu hỏi
    </div>
    <RouterLink :to="{ name : 'danh-sach-cau-hoi'}">
      <button class="min-h-9 border-2 border-green-700 font-semibold px-5 text-sm
               rounded-md bg-color-2 text-white transition-all duration-500 hover:translate-y-[-6px]">Danh sách câu hỏi</button>
    </RouterLink>
    <div class="pt-6">
      <div class="bg-white rounded-[20px] shadow-shadow-1">
        <div class="mt-2 px-5 py-5">
          <div class="flex justify-between items-center gap-5 flex-wrap">
            <div class="w-4/5">
              <label for="title" class="text-base font-medium text-color-4">Tiêu đề</label>
              <div class="w-full h-10 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-2">
                <input v-model="data.title" placeholder="Nhập tiêu đề" id="title" class="outline-none ml-3 text-color-4 text-base w-full">
              </div>
            </div>
            <div class="flex-1">
              <label for="totalQues" class="text-base font-medium text-color-4">Lớp học</label>
              <div class="w-full h-10 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-2">
                <input v-model="data.Subject" placeholder="Nhập lớp học" id="totalQues" type="number" class="outline-none text-color-4 ml-3 text-base w-full">
              </div>
            </div>
            <div class="w-4/5">
              <label for="correctAns" class="text-lg font-medium text-color-4">Câu trả lời</label>
              <div class="w-full rounded-lg border border-color-7 p-3 flex items-center mt-2">
                <textarea v-model="data.answerlist" placeholder="Nhập câu trả lời" id="correctAns" class="outline-none ml-3 text-base w-full text-color-4"></textarea>
              </div>
            </div>
            <div class="flex-1">
              <label for="desc" class="text-base font-medium text-color-4">Đáp án</label>
              <div class="w-full h-10 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-2">
                <input v-model="data.correctAns" placeholder="Nhập đáp án" id="desc" class="outline-none ml-3 text-color-4 text-base w-full">
              </div>
            </div>

          </div>
          <div class="px-1 break-words text-sm min-w-[19%] mt-6">
            <div class="flex justify-center items-center gap-6">
              <button @click="handleSubmit" class="min-h-10 w-[160px] border-2 border-green-700 font-semibold px-2 text-base
                                rounded-lg bg-color-2 text-white transition-all duration-500 hover:translate-y-[-6px]">Xác nhận</button>
              <button @click="handleCencel" class="min-h-10 w-[160px] border-2 border-color-3 text-white font-semibold bg-red-500 px-5 text-sm
                                rounded-lg transition-all duration-500 hover:translate-y-[-6px]">Hủy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {getDetailExam, editExam} from "@/service/ExamService.js";
import { h } from 'vue'
import { ElNotification } from 'element-plus'
import {editQuestion, getDetailQuestion} from "@/service/QuestionService.js";

export default {
  components:{ElNotification},

  setup(){
    const router = useRouter();
    const route = useRoute();

    const id = route.params.id;


    const data = ref({
      title: '',
      Subject: '',
      correctAns : '',
      answerlist : '',
      created_by : 1
    });

    const loadData = async () =>{
      try {
        const result = await getDetailQuestion(id);
        if(result){
          data.value = result.data
        }
      } catch (err) {
        console.log(err.message);
      }
    }

    const handleSubmit = async () =>{
      try {
        data.value.answerlist = "[" + data.value.answerlist + "]"
        const result = await editQuestion(id, data.value);
        if(result){
          router.push({ name : 'danh-sach-cau-hoi'})
          ElNotification({
            title: 'Thông báo',
            message: h('i', { style: 'color: teal' }, `Chỉnh sửa thành công câu hỏi ${data.value.title}`),
          })
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    const handleCencel = () =>{
      router.back();
    }

    onMounted( async () =>{
      await loadData();
    })


    return{
      data,
      handleSubmit,
      handleCencel
    }
  }
}
</script>