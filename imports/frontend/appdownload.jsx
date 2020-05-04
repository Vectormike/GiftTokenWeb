import React, { Component } from "react";
import Fade from "react-reveal/Fade";

export class features extends Component {
  render() {
    return (
      <div id="features" className="text-center">
        <Fade bottom>
          <div className="container">
            <div className="col-md-10 col-md-offset-1 section-title">
              <h2>Download TruthX App</h2>
              <p>
                Feel the better experience of TruthX as you download our mobile
                application to your smart device. Available for iOS and Android.
              </p>
              <div className="text-center mobile_apps">
                <p>You can also download the app and try it for yourself</p>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <a class="button" href="#">
                    <img
                      src="img/apple.jpg"
                      className="img-responsive"
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6">
                  <a className="button" href="#">
                    <img
                      src="img/android.png"
                      className="img-responsive"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
}

export default features;
