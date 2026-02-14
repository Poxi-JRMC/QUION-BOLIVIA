import React, { useState, useEffect, useRef } from 'react';
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
  Divider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion, useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const products = [
  { key: 'whiteQuinoa', image: '/quinua-blanca.jpg' },
  { key: 'redQuinoa', image: '/quinua-roja.jpg' },
  { key: 'blackQuinoa', image: '/quinua-negra.jpg' },
  { key: 'mixedQuinoa', image: '/quinua-mixta.jpg' }
];

const upcomingProducts = [
  { key: 'futureQuinoa1', image: '/proximo1.jpg' },
  { key: 'futureQuinoa2', image: '/proximo2.jpg' }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  hover: {
    scale: 1.03,
    boxShadow: '0px 12px 24px rgba(27, 94, 32, 0.15)',
    transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: 'easeIn' } },
};

const Productos = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  const upcomingRef = useRef(null);
  const isInView = useInView(upcomingRef, { once: true, margin: '-100px' });

  const handleOpen = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    document.title = t('pageTitles.productos');
    document.body.classList.add('productos');
    return () => {
      document.body.classList.remove('productos');
    };
  }, [t]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
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
                mb: 6,
                color: '#1B5E20',
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {t('products.title')}
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid item key={product.key} xs={12} sm={6} md={6}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Card
                    onClick={() => handleOpen(product)}
                    sx={{
                      cursor: 'pointer',
                      textAlign: 'center',
                      p: 2,
                      backgroundColor: '#ffffff',
                      borderRadius: 4,
                      boxShadow: '0 4px 20px rgba(27, 94, 32, 0.08)',
                      border: '1px solid rgba(27, 94, 32, 0.1)',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <CardMedia
                        component="img"
                        image={product.image}
                        alt={t(`products.${product.key}.name`)}
                        loading="lazy"
                        sx={{
                          height: 200,
                          objectFit: 'cover',
                          borderRadius: 2,
                          mb: 2,
                        }}
                      />
                    <Typography variant="h6" fontWeight={600} sx={{ color: '#1B5E20', fontFamily: "'Playfair Display', serif" }}>
                      {t(`products.${product.key}.name`)}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          
          <Dialog
            open={Boolean(selectedProduct)}
            onClose={handleClose}
            fullScreen={fullScreen}
            maxWidth={false}
            fullWidth
            transitionDuration={{ enter: 200, exit: 150 }}
            PaperProps={{
              sx: {
                borderRadius: 4,
                p: fullScreen ? 2 : 4,
                background: 'linear-gradient(145deg, #f8f9f5, #ffffff)',
                width: fullScreen ? '88vw' : '600px',
                maxHeight: fullScreen ? '70vh' : '80vh',
                overflowY: 'auto',
                boxShadow: '0 10px 30px rgba(27, 94, 32, 0.15)',
                border: '1px solid rgba(27, 94, 32, 0.1)',
              },
            }}
          >
            {selectedProduct && (
              <>
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
                  {t(`products.${selectedProduct.key}.name`)}
                    <IconButton
                      aria-label="close"
                      onClick={handleClose}
                      sx={{
                        position: 'absolute',
                        right: 12,
                        top: 12,
                        color: (theme) => theme.palette.grey[600],
                        '&:hover': { color: '#1B5E20' },
                      }}
                    >
                    <CloseIcon />
                  </IconButton>
                </DialogTitle>

                <DialogContent sx={{ textAlign: 'center' }}>
                  <Box
                    component="img"
                    src={selectedProduct.image}
                    alt={t(`products.${selectedProduct.key}.name`)}
                    loading="eager"
                    sx={{
                      width: '100%',
                      maxHeight: fullScreen ? '40vh' : 300,
                      objectFit: 'cover',
                      borderRadius: 2,
                      mb: 3,
                      mt: 1,
                      boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                    }}
                  />
                  <Divider sx={{ mb: 3 }} />
                  <Typography variant="body1" fontSize="1.1rem" sx={{ color: '#4A5F4A', fontFamily: "'Poppins', sans-serif" }}>
                    {t(`products.${selectedProduct.key}.description`)}
                  </Typography>
                </DialogContent>
              </>
            )}
          </Dialog>

          
          <Box ref={upcomingRef} sx={{ mt: 10 }}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                fontWeight={600}
                sx={{
                  mb: 4,
                  color: '#1B5E20',
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                {t('products.upcomingTitle')}
              </Typography>

              <Grid container spacing={4}>
                {upcomingProducts.map((product, index) => (
                  <Grid item key={product.key} xs={12} sm={6} md={6}>
                    <motion.div
                      variants={cardVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <Card
                        sx={{
                          cursor: 'default',
                          textAlign: 'center',
                          p: 2,
                          backgroundColor: '#ffffff',
                          borderRadius: 4,
                          boxShadow: '0 4px 20px rgba(27, 94, 32, 0.08)',
                          border: '1px solid rgba(27, 94, 32, 0.1)',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        <CardMedia
                          component="img"
                          image={product.image}
                          alt={t(`products.${product.key}.name`)}
                          loading="lazy"
                          sx={{
                              height: 200,
                              objectFit: 'cover',
                              borderRadius: 2,
                              mb: 2,
                            }}
                          />
                        <Typography variant="h6" fontWeight={600} sx={{ color: '#1B5E20', fontFamily: "'Playfair Display', serif" }}>
                          {t(`products.${product.key}.name`)}
                        </Typography>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Productos;
