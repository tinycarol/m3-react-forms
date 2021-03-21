import "./App.css";
import { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div class="App">
        <h1>Edit user</h1>
        <form>
          <div>
            <label for="name">Name</label>
            <input id="name" name="name" value="Pepe Pérez" />
            <div class="help">
              i<div class="help-text">User's full name</div>
            </div>
          </div>
          <div>
            <label for="bio">Bio</label>
            <textarea id="bio" name="bio">
              Born in 1992
            </textarea>
            <div class="help">
              i<div class="help-text">User's bio</div>
            </div>
          </div>
          <div>
            <label for="private">Private profile</label>
            <input type="checkbox" id="private" name="private" />
            <div class="help">
              i<div class="help-text">Set profile to non public</div>
            </div>
          </div>
          <div>
            <label for="reason">Relationship status</label>
            <select id="status" name="status">
              <option value="single">Single</option>
              <option value="complicated">It's complicated</option>
              <option value="married">Married</option>
              <option value="relationship">In a relationship</option>
              <option value="unknown">Unknown</option>
            </select>
            <div class="help">
              i<div class="help-text">User's relationship status</div>
            </div>
          </div>
          <button type="submit">Edit</button>
        </form>
      </div>
    );
  }
}
