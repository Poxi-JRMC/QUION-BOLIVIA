import React from 'react'
import HeroSection from '../componentes/HeroSection'
import { Box, Container, Typography, Grid, Paper } from '@mui/material'

const Inicio = () => {
  return (
    <Box>
      <HeroSection />

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
          Beneficios de la quinua
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" component="h3" gutterBottom>
                Alto valor nutricional
              </Typography>
              <Typography>
                La quinua es rica en proteínas, fibra y minerales esenciales como hierro, magnesio y zinc.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" component="h3" gutterBottom>
                Libre de gluten
              </Typography>
              <Typography>
                Ideal para personas con celiaquía o sensibilidad al gluten, siendo una alternativa saludable.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" component="h3" gutterBottom>
                Cultivo sostenible
              </Typography>
              <Typography>
                Nuestra quinua se cultiva respetando el medio ambiente y las tradiciones ancestrales.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Inicio