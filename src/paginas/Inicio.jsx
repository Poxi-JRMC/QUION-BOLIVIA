import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Inicio = () => {
  return (
    <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Bienvenido a Quion Bolivia
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Exportamos quinua boliviana de alta calidad al mundo entero. Sabor, salud y origen.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Ver Productos
        </Button>
      </Container>
    </Box>
  );
};

export default Inicio;