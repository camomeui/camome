import React from "react";
import ReactDOM from "react-dom/client";

// Default theme: import "@camome/system/dist/theme.css"
import "./theme.css";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
