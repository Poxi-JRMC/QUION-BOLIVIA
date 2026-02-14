import React, { useState, useEffect } from 'react';
import HeroSection from '../componentes/HeroSection';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import './Inicio.css';
import Globo3D from '../componentes/Globo3D';
import { useTranslation } from 'react-i18next';
import ScrollDownIndicator from '../componentes/ScrollDownIndicator';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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
    document.title = t('pageTitles.inicio');
    document.body.className = "inicio";
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    const scrollFix = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('load', scrollFix);
    requestAnimationFrame(scrollFix);
    return () => {
      document.body.className = "";
      window.removeEventListener('load', scrollFix);
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
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

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  const bloques = [
    {
      title: t('extraBloques.titulo1'),
      text: t('extraBloques.texto1'),
      imgSrc: '/extra1.jpg',
      imgAlt: t('extraBloques.alt1'),
      reverse: true
    },
    {
      title: t('extraBloques.titulo2'),
      text: t('extraBloques.texto2'),
      imgSrc: '/extra2.jpg',
      imgAlt: t('extraBloques.alt2'),
      reverse: false
    },
    {
      title: t('extraBloques.titulo3'),
      text: t('extraBloques.texto3'),
      imgSrc: '/extra3.jpg',
      imgAlt: t('extraBloques.alt3'),
      reverse: true
    },
    {
      title: t('extraBloques.titulo4'),
      text: t('extraBloques.texto4'),
      imgSrc: '/extra4.jpg',
      imgAlt: t('extraBloques.alt4'),
      reverse: false
    },
  ];

  // Configuración del slider para el carrusel (segundo bloque)
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // Las imágenes del carrusel para el bloque 2
  const extra2Images = ['/extra2.jpg', '/extra2b.jpg', '/extra2c.jpg'];

  return (
    <Box className="inicio-container">
      {/* Sección 1: Video - primera vista, de extremo a extremo */}
      <Box className="hero-section-video">
        <video autoPlay muted loop playsInline className="video-fondo">
          <source src="/quinua-bg1.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
        <Box className="hero-content-overlay">
          <HeroSection />
          {/* Beneficios directamente debajo de "Beneficios de la Quinua" */}
          <Container maxWidth="lg" sx={{ py: 4, px: 2 }}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
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
                          transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.4s ease',
                          '&:hover': {
                            transform: 'translateY(-6px)',
                            boxShadow: '0 14px 28px rgba(0,0,0,0.5)',
                          },
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
          <ScrollDownIndicator />
        </Box>
      </Box>

      {/* Sección 2: Cuerpo negro - de extremo a extremo, separado */}
      <Box className="content-below">
        <section className="exportSection">
          <Container>
            <Grid container spacing={6} alignItems="center" sx={{ mt: 10 }}>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Globo3D />
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: "'Playfair Display', serif", color: '#fff', mb: 2, textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}>
                    {t('exportacion.titulo1')}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', fontFamily: "'Poppins', sans-serif", lineHeight: 1.8 }}>
                    {t('exportacion.texto1')}
                  </Typography>
                </motion.div>
              </Grid>
            </Grid>

            <Grid container spacing={6} alignItems="center" sx={{ mt: 10 }}>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Typography variant="h4" sx={{ fontWeight: 'bold', fontFamily: "'Playfair Display', serif", color: '#fff', mb: 2, textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}>
                    {t('exportacion.titulo2')}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', fontFamily: "'Poppins', sans-serif", lineHeight: 1.8 }}>
                    {t('exportacion.texto2')}
                  </Typography>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.img
                  src="/export.jpg"
                  alt="Mapa de exportación"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  style={{
                    width: '100%',
                    borderRadius: '16px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                    cursor: 'pointer',
                  }}
                  onClick={() => setModalImg('/export.jpg')}
                />
              </Grid>
            </Grid>
          </Container>
        </section>

        <AnimatePresence>
          {modalImg && (
            <motion.div key="overlay" initial="hidden" animate="visible" exit="exit" variants={overlayVariants} onClick={() => setModalImg(null)} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1300, cursor: 'pointer' }}>
              <motion.img
                key="image"
                src={modalImg}
                alt="Imagen ampliada"
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
                whileHover={{ scale: 1.05, boxShadow: '0 15px 40px rgba(0,0,0,0.9)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                style={{ maxWidth: '95vw', maxHeight: '95vh', borderRadius: 12, boxShadow: '0 10px 30px rgba(0,0,0,0.8)', cursor: 'default' }}
              />
            </motion.div>
          )}
        </AnimatePresence>

        <Container maxWidth="lg" sx={{ py: 8 }}>
          {bloques.map(({ title, text, imgSrc, imgAlt, reverse }, index) => {
            const isExtra2 = index === 1; // Detectamos el segundo bloque para el carrusel
            return (
              <Grid container spacing={4} alignItems="center" direction={reverse ? 'row-reverse' : 'row'} sx={{ mb: 10 }} key={index}>
                {/* texto */}
                <Grid item xs={12} md={6}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                      {title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'rgba(255,255,255,0.9)',
                        fontFamily: "'Poppins', sans-serif",
                        lineHeight: 1.8,
                      }}
                    >
                      {text}
                    </Typography>
                  </motion.div>
                </Grid>

                {/* imagen o carrusel */}
                <Grid item xs={12} md={6}>
                  {isExtra2 ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                    <Slider {...sliderSettings}>
                      {extra2Images.map((img, i) => (
                        <Box key={i} sx={{ px: 1 }}>
                          <img
                            src={img}
                            alt={`Extra 2 - ${i}`}
                            loading="lazy"
                            style={{
                              width: '100%',
                              borderRadius: '16px',
                              boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                              cursor: 'pointer'
                            }}
                            onClick={() => setModalImg(img)}
                          />
                        </Box>
                      ))}
                    </Slider>
                    </motion.div>
                  ) : (
                    <motion.img
                      src={imgSrc}
                      alt={imgAlt}
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      style={{
                        width: '100%',
                        borderRadius: '16px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                        cursor: 'pointer',
                      }}
                      onClick={() => setModalImg(imgSrc)}
                    />
                  )}
                </Grid>
              </Grid>
            )
          })}
        </Container>
        </Box>
    </Box>
  );
};

export default Inicio;
