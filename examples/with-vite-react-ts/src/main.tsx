import React from "react";
import ReactDOM from "react-dom/client";

// Make sure `theme.css` is imported first.
// Default theme: import "@camome/system/dist/theme.css"
import "./theme.css";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
