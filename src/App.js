import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import {createBrowserRouter , createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import RootLayout from "./Pages/Root";
import ErrorPage from "./Pages/Error";
import ProductDetails from "./Pages/ProductDetails";

//Alternative method to create route
// const routeDefinition = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/products' element={<Products/>}/>
//   </Route>
// )
// const router = createBrowserRouter(routeDefinition)

//Object based
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      // {path:'/*',element:<Error/>},
      { path: "products/:productId", element: <ProductDetails /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
