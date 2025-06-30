import React, { useState } from 'react';
import HeroSection from '../componentes/HeroSection';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import './Inicio.css';
import Globo3D from '../componentes/Globo3D';
import { useTranslation } from 'react-i18next';
import { useEffect } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
};

const Inicio = () => {
  const { t } = useTranslation();
  useEffect(() => {
    document.body.className = "inicio"; // fondo negro solo para Inicio
    return () => {
      document.body.className = "";
    };
  }, []);

  const beneficios = [
    {
      title: t('beneficios.alto_valor'),
      text: t('beneficios.alto_valor_text'),
    },
    {
      title: t('beneficios.libre_gluten'),
      text: t('beneficios.libre_gluten_text'),
    },
    {
      title: t('beneficios.sostenible'),
      text: t('beneficios.sostenible_text'),
    },
  ];

  // Estado para controlar modal lightbox
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Box className="inicio-container">
      <video autoPlay muted loop playsInline className="video-fondo">
        <source src="/quinua-bg.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      <Box className="content-wrapper">
        <HeroSection />

        <Container maxWidth="lg" sx={{ py: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={4}>
              {beneficios.map(({ title, text }, index) => (
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
                          boxShadow: '0 18px 30px rgba(0,0,0,0.6)',
                        },
                      }}
                    >
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ fontWeight: '600' }}
                      >
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

        <section className="exportSection">
          <Container>
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
                      textShadow: '0 2px 6px rgba(0,0,0,0.5)',
                    }}
                  >
                    {t('exportacion.titulo1')}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: 1.8,
                    }}
                  >
                    {t('exportacion.texto1')}
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
                      textShadow: '0 2px 6px rgba(0,0,0,0.5)',
                    }}
                  >
                    {t('exportacion.titulo2')}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'rgba(255,255,255,0.9)',
                      fontFamily: "'Poppins', sans-serif",
                      lineHeight: 1.8,
                    }}
                  >
                    {t('exportacion.texto2')}
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                {/* Imagen clickeable para abrir lightbox */}
                <img
                  src="/export.jpg"
                  alt="Mapa de exportación"
                  style={{
                    width: '100%',
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                    cursor: 'pointer',
                  }}
                  onClick={() => setModalOpen(true)}
                />
              </Grid>
            </Grid>
          </Container>
        </section>

        {/* Modal Lightbox solo imagen centrada */}
        <AnimatePresence>
          {modalOpen && (
            <motion.div
              key="overlay"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={overlayVariants}
              onClick={() => setModalOpen(false)}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.8)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1300,
                cursor: 'pointer',
              }}
            >
              <motion.img
                key="image"
                src="/export.jpg"
                alt="Mapa de exportación ampliado"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()} // Evitar cerrar al hacer click en la imagen
                whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(0,0,0,0.9)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{
                  maxWidth: '95vw',
                  maxHeight: '95vh',
                  borderRadius: 12,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
                  cursor: 'default',
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default Inicio;
