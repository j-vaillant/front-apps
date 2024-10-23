import React from "react";
import CatList from "./components/CatList";
import Roulette from "./components/Roulette";
import Main from "./pages/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Note from "./components/Note";
import Counter from "./components/Counter";
import DOM from "./components/DOM";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "cat",
        element: <CatList />,
      },
      {
        path: "roulette",
        element: <Roulette />,
      },
      {
        path: "note",
        element: <Note />,
      },
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "dom",
        element: <DOM />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
