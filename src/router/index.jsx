import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Practice01 from "../pages/Practice01/1";
import Practice02 from "../pages/Practice02/2";
import Practice03 from "../pages/Practice03/3";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "01",
        element: <Practice01 />,
      },
      {
        path: "02",
        element: <Practice02 />,
      },
      {
        path: "03",
        element: <Practice03 />,
      },
    ],
  },
]);

export default router;
