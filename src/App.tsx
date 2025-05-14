import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./router/routes";

function App() {
  return (
      <BrowserRouter basename="/project-muslim-traveller-web">
          <AppRoutes />
      </BrowserRouter>
  );
}

export default App;
