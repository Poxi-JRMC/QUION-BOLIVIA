import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Fade,
  Modal,
  IconButton,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled, keyframes } from '@mui/system';
import { useTranslation } from 'react-i18next';
import Slide from '@mui/material/Slide';


// Fondo amarillo suave
const StyledBox = styled(Box)({
  backgroundColor: '#f7dc6f',
  padding: '80px 0',
  fontFamily: "'Lera', serif",
});

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
`;

const AnimatedTitle = styled(Typography)({
  animation: `${slideDownFade} 1s ease-out forwards`,
});

// Animación para caja del título (con pulso suave)
const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

// Caja animada para el título (reemplaza donde estaba el texto)
const TitleBox = styled(Box)(({ theme }) => ({
  cursor: 'pointer',
  backgroundColor: '#b9cc61',
  borderRadius: 8,
  padding: '40px 20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '1.5rem',
  gap: '12px',
  userSelect: 'none',
  animation: `${pulse} 2s infinite ease-in-out`,
  transition: 'background-color 0.3s',
  '&:hover': {
    backgroundColor: '#cf6f0a',
  },
}));

const icons = [
  <CheckCircleIcon fontSize="large" />,
  <CheckCircleIcon fontSize="large" />,
  <CheckCircleIcon fontSize="large" />,
];

const Section = ({ id, title, text, imgSrc, imgAlt, reverse, delay }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid
        container
        spacing={6}
        direction={reverse ? 'row-reverse' : 'row'}
        alignItems="center"
        sx={{ mb: 12 }}
      >
        {/* Caja título con animación e ícono, clic para abrir modal */}
        <Grid item xs={12} md={6}>
          <Fade in timeout={600} style={{ transitionDelay: `${delay}ms` }}>
            <TitleBox onClick={handleOpen} aria-label={`Abrir detalles de ${title}`}>
              {icons[id - 1]}
              {title}
            </TitleBox>
          </Fade>
        </Grid>

        {/* Imagen con animación y hover */}
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

      {/* Modal que despliega texto completo con imagen */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        aria-labelledby={`${title}-modal-title`}
        aria-describedby={`${title}-modal-description`}
        sx={{
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center',
       zIndex: 1300,
      }}
>
     <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <Box
      sx={{
        background: 'linear-gradient(145deg, #b9cc61, #f0f0f0)',
        bgcolor: '#fff',
        borderRadius: 3,
        boxShadow: 24,
        p: 4,
        maxWidth: fullScreen ? '90vw' : 600,
        width: '90%',
        maxHeight: '80vh',
        overflowY: 'auto',
        outline: 'none',
      }}
          >
            <Box
              sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}
            >
              <Typography
                id={`${title}-modal-title`}
                variant="h5"
                fontWeight="bold"
              >
                {title}
              </Typography>
              <IconButton
                onClick={handleClose}
                aria-label="Cerrar"
                size="large"
              >
                <CloseIcon />
              </IconButton>
            </Box>

            <Box
              component="img"
              src={imgSrc}
              alt={imgAlt}
              sx={{
                width: '100%',
                height: 'auto',
                borderRadius: 2,
                mb: 3,
                objectFit: 'cover',
              }}
            />

            <Typography
              id={`${title}-modal-description`}
              variant="body1"
              sx={{ whiteSpace: 'pre-line', lineHeight: 1.6 }}
            >
              {text}
            </Typography>
          </Box>
        </Slide>
      </Modal>
    </>
  );
};

const Nosotros = () => {
  useEffect(() => {
    document.body.classList.add('nosotros');
    return () => {
      document.body.classList.remove('nosotros');
    };
  }, []);

  const { t } = useTranslation();

  const contentData = [
    {
      id: 1,
      title: t('about.mission.title'),
      text: t('about.mission.text'),
      imgSrc: '/src/assets/mision.jpeg',
      imgAlt: t('about.mission.imgAlt'),
      reverse: false,
    },
    {
      id: 2,
      title: t('about.vision.title'),
      text: t('about.vision.text'),
      imgSrc: '/src/assets/vision.jpeg',
      imgAlt: t('about.vision.imgAlt'),
      reverse: true,
    },
    {
      id: 3,
      title: t('about.values.title'),
      text: t('about.values.text'),
      imgSrc: '/src/assets/valores.jpg',
      imgAlt: t('about.values.imgAlt'),
      reverse: false,
    },
  ];

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
          {t('about.title')}
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
            {t('about.description')}
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
            {t('about.footer')}
          </Typography>
        </Box>
      </Container>
    </StyledBox>
  );
};

export default Nosotros;
