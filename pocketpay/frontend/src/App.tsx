import React from 'react';
import theme from '../src/theme/index';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from '../src/utils/routes';
const App = () => {
  return (
    <ThemeProvider theme={theme}>

        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>

    </ThemeProvider>
  );
};
export default App;
