import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("../features/donations/pages/HomePage"));
const TestPage = lazy(() => import("../test/TestPage"));
const SuccessPage = lazy(() => import("../features/donations/pages/SuccessPage"));
// const NotFound = lazy(() => import("../pages/NotFound"));

export const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: "/",
  },
  {
    element: <TestPage />,
    path: "/test",
  },
  {
    element: <SuccessPage />,
    path: "/success",
  }
]);
