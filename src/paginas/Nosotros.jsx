import React from 'react'
import { Box, Container, Typography, Avatar, Grid } from '@mui/material'
import { styled } from '@mui/system'

const StyledBox = styled(Box)(({ theme }) => ({
  background: theme.palette.background.paper,
  padding: theme.spacing(8, 0),
}))

const Nosotros = () => {
  return (
    <Box>
      <StyledBox>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
            Sobre QUION-BO
          </Typography>
          <Typography variant="h6" component="p" align="center" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
            Somos una empresa dedicada a la producción y comercialización de quinua orgánica de la más alta calidad,
            cultivada en las tierras altas de los Andes peruanos con técnicas ancestrales y sostenibles.
          </Typography>

          <Grid container spacing={4} sx={{ mt: 6 }}>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    mx: 'auto',
                    mb: 2,
                    bgcolor: 'primary.main',
                  }}
                >
                  1
                </Avatar>
                <Typography variant="h5" component="h3" gutterBottom>
                  Misión
                </Typography>
                <Typography>
                  Promover el consumo de quinua como superalimento, manteniendo los más altos estándares de calidad y
                  sostenibilidad.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    mx: 'auto',
                    mb: 2,
                    bgcolor: 'primary.main',
                  }}
                >
                  2
                </Avatar>
                <Typography variant="h5" component="h3" gutterBottom>
                  Visión
                </Typography>
                <Typography>
                  Ser líderes mundiales en la producción de quinua orgánica, contribuyendo a la seguridad alimentaria y
                  al desarrollo de nuestras comunidades.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box textAlign="center">
                <Avatar
                  sx={{
                    width: 120,
                    height: 120,
                    mx: 'auto',
                    mb: 2,
                    bgcolor: 'primary.main',
                  }}
                >
                  3
                </Avatar>
                <Typography variant="h5" component="h3" gutterBottom>
                  Valores
                </Typography>
                <Typography>
                  Calidad, sostenibilidad, responsabilidad social y respeto por las tradiciones ancestrales de cultivo.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </StyledBox>
    </Box>
  )
}

export default Nosotros