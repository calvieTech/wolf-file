import { useState } from 'react';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
import NavBar from './components/NavBar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardPage />} path="/" />
          <Route element={<LoginPage />} path="/login" />
          <Route element={<SignupPage />} path="/register" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
