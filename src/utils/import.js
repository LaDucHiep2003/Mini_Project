import { defineAsyncComponent } from "vue";

export function registerGlobalComponents(app) {
    app.component('default', defineAsyncComponent(() => import("@/components/layouts/default.vue")))
    app.component('admin', defineAsyncComponent(() => import("@/components/layouts/admin.vue")))
}