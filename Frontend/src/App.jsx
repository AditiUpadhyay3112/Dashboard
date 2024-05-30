import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home/Home";
import StudentPortal from "./Components/StudentPortal";
import AdminPortal from "./Components/AdminPortal";
import { useEffect, useState } from "react";
import Login from "./Components/Login";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);
  const queryClient = new QueryClient();

  // useEffect(() => {
  //   setUser(localStorage.getItem("user"));
  // }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" />
      <Routes>
        <Route
          path=""
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/sportal" element={<StudentPortal />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPortal />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
