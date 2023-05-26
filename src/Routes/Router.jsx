import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root/Root";
import Blog from "../components/Blog/Blog";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Error from "../Error/Error";
import PrivateRouter from "../components/PrivateRouter/PrivateRouter";
import ViewDetails from "../components/VeiwDetails/ViewDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/view-details/:id",
        element: (
          <PrivateRouter>
            <ViewDetails />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://the-hub-server.vercel.app/${params.id}`),
      },
    ],
  },
]);

export default Router;


