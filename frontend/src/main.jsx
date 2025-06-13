import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CheckAuth from "./components/check-auth.jsx";
import Tickets from "./pages/tickets.jsx";
import TicketDetailsPage from "./pages/ticket.jsx";
import Login from "./pages/login.jsx";
import Signup from "./pages/signup.jsx";
import Admin from "./pages/admin.jsx";
import Navbar from "./components/navbar";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          <Route
            path="/"
            element={
              <CheckAuth protectedRoute={true}>
                <Tickets />
              </CheckAuth>
            }
          />
          <Route
            path="/tickets/:id"
            element={
              <CheckAuth protected={true}>
                <TicketDetailsPage />
              </CheckAuth>
            }
          />
          <Route
            path="/admin"
            element={
              <CheckAuth protectedRoute={true}>
                <Admin />
              </CheckAuth>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <CheckAuth protectedRoute={false}>
              <Login />
            </CheckAuth>
          }
        />
        <Route
          path="/signup"
          element={
            <CheckAuth protectedRoute={false}>
              <Signup />
            </CheckAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
