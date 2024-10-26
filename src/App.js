import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import BusTime from "./pages/BusTime";
import MapPage from "./pages/MapPage";
import Courier from "./pages/Courier";
import Payment from "./Components/Payment";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  { path: "/bus-time", element:<BusTime/>},
  { path: "/map", element:<MapPage/>},
  { path: "/courier", element:<Courier/>},
  { path: "/payment", element:<Payment/>},
  { path: "/contact", element:<Contact/>},
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
