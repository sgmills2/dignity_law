import { NavLink, Outlet } from 'react-router-dom';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Sheet
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
            Dignity Nursing Home Law
          </Typography>
          <List orientation="horizontal" sx={{ display: 'flex', gap: 2 }}>
            <ListItem>
              <ListItemButton
                component={NavLink}
                to="/"
                sx={{
                  fontWeight: 600,
                  '&.active': {
                    color: 'primary.500',
                  }
                }}
              >
                Home
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                component={NavLink}
                to="/about"
                sx={{
                  fontWeight: 600,
                  '&.active': {
                    color: 'primary.500',
                  }
                }}
              >
                About
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                component={NavLink}
                to="/services"
                sx={{
                  fontWeight: 600,
                  '&.active': {
                    color: 'primary.500',
                  }
                }}
              >
                Services
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton
                component={NavLink}
                to="/contact"
                sx={{
                  fontWeight: 600,
                  '&.active': {
                    color: 'primary.500',
                  }
                }}
              >
                Contact
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Sheet>

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

      <Sheet
        component="footer"
        sx={{
          p: 2,
          bgcolor: 'background.surface',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography level="body-sm" textAlign="center">
          © {new Date().getFullYear()} Dignity Nursing Home Law. All rights reserved.
        </Typography>
      </Sheet>
    </Box>
  );
};

export default Layout;
