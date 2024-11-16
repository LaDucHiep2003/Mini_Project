

<template>
  <div class="p-10 mx-auto">
    <div class="text-[50px] text-color-11 font-great text-center">
      Sửa danh mục
    </div>
    <RouterLink :to="{ name : 'danh-sach-danh-muc'}">
      <button class="min-h-9 border-2 border-green-700 font-semibold px-5 text-sm
               rounded-md bg-color-2 text-white transition-all duration-500 hover:translate-y-[-6px]">Danh sách danh mục</button>
    </RouterLink>
    <div class="pt-6">
      <div class="bg-white rounded-[20px] overflow-hidden shadow-shadow-1">
        <div class="mt-2 px-5 py-5">
          <div class="w-full">
            <label for="title" class="text-lg font-medium text-color-4">Tiêu đề</label>
            <div class="w-full h-12 rounded-lg border border-color-7 py-4 px-3 flex items-center mt-2">
              <input v-model="data.title" placeholder="Nhập tiêu đề" id="title" class="outline-none ml-3 text-base w-full text-color-4">
            </div>
          </div>
          <div class="w-full mt-6">
            <label for="desc" class="text-lg font-medium text-color-4">Mô tả</label>
            <div class="w-full rounded-lg border border-color-7 p-3 flex items-center mt-2">
              <textarea v-model="data.description" placeholder="Nhập tiêu đề" id="desc" class="outline-none ml-3 text-base w-full text-color-4"></textarea>
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
import {editCategory, getDetailCategory} from "@/service/CategoryService.js";
import {useRoute, useRouter} from "vue-router";

export default {

  setup(){
    const router = useRouter();
    const route = useRoute();

    const id = route.params.id;

    const data = ref({
      title: '',
      description: ''
    });
    const loadData = async () =>{
      try {
        const result = await getDetailCategory(id);
        if(result){
          data.value = result.data
        }
      } catch (err) {
        console.log(err.message);
      }
    }

    const handleSubmit = async () =>{
      try {
        const result = await editCategory(id, data.value);
        if(result){
          router.push({ name : 'danh-sach-danh-muc'})
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    onMounted(loadData)

    return{
      data,
      handleSubmit
    }
  }
}
</script>