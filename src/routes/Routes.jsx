import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Coffee from "../pages/Coffee";
import Dashboard from "../pages/Dashboard"; 
import CoffeeCarts from "../components/Home/CoffeeCarts"; 
import CoffeeDetails from "../pages/CoffeeDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('../categories.json'),
        children: [ 
          {
            path: "/",
            element: <CoffeeCarts />,
            loader: () => fetch('../coffees.json')
          }, 
          {
            path: "/category/:category",
            element: <CoffeeCarts />,
            loader: () => fetch('../coffees.json')
          }, 
        ]
      },
      {
        path: "/coffees",
        element: <Coffee />,
        loader: () => fetch('../coffees.json')
      },
      {
        path: "/coffee/:id",
        element: <CoffeeDetails />,
        loader: () => fetch('../coffees.json')
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default routes;
