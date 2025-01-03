
<template>
  <div class="p-10 mx-auto">
    <div class="text-[50px] text-color-11 font-great text-center">
      Danh sách câu hỏi
    </div>
    <RouterLink :to="{ name : 'them-cau-hoi'}">
      <button class="min-h-9 w-[150px] border-2 border-green-700 font-semibold px-2 text-sm
               rounded-md bg-color-2 text-white transition-all duration-500 hover:translate-y-[-6px]">Thêm câu hỏi</button>
    </RouterLink>
    <div class="pt-6">
      <div class="bg-white rounded-[20px] overflow-hidden shadow-shadow-1">
        <div class="text-center pt-6 ">
          <div class="text-color-3 text-base font-semibold mb-1">Danh sách câu hỏi </div>
          <div class="text-xl font-semibold text-color-2">Môn ĐHQG Hà Nội</div>
          <div class="flex justify-between mt-6 p-3 bg-color-6">
            <div class="text-sm font-semibold min-w-[70px]">Stt</div>
            <div class="text-sm font-semibold min-w-[23%]">Tiêu đề</div>
            <div class="text-sm font-semibold min-w-[23%]">Danh mục</div>
            <div class="text-sm font-semibold min-w-[15%]">Câu trả lời</div>
            <div class="text-sm font-semibold min-w-[15%]">Đáp án</div>
            <div class="text-sm font-semibold min-w-[19%]">Hành động</div>
          </div>
        </div>
        <div class="px-4">
          <ul>
            <li v-for="(item, index) in listQuestion" :key="item.id" class="flex items-center py-3 text-sm border-b border-color-7 justify-between text-center">
              <div class="min-w-5 px-6 bg-custom_1">{{item.id}}</div>
              <div class="flex justify-center items-center text-center ml-4 mr-[10px] min-w-[23%] line-clamp-3">{{ item.title}}</div>
              <div class="overflow-hidden line-clamp-1 overflow-ellipsis break-words text-center min-h-5 min-w-[23%]">{{ item.Subject}}</div>
              <div class="px-1 min-w-[15%] break-words text-sm">{{ item.correctAns }}</div>
              <div class="px-1 min-w-[15%] break-words text-sm">{{ item.answerlist }}</div>
              <div class="px-1 break-words text-sm min-w-[19%]">
                <div class="flex justify-center items-center gap-3">
                  <RouterLink :to="`/admin/sua-cau-hoi/${item.id}`">
                    <button class="min-h-9 w-24 border-2 border-green-700 font-semibold px-2 text-sm
                                  rounded-lg bg-color-2 text-white transition-all duration-500 hover:translate-y-[-6px]">Sửa</button>
                  </RouterLink>
                  <button @click="openModal" class="min-h-9 w-24 border-2 border-color-3 text-white font-semibold bg-red-500 px-5 text-sm
                                rounded-lg transition-all duration-500 hover:translate-y-[-6px]">Xóa</button>
                </div>
              </div>
              <TransitionRoot appear :show="isOpen" as="template">
                <Dialog as="div" @close="closeModal" class="relative z-10">
                  <TransitionChild
                      as="template"
                      enter="duration-300 ease-out"
                      enter-from="opacity-0"
                      enter-to="opacity-100"
                      leave="duration-200 ease-in"
                      leave-from="opacity-100"
                      leave-to="opacity-0"
                  >
                    <div class="fixed inset-0 bg-black/10 opacity-100" />
                  </TransitionChild>

                  <div class="fixed inset-0 overflow-y-auto">
                    <div
                        class="flex min-h-full items-center justify-center p-4 text-center relative"
                    >
                      <TransitionChild
                          as="template"
                          enter="duration-300 ease-out"
                          enter-from="opacity-0 scale-95"
                          enter-to="opacity-100 scale-100"
                          leave="duration-200 ease-in"
                          leave-from="opacity-100 scale-100"
                          leave-to="opacity-0 scale-95"
                      >
                        <DialogPanel
                            class="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white px-5 pt-5 pb-3 text-left align-middle shadow-xl transition-all"
                        >
                          <DialogTitle
                              as="h3"
                              class="text-center text-2xl font-semibold text-color-8"
                          >
                            Xác nhận
                          </DialogTitle>
                          <div class="mt-2">
                            <div class="text-base">Bạn có muốn xóa bài thi này không?</div>
                            <div class="flex justify-end items-center gap-2 mt-6">
                              <button @click="closeModal" class="w-[100px] h-9 bg-gray-300 rounded-lg text-base font-medium">Hủy</button>
                              <button @click="handleDelete(item.id)" class="w-[100px] h-9 bg-red-500 rounded-lg text-base font-medium text-white">Đồng ý</button>
                            </div>
                          </div>
                        </DialogPanel>
                      </TransitionChild>
                    </div>
                  </div>
                </Dialog>
              </TransitionRoot>
            </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {onMounted, ref} from "vue";
import {Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from "@headlessui/vue";
import { h } from 'vue'
import { ElNotification } from 'element-plus'
import {deleteQuestion, getQuestions} from "@/service/QuestionService.js";

export default {
  components: {TransitionRoot, TransitionChild, DialogPanel, DialogTitle, Dialog, ElNotification},
  setup(){
    const listQuestion = ref([]);
    const isOpen = ref(false);

    const loadQuestion = async () => {
      try {
        const result = await getQuestions(1);
        listQuestion.value = result.questions.data;
        console.log(result)
      } catch (err) {
        console.log(err.message);
      }
    };

    onMounted(loadQuestion);

    const handleDelete = async (id) =>{
      try {
        const result = await deleteQuestion(id);
        if(result){
          await loadQuestion();
          ElNotification({
            title: 'Thông báo',
            message: h('i', { style: 'color: red' }, `Xóa thành công câu hỏi`),
          })
        }
      } catch (err) {
        console.log(err.message);
      }
    }

    const closeModal = () =>{
      isOpen.value = false
    }

    const openModal = () =>{
      isOpen.value = true
    }

    return{
      listQuestion,
      handleDelete,
      isOpen,
      closeModal,
      openModal
    }
  }
}
</script>