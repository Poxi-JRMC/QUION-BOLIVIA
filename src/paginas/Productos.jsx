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
import { motion, AnimatePresence, useInView } from 'framer-motion';
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
  hover: {
    scale: 1.05,
    boxShadow: '0px 10px 20px rgba(0,0,0,0.2)',
    transition: { duration: 0.3, ease: 'easeInOut' }
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
    document.body.classList.add('productos');
    return () => {
      document.body.classList.remove('productos');
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <Box sx={{ py: 10, backgroundColor: '#f7dc6f' }}>
        <Container maxWidth="lg">
          <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "mirror",
                          repeatDelay: 1,
                          ease: "easeInOut"
                        }}
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
              {t('products.title')}
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid item key={product.key} xs={12} sm={6} md={6}>
                <motion.div whileHover="hover" variants={cardVariants}>
                  <Card
                    onClick={() => handleOpen(product)}
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
                        image={product.image}
                        alt={t(`products.${product.key}.name`)}
                        sx={{
                          height: 200,
                          objectFit: 'cover',
                          borderRadius: 2,
                          mb: 2,
                        }}
                      />
                    </motion.div>
                    <Typography variant="h6" fontWeight="600" sx={{ color: '#17202a' }}>
                      {t(`products.${product.key}.name`)}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          
          <AnimatePresence>
            {selectedProduct && (
              <Dialog
                open={Boolean(selectedProduct)}
                onClose={handleClose}
                fullScreen={fullScreen}
                maxWidth={false}
                fullWidth
                PaperComponent={motion.div}
                PaperProps={{
                  variants: modalVariants,
                  initial: 'hidden',
                  animate: 'visible',
                  exit: 'exit',
                  sx: {
                    borderRadius: 4,
                    p: fullScreen ? 2 : 4,
                    background: 'linear-gradient(145deg, #b9cc61, #f0f0f0)',
                    width: fullScreen ? '88vw' : '600px',
                    maxHeight: fullScreen ? '70vh':'80vh',
                    overflowY: 'auto',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                  }
                }}
              >
                <DialogTitle
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '1.7rem',
                    textAlign: 'center',
                    pb: 0,
                    color: '#17202a',
                    textShadow: '1px 1px 3px rgba(0,0,0,0.2)'
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
                      '&:hover': { color: '#b7950b' },
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </DialogTitle>

                <DialogContent sx={{ textAlign: 'center' }}>
                  <motion.img
                    src={selectedProduct.image}
                    alt={t(`products.${selectedProduct.key}.name`)}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      width: '100%',
                      maxHeight: fullScreen ? '40vh' : 300,
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
                      {t(`products.${selectedProduct.key}.description`)}
                    </Typography>
                  </motion.div>
                </DialogContent>
              </Dialog>
            )}
          </AnimatePresence>

          
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
                fontWeight="bold"
                sx={{
                  mb: 4,
                  color: '#17202a',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                }}
              >
                {t('products.upcomingTitle')}
              </Typography>

              <Grid container spacing={4}>
                {upcomingProducts.map((product, index) => (
                  <Grid item key={product.key} xs={12} sm={6} md={6}>
                    <motion.div whileHover="hover" variants={cardVariants}>
                      <Card
                        sx={{
                          cursor: 'default',
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
                            image={product.image}
                            alt={t(`products.${product.key}.name`)}
                            sx={{
                              height: 200,
                              objectFit: 'cover',
                              borderRadius: 2,
                              mb: 2,
                            }}
                          />
                        </motion.div>
                        <Typography variant="h6" fontWeight="600" sx={{ color: '#17202a' }}>
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
