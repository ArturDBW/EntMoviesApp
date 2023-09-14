import PropTypes from "prop-types";

export default function OnlyMoviesItem({ item }) {
  const { title, thumbnail, year, category, rating } = item;

  return (
    <div className="listContainer__item">
      <img className="listContainer__item--img" src={thumbnail.regular.small} />
      <p className="listContainer__item--p">
        <span className="listContainer__item--year">{year}</span>
        <span className="listContainer__item--category">{category}</span>
        <span className="listContainer__item--rating">{rating}</span>
      </p>
      <p className="listContainer__item--title">{title}</p>
      <div className="listContainer__item--btnBookmarked">
        <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
          <path
            className="listContainer__item--svg"
            d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
            stroke="#FFF"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </div>
    </div>
  );
}

OnlyMoviesItem.propTypes = {
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
