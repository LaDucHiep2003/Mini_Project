import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home/Home.vue"
import DeThiDGNL from "@/pages/DeThiDGNL/DeThiDGNL.vue";
import BoDeThi from "@/pages/BoDeThi/BoDeThi.vue";
import LayoutDeThi from "@/components/DeThiDGNL/LayoutDeThi.vue";
import ThongTinDeThi from "@/pages/ThongTinDeThi/ThongTinDeThi.vue";
import LamBaiThi from "@/pages/LamBaiThi.vue";
import TamDung from "@/components/LamBaiThi/TamDung.vue";
import KetQua from "@/components/LamBaiThi/KetQua.vue";
import DashBoard from "@/pages/Admin/DashBoard.vue";
import DanhSachBaiThi from "@/pages/Admin/DanhSachBaiThi.vue";
import ThemBaiThi from "@/pages/Admin/ThemBaiThi.vue";
import DanhSachDanhMuc from "@/pages/Admin/DanhSachDanhMuc.vue";
import ThemDanhMuc from "@/pages/Admin/ThemDanhMuc.vue";
import SuaDanhMuc from "@/pages/Admin/SuaDanhMuc.vue";
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
    {
        path: "/luyen-tap",
        component: LamBaiThi,
        name: "lambaithi"
    },
    {
        path: '/stop',
        component: TamDung,
        name : 'stop'
    },
    {
        path: '/ket-qua',
        component: KetQua,
        name : 'ket-qua'
    },
    {
        path: '/admin',
        name : 'admin',
        meta:{
            layout: 'admin'
        },
        children: [
            {
                path: 'dashboard',
                component: DashBoard,
                name : 'dashboard'
            },
            {
                path: 'danh-sach-bai-thi',
                component: DanhSachBaiThi,
                name : 'danh-sach-bai-thi'
            },
            {
                path: 'them-bai-thi',
                component: ThemBaiThi,
                name : 'them-bai-thi'
            },
            {
                path: 'danh-sach-danh-muc',
                component: DanhSachDanhMuc,
                name : 'danh-sach-danh-muc'
            },
            {
                path: 'them-danh-muc',
                component: ThemDanhMuc,
                name : 'them-danh-muc'
            },
            {
                path: 'sua-danh-muc/:id',
                component: SuaDanhMuc,
                name : 'sua-danh-muc'
            },
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