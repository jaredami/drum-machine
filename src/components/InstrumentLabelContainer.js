import React, { Component } from "react";

class InstrumentLabelContainer extends Component {
  render() {
    return (
      <div id="instLabelsContainer">
        <div className="instLabelContainer crashColor" id="crashLabel">
          <p className="instLabel">CRASH</p>
        </div>
        <div className="instLabelContainer rideColor">
          <p className="instLabel">RIDE</p>
        </div>
        <div className="instLabelContainer hatOpenColor">
          <p className="instLabel">HIHAT-Op</p>
        </div>
        <div className="instLabelContainer hatClosedColor">
          <p className="instLabel">HIHAT-Cl</p>
        </div>
        <div className="instLabelContainer tomColor">
          <p className="instLabel">TOM</p>
        </div>
        <div className="instLabelContainer snareColor">
          <p className="instLabel">SNARE</p>
        </div>
        <div className="instLabelContainer clapColor">
          <p className="instLabel">CLAP</p>
        </div>
        <div className="instLabelContainer kickColor">
          <p className="instLabel">KICK</p>
        </div>
      </div>
    );
  }
}

export default InstrumentLabelContainer;
