import React, { Component } from "react";

class SettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faClass: "fa fa-play"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.faClass === "fa fa-play") {
      this.setState({
        faClass: "fa fa-pause"
      });
    } else if (this.state.faClass === "fa fa-pause") {
      this.setState({
        faClass: "fa fa-play"
      });
    }
  }

  render() {
    return (
      <div id="settingsContainer">
        <div className="settingsSections">
          <button id="playPause" onClick={this.handleClick}>
            <i className={this.state.faClass} aria-hidden="true" />
          </button>
        </div>
        <div className="settingsSections">
          <div>Master volume</div>
          <div>(volume slider)</div>
        </div>
        <div className="settingsSections">
          <div>Tempo</div>
          <div>(tempo adjust)</div>
        </div>
        <div className="settingsSections">
          <div>Kit</div>
          <div>(kit selector)</div>
        </div>
      </div>
    );
  }
}

export default SettingsContainer;
