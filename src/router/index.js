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
import SuaBaiThi from "@/pages/Admin/SuaBaiThi.vue";
import DanhSachCauHoi from "@/pages/Admin/DanhSachCauHoi.vue";
import ThemCauHoi from "@/components/Admin/CauHoi/ThemCauHoi.vue";
import SuaCauHoi from "@/components/Admin/CauHoi/SuaCauHoi.vue";
import UocLuongNangLucTS from "@/pages/Admin/UocLuongNangLucTS.vue";
import DanhGiaCauHoi from "@/pages/Admin/DanhGiaCauHoi.vue";
import LayoutBaiThi from "@/components/LamBaiThi/LayoutBaiThi.vue";
import GiaiChiTiet from "@/pages/GiaiChiTiet/GiaiChiTiet.vue";
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
      component: LayoutBaiThi,
      children: [
          {
              path: ':id',
              component: LamBaiThi,
              name : 'lam-bai-thi'
          },
          {
              path: 'stop/:id',
              component: TamDung,
              name : 'stop'
          },
          {
              path: 'ket-qua/:id',
              component: KetQua,
              name : 'ket-qua'
          },
      ]
    },
    {
        path: "/giai-chi-tiet/:id",
        component: GiaiChiTiet,
        name: "lambaithi"
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
                path: 'sua-bai-thi/:id',
                component: SuaBaiThi,
                name : 'sua-bai-thi'
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
            {
                path: 'danh-sach-cau-hoi',
                component: DanhSachCauHoi,
                name : 'danh-sach-cau-hoi'
            },
            {
                path: 'them-cau-hoi',
                component: ThemCauHoi,
                name : 'them-cau-hoi'
            },
            {
                path: 'sua-cau-hoi/:id',
                component: SuaCauHoi,
                name : 'sua-cau-hoi'
            },
            {
                path: 'nang-luc-ts',
                component: UocLuongNangLucTS,
                name : 'nang-luc-ts'
            },
            {
                path: 'danh-gia-cau-hoi',
                component: DanhGiaCauHoi,
                name : 'danh-gia-cau-hoi'
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