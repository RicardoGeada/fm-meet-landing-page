import "./App.scss";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
