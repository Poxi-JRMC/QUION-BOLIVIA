import React, { useEffect, useState } from 'react';
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
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  hover: {
    scale: 1.03,
    boxShadow: '0px 12px 24px rgba(27, 94, 32, 0.15)',
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Certificaciones = () => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    document.title = t('pageTitles.certificaciones');
    document.body.classList.add('certificaciones');
    return () => {
      document.body.classList.remove('certificaciones');
    };
  }, [t]);

  const certifications = [
    {
      name: t('certifications.0.name'),
      description: t('certifications.0.description'),
      image: '/1senasag.jpg',
    },
    {
      name: t('certifications.1.name'),
      description: t('certifications.1.description'),
      image: '/2iso.jpg',
    },
    {
      name: t('certifications.2.name'),
      description: t('certifications.2.description'),
      image: '/3.jpg',
    },
  ];

  const handleOpen = (index) => setSelectedIndex(index);
  const handleClose = () => setSelectedIndex(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <Typography
                variant="h3"
                align="center"
                gutterBottom
                fontWeight={600}
                sx={{
                  mb: 2,
                  color: '#1B5E20',
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {t('certifications.title')}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  maxWidth: 640,
                  mx: 'auto',
                  color: '#4A5F4A',
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: 1.7,
                  fontSize: '1.05rem',
                }}
              >
                {t('certifications.subtitle')}
              </Typography>
            </motion.div>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {certifications.map((cert, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
              >
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Card
                    onClick={() => handleOpen(index)}
                    sx={{
                      cursor: 'pointer',
                      textAlign: 'center',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      p: 2,
                      backgroundColor: '#ffffff',
                      borderRadius: 3,
                      boxShadow: '0 4px 20px rgba(27, 94, 32, 0.08)',
                      border: '1px solid rgba(27, 94, 32, 0.1)',
                      transition: 'all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                      '&:hover': {
                        boxShadow: '0 8px 28px rgba(27, 94, 32, 0.15)',
                        borderColor: 'rgba(27, 94, 32, 0.25)',
                      },
                    }}
                  >
                    <Box sx={{ overflow: 'hidden', borderRadius: 2, mb: 2 }}>
                      <CardMedia
                        component="img"
                        image={cert.image}
                        alt={cert.name}
                        sx={{
                          height: 220,
                          objectFit: 'cover',
                          transition: 'transform 0.4s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          },
                        }}
                      />
                    </Box>
                    <Typography variant="h6" fontWeight={600} sx={{ color: '#1B5E20', fontFamily: "'Playfair Display', serif" }}>
                      {cert.name}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {selectedIndex !== null && (
              <Dialog
                open={selectedIndex !== null}
                onClose={handleClose}
                fullScreen={fullScreen}
                maxWidth={false}
                fullWidth
                TransitionProps={{ timeout: { enter: 200, exit: 150 } }}
                PaperProps={{
                  sx: {
                    borderRadius: 4,
                    p: fullScreen ? 1.5 : 4,
                    background: 'linear-gradient(145deg, #f8f9f5, #ffffff)',
                    width: fullScreen ? '88vw' : '600px',
                    maxHeight: fullScreen ? '70vh' : '80vh',
                    overflowY: 'auto',
                    boxShadow: '0 10px 30px rgba(27, 94, 32, 0.15)',
                    border: '1px solid rgba(27, 94, 32, 0.1)',
                  },
                }}
              >
                <DialogTitle
                  sx={{
                    fontWeight: 600,
                    fontSize: '1.7rem',
                    textAlign: 'center',
                    pb: 0,
                    color: '#1B5E20',
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {certifications[selectedIndex].name}
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                      position: 'absolute',
                      right: 12,
                      top: 12,
                      color: theme.palette.grey[600],
                      '&:hover': { color: '#1B5E20' },
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </DialogTitle>

                <DialogContent sx={{ textAlign: 'center' }}>
                  <Box
                    component="img"
                    src={certifications[selectedIndex].image}
                    alt={certifications[selectedIndex].name}
                    loading="eager"
                    sx={{
                      width: '100%',
                      maxHeight: fullScreen ? '40vh' : 300,
                      objectFit: 'cover',
                      borderRadius: 16,
                      mb: 3,
                      mt: 1,
                      boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                    }}
                  />
                  <Divider sx={{ mb: 3 }} />
                  <Typography variant="body1" fontSize="1.1rem" sx={{ color: '#4A5F4A', fontFamily: "'Poppins', sans-serif" }}>
                    {certifications[selectedIndex].description}
                  </Typography>
                </DialogContent>
              </Dialog>
            )}
        </Container>
      </Box>
    </motion.div>
  );
};

export default Certificaciones;
