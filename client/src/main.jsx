import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom/dist";
import "./index.css";

import App from "./App.jsx";
import Home from "./pages/Home";
import Scheduler from "./pages/Scheduler";
import Task from "./pages/Task";
import Note from "./pages/Note";
import SingleTask from './pages/SingleTask';
// import Profile from './pages/Profile';
import Logout from "./components/Logout";
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
      {
        path: '/note',
        element: <Note />
      },
      {
        path: '/logout',
        element: <Logout />
      },
      {
        path: '/scheduler',
        element: <Scheduler />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
