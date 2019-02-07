import React, { Component } from "react";

class SettingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playPauseIconClass: "ion-md-play",
      tempo: 100
    };
  }

  handlePlayPauseClick = () => {
    if (this.state.playPauseIconClass === "ion-md-play") {
      this.setState({
        playPauseIconClass: "ion-md-pause"
      });
    } else if (this.state.playPauseIconClass === "ion-md-pause") {
      this.setState({
        playPauseIconClass: "ion-md-play"
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
          <button
            className="settings-btn"
            id="playPause"
            onClick={this.handlePlayPauseClick}
          >
            <i
              className={`icon ${this.state.playPauseIconClass}`}
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="settingsSections">
          <button className="settings-btn" id="mute-btn">
            <i id="mute-icon" className="icon ion-md-volume-off" />
          </button>
        </div>
        <div className="settingsSections">
          <div id="adjustTempoContainer">
            <button
              className="settings-btn"
              onClick={this.handleTempoDecreaseClick}
            >
              v
            </button>
            <div id="tempo">{this.state.tempo}</div>
            <button
              className="settings-btn"
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
