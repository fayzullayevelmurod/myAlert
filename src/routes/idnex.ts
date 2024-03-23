import { lazy } from "react";
const Account = lazy(() => import("../pages/Account"));
const Connectors = lazy(() => import("../pages/Connectors"));
const EditingAdding = lazy(() => import("../pages/EditingAdding"));

const coreRoutes = [
  {
    path: "/account",
    title: "Text",
    component: Account,
  },
  {
    path: "/connectors",
    title: "Text",
    component: Connectors,
  },
  {
    path: "/editting-adding",
    title: "Text",
    component: EditingAdding,
  },
];
const routes = [...coreRoutes];
export default routes;
