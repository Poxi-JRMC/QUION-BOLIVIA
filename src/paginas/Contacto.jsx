import React from 'react'
import { Box, Container, Typography, TextField, Button, Grid, Paper } from '@mui/material'

const Contacto = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
              Contáctanos
            </Typography>
            <Typography variant="body1" paragraph>
              ¿Tienes preguntas sobre nuestros productos o deseas realizar un pedido? Completa el formulario y nos
              pondremos en contacto contigo a la brevedad.
            </Typography>

            <Box component="form" sx={{ mt: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="nombre"
                    label="Nombre"
                    name="nombre"
                    autoComplete="given-name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="apellido"
                    label="Apellido"
                    name="apellido"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Correo electrónico"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="telefono"
                    label="Teléfono"
                    name="telefono"
                    autoComplete="tel"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={4}
                    id="mensaje"
                    label="Mensaje"
                    name="mensaje"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" size="large">
                    Enviar mensaje
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" component="h3" gutterBottom sx={{ mb: 3 }}>
                Información de contacto
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Dirección:</strong> Av. Los Granos 123, Lima, Perú
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Teléfono:</strong> +51 987 654 321
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Correo electrónico:</strong> info@quionbo.com
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Horario de atención:</strong> Lunes a Viernes de 9:00 am a 6:00 pm
              </Typography>

              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" component="h4" gutterBottom>
                  Síguenos en redes sociales
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button variant="outlined" color="primary">
                    Facebook
                  </Button>
                  <Button variant="outlined" color="primary">
                    Instagram
                  </Button>
                  <Button variant="outlined" color="primary">
                    LinkedIn
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Contacto