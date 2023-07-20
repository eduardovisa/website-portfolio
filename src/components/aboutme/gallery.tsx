import { ImageList, ImageListItem } from '@mui/material';

const TechList = () => {
  return (
    <ImageList variant="masonry" cols={4} gap={20}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 `}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const itemData = [
  {
    img: 'https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png',
    title: 'React',
  },
  {
    img: 'https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png',
    title: 'Css',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png',
    title: 'Html',
  },
  {
    img: 'https://mui.com/static/logo.png',
    title: 'Mui',
  },
  {
    img: 'https://avatars.githubusercontent.com/u/22632046?s=280&v=4',
    title: 'Storybook',
  },
  {
    img: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript-def.png',
    title: 'Typescript',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
    title: 'Javascript',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png',
    title: 'Bootstrap',
  },
  {
    img: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
    title: 'Git',
  },
  {
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
    title: 'Github',
  },
  {
    img: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png',
    title: 'Tailwind',
  },
  {
    img: 'https://seeklogo.com/images/V/vite-logo-BFD4283991-seeklogo.com.png',
    title: 'Vite',
  },
];

export default TechList;
