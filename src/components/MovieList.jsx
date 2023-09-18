import { useOutletContext } from "react-router-dom";
import { AllMovieItem } from "./AllMovieItem";

export function MovieList() {
  const { movies, searchTitle } = useOutletContext();

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLocaleLowerCase().includes(searchTitle.toLocaleLowerCase())
  );

  return (
    <>
      <h2 className="listContainer__h2">Recommended for you</h2>
      <div className="listContainer">
        {filteredMovies.map((item) => (
          <AllMovieItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}
