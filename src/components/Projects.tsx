import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

const Projects = () => {
  const BackgroundHead = {
    padding: 'cover',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <section id="proyectos">
      <div className="divider-projects">
        <Divider>
          <Typography variant="h2">Proyectos</Typography>
        </Divider>
      </div>
      <div className="divider">
        <Typography variant="h2">Proyectos</Typography>
      </div>
      <Container maxWidth={false}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {[1, 2, 3, 4].map((subject, index: number) => (
              <Grid
                item
                display="flex"
                flexDirection="column"
                xs={12}
                sm={4}
                md={4}
                key={`premed-card-materia-${index}`}
                sx={{ textAlign: 'center' }}
              >
                <Box
                  sx={{
                    color: 'white',
                    p: 2,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                  }}
                  style={{
                    ...BackgroundHead,
                  }}
                >
                  <Button fullWidth sx={{ width: 1 }}>
                    <Box
                      sx={{
                        position: 'relative',
                        display: 'inline-flex',
                        p: 6,
                      }}
                    />
                  </Button>
                </Box>
                <Box sx={{ bgcolor: '#ececec', pt: 1, pb: 1 }}>
                  <Grid
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    gap={1}
                  >
                    <Typography variant="body2" color="#444" fontWeight="bold">
                      Prueba
                    </Typography>
                  </Grid>
                </Box>
                <Box
                  sx={{
                    bgcolor: '#1f2874',
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5,
                    boxShadow: 10,
                  }}
                >
                  <Button>
                    <Typography color="white">Ver contenido</Typography>
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Projects;
