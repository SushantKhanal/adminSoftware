import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Layout } from "antd";
import {
  SearchOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import NavNotifications from "./NavNotifications";
import NavProfile from "./NavProfile";
import NavSearch from "./NavSearch";
import NavLanguage from "./NavLanguage";
import SearchInput from "./NavSearch/SearchInput.js";
import {
  toggleCollapsedNav,
  onMobileNavToggle,
} from "../../store/slices/themeSlice";
import {
  NAV_TYPE_TOP,
  SIDE_NAV_COLLAPSED_WIDTH,
  SIDE_NAV_WIDTH,
} from "../../constants/ThemeConstant";
import utils from "../../utils";
import Logo from "./Logo";

const { Header } = Layout;

const HeaderNav = (props) => {
  const { isMobile } = props;

  const [searchActive, setSearchActive] = useState(false);

  const dispatch = useDispatch();

  const navCollapsed = useSelector((state) => state.theme.navCollapsed);
  const mobileNav = useSelector((state) => state.theme.mobileNav);
  const navType = useSelector((state) => state.theme.navType);
  const headerNavColor = useSelector((state) => state.theme.headerNavColor);
  const currentTheme = useSelector((state) => state.theme.currentTheme);
  const direction = useSelector((state) => state.theme.direction);

  const onSearchActive = () => {
    setSearchActive(true);
  };

  const onSearchClose = () => {
    setSearchActive(false);
  };

  const onToggle = () => {
    if (!isMobile) {
      dispatch(toggleCollapsedNav(!navCollapsed));
    } else {
      dispatch(onMobileNavToggle(!mobileNav));
    }
  };

  // const isNavTop = navType === NAV_TYPE_TOP ? true : false;

  const mode = () => {
    if (!headerNavColor) {
      return utils.getColorContrast(
        currentTheme === "dark" ? "#00000" : "#ffffff"
      );
    }
    return utils.getColorContrast(headerNavColor);
  };

  const navMode = mode();

  const getNavWidth = () => {
    if (isMobile) {
      return "0px";
    }
    if (navCollapsed) {
      return `${SIDE_NAV_COLLAPSED_WIDTH}px`;
    } else {
      return `${SIDE_NAV_WIDTH}px`;
    }
  };

  useEffect(() => {
    if (!isMobile) {
      onSearchClose();
    }
  });

  return (
    <Header
      className={`app-header ${navMode}`}
      style={{ backgroundColor: headerNavColor }}
    >
      <div className={`app-header-wrapper`}>
        <Logo logoType={navMode} />
        <div className="nav" style={{ width: `calc(100% - ${getNavWidth()})` }}>
          <div className="nav-left">
            <div className="nav-item" onClick={onToggle}>
              <div className="d-flex align-items-center">
                <MenuOutlined className="nav-icon" />
              </div>
            </div>
            <ul className="ant-menu ant-menu-root ant-menu-horizontal">
              {isMobile ? (
                <li
                  className="ant-menu-item ant-menu-item-only-child"
                  onClick={() => {
                    onSearchActive();
                  }}
                >
                  <SearchOutlined />
                </li>
              ) : (
                <li
                  className="ant-menu-item ant-menu-item-only-child"
                  style={{ cursor: "auto" }}
                >
                  <SearchInput mode={mode} isMobile={isMobile} />
                </li>
              )}
            </ul>
          </div>
          <div className="nav-right">
            <NavNotifications />
            <NavLanguage />
            <NavProfile />
          </div>
          <NavSearch active={searchActive} close={onSearchClose} />
        </div>
      </div>
    </Header>
  );
};

export default HeaderNav;
