import { lazy } from "react";
const Account = lazy(() => import("../pages/Account"));
const Login = lazy(() => import("../pages/Login"));

const coreRoutes = [
  {
    path: "/login",
    title: "Text",
    component: Login,
  },
  {
    path: "/account",
    title: "Text",
    component: Account,
  },
];
const routes = [...coreRoutes];
export default routes;
