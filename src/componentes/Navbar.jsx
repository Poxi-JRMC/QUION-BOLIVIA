import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <AppBar position="static" color="primary" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            QUION-BO
          </Typography>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              component={Link}
              to="/"
              color="inherit"
              sx={{ my: 2, display: 'block' }}
            >
              Inicio
            </Button>
            <Button
              component={Link}
              to="/nosotros"
              color="inherit"
              sx={{ my: 2, display: 'block' }}
            >
              Nosotros
            </Button>
            <Button
              component={Link}
              to="/productos"
              color="inherit"
              sx={{ my: 2, display: 'block' }}
            >
              Productos
            </Button>
            <Button
              component={Link}
              to="/contacto"
              color="inherit"
              sx={{ my: 2, display: 'block' }}
            >
              Contacto
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar