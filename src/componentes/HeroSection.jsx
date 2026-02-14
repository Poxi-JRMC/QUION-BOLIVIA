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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: { xs: '2.5rem', md: '4rem' },
            letterSpacing: '0.1em',
            textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 4px 12px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)',
          }}
        >
          {t('hero.titulo')}
        </Typography>
      </motion.div>

      {/* Subtítulos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Typography
          variant="h5"
          sx={{
            mt: 2,
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            color: 'rgba(255,255,255,0.95)',
            textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 4px 12px rgba(0,0,0,0.7)',
          }}
        >
          {t('hero.subtitulo1')}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            mt: 1,
            color: 'rgba(255,255,255,0.9)',
            textShadow: '0 2px 6px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)',
          }}
        >
          {t('hero.subtitulo2')}
        </Typography>
      </motion.div>

      {/* Botón animado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
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
            backgroundColor: 'rgba(0, 0, 0, 0.35)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,0,0,0.2)',
            '&:hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderColor: 'white',
              color: theme.palette.secondary.main,
              boxShadow: '0 6px 25px rgba(0,0,0,0.6)',
            },
          }}
        >
          {t('hero.boton')}
        </Button>
      </motion.div>

      {/* Texto debajo del botón */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <Typography
          sx={{
            mt: 4,
            fontFamily: "'Playfair Display', serif",
            fontWeight: 650,
            fontSize: { xs: '2rem', md: '2rem' },
            color: 'rgba(255,255,255,0.9)',
            textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 4px 12px rgba(0,0,0,0.7), 0 0 30px rgba(0,0,0,0.5)',
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
