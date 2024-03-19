import { Project } from '../interfaces/project';

const thumbnail_links = {
  'AiProjects': '/assets/icons/AiLogoForProjects.png',
  'CodeProjects': '/assets/icons/CodeLogoForProjects.png',
  'MobProjects': '/assets/icons/MobLogoForProjects.png',
  'WebProjects': '/assets/icons/WebLogoForProjects.png',
}

export const mockProjectList: Project[] = [
  {
    _id: '1',
    title: 'P01',
    date_modified: '01-02-23',
    content: 'demo content',
    live_link: '',
    repo_link: '',
    thumbnali_link: thumbnail_links?.WebProjects,
  },
  {
    _id: '2',
    title: 'P02',
    date_modified: '12-31-23',
    content: 'demo content 2',
    live_link: '',
    repo_link: '',
    thumbnali_link: thumbnail_links?.MobProjects,
  },
  {
    _id: '3',
    title: 'P03',
    date_modified: '01-01-24',
    content: 'demo content 3',
    live_link: '',
    repo_link: '',
    thumbnali_link: thumbnail_links?.AiProjects,
  },
  {
    _id: '4',
    title: 'P04',
    date_modified: '01-01-24',
    content: 'demo content 4',
    live_link: '',
    repo_link: '',
    thumbnali_link: thumbnail_links?.CodeProjects,
  },
  {
    _id: '5',
    title: 'P05',
    date_modified: '01-01-24',
    content: 'demo content 5',
    live_link: '',
    repo_link: '',
    thumbnali_link: thumbnail_links?.AiProjects,
  },
];
