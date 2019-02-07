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
      <div id="settings-container">
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
          <div id="adjust-tempo-container">
            <button
              className="settings-btn"
              onClick={this.handleTempoDecreaseClick}
            >
              <i className="icon ion-md-arrow-dropdown" />
            </button>
            <p id="tempo" settings-btn>
              {this.state.tempo}
            </p>
            <button
              className="settings-btn"
              onClick={this.handleTempoIncreaseClick}
            >
              <i className="icon ion-md-arrow-dropup" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SettingsContainer;
