import { NavLink, Outlet } from 'react-router-dom';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box
        component="header"
        sx={{
          p: 2,
          bgcolor: 'background.surface',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: 1200,
            mx: 'auto',
          }}
        >
          <Typography level="h4" component={NavLink} to="/" sx={{ textDecoration: 'none', color: 'inherit' }}>
            Sokolove Law
          </Typography>
          <Box component="nav" sx={{ display: 'flex', gap: 2 }}>
            <NavLink
              to="/"
              style={({ isActive }) => ({
                color: isActive ? 'var(--joy-palette-primary-500)' : 'inherit',
                textDecoration: 'none',
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              style={({ isActive }) => ({
                color: isActive ? 'var(--joy-palette-primary-500)' : 'inherit',
                textDecoration: 'none',
              })}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              style={({ isActive }) => ({
                color: isActive ? 'var(--joy-palette-primary-500)' : 'inherit',
                textDecoration: 'none',
              })}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              style={({ isActive }) => ({
                color: isActive ? 'var(--joy-palette-primary-500)' : 'inherit',
                textDecoration: 'none',
              })}
            >
              Contact
            </NavLink>
          </Box>
        </Box>
      </Box>

      <Box
        component="main"
        sx={{
          flex: 1,
          p: 2,
          maxWidth: 1200,
          mx: 'auto',
          width: '100%',
        }}
      >
        <Outlet />
      </Box>

      <Box
        component="footer"
        sx={{
          p: 2,
          bgcolor: 'background.surface',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography level="body-sm" textAlign="center">
          © {new Date().getFullYear()} Sokolove Law. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Layout;
