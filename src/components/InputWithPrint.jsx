import { Component } from "react";

export default class InputWithPrint extends Component {
  state = {
    text: "",
  };

  handleInputChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.handleInputChange} />
        <div>My text is {this.state.text}</div>
      </div>
    );
  }
}
