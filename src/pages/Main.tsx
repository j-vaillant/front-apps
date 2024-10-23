import { Link, Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="flex w-full flex-col justify-center items-center">
      <nav className="w-full flex justify-between list-none p-5">
        <li>
          <Link to="/cat">Cat</Link>
        </li>
        <li>
          <Link to="/roulette">Roulette</Link>
        </li>
        <li>
          <Link to="/note">Note</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/context">Context</Link>
        </li>
      </nav>
      <Outlet />
    </div>
  );
};

export default Main;
