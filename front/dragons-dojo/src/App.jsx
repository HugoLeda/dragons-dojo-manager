import Home from './pages/Home'
import GlobalStyles from "./styles/global";

import { RouterProvider } from "react-router-dom";
import Router from "./routes";

function App() {

  return (
    <>
      <GlobalStyles />
      <RouterProvider router={Router} />    
    </>
  )
}

export default App
