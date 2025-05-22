import React from 'react'
import { Typography, Box, Button, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'  // <-- Importa useTranslation

const HeroSection = () => {
  const theme = useTheme()
  const { t } = useTranslation()  // <-- Hook para traducción

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
          {t('hero.titulo')}
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
          {t('hero.subtitulo1')}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            mt: 1,
            color: 'rgba(255,255,255,0.8)',
          }}
        >
          {t('hero.subtitulo2')}
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
          {t('hero.boton')}
        </Button>
      </motion.div>

      {/* Nuevo texto animado debajo del botón */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <Typography
          sx={{
            mt: 4, // margen superior para separar del botón
            fontFamily: "'Playfair Display', serif",
            fontWeight: 650,
            fontSize: { xs: '2rem', md: '2rem' }, // tamaño adaptable móvil/escritorio
            color: 'rgba(255,255,255,0.85)',
            textShadow: '0 5px 10px rgba(0,0,0,0.5)',
            maxWidth: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
            lineHeight: 1.5,
          }}
        >
          {/* Aquí va el texto que quieres mostrar */}
          {t('hero.titulo2')}
        </Typography>
      </motion.div>
    </Box>
  )
}

export default HeroSection
