import React from "react";
import Home from "./pages/Home/Home";
import "./App.css";
import route from "./routes";
import { useRoutes } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
 
  const router = useRoutes(route);

  return (
    <>
  
   {router}
    <Footer /> 
    </>
  ) 
}

export default App;
