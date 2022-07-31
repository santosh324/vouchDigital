import { Button, Checkbox, Form, Input, Typography, Alert } from "antd";
import React, { useState } from "react";
import "./form.css";
const { Title } = Typography;
const LoginForm = () => {
  //  const [body,setBody] = useState({email:"", password:""})
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({ error: "" });
  const handleOnClick = (e) => {
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data:", data);
        setData(data);
      });
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  // console.log("body:",body)
  return (
    <Form name="basic" style={{ width: "85%" }}>
      {data.error && (
        <Alert
          style={{ width: "100%" }}
          message={data.error}
          type="warning"
          closable
        />
      )}
      {data.token && (
        <Alert
          style={{ width: "100%" }}
          message="Thank for coming back"
          type="success"
          closable
        />
      )}
      <Form.Item
        name="email address"
        rules={[
          {
            required: true,
            message: "Please input your email address!"
          }
        ]}
      >
        <Input
          value={email}
          onChange={(event) => emailChange(event)}
          placeholder="Email Address"
          style={{ borderRadius: "4px", padding: "9px", width: "85%" }}
        />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!"
          }
        ]}
      >
        <Input.Password
          value={password}
          onChange={(event) => passwordChange(event)}
          placeholder="Password*"
          style={{ borderRadius: "4px", padding: "9px", width: "85%" }}
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{ width: "85%", backgroundColor: "#0E2146", border: "none" }}
          onClick={(event) => handleOnClick(event)}
        >
          Login
        </Button>

        <div className="checkbox-title">
          <Checkbox>
            <Title level={5} style={{ color: "#0E2146" }}>
              Remember Password
            </Title>
          </Checkbox>
          <Title level={5} style={{ color: "#0E2146" }}>
            Forgot Password?
          </Title>
        </div>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
