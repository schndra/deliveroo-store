import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error, Layout, Menu, Register, Restaurants } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Restaurants />,
      },
      {
        path: "/menu/:id",
        element: <Menu />,
      },
      {
        path: "/register",
        element: <Register />,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
      <ToastContainer />
    </>
  );
}

export default App;
