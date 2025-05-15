import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Nosotros = () => {
  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Sobre Nosotros
      </Typography>
      <Typography variant="body1">
        Somos una empresa boliviana dedicada a la producción y exportación de quinua orgánica de alta calidad.
        Trabajamos directamente con productores locales para garantizar sabor, origen y sostenibilidad.
      </Typography>
    </Container>
  );
};

export default Nosotros;