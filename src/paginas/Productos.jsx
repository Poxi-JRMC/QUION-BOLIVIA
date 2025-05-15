import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const productos = [
  { nombre: 'Quinua Real Blanca', imagen: 'https://source.unsplash.com/featured/?quinoa' },
  { nombre: 'Quinua Roja Orgánica', imagen: 'https://source.unsplash.com/featured/?organic-quinoa' },
  { nombre: 'Quinua Negra Premium', imagen: 'https://source.unsplash.com/featured/?black-quinoa' },
];

const Productos = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Nuestros Productos
      </Typography>
      <Grid container spacing={4}>
        {productos.map((producto, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia component="img" height="200" image={producto.imagen} alt={producto.nombre} />
              <CardContent>
                <Typography variant="h6">{producto.nombre}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Productos;