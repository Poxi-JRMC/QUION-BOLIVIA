import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton,
  Grid,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const openFacebook = () => {
    window.open('https://www.facebook.com/profile.php?id=61573488490491', '_blank');
  };

  const openInstagram = () => {
    window.open('https://www.instagram.com/quions.r.l', '_blank');
  };

  const navLinks = [
    { to: '/', label: t('Inicio') },
    { to: '/productos', label: t('Productos') },
    { to: '/nosotros', label: t('Nosotros') },
    { to: '/certificaciones', label: t('Certificaciones') },
    { to: '/contacto', label: t('Contactos') },
  ];

  const linkStyle = {
    color: 'rgba(255,255,255,0.9)',
    textDecoration: 'none',
    fontFamily: "'Poppins', sans-serif",
    fontSize: '0.9rem',
    fontWeight: 500,
    '&:hover': {
      color: '#8BC34A',
      textDecoration: 'underline',
    },
  };

  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      sx={{
        mt: 'auto',
        py: 5,
        px: 2,
        backgroundColor: '#0D3D10',
        color: '#fff',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Empresa */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                letterSpacing: '0.05em',
                mb: 2,
              }}
            >
              QUION-SRL
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.85)',
                lineHeight: 1.6,
              }}
            >
              Quinua orgánica de los Andes bolivianos. Exportación de productos de alto valor nutricional.
            </Typography>
          </Grid>

          {/* Enlaces */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '0.95rem',
                mb: 2,
                color: 'rgba(255,255,255,0.95)',
              }}
            >
              {t('footer.links')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  component={RouterLink}
                  to={to}
                  sx={linkStyle}
                >
                  {label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Contacto QUION */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '0.95rem',
                mb: 2,
                color: 'rgba(255,255,255,0.95)',
              }}
            >
              {t('contact.contact_section.emails')}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Link
                href="mailto:grovervillca@quionbolivia.com"
                sx={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <EmailIcon sx={{ fontSize: '1.1rem' }} />
                grovervillca@quionbolivia.com
              </Link>
              <Link
                href="mailto:info@quionbolivia.com"
                sx={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <EmailIcon sx={{ fontSize: '1.1rem' }} />
                info@quionbolivia.com
              </Link>
              <Link
                href="mailto:ventas@quionbolivia.com"
                sx={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: 1 }}
              >
                <EmailIcon sx={{ fontSize: '1.1rem' }} />
                ventas@quionbolivia.com
              </Link>
            </Box>
            <Typography
              component="div"
              sx={{
                mt: 2,
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.85)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 1,
              }}
            >
              <LocationOnIcon sx={{ fontSize: '1.1rem', mt: 0.2, flexShrink: 0 }} />
              <Box
                component="span"
                dangerouslySetInnerHTML={{ __html: t('contact.contact_section.location') }}
              />
            </Typography>
          </Grid>

          {/* Redes */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 600,
                fontSize: '0.95rem',
                mb: 2,
                color: 'rgba(255,255,255,0.95)',
              }}
            >
              {t('contact.contact_section.social')}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton
                onClick={openFacebook}
                aria-label="Facebook"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  '&:hover': {
                    color: '#8BC34A',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                onClick={openInstagram}
                aria-label="Instagram"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  '&:hover': {
                    color: '#8BC34A',
                    backgroundColor: 'rgba(255,255,255,0.08)',
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* Línea inferior */}
        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: '1px solid rgba(255,255,255,0.15)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <Typography
            sx={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: '0.85rem',
              color: 'rgba(255,255,255,0.8)',
            }}
          >
            © {currentYear} QUION-SRL. {t('footer.copyright')}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', sm: 'flex-end' },
              gap: 0.5,
            }}
          >
            <Typography
              component="span"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.75)',
                display: 'block',
              }}
            >
              {t('footer.developed_by')}{' '}
              <Box component="span" sx={{ color: '#8BC34A', fontWeight: 600 }}>INNOVA J.M.C.</Box>
              {' · '}
              <Link
                href={`mailto:${t('footer.developer_email')}`}
                sx={{
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  '&:hover': { color: '#8BC34A', textDecoration: 'underline' },
                }}
              >
                {t('footer.developer_email')}
              </Link>
            </Typography>
            <Typography
              component="span"
              sx={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: '0.85rem',
                color: 'rgba(255,255,255,0.75)',
                display: 'block',
              }}
            >
              {t('footer.and')}{' '}
              <Link
                href="https://github.com/Daleneyjhoel"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#8BC34A',
                  fontWeight: 600,
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  '&:hover': { color: '#A5D6A7', textDecoration: 'underline' },
                }}
              >
                Joel Daleney
              </Link>
              {' '}
              <Box component="span" sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>
                (GitHub)
              </Box>
            </Typography>
          </Box>
        </Box>

        {/* Mensaje de agradecimiento */}
        <Typography
          sx={{
            mt: 2,
            fontFamily: "'Poppins', sans-serif",
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.6)',
            textAlign: 'center',
          }}
        >
          {t('footer.thanks')}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
