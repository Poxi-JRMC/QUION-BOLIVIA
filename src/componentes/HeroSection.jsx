import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white' }}>
      
      {/* Nombre de la empresa */}
      <Typography 
        variant="h2" 
        component="p" 
        sx={{ fontWeight: 'bold', letterSpacing: 4, mb:4, textTransform: 'uppercase'}}
      >
        QUION-BO
      </Typography>
      
      {/* Título principal */}
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        La mejor quinua de Bolivia
      </Typography>
      
      {/* Subtítulo */}
      <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4 }}>
        Para ti y para el Mundo
      </Typography>
      
      {/* Botón */}
      <Button
        component={Link}
        to="/productos"
        variant="contained"
        color="secondary"
        size="large"
        sx={{ px: 4, py: 2 }}
      >
        Conoce nuestros productos
      </Button>
    </Container>
  )
}

export default HeroSection
