import React from "react";
import {
  SIDE_NAV_WIDTH,
  SIDE_NAV_COLLAPSED_WIDTH,
  NAV_TYPE_TOP,
} from "../../constants/ThemeConstant";
import { APP_NAME } from "../../configs/AppConfig";
import { useSelector } from "react-redux";
import utils from "../../utils";
import { Grid } from "antd";

const { useBreakpoint } = Grid;

const Logo = ({ mobileLogo, logoType }) => {
  const isMobile = !utils.getBreakPoint(useBreakpoint()).includes("lg");

  const navCollapsed = useSelector((state) => state.theme.navCollapsed);
  const navType = useSelector((state) => state.theme.navType);

  const getLogoWidthGutter = () => {
    const isNavTop = navType === NAV_TYPE_TOP ? true : false;
    if (isMobile && !mobileLogo) {
      return 0;
    }
    if (isNavTop) {
      return "auto";
    }
    if (navCollapsed) {
      return `${SIDE_NAV_COLLAPSED_WIDTH}px`;
    } else {
      return `${SIDE_NAV_WIDTH}px`;
    }
  };

  const getLogoDisplay = () => {
    if (isMobile && !mobileLogo) {
      return "d-none";
    } else {
      return "logo";
    }
  };

  const getLogo = () => {
    if (navCollapsed) {
      return <h4>aEzy</h4>;
    }
    return <h4>{APP_NAME}</h4>;
  };

  return (
    <div
      className={getLogoDisplay()}
      style={{ width: `${getLogoWidthGutter()}` }}
    >
      {getLogo()}
    </div>
  );
};

export default Logo;
