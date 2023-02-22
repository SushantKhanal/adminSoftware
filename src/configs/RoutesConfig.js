import React from "react";
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from "./AppConfig";

export const publicRoutes = [
  {
    key: "login",
    path: `${AUTH_PREFIX_PATH}/login`,
    component: React.lazy(() => import("../authentication/LogInView")),
  },
  {
    key: "register",
    path: `${AUTH_PREFIX_PATH}/register`,
    component: React.lazy(() => import("../authentication/Register")),
  },
];

export const protectedRoutes = [
  {
    key: "dashboard.default",
    path: `${APP_PREFIX_PATH}/dashboards/default`,
    component: React.lazy(() => import("../dashboards/default")),
  },
  {
    key: "dashboard.analytic",
    path: `${APP_PREFIX_PATH}/dashboards/analytic`,
    component: React.lazy(() => import("../dashboards/analytic")),
  },
  {
    key: "dashboard.sales",
    path: `${APP_PREFIX_PATH}/dashboards/sales`,
    component: React.lazy(() => import("../dashboards/sales")),
  },
  {
    key: "apps",
    path: `${APP_PREFIX_PATH}/apps`,
    component: React.lazy(() => import("../apps")),
  },
  {
    key: "apps.mail",
    path: `${APP_PREFIX_PATH}/apps/mail/*`,
    component: React.lazy(() => import("../apps/mail")),
  },
  {
    key: "apps.chat",
    path: `${APP_PREFIX_PATH}/apps/chat/*`,
    component: React.lazy(() => import("../apps/chat")),
  },
  {
    key: "apps.calendar",
    path: `${APP_PREFIX_PATH}/apps/calendar`,
    component: React.lazy(() => import("../apps/calendar")),
  },
  {
    key: "apps.project",
    path: `${APP_PREFIX_PATH}/apps/project`,
    component: React.lazy(() => import("../apps/project")),
  },
  {
    key: "apps.project.list",
    path: `${APP_PREFIX_PATH}/apps/project/list`,
    component: React.lazy(() => import("../apps/project/ProjectList")),
  },
  {
    key: "apps.project.scrumboard",
    path: `${APP_PREFIX_PATH}/apps/project/scrumboard`,
    component: React.lazy(() => import("../apps/project/scrumboard")),
  },
  {
    key: "apps.ecommerce",
    path: `${APP_PREFIX_PATH}/apps/ecommerce`,
    component: React.lazy(() => import("../apps/ecommerce")),
  },
  {
    key: "apps.ecommerce.product-list",
    path: `${APP_PREFIX_PATH}/apps/ecommerce/product-list`,
    component: React.lazy(() => import("../apps/ecommerce/product-list")),
  },
  {
    key: "apps.ecommerce.add-product",
    path: `${APP_PREFIX_PATH}/apps/ecommerce/add-product`,
    component: React.lazy(() => import("../apps/ecommerce/add-product")),
  },
  {
    key: "apps.ecommerce.edit-product",
    path: `${APP_PREFIX_PATH}/apps/ecommerce/edit-product/:id`,
    component: React.lazy(() => import("../apps/ecommerce/edit-product")),
  },
  {
    key: "apps.ecommerce.orders",
    path: `${APP_PREFIX_PATH}/apps/ecommerce/orders`,
    component: React.lazy(() => import("../apps/ecommerce/orders")),
  },
];
