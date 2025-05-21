import React from 'react'
import HeroSection from '../componentes/HeroSection'
import { Box, Container, Typography, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import './Inicio.css'
import Globo3D from '../componentes/Globo3D'

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
      <video autoPlay muted loop playsInline className="video-fondo">
        <source src="/quinua-bg.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      <Box className="content-wrapper">
        <HeroSection />

        <Container maxWidth="lg" sx={{ py: 8 }}>
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
                textShadow: '0 3px 6px rgba(0,0,0,0.6)'
              }}
            >
              Beneficios de la Quinua
            </Typography>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate="visible">
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
              ].map(({ title, text }, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <motion.div variants={itemVariants}>
                    <Paper
                      elevation={6}
                      sx={{
                        p: 4,
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
                          boxShadow: '0 18px 30px rgba(0,0,0,0.6)'
                        }
                      }}
                    >
                      <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: '600' }}>
                        {title}
                      </Typography>
                      <Typography sx={{ color: '#fff' }}>{text}</Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Container>



        {/* Sección de exportación */}
        <section className="exportSection">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0 }}
              variants={containerVariants}
            />

            <Grid container spacing={6} alignItems="center" sx={{ mt: 10 }}>
              <Grid item xs={12} md={6}>
                <Globo3D />
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 'bold',
                      fontFamily: "'Playfair Display', serif",
                      color: '#fff',
                      mb: 2,
                      textShadow: '0 2px 6px rgba(0,0,0,0.5)'
                    }}
                  >
                    Exportamos la mejor quinua de Bolivia para el Mundo
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: 1.8
                    }}
                  >
                    Nuestra quinua, cultivada en los Andes bolivianos, llega a mercados
                    internacionales con estándares de calidad global. Nos sentimos orgullosos
                    de conectar nuestras raíces con el mundo.
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>

            <Grid container spacing={6} alignItems="center" sx={{ mt: 10 }}>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 'bold',
                      fontFamily: "'Playfair Display', serif",
                      color: '#fff',
                      mb: 2,
                      textShadow: '0 2px 6px rgba(0,0,0,0.5)'
                    }}
                  >
                    Calidad que cruza fronteras
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: 1.8
                    }}
                  >
                    Desde el corazón de Sudamérica, llevamos al mundo un superalimento
                    que nutre, respeta el medio ambiente y apoya a comunidades locales.
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <img
                  src="/export.jpg"
                  alt="Mapa de exportación"
                  style={{
                    width: '100%',
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </section>
      </Box>
    </Box>
  )
}

export default Inicio
