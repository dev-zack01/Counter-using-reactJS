import React, { Component } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import SimpleCard from "./Card";
class App extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  reset = () => {
    this.setState({ count: 0 });
  };
  render() {
    return (
      <div className="container">
        <div className="output">
          <p>{this.state.count}</p>
        </div>
        <Button onClick={this.increment} variant="contained" color="primary">
          +
        </Button>
        -
        <Button onClick={this.decrement} variant="contained" color="primary">
          -
        </Button>
        -
        <Button onClick={this.reset} variant="contained" color="primary">
          Reset
        </Button>
      </div>
    );
  }
}

export default App;
