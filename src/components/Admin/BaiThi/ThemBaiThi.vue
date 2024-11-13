

<template>
  <div class="p-10 mx-auto">
    <div class="text-[50px] text-color-11 font-great text-center">
      Thêm bài thi
    </div>
    <RouterLink :to="{ name : 'danh-sach-bai-thi'}">
      <button class="min-h-9 w-[150px] border-2 border-green-700 font-semibold px-2 text-sm
               rounded-md bg-color-2 text-white transition-all duration-500 hover:translate-y-[-6px]">Danh Sách bài thi</button>
    </RouterLink>
    <div class="pt-6">
      <div class="bg-white rounded-[20px] overflow-hidden shadow-shadow-1">
        <div class="mt-2 px-5 py-5">
          <div class="flex justify-between items-center gap-5 flex-wrap">
            <div class="w-4/5">
              <label for="title" class="text-lg font-medium text-color-4">Tiêu đề</label>
              <div class="w-full h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-2">
                <input placeholder="Nhập tiêu đề" id="title" class="outline-none ml-3 text-base w-full">
              </div>
            </div>
            <div class="flex-1">
              <label for="totalQues" class="text-lg font-medium text-color-4">Số câu hỏi</label>
              <div class="w-full h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-2">
                <input placeholder="Nhập số câu hỏi" id="totalQues" type="number" class="outline-none ml-3 text-base w-full">
              </div>
            </div>
            <div class="w-4/5">
              <label for="title" class="text-lg font-medium text-color-4">Tiêu đề</label>
              <div class="w-full h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-2">
                <input placeholder="Nhập tiêu đề" id="title" class="outline-none ml-3 text-base w-full">
              </div>
            </div>
            <div class="flex-1">
              <label for="totalQues" class="text-lg font-medium text-color-4">Thời gian làm bài (phút)</label>
              <div class="w-full h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-2">
                <input placeholder="Nhập số câu hỏi" id="totalQues" type="number" class="outline-none ml-3 text-base w-full">
              </div>
            </div>
          </div>

          <div class="w-full h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-5">
            <v-icon name="fa-lock" scale="1.3" />
            <input placeholder="Nhập lại mật khẩu " class="outline-none ml-3 text-base flex-1">
          </div>
          <div class="px-1 break-words text-sm min-w-[19%] mt-6">
            <div class="flex justify-center items-center gap-6">
              <button class="min-h-10 w-[160px] border-2 border-green-700 font-semibold px-2 text-base
                                rounded-lg bg-color-2 text-white transition-all duration-500 hover:translate-y-[-6px]">Xác nhận</button>
              <button class="min-h-10 w-[160px] border-2 border-color-3 text-white font-semibold bg-red-500 px-5 text-sm
                                rounded-lg transition-all duration-500 hover:translate-y-[-6px]">Hủy</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script setup lang="ts">
</script>