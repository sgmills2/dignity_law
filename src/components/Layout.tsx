import { Link, Outlet } from 'react-router-dom';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Navigation */}
      <Sheet
        component="nav"
        sx={{
          p: 2,
          bgcolor: 'background.surface',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Typography 
          level="h4" 
          component={Link} 
          to="/" 
          sx={{ 
            textDecoration: 'none', 
            color: 'inherit',
            '&.active': {
              color: 'primary.500',
            }
          }}
        >
          Sokolove Law
        </Typography>
        <List orientation="horizontal" sx={{ gap: 2 }}>
          <ListItem>
            <ListItemButton 
              component={Link} 
              to="/"
              sx={{
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
              component={Link} 
              to="/services"
              sx={{
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
              component={Link} 
              to="/about"
              sx={{
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
              component={Link} 
              to="/contact"
              sx={{
                '&.active': {
                  color: 'primary.500',
                }
              }}
            >
              Contact
            </ListItemButton>
          </ListItem>
        </List>
      </Sheet>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>

      {/* Footer */}
      <Sheet
        component="footer"
        sx={{
          p: 2,
          bgcolor: 'background.surface',
          borderTop: '1px solid',
          borderColor: 'divider',
          textAlign: 'center',
        }}
      >
        <Typography level="body-sm">
          © {new Date().getFullYear()} Sokolove Law. All rights reserved.
        </Typography>
      </Sheet>
    </Box>
  );
};

export default Layout;
