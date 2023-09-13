import data from "../data.json";
import MovieItem from "./MovieItem";
import PropTypes from "prop-types";

console.log(data);

export default function MovieList() {
  return (
    <>
      <h2 className="movieListContainer__h2">Recommended for you</h2>
      <div className="movieListContainer">
        {/* <img src="../public/large.jpg" alt="test" /> */}
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

// export default function MovieList() {
//     return (
//       <>
//         <h2 className="movieListContainer__h2">Recommended for you</h2>
//         <div className="movieListContainer">
//           <img src={testImage} />
//           <p>
//             <span>2019</span>
//             <span>Movie</span>
//             <span>PG</span>
//           </p>
//           <p>The great lands</p>
//         </div>
//       </>
//     );
//   }
