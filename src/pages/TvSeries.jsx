import { useOutletContext } from "react-router-dom";
import OnlyTvSeriesItem from "../components/OnlyTvSeriesItem";

export default function Movies() {
  const { movies, searchTitle } = useOutletContext();
  const onlyTvSeries = movies.filter((item) => item.category === "TV Series");

  const filteredMovies = onlyTvSeries.filter((movie) =>
    movie.title.toLocaleLowerCase().includes(searchTitle.toLocaleLowerCase())
  );

  return (
    <>
      <h2 className="listContainer__h2">Recommended for you</h2>
      <div className="listContainer">
        {filteredMovies.map((item, index) => (
          <OnlyTvSeriesItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}
