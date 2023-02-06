import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface AuthProps {
  isAuthenticated: boolean;
}

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleAboutUsClick = () => navigate("/aboutus");
  const handleLoginClick = () => navigate("/login");

  const renderButtons = () => {
    if (isAuthenticated) {
      return (
        <Button
          variant="outlined"
          sx={{ marginLeft: "5%" }}
          onClick={handleLoginClick}
        >
          Sign Out
        </Button>
      );
    } else {
      return (
        <Button
          variant="outlined"
          sx={{ marginLeft: "5%" }}
          onClick={handleLoginClick}
        >
          Sign in
        </Button>
      );
    }
  };

  return (
    <>
      <Box sx={{ marginLeft: "5%", marginTop: "5%" }}>
        <Box>
          <Button variant="outlined" onClick={handleAboutUsClick}>
            About Us
          </Button>
          {renderButtons()}
        </Box>
      </Box>
      <Box>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            element={<AuthProtectedRoute isAuthenticated={isAuthenticated} />}
          >
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Box>
    </>
  );
};

const AuthProtectedRoute: React.FC<AuthProps> = ({ isAuthenticated }) => {
  if (!isAuthenticated) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
};

export default App;
