import testImage from "../assets/thumbnails/undiscovered-cities/regular/medium.jpg";

export default function Slider() {
  return (
    <>
      <h2 className="sliderContainer__h2">Trending</h2>
      <div className="sliderContainer">
        <img src={testImage} />
      </div>
    </>
  );
}
