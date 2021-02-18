import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import { Modal, Button } from "antd";
import gglimg from "../../images/googleapps.svg";

import gglbuss from "../../images/googlebusiness.png";
import gglchrome from "../../images/googlechrome.png";
import gglads from "../../images/googleads.png";
import gglcls from "../../images/googleclass.png";
import gglduo from "../../images/googleduo.png";
import gglearth from "../../images/googleearth.png";
import gglmaps from "../../images/googlemaps.png";




class Modelpop extends React.Component {
  state = {
    modal1Visible: false,
    modal2Visible: false,
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  render() {
    return (
      <>
        {/* <Button type="primary" onClick={() => this.setModal1Visible(true)}>
          akm
        </Button> */}

        <img
          className="mr-5 gle-img"
          src={gglimg}
          alt=" hlo"
          onClick={() => this.setModal1Visible(true)}
        />
        <Modal 
          title=" "
          style={{ bottom: 20, position: "absolute", right: "13px",top: "81px" , }}
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
          mask={false}
          width={320}
          height={888}
          closable={false}
        >
          <div>
            <div className="first-slide mb-3" style={{justifyContent:"space-between"}}>
              <img className="mr-4 ml-4" src={gglbuss} alt="akm " style={{ width: "55px" }} />
             
              <img className="mr-4" src={gglads} alt="akm " style={{ width: "55px" }} />

              <img className="" src={gglcls} alt="akm " style={{ width: "55px" }} />
            </div>
            <div className="mb-3">
              <img  className="mr-4 ml-4" src={gglearth} alt="akm " style={{ width: "55px" }} />
              <img  className="mr-4 " src={gglchrome} alt="akm " style={{ width: "55px" }} />
              <img  className="mr-4 " src={gglcls} alt="akm " style={{ width: "55px" }} />
            </div>
            <div className="mb-3">
              <img  className="mr-4 ml-4" src={gglbuss} alt="akm " style={{ width: "55px" }} />
              <img  className="mr-4 " src={gglads} alt="akm " style={{ width: "55px" }} />
              <img src={gglcls} alt="akm " style={{ width: "55px" }} />
            </div>

            <div className="mb-3">
              <img  className="mr-4 ml-4" src={gglduo} alt="akm " style={{ width: "55px" }} />
              <img  className="mr-4 " src={gglmaps} alt="akm " style={{ width: "55px" }} />
              <img src={gglcls} alt="akm " style={{ width: "55px" }} />
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default Modelpop;
