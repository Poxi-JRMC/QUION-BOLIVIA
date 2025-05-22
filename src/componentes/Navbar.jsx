import React, { useState, useRef, useEffect } from 'react';
import logo from '../assets/logo2.png';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Paper,
  Popper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Slide,
  Fade,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import LanguageIcon from '@mui/icons-material/Language';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true); // visible por defecto
  const [mounted, setMounted] = useState(false);
  const [language, setLanguage] = useState(i18n.language || 'es');

  const menuAnchorRef = useRef(null);
  const langAnchorRef = useRef(null);

  // Guardar la última posición para detectar scroll
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cambiar idioma
  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    setLangOpen(false);
  };

  // Toggle menú Discover More
  const handleToggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Toggle menú idioma
  const handleToggleLang = () => {
    setLangOpen((prev) => !prev);
  };

  const handleCloseMenu = (event) => {
    if (menuAnchorRef.current && menuAnchorRef.current.contains(event.target)) return;
    setMenuOpen(false);
  };

  const handleCloseLang = (event) => {
    if (langAnchorRef.current && langAnchorRef.current.contains(event.target)) return;
    setLangOpen(false);
  };

  return (
    <Fade in={mounted} timeout={2000}>
      <Slide in={showNavbar && mounted} direction="down" timeout={3000}>
        <AppBar
          position="fixed"
          color="transparent"
          elevation={0}
          sx={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(8px)',
            zIndex: 1301,
            transformOrigin: 'top center',
            animation: mounted ? 'scaleUpFadeIn 3s ease forwards' : 'none',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
              {/* Logo + Texto */}
              <Box
                component={Link}
                to="/"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  textDecoration: 'none',
                  ml: 2,
                }}
              >
                <Box
                  component="img"
                  src={logo}
                  alt="Logo Quion"
                  sx={{
                    height: 50,
                    width: 'auto',
                    mr: 2,
                  }}
                />
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.2rem',
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  {t('QUION-SRL')}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {/* Botón Discover More */}
                <Button
                  ref={menuAnchorRef}
                  onClick={handleToggleMenu}
                  color="inherit"
                  sx={{
                    mx: 2,
                    px: 3,
                    py: 1,
                    color: 'white',
                    border: '1px solid white',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  {t('descubre_mas')}
                </Button>

                <Popper
                  open={menuOpen}
                  anchorEl={menuAnchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                  placement="bottom-end"
                  sx={{ zIndex: 1300 }}
                >
                  {({ TransitionProps }) => (
                    <Slide {...TransitionProps} direction="down">
                      <Paper
                        sx={{
                          mt: 1,
                          borderRadius: 2,
                          backgroundColor: 'rgba(0, 0, 0, 0.7)',
                          color: 'white',
                          minWidth: 200,
                          boxShadow: '0px 8px 24px rgba(0,0,0,0.4)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          backdropFilter: 'blur(6px)',
                        }}
                      >
                        <ClickAwayListener onClickAway={handleCloseMenu}>
                          <MenuList
                            autoFocusItem={menuOpen}
                            onKeyDown={(e) => {
                              if (e.key === 'Tab') handleCloseMenu(e);
                            }}
                          >
                            <MenuItem component={Link} to="/" onClick={handleCloseMenu}>
                              {t('Inicio')}
                            </MenuItem>
                            <MenuItem component={Link} to="/productos" onClick={handleCloseMenu}>
                              {t('Productos')}
                            </MenuItem>
                            <MenuItem component={Link} to="/nosotros" onClick={handleCloseMenu}>
                              {t('Nosotros')}
                            </MenuItem>
                            <MenuItem component={Link} to="/reconocimientos" onClick={handleCloseMenu}>
                              {t('Certificaciones')}
                            </MenuItem>
                            <MenuItem component={Link} to="/contacto" onClick={handleCloseMenu}>
                              {t('Contactos')}
                            </MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Slide>
                  )}
                </Popper>

                {/* Selector de idioma personalizado con Popper */}
                <Box sx={{ ml: 2 }}>
                  <Button
                    ref={langAnchorRef}
                    onClick={handleToggleLang}
                    startIcon={<LanguageIcon />}
                    endIcon={langOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    sx={{
                      color: 'white',
                      border: '1px solid white',
                      borderRadius: 2,
                      textTransform: 'none',
                      px: 2,
                      py: 0.7,
                      fontWeight: 600,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.25)',
                      },
                      minWidth: 120,
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    {language === 'es' ? 'Español' : 'English'}
                  </Button>

                  <Popper
                    open={langOpen}
                    anchorEl={langAnchorRef.current}
                    transition
                    disablePortal
                    placement="bottom-end"
                    sx={{ zIndex: 1300 }}
                  >
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={250}>
                        <Paper
                          sx={{
                            mt: 1,
                            borderRadius: 2,
                            backgroundColor: 'rgba(0, 0, 0, 0.85)',
                            color: 'white',
                            minWidth: 140,
                            boxShadow: '0px 8px 24px rgba(0,0,0,0.6)',
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            backdropFilter: 'blur(8px)',
                          }}
                        >
                          <ClickAwayListener onClickAway={handleCloseLang}>
                            <MenuList>
                              <MenuItem
                                selected={language === 'es'}
                                onClick={() => handleChangeLanguage('es')}
                                sx={{
                                  fontWeight: language === 'es' ? 'bold' : 'normal',
                                  '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.15)',
                                  },
                                }}
                              >
                                Español
                              </MenuItem>
                              <MenuItem
                                selected={language === 'en'}
                                onClick={() => handleChangeLanguage('en')}
                                sx={{
                                  fontWeight: language === 'en' ? 'bold' : 'normal',
                                  '&:hover': {
                                    backgroundColor: 'rgba(255,255,255,0.15)',
                                  },
                                }}
                              >
                                English
                              </MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                </Box>
              </Box>
            </Toolbar>
          </Container>

          <style>
            {`
              @keyframes scaleUpFadeIn {
                0% {
                  opacity: 0;
                  transform: translateY(-20px) scale(0.95);
                }
                50% {
                  opacity: 0.5;
                  transform: translateY(-10px) scale(1.02);
                }
                100% {
                  opacity: 1;
                  transform: translateY(0) scale(1);
                }
              }
            `}
          </style>
        </AppBar>
      </Slide>
    </Fade>
  );
};

export default Navbar;
