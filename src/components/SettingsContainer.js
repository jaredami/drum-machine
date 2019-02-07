import React, { Component } from "react";

class SettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faClass: "fa fa-play",
      tempo: 100
    };
  }

  handlePlayPauseClick = () => {
    if (this.state.faClass === "fa fa-play") {
      this.setState({
        faClass: "fa fa-pause"
      });
    } else if (this.state.faClass === "fa fa-pause") {
      this.setState({
        faClass: "fa fa-play"
      });
    }
  };

  handleTempoDecreaseClick = () => {
    this.setState({
      tempo: this.state.tempo - 1
    });
  };
  handleTempoIncreaseClick = () => {
    this.setState({
      tempo: this.state.tempo + 1
    });
  };

  render() {
    return (
      <div id="settingsContainer">
        <div className="settingsSections">
          <button id="playPause" onClick={this.handlePlayPauseClick}>
            <i className={this.state.faClass} aria-hidden="true" />
          </button>
        </div>
        <div className="settingsSections">
          <div>Master volume</div>
          <div>(volume slider)</div>
        </div>
        <div className="settingsSections">
          <div>Tempo</div>
          <div id="adjustTempoContainer">
            <button
              className="adjustTempoBtn"
              onClick={this.handleTempoDecreaseClick}
            >
              v
            </button>
            <div id="tempo">{this.state.tempo}</div>
            <button
              className="adjustTempoButton"
              onClick={this.handleTempoIncreaseClick}
            >
              ^
            </button>
          </div>
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
