import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import StudentPortal from "./Components/StudentPortal.jsx";
import Contact from "./Components/Contact.jsx";
import Login from "./Components/Login.jsx";
import { elements } from "chart.js";
import AdminPortal from "./Components/AdminPortal.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
