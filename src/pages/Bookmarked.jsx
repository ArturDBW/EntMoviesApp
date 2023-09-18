import { AllMovieItem } from "../components/AllMovieItem";
import { useOutletContext } from "react-router-dom";

export function Bookmarked() {
  const { movies } = useOutletContext();

  const onlyBookmarkedMovies = movies.filter(
    (item) => item.isBookmarked === true && item.category === "Movie"
  );
  const onlyBookmarkedTvSeries = movies.filter(
    (item) => item.isBookmarked === true && item.category === "TV Series"
  );

  const BookmarkedMoviesLengthZero = onlyBookmarkedMovies.length > 0;
  const BookmarkedTvSeriesLengthZero = onlyBookmarkedTvSeries.length > 0;
  return (
    <>
      {BookmarkedMoviesLengthZero ? (
        <h2 className="listContainer__h2">Bookmarked Movies</h2>
      ) : (
        <h2 className="listContainer__h2">Add some favourite movies</h2>
      )}
      <div className="listContainer">
        {onlyBookmarkedMovies.map((movieItem, index) => (
          <AllMovieItem item={movieItem} key={index} />
        ))}
      </div>
      {BookmarkedTvSeriesLengthZero ? (
        <h2 className="listContainer__h2">Bookmarked TV Series</h2>
      ) : (
        <h2 className="listContainer__h2">Add some favourite TV Series</h2>
      )}
      <div className="listContainer">
        {onlyBookmarkedTvSeries.map((tvSeriesItem, index) => (
          <AllMovieItem item={tvSeriesItem} key={index} />
        ))}
      </div>
    </>
  );
}
