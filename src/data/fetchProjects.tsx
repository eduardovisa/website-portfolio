import { createClient } from 'contentful';
import { useState, useEffect } from 'react';
import { FieldsData, Item } from './types';

const client = createClient({
  space: 'xu9i935s8wkm',
  environment: 'master',
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  accessToken: import.meta.env.VITE_API_KEY,
});

interface Projects {
  id: number;
  title: string;
  description: string;
  urlCode: string;
  urlDemo: string;
  img: string;
  imgName: string;
  tags: Item[];
}

export const useFetchProjects = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<Projects[]>([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({
        content_type: 'projectsPortfolio',
      });

      const projects = response.items.map((item) => {
        const data: FieldsData = item.fields as unknown as FieldsData;

        const id = parseInt(item.sys.id);
        const title = data.title;
        const description = data.description;
        const urlCode = data.urlCode;
        const urlDemo = data.urlDemo;
        const img = data.image.fields.file.url;
        const imgName = data.image.fields.file.fileName;
        const tags = data.tags.items;

        return {
          id,
          title,
          description,
          urlCode,
          urlDemo,
          img,
          imgName,
          tags,
        };
      });

      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    void getData();
  }, []);

  return { loading, projects };
};
