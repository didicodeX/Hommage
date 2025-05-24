import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { router } from "./router/router";
import LoadingScreen from "./shared/components/LoadingScreen";

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
