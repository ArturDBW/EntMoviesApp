import { Component } from "react";
import Slider from "react-slick";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";

export default class SimpleSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slidesToShow: 2.5, // Początkowa wartość slidesToShow
    };

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    // Dodajmy nasłuchiwanie zmiany rozdzielczości przy montowaniu komponentu
    window.addEventListener("resize", this.handleResize);
    // Wywołajmy funkcję do ustawienia slidesToShow na początku
    this.handleResize();
  }

  componentWillUnmount() {
    // Usuńmy nasłuchiwanie zmiany rozdzielczości przy odmontowaniu komponentu
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    // Pobierz aktualną szerokość okna przeglądarki
    const windowWidth = window.innerWidth;

    // Ustalmy, czy szerokość jest mniejsza niż 1000px, i dostosujmy slidesToShow
    if (windowWidth < 1000) {
      this.setState({ slidesToShow: 1.5 }); // Nowa wartość slidesToShow dla mniejszej rozdzielczości
    } else {
      this.setState({ slidesToShow: 2.5 }); // Wartość domyślna
    }
  }
  render() {
    const { slidesToShow } = this.state;
    const settings = {
      dots: false,
      infinite: true,
      speed: 600,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
    };
    return (
      <>
        <h2 className="sliderContainer__h2">Trending</h2>
        <div className="containerCarousele">
          <Slider {...settings}>
            <div className="containerCarousele__box">
              <img className="containerCarousele__box--img" src={image1} />
              <div className="containerCarousele__info">
                <span className="containerCarousele__info--year">2021</span>
                <span>
                  <svg
                    width="12"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                      fill="#FFF"
                      opacity=".75"
                    />
                  </svg>
                </span>
                <span className="containerCarousele__info--category">
                  Movie
                </span>
                <span className="containerCarousele__info--rating">18+</span>
                <p className="containerCarousele__info--title">1998</p>
              </div>
            </div>
            <div className="containerCarousele__box">
              <img className="containerCarousele__box--img" src={image2} />
              <div className="containerCarousele__info">
                <span className="containerCarousele__info--year">2019</span>
                <span>
                  <svg
                    width="12"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                      fill="#FFF"
                      opacity=".75"
                    />
                  </svg>
                </span>
                <span className="containerCarousele__info--category">
                  Movie
                </span>
                <span className="containerCarousele__info--rating">PG</span>
                <p className="containerCarousele__info--title">Beyond Earth</p>
              </div>
            </div>
            <div className="containerCarousele__box">
              <img className="containerCarousele__box--img" src={image3} />
              <div className="containerCarousele__info">
                <span className="containerCarousele__info--year">2021</span>
                <span>
                  <svg
                    width="12"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                      fill="#FFF"
                      opacity=".75"
                    />
                  </svg>
                </span>
                <span className="containerCarousele__info--category">
                  Movie
                </span>
                <span className="containerCarousele__info--rating">PG</span>
                <p className="containerCarousele__info--title">Bottom Gear</p>
              </div>
            </div>
            <div className="containerCarousele__box">
              <img className="containerCarousele__box--img" src={image4} />
              <div className="containerCarousele__info">
                <span className="containerCarousele__info--year">2018</span>
                <span>
                  <svg
                    width="12"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                      fill="#FFF"
                      opacity=".75"
                    />
                  </svg>
                </span>
                <span className="containerCarousele__info--category">
                  TV Series
                </span>
                <span className="containerCarousele__info--rating">PG</span>
                <p className="containerCarousele__info--title">
                  Dark Side of the Moon
                </p>
              </div>
            </div>
            <div className="containerCarousele__box">
              <img className="containerCarousele__box--img" src={image5} />
              <div className="containerCarousele__info">
                <span className="containerCarousele__info--year">2019</span>
                <span>
                  <svg
                    width="12"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.173 0H1.827A1.827 1.827 0 0 0 0 1.827v8.346C0 11.183.818 12 1.827 12h8.346A1.827 1.827 0 0 0 12 10.173V1.827A1.827 1.827 0 0 0 10.173 0ZM2.4 5.4H1.2V4.2h1.2v1.2ZM1.2 6.6h1.2v1.2H1.2V6.6Zm9.6-1.2H9.6V4.2h1.2v1.2ZM9.6 6.6h1.2v1.2H9.6V6.6Zm1.2-4.956V2.4H9.6V1.2h.756a.444.444 0 0 1 .444.444ZM1.644 1.2H2.4v1.2H1.2v-.756a.444.444 0 0 1 .444-.444ZM1.2 10.356V9.6h1.2v1.2h-.756a.444.444 0 0 1-.444-.444Zm9.6 0a.444.444 0 0 1-.444.444H9.6V9.6h1.2v.756Z"
                      fill="#FFF"
                      opacity=".75"
                    />
                  </svg>
                </span>
                <span className="containerCarousele__info--category">
                  TV Series
                </span>
                <span className="containerCarousele__info--rating">E</span>
                <p className="containerCarousele__info--title">
                  Undiscovered Cities
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
