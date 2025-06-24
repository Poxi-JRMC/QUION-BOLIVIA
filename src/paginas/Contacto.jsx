import { Box, Container, Typography, Button, Grid, Paper, List, ListItem } from '@mui/material';
import { motion } from 'framer-motion';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import React, { useEffect } from 'react';

const Contacto = () => {
  
  useEffect(() => {
    document.body.classList.add('contacto');
    return () => {
      document.body.classList.remove('contacto');
    };
  }, []);
  // Números en formato internacional CON el signo +
  const infoWhatsAppNumber = '+59171542030';
  const comprarWhatsAppNumber = '+59171542546';

  // Función para abrir WhatsApp
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
        // Fondo con imagen y color de respaldo
        
        // Estilos alternativos si la imagen no carga
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
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
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.35)'
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
                    ¿Quieres información?
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
                    Contáctanos directamente por WhatsApp para recibir información detallada.
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
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.35)'
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
                    ¿Quieres comprar?
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
                    Realiza tus pedidos directamente por WhatsApp.
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
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.35)'
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
                      color: 'rgba(0, 0, 0, 0.8)',
                      textShadow: '0 1px 2px rgba(255,255,255,0.5)',
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
                          color: 'rgba(0, 0, 0, 0.8)',
                          textShadow: '0 1px 1px rgba(255,255,255,0.3)',
                          mb: 2,
                          fontWeight: 600,
                          fontSize: '1.2rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1
                        }}
                      >
                        <EmailIcon sx={{ fontSize: '1.4rem', color: 'rgba(0, 0, 0, 0.7)' }} />
                        Correos electrónicos
                      </Typography>
                      <List sx={{ pl: 0 }}>
                        <ListItem sx={{ color: 'rgba(0, 0, 0, 0.7)', fontSize: '1rem', px: 0 }}>
                          grovervillca@quionbolivia.com
                        </ListItem>
                        <ListItem sx={{ color: 'rgba(0, 0, 0, 0.7)', fontSize: '1rem', px: 0 }}>
                          info@quionbolivia.com
                        </ListItem>
                        <ListItem sx={{ color: 'rgba(0, 0, 0, 0.7)', fontSize: '1rem', px: 0 }}>
                          ventas@quionbolivia.com
                        </ListItem>
                      </List>
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          color: 'rgba(0, 0, 0, 0.8)',
                          textShadow: '0 1px 1px rgba(255,255,255,0.3)',
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
                          color: 'rgba(0, 0, 0, 0.7)',
                          textShadow: '0 1px 1px rgba(255,255,255,0.3)',
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
                      color: 'rgba(0, 0, 0, 0.8)',
                      textShadow: '0 1px 1px rgba(255,255,255,0.3)',
                      mb: 3,
                      fontSize: '1.3rem'
                    }}
                  >
                    Síguenos en redes sociales
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button
                      variant="contained"
                      startIcon={<FacebookIcon />}
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