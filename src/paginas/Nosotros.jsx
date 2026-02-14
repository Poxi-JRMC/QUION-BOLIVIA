import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import {
  Box,
  Container,
  Typography,
  Grid,
  Modal,
  IconButton,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useTranslation } from 'react-i18next';
import Slide from '@mui/material/Slide';
import misionImg from '../assets/mision.jpeg';
import visionImg from '../assets/vision.jpeg';
import valoresImg from '../assets/valores.jpg';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

const SectionCard = ({ id, title, text, imgSrc, imgAlt, index }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = useTranslation();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid item xs={12} md={4}>
        <motion.div
          custom={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <Card
            onClick={handleOpen}
            sx={{
              cursor: 'pointer',
              height: '100%',
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(27, 94, 32, 0.12)',
              border: '1px solid rgba(27, 94, 32, 0.08)',
              transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: '0 12px 32px rgba(27, 94, 32, 0.2)',
                borderColor: 'rgba(27, 94, 32, 0.2)',
              },
            }}
          >
            <CardMedia
              component="img"
              image={imgSrc}
              alt={imgAlt}
              sx={{
                height: 220,
                objectFit: 'cover',
                transition: 'transform 0.4s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            />
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                <CheckCircleIcon sx={{ color: '#1B5E20', fontSize: 28 }} />
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 600,
                    color: '#1B5E20',
                  }}
                >
                  {title}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  color: '#4A5F4A',
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: '0.9rem',
                }}
              >
                {t('about.viewDetails')} →
              </Typography>
            </CardContent>
          </Card>
        </motion.div>
      </Grid>

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
        <Slide direction="up" in={open} mountOnEnter unmountOnExit timeout={{ enter: 250, exit: 200 }}>
          <Box
            sx={{
              background: 'linear-gradient(145deg, #f8f9f5, #ffffff)',
              borderRadius: 3,
              boxShadow: 24,
              p: 4,
              maxWidth: fullScreen ? '90vw' : 600,
              width: '90%',
              maxHeight: '80vh',
              overflowY: 'auto',
              outline: 'none',
              border: '1px solid rgba(27, 94, 32, 0.1)',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
              <Typography id={`${title}-modal-title`} variant="h5" fontWeight={600} sx={{ fontFamily: "'Playfair Display', serif", color: '#1B5E20' }}>
                {title}
              </Typography>
              <IconButton onClick={handleClose} aria-label="Cerrar" size="large">
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
              sx={{ whiteSpace: 'pre-line', lineHeight: 1.6, color: '#4A5F4A', fontFamily: "'Poppins', sans-serif" }}
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
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t('pageTitles.nosotros');
    document.body.classList.add('nosotros');
    return () => {
      document.body.classList.remove('nosotros');
    };
  }, [t]);

  const contentData = [
    {
      id: 1,
      title: t('about.mission.title'),
      text: t('about.mission.text'),
      imgSrc: misionImg,
      imgAlt: t('about.mission.imgAlt'),
    },
    {
      id: 2,
      title: t('about.vision.title'),
      text: t('about.vision.text'),
      imgSrc: visionImg,
      imgAlt: t('about.vision.imgAlt'),
    },
    {
      id: 3,
      title: t('about.values.title'),
      text: t('about.values.text'),
      imgSrc: valoresImg,
      imgAlt: t('about.values.imgAlt'),
    },
  ];

  return (
    <Box sx={{ padding: '80px 0', fontFamily: "'Poppins', sans-serif" }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            align="center"
            sx={{ mb: 8, fontWeight: 700, color: '#2C3E2E', fontFamily: "'Playfair Display', serif" }}
          >
            {t('about.title')}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Typography
            variant="h6"
            component="p"
            align="center"
            sx={{
              mb: 10,
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.7,
              color: '#4A5F4A',
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            {t('about.description')}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Box
            sx={{
              textAlign: 'center',
              mb: 8,
              p: 4,
              borderRadius: 3,
              backgroundColor: 'rgba(27, 94, 32, 0.04)',
              border: '1px solid rgba(27, 94, 32, 0.1)',
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                color: '#1B5E20',
                mb: 2,
              }}
            >
              {t('about.commitment')}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 720,
                mx: 'auto',
                color: '#4A5F4A',
                fontFamily: "'Poppins', sans-serif",
                lineHeight: 1.8,
              }}
            >
              {t('about.commitment_text')}
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {contentData.map(({ id, title, text, imgSrc, imgAlt }, index) => (
            <SectionCard
              key={id}
              id={id}
              title={title}
              text={text}
              imgSrc={imgSrc}
              imgAlt={imgAlt}
              index={index}
            />
          ))}
        </Grid>

        <Box sx={{ textAlign: 'center', mt: 12, mb: 6 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              fontFamily: "'Playfair Display', serif",
              color: '#1B5E20',
              textTransform: 'uppercase',
              letterSpacing: 2,
            }}
          >
            {t('about.footer')}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Nosotros;