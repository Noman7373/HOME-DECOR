import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Applayout from "./components/Applayout";
import Main from "./components/Main";
import About from "./components/About";
import Contact from "./components/Contact";
import Bedrooms from "./components/Bedrooms";
import ProductDetail from "./components/ProductDetail";
import Livingroomsection from "./components/Livingroomsection";
import DiningRoom from "./components/DiningRoom";
import Officeitems from "./components/Officeitems";
import DecorProduct from "./components/DecorProduct";
import KitchenProducts from "./components/KitchenProducts";
// import ScrollTop from "./components/ScrollTop";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        {
          path: "/",
          element: (
            <>
              <Main />
            </>
          ),
        },
        {
          path: "/bedroom",
          element: <Bedrooms />,
        },
        {
          path: "/livingroom",
          element: <Livingroomsection />,
        },
        {
          path: "/dinningroom",
          element: <DiningRoom />,
        },
        {
          path: "/office",
          element: <Officeitems />,
        },
        {
          path: "/Decor",
          element: <DecorProduct />,
        },
        {
          path: "/kitchen",
          element: <KitchenProducts />,
        },
        {
          path: "/products-detail/:id",
          element: <ProductDetail />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/main",
      element: <Main />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
  
      <ToastContainer />
    </>
  );
}

export default App;
