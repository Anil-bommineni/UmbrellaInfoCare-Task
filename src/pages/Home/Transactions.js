import React from "react";
import MainLayout from '../../Layouts/MainLayout';
import { Card, Button } from "antd";
import "./pages.css";
import apps from "../../static/images/sidebar-icons/logo/application.svg";
import play from "../../static/images/sidebar-icons/logo/playstore.svg";
import send from "../../static/images/sidebar-icons/logo/send.svg";

function transactionsOne(props) {

  return (
    <MainLayout active="customer/transactions">
      <div className="card-sty card-sidesty " style={{ padding: "10px" }}>
        <div className="cong-head mt-5 ">
          <span>Congratulations</span>
          <span>
            <img
              className="text-right"
              alt=""
              onClick={() => props.allClose()}
              src={send}
              style={{ marginLeft: "11rem" }}
            />
          </span>
        </div>
        <div className="mb-4  msgg-sty ">
          <span className="msg2-sty">
            You Have Successfully Submitted {props.app_name} To The GXLive
            Store. It Will Take 3-5 Business Days To Approve Your Application.
            In The Meantime, {props.app_name}
            Will Live In GX Purgatory.
          </span>
        </div>

        <div className="mb-4 mt-5">
          <span className="akm-sty">Your Apps</span>
        </div>

        <div className="anil-card row mb-3">
          <Card
            className="row"
            style={{
              width: 350,
              boxShadow: "0 1px 11px 0 rgba(0,0,0,0.12)",
              marginBottom: "6px",
              marginRight: "7px",
              borderRadius: "10px",
            }}
          >
            <div className="con-sty">
              <div className="title-sty" style={{ display: "flex" }}>
                <div className="">
                  <img className="img-fluid  mr-3" src={apps} alt=" " />
                  <span className="img-fluid2">User</span>
                </div>

                <div className="textRight num-fluid">
                  <span>999</span>
                </div>
              </div>

              <div className="scndRow scndRow2 mt-3">
                An accounting professional is a user who provides a service to
                AccountingTool Users.
              </div>
            </div>
          </Card>

          <Card
            className="row"
            style={{
              width: 350,
              boxShadow: "0 1px 11px 0 rgba(0,0,0,0.12)",
              marginBottom: "6px",
              marginRight: "7px",
              borderRadius: "10px",
            }}
          >
            <div className="con-sty">
              <div className="title-sty" style={{ display: "flex" }}>
                <div className="">
                  <img className="img-fluid mr-3" src={apps} alt="" />
                  <span span className="img-fluid2">
                    Merchant
                  </span>
                </div>

                <div className="textRight num-fluid">
                  <span>789</span>
                </div>
              </div>

              <div className="scndRow scndRow2 mt-3">
                An accounting professional is a user who provides a service to
                AccountingTool Users.
              </div>
            </div>
          </Card>

        </div>

        <div className="mt-5  rem-sty">
          <span className="akm-sty">Similar Apps To {props.app_name}</span>
        </div>

        <div className="anil-card row mb-3">
          <Card
            className="row"
            style={{
              width: 350,
              boxShadow: "0 1px 11px 0 rgba(0,0,0,0.12)",
              marginBottom: "24px",
              marginRight: "7px",
              borderRadius: "10px",
            }}
          >
            <div className="title-sty row">
              <div className="">
                <img className="img-fluid mr-3 playimg" src={play} alt="" />
              </div>

              <div className="scndRow scndRow2">
                <h4 className="img-fluid2" style={{ fontSize: "15px" }}>
                  Anil
                </h4>
                <span style={{ position: "absolute" }}>
                  An accounting professional ......
                </span>
              </div>

              <div className=" button-sty ">
                <Button block>Learn</Button>
              </div>

              <div className=" button-sty2 ">
                <Button block>Get</Button>
              </div>
            </div>
          </Card>
          <Card
            className="row"
            style={{
              width: 350,
              boxShadow: "0 1px 11px 0 rgba(0,0,0,0.12)",
              marginBottom: "24px",
              marginRight: "7px",
              borderRadius: "10px",
            }}
          >
            <div className="title-sty row">
              <div className="">
                <img className="img-fluid mr-3 playimg" src={play} alt="" />
              </div>

              <div className="scndRow scndRow2">
                <h4 className="img-fluid2" style={{ fontSize: "15px" }}>
                  Anil
                </h4>
                <span style={{ position: "absolute" }}>
                  An accounting professional ......
                </span>
              </div>

              <div className=" button-sty ">
                <Button block>Learn</Button>
              </div>

              <div className=" button-sty2 ">
                <Button block>Get</Button>
              </div>
            </div>
          </Card>
       
        
        </div>
      </div>
    </MainLayout>
  );
}

export default transactionsOne;
