import React from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { useDispatch } from "react-redux";
import {
  EditOutlined,
  SettingOutlined,
  ShopOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
  UserOutlined
} from "@ant-design/icons";
import Icon from "../util-components/Icon";
import { signOut } from "../../store/slices/authSlice";
// import thumb1 from "../../assets/img/thumbs/thumb-1.jpg"

const MenuItem = (props) => (
  <a className="d-flex align-items-center" href={props.path}>
    <Icon className="font-size-md" type={props.icon} />
    <span className="font-weight-normal mx-2">{props.label}</span>
  </a>
);

const MenuItemSignOut = (props) => (
  <span className="d-flex align-items-center">
    <LogoutOutlined className="font-size-md" />
    <span className="font-weight-normal mx-2">{props.label}</span>
  </span>
);

const NavProfile = () => {
  const dispatch = useDispatch();
  const handleClick = ({ key }) => {
    if (key === "Sign Out") {
      dispatch(signOut());
    }
  };

  const menu = (
    <Menu
      onClick={handleClick}
      items={[
        {
          key: "Edit Profile",
          label: <MenuItem path="/" label="Edit Profile" icon={EditOutlined} />,
        },
        {
          key: "Account Setting",
          label: (
            <MenuItem path="/" label="Account Setting" icon={SettingOutlined} />
          ),
        },
        {
          key: "Account Billing",
          label: (
            <MenuItem path="/" label="Account Billing" icon={ShopOutlined} />
          ),
        },
        {
          key: "Help Center",
          label: (
            <MenuItem
              path="/"
              label="Help Center"
              icon={QuestionCircleOutlined}
            />
          ),
        },
        {
          key: "Sign Out",
          label: <MenuItemSignOut label="Sign Out" />,
        },
      ]}
    />
  );

  return (
    <Dropdown placement="bottomRight" overlay={menu} trigger={["click"]}>
      <div className="nav-item">
        <div className="d-flex align-items-center">
          <Avatar icon={<UserOutlined />} size="large"/>
          <div className="pl-2 d-none d-sm-block profile-text">
            <div className="font-size-base font-weight-bold">
              Sushant Khanal
            </div>
            <span className="opacity-0-8">Software Engineer</span>
          </div>
        </div>
      </div>
    </Dropdown>
  );
};

export default NavProfile;
