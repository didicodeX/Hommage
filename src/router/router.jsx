import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("../features/donations/pages/HomePage"));

const SuccessPage = lazy(() =>
  import("../features/donations/pages/SuccessPage")
);
const CancelPage = lazy(() => import("../features/donations/pages/CancelPage"));
// const NotFound = lazy(() => import("../pages/NotFound"));

export const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: "/",
  },

  {
    element: <SuccessPage />,
    path: "/success",
  },
  {
    element: <CancelPage />,
    path: "/cancel",
  },
]);
