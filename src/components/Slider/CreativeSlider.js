import React from "react";
import img1 from "../../assets/images/background/cleaning.jpg";
import videoMp4 from "../../assets/images/video/office-day.mp4";
import videoWebm from "../../assets/images/video/office-day.webm";
import useWindowSize from "../../helpers/useWindowSize";
import logo from "../../assets/duatone-logo/logo.png"

const CreativeSlider = () => {
  const height = useWindowSize().height;
  return (
    <section className="pt-0 pb-0 bg-video parallax-effect">
      <div id="hero-bg" className="hero-text-wrap gradient-overlay">
        <div className="hero-text ">
          <div className="container">
            <div className=" text-center">
              <h1 className="white-color font-700 text-uppercase mb-0">
                Beyond
              </h1>
              <h1 className="white-color font-700 text-uppercase mt-0">
                Clean
              </h1>
              <h5 className="white-color" >
                Redefining Spaces with Our Professional Cleaning Mastery!
              </h5>
              <p className="text-center mt-30">
                <a href={process.env.PUBLIC_URL} className="btn btn-outline-white btn-md btn-default btn-animate">
                  <span>
                    Work with us <i className="ion-android-favorite"></i>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage-hero-module" style={{ height: height, overflow: "hidden", backgroundImage: `url(${img1})`, backgroundSize: 'cover' }}>
        <div className="video-container">
          <div className="filter"></div>
          {/* <video autoPlay loop playsInline className="fillWidth">
            <source src={videoMp4} type="video/mp4" />
            <source src={videoWebm} type="video/webm" />
          </video>
          <div className="poster">
            <img src={img1} alt="video-img" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CreativeSlider;
