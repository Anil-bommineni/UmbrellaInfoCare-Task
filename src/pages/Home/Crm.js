import React from "react";
import MainLayout from "../../Layouts/MainLayout";
import MyAppsOne from "./MyAppsOne" 


class crmOne extends React.Component {
  state ={

  }
getData = (name, age ) =>{
this.setState({
  name:name  , 
  age :age 
})
 }
  render() {
    return (
      <MainLayout active="crm">
       <div>
   <p>
    Name : {this.state.name }
   </p>
   <p>
    Age : {this.state.age }
   </p>
       <MyAppsOne  onRide = {this.getData}/>
     
       </div>
      </MainLayout>
    );
  }
}


export default crmOne;
