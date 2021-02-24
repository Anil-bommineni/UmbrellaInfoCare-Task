import React  from "react";
class MyAppsOne extends React.Component {
  state = {
    age: 23,
    name: "Raja",
  };
  onClickListener = () => {
    this.props.onRide(this.state.name, this.state.age);
  };
  render() {
    return (
      <div>
        <button onClick={this.onClickListener}>click me</button>
      </div>
    );
  }
}

export default MyAppsOne;
