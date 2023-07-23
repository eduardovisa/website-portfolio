import { ProjectsDataInterface, TagsDataInterface } from './types';

import bitzeroImg from '../assets/projects/bitzero.png';
import todoListImg from '../assets/projects/todo-list.png';

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
  {
    id: 'svelte',
    value: '#ff3c00',
  },
  {
    id: 'js',
    value: '#CFC35C',
  },
];

export const projectsData: ProjectsDataInterface[] = [
  {
    name: 'Bitzero',
    img: bitzeroImg,
    description:
      'Página web responsiva de empresa de software Bitzero hecha con Bootstrap, HTML y CSS. La gama de colores se tomó de la empresa y se realizó con un diseño agradable.',
    url_live: 'https://eduardovisa.github.io/Bitzero.mx/',
    url_code: 'https://github.com/eduardovisa/Bitzero.mx',
    tags: ['bootstrap', 'html', 'css'],
  },
  {
    name: 'Todo-List',
    img: todoListImg,
    description:
      'Aplicación web de gestión de tareas diseñada para ayudar a los usuarios a organizar y llevar un registro de sus tareas diarias, proyectos y objetivos. La aplicación permite a los usuarios crear, finalizar y hacer un seguimiento de su progreso.',
    url_live: 'https://eduardovisa.github.io/frontend-tecnico/',
    url_code: 'https://github.com/eduardovisa/frontend-tecnico',
    tags: ['svelte', 'js', 'html', 'css'],
  },
];
