import React from 'react';
import { Box, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import ScrollToTop from './componentes/ScrollToTop';
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
      main: '#1B5E20', // Verde oscuro - naturaleza, confianza
      dark: '#0D3D10',
      light: '#2E7D32',
    },
    secondary: {
      main: '#8BC34A', // Verde claro - frescura
      dark: '#689F38',
      light: '#9ACD32',
    },
    background: {
      default: '#f8f9f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#2C3E2E',
      secondary: '#4A5F4A',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: { fontFamily: '"Playfair Display", serif', fontWeight: 700 },
    h2: { fontFamily: '"Playfair Display", serif', fontWeight: 700 },
    h3: { fontFamily: '"Playfair Display", serif', fontWeight: 600 },
    h4: { fontFamily: '"Playfair Display", serif', fontWeight: 600 },
    h5: { fontFamily: '"Playfair Display", serif', fontWeight: 600 },
    h6: { fontFamily: '"Playfair Display", serif', fontWeight: 600 },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Box component="main" sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/certificaciones" element={<Certificaciones />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        </Box>
        <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
