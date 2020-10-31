import React from "react";
import "./calculator.css";

import Button from "../components/Buttons/Button";
import Display from "../components/Display/Display";

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.clearDisplay = this.clearDisplay.bind(this);
    this.addDigit = this.addDigit.bind(this);
    this.operation = this.operation.bind(this);
    this.state = {
      display: "0",
      equalsActive: false,
    };
  }

  addDigit(digit) {
    let value = this.state.display;

    if (this.state.equalsActive) {
      this.clearDisplay();
      value = "0";
    }

    if (value === "0") {
      value = digit;
    } else {
      value += digit;
    }

    this.setState({
      display: value,
    });
  }

  operation() {

    let result = eval(this.state.display.toString());

    this.setState({
      display: result,
      equalsActive: true,
    });
  }

  clearDisplay() {
    this.setState({
      display: "0",
      equalsActive: false,
    });
  }

  render() {
    return (
      <>
        <h1>Calculadora</h1>
        <div className="calculator">
          <Display value={this.state.display} />
          <Button label="C" click={this.clearDisplay} triple />
          <Button label="/" click={this.addDigit} operation />
          <Button label="8" click={this.addDigit} />
          <Button label="7" click={this.addDigit} />
          <Button label="9" click={this.addDigit} />
          <Button label="*" click={this.addDigit} operation />
          <Button label="4" click={this.addDigit} />
          <Button label="5" click={this.addDigit} />
          <Button label="6" click={this.addDigit} />
          <Button label="-" click={this.addDigit} operation />
          <Button label="3" click={this.addDigit} />
          <Button label="2" click={this.addDigit} />
          <Button label="1" click={this.addDigit} />
          <Button label="+" click={this.addDigit} operation />
          <Button label="0" click={this.addDigit} duble />
          <Button label="." click={this.addDigit} />
          <Button label="=" click={this.operation} operation />
        </div>
      </>
    );
  }
}
