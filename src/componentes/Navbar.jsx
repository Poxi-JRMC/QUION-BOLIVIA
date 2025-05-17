import React, { useState, useRef } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Grow,
  Paper,
  Popper,
  ClickAwayListener,
  MenuList,
  MenuItem,
} from '@mui/material'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }
    setOpen(false)
  }

  return (
    <AppBar
      position="absolute"
      color="transparent"
      elevation={0}
      sx={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', backdropFilter: 'blur(8px)' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              ml: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            QUION-BO
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              ref={anchorRef}
              onClick={handleToggle}
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
              Descubre más
            </Button>

            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
              placement="bottom-end"
              sx={{ zIndex: 1300 }}
            >
              {({ TransitionProps }) => (
                <Grow
                  {...TransitionProps}
                  style={{ transformOrigin: 'top right' }}
                >
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
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        onKeyDown={(e) => {
                          if (e.key === 'Tab') handleClose(e)
                        }}
                      >
                        <MenuItem component={Link} to="/" onClick={handleClose}>
                          Inicio Principal
                        </MenuItem>
                        <MenuItem component={Link} to="/bienvenida" onClick={handleClose}>
                          Bienvenida
                        </MenuItem>
                        <MenuItem component={Link} to="/reconocimientos" onClick={handleClose}>
                          Reconocimientos
                        </MenuItem>
                        <MenuItem component={Link} to="/nosotros" onClick={handleClose}>
                          Nosotros
                        </MenuItem>
                        <MenuItem component={Link} to="/productos" onClick={handleClose}>
                          Productos
                        </MenuItem>
                        <MenuItem component={Link} to="/contacto" onClick={handleClose}>
                          Contacto
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
