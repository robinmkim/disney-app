import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Character from "./routes/Character";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/character/:characterId",
    element: <Character />,
  },
]);
export default router;
