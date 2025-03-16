import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.jsx";
import "@/scss/styles.scss";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
