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
import HeaderNav from "../components/layout-components/HeaderNav";
import Loading from "../shared/components/Loading";
import utils from "../utils";
import navigationConfig from "../configs/NavigationConfig";
import SideNav from "../components/layout-components/SideNav";
import PageHeader from "../components/layout-components/PageHeader";

const { Content } = Layout;
const { useBreakpoint } = Grid;

const AppLayout = ({ navCollapsed, navType, direction, children }) => {
  const screens = utils.getBreakPoint(useBreakpoint());
  const isMobile = screens.length === 0 ? false : !screens.includes("lg");
  const isNavSide = navType === NAV_TYPE_SIDE;
  const isNavTop = navType === NAV_TYPE_TOP;

  const location = useLocation();

  const currentRouteInfo = utils.getRouteInfo(
    navigationConfig,
    location.pathname
  );

  const getLayoutGutter = () => {
    if (isNavTop || isMobile) {
      return 0;
    }
    return navCollapsed ? SIDE_NAV_COLLAPSED_WIDTH : SIDE_NAV_WIDTH;
  };

  const getLayoutDirectionGutter = () => {
    if (direction === DIR_LTR) {
      return { paddingLeft: getLayoutGutter() };
    }
    if (direction === DIR_RTL) {
      return { paddingRight: getLayoutGutter() };
    }
    return { paddingLeft: getLayoutGutter() };
  };

  //HeaderNav
  //SideNav & MobileNav
  //Footer
  // return (
  //   <Layout>
  //     <HeaderNav isMobile={isMobile} />
  //     <Layout className="app-container">
  //       {isNavSide && !isMobile ? (
  //         <SideNav routeInfo={currentRouteInfo} />
  //       ) : null}
  //       <Layout className="app-layout" style={getLayoutDirectionGutter()}>
  //         <div className={`app-content`}>
  //           <PageHeader
  //             display={currentRouteInfo?.breadcrumb}
  //             title={currentRouteInfo?.title}
  //           />
  //           <Content>
  //             <Suspense fallback={<Loading cover="content" />}>
  //               {children}
  //             </Suspense>
  //           </Content>
  //         </div>
  //         {/* <Footer /> */}
  //       </Layout>
  //     </Layout>
  //   </Layout>
  // );

  return (
    <Layout>
      <HeaderNav isMobile={isMobile} />
      {/* {isNavTop && !isMobile ? <TopNav routeInfo={currentRouteInfo} /> : null} */}
      <Layout className="app-container">
        {isNavSide && !isMobile ? (
          <SideNav routeInfo={currentRouteInfo} />
        ) : null}
        <Layout className="app-layout" style={getLayoutDirectionGutter()}>
          <div className={`app-content ${isNavTop ? "layout-top-nav" : ""}`}>
            <PageHeader
              display={currentRouteInfo?.breadcrumb}
              title={currentRouteInfo?.title}
            />
            <Content>
              <Suspense fallback={<Loading cover="content" />}>
                {children}
              </Suspense>
            </Content>
          </div>
          {/* <Footer /> */}
        </Layout>
      </Layout>
      {/* {isMobile && <MobileNav />} */}
    </Layout>
  );
};

const mapStateToProps = ({ theme }) => {
  const { navCollapsed, navType, locale } = theme;
  return { navCollapsed, navType, locale };
};

export default connect(mapStateToProps)(React.memo(AppLayout));
