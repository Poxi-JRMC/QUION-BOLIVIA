import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper, List, ListItem, Link } from '@mui/material';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const Contacto = () => {
  // Números en formato internacional CON el signo +
  const infoWhatsAppNumber = '+59171542030';
  const comprarWhatsAppNumber = '+59171542546';

  // Función definitiva para todos los dispositivos
  const openWhatsApp = (phone, message) => {
    const cleanNumber = phone.replace(/[^\d+]/g, '');
    const encodedMessage = encodeURIComponent(message);
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Para Android
      window.location.href = `intent://send?phone=${cleanNumber}&text=${encodedMessage}#Intent;scheme=whatsapp;package=com.whatsapp;action=android.intent.action.SEND;end`;
      
      // Para iOS (fallback)
      setTimeout(() => {
        window.location.href = `whatsapp://send?phone=${cleanNumber}&text=${encodedMessage}`;
      }, 300);
      
      // Si todo falla, abre la versión web
      setTimeout(() => {
        window.open(`https://api.whatsapp.com/send?phone=${cleanNumber}&text=${encodedMessage}`, '_blank');
      }, 600);
    } else {
      // Para desktop
      window.open(`https://web.whatsapp.com/send?phone=${cleanNumber}&text=${encodedMessage}`, '_blank');
    }
  };

  // Handler para información
  const handleInfoClick = () => {
    const message = `¡Hola! Vi su página web *QUION BOLIVIA* y necesito información sobre:

🔹 Productos disponibles
🔹 Precios actualizados
🔹 Tiempos de entrega

*Mi consulta específica:*
[Por favor describa su necesidad aquí]`;
    
    openWhatsApp(infoWhatsAppNumber, message);
  };

  // Handler para compras
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

  return (
    <Box 
      sx={{
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        pt: { xs: '100px', md: '130px' },
        pb: { xs: '60px', md: '80px' },
        // Fondo de imagen fijo
        backgroundImage: 'url(/contacto.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        // Overlay oscuro
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          zIndex: 0
        }
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          py: 6,
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
          <Grid container spacing={4} justifyContent="center">
            
            {/* Sección de Información */}
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
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
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
                      color: '#fff',
                      fontSize: { xs: '1.6rem', md: '2rem' },
                      mb: 3
                    }}
                  >
                    ¿Quieres información?
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      color: 'rgba(255,255,255,0.85)',
                      mb: 3,
                      fontSize: { xs: '0.95rem', md: '1.05rem' },
                      lineHeight: 1.6
                    }}
                  >
                    Contáctanos directamente por WhatsApp para recibir información detallada.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#fff',
                      mb: 3,
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                      fontWeight: '600',
                    }}
                  >
                    {infoWhatsAppNumber}
                  </Typography>
                  <Button
                    variant="outlined"
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
                      color: '#fff',
                      borderColor: '#fff',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderColor: '#fff'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Solicitar Información
                  </Button>
                </Box>
              </Paper>
            </Grid>

            {/* Sección de Compras */}
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
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
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
                      color: '#fff',
                      fontSize: { xs: '1.6rem', md: '2rem' },
                      mb: 3
                    }}
                  >
                    ¿Quieres comprar?
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{
                      color: 'rgba(255,255,255,0.85)',
                      mb: 3,
                      fontSize: { xs: '0.95rem', md: '1.05rem' },
                      lineHeight: 1.6
                    }}
                  >
                    Realiza tus pedidos directamente por WhatsApp.
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#fff',
                      mb: 3,
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                      fontWeight: '600',
                    }}
                  >
                    {comprarWhatsAppNumber}
                  </Typography>
                  <Button
                    variant="outlined"
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
                      color: '#fff',
                      borderColor: '#fff',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderColor: '#fff'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Realizar Pedido
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
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                  }
                }}
              >
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      fontFamily: "'Playfair Display', serif",
                      color: '#fff',
                      fontSize: { xs: '1.6rem', md: '2rem' },
                      mb: 3
                    }}
                  >
                    Contáctanos
                  </Typography>
                </Box>

                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#fff',
                          mb: 2,
                          fontWeight: 600,
                          fontSize: '1.2rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}
                      >
                        <EmailIcon sx={{ fontSize: '1.4rem', color: 'rgba(255,255,255,0.85)' }} />
                        Correos electrónicos
                      </Typography>
                      <List sx={{ pl: 0 }}>
                        <ListItem sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', px: 0 }}>
                          <Link href="mailto:grovervillca@quionbolivia.com" color="inherit" underline="hover" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                            grovervillca@quionbolivia.com
                          </Link>
                        </ListItem>
                        <ListItem sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', px: 0 }}>
                          <Link href="mailto:info@quionbolivia.com" color="inherit" underline="hover" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                            info@quionbolivia.com
                          </Link>
                        </ListItem>
                        <ListItem sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '1rem', px: 0 }}>
                          <Link href="mailto:ventas@quionbolivia.com" color="inherit" underline="hover" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                            ventas@quionbolivia.com
                          </Link>
                        </ListItem>
                      </List>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: '#fff',
                          mb: 2,
                          fontWeight: 600,
                          fontSize: '1.2rem'
                        }}
                      >
                        Dirección
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'rgba(255,255,255,0.85)',
                          fontSize: '1rem',
                          lineHeight: 1.6
                        }}
                      >
                        Challapata Calle Tomás Frías,<br />
                        Oruro, Bolivia
                      </Typography>
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
                      color: '#fff',
                      mb: 3,
                      fontSize: '1.3rem'
                    }}
                  >
                    Síguenos en redes sociales
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                      variant="outlined"
                      startIcon={<FacebookIcon />}
                      sx={{
                        px: 3,
                        py: 1.2,
                        borderRadius: '50px',
                        textTransform: 'none',
                        fontWeight: 500,
                        minWidth: '140px',
                        color: '#fff',
                        borderColor: 'rgba(255,255,255,0.3)',
                        '&:hover': {
                          borderColor: '#fff',
                          backgroundColor: 'rgba(255,255,255,0.1)'
                        }
                      }}
                    >
                      Facebook
                    </Button>
                    <Button
                      variant="outlined"
                      startIcon={<InstagramIcon />}
                      sx={{
                        px: 3,
                        py: 1.2,
                        borderRadius: '50px',
                        textTransform: 'none',
                        fontWeight: 500,
                        minWidth: '140px',
                        color: '#fff',
                        borderColor: 'rgba(255,255,255,0.3)',
                        '&:hover': {
                          borderColor: '#fff',
                          backgroundColor: 'rgba(255,255,255,0.1)'
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