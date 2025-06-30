import { Box, Container, Typography, Button, Grid, Paper, List, ListItem } from '@mui/material';
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
    document.body.classList.add('contacto');
    return () => {
      document.body.classList.remove('contacto');
    };
  }, []);
  
  // Números WhatsApp (no cambian con la traducción)
  const infoWhatsAppNumber = '+59171542030';
  const comprarWhatsAppNumber = '+59173564453';

  // Función para abrir WhatsApp (se mantiene igual)
  const openWhatsApp = (phone, message) => {
    const cleanNumber = phone.replace(/[^\d+]/g, '');
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.location.href = `intent://send?phone=${cleanNumber}&text=${encodedMessage}#Intent;scheme=whatsapp;package=com.whatsapp;action=android.intent.action.SEND;end`;
      setTimeout(() => {
        window.location.href = `whatsapp://send?phone=${cleanNumber}&text=${encodedMessage}`;
      }, 300);
      setTimeout(() => {
        window.open(`https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodedMessage}`, '_blank');
      }, 600);
    } else {
      window.open(`https://web.whatsapp.com/send?phone=${cleanNumber}&text=${encodedMessage}`, '_blank');
    }
  };

  // Handlers para WhatsApp (se mantienen igual)
  const handleInfoClick = () => {
    const message = `¡Hola! Vi su página web *QUION BOLIVIA* y necesito información sobre:

🔹 Productos disponibles
🔹 Precios actualizados
🔹 Tiempos de entrega

*Mi consulta específica:*
[Por favor describa su necesidad aquí]`;
    openWhatsApp(infoWhatsAppNumber, message);
  };

  const handleComprarClick = () => {
    const message = `¡Hola! Quiero realizar un pedido en *QUION BOLIVIA*:

📋 *Detalles del pedido:*
- Producto: 
- Cantidad: 
- Forma de pago: (Efectivo/Transferencia/Tarjeta)
- Dirección de envío: 

Por favor confírmenme disponibilidad y costo total.`;
    openWhatsApp(comprarWhatsAppNumber, message);
  };

  // Redes sociales (URLs no cambian)
  const facebookUrl = 'https://www.facebook.com/share/1HMF4x3Gaf/?mibextid=wwXIfr';
  const instagramUrl = 'https://www.instagram.com/quions.r.l?igsh=YzN6eXpnZHVhNGht&utm_source=qr';

  return (
    <Box 
      component="section"
      sx={{
        width: '100%',
        py: { xs: 4, md: 6 },
        position: 'relative',
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          position: 'relative',
          zIndex: 1,
          px: { xs: 2, md: 0 }
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Sección del CEO */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "mirror",
                repeatDelay: 2,
                ease: "easeInOut"
              }}
            >
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 700, 
                  color: 'rgba(0, 0, 0, 0.9)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                }}
              >
                {t("contact.ceo_title")}
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
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
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
                    {t("contact.info_section.title")}
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
                      backgroundColor: 'rgba(37, 211, 102, 0.9)',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: 'rgba(37, 211, 102, 1)',
                      },
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
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
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
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
                    {t("contact.buy_section.title")}
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
                      backgroundColor: 'rgba(37, 211, 102, 0.9)',
                      color: '#fff',
                      '&:hover': {
                        backgroundColor: 'rgba(37, 211, 102, 1)',
                      },
                      transition: 'all 0.3s ease',
                      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
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
                  backgroundColor: 'rgba(255, 255, 255, 0.18)',
                  backdropFilter: 'blur(5px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.25)'
                  }
                }}
              >
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
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
                      {t("contact.contact_section.title")}
                    </Typography>
                  </motion.div>
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
                        <ListItem 
                          sx={{ 
                            color: 'rgba(0, 0, 0, 0.75)',
                            fontSize: '1.1rem',
                            px: 0,
                            py: 1,
                            fontWeight: 500
                          }}
                        >
                          grovervillca@quionbolivia.com
                        </ListItem>
                        <ListItem 
                          sx={{ 
                            color: 'rgba(0, 0, 0, 0.75)',
                            fontSize: '1.1rem',
                            px: 0,
                            py: 1,
                            fontWeight: 500
                          }}
                        >
                          info@quionbolivia.com
                        </ListItem>
                        <ListItem 
                          sx={{ 
                            color: 'rgba(0, 0, 0, 0.75)',
                            fontSize: '1.1rem',
                            px: 0,
                            py: 1,
                            fontWeight: 500
                          }}
                        >
                          ventas@quionbolivia.com
                        </ListItem>
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
                      onClick={() => window.open(facebookUrl, '_blank')}
                      sx={{
                        px: 3,
                        py: 1.2,
                        borderRadius: '50px',
                        textTransform: 'none',
                        fontWeight: 500,
                        minWidth: '140px',
                        backgroundColor: 'rgba(24, 119, 242, 0.9)',
                        color: '#fff',
                        '&:hover': {
                          backgroundColor: 'rgba(24, 119, 242, 1)'
                        }
                      }}
                    >
                      Facebook
                    </Button>
                    <Button
                      variant="contained"
                      startIcon={<InstagramIcon />}
                      onClick={() => window.open(instagramUrl, '_blank')}
                      sx={{
                        px: 3,
                        py: 1.2,
                        borderRadius: '50px',
                        textTransform: 'none',
                        fontWeight: 500,
                        minWidth: '140px',
                        backgroundColor: 'rgba(228, 64, 95, 0.9)',
                        color: '#fff',
                        '&:hover': {
                          backgroundColor: 'rgba(228, 64, 95, 1)'
                        }
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