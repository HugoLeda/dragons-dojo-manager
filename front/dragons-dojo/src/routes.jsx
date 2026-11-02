import { createBrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import Alunos from "./pages/Alunos";



const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,    
  },  
  {
    path: "/alunos",
    element: <Alunos />
  }
]);

export default Router;