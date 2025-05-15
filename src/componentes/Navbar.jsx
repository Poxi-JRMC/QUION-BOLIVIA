import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Quion Bolivia
        </Typography>
        <Box>
          <Button color="inherit" component={RouterLink} to="/">Inicio</Button>
          <Button color="inherit" component={RouterLink} to="/productos">Productos</Button>
          <Button color="inherit" component={RouterLink} to="/nosotros">Nosotros</Button>
          <Button color="inherit" component={RouterLink} to="/contacto">Contacto</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
