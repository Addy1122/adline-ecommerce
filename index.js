import React, { lazy, Suspense } from "react";
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Provider, useSelector } from "react-redux";
import store from "./utils/store";
import './index.css';
import Clothing from './components/screen/Clothing';
import Promo from './components/Promo';
import Newarrival from './components/Newarrival';
import Brand from './components/Brand';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Productlist from './components/Productlist';
import Navbar from './components/Navbar';
import Card from './components/screen/Card';
import Furniture from './components/screen/Furniture';
import Shoe from './components/screen/Shoe';
import Miscellaneous from './components/screen/Miscellaneous';
import Checkout from './components/screen/Checkout';
import Login from './components/screen/Login';
import Logout from './components/screen/Logout';
import { selectUser } from "./utils/userSlice";


const Electronics = lazy(() => import('./components/screen/Electronics'));

const root = ReactDOM.createRoot(document.getElementById('root'));

const Auth = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      {user ? <Logout /> : <Login />}
    </div>
  );
};

const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Promo />
            <Productlist />
            <Newarrival />
            <Brand />
            <Newsletter />
            <Footer />
          </>
        ),
      },
      {
        path: "/clothing",
        element: <Clothing />,
      },
      {
        path: "/products/:id",
        element: <Card />,
      },
      {
        path: "/electronics",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Electronics />
          </Suspense>
        ),
      },
      {
        path: "/furniture",
        element: <Furniture />,
      },
      {
        path: "/shoes",
        element: <Shoe />,
      },
      {
        path: "/miscellaneous",
        element: <Miscellaneous />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/login",
        element: (
          <Auth />
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(
  <Provider store={store}>
    <RouterProvider router={AppRouter} />
  </Provider>
);

