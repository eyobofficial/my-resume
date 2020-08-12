import { IProjectPhoto } from './project-photo.interface';

export interface IProject {
  slug: string;
  name: string;
  summary: string;
  description: string;
  technologies: string[];
  type: string;
  private: boolean;
  date: Date;
  featured: boolean;
  project_url: string;
  repository: string;
  thumbnail: string;
  video: string;
  photos: IProjectPhoto[],
  facebook: string;
  twitter: string;
  linkedIn: string;
}
