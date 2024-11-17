import React, { useState, useMemo, useEffect } from 'react';
import styled from "styled-components";
import bg from './img/bg.png';
import { MainLayout } from './styles/Layouts';
import Orb from './Components/Orb/Orb';
import Navigation from './Components/Navigation/Navigation';
import Dashboard from './Components/Dashboard/Dashboard';
import Income from './Components/Income/Income';
import Expenses from './Components/Expenses/Expenses';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import LandingPage from './Components/Landing/LandingPage'; 
import { useGlobalContext } from './context/globalContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [active, setActive] = useState(1);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const global = useGlobalContext();
  console.log(global);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const displayData = () => {
    switch (active) {
      case 1:

      case 2:
        return <Dashboard />;
      case 3:
        return <Income />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <AppStyled bg={bg} className="App">
      <Router>
        {orbMemo}
        <Routes>
          {/* Public Routes */}
          <Route path="/Home" element={<LandingPage />} />
          <Route
            path="/login"
            element={<Login setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/signup"
            element={<Signup setIsAuthenticated={setIsAuthenticated} />}
          />

          {/* Landing Page (Visible only if not authenticated) */}
          <Route
            path="/"
            element={isAuthenticated ? (
              <MainLayout>
                <Navigation active={active} setActive={setActive} />
                <main>{displayData()}</main>
              </MainLayout>
            ) : (
              <LandingPage setIsAuthenticated={setIsAuthenticated} />
            )}
          />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? (
                <MainLayout>
                  <Navigation active={active} setActive={setActive} />
                  <main>{displayData()}</main>
                </MainLayout>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Routes>
      </Router>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${props => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default App;
