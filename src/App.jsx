import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./rootLayout/RootLayout";
import Home from "./pages/Home";

const App = () => {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<Home />}></Route>
      </Route>
    )
  );
  return <>
  <RouterProvider router={router}/>
  
  </>;
};

export default App;
