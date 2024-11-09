<template>
    <div class="container mx-auto py-10">
        <div class="flex justify-between items-center mt-8 px-6 rounded-[20px] bg-color-6 overflow-hidden min-h-12">
          <button class="text-color-2 border-b-[3px] border-color-2 w-max h-16 px-6 flex items-center text-base
            font-semibold">DHQG Hà Nội</button>
          <button class="text-color-1 w-max h-16 px-6 flex items-center text-base
            font-semibold">DHQG Hồ Chí Minh</button>
          <button class="text-color-1 w-max h-16 px-6 flex items-center text-base
              font-semibold">DHSP Hà Nội</button>
          <button class="text-color-1 w-max h-16 px-6 flex items-center text-base
              font-semibold">Đại học Bách Khoa Hà Nội</button>
          <button class="text-color-1 w-max h-16 px-6 flex items-center text-base
              font-semibold">Bộ Công An</button>
        </div>
        <div class="text-center my-10">
            <div class="text-3xl font-semibold text-color-3 mb-2">Đề thi thử đánh giá năng lực đại học quốc gia Hà Nội</div>
            <div class="text-color-4 text-base">Luyện bộ đề thi thử đánh giá năng lực đại học quốc gia Hà Nội với bộ câu hỏi và ngân 
                hàng đề thi sát với dạng đề thi thật giúp bạn chuẩn bị tốt cho kỳ thi ĐGNL.</div>
        </div>

      <div class="flex">
        <div class="w-4/6 pt-6 pl-6 ">
          <div class="bg-white rounded-[20px] ">
            <ul>
              <div class="flex cursor-pointer">
                <li class="shadow-shadow-1 rounded-lg flex-1 bg-white overflow-hidden  ">
                  <div class="flex items-center border-b border-color-7 pl-3 pr-5">
                      <v-icon name="fa-angle-double-right" class="mr-2" />
                      <div class="pl-1 relative w-full py-4 flex justify-between items-center">
                        <div class="flex flex-col flex-1">
                          <div class="text-xl font-semibold text-color-8 hover:text-color-2">Đề thi ĐGNL ĐHQG Hà Nội 2024</div>
                          <div class="text-sm pt-1 text-color-9">7 bài thi </div>
                        </div>
                      </div>
                  </div>
                  <ul>
                    <li>
                      <div class="pl-8 flex w-full">
                        <div class="w-full">
                          <div class="flex">
                            <div class="w-7 flex items-center relative list_exam">
                              <span class="w-7 h-7 flex justify-center items-center pt-[3px] bg-color-2 rounded-[100%] z-10 absolute text-sm font-bold text-white">01</span>
                            </div>
                            <div class="flex items-center flex-1 pl-3 pr-5 border-b border-b-color-7">
                              <div class="mr-2"> <v-icon name="fa-clock" /></div>
                              <div class="pl-1 relative py-4 w-full">
                                <div class="flex justify-between items-center">
                                  <div class="flex flex-col flex-1 ">
                                    <span class="text-base font-semibold">Đề thi thử ĐGNL ĐHQG Hà Nội 2024 - Đề số 1</span>
                                    <div class="flex text-sm font-medium text-color-8">
                                      <div>150 câu</div>
                                      <div class="pl-2.5">195 phút </div>
                                    </div>
                                  </div>
                                  <div class="block text-sm font-semibold text-center">-</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </div>

            </ul>
          </div>
        </div>
        <div class="flex-1 pt-6 pl-6">
          <div class="bg-white rounded-[20px] overflow-hidden shadow-shadow-1">
            <div class="text-center pt-6 ">
              <div class="text-color-3 text-base font-semibold mb-1">Bảng xếp hạng</div>
              <div class="text-xl font-semibold text-color-2">Môn ĐHQG Hà Nội</div>
              <div class="flex justify-between mt-6 p-3 bg-color-6">
                <div class="text-sm font-semibold min-w-[70px]">Hạng</div>
                <div class="text-sm font-semibold min-w-[70px]">Họ tên </div>
                <div class="text-sm font-semibold min-w-[70px]">Điểm</div>
              </div>
            </div>
            <div class="px-4">
              <ul>
                <li class="flex items-center py-3 text-sm border-b border-color-7">
                  <div class="min-w-5 px-6 bg-custom_1">1</div>
                  <div class="flex justify-center items-center relative w-12 h-12 ml-4 mr-[10px]">N</div>
                  <div class="px-1 w-1/2 break-words text-sm">Nhật Minh Nguyễn</div>
                  <div class="overflow-hidden line-clamp-1 overflow-ellipsis max-w-[28%] w-1/5 break-words text-center min-h-5">21820</div>
                </li>
                <li class="flex items-center py-3 text-sm border-b border-color-7">
                  <div class="min-w-5 px-6 bg-custom_1">2</div>
                  <div class="flex justify-center items-center relative w-12 h-12 ml-4 mr-[10px]">N</div>
                  <div class="px-1 w-1/2 break-words text-sm">Ngọc Linh Lê</div>
                  <div class="overflow-hidden line-clamp-1 overflow-ellipsis max-w-[28%] w-1/5 break-words text-center min-h-5">18990</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>
<script setup lang="ts">
</script>