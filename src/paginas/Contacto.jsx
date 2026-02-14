import { Box, Container, Typography, Button, Grid, Paper, List, ListItem, Link } from '@mui/material';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Contacto = () => {
  const { t } = useTranslation();
  
  useEffect(() => {
    document.title = t('pageTitles.contacto');
    document.body.classList.add('contacto');
    return () => {
      document.body.classList.remove('contacto');
    };
  }, [t]);
  
  // Números WhatsApp (no cambian con la traducción)
  const infoWhatsAppNumber = '+59171542030';
  const comprarWhatsAppNumber = '+59173564453';

  // Función mejorada para abrir WhatsApp según plataforma
  const openWhatsApp = (phone, message) => {
    const cleanNumber = phone.replace(/[^\d+]/g, '');
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    if (isMobile) {
      // En móvil: primero intenta la app, luego la web
      window.location.href = `whatsapp://send?phone=${cleanNumber}&text=${encodedMessage}`;
      setTimeout(() => {
        window.open(`https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodedMessage}`, '_blank');
      }, 800);
    } else {
      // En PC: usar directamente web.whatsapp.com para asegurar que el mensaje se pase correctamente
      window.open(`https://web.whatsapp.com/send?phone=${cleanNumber}&text=${encodedMessage}`, '_blank');
    }
  };

  // Handlers para WhatsApp (se mantienen igual)
  const handleInfoClick = () => {
    openWhatsApp(infoWhatsAppNumber, t("whatsapp_messages.info_message"));
  };

  const handleComprarClick = () => {
    openWhatsApp(comprarWhatsAppNumber, t("whatsapp_messages.buy_message"));
  };

  // Redes sociales (URLs no cambian)
  const facebookUrl = 'https://www.facebook.com/share/1HMF4x3Gaf/?mibextid=wwXIfr';
  const instagramUrl = 'https://www.instagram.com/quions.r.l?igsh=YzN6eXpnZHVhNGht&utm_source=qr';

  // Función para abrir Facebook según plataforma
  const openFacebook = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // En móvil: intenta abrir la app de Facebook con el ID correcto
      const appUrl = 'fb://page/61573488490491';
      const webUrl = 'https://www.facebook.com/profile.php?id=61573488490491';
      
      // Intenta abrir la app
      window.location.href = appUrl;
      
      // Si después de 1 segundo no se abrió la app, abre la web
      setTimeout(() => {
        window.open(webUrl, '_blank');
      }, 1000);
    } else {
      // En PC: usa la web directamente con el ID correcto
      window.open('https://www.facebook.com/profile.php?id=61573488490491', '_blank');
    }
  };

  // Función para abrir Instagram según plataforma
  const openInstagram = () => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // En móvil: intenta abrir la app de Instagram
      const appUrl = 'instagram://user?username=quions.r.l';
      const webUrl = 'https://www.instagram.com/quions.r.l';
      
      // Intenta abrir la app
      window.location.href = appUrl;
      
      // Si después de 1 segundo no se abrió la app, abre la web
      setTimeout(() => {
        window.open(webUrl, '_blank');
      }, 1000);
    } else {
      // En PC: usa la web directamente
      window.open('https://www.instagram.com/quions.r.l', '_blank');
    }
  };

  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        minHeight: '100vh',
        pt: { xs: 12, md: 14 },
        pb: { xs: 4, md: 6 },
        position: 'relative',
      }}
    >
      {/* Overlay suave para legibilidad - el fondo (lugar de cultivo de quinua) se mantiene visible */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(145deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.15) 100%)',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative',
          zIndex: 1,
          px: { xs: 2, md: 0 },
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Sección del CEO - tipografía y animación */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem' }}
            >
              <Typography
                component="span"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  color: 'rgba(0, 0, 0, 0.75)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                }}
              >
                {t("contact.ceo_prefix")}
              </Typography>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Typography
                  component="span"
                  display="block"
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '2.6rem' },
                    color: '#1B5E20',
                    letterSpacing: '0.08em',
                  }}
                >
                  {t("contact.ceo_company")}
                </Typography>
              </motion.div>
              <Typography
                component="span"
                sx={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: { xs: '1.1rem', md: '1.35rem' },
                  color: 'rgba(0, 0, 0, 0.9)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                }}
              >
                {t("contact.ceo_name")}
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            
            {/* Sección de Información WhatsApp */}
            <Grid item xs={12} md={5}>
              <Paper
                elevation={0}
                sx={{
                  textAlign: 'center',
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 3,
                  minHeight: '380px',
                  backgroundColor: 'rgba(255, 255, 255, 0.88)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.25)'
                  }
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontFamily: "'Playfair Display', serif",
                      color: 'rgba(0, 0, 0, 0.8)',
                      textShadow: '0 1px 2px rgba(255,255,255,0.5)',
                      fontSize: { xs: '1.6rem', md: '2rem' },
                      mb: 3
                    }}
                  >
                    <motion.span
                      {...fadeInAnimation}
                      transition={{ ...fadeInAnimation.transition, delay: 0.1 }}
                    >
                      {t("contact.info_section.title")}
                    </motion.span>
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      color: 'rgba(0, 0, 0, 0.7)',
                      textShadow: '0 1px 1px rgba(255,255,255,0.3)',
                      mb: 3,
                      fontSize: { xs: '0.95rem', md: '1.05rem' },
                      lineHeight: 1.6
                    }}
                  >
                    {t("contact.info_section.description")}
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      color: 'rgba(0, 0, 0, 0.7)',
                      textShadow: '0 1px 1px rgba(255,255,255,0.3)',
                      mb: 3,
                      fontSize: { xs: '0.95rem', md: '1.05rem' },
                      lineHeight: 1.6
                    }}
                  >
                    {t("contact.info_section.area")}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'rgba(0, 0, 0, 0.9)',
                      textShadow: '0 1px 1px rgba(255,255,255,0.3)',
                      mb: 3,
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                      fontWeight: '600',
                    }}
                  >
                    {infoWhatsAppNumber}
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<WhatsAppIcon />}
                    onClick={handleInfoClick}
                    fullWidth
                    size="large"
                    sx={{
                      py: 1.8,
                      borderRadius: '50px',
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '1.05rem',
                      backgroundColor: '#25D366',
                      color: '#fff',
                      boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#20BD5A',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(37, 211, 102, 0.5)',
                      },
                    }}
                  >
                    {t("contact.info_section.button")}
                  </Button>
                </Box>
              </Paper>
            </Grid>

            {/* Sección de Compras WhatsApp */}
            <Grid item xs={12} md={5}>
              <Paper
                elevation={0}
                sx={{
                  textAlign: 'center',
                  p: { xs: 3, md: 4 },
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 3,
                  minHeight: '380px',
                  backgroundColor: 'rgba(255, 255, 255, 0.88)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.25)'
                  }
                }}
              >
                <Box>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontFamily: "'Playfair Display', serif",
                      color: 'rgba(0, 0, 0, 0.8)',
                      textShadow: '0 1px 2px rgba(255,255,255,0.5)',
                      fontSize: { xs: '1.6rem', md: '2rem' },
                      mb: 3
                    }}
                  >
                    <motion.span
                      {...fadeInAnimation}
                      transition={{ ...fadeInAnimation.transition, delay: 0.2 }}
                    >
                      {t("contact.buy_section.title")}
                    </motion.span>
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      color: 'rgba(0, 0, 0, 0.7)',
                      textShadow: '0 1px 1px rgba(255,255,255,0.3)',
                      mb: 3,
                      fontSize: { xs: '0.95rem', md: '1.05rem' },
                      lineHeight: 1.6
                    }}
                  >
                    {t("contact.buy_section.description")}
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      color: 'rgba(0, 0, 0, 0.7)',
                      textShadow: '0 1px 1px rgba(255,255,255,0.3)',
                      mb: 3,
                      fontSize: { xs: '0.95rem', md: '1.05rem' },
                      lineHeight: 1.6
                    }}
                  >
                    {t("contact.buy_section.area")}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'rgba(0, 0, 0, 0.9)',
                      textShadow: '0 1px 1px rgba(255,255,255,0.3)',
                      mb: 3,
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                      fontWeight: '600',
                    }}
                  >
                    {comprarWhatsAppNumber}
                  </Typography>
                  <Button
                    variant="contained"
                    startIcon={<WhatsAppIcon />}
                    onClick={handleComprarClick}
                    fullWidth
                    size="large"
                    sx={{
                      py: 1.8,
                      borderRadius: '50px',
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '1.05rem',
                      backgroundColor: '#25D366',
                      color: '#fff',
                      boxShadow: '0 4px 14px rgba(37, 211, 102, 0.4)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#20BD5A',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(37, 211, 102, 0.5)',
                      },
                    }}
                  >
                    {t("contact.buy_section.button")}
                  </Button>
                </Box>
              </Paper>
            </Grid>

            {/* Sección de Contacto General */}
            <Grid item xs={12}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  backgroundColor: 'rgba(255, 255, 255, 0.88)',
                  backdropFilter: 'blur(6px)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.25)'
                  }
                }}
              >
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 700,
                      fontFamily: "'Playfair Display', serif",
                      color: 'rgba(0, 0, 0, 0.85)',
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      mb: 3,
                      textShadow: '0 2px 4px rgba(255,255,255,0.3)',
                      display: 'inline-block',
                      borderBottom: '3px solid rgba(0,0,0,0.1)',
                      pb: 1
                    }}
                  >
                    <motion.span
                      {...fadeInAnimation}
                      transition={{ ...fadeInAnimation.transition, delay: 0.3 }}
                    >
                      {t("contact.contact_section.title")}
                    </motion.span>
                  </Typography>
                </Box>

                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          color: 'rgba(0, 0, 0, 0.85)',
                          mb: 3,
                          fontWeight: 600,
                          fontSize: '1.4rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5
                        }}
                      >
                        <EmailIcon sx={{ fontSize: '1.8rem', color: 'rgba(0, 0, 0, 0.75)' }} />
                        {t("contact.contact_section.emails")}
                      </Typography>
                      <List sx={{ pl: 0 }}>
                        {['grovervillca@quionbolivia.com', 'info@quionbolivia.com', 'ventas@quionbolivia.com'].map((email) => (
                          <ListItem
                            key={email}
                            sx={{ px: 0, py: 0.75 }}
                          >
                            <Link
                              href={`mailto:${email}`}
                              sx={{
                                color: '#1B5E20',
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                fontWeight: 500,
                                textDecoration: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                                transition: 'all 0.2s ease',
                                '&:hover': {
                                  color: '#2E7D32',
                                  textDecoration: 'underline',
                                },
                              }}
                            >
                              <EmailIcon sx={{ fontSize: '1.2rem', opacity: 0.8 }} />
                              {email}
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          color: 'rgba(0, 0, 0, 0.85)',
                          mb: 3,
                          fontWeight: 600,
                          fontSize: '1.4rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.5
                        }}
                      >
                        <Box component="span" sx={{ 
                          width: '28px',
                          height: '28px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          📍
                        </Box>
                        {t("contact.contact_section.address")}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(0, 0, 0, 0.75)',
                          fontSize: '1.1rem',
                          lineHeight: 1.7,
                          fontWeight: 500
                        }}
                        dangerouslySetInnerHTML={{ __html: t("contact.contact_section.location") }}
                      />
                    </Box>
                  </Grid>
                </Grid>

                <Box sx={{ textAlign: 'center', mt: 4 }}>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      fontFamily: "'Playfair Display', serif",
                      color: 'rgba(0, 0, 0, 0.8)',
                      textShadow: '0 1px 1px rgba(255,255,255,0.3)',
                      mb: 3,
                      fontSize: '1.3rem'
                    }}
                  >
                    {t("contact.contact_section.social")}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      startIcon={<FacebookIcon />}
                      onClick={openFacebook}
                      sx={{
                        px: 3,
                        py: 1.4,
                        borderRadius: '50px',
                        textTransform: 'none',
                        fontWeight: 600,
                        minWidth: '150px',
                        fontSize: '1rem',
                        backgroundColor: '#1877F2',
                        color: '#fff',
                        boxShadow: '0 4px 14px rgba(24, 119, 242, 0.4)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: '#166FE5',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 20px rgba(24, 119, 242, 0.5)',
                        },
                      }}
                    >
                      Facebook
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<InstagramIcon />}
                      onClick={openInstagram}
                      sx={{
                        px: 3,
                        py: 1.4,
                        borderRadius: '50px',
                        textTransform: 'none',
                        fontWeight: 600,
                        minWidth: '150px',
                        fontSize: '1rem',
                        background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                        color: '#fff',
                        boxShadow: '0 4px 14px rgba(228, 64, 95, 0.4)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'linear-gradient(45deg, #e0852a 0%, #d65a35 25%, #d41f3c 50%, #c41e5f 75%, #ac1577 100%)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 20px rgba(228, 64, 95, 0.5)',
                        },
                      }}
                    >
                      Instagram
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contacto;