import { formatData } from "../../utils/data";
import MoviesList from "./MoviesList";

const Movies = () => {
  const movies = formatData();
  const years = Object.keys(movies);

  return <div></div>;
};

export default Movies;
