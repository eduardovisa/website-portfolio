import * as React from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import { Menu } from '@mui/icons-material';

const drawerWidth = 240;
const navItems = [
  {
    label: 'Inicio',
    url: '#',
  },
  {
    label: 'Sobre mí',
    url: '#sobre-mi',
  },
  {
    label: 'Proyectos',
    url: '#proyectos',
  },
];

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

const Navbar = (props: Props) => {
  const { children } = props;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <a href={item.url}>
                <ListItemText primary={item.label} />
              </a>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <React.Fragment>
      <AppBar
        style={{
          backgroundColor: trigger ? '#ebebeb' : 'transparent',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Menu style={{ color: '#444444' }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <a href={item.url}>
                  <Button
                    key={item.label}
                    sx={{
                      color: '#444444',
                      margin: '1vh',
                      textTransform: 'capitalize',
                    }}
                  >
                    <Typography sx={{ typography: 'h6' }}>
                      {item.label}
                    </Typography>
                  </Button>
                </a>
              ))}
            </Box>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Toolbar />
      <Container sx={{ backgroundColor: '#f5f5f5' }}>
        <Box>{children}</Box>
      </Container>
    </React.Fragment>
  );
};

export default Navbar;
