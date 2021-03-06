import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <Fade bottom>
          <div className="container">
            <div className="col-md-8 col-md-offset-2 section-title">
              <h2>Meet the Team</h2>
              <p>
                Meet our hard-working team making your experience a top-notch.
              </p>
            </div>
            <div id="row">
              {this.props.data
                ? this.props.data.map((d) => (
                    <div className="col-md-4 col-sm-6 team">
                      <div className="thumbnail">
                        {" "}
                        <img src={d.img} alt="..." className="team-img" />
                        <div className="caption">
                          <h4>{d.name}</h4>
                          <p>{d.job}</p>
                        </div>
                      </div>
                    </div>
                  ))
                : "loading"}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Team;
