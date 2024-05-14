import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HomePage,
  SignupPage,
  LoginPage,
  ForgotPasswordPage,
  PageNotFound,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
