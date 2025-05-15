import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const Contacto = () => {
  return (
    <Container sx={{ py: 5, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Contáctanos
      </Typography>
      <Typography variant="body1" gutterBottom>
        Escríbenos por WhatsApp o Facebook para más información.
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          color="primary"
          href="https://wa.me/59170000000"
          target="_blank"
        >
          WhatsApp
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          href="https://facebook.com"
          target="_blank"
          sx={{ ml: 2 }}
        >
          Facebook
        </Button>
      </Box>
    </Container>
  );
};

export default Contacto;