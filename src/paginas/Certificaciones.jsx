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
    name: 'Certificación Orgánica',
    description:
      'Garantiza que la quinua ha sido cultivada sin pesticidas ni fertilizantes químicos, siguiendo los estándares internacionales de agricultura orgánica.',
    image: '/1senasag.jpg',
  },
  {
    name: 'Certificación Fair Trade',
    description:
      'Esta certificación asegura que los productores reciben un comercio justo, con condiciones laborales dignas y respeto al medio ambiente.',
    image: '/2iso.jpg',
  },
  {
    name: 'Certificación SGS',
    description:
      'Certificación internacional que garantiza la calidad y seguridad alimentaria de nuestros productos, validada por laboratorios SGS.',
    image: '/3.jpg',
  },
  {
    name: 'Certificación Andina',
    description:
      'Reconoce el origen geográfico de la quinua andina y su cumplimiento con las regulaciones de la región para productos agroalimentarios.',
    image: '/4.jpg',
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
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
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
          </motion.div>

          <Grid container spacing={4}>
            {certifications.map((cert, index) => (
              <Grid item key={index} xs={12} sm={6} md={6}>
                <motion.div whileHover="hover" variants={cardVariants}>
                  <Card
                    onClick={() => handleOpen(cert)}
                    sx={{
                      cursor: 'pointer',
                      textAlign: 'center',
                      p: 2,
                      backgroundColor: index % 2 === 0 ? '#fff' : '#f0f0f0',
                      borderRadius: 4,
                      boxShadow: 3,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <CardMedia
                        component="img"
                        image={cert.image}
                        alt={cert.name}
                        sx={{
                          height: 200,
                          objectFit: 'cover',
                          borderRadius: 2,
                          mb: 2,
                        }}
                      />
                    </motion.div>
                    <Typography variant="h6" fontWeight="600" sx={{ color: '#17202a' }}>
                      {cert.name}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

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
                      color: (theme) => theme.palette.grey[600],
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
