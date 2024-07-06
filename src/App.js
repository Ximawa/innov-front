import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "flowbite";
import "flowbite/dist/flowbite.css";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Logout from "./pages/Logout";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";
import RecetteListPage from "./pages/RecetteListPage";
import RecetteAddPage from "./pages/RecetteAddPage";
import RecetteUpdatePage from "./pages/RecetteUpdatePage";
import ListPage from "./pages/ListPage";
import AuthenticatedLayout from "./layout/AuthenticatedLayout";

import { jwtDecode } from "jwt-decode";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decoded = jwtDecode(token);

      const currentTime = Date.now() / 1000;

      if (decoded.exp > currentTime) {
        return true;
      }
    } catch (error) {
      console.error("Token decoding error:", error);
    }
  }
  return false;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            isAuthenticated() ? (
              <AuthenticatedLayout>
                <DashboardPage />
              </AuthenticatedLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/dashboard"
          element={
            isAuthenticated() ? (
              <AuthenticatedLayout>
                <DashboardPage />
              </AuthenticatedLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/recettes"
          element={
            isAuthenticated() ? (
              <AuthenticatedLayout>
                <RecetteListPage />
              </AuthenticatedLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/recettes/add"
          element={
            isAuthenticated() ? (
              <AuthenticatedLayout>
                <RecetteAddPage />
              </AuthenticatedLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/recettes/:id"
          element={
            isAuthenticated() ? (
              <AuthenticatedLayout>
                <RecetteUpdatePage />
              </AuthenticatedLayout>
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/liste/"
          element={
            isAuthenticated() ? (
              <AuthenticatedLayout>
                <ListPage />
              </AuthenticatedLayout>
            ) : (
              <LoginPage />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
