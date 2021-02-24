import React from "react";
import { Card } from "antd";
import "./pages.css";
import swag from "../../static/images/sidebar-icons/logo/swag.png";

function WorkSpaceOne(props) {
  console.log(props);
  // const [apidata, setapidata] = useState([]);
  // const [lengthdata, setLengthdata] = useState();
  // const { visible } = props;

  return (
    <div className="card-sty">
      <Card>
        <div className="trade-head mb-4">
          <span>Add New</span>
        </div>

        <Card
          style={{
            width: 467,
            boxShadow: "0 1px 11px 0 rgba(0,0,0,0.12)",
            marginBottom: "6px",
          }}
        >
          <div className="ryt-sty">
            <div className="title-sty" style={{ display: "flex" }}>
              <div className="">
                <img className="img-fluid mr-3" src={swag} alt="anil" />
                <span>User</span>
              </div>

              <div className="textRight num-sty">
                <span>25</span>
              </div>
            </div>

            <div className="scndRow fle-sty mt-3 ">
              An accounting professional is a user who provides a service to
              AccountingTool Users.
            </div>

            <div className="thirdRow mt-3">
              <button
                type="button"
                className="btn btn-secondary btn1-sty"
                onClick={() => props.createBtn(true)}
              >
                Choose Type
              </button>
              <button
                type="button"
                class="btn btn-secondary btn2-sty"
                onClick={() => props.createBtn(true)}
              >
                Create
              </button>
            </div>
          </div>
        </Card>

        <Card
          style={{
            width: 467,
            boxShadow: "0 1px 11px 0 rgba(0,0,0,0.12)",
            marginBottom: "6px",
          }}
        >
          <div className="ryt-sty">
            <div className="title-sty" style={{ display: "flex" }}>
              <div className="">
                <img className="img-fluid mr-3" src={swag} alt="" />
                <span>Umbrella Apps</span>
              </div>

              <div className="textRight num-sty">
                <span>100</span>
              </div>
            </div>

            <div className="scndRow  fle-sty mt-3">
              An accounting professional is a user who provides a service to
              AccountingTool Users.
            </div>

            <div className="thirdRow mt-3">
              <button
                type="button"
                className="btn btn-secondary btn1-sty"
                onClick={() => props.createBtn(true)}
              >
                Choose Type
              </button>
              <button
                type="button"
                class="btn btn-secondary btn2-sty"
                onClick={() => props.createBtn(true)}
              >
                Create
              </button>
            </div>
          </div>
        </Card>
      </Card>
    </div>
  );
}

export default WorkSpaceOne;
