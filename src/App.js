import LoginForm from "./components/form";
import "./styles.css";
import "./components/form";
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined
} from "@ant-design/icons";
import {
  Breadcrumb,
  Layout,
  Menu,
  Row,
  Col,
  Form,
  Input,
  Button,
  Ckeckbox,
  Typography
} from "antd";

import "antd/dist/antd.css";
import React from "react";
const { Header, Content, Sider } = Layout;
const { Title, Text } = Typography;

const App = () => {
  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "white",
          position: "fixed",
          zIndex: 1,
          width: "100%"
        }}
      >
        {/* <Title level={3}>Ant Design</Title> */}
        <div className="logo">
          <Title
            level={3}
            style={{ marginTop: "15px", fontSize: "1.3rem", fontWeight: "800" }}
          >
            ATools
          </Title>
          <span className="dot"></span>
        </div>
        <div className="buttons">
          <Button
            type="primary"
            size={"large"}
            style={{
              marginRight: "20px",
              padding: "2px 35px 2px 35px",
              border: "none",
              backgroundColor: "#0E2146",
              fontSize: "12px"
            }}
          >
            Start Free Trial
          </Button>
          <Button
            type="primary"
            size={"large"}
            style={{
              padding: "2px 60px 2px 60px",
              backgroundColor: "orange",
              border: "none",
              fontSize: "12px"
            }}
          >
            Login
          </Button>
        </div>
      </Header>
      <Layout style={{ height: "100%" }}>
        <div className="content-form">
          {/* <div className="form">
      <Title level={2} style={{marginTop:"15px"}}>Welcome Back</Title>
      <Title level={5} style={{marginTop:"15px"}}>Enter Your Credentials</Title> */}

          <Row>
            <Col
              span={9}
              style={{ padding: "180px 20px 0 20px", width: "85%" }}
            >
              <div className="loginForm">
                <h1 className="title-welcome">Welcome Back</h1>
                <h5 className="cred">Enter your Credentials</h5>

                <LoginForm />
              </div>
            </Col>
            <Col
              span={15}
              style={{
                background:
                  "linear-gradient(153deg, rgba(2,0,36,1) 18%, rgba(5,4,75,1) 29%, rgba(174,106,210,1) 55%, rgba(0,212,255,1) 74%)"
              }}
            >
              col-6 col-pull-18
            </Col>
          </Row>
        </div>
        {/* </div> */}
      </Layout>
    </Layout>
  );
};

export default App;
