import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/home/HomePage"; // Your HomePage component
import LoginPage from "./Pages/login/LoginPage"; // Your LoginPage component
import SignUpPage from "./Pages/signUp/signupPage"; // Your SignUpPage component
import WelcomePage from "./Pages/welcomePage/WelcomePage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default Route - Login Page */}
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
