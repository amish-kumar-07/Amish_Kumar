import { Project } from '../types/project';

export const projectsData: Project[] = [
  {
    id: 1,
    title: 'Sacramental Learning',
    description: 'A platform for spiritual learning and personal growth, offering a collection of educational resources and interactive content.',
    image: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Node.js'],
    githubUrl: 'https://github.com/amish-kumar-07/New_Mini_Project',
    liveUrl: 'https://sacramental-learning.netlify.app/',
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description: 'A clean, modern portfolio website designed and developed for a photographer to showcase their work.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    id: 3,
    title: 'Full Stack Product Management Web App',
    description: 'A full-stack product management web application built using Next.js for the frontend and NestJS with MongoDB or Spring Boot with PostgreSQL for the backend. The app includes JWT-based user authentication, product CRUD functionality, and filtering, sorting, and search features.',
    image: 'https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['Next.js', 'NestJS','PostgreSQL', 'JWT', 'Tailwind CSS'],
    githubUrl: 'https://github.com/amish-kumar-07/Product-Management-Web-App',
    liveUrl: 'https://product-management-web-app-l3qr.vercel.app/',
  },
];