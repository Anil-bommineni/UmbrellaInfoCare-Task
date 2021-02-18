import React, { useState, useEffect, useContext } from "react";
import Fade from "react-reveal/Fade";
import {
  Menu,
  Dropdown,
  Select,
  Tooltip,
  Form,
  Input,
  InputNumber,
  Button,
} from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";
import { CounselAppContext } from "../../Context_Api/Context";
import Modelpop from "../../pages/Home/Modelpop";

const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

function Navbar({ active }) {
  return (
    <nav>
      <div className="bets-dash-navbar">
        <div className="search-drop" style={{ display: "hidden" }}>
          <Select
            className="slct-sty"
            showSearch
            style={{ width: 355 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <div>
              <Form
                {...layout}
                name="nest-messages"
                validateMessages={validateMessages}
              >
                <Form.Item
                  name={["user", "name"]}
                  label="Name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["user", "email"]}
                  label="Email"
                  rules={[
                    {
                      type: "email",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name={["user", "age"]}
                  label="Date"
                  rules={[
                    {
                      type: "number",
                     
                    },
                  ]}
                >
                  <InputNumber />
                </Form.Item>
                <Form.Item name={["user", "website"]} label="Website">
                  <Input />
                </Form.Item>
                <Form.Item name={["user", "introduction"]} label="Words">
                  <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Select>
        </div>

        <div className=" ml-1" />
        <div className="dots-sty">
          <Modelpop />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
