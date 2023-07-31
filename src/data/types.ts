export interface FieldsData {
  title: string;
  urlDemo: string;
  urlCode: string;
  image: DataImage;
  tags: Tags;
  description: string;
}

export interface DataImage {
  metadata: Metadata;
  sys: ImageSys;
  fields: Fields;
}

export interface Fields {
  title: string;
  description: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Details {
  size: number;
  image: DetailsImage;
}

export interface DetailsImage {
  width: number;
  height: number;
}

export interface Metadata {
  tags: string[];
}

export interface ImageSys {
  space: Environment;
  id: string;
  type: string;
  createdAt: string;
  updatedAt: string;
  environment: Environment;
  revision: number;
  locale: string;
}

export interface Environment {
  sys: EnvironmentSys;
}

export interface EnvironmentSys {
  id: string;
  type: string;
  linkType: string;
}

export interface Tags {
  sys: TagsSys;
  items: Item[];
}

export interface Item {
  fields: Metadata;
}

export interface TagsSys {
  type: string;
}

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
