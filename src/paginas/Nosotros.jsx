import React, { useState } from 'react'
import { Box, Container, Typography, Grid, Fade, Modal } from '@mui/material'
import { styled, keyframes } from '@mui/system'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import StarIcon from '@mui/icons-material/Star'
import VerifiedIcon from '@mui/icons-material/Verified'

// Fondo amarillo suave
const StyledBox = styled(Box)({
  backgroundColor: '#f7dc6f',
  padding: '80px 0',
  fontFamily: "'Lera', serif",
})

// Animación personalizada para el título principal
const slideDownFade = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

const AnimatedTitle = styled(Typography)({
  animation: `${slideDownFade} 1s ease-out forwards`,
})

// Elegimos un ícono diferente por cada sección
const icons = [<CheckCircleIcon fontSize="large" />, <CheckCircleIcon fontSize="large" />, <CheckCircleIcon fontSize="large" />]

// Componente para cada sección
const Section = ({ id, title, text, imgSrc, imgAlt, reverse, delay }) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Grid
        container
        spacing={6}
        direction={reverse ? 'row-reverse' : 'row'}
        alignItems="center"
        sx={{ mb: 12 }}
      >
        {/* Texto */}
        <Grid item xs={12} md={6}>
          <Fade in timeout={600} style={{ transitionDelay: `${delay}ms` }}>
            <Box>
              <Box
                sx={{
                  width: 100,
                  height: 100,
                  mb: 3,
                  bgcolor: '#e67e22 ',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  color: '#fff',
                  fontSize: 36,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
                aria-label={`Sección ${title}`}
              >
                {icons[id - 1]}
              </Box>

              <Typography
                variant="h4"
                component="h3"
                sx={{ mb: 2, fontWeight: 700, color: '#000' }}
              >
                {title}
              </Typography>

              <Box>
                {text.split('\n').map((line, idx) => (
                  <Typography
                    key={idx}
                    sx={{
                      fontSize: 18,
                      lineHeight: 1.8,
                      color: '#000',
                      mb: 2,
                      whiteSpace: 'pre-line',
                    }}
                  >
                    {line.trim()}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Fade>
        </Grid>

        {/* Imagen */}
        <Grid item xs={12} md={6}>
          <Fade in timeout={800} style={{ transitionDelay: `${delay + 400}ms` }}>
            <Box
              component="img"
              src={imgSrc}
              alt={imgAlt}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 3,
                objectFit: 'cover',
                maxHeight: 320,
                boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
                cursor: 'pointer',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
              loading="lazy"
              onClick={handleOpen}
            />
          </Fade>
        </Grid>
      </Grid>

      {/* Modal para imagen grande */}
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Box
          onClick={handleClose}
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            bgcolor: 'rgba(0,0,0,0.85)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
            cursor: 'zoom-out',
            zIndex: 1300,
          }}
        >
          <Box
            component="img"
            src={imgSrc}
            alt={imgAlt}
            sx={{
              maxWidth: '90%',
              maxHeight: '90%',
              borderRadius: 3,
              boxShadow: '0 8px 30px rgba(0,0,0,0.7)',
            }}
          />
        </Box>
      </Modal>
    </>
  )
}

const contentData = [
  {
    id: 1,
    title: 'Misión',
    text: 'QUION-SRL ofrece productos orgánicos y naturales inocuos para mejorar la salud y el bienestar de nuestra familia boliviana, dando siempre el mejor servicio.',
    imgSrc: '/src/assets/mision.jpeg',
    imgAlt: 'Foto representativa de la misión de QUION-SRL',
    reverse: false,
  },
  {
    id: 2,
    title: 'Visión',
    text: 'Ser una empresa proactiva, ofrecer a un corto plazo productos de acuerdo a estrictas normas de gestión de calidad, mediante capacitación continua de nuestros trabajadores, para brindarles a nuestra Bolivia y países hermanos.',
    imgSrc: '/src/assets/vision.jpeg',
    imgAlt: 'Imagen que representa la visión de QUION-SRL',
    reverse: true,
  },
  {
    id: 3,
    title: 'Valores',
    text: `Calidad, sostenibilidad, responsabilidad social y respeto por las tradiciones ancestrales de cultivo.\n
Compromiso:\n
Pensamos en el compromiso como parte fundamental de nuestra visión. Implica ejecutar al máximo nuestras capacidades para sacar adelante lo que se nos ha confiado.\n
Responsabilidad y disciplina:\n
Somos ordenados y perseverantes en nuestras actividades diarias, buscando aprovechar nuestros recursos y exigiéndonos mejorar nuestros parámetros de operación.\n
Integridad:\n
Actuamos con honestidad y transparencia en todas nuestras acciones, generando confianza en nuestros clientes y colaboradores.`,
    imgSrc: '/src/assets/valores.jpg',
    imgAlt: 'Imagen que representa los valores de QUION-SRL',
    reverse: false,
  },
]

const Nosotros = () => {
  return (
    <StyledBox>
      <Container maxWidth="lg">
        <AnimatedTitle
          variant="h3"
          component="h1"
          gutterBottom
          align="center"
          sx={{ mb: 8, fontWeight: 700, color: '#000' }}
>
          Sobre QUION-BO
        </AnimatedTitle>


        <Fade in timeout={1600} style={{ transitionDelay: '300ms' }}>
          <Typography
            variant="h6"
            component="p"
            align="center"
            sx={{
              mb: 10,
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.7,
              color: '#000',
            }}
          >
            Somos una empresa dedicada a la producción y comercialización de quinua orgánica de la más alta calidad, cultivada en las tierras altas de los Andes peruanos con técnicas ancestrales y sostenibles.
          </Typography>
        </Fade>

        {contentData.map(({ id, title, text, imgSrc, imgAlt, reverse }, index) => (
          <Section
            key={id}
            id={id}
            title={title}
            text={text}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            reverse={reverse}
            delay={index * 400 + 800}
          />
        ))}

        {/* Texto final centrado */}
        <Box sx={{ textAlign: 'center', mt: 12, mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              fontFamily: "'Lera', serif",
              color: 'primary.main',
              textTransform: 'uppercase',
              letterSpacing: 2,
            }}
          >
            La mejor empresa de quinua QUION-SRL
          </Typography>
        </Box>
      </Container>
    </StyledBox>
  )
}

export default Nosotros
