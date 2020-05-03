import React, { Component } from "react";

export class features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>Download TruthX App</h2>
            <p>
              Feel the better experience of TruthX as you download our mobile
              application to your smart device. Available for Android and iOS.
            </p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d) => (
                  <div className="col-xs-6 col-md-3">
                    {" "}
                    <i className={d.icon}></i>
                    <h3>{d.title}</h3>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    );
  }
}

export default features;
