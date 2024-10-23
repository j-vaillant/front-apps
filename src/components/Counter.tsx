import { MouseEventHandler, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const add: MouseEventHandler = () => {
    setCount((prev) => prev + 1);
  };

  const substract: MouseEventHandler = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col">
      <span className="text-[48px]">{count}</span>
      <div>
        <button className="text-xl" onClick={add}>
          Add
        </button>
        <button className="text-xl ml-2" onClick={substract}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
