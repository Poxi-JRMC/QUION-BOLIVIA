import React from 'react'
import HeroSection from '../componentes/HeroSection'
import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import './Inicio.css'

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.3, duration: 0.6, ease: 'easeOut' }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
}

const Inicio = () => {
  return (
    <Box className="inicio-container">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-fondo"
      >
        <source src="/quinua-bg.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      <Box className="content-wrapper">
        <HeroSection />

        <Container maxWidth="lg" sx={{ py: 8 }}>
          {/* Título animado */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              align="center"
              sx={{
              mb: 6,
             fontWeight: '700',
             fontFamily: "'Playfair Display', serif",
             color: '#fff',
             textShadow: '0 3px 6px rgba(0,0,0,0.6)',
              }}
            >
              Beneficios de la Quinua
            </Typography>
          </motion.div>

          {/* Grid animado con entrada escalonada */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Grid container spacing={4}>
              {[
                {
                  title: 'Alto valor nutricional',
                  text: 'La quinua es rica en proteínas, fibra y minerales esenciales como hierro, magnesio y zinc.'
                },
                {
                  title: 'Libre de gluten',
                  text: 'Ideal para personas con celiaquía o sensibilidad al gluten, siendo una alternativa saludable.'
                },
                {
                  title: 'Cultivo sostenible',
                  text: 'Nuestra quinua se cultiva respetando el medio ambiente y las tradiciones ancestrales.'
                }
              ].map(({title, text}, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div variants={itemVariants}>
                    <Paper elevation={6}
                     sx={{p: 4,
                     height: '100%',
                     borderRadius: 3,
                     backgroundColor: 'rgba(0, 0, 0, 0.6)',
                     color: 'white',
                     backdropFilter: 'blur(8px)',
                     border: '1px solid rgba(255, 255, 255, 0.2)',
                     boxShadow: '0 10px 25px rgba(0,0,0,0.4)',
                     cursor: 'default',
                     transition: 'transform 0.3s ease',
                      '&:hover': {
                     transform: 'translateY(-10px)',
                     boxShadow: '0 18px 30px rgba(0,0,0,0.6)',
                      }
                    }}>
                      <Typography variant="h5" component="h3" gutterBottom sx={{fontWeight: '600'}}>
                        {title}
                      </Typography>
                      <Typography sx={{ color: '#fff' }}>
                        {text}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>
      </Box>
    </Box>
  )
}

export default Inicio
