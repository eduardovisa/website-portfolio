import { ProjectsDataInterface, TagsDataInterface } from './types';

import bitzeroImg from '../assets/projects/bitzero.png';

export const tagsData: TagsDataInterface[] = [
  {
    id: 'html',
    value: '#e34c26',
  },
  {
    id: 'bootstrap',
    value: '#0081ff',
  },
  {
    id: 'css',
    value: '#264de4',
  },
];

export const projectsData: ProjectsDataInterface[] = [
  {
    name: 'Bitzero',
    img: bitzeroImg,
    description:
      'Página web responsiva de empresa de software Bitzero hecha con Bootstrap, HTML y CSS. LA gama de colores se tomó de la empresa y se realizó con un diseño agradable.',
    url_live: 'https://eduardovisa.github.io/Bitzero.mx/',
    url_code: 'https://github.com/eduardovisa/Bitzero.mx',
    tags: ['bootstrap', 'html', 'css'],
  },
];
