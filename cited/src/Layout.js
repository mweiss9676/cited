import "antd/dist/antd.css";
import React, { memo, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Paths } from "./App";
import { Layout, Menu, Breadcrumb, Spin } from "antd";
import { UserOutlined, HighlightOutlined } from "@ant-design/icons";
import { isLoadingSelector } from "./slices/api";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const keys = {
  DASHBOARD: {
    INDEX: "dashboard"
  },
  CITATIONS: {
    CREATE: "create-citation"
  }
};

const _Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const isLoading = useSelector(isLoadingSelector);

  const handleCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={handleCollapse}>
        <div className="logo" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[keys.CITATIONS.CREATE]}
          mode="inline"
        >
          <Menu.Item key={keys.DASHBOARD.INDEX}>
            <Link to={Paths.Dashboard.Index}>Cited</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<HighlightOutlined />} title="Citations">
            <Menu.Item key={keys.CITATIONS.CREATE}>
              <Link to={Paths.Citation.Create}>Create</Link>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Spin spinning={isLoading}>
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {children}
            </div>
          </Content>
        </Spin>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default memo(_Layout);
