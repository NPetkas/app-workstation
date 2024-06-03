import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom/dist";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home";
import Task from "./pages/Task";
import SingleTask from './pages/SingleTask';
// import Profile from './pages/Profile';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: '/task',
        element: <Task />
      },
      {
        path: '/task/:taskId',
        element: <SingleTask />
      },
      // {
      //   path: '/me',
      //   element: <Profile />
      // },
      // {
      //   path: '/profiles/:profileId',
      //   element: <Profile />
      // }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
