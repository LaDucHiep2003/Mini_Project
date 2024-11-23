
<template>
    <div>
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
                <div class="text-lg font-semibold text-color-4">Thông tin chung</div>
            </div>

            <div class="text-xl font-semibold text-center mt-10">Để làm bài hiệu quả</div>

            <div class="flex items-center gap-6 mt-6">
              <div class="flex items-center border border-color-7 p-4 rounded-lg w-1/2">
                <div class="text-lg font-semibold w-14">1</div>
                <div class="text-base ml-5">Ôn tập kiến thức trong chương trình học</div>
              </div>
              <div class="flex items-center border border-color-7 p-4 rounded-lg w-1/2">
                <div class="text-lg font-semibold w-14">2</div>
                <div class="text-base ml-5">Ôn tập kiến thức trong chương trình học</div>
              </div>
            </div>
          <RouterLink to="/luyen-tap/1">
            <button class="min-h-10 w-52 border border-color-2 text-white font-semibold bg-color-2 px-5 text-base
                          rounded-md transition-all duration-300 mt-6">Làm bài </button>
          </RouterLink>
        </div>
    </div>
</template>
<script setup lang="ts">
</script>