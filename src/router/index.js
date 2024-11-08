import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home/Home.vue"
import Competision from "@/pages/Competision/Competision.vue";
import DeThiDGNL from "@/pages/DeThiDGNL/DeThiDGNL.vue";
import BoDeThi from "@/pages/BoDeThi/BoDeThi.vue";
import LayoutDeThi from "@/components/DeThiDGNL/LayoutDeThi.vue";
import ThongTinDeThi from "@/pages/ThongTinDeThi/ThongTinDeThi.vue";
const routes = [
    {
      path: "/",
      component: Home,
      name: "Home",
    },
    {
      path: "/de-thi-dgnl",
      component: LayoutDeThi,
      children : [
        {
          path: "",
          component: DeThiDGNL,
          name: "de-thi-dgnl",
        },
        {
          path: ":slug",
          component: BoDeThi,
          name: "bo-de-thi",
        },
        {
          path: "test/:id",
          component: ThongTinDeThi,
          name: "thong-tin-de-thi",
        }
      ]
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    },
  });
  
  export default router;