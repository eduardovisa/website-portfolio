export interface ProjectsDataInterface {
  name: string;
  img: string;
  tags: Array<string>;
  description: string;
  url_live?: string;
  url_code?: string;
}

export interface TagsDataInterface {
  id: string;
  value: string;
}
