import data from "../data.json";
import BookmarkedMovieItem from "../components/BookmarkedMovieItem";
import BookmarkedTvSeriesItem from "../components/BookmarkedTvSeriesItem";
export default function Bookmarked() {
  const onlyBookmarkedMovies = data.filter(
    (item) => item.isBookmarked === true && item.category === "Movie"
  );
  const onlyBookmarkedTvSeries = data.filter(
    (item) => item.isBookmarked === true && item.category === "TV Series"
  );
  return (
    <>
      <h2 className="listContainer__h2">Bookmarked Movies</h2>
      <div className="listContainer">
        {onlyBookmarkedMovies.map((item, index) => (
          <BookmarkedMovieItem item={item} key={index} />
        ))}
      </div>
      <h2 className="listContainer__h2 mt">Bookmarked TV Series</h2>
      <div className="listContainer">
        {onlyBookmarkedTvSeries.map((item, index) => (
          <BookmarkedTvSeriesItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}
