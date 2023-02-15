import React, { Suspense } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { Layout, Grid } from "antd";
import {
  SIDE_NAV_WIDTH,
  SIDE_NAV_COLLAPSED_WIDTH,
  NAV_TYPE_SIDE,
  NAV_TYPE_TOP,
  DIR_RTL,
  DIR_LTR,
} from "../constants/ThemeConstant";

const AppLayout = ({ children }) => {
  //HeaderNav
  //SideNav & MobileNav
  //Footer
  return <Layout>{children}</Layout>;
};

const mapStateToProps = ({ theme }) => {
  const { navCollapsed, navType, locale } = theme;
  return { navCollapsed, navType, locale };
};

export default connect(mapStateToProps)(React.memo(AppLayout));
