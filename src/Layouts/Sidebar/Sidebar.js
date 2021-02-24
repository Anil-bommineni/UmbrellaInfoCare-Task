import React, { useState } from "react";
import { Drawer } from "antd";
import Sider from "antd/lib/layout/Sider";
import { ReactComponent as IconPlus } from "../../static/images/sidebar-icons/plus.svg";
import { ReactComponent as IconOver } from "../../static/images/sidebar-icons/dash.svg";
import logo from "../../static/images/sidebar-icons/logo/nvestb1.png";
import umb from "../../images/Umbrella-Logo.svg";
import { Link } from "react-router-dom";
import WorkSpaceOne from "../../../src/pages/Home/WorkSpaceOne";
import WorkSpaceThree from "../../../src/pages/Home/WorkSpaceThree";

function Sidebar({ active }) {
  const [collapsed, setCollapsed] = useState(false);
  const [visible, setVisible] = useState(false);

  // const [app_name, setApp_name] = useState("");
  const [createOn, setCreateOn] = useState(false);
  const [saveOn, setSaveOn] = useState(false);
  // const [onSuccess, setOnSuccess] = useState(false);

  console.log(saveOn, "createOn");
  // const handleapp_name = (e) => {
  //   setApp_name(e.target.value);
  // };

  const showDrawer = () => {
    setVisible(true);
  };

  const allClose = async () => {
    await setVisible(false);

    await setCreateOn(false);
    await setSaveOn(false);
  };

  const onClose = () => {
    setVisible(false);
  };

  const onClose3 = () => {
    setVisible(false);
  };

  const onClose5 = () => {
    setVisible(false);
  };

  const onClose7 = () => {
    setVisible(false);
  };

  const onClose8 = () => {
    setVisible(true);
    setCreateOn(false);
  };

  const onCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  return (
    <Sider
      className="bets-dash-sider"
      theme="light"
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      width={280}
      trigger={null}
      backdrop="static"
    >
      <div
        className="mini"
        class={"logo " + collapsed}
        onClick={() => setCollapsed(!collapsed)}
      >
        {/* <h3 className="abbai">UMBRELLAINFO</h3> */}
        {collapsed ? (
          <img src={logo} alt="" className={collapsed ? "" : "mini-sidebar"} />
        ) : (
          <img src={umb} alt="" style={{ height: "80%" }} className="abbai" />
        )}
      </div>
      <div className="drawer-sty">
        <Drawer
          width={560}
          placement="right"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <WorkSpaceOne
            onClose={onClose}
            allClose={allClose}
            createBtn={(value) => {
              setCreateOn(value);
            }}
            saveBtn={(value) => {
              setSaveOn(value);
            }}
            onClose5={onClose5}
            onClose7={onClose7}
            visible={visible}
          />
        </Drawer>

        <Drawer
          width={560}
          placement="right"
          closable={false}
          onClose={allClose}
          visible={createOn}
        >
          <WorkSpaceThree
            // handleapp_name={handleapp_name}
            onClose={onClose3}
            onClose8={onClose8}
            onClose4={(value) => {
             
            }}
            allClose={allClose}
          />
        </Drawer>
      </div>

      <div className={"sider-contents side-sty " + collapsed}>
        <div className="group grp1">
          <h4> Today</h4>

          <span className=" sccroll-sty ">
            <Link
              to="/Readlater"
              className={"menu-itm" + (active === "traction" ? " active" : "")}
            >
              <IconOver /> <h5>Read later </h5>
            </Link>

            <Link
              to="/trainLeo"
              className={
                "menu-itm" + (active === "workspacefive" ? " active" : "")
              }
            >
              <IconOver /> <h5>Train leo </h5>
            </Link>

            <Link
              to="/customer/crm"
              className={"menu-itm" + (active === "crm" ? " active" : "")}
            >
              <IconOver /> <h5>CRM</h5>
            </Link>

            <Link
              to="/All"
              className={
                "menu-itm" + (active === "digitalhealth" ? " active" : "")
              }
            >
              <IconOver /> <h5>Digital Health</h5>
            </Link>
          </span>

          <Link className="menu-itm" onClick={showDrawer}>
            <IconPlus className="plus-sty" />{" "}
            <h5 className="crt-sty">Add New</h5>
          </Link>
        </div>

        <div className="group grp2">
          <h4>FEEDS</h4>

          <span className="scroll2-sty">
            <Link
              to="/All"
              className={
                "menu-itm" + (active === "compliance" ? " active" : "")
              }
            >
              <IconOver /> <h5>ALL</h5>
            </Link>

            <Link
              to="/All"
              className={"menu-itm" + (active === "training" ? " active" : "")}
            >
              <IconOver /> <h5>SECURITY NEWS</h5>
            </Link>

            <Link
              to="/All"
              className={"menu-itm" + (active === "admin" ? " active" : "")}
            >
              <IconOver /> <h5>RECENTLY READ</h5>
            </Link>

            <Link
              to="/All"
              className={"menu-itm" + (active === "security" ? " active" : "")}
            >
              <IconOver />

              <h5>INTEGRATIONS</h5>
            </Link>
          </span>
        </div>
      </div>
    </Sider>
  );
}

export default Sidebar;
