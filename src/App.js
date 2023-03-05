import React from "react";
import route from "./routes";
import { useRoutes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "./App.css";

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
