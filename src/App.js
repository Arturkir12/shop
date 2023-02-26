import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouteProvider from "./routes";

function App() {
  return (
    <BrowserRouter>
      <RouteProvider />
    </BrowserRouter>
  );
}

export default App;
