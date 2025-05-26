import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  useMediaQuery,
  useTheme,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';

const certifications = [
  {
    name: 'Certificación Senasag',
    description:
      'Otorgada por el Servicio Nacional de Sanidad Agropecuaria e Inocuidad Alimentaria, esta certificación garantiza que la quinua cumple con las normativas sanitarias y fitosanitarias nacionales, asegurando su inocuidad y calidad para el consumo.',
    image: '/1senasag.jpg',
  },
  {
    name: 'Certificación ISO 22000',
    description:
      'Sistema de gestión de la inocuidad alimentaria reconocido internacionalmente que garantiza la trazabilidad, control de riesgos y cumplimiento de estándares higiénico-sanitarios en toda la cadena de producción de la quinua.',
    image: '/2iso.jpg',
  },
  {
    name: 'Certificación Fitosanitaria',
    description:
      'Incluye avales como SGS y Andina, que validan la calidad, origen geográfico y cumplimiento de estándares internacionales, garantizando que la quinua esté libre de plagas y enfermedades, apta para exportación.',
    image: '/3.jpg',
  },
];

const cardVariants = {
  hover: {
    scale: 1.05,
    boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: 'easeIn' } },
};

const Certificaciones = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = (cert) => setSelectedCert(cert);
  const handleClose = () => setSelectedCert(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Box sx={{ py: 10, backgroundColor: '#f7dc6f' }}>
        <Container maxWidth="md">
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            fontWeight="bold"
            sx={{
              mb: 6,
              color: '#17202a',
              textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
            }}
          >
            Nuestras Certificaciones
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {/* Fila superior */}
            <Grid item xs={12} sm={6} md={5}>
              <motion.div whileHover="hover" variants={cardVariants}>
                <Card
                  onClick={() => handleOpen(certifications[0])}
                  sx={{
                    cursor: 'pointer',
                    textAlign: 'center',
                    p: 2,
                    backgroundColor: '#fff',
                    borderRadius: 6,
                    boxShadow: 15,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={certifications[0].image}
                    alt={certifications[0].name}
                    sx={{ height: 200, objectFit: 'cover', borderRadius: 2, mb: 2 }}
                  />
                  <Typography variant="h6" fontWeight="600" sx={{ color: '#17202a' }}>
                    {certifications[0].name}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={6} md={5}>
              <motion.div whileHover="hover" variants={cardVariants}>
                <Card
                  onClick={() => handleOpen(certifications[1])}
                  sx={{
                    cursor: 'pointer',
                    textAlign: 'center',
                    p: 2,
                    backgroundColor: '#f0f0f0',
                    borderRadius: 6,
                    boxShadow: 15,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={certifications[1].image}
                    alt={certifications[1].name}
                    sx={{ height: 200, objectFit: 'cover', borderRadius: 2, mb: 2 }}
                  />
                  <Typography variant="h6" fontWeight="600" sx={{ color: '#17202a' }}>
                    {certifications[1].name}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>

            {/* Tarjeta inferior al centro */}
            <Grid item xs={12} sm={8} md={6}>
              <motion.div whileHover="hover" variants={cardVariants}>
                <Card
                  onClick={() => handleOpen(certifications[2])}
                  sx={{
                    cursor: 'pointer',
                    textAlign: 'center',
                    p: 2,
                    backgroundColor: '#fff',
                    borderRadius: 6,
                    boxShadow: 15,
                    mt: { xs: 3, md: 3 },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={certifications[2].image}
                    alt={certifications[2].name}
                    sx={{ height: 200, objectFit: 'cover', borderRadius: 2, mb: 2 }}
                  />
                  <Typography variant="h6" fontWeight="600" sx={{ color: '#17202a' }}>
                    {certifications[2].name}
                  </Typography>
                </Card>
              </motion.div>
            </Grid>
          </Grid>

          {/* Modal */}
          <AnimatePresence>
            {selectedCert && (
              <Dialog
                open={Boolean(selectedCert)}
                onClose={handleClose}
                fullScreen={fullScreen}
                maxWidth="sm"
                fullWidth
                PaperComponent={motion.div}
                PaperProps={{
                  variants: modalVariants,
                  initial: 'hidden',
                  animate: 'visible',
                  exit: 'exit',
                  sx: {
                    borderRadius: 4,
                    p: 3,
                    background: 'linear-gradient(145deg,rgb(194, 183, 25), #f0f0f0)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <DialogTitle
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '1.7rem',
                    textAlign: 'center',
                    pb: 0,
                    color: '#17202a',
                    textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
                  }}
                >
                  {selectedCert.name}
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                      position: 'absolute',
                      right: 12,
                      top: 12,
                      color: theme.palette.grey[600],
                      '&:hover': { color: '#b7950b' },
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </DialogTitle>

                <DialogContent sx={{ textAlign: 'center' }}>
                  <motion.img
                    src={selectedCert.image}
                    alt={selectedCert.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      width: '100%',
                      maxHeight: 300,
                      objectFit: 'cover',
                      borderRadius: 16,
                      marginBottom: 24,
                      marginTop: 8,
                      boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                    }}
                  />
                  <Divider sx={{ mb: 3 }} />
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Typography variant="body1" fontSize="1.1rem" color="text.secondary">
                      {selectedCert.description}
                    </Typography>
                  </motion.div>
                </DialogContent>
              </Dialog>
            )}
          </AnimatePresence>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Certificaciones;
