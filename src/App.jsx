import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./shared/lib/react-query.js";
import { router } from "./router/router";
import LoadingScreen from "./shared/components/LoadingScreen";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingScreen />}>
        <RouterProvider router={router} />
        <Toaster position="bottom-center" />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
