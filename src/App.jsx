import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './componentes/Navbar';
import Inicio from './paginas/Inicio';
import Nosotros from './paginas/Nosotros';
import Productos from './paginas/Productos';
import Contacto from './paginas/Contacto';
import Certificaciones from './paginas/Certificaciones';  // Verifica que esta ruta sea correcta

import './App.css';
import './i18n';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32', // Verde oscuro
    },
    secondary: {
      main: '#8bc34a', // Verde claro
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/certificaciones" element={<Certificaciones />} />
          <Route path="/contacto" element={<Contacto />} />
          {/* Puedes agregar un fallback para rutas no encontradas */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
