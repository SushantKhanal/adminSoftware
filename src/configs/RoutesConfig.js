import React from "react";
import { AUTH_PREFIX_PATH, APP_PREFIX_PATH } from "./AppConfig";

export const publicRoutes = [
  {
    key: "login",
    path: `${AUTH_PREFIX_PATH}/login`,
    component: React.lazy(() => import("../authentication/LogInView")),
  },
];

export const protectedRoutes = [];
