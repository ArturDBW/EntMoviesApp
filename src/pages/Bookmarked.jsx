import { AllMovieItem } from "../components/AllMovieItem";
import { useOutletContext } from "react-router-dom";

export default function Bookmarked() {
  const { movies } = useOutletContext();

  const onlyBookmarkedMovies = movies.filter(
    (item) => item.isBookmarked === true && item.category === "Movie"
  );
  const onlyBookmarkedTvSeries = movies.filter(
    (item) => item.isBookmarked === true && item.category === "TV Series"
  );
  return (
    <>
      <h2 className="listContainer__h2">Bookmarked Movies</h2>
      <div className="listContainer">
        {onlyBookmarkedMovies.map((movieItem, index) => (
          <AllMovieItem item={movieItem} key={index} />
        ))}
      </div>
      <h2 className="listContainer__h2 mt">Bookmarked TV Series</h2>
      <div className="listContainer">
        {onlyBookmarkedTvSeries.map((tvSeriesItem, index) => (
          <AllMovieItem item={tvSeriesItem} key={index} />
        ))}
      </div>
    </>
  );
}
