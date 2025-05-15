import React from 'react'
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material'

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
  },
  {
    name: 'Hojuelas de Quinua',
    description: 'Listas para consumir, ideales para desayunos y snacks saludables.',
    image: '/hojuelas-quinua.jpg',
  },
  {
    name: 'Granola de Quinua',
    description: 'Mezcla de quinua con frutos secos y miel, energía natural.',
    image: '/granola-quinua.jpg',
  },
]

const Productos = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
          Nuestros Productos
        </Typography>

        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                  sx={{ height: 200, objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography>{product.description}</Typography>
                </CardContent>
                <Box sx={{ p: 2 }}>
                  <Button variant="contained" color="primary" fullWidth>
                    Más información
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Productos