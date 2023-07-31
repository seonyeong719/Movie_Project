import { createBrowserRouter } from "react-router-dom";
import LayoutIndex from "../Components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutIndex />,
    children: [
      {
        path: "/",
        element: "",
      },
      {
        path: "/topRated",
        element: "",
      },
      {
        path: "/nowPlaying",
        element: "",
      },
      {
        path: "/upComing",
        element: "",
      },
      {
        path: "/search/:title",
        element: "",
      },
      {
        path: "/detail/:movieId",
        element: "",
      },
    ],
  },
]);

export default router;
