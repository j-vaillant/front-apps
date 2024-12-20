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
import Focus from "./Focus";
import Storage from "./Storage";
import Todo from "./Todo";
import InfiniteLoader from "./InfiniteLoader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Counter2 from "./components/Counter/CounterZustand";
import MemoryCards from "./components/MemoryCards";

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
  {
    path: "/focus",
    element: <Focus />,
  },
  {
    path: "/storage",
    element: <Storage />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/infinite",
    element: <InfiniteLoader />,
  },
  {
    path: "/counter2",
    element: <Counter2 />,
  },
  {
    path: "/memoryCards",
    element: <MemoryCards />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;
