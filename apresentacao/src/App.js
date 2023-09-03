import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./assets/css/estilos.css";
import Home from "./views/Home";
import ErrorPage from "./views/ErrorPage";

function App() {
  
  const router = createBrowserRouter([
    
    {
      path: "/",
      element: < Home />
    },

    {
      path: "/*",
      element: < ErrorPage />
    }
  ])

  return (
    <RouterProvider router={router} />
  );

}

export default App;
