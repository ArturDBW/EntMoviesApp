import OnlyMoviesItem from "../components/OnlyMoviesItem";
import { useOutletContext } from "react-router-dom";
export default function Movies() {
  const { movies, searchTitle } = useOutletContext();

  const onlyMovies = movies.filter((item) => item.category === "Movie");

  const filteredMovies = onlyMovies.filter((movie) =>
    movie.title.toLocaleLowerCase().includes(searchTitle.toLocaleLowerCase())
  );

  return (
    <>
      <h2 className="listContainer__h2">Recommended for you</h2>
      <div className="listContainer">
        {filteredMovies.map((item) => (
          <OnlyMoviesItem item={item} key={item.id} />
        ))}
      </div>
    </>
  );
}
