import React, { Component } from "react";
import SettingsContainer from "./components/SettingsContainer.js";
import BeatContainer from "./components/BeatContainer.js";
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="drumMachineContainer">
          <SettingsContainer />
          <BeatContainer />
        </div>
      </div>
    );
  }
}

export default App;
