import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Index from '../src/App';
import Home from '../src/pages/Home/Home';
import Lesson1 from '../src/pages/Lesson/Lesson1'
import Lesson2 from '../src/pages/Lesson/Lesson2'
import Lesson3 from '../src/pages/Lesson/Lesson3'
import Lesson4 from '../src/pages/Lesson/Lesson4'
import Lesson5 from '../src/pages/Lesson/Lesson5'
import Lesson6 from '../src/pages/Lesson/Lesson6'
import Team from '../src/pages/Team/Team'
import Before from '../src/pages/Test/Before'
import After from '../src/pages/Test/After'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/lesson1",
    element: <Lesson1/>,
  },
  {
    path: "/lesson2",
    element: <Lesson2/>,
  },
  {
    path: "/lesson3",
    element: <Lesson3/>,
  },
  {
    path: "/lesson4",
    element: <Lesson4/>,
  },
  {
    path: "/lesson5",
    element: <Lesson5/>,
  },
  {
    path: "/lesson6",
    element: <Lesson6/>,
  },
  {
    path: "/team",
    element: <Team/>,
  },
  {
    path: "/before",
    element: <Before/>,
  },
  {
    path: "/after",
    element: <After/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
