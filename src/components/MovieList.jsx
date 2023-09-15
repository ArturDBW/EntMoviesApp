import data from "../data.json";
import MovieItem from "./MovieItem";
import PropTypes from "prop-types";

export default function MovieList() {
  return (
    <>
      <h2 className="listContainer__h2">Recommended for you</h2>
      <div className="listContainer">
        {data.map((item, index) => (
          <MovieItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}

MovieList.propTypes = {
  item: PropTypes.string,
};
