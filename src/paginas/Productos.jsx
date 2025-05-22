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
  Divider
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';  // <-- Import framer-motion

const products = [
  {
    name: 'Quinua Blanca',
    description: 'La variedad más común, con un sabor suave y textura esponjosa.',
    image: '/quinua-blanca.jpg',
  },
  {
    name: 'Quinua Roja',
    description: 'De sabor más intenso y textura crujiente, ideal para ensaladas.',
    image: '/quinua-roja.jpg',
  },
  {
    name: 'Quinua Negra',
    description: 'La más nutritiva, con alto contenido de antioxidantes y minerales.',
    image: '/quinua-negra.jpg',
  },
  {
    name: 'Harina de Quinua',
    description: 'Perfecta para repostería sin gluten y aumentar el valor nutricional.',
    image: '/harina-quinua.jpg',
  }
];

const Productos = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Box sx={{ py: 10, backgroundColor: '#fef9f4' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" gutterBottom fontWeight="bold" sx={{ mb: 6 }}>
            Nuestros Productos
          </Typography>

          <Grid container spacing={4}>
            {products.map((product, index) => (
              <Grid item key={index} xs={12} sm={6} md={6}>
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
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{
                      height: 200,
                      objectFit: 'cover',
                      borderRadius: 2,
                      mb: 2,
                    }}
                  />
                  <Typography variant="h6" fontWeight="600">
                    {product.name}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Modal Moderno */}
          <Dialog
            open={Boolean(selectedProduct)}
            onClose={handleClose}
            fullScreen={fullScreen}
            maxWidth="sm"
            fullWidth
            PaperProps={{
              sx: {
                borderRadius: 4,
                p: 2,
                background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              }
            }}
          >
            <DialogTitle sx={{ fontWeight: 'bold', fontSize: '1.7rem', textAlign: 'center', pb: 0 }}>
              {selectedProduct?.name}
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 12,
                  top: 12,
                  color: (theme) => theme.palette.grey[600],
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>

            <DialogContent sx={{ textAlign: 'center' }}>
              <Box
                component="img"
                src={selectedProduct?.image}
                alt={selectedProduct?.name}
                sx={{
                  width: '100%',
                  maxHeight: 300,
                  objectFit: 'cover',
                  borderRadius: 3,
                  mb: 3,
                  mt: 1,
                  boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                }}
              />
              <Divider sx={{ mb: 3 }} />
              <Typography variant="body1" fontSize="1.1rem" color="text.secondary">
                {selectedProduct?.description}
              </Typography>
            </DialogContent>
          </Dialog>
        </Container>
      </Box>
    </motion.div>
  );
};

export default Productos;
