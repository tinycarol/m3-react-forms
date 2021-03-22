import "./App.css";
import { Component } from "react";

export default class App extends Component {
  state = {
    name: "Link el gato",
    bio: "ola k ase",
    private: true,
    status: "single",
  };

  handleChange = (e) => {
    let value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [e.target.id]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.name);
    console.log(this.state.bio);
    /*
    axios.post("...", {...this.state})
    .then()
    */
  }

  render() {
    return (
      <div className="App">
        <h1>Edit user</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <div className="help">
              i<div className="help-text">User's full name</div>
            </div>
          </div>
          <div>
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              name="bio"
              value={this.state.bio}
              onChange={this.handleChange}
            />
            <div className="help">
              i<div className="help-text">User's bio</div>
            </div>
          </div>
          <div>
            <label htmlFor="private">Private profile</label>
            <input
              type="checkbox"
              id="private"
              name="private"
              checked={this.state.private}
              onChange={this.handleChange}
            />
            <div className="help">
              i<div className="help-text">Set profile to non public</div>
            </div>
          </div>
          <div>
            <label htmlFor="reason">Relationship status</label>
            <select
              id="status"
              name="status"
              value={this.state.status}
              onChange={this.handleChange}
            >
              <option value="single">Single</option>
              <option value="complicated">It's complicated</option>
              <option value="married">Married</option>
              <option value="relationship">In a relationship</option>
              <option value="unknown">Unknown</option>
            </select>
            <div className="help">
              i<div className="help-text">User's relationship status</div>
            </div>
          </div>
          <button type="submit">Edit</button>
        </form>
      </div>
    );
  }
}
