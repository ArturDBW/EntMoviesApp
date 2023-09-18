import { OnlyTvSeriesItem } from "../components/OnlyTvSeriesItem";
import { useOutletContext } from "react-router-dom";

export function TvSeries() {
  const { movies, searchTitle } = useOutletContext();
  const onlyTvSeries = movies.filter((item) => item.category === "TV Series");

  const filteredMovies = onlyTvSeries.filter((movie) =>
    movie.title.toLocaleLowerCase().includes(searchTitle.toLocaleLowerCase())
  );

  return (
    <>
      <h2 className="listContainer__h2">TV Series Recommended for you</h2>
      <div className="listContainer">
        {filteredMovies.map((item, index) => (
          <OnlyTvSeriesItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}
