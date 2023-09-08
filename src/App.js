import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import TaskManagement from "./components/TaskManagement";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import { Provider } from "react-redux";
import appStore from "./utils/store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <SignUp />,
      },
      {
        path: "/LogIn",
        element: <LogIn />,
      },
      {
        path: "/Task-management-screen/:id",
        element: (
          // Use PrivateRoute to protect the TaskManagement component
          <PrivateRoute component={<TaskManagement />} />
        ),
      },
      {
        path: "/Dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}>
        <Body />
      </RouterProvider>
    </Provider>
  );
}

export default App;

/**
 * App
 *  Header
 *  Body
 *   / ->signup(has signup form Or a login button)  -> if signup done then return to LoginPage
 *   /login -> Login page(if login clicked on /page)
 *   /tasks ->(list of tasks _+ create new task button)
 *   /create-new task -> if on /tasks page the create new task is clicked
 *   /tasks, /create-new task will have front and back navigation button
 *
 *
 *
 */
