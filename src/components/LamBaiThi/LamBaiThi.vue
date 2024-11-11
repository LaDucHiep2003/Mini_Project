
<template>
  <div class="container mx-auto">
    <div class="text-center mt-10 relative">
      <div class="text-2xl font-bold">Làm Đề Thi Thử ĐGNL ĐHQG Hà Nội 2024 - Đề số 1</div>

      <div class="flex gap-3 mt-6 justify-center items-center">
        <v-icon name="fa-regular-clock" scale="1.5" class="text-gray-500" />
        <div class="text-sm font-bold text-green-500">03:00:00</div>
      </div>
      <div class="flex gap-5">
          <div class="w-[75%]"></div>
          <BangCauHoi />
      </div>
    </div>
  </div>
</template>

<script>
  import BangCauHoi from "@/components/LamBaiThi/BangCauHoi.vue";

  export  default {
    components:{
      BangCauHoi
    }
  }
</script>