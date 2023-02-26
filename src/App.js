import React from "react";
import "./App.css";
import route from "./routes";
import { useRoutes } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  const router = useRoutes(route);

  return (
    <>
      {router}
      <Footer />
    </>
  );
}

export default App;
