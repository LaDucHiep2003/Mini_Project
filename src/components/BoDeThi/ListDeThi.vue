
<template>
  <div class="w-4/6 pt-6 pl-6 ">
    <div class="bg-white rounded-[20px] ">
      <ul>
        <div class="flex cursor-pointer" v-for="item in data" :key="item.id">
          <li class="shadow-shadow-1 rounded-lg flex-1 bg-white overflow-hidden  ">
            <div class="flex items-center border-b border-color-7 pl-3 pr-5">
              <v-icon name="fa-angle-double-right" class="mr-2" />
              <div class="pl-1 relative w-full py-4 flex justify-between items-center">
                <div class="flex flex-col flex-1">
                  <div class="text-xl font-semibold text-color-8 hover:text-color-2">{{ item.title }}</div>
                  <div class="text-sm pt-1 text-color-9">7 bài thi </div>
                </div>
              </div>
            </div>
            <ul>
              <li v-for="exam in item.exams" :key='item.id'>
                <RouterLink to="test/1" class="pl-8 flex w-full">
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
                              <span class="text-base font-semibold hover:text-color-2">{{ exam.title }}</span>
                              <div class="flex text-sm font-medium text-color-8">
                                <div>{{ exam.totalQuestion }} câu</div>
                                <div class="pl-2.5">{{ exam.duration }} phút </div>
                              </div>
                            </div>
                            <div class="block text-sm font-semibold text-center">-</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </RouterLink>
              </li>

              <div class="h-16 text-center flex justify-center items-center border-t border-color-7 text-sm font-semibold
                      text-color-10 underline cursor-pointer">Xem thêm 2 bài tập cùng chương </div>
            </ul>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
  import {useRoute} from "vue-router";
  import {onMounted, ref} from "vue";
  import {getCategoryParent_2} from "@/service/CategoryService.js";

  export default {
    setup(){
      const route = useRoute()
      const slug = route.params.slug

      const data = ref([]);

      const loadData = async () =>{
        const result = await getCategoryParent_2(slug)
        if(result){
          data.value = result.data
        }
      }
      onMounted((loadData))

      return {
        data
      }
    }

  }
</script>