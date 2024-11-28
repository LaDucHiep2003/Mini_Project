<template>
  <div class="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-semibold mb-4 text-center">Đánh giá câu hỏi</h2>
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

    <div v-if="resultOutfit.length" class="overflow-x-auto mt-6">
      <table class="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
        <tr class="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
          <th class="py-2 px-4 border-b">ID Câu hỏi</th>
          <th class="py-2 px-4 border-b">Xác suất kỳ vọng</th>
          <th class="py-2 px-4 border-b">Outfit MNSQ</th>
          <th class="py-2 px-4 border-b">Khoảng tin cậy</th>
          <th class="py-2 px-4 border-b">T-Value</th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="result in resultOutfit"
            :key="result.id_ques"
            class="text-gray-700 border-b hover:bg-gray-100"
        >
          <td class="py-2 px-4 text-center">{{ result.id_ques }}</td>
          <td class="py-2 px-4 text-center">{{ result.expected.toFixed(2) }}</td>
          <td class="py-2 px-4 text-center">{{ result.outfitMNSQ.toFixed(2) }}</td>
          <td class="py-2 px-4 text-center">
            {{ result.CI.lower.toFixed(2) }} - {{ result.CI.upper.toFixed(2) }}
          </td>
          <td class="py-2 px-4 text-center">{{ result.T ? result.T.toFixed(2) : "N/A" }}</td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>
<script>
import * as XLSX from "xlsx";
import {ref} from "vue";
import {getDifficulty, getOutfit, getTheta} from "@/service/IRTService.js";

export default {

  setup(){
    const resultOutfit = ref([]);
    const dataFile = ref([]);
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
        dataFile.value = jsonData
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
      const result = await getOutfit(dataFile.value)
      if(result){
        resultOutfit.value = result;
      }
      console.log(dataFile.value)
    }
    const handleCencel = () =>{
      dataFile.value = [];
    }

    return{
      dataFile,
      handleFileUpload,
      handleSubmit,
      resultOutfit,
      handleCencel
    }
  },

};
</script>