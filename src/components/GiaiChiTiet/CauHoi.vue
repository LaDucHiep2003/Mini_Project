
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
        <label v-for="(answer, answerIndex) in item.answerlist" :key="answerIndex" class="flex items-center mb-2 cursor-pointer text-lg w-full py-2 px-3 rounded-md relative">
          <input type="radio" :name="`option-${item.id}`" :value="answer" class="hidden peer" :checked="item.correctAns === alphabet(answerIndex)">
          <span class="w-6 h-6 border-[3px] border-gray-300 rounded-lg flex items-center justify-center peer-checked:bg-green-600 peer-checked:border-green-600
              transition-colors relative"></span>
          <div
              class="items-center absolute left-[15px] justify-center rounded-full text-white hidden peer-checked:flex"
          >
            <i class="ri-check-line font-semibold"></i>
          </div>
          <span class="ml-2 text-base font-medium text-color-4">{{ alphabet(answerIndex) }}. {{ answer }}</span>
        </label>
      </div>
      <div class="text-start mt-3">
        <div class="text-base text-color-3 font-semibold border-b border-color-4 pb-2">Giải thích </div>
        <div class="mt-3 text-base border-b border-color-4 pb-10">Quan sát , đọc số liệu, liệt kê </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import {getQuestions} from "@/service/ResultService.js";

export default {
  setup() {
    const route = useRoute();
    const id = route.params.id; // Lấy ID từ route
    const data = ref([]); // Chứa danh sách câu hỏi từ API

    // Hàm tải dữ liệu từ API
    const loadData = async () => {
      const result = await getQuestions(id);
      if (result) {
        data.value = result.questions.map((question) => ({
          ...question,
          answerlist: question.answerlist
              .replace(/[\[\]\s]/g, "")
              .split(","),
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
};
</script>
