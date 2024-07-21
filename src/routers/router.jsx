import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../shop/Shop";
// import Blog from "../components/OwnedBooks";
import About from "../components/About";
import SingleBook from "../shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Dashboard from "../dashboard/Dashboard";
import Categories from "../components/Categories";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../privateRoute/PrivateRoute";
import OwnedBooks from "../components/OwnedBooks";
import Logout from "../components/Logout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/ownedBooks",
        element: <OwnedBooks />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BACKEND_URI}/book/${params.id}`),
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
      },
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />,
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />,
      },
      {
        path: "/admin/dashboard/edit-books/:id",
        element: <EditBooks />,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_BACKEND_URI}/book/${params.id}`),
      },

    ]
  },

  {
    path: "sign-up",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "logout",
    element: <Logout />
  },

]);

export default router;
