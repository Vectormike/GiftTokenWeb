import React, { Component } from "react";

export class Gallery extends Component {
  render() {
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Gallery</h2>
          </div>
          <div className="row">
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/01-large.jpg"
                      title=""
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>We are buying fast</h4>
                      </div>
                      <img
                        src="img/portfolio/01-small.jpg"
                        className="img-responsive"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/05-large.jpg"
                      title=""
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Just the Truth</h4>
                      </div>
                      <img
                        src="img/portfolio/05-small.jpeg"
                        className="img-responsive"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="img/portfolio/07-large.jpg"
                      title=""
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>ROI</h4>
                      </div>
                      <img
                        src="img/portfolio/07-small.jpeg"
                        className="img-responsive"
                        alt=""
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
