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
    title: 'Image Finder App',
    description: 'Image Finder is a full-stack web app that lets users search for high-quality photos using the Unsplash API, log in securely with Auth.js, and save or delete their favorite images. Built with Next.js 14 App Router, Tailwind CSS, TypeScript, Drizzle ORM, and Neon PostgreSQL, it combines modern UI design with solid backend functionality',
    image: 'https://images.pexels.com/photos/7190953/pexels-photo-7190953.jpeg',
    technologies: ['PostgreSQL', 'Tailwind CSS', 'Next.js','Auth.js'],
    githubUrl: 'https://github.com/amish-kumar-07/Image-Finder',
    liveUrl: 'https://image-finder-ecru-phi.vercel.app',
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
