
<template>
  <div class="container mx-auto mb-10">
    <div class="text-center mt-10 relative">
      <div class="text-2xl font-bold">{{ data.title }}</div>
      <div class="flex gap-3 mt-6 justify-center items-center">
        <v-icon name="fa-regular-clock" scale="1.5" class="text-gray-500" />
        <div class="text-sm font-bold text-green-500">{{ formattedTime }}</div>
      </div>
      <div class="flex gap-5">
          <CauHoi />
          <BangCauHoi :selectedAnswers="selectedAnswers" :timer="duration" />
      </div>
    </div>
  </div>
</template>

<script>
  import BangCauHoi from "@/components/GiaiChiTiet/BangCauHoi.vue";
  import CauHoi from "@/components/GiaiChiTiet/CauHoi.vue";
  import {useRoute} from "vue-router";
  import {computed, onMounted, onUnmounted, ref} from "vue";
  import {getDetailExam} from "@/service/ExamService.js";

  export  default {
    components:{
      BangCauHoi,
      CauHoi
    },
    setup(){
      const route = useRoute();
      const id = route.params.id;
      const data = ref([]);
      const duration = ref(0);

      const selectedAnswers = ref([]); // Lưu câu trả lời đã chọn cho từng câu hỏi

      selectedAnswers.value["details"] = [];
      const selectAnswer = (id, answer, data) => {
        const existingAnswerIndex = selectedAnswers.value.details.findIndex(
            (item) => item.id_question === id
        );

        if (existingAnswerIndex !== -1) {
          // Nếu câu hỏi đã tồn tại trong danh sách, cập nhật câu trả lời
          selectedAnswers.value.details[existingAnswerIndex].answer = answer;
        } else {
          // Nếu chưa tồn tại, thêm câu trả lời mới
          selectedAnswers.value.details.push({ id_question: id, answer });
        }

        let correctCount = 0;
        let incorrectCount = 0;
        let notAnsweredCount = 0;

        data.forEach((question) => {
          const selectedAnswer = selectedAnswers.value.details.find(
              (item) => item.id_question === question.id
          )?.answer;
          if (selectedAnswer) {
            // So sánh với đáp án đúng
            if (selectedAnswer.toUpperCase() === question.correctAns.toUpperCase()) {
              correctCount++;
            } else {
              incorrectCount++;
            }
          } else {
            notAnsweredCount++;
          }
        });
        selectedAnswers.value.correct_question = correctCount;
        selectedAnswers.value.incorrect_question = incorrectCount;
        selectedAnswers.value.blank_question = notAnsweredCount;
      };

      const loadExam = async () =>{
        const result = await getDetailExam(id);
        if(result){
          data.value = result.data
          data.value.duration = data.value.duration * 60;
        }
      }

      const formattedTime = computed(() => {
        const hours = Math.floor(data.value.duration / 3600);
        const minutes = Math.floor((data.value.duration % 3600) / 60);
        const seconds = data.value.duration % 60;
        const format = (num) => String(num).padStart(2, "0");

        return `${format(hours)}:${format(minutes)}:${format(seconds)}`;
      });

      onMounted(() => {
        loadExam();
      });

      return{
        data,
        formattedTime,
        selectAnswer,
        selectedAnswers,
        duration
      }
    }
  }
</script>