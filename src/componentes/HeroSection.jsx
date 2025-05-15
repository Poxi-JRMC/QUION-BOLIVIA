import React from 'react'
import { Box, Typography, Button, Container } from '@mui/material'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url(/quinua-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
          Descubre el poder de la quinua
        </Typography>
        <Typography variant="h5" component="p" gutterBottom sx={{ mb: 4 }}>
          Cultivada de manera sostenible en los Andes peruanos
        </Typography>
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
    </Box>
  )
}

export default HeroSection