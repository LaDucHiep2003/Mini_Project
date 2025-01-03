
<template>
  <div class="flex-1">
    <div class="text-base font-bold text-start">Bảng câu hỏi</div>
    <div class="text-sm font-medium line-list-question relative flex justify-end items-center mt-6">0/150</div>

    <div>
      <div class="flex gap-2 flex-wrap px-2 mt-3 max-h-52 overflow-scroll scroll-w-none">
        <div v-for="(i, index) in data" @click="scrollToQuestion(index)"
             :class="['w-7 h-7 flex justify-center items-center rounded-lg text-sm font-semibold cursor-pointer', isSelected(i) ? 'text-white bg-color-3' : 'bg-gray-200']">{{ index + 1 }}</div>
      </div>
      <div @click="openModal" class="border border-color-5 rounded-2xl mt-3 py-1 cursor-pointer">
        <button class="text-[15px] text-color-4 font-semibold">Tạm dừng</button>
      </div>
      <div @click="openModalSubmit" class="border border-color-3 rounded-2xl mt-2 py-1 bg-color-3">
        <button class="text-[15px] text-white font-semibold">Nộp bài</button>
      </div>
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
      <div class="fixed inset-0 bg-black/25" />
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
              Tạm dừng
            </DialogTitle>
            <div class="mt-2">
              <div class="text-base">Bạn có muốn tạm dừng không?</div>
              <div class="flex justify-end items-center gap-2 mt-6">
                <button @click="closeModal" class="w-[100px] h-9 bg-gray-300 rounded-lg text-base font-medium">Hủy</button>
                <button @click="pauseExam" class="w-[100px] h-9 bg-color-3 rounded-lg text-base font-medium text-white">Đồng ý</button>
              </div>
            </div>
          </DialogPanel>
        </TransitionChild>
      </div>
    </div>
  </Dialog>
</TransitionRoot>
  <TransitionRoot appear :show="isOpenSubmit" as="template">
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
        <div class="fixed inset-0 bg-black/25" />
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
                Nộp bài
              </DialogTitle>
              <div class="mt-2">
                <div class="text-base">Bạn có muốn nộp bài?</div>
                <div class="flex justify-end items-center gap-2 mt-6">
                  <button @click="closeModalSubmit" class="w-[100px] h-9 bg-gray-300 rounded-lg text-base font-medium">Hủy</button>
                  <button @click="handleSubmit" class="w-[100px] h-9 bg-color-3 rounded-lg text-base font-medium text-white">Đồng ý</button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>


<script>
import {computed, onMounted, ref} from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import {useRoute, useRouter} from "vue-router";
import {getQuestioninExam} from "@/service/QuestionService.js";
import {createResult} from "@/service/ResultService.js";

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  },
  data() {
    return {
      isOpen: false,
      isOpenSubmit: false,
    };
  },
  props: {
    selectedAnswers :{
      type : Array,
      required: true,
    },
    timer :{
      type : Number,
      required: true,
    },
    stopTimer:{
      type : Function,
      required: true,
    }
  },
  setup(props) {
    const data = ref([]); // Chứa danh sách câu hỏi từ API
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id;
    let score_one_question = ref(0);
    let totalQuestions = 0; // Tổng số câu hỏi

    // Hàm tải dữ liệu từ API
    const loadData = async () => {
      const result = await getQuestioninExam(id);
      if (result) {
        console.log(result.questions)
        totalQuestions = result.questions.length;
        score_one_question.value = Math.round(10 / result.questions.length * 100) / 100;
        data.value = result.questions;
      }
    }
    onMounted(loadData)
    const scrollToQuestion = (index) => {
      const element = document.getElementById(`question-${index}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };
    const handleSubmit = async () =>{
      props.selectedAnswers.correct_question = props.selectedAnswers.correct_question ?? 0;
      props.selectedAnswers.incorrect_question = props.selectedAnswers.incorrect_question ?? 0;
      props.selectedAnswers.blank_question = props.selectedAnswers.blank_question ?? totalQuestions;

      props.stopTimer();
      const score = (props.selectedAnswers.correct_question / totalQuestions) * 10 ;
      props.selectedAnswers.score = Number.isInteger(score) ? score : score.toFixed(2);

      // const result = await createResult({
      //   id_user : 1,
      //   id_exam : parseInt(id),
      //   duration : props.timer,
      //   details : props.selectedAnswers.details,
      //   correct_question : props.selectedAnswers.correct_question,
      //   incorrect_question : props.selectedAnswers.incorrect_question,
      //   blank_question :  props.selectedAnswers.blank_question,
      //   score : Number.isInteger(score) ? score : score.toFixed(2),
      // });
      // if(result){
      //   const id_result = result.id_result;
      //   await router.push(`/luyen-tap/ket-qua/${id_result}`);
      // }
      console.log({
        id_user : 1,
        id_exam : parseInt(id),
        duration : props.timer,
        details : props.selectedAnswers.details,
        correct_question : props.selectedAnswers.correct_question,
        incorrect_question : props.selectedAnswers.incorrect_question,
        blank_question :  props.selectedAnswers.blank_question,
        score : Number.isInteger(score) ? score : score.toFixed(2),
      })
    }

    const pauseExam = () =>{
      props.stopTimer();
      router.push({
        name: "stop",
        state: {
          timeLeft: props.timer,
          selectedAnswers: totalQuestions - props.selectedAnswers.blank_question,
          blank_question: props.selectedAnswers.blank_question,
        },
      })
    }
    const isSelected = (question) => {
      return props.selectedAnswers.details?.some(
          (answer) => answer.id_question === question.id_ques
      );
    }

    return {
      scrollToQuestion,
      handleSubmit,
      data,
      pauseExam,
      isSelected
    };
  },

  methods: {
    closeModalSubmit() {
      this.isOpenSubmit = false;
    },
    openModalSubmit() {
      this.isOpenSubmit = true;
    },
    closeModal() {
      this.isOpen = false;
    },
    openModal() {
      this.isOpen = true;
    },

  },
};
</script>
