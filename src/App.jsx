import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppLayout } from "./ui/AppLayout";
import { Home } from "./pages/Home";
import { Movies } from "./pages/Movies";
import { TvSeries } from "./pages/TvSeries";
import { Bookmarked } from "./pages/Bookmarked";
import { Error } from "./ui/Error";
import json from "./data.json";
import { AllMovieItem } from "./components/AllMovieItem";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movies",
        children: [
          {
            path: "",
            element: <Movies />,
          },
          {
            path: ":id",
            element: <AllMovieItem item={json[0]} />,
          },
        ],
      },
      {
        path: "/tvseries",
        element: <TvSeries />,
      },
      {
        path: "/bookmarked",
        element: <Bookmarked />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
