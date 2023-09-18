import testImage from "../../public/small.jpg";

export function Slider() {
  return (
    <>
      <h2 className="sliderContainer__h2">Trending</h2>
      <div className="sliderContainer">
        <img src={testImage} />
      </div>
    </>
  );
}
