import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <h1>Hello World</h1> */}
        <NavBar />
        <News />
      </div>
    );
  }
}
