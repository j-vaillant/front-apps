import { FC } from "react";
import { Movie } from "../../utils/data";

type Props = {
  movies: Movie[];
  year: string;
};

const MoviesList: FC<Props> = ({ movies, year }) => {
  return (
    <ul>
      <li>{year}</li>
    </ul>
  );
};

export default MoviesList;
