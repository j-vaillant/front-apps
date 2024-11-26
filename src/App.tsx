import React from "react";
import CatList from "./components/CatList";
import Roulette from "./components/Roulette";
import Main from "./pages/Main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Note from "./components/Note";
import Counter from "./components/Counter";
import Context from "./components/ContextDemo";
import Movies from "./components/Movies";
import Pendu from "./components/Pendu";
import Calculator from "./components/Calculator";
import MemoryColors from "./components/MemoryColors";
import Get from "./components/Get";
import Imc from "./components/IMC";

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
        path: "context",
        element: <Context />,
      },
      {
        path: "movies",
        element: <Movies />,
      },
      {
        path: "pendu",
        element: <Pendu />,
      },
      {
        path: "calculator",
        element: <Calculator />,
      },
      {
        path: "memory",
        element: <MemoryColors />,
      },
      {
        path: "imc",
        element: <Imc />,
      },
    ],
  },
  {
    path: "/get/:id",
    element: <Get />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
