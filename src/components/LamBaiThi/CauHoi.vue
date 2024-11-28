
<template>
  <div class="w-[75%] px-14 mx-auto">
    <div class="mt-10" v-for="(item, index) in data" :key="item.id" :id="'question-' + (index + 1)">
      <div class="text-lg font-semibold text-start">
        {{ index + 1}}. <span class="font-medium ml-2">{{ item.title }}</span>
        <div v-if="item.image">
          <img src="https://ahaslides.com/wp-content/uploads/2022/11/downtown-cityscape-night-seoul-south-korea.webp" alt="Image"
               class=" w-[80%] h-[300px] rounded-lg mt-3">
        </div>
      </div>
      <div class="flex flex-col items-start mt-8">
        <label v-for="(answer, answerIndex) in item.answerlist" :key="answerIndex" class="flex items-center mb-2 cursor-pointer text-lg hover:bg-color-7 w-full py-2 px-3 rounded-md relative">
          <input type="radio" :name="`option-${item.id}`" :value="answer" @change="selectAnswer(item.id_ques, answer)" class="hidden peer">
          <span class="w-6 h-6 border-[3px] border-gray-300 rounded-lg flex items-center justify-center peer-checked:border-blue-500
              transition-colors relative"></span>
          <span class="w-2.5 h-2.5 bg-blue-500 rounded-full peer-checked:inline-block hidden absolute left-[19px]"></span>
          <span class="ml-2 text-base font-medium">{{ alphabet(answerIndex) }}. {{ answer }}</span>
        </label>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { getQuestioninExam } from "@/service/QuestionService.js";
import { onMounted, ref } from "vue";

export default {
  setup() {
    const route = useRoute();
    const id = route.params.id; // Lấy ID từ route
    const data = ref([]); // Chứa danh sách câu hỏi từ API

    // Hàm tải dữ liệu từ API
    const loadData = async () => {
      const result = await getQuestioninExam(id);
      if (result) {
        data.value = result.questions.map((question) => ({
          ...question,
          // Chuyển đổi answerlist từ chuỗi không hợp lệ thành mảng hợp lệ
          answerlist: question.answerlist
              .replace(/[\[\]\s]/g, "") // Loại bỏ dấu ngoặc vuông và khoảng trắng
              .split(","),             // Tách chuỗi thành mảng
        }));
      }
    };
    // Hàm để lấy ký tự alphabet tương ứng với index
    const alphabet = (index) => String.fromCharCode(65 + index);

    onMounted(loadData);

    return {
      data,
      alphabet,
    };
  },
  props:{
    selectAnswer:{
      type : Function,
      required : true
    }
  }
};
</script>
