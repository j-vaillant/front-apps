import { FC } from "react";

type Props = {
  years: string[];
};

const YearList: FC<Props> = ({ years }) => {
  return (
    <div>
      <ul>
        {years.map((year, index) => {
          return <li key={index}>{year}</li>;
        })}
      </ul>
    </div>
  );
};

export default YearList;
