import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import "preline/preline";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";

import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import UserProvider from "./Context/User.context";
import GuseRoute from "./Components/GuseRoute/GuseRoute";
import Notfound from "./Pages/Notfound/Notfound";
import CartProvider from "./Context/Cart.context";
import Cart from "./Pages/Cart/Cart";
import Wish from "./Pages/Wish/Wish";
import ForgetPass from "./Components/ForgetPass/ForgetPass";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import ChekOut from "./Pages/ChekOut/ChekOut";
import Orders from "./Pages/Orders/Orders";
import Brands from "./Pages/Brands/Brands";
import BrandDetails from "./Pages/BrandDetails/BrandDetails";
import Category from "./Pages/Category/Category";
import CategoryDetails from "./Pages/CategoryDetails/CategoryDetails";
import Allproducts from "./Pages/Allproducts/Allproducts";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "cart", element: <Cart /> },
        { path: "wish", element: <Wish /> },
        { path: "product/:id", element: <ProductDetails /> },
        { path: "chekout", element: <ChekOut /> },
        { path: "allorders", element: <Orders /> },
        { path: "brands", element: <Brands   /> },
        { path: "branddetails/:id", element: <BrandDetails   /> },
        { path: "category", element: <Category   /> },
        { path: "categorydetails/:id", element: <CategoryDetails   /> },
        { path: "allproducts", element: <Allproducts   /> },
     
      ],
    },
    {
      path: "/",
      element: (
        <GuseRoute>
          <Layout />
        </GuseRoute>
      ),
      children: [
        { path: "signup", element: <Signup /> },
        { path: "login", element: <Login /> },
      
        {path:"/forget" ,element: <ForgetPass />}
      ],
    },

    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "*",
          element: <Notfound />,
        },
        
      ],
    },
  ]);
  return (
    <>
      <UserProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </UserProvider>
      <Toaster />
    </>
  );
}

export default App;
