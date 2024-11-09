<template>
    <div class="container mx-auto py-10">
      <div class="flex justify-between items-center mt-8 px-6 rounded-[20px] bg-color-6 overflow-hidden min-h-12">
        <RouterLink to="/de-thi-dgnl/de-thi-dgnl-dhqg-ha-noi"
            :class="{'text-color-2 border-b-[3px] border-color-2': isActive('DHQG Hà Nội'), 'text-color-1': !isActive('DHQG Hà Nội')}"
            class="w-max h-16 px-6 flex items-center text-base font-semibold"
        >DHQG Hà Nội</RouterLink>

        <RouterLink to="/de-thi-dgnl/de-thi-dgnl-dhqg-ho-chi-minh"
            :class="{'text-color-2 border-b-[3px] border-color-2': isActive('DHQG Hồ Chí Minh'), 'text-color-1': !isActive('DHQG Hồ Chí Minh')}"
            class="w-max h-16 px-6 flex items-center text-base font-semibold"
        >DHQG Hồ Chí Minh</RouterLink>

        <RouterLink to="/de-thi-dgnl/de-thi-dgnl-dhsp-ha-noi"
            :class="{'text-color-2 border-b-[3px] border-color-2': isActive('DHSP Hà Nội'), 'text-color-1': !isActive('DHSP Hà Nội')}"
            class="w-max h-16 px-6 flex items-center text-base font-semibold"
        >DHSP Hà Nội</RouterLink>

        <RouterLink to="/de-thi-dgnl/de-thi-dgnl-bach-khoa-ha-noi"
            :class="{'text-color-2 border-b-[3px] border-color-2': isActive('Đại học Bách Khoa Hà Nội'), 'text-color-1': !isActive('Đại học Bách Khoa Hà Nội')}"
            class="w-max h-16 px-6 flex items-center text-base font-semibold"
        >Đại học Bách Khoa Hà Nội</RouterLink>

        <RouterLink to="/de-thi-dgnl/de-thi-dgnl-bo-cong-an"
            :class="{'text-color-2 border-b-[3px] border-color-2': isActive('Bộ Công An'), 'text-color-1': !isActive('Bộ Công An')}"
            class="w-max h-16 px-6 flex items-center text-base font-semibold"
        >Bộ Công An</RouterLink>
      </div>
        <div class="text-center my-10">
            <div class="text-3xl font-semibold text-color-3 mb-2">Đề thi thử đánh giá năng lực đại học quốc gia Hà Nội</div>
            <div class="text-color-4 text-base">Luyện bộ đề thi thử đánh giá năng lực đại học quốc gia Hà Nội với bộ câu hỏi và ngân 
                hàng đề thi sát với dạng đề thi thật giúp bạn chuẩn bị tốt cho kỳ thi ĐGNL.</div>
        </div>
      <div class="flex">
        <ListDeThi />
        <BangXepHang />
      </div>

    </div>
</template>
<script>
  import ListDeThi from "@/components/BoDeThi/ListDeThi.vue";
  import BangXepHang from "@/components/BoDeThi/BangXepHang.vue";

  export default {
    components: {
      ListDeThi,
      BangXepHang
    },
    computed: {
      currentSlug() {
        return this.$route.path;
      }
    },
    methods: {
      isActive(buttonLabel) {
        const slugMap = {
          'DHQG Hà Nội': '/de-thi-dgnl/de-thi-dgnl-dhqg-ha-noi',
          'DHQG Hồ Chí Minh': '/de-thi-dgnl/de-thi-dgnl-dhqg-ho-chi-minh',
          'DHSP Hà Nội': '/de-thi-dgnl/de-thi-dgnl-dhsp-ha-noi',
          'Đại học Bách Khoa Hà Nội': '/de-thi-dgnl/de-thi-dgnl-bach-khoa-ha-noi',
          'Bộ Công An': '/de-thi-dgnl/de-thi-dgnl-bo-cong-an',
        };
        return this.currentSlug === slugMap[buttonLabel];
      }
    }
  }

</script>