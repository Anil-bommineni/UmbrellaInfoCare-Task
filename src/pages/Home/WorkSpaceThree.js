import React, { useState, useContext } from "react";
import MainLayout from "../../Layouts/MainLayout";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Card,
  Space,
  Select,
  message,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import Lottie from "react-lottie";
import "./pages.css";
import arrow from "../../static/images/sidebar-icons/logo/arrow.svg";
import save from "../../static/images/sidebar-icons/logo/refresh.svg";
import animated from "../../static/images/sidebar-icons/logo/jsonanimate.json";

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

function onBlur() {
  console.log("blur");
}

function onFocus() {
  console.log("focus");
}

function onSearch(val) {
  console.log("search:", val);
}

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
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const onFinish = (values) => {
  console.log(values);
};

function WorkSpaceThree(props) {
  const [app_name, setApp_name] = useState("");
  const [app_code, setApp_code] = useState("");
  const [profile_start_code, setProfile_start_code] = useState("");
  const [app_website, setApp_website] = useState("");
  const [app_link, setApp_link] = useState("");
  const [app_icon, setApp_icon] = useState("");

  const [data, setdata] = useState("");
  const [authenticated, setauthenticated] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [apiAuth, setapiAuth] = useState(false);
  const [loader, setloader] = useState(false);
  const [availableemail, setavailable] = useState("");
  const [btnname, setbtnname] = useState("Check");
  const [btncolor, setbtncolor] = useState("white");
  const [gifload, setgifload] = useState(false);

  const [dropValues, setdropValues] = useState([]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animated,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleDropChange = async (value, index) => {
    console.log(value, index);
    let x1 = value;
    let n1 = [value];

    dropValues[index] = n1;
    await setdropValues([...dropValues]);
  };

  const handleinputChange = async (value, field, index) => {
    console.log(dropValues, index);
    let n1 = dropValues[index];
    console.log(n1);
    n1[1] = value;

    await setdropValues([...dropValues]);
    console.log(dropValues);
  };

  const savetoDB = () => {
    setgifload(true);

    let body = {
      app_name: app_name,
      app_code: app_code,
      profile_start_code: profile_start_code,
      data: dropValues,
      admin_email: availableemail, // and Admin email for the app which track the txns.
      email: email, // admin email
      token: localStorage.getItem("CounselAppToken"), // admin token
    };
  };

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {gifload ? (
        <div className="gif-sty">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      ) : (
        <div className="card-sty">
          <div className="trade-head mt-4">
            <img
              className="mr-3"
              src={arrow}
              alt=""
              onClick={() => props.onClose8()}
            />
            <span>Create GX App</span>
          </div>

          {authenticated ? (
            <></>
          ) : (
            <div>
              <Card>
                <Form
                  {...layout}
                  name="nest-messages"
                  onFinish={onFinish}
                  validateMessages={validateMessages}
                >
                  <Card
                    style={{
                      width: 467,
                      boxShadow: "0 1px 11px 0 rgba(0,0,0,0.12)",
                      marginBottom: "6px",
                      height: "98px",
                    }}
                  >
                    <h4>What Is The Name Of The App?</h4>

                    <Form.Item placeholder="mani inc">
                      <Input
                        autoComplete="off"
                        className="input-sty"
                        placeholder="mani inc"
                        onChange={(e) => {
                          setApp_name(e.target.value);
                          props.handleapp_name(e);
                        }}
                      />
                    </Form.Item>
                  </Card>

                  <Card
                    style={{
                      width: 467,
                      boxShadow: "0 1px 11px 0 rgba(0,0,0,0.12)",
                      marginBottom: "6px",
                      height: "97px",
                    }}
                  >
                    <h4>What Is The App Code You Want To Assign This App?</h4>
                    <Form.Item name={["user", "email"]}>
                      <Input
                        autoComplete="off"
                        className="input-sty"
                        placeholder="Mani"
                        onChange={(e) => setApp_code(e.target.value)}
                      />
                    </Form.Item>
                  </Card>

                  <Card
                    style={{
                      width: 467,
                      boxShadow: "0 1px 11px 0 rgba(0,0,0,0.12)",
                      marginBottom: "6px",
                      height: "97px",
                    }}
                  >
                    <h4>What Is Do You Call Your Users? </h4>
                    <Form.Item>
                      <Input
                        autoComplete="off"
                        className="input-sty"
                        placeholder="Mani Users"
                        onChange={(e) => setProfile_start_code(e.target.value)}
                      />
                    </Form.Item>
                  </Card>

                  <div className="adding-sty mt-4">
                    <h4>Add Additional Information</h4>

                    <Form
                      name="dynamic_form_nest_item"
                      onFinish={onFinish}
                      autoComplete="off"
                    >
                      <Form.List name="users">
                        {(fields, { add, remove }) => {
                          return (
                            <div>
                              {fields.map((field, index) => (
                                <Space
                                  key={index}
                                  style={{ display: "flex", marginBottom: 8 }}
                                  align="start"
                                >
                                  <Select
                                    {...field}
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select Information Type  "
                                    optionFilterProp="children"
                                    onChange={(value) =>
                                      handleDropChange(value, index)
                                    }
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                      option.children
                                        .toLowerCase()
                                        .indexOf(input.toLowerCase()) >= 0
                                    }
                                  >
                                    <Option value="App Icon">App Icon</Option>
                                    <Option value="Website">Website</Option>
                                    <Option value="Signup Cost">
                                      Signup Cost
                                    </Option>
                                  </Select>

                                  <Form.Item
                                    {...field}
                                    name={[field.name, "last"]}
                                    fieldKey={[field.fieldKey, "last"]}
                                    rules={[
                                      {
                                        required: true,
                                        message: "Missing last name",
                                      },
                                    ]}
                                  >
                                    <Input
                                      placeholder="Enter Data "
                                      onChange={(e) =>
                                        handleinputChange(
                                          e.target.value,
                                          field,
                                          index
                                        )
                                      }
                                    />
                                  </Form.Item>

                                  {fields.length > 1 ? (
                                    <MinusCircleOutlined
                                      onClick={() => {
                                        remove(field.name);
                                      }}
                                    />
                                  ) : null}
                                </Space>
                              ))}

                              <Form.Item>
                                <Button
                                  type="dashed"
                                  onClick={() => {
                                    add();
                                  }}
                                  block
                                >
                                  <PlusOutlined /> Add field
                                </Button>
                              </Form.Item>
                            </div>
                          );
                        }}
                      </Form.List>
                    </Form>
                  </div>

                  <div>
                    <h4>Creator Information</h4>

                    <Card
                      style={{
                        width: 467,
                        boxShadow: "0 1px 11px 0 rgba(0,0,0,0.12)",
                        marginBottom: "6px",
                        height: "98px",
                      }}
                    >
                      <h4>
                        Enter The Email That WIll Be Used To Administer The App?
                      </h4>

                      <Form.Item
                        rules={[
                          {
                            type: "email",
                          },
                        ]}
                      >
                        <Input
                          className="input-sty2"
                          type="email"
                          onChange={(e) => setavailable(e.target.value)}
                          placeholder="Enter Email"
                        />

                        <Button
                          type="primar"
                          className=" "
                          style={{
                            position: "absolute",
                            backgroundColor: btncolor,
                          }}
                        >
                          {btnname}
                        </Button>

                        <img className=" refresh-sty" src={save} alt=" " />

                        {/* onClick={refreshContent}                   */}
                      </Form.Item>
                    </Card>

                    <Card
                      style={{
                        width: 467,
                        boxShadow: "0 1px 11px 0 rgba(0,0,0,0.12)",
                        marginBottom: "28px",
                        height: "98px",
                      }}
                    >
                      <h4>Enter Your Password To Authenticate This App</h4>

                      <Form.Item
                        // name={['user', 'email']}
                        //  label="Email"
                        rules={[
                          {
                            type: "email",
                          },
                        ]}
                      >
                        <Input
                          className="input-sty2"
                          type="password"
                          placeholder="Enter Password"
                          onChange={(e) => setpassword(e.target.value)}
                        />

                        {/* onClick={() => setauthenticated(true)} */}

                        {apiAuth ? (
                          <Button
                            type="primar"
                            className="auth-btn"
                            htmlType="submit"
                            style={{ position: "absolute", color: "#fff" }}
                          >
                            Authenticated
                          </Button>
                        ) : (
                          <Button
                            type="primar"
                            htmlType="submit"
                            style={{ position: "absolute" }}
                          >
                            {loader ? "loading..." : "Authenticate"}
                          </Button>
                        )}
                      </Form.Item>
                    </Card>
                  </div>
                </Form>
              </Card>
            </div>
          )}

          <div className="mt-1 mb-3"></div>

          <div className="final-btn ">
            <Button
              className="mb-0 prim-sty"
              onClick={savetoDB}
              type="primary"
              htmlType="submit"
            >
              Submit
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WorkSpaceThree;
