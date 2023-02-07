import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Button, Form, Input, Alert } from "antd";
import { motion } from "framer-motion";
import {
  signIn,
  showLoading,
  showAuthMessage,
  hideAuthMessage,
  signInWithGoogle,
  signInWithFacebook,
} from "../../store/slices/authSlice";

const LoginForm = (props) => {
  const {
    signIn,
    showAuthMessage,
    showLoading,
    hideAuthMessage,
    signInWithGoogle,
    signInWithFacebook,
    allowRedirect = true,
  } = props;

  const initialCredential = {
    email: "newuser@mailinator.com",
    password: "asdfghjkl",
  };

  const onFinish = (values) => {
    console.log("signIn");
    console.log(props);
    showLoading();
    signIn(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, marginBottom: 0 }}
        animate={{ opacity: props.showErrorMessage ? 20 : 0 }}
      >
        <Alert type="error" showIcon message={props.message}></Alert>
      </motion.div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={initialCredential}
        onFinish={onFinish}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={
            <div
              className={`${
                props.showForgetPassword
                  ? "d-flex justify-content-between w-100 align-items-center"
                  : ""
              }`}
            >
              <span>Password</span>
              {props.showForgetPassword && (
                <span
                  onClick={() => props.onForgetPasswordClick}
                  className="cursor-pointer font-size-sm font-weight-normal text-muted"
                >
                  Forget Password?
                </span>
              )}
            </div>
          }
          name="password"
          rules={[{ required: true, message: "Please input your password" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

const mapStateToProps = ({ auth }) => {
  const { loading, message, showMessage, token, redirect } = auth;
  return { loading, message, showMessage, token, redirect };
};

const mapDispatchToProps = {
  signIn,
  showAuthMessage,
  showLoading,
  hideAuthMessage,
  signInWithGoogle,
  signInWithFacebook,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
