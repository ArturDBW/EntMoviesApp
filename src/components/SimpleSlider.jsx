import { Component } from "react";
import Slider from "react-slick";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: 2.5,
      slidesToScroll: 2,
    };
    return (
      <>
        <h2 className="sliderContainer__h2">Trending</h2>
        <div className="containerCarousele">
          <Slider {...settings}>
            <div className="containerCarousele__box">
              <img className="containerCarousele__box--img" src={image1} />
            </div>
            <div className="containerCarousele__box">
              <img className="containerCarousele__box--img" src={image2} />
            </div>
            <div className="containerCarousele__box">
              <img className="containerCarousele__box--img" src={image3} />
            </div>
            <div className="containerCarousele__box">
              <img className="containerCarousele__box--img" src={image4} />
            </div>
            <div className="containerCarousele__box">
              <img className="containerCarousele__box--img" src={image5} />
            </div>
          </Slider>
        </div>
      </>
    );
  }
}

// {/*  */}
