import { useState } from 'react';
import { projectsData, tagsData } from '../data/projects';
import { Code, ExpandMore, Language } from '@mui/icons-material';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Collapse,
  Container,
  Divider,
  Grid,
  IconButton,
  IconButtonProps,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import { TagsDataInterface } from '../data/types';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

function tagColor(tag: string) {
  const tagValue: TagsDataInterface | undefined = tagsData.find(
    (tagData) => tagData.id == tag
  );

  if (tagValue) return tagValue.value;

  return 'white';
}

const ExpandMoreDetails = styled((props: ExpandMoreProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Projects = () => {
  const [expandedCardIndex, setExpandedCardIndex] = useState(-1);

  const handleExpandClick = (index: number) => {
    setExpandedCardIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <section id="proyectos">
      <div className="divider-projects" style={{ paddingBottom: '2vh' }}>
        <Divider>
          <Typography variant="h2">Proyectos</Typography>
        </Divider>
      </div>
      <div className="divider" style={{ paddingBottom: '2vh' }}>
        <Typography variant="h2">Proyectos</Typography>
      </div>
      <Container maxWidth={false}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {projectsData.map((project, index: number) => (
              <Grid
                item
                display="flex"
                flexDirection="column"
                xs={12}
                sm={4}
                md={4}
                key={`project-card-${index}`}
                sx={{ textAlign: 'center' }}
              >
                <Card sx={{ maxWidth: 345, bgcolor: 'white' }}>
                  <CardHeader
                    sx={{ bgcolor: '#94c6e8' }}
                    subheader={
                      <Typography fontWeight="bold">{project.name}</Typography>
                    }
                  />
                  <CardMedia
                    sx={{ bgcolor: 'white' }}
                    component="img"
                    height="194"
                    src={project.img}
                    alt="Paella dish"
                  />
                  <CardContent sx={{ textAlign: 'left' }}>
                    <Stack direction="row" spacing={1}>
                      {project.tags.map((tag: string, index: number) => {
                        return (
                          <Chip
                            key={`chip-tag-${index}`}
                            label={tag}
                            sx={{
                              opacity: '0.8',
                              backgroundColor: tagColor(tag),
                              color: 'white',
                            }}
                          />
                        );
                      })}
                    </Stack>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      {project.url_live && (
                        <a href={project.url_live} target="_blank">
                          <Language />
                        </a>
                      )}
                    </IconButton>
                    <IconButton aria-label="share">
                      {project.url_code && (
                        <a href={project.url_code} target="_blank">
                          <Code />
                        </a>
                      )}{' '}
                    </IconButton>
                    <ExpandMoreDetails
                      expand={expandedCardIndex === index}
                      onClick={() => handleExpandClick(index)}
                      aria-expanded={expandedCardIndex === index}
                      aria-label="show more"
                    >
                      <ExpandMore />
                    </ExpandMoreDetails>
                  </CardActions>
                  <Collapse
                    in={expandedCardIndex === index}
                    timeout="auto"
                    unmountOnExit
                  >
                    <CardContent sx={{ bgcolor: '#94c6e8' }}>
                      <Typography paragraph variant="body1">
                        {project.description}
                      </Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Projects;
