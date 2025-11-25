import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Shop from "../pages/shop";
import ProductCheckout from "../pages/product-checkout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/product-checkout",
    element: <ProductCheckout />,
  },
]);
