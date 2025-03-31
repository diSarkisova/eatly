import { createRouter, createWebHistory, type RouteComponent } from "vue-router";
import { RouterMapLayouts, RouterMapViews } from "@/router/map.ts";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: "/",
    //   component: (): RouteComponent => import("@/layouts/main/index.vue"),
    //   name: "MainLayout",
    //   children: [
    //     {
    //       path: "",
    //       name: RouterMapViews.MainView,
    //       component: (): RouteComponent => import("@/views/main/index.vue"),
    //     },
    //     {
    //       path: "users",
    //       name: RouterMapViews.UsersView,
    //       component: (): RouteComponent => import("@/views/users/index.vue"),
    //     },
    //     {
    //       path: "projects",
    //       name: RouterMapViews.ProjectsView,
    //       component: (): RouteComponent => import("@/views/projects/index.vue"),
    //     },
    //     {
    //       path: "analytics",
    //       name: RouterMapViews.AnalyticsView,
    //       component: (): RouteComponent => import("@/views/analytics/index.vue"),
    //     },
    //     {
    //       path: "/planning-table",
    //       name: RouterMapLayouts.PlanningTable,
    //       component: (): RouteComponent => import("@/views/planningTable/index.vue"),
    //     },
    //   ],
    // },
    {
      path: "/login",
      name: RouterMapLayouts.LogoutLayout,
      component: (): RouteComponent => import("@/layouts/login/index.vue"),
    },
  ],
});

export default router;
