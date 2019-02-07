import React, { Component } from "react";

class InstrumentLabelContainer extends Component {
  render() {
    return (
      <div id="inst-labels-container">
        <div className="inst-label-container crash-color" id="crashLabel">
          <p className="inst-label">CRASH</p>
        </div>
        <div className="inst-label-container ride-color">
          <p className="inst-label">RIDE</p>
        </div>
        <div className="inst-label-container hatOpen-color">
          <p className="inst-label">HIHAT-Op</p>
        </div>
        <div className="inst-label-container hatClosed-color">
          <p className="inst-label">HIHAT-Cl</p>
        </div>
        <div className="inst-label-container tom-color">
          <p className="inst-label">TOM</p>
        </div>
        <div className="inst-label-container snare-color">
          <p className="inst-label">SNARE</p>
        </div>
        <div className="inst-label-container clap-color">
          <p className="inst-label">CLAP</p>
        </div>
        <div className="inst-label-container kick-color">
          <p className="inst-label">KICK</p>
        </div>
      </div>
    );
  }
}

export default InstrumentLabelContainer;
