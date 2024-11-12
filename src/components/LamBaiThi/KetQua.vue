
<template>
  <div class="container mx-auto">
    <div class="text-center mt-10 relative">
      <div class="text-2xl font-bold">Làm Đề Thi Thử ĐGNL ĐHQG Hà Nội 2024 - Đề số 1</div>
      <div class="flex justify-center items-center gap-10 mt-10">
        <div class="flex gap-2 items-center">
          <v-icon name="fa-regular-question-circle" scale="1.2" />
          <div>150 câu</div>
        </div>
        <div class="flex gap-2 items-center">
          <v-icon name="fa-regular-clock" scale="1.2" />
          <div>195 phút</div>
        </div>
      </div>
      <div class="flex gap-2 items-center">
        <v-icon name="fa-file-alt" scale="1.2" />
        <div class="text-lg font-semibold text-color-4">Kết quả bài thi</div>
      </div>
      <div class="flex justify-center items-center gap-[150px] mt-10">
        <div class="flex flex-col gap-2 text-center items-center">
          <div class="bg-green-600 w-9 h-9 rounded-xl flex justify-center items-center">
            <v-icon name="fa-check" class="text-white" />
          </div>
          <div class="text-base font-medium text-color-4">Đã làm</div>
          <div class="text-lg font-semibold">1</div>
        </div>
        <div class="flex flex-col gap-2 text-center items-center">
          <div class="bg-red-500 w-9 h-9 rounded-xl flex justify-center text-2xl items-center text-white font-bold">
            x
          </div>
          <div class="text-base font-medium text-color-4">Số câu sai</div>
          <div class="text-lg font-semibold">149</div>
        </div>
        <div class="flex flex-col gap-2 text-center items-center">
          <div class="bg-orange-400 w-9 h-9 rounded-xl flex justify-center items-center">
            <v-icon name="fa-regular-clock" class="text-white" />
          </div>
          <div class="text-base font-medium text-color-4">Thời gian</div>
          <div class="text-lg font-semibold">00:21:45</div>
        </div>
      </div>
      <div class="flex justify-center items-center mt-10 gap-5">
        <button class="min-h-12 w-[220px] border-2 border-green-700 font-semibold px-5 text-base
                                rounded-lg bg-color-2 text-white transition-all duration-500 mt-5 hover:translate-y-[-6px]">Xem giải chi tiết</button>
        <button class="min-h-12 w-[220px] border-2 border-color-5 text-color-5 font-semibold bg-white px-5 text-base
                                rounded-lg transition-all duration-500 mt-5 hover:translate-y-[-6px]">Làm lại</button>
      </div>
    </div>
    <div class="mt-20">
      <div class="bg-color-3 inline-block px-10 py-5 rounded-se-2xl rounded-ss-2xl">
        <div class="text-xl text-white font-semibold">Lịch sử luyện tập</div>
      </div>
      <div class="mt-6 px-5">
        <div class="bg-color-6 p-3 flex justify-between items-center rounded-lg">
          <div class="text-base font-medium text-color-5">Đề Thi Thử ĐGNL ĐHQG Hà Nội 2024 - Đề số 1</div>
          <div class="flex gap-3">
            <div class="text-base text-green-500 font-medium border border-green-400 px-2 py-1 rounded-md">0.07 điểm</div>
            <div class="text-base text-color-5 font-medium border border-color-5 px-5 py-1 rounded-md">16:00 12/11/2023</div>
            <div class="text-base font-medium border border-green-300 px-2 py-1 rounded-xl bg-green-600 text-white">Xem lại ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>