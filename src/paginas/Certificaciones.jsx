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
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    document.body.classList.add('certificaciones');
    return () => {
      document.body.classList.remove('certificaciones');
    };
  }, []);

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
            {t('certifications.title')}
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {certifications.map((cert, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={index === 2 ? 8 : 6}
                md={index === 2 ? 6 : 5}
                sx={{ mt: index === 2 ? { xs: 3, md: 3 } : 0 }}
              >
                <motion.div whileHover="hover" variants={cardVariants}>
                  <Card
                    onClick={() => handleOpen(index)}
                    sx={{
                      cursor: 'pointer',
                      textAlign: 'center',
                      p: 2,
                      backgroundColor: index % 2 === 0 ? '#fff' : '#f0f0f0',
                      borderRadius: 6,
                      boxShadow: 15,
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={cert.image}
                      alt={cert.name}
                      sx={{ height: 200, objectFit: 'cover', borderRadius: 2, mb: 2 }}
                    />
                    <Typography variant="h6" fontWeight="600" sx={{ color: '#17202a' }}>
                      {cert.name}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <AnimatePresence>
            {selectedIndex !== null && (
              <Dialog
                open={selectedIndex !== null}
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
                    background: 'linear-gradient(145deg, #b9cc61, #f0f0f0)',
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
                  {certifications[selectedIndex].name}
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
                    src={certifications[selectedIndex].image}
                    alt={certifications[selectedIndex].name}
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
                      {certifications[selectedIndex].description}
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
