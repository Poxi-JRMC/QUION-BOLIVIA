// src/componentes/HeroSection.jsx

import React from 'react'
import { Typography, Box, Button, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  const theme = useTheme()

  return (
    <Box
      sx={{
        textAlign: 'center',
        mt: { xs: 10, md: 16 },
        color: 'white',
        zIndex: 10,
        position: 'relative',
      }}
    >
      {/* Título principal */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5}}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: { xs: '2.5rem', md: '4rem' },
            letterSpacing: '0.1em',
            textShadow: '0 4px 10px rgba(0,0,0,0.6)',
          }}
        >
          QUION-BO
        </Typography>
      </motion.div>

      {/* Subtítulos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Typography
          variant="h5"
          sx={{
            mt: 2,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            color: 'rgba(255,255,255,0.9)',
            textShadow: '0 2px 6px rgba(0,0,0,0.4)',
          }}
        >
          La mejor Quinua de Bolivia
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            mt: 1,
            color: 'rgba(255,255,255,0.8)',
          }}
        >
          Para ti y para el Mundo
        </Typography>
      </motion.div>

      {/* Botón animado */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <Button
          component={Link}
          to="/productos"
          variant="outlined"
          size="large"
          sx={{
            mt: 5,
            px: 4,
            py: 1.5,
            fontSize: '1rem',
            fontWeight: 500,
            borderRadius: '30px',
            borderColor: 'white',
            color: 'white',
            textTransform: 'none',
            transition: 'all 0.3s ease-in-out',
            fontFamily: "'Poppins', sans-serif",
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: 'white',
              color: theme.palette.secondary.main,
            },
          }}
        >
          Conoce nuestros productos
        </Button>
      </motion.div>
    </Box>
  )
}

export default HeroSection
