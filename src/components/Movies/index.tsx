import { formatData } from "../../utils/data";
import YearList from "./YearList";

const Movies = () => {
  const movies = formatData();
  const years = Object.keys(movies);

  return <YearList years={years} />;
};

export default Movies;
