import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import HomePageWOW from "./pages/HomePage.WOW";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/wow",
    Component: HomePageWOW,
  },
  {
    path: "/products/sun-ninja-tents",
    Component: ProductPage,
  },
]);
