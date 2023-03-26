import React from "react";
import route from "./routes";
import { useRoutes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import  ScrollToTop from './components/ScrollToTop/ScrollToTop';
import "./App.css";

function App() {
  const router = useRoutes(route);

  return (
    <div className="App">
      <ScrollToTop/>
      {router}
      <Footer />
    </div>
  );
}

export default App;
