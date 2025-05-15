import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './componentes/Navbar'
import Inicio from './paginas/Inicio'
import Nosotros from './paginas/Nosotros'
import Productos from './paginas/Productos'
import Contacto from './paginas/Contacto'
import './App.css'

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
})

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
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App