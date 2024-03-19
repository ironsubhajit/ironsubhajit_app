import { Project } from '../interfaces/project';

const thumbnail_links = {
  AiProjects: '/assets/icons/AiLogoForProjects.png',
  CodeProjects: '/assets/icons/CodeLogoForProjects.png',
  MobProjects: '/assets/icons/MobLogoForProjects.png',
  WebProjects: '/assets/icons/WebLogoForProjects.png',
};

const webContent =
  'An online platform built using the MEAN stack to manage employee data efficiently.\nAllows HR managers and administrators to add, update, and delete employee records.\nProvides features such as filtering and searching to easily find employee information.\nIncludes authentication and authorization mechanisms to ensure secure access to sensitive employee data.\nUtilizes Angular for the frontend user interface, Node.js and Express.js for the backend API, and MongoDB for storing employee data.';

export const mockProjectList: Project[] = [
  {
    _id: '1',
    title: 'Employee Management Portal',
    date_modified: '01-02-23',
    content: webContent,
    live_link: '',
    repo_link: '',
    thumbnali_link: thumbnail_links?.WebProjects,
  },
  {
    _id: '2',
    title: 'E-Commerce App',
    date_modified: '12-31-23',
    content: webContent,
    live_link: '',
    repo_link: '',
    thumbnali_link: thumbnail_links?.MobProjects,
  },
  {
    _id: '3',
    title: 'Smart Work App',
    date_modified: '01-01-24',
    content: webContent,
    live_link: '',
    repo_link: '',
    thumbnali_link: thumbnail_links?.AiProjects,
  },
  {
    _id: '4',
    title: 'Web Scrapping',
    date_modified: '01-01-24',
    content: webContent,
    live_link: '',
    repo_link: '',
    thumbnali_link: thumbnail_links?.CodeProjects,
  },
  {
    _id: '5',
    title: 'Business Case Study',
    date_modified: '01-01-24',
    content: webContent,
    live_link: '',
    repo_link: '',
    thumbnali_link: thumbnail_links?.AiProjects,
  },
];
