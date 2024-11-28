<template>
  <div class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold mb-4 text-center">Độ khó của câu hỏi</h2>
    <!-- Input file -->
    <input
        type="file"
        @change="handleFileUpload"
        accept=".xlsx, .xls"
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
    />
    <!-- Submit button -->
    <div
        @click="handleSubmit"
        class="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded-lg shadow-md transition duration-300"
    >
      Submit
    </div>
    <div class="text-right mt-3">
      <button @click="handleCencel" class="h-8 w-8 bg-red-300 rounded-full font-bold text-white hover:bg-red-700">X</button>
    </div>
    <div v-if="difficulty" class="mt-3 space-y-2">
      <div v-for="(i, index) in difficulty" :key="index" class="bg-gray-100 p-4 rounded-lg">
        <span class="font-medium">Độ khó câu hỏi</span> {{ index }} : {{ i }}
        <span class="ml-2 text-sm text-gray-600">({{ evaluateDifficulty(i) }})</span>
      </div>
    </div>
  </div>
  <div class="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
    <h2 class="text-2xl font-semibold mb-4 text-center">Năng lực thí sinh</h2>
    <!-- Input file -->
    <input
        type="file"
        @change="handleFileUpload"
        accept=".xlsx, .xls"
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
    />
    <!-- Submit button -->
    <div
        @click="handleTheta"
        class="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded-lg shadow-md transition duration-300"
    >
      Submit
    </div>
    <div class="text-right mt-3">
      <button @click="handleCencel" class="h-8 w-8 bg-red-300 rounded-full font-bold text-white hover:bg-red-700">X</button>
    </div>
    <div v-if="theta" class="mt-3 space-y-2">
      <div v-for="(i, index) in theta" :key="index" class="bg-gray-100 p-4 rounded-lg">
        <span class="font-medium">Năng lực của thí sinh</span> {{ index }} : {{ i }}
        <span class="ml-2 text-sm text-gray-600">({{ evaluateTheta(i) }})</span>
      </div>
    </div>
  </div>

</template>

<script>
import * as XLSX from "xlsx";
import {ref} from "vue";
import {getDifficulty, getTheta} from "@/service/IRTService.js";

export default {

  setup(){
    const difficulty = ref({});
    const questions = ref([]);
    const theta = ref({});
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: "array" });

        // Lấy dữ liệu từ sheet đầu tiên
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        // Xử lý dữ liệu, giả sử file Excel có 2 cột: id_ques và answer
        questions.value = jsonData
            .slice(1) // Bỏ dòng tiêu đề
            .map((row) => ({
              id_user : row[0],
              id_ques: row[1],
              answer: row[2],
            }));
      };

      reader.readAsArrayBuffer(file);
    }
    const handleSubmit = async () =>{
      const result = await getDifficulty(questions.value)
      if(result){
        difficulty.value = result
      }
    }
    const handleTheta = async () =>{
      const result = await getTheta(questions.value)
      if(result){
        theta.value = result
      }
    }
    const handleCencel = () =>{
      difficulty.value = {}
    }

    return{
      questions,
      handleFileUpload,
      handleSubmit,
      difficulty,
      handleCencel,
      theta,
      handleTheta
    }
  },
  methods: {
    // Hàm đánh giá độ khó của câu hỏi dựa trên giá trị độ khó (b)
    evaluateDifficulty(difficulty) {
      if (difficulty <= -2.0) {
        return "Rất dễ";
      } else if (difficulty > -2.0 && difficulty <= -1.0) {
        return "Dễ";
      } else if (difficulty > -1.0 && difficulty <= 0.0) {
        return "Dễ vừa phải";
      } else if (difficulty > 0.0 && difficulty <= 1.0) {
        return "Khó vừa phải";
      } else if (difficulty > 1.0 && difficulty <= 2.0) {
        return "Khó";
      } else {
        return "Rất khó";
      }
    },
    evaluateTheta(theta) {
      if (theta > 2) {
        return "Năng lực rất cao (xuất sắc)";
      } else if (theta > 1 && theta <= 2) {
        return "Năng lực cao (trên trung bình)";
      } else if (theta >= -1 && theta <= 1) {
        return "Năng lực trung bình";
      } else if (theta >= -2 && theta < -1) {
        return "Năng lực thấp (dưới trung bình)";
      } else {
        return "Năng lực rất thấp (kém)";
      }
    },

  }

};
</script>

