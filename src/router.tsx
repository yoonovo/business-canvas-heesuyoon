import { createBrowserRouter } from "react-router-dom";
import RecordList from "./pages/RecordList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RecordList />,
  },
  {
    path: "*",
    element: <div>404 Not Found</div>,
  },
]);

export default router;
