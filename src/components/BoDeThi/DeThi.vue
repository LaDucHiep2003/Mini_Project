<template>
    <div class="container mx-auto py-10">
      <div class="flex justify-between items-center mt-8 px-6 rounded-[20px] bg-color-6 overflow-hidden min-h-12">
        <RouterLink :to="`/de-thi-dgnl/${item.slug}`" v-for="item in data"
            :class="{'text-color-2 border-b-[3px] border-color-2': isActive(item.title), 'text-color-1': !isActive(item.title)}"
            class="w-max h-16 px-6 flex items-center text-base font-semibold"
        >{{ item.title }}</RouterLink>
      </div>
        <div class="text-center my-10">
            <div class="text-3xl font-semibold text-color-3 mb-2">{{ dataCategory.title }}</div>
            <div class="text-color-4 text-base">{{ dataCategory.description }}</div>
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
  import {onMounted, ref} from "vue";
  import {getCategoryParent, getDetailCategoryParent} from "@/service/CategoryService.js";
  import {useRoute} from "vue-router";

  export default {
    components: {
      ListDeThi,
      BangXepHang
    },
    computed: {
      currentSlug() {
        return this.$route.params.slug;
      }
    },
    setup(){
      const data = ref([]);
      const route = useRoute();
      const slug = route.params.slug;
      const dataCategory = ref([])

      const loadData = async () => {
        const result = await getCategoryParent();
        if(result){
          data.value = result.data
          console.log(result.data)
        }
      }

      const loadDataDetail = async () =>{
        const result = await getDetailCategoryParent(slug)
        if(result){
          dataCategory.value = result.data
          console.log(result.data)
        }
      }


      onMounted( async () =>{
        await  loadData();
        await loadDataDetail();
      })
      return {
        data,
        dataCategory
      }

    },
    methods: {
      isActive(buttonLabel) {
        const slugMap = {
          'ĐHQG Hà Nội': 'de-thi-dgnl-dhqg-ha-noi',
          'ĐHQG Hồ Chí Minh': 'de-thi-dgnl-dhqg-ho-chi-minh',
          'ĐHSP Hà Nội': 'de-thi-dgnl-dhsp-ha-noi',
          'Đại học Bách Khoa': 'de-thi-dgnl-bach-khoa-ha-noi',
          'Bộ Công An': 'de-thi-dgnl-bo-cong-an',
        };
        return this.currentSlug === slugMap[buttonLabel];
      }
    }
  }

</script>