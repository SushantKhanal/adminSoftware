import React, { Component, useState } from "react";
import { useSelector } from "react-redux";
import HeaderNav from "../../components/layout-components/HeaderNav";
import { Layout, Grid } from "antd";
import InnerAppLayout from "../../layouts/inner-app-layout";
import MailMenu from "./MailMenu";
import MailContent from "./MailContent";

export class Mail extends Component {
  render() {
    return (
      <div className="mail">
        <InnerAppLayout
          sideContent={<MailMenu url="/app/apps/mail/" {...this.props} />}
          mainContent={<MailContent {...this.props} />}
          border
        />
      </div>
    );
  }
}

export default Mail;
