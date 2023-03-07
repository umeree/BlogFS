import logo from './logo.svg';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Write from './Pages/Write';
import Login from './Pages/Login';
import Single from './Pages/Single';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import './App.css';
import {createBrowserRouter,Outlet,RouterProvider,} from "react-router-dom";
import "./style.scss"

const Layout = () => {
  return(
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element : <Home />
      },
      {
        path: "/write",
        element: <Write />
      },
      {
        path: "post/:id",
        element: <Single />
      }
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div className="app">
     <div className="container">
     <RouterProvider router={router} />
     </div>
    </div>
  );
}

export default App;
