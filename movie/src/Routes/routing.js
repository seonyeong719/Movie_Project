import { createBrowserRouter } from "react-router-dom";
import LayoutIndex from "../Components/Layout";
import Home from "../Pages/ListPage/home";
import TopRated from "../Pages/ListPage/topRated";
import NowPlaying from "../Pages/ListPage/nowPlaying";
import UpComing from "../Pages/ListPage/upComing";
import SearchList from "../Pages/ListPage/searchList";
import DetailPage from "../Pages/Detail/detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutIndex />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/topRated",
        element: <TopRated />,
      },
      {
        path: "/nowPlaying",
        element: <NowPlaying />,
      },
      {
        path: "/upComing",
        element: <UpComing />,
      },
      {
        path: "/search/:title",
        element: <SearchList />,
      },
      {
        path: "/detail/:movieId",
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
