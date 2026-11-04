import { createBrowserRouter} from "react-router-dom";

import Home from "./pages/Home";
import Alunos from "./pages/Alunos";
import FichaAluno from "./pages/FichaAluno";

const Router = createBrowserRouter([
  { path: "/", element: <Home /> },  
  { path: "/alunos", element: <Alunos /> },
  { path: "/FichaAluno/novo", element: <FichaAluno mode="create" /> },
  { path: "/FichaAluno/:id", element: <FichaAluno mode="view" /> },
  { path: "/FichaAluno/:id/editar", element: <FichaAluno mode="edit" /> },
]);

export default Router;