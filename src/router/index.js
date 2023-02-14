// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/HomeView.vue"),
      },
    ],
  },
  {
    path: "/stores",
    name: "Stores",
    component: () => import("@/views/StoresView.vue"),
  },
  {
    path: "/stores/:id",
    name: "SingleStore",
    component: () => import("@/components/SingleStore.vue"),
    props: true,
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("@/components/ProductSelect.vue"),
  },
  {
    path: "/carpentry",
    name: "Carpentry",
    component: () => import("@/components/List/Carpentry.vue"),
  },
  {
    path: "/construction",
    name: "Construction",
    component: () => import("@/components/List/Construction.vue"),
  },
  {
    path: "/electrical",
    name: "Electrical",
    component: () => import("@/components/List/Electrical.vue"),
  },
  {
    path: "/plumbing",
    name: "Plumbing",
    component: () => import("@/components/List/Plumbing.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
