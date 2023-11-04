import React from "react";
class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = { input: "" };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <>
        <input onChange={this.handleInput} value={this.state.input} />
        {this.state.input}
      </>
    );
  }
}
export default ClassComponent;
