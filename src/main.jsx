import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Login from "./components/Login.jsx";
import ProtectedRoute from "./components/protectedRoute.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "/portfolio/:id",
    element: (
      //<ProtectedRoute>
      <PortfolioPage />
      //</ProtectedRoute>
    ),
  },

  { path: "/login", element: <Login /> },
  { path: "/*", element: <div>404 not found</div> },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </QueryClientProvider>
  </StrictMode>
);
