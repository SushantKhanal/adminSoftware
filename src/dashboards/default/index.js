import React, { useState } from "react";
import { useSelector } from "react-redux";
import HeaderNav from "../../components/layout-components/HeaderNav";
import { Layout, Grid } from "antd";
import {
  VisitorChartData,
  AnnualStatisticData,
  ActiveMembersData,
  NewMembersData,
  RecentTransactionData,
} from "./defaultData";
import { apexLineChartDefaultOption, COLOR_2 } from '../../constants/ChartConstant';
import { 
  UserAddOutlined, 
  FileExcelOutlined, 
  PrinterOutlined, 
  PlusOutlined, 
  EllipsisOutlined, 
  StopOutlined, 
  ReloadOutlined 
} from '@ant-design/icons';
import utils from '../../utils';

const DefaultDashboard = () => {
  return <h1>This is default dashboard</h1>;
};

export default DefaultDashboard;
