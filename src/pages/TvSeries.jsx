import data from "../data.json";
import OnlyTvSeriesItem from "../components/OnlyTvSeriesItem";

export default function Movies() {
  const onlyTvSeries = data.filter((item) => item.category === "TV Series");

  return (
    <>
      <h2 className="listContainer__h2">Recommended for you</h2>
      <div className="listContainer">
        {onlyTvSeries.map((item, index) => (
          <OnlyTvSeriesItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}
