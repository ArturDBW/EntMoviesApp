import data from "../data.json";
import OnlyMoviesItem from "../components/OnlyMoviesItem";
export default function Movies() {
  const onlyMovies = data.filter((item) => item.category === "Movie");

  return (
    <>
      <h2 className="listContainer__h2">Recommended for you</h2>
      <div className="listContainer">
        {onlyMovies.map((item, index) => (
          <OnlyMoviesItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}
