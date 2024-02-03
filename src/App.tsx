import React from 'react';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import theme from './theme';
import HomePage from './pages/HomePage';
import Error404NotFoundPage from './pages/Error404NotFoundPage';

const StyledApp = styled.div`
  color: ${theme.colors.text};
  font-family: ${theme.fonts.base};
  font-size: 20px;
  line-height: 25px;
  min-width: ${theme.breakpoints.min};
`

function App() {
  return (
    <StyledApp>
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Error404NotFoundPage />} />
        </Routes>
      </Router>
    </StyledApp>
  );
}

export default App;
