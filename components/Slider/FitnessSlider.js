import React from "react";
import Slider from "react-slick";
import imgSlide1 from "../../assets/images/slides/home-bg-24.jpg";
import imgSlide2 from "../../assets/images/slides/home-bg-25.jpg";

const FitnessSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "0",
    className: "default-slider",
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="home-slider" id="home">
      <Slider {...settings}>
        <div className="slide">
          <div
            className="slide-img parallax-effect"
            style={{
              background: `url(${imgSlide1}) center center / cover scroll no-repeat`,
            }}
          ></div>
          <div className="hero-text-wrap">
            <div className="hero-text fade-center-text">
              <div className="container">
                <div className="white-color text-center">
                  <h1 className="font-700">Push Yourself</h1>
                  <h4 className="font-300 source-font">
                    Rest a while and run a mile.
                  </h4>
                  <p className="text-center mt-30">
                    <a
                      href={process.env.PUBLIC_URL}
                      className="btn btn-light font-500 btn-md btn-square remove-margin"
                    >
                      Start Today
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="slide">
          <div
            className="slide-img parallax-effect"
            style={{
              background: `url(${imgSlide2}) center center / cover scroll no-repeat`,
            }}
          ></div>
          <div className="hero-text-wrap">
            <div className="hero-text fade-center-text">
              <div className="container">
                <div className="white-color text-center">
                  <h1 className="font-700">Fit for Life</h1>
                  <h4 className="font-300 source-font">
                    Fitness is not a destination it is a way of life.
                  </h4>
                  <p className="text-center mt-30">
                    <a
                      href={process.env.PUBLIC_URL}
                      className="btn btn-dark font-500 btn-md btn-square remove-margin"
                    >
                      Start Today
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default FitnessSlider;
