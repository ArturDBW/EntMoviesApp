import PropTypes from "prop-types";

export default function MovieItem({ item }) {
  const { title, thumbnail, year, category, rating } = item;
  return (
    <div className="movieListContainer">
      <img src={thumbnail.regular.small} />
      <p>
        <span>{year}</span>
        <span>{category}</span>
        <span>{rating}</span>
      </p>
      <p>{title}</p>
    </div>
  );
}

MovieItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.object,
    year: PropTypes.number,
    category: PropTypes.string,
    rating: PropTypes.string,
    isBookmarked: PropTypes.bool,
    isTrending: PropTypes.bool,
  }),
};

// MovieItem.propTypes = {
//   item: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     year: PropTypes.number.isRequired,
//     category: PropTypes.string.isRequired,
//     rating: PropTypes.string.isRequired,
//     thumbnail: PropTypes.shape({
//       trending: PropTypes.shape({
//         small: PropTypes.string.isRequired,
//         large: PropTypes.string.isRequired,
//       }).isRequired,
//       regular: PropTypes.shape({
//         small: PropTypes.string.isRequired,
//         medium: PropTypes.string.isRequired,
//         large: PropTypes.string.isRequired,
//       }).isRequired,
//     }).isRequired,
//     // Możesz dodać więcej walidacji dla innych właściwości
//   }).isRequired,
// };
