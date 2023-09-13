import testImage from "../assets/thumbnails/dogs/regular/small.jpg";

export default function MovieList() {
  return (
    <>
      <h2 className="movieListContainer__h2">Recommended for you</h2>
      <div className="movieListContainer">
        <img src={testImage} />
        <p>
          <span>2019</span>
          <span>Movie</span>
          <span>PG</span>
        </p>
        <p>The great lands</p>
      </div>
    </>
  );
}
