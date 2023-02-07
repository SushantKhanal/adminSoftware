import React, { Suspense } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { Layout, Grid } from "antd";

const AppLayout = ({ children }) => {
  return <Layout>{children}</Layout>;
};

const mapStateToProps = ({ theme }) => {
  const { navCollapsed, navType, locale } = theme;
  return { navCollapsed, navType, locale };
};

export default connect(mapStateToProps)(React.memo(AppLayout));
