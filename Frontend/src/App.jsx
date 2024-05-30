import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home/Home";
import StudentPortal from "./Components/StudentPortal";
import AdminPortal from "./Components/AdminPortal";
import { useEffect, useState } from "react";
import Login from "./Components/Login";
import { Toaster } from "react-hot-toast";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route path="" element={<Layout />}>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/sportal"
            element={user ? <StudentPortal /> : <Navigate to="/login" />}
          />
        </Route>
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
        <Route path="/admin" element={<AdminPortal />} />
      </Routes>
    </>
  );
}

export default App;
