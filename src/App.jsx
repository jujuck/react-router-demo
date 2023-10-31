import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import axios from "axios";

import './App.css'
import Home from './pages/Home'
import Products from './pages/Products'
import OneProduct from './pages/OneProduct'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
   {
    path: "/products",
    element: <Products />,
    loader: async () => {
      return await axios.get('http://localhost:3000/people').then(res => res.data);
    }
  },
  {
    path: "/products/:id",
    element: <OneProduct />,
    loader: async ({ params }) => {
      return await axios.get(`http://localhost:3000/people/${params.id}`).then(res => res.data);
    }
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
