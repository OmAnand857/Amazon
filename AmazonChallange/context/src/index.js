import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import {ValueProvider} from "./components/Context"

const container = document.getElementById('root');
      const root = ReactDOM.createRoot(container);
      root.render(
      
      <ValueProvider><App/></ValueProvider>);