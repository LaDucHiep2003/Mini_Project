

<template>
  <div class="p-10 mx-auto">
    <div class="text-[50px] text-color-11 font-great text-center">
      Thêm danh mục
    </div>
    <RouterLink :to="{ name : 'danh-sach-danh-muc'}">
      <button class="min-h-9 border-2 border-green-700 font-semibold px-5 text-sm
               rounded-md bg-color-2 text-white transition-all duration-500 hover:translate-y-[-6px]">Danh sách danh mục</button>
    </RouterLink>
    <div class="pt-6">
      <div class="bg-white rounded-[20px] shadow-shadow-1">
        <div class="mt-2 px-5 py-5">
          <div class="w-full">
            <label for="title" class="text-lg font-medium text-color-4">Tiêu đề</label>
            <div class="w-full h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-2">
              <input v-model="data.title" placeholder="Nhập tiêu đề" id="title" class="outline-none ml-3 text-base w-full text-color-4">
            </div>
          </div>
          <div class="flex justify-between items-center gap-5 flex-wrap">
            <div class="w-3/4 mt-6">
              <label for="desc" class="text-lg font-medium text-color-4">Mô tả</label>
              <div class="w-full rounded-lg border border-color-7 p-3 flex items-center mt-2">
                <textarea v-model="data.description" placeholder="Nhập tiêu đề" id="desc" class="outline-none ml-3 text-base w-full text-color-4"></textarea>
              </div>
            </div>
            <div class="flex-1">
              <label for="desc" class="text-lg font-medium text-color-4">Danh mục cha</label>
              <div class="flex-1 h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-2 relative">
                <div class="outline-none ml-3 text-base flex-1">
                  <input
                      :value="selectedOption"
                      @focus="showDropdown = true"
                      class="w-full cursor-pointer outline-none"
                      readonly
                  >
                  <div class="absolute my-2 top-0 left-0 min-w-[268px] bg-white rounded-md w-full"
                       v-if="showDropdown"
                       style="box-shadow: rgba(0, 0, 0, 0.2) 0 5px 5px -3px, rgba(0, 0, 0, 0.14) 0 8px 10px 1px, rgba(0, 0, 0, 0.12) 0 3px 14px 2px;
                       transition: opacity 322ms cubic-bezier(0.4, 0, 0.2, 1), transform 214ms cubic-bezier(0.4, 0, 0.2, 1);
                  ">
                    <ul class="py-2">
                      <li class="flex justify-items-start items-center text-color-14 cursor-pointer py-[6px] px-4 whitespace-nowrap text-base bg-color-12 ">Danh mục</li>
                      <li v-for="(option, index) in options"
                          :key="index"
                          @click="selectOption(option)"
                          class="flex justify-items-start items-center cursor-pointer py-[6px] px-4 whitespace-nowrap text-base
                          hover:bg-color-13">{{ option.title }}</li>
                    </ul>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 14L8 10H16L12 14Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="px-1 break-words text-sm min-w-[19%] mt-6">
            <div class="flex justify-center items-center gap-6">
              <button @click="handleSubmit" class="min-h-10 w-[160px] border-2 border-green-700 font-semibold px-2 text-base
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
<script>
  import {onMounted, ref} from "vue";
  import {createCategory, getCategorys} from "@/service/CategoryService.js";
  import {useRouter} from "vue-router";

  export default {

    setup(){
      const router = useRouter();
      const options = ref([]);

      // State để điều khiển dropdown và lưu lựa chọn
      const showDropdown = ref(false);
      const selectedOption = ref(options.value[0]);

      const selectOption = (option) => {
        selectedOption.value = option.title;
        data.value.parentId = option.id;
        showDropdown.value = false;
      };

      const data = ref({
        title: '',
        description: '',
        parentId : ''
      });
      const handleSubmit = async () =>{
        try {
          const result = await createCategory(data.value);
          if(result){
            console.log("ok")
            router.push({ name : 'danh-sach-danh-muc'})
          }
        } catch (err) {
          console.log(err.message);
        }
      }
      const filterData = (items) => {
        return items.map((item) => ({
          id: item.id,
          title: item.title,
        }));
      };

      const loadCategorys = async () => {
        try {
          const result = await getCategorys(1);
          options.value = filterData(result.categorys.data);
        } catch (err) {
          console.log(err.message);
        }
      };

      onMounted(loadCategorys);

      return{
        data,
        handleSubmit,
        showDropdown,
        selectedOption,
        options,
        selectOption
      }
    }
  }
</script>