import { createRouter, createWebHashHistory } from "vue-router";

import DashboardLayout from "@/layout/DashboardLayout";
import AuthLayout from "@/layout/AuthLayout";

import Dashboard from "../views/Dashboard.vue";
// import Tables from "../views/Tables.vue";
// import Icons from "../views/Icons.vue";
// import Maps from "../views/Maps.vue";
import Profile from "../views/UserProfile.vue";

import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Users from "../views/Users";
import Payments from "../views/Payments.vue";
import Orders from "../views/Orders.vue";
import Outlets from "../views/Outlets.vue";
import Brands from "../views/Brands";
import Departments from "../views/Departments";
import Items from "../views/Items";

// import Auth from "../views/Auth.vue";
// import Auth from "../views/Auth.vue";

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    component: DashboardLayout,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        components: { default: Dashboard },
      },
      {
        path: "/brands",
        name: "brands",
        components: { default: Brands },
      },
      {
        path: "/outlets",
        name: "outlets",
        components: { default: Outlets },
      },
      {
        path: "/departments",
        name: "departments",
        components: { default: Departments },
      },
      {
        path: "/items",
        name: "menu items",
        components: { default: Items },
      },
      // {
      //   path: "/maps",
      //   name: "maps",
      //   components: { default: Maps },
      // },
      {
        path: "/profile",
        name: "profile",
        components: { default: Profile },
      },
      {
        path: "/payments",
        name: "payments",
        components: { default: Payments },
      },
      {
        path: "/orders",
        name: "orders",
        components: { default: Orders },
      },
      {
        path: "/users",
        name: "users",
        components: { default: Users },
      },
    ],
  },
  {
    path: "/",
    redirect: "login",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "login",
        components: { default: Login },
      },
      {
        path: "/register",
        name: "register",
        components: { default: Register },
      },
    ],
  },
  // {
  //   path: "/",
  //   redirect: "auth",
  //   component: Auth,
  //   children: [
  //     {
  //       path: "/auth",
  //       name: "auth",
  //       components: { default: Login },
  //     }
  //   ]
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
