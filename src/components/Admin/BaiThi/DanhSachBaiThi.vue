
<template>
  <div class="p-10 mx-auto">
    <div class="text-[50px] text-color-11 font-great text-center">
      Danh sách bài thi
    </div>
    <RouterLink :to="{ name : 'them-bai-thi'}">
      <button class="min-h-9 w-[150px] border-2 border-green-700 font-semibold px-2 text-sm
               rounded-md bg-color-2 text-white transition-all duration-500 hover:translate-y-[-6px]">Thêm bài thi</button>
    </RouterLink>
    <div class="pt-6">
      <div class="bg-white rounded-[20px] overflow-hidden shadow-shadow-1">
        <div class="text-center pt-6 ">
          <div class="text-color-3 text-base font-semibold mb-1">Danh sách bài thi </div>
          <div class="text-xl font-semibold text-color-2">Môn ĐHQG Hà Nội</div>
          <div class="flex justify-between mt-6 p-3 bg-color-6">
            <div class="text-sm font-semibold min-w-[70px]">Stt</div>
            <div class="text-sm font-semibold min-w-[23%]">Tiêu đề</div>
            <div class="text-sm font-semibold min-w-[23%]">Thời gian hết hạn</div>
            <div class="text-sm font-semibold min-w-[15%]">Thời gian làm bài</div>
            <div class="text-sm font-semibold min-w-[15%]">Số câu hỏi</div>
            <div class="text-sm font-semibold min-w-[19%]">Hành động</div>
          </div>
        </div>
        <div class="px-4">
          <ul>
            <li v-for="exam in listexams" :key="exam.id" class="flex items-center py-3 text-sm border-b border-color-7 justify-between text-center">
              <div class="min-w-5 px-6 bg-custom_1">{{exam.id}}</div>
              <div class="flex justify-center items-center text-center h-12 ml-4 mr-[10px] min-w-[23%] w-2/12">{{ exam.title}}</div>
              <div class="overflow-hidden line-clamp-1 overflow-ellipsis break-words text-center min-h-5 min-w-[23%]">{{ exam.expire_time}}</div>
              <div class="px-1 min-w-[15%] break-words text-sm">{{ exam.duration }}</div>
              <div class="px-1 min-w-[15%] break-words text-sm">{{ exam.totalQuestion }}</div>
              <div class="px-1 break-words text-sm min-w-[19%]">
                <div class="flex justify-center items-center gap-3">
                  <button class="min-h-9 w-24 border-2 border-green-700 font-semibold px-2 text-sm
                                rounded-lg bg-color-2 text-white transition-all duration-500 hover:translate-y-[-6px]">Sửa</button>
                  <button class="min-h-9 w-24 border-2 border-color-3 text-white font-semibold bg-red-500 px-5 text-sm
                                rounded-lg transition-all duration-500 hover:translate-y-[-6px]">Xóa</button>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {getExams} from "@/service/ExamService.js";

  export default {
    data(){
      return {
        listexams : [],
      }
    },
    async mounted() {
      try {
        const result = await getExams(1);
        this.listexams = result.exams.data;

      } catch (err) {
        console.log(err.message);
      }
    }
  }
</script>