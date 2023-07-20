import { Button, Grid, Typography } from '@mui/material';

import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { useState } from 'react';

const experiencias = [
  {
    cargo: 'Desarrollador Web Jr',
    lugar: 'Premed',
    fecha: 'Diciembre 2022 - Abril 2023',
    actividades: [
      'Desarrollo de plataforma desde cero usando React.js',
      'Creacion de componentes reutilizables con React.js',
      'Mantenimiento de plataforma en WordPress',
      'Soporte técnico de las plataformas para alumnos y personal',
    ],
  },
  {
    cargo: 'Desarrollador De Aplicaciones Web Jr',
    lugar: 'ECOSUR',
    fecha: 'Septiembre 2022 - Diciembre 2022',
    actividades: [
      'Creacion de componentes reutilizables con React.js',
      'Consultas y mutaciones con GraphQL y React Query',
      'Documentación de componentes con StoryBook',
      'Desarrollo de nuevos módulos para plataforma en Next.js',
    ],
  },
  {
    cargo: 'Desarrollador Front-End Jr',
    lugar: 'Ámbar Rojo Studios',
    fecha: 'Agosto 2022 - Diciembre 2022',
    actividades: [
      'Creacion de páginas web usando Bootstrap',
      'Mantenimiento de páginas web de clientes externos',
      'Desarrollo de nuevos módulos para páginas ya existentes',
      'Documentación de código de módulos creados',
    ],
  },
  {
    cargo: 'Desarrollador Full-Stack Jr',
    lugar: 'Generation México',
    fecha: 'Abril 2022 - Julio 2022',
    actividades: [
      'Creacion de componentes reutilizables con React.js',
      'Prueba y documentación de dependencias para su posterior uso',
      'Consultas y mutaciones con GraphQL',
      'Documentación de componentes con StoryBook',
    ],
  },
];

const AboutMe = () => {
  const [show, setShow] = useState<boolean>(false);
  const dataForDisplay = show ? experiencias : experiencias.slice(0, 2);

  return (
    <section className="about-section #">
      <div className="about-info">
        <Grid className="container-about" container>
          <Grid item xs={12} sm={12} lg={8}>
            <h2>Experiencia Relevante</h2>
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              {dataForDisplay.map((experiencia, index) => {
                return (
                  <TimelineItem key={`timeLine-Item-${index}`}>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Grid
                        container
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1vh',
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ fontStyle: 'italic', color: '#3498db' }}
                        >
                          {experiencia.cargo}
                        </Typography>
                        <Typography variant="body1">
                          - {experiencia.lugar}
                        </Typography>
                      </Grid>
                      <Typography
                        variant="body2"
                        sx={{ paddingBottom: '10px', color: '#918d8d' }}
                      >
                        {experiencia.fecha}
                      </Typography>
                      {experiencia.actividades.map((actividad, index) => {
                        return (
                          <Typography
                            key={`experiencia-actividad-${index}`}
                            variant="body2"
                          >
                            - {actividad}
                          </Typography>
                        );
                      })}
                    </TimelineContent>
                  </TimelineItem>
                );
              })}
            </Timeline>
            <Button
              size="small"
              onClick={() => setShow(true)}
              sx={{ display: show ? 'none' : 'block' }}
            >
              <p>Ver más</p>
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} lg={4}>
            derecha
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default AboutMe;
