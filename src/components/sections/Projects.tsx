import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Disaster Management',
    description:
      'A fullstack real-time disaster monitoring platform for reporting incidents and accessing emergency resources.',
    tech: 'React.js, Node.js, Express.js, PostgreSQL, Ant-Design, Redux',
    github: 'https://github.com/YSISLM104926/dmm-frontend',
  },
  {
    title: 'TechRubix',
    description:
      'A fullstack e-commerce platform for tech products with admin dashboard and user authentication.',
    tech: 'Next.js, TailwindCSS, Material-UI, Redux, TypeScript, Express.js, MongoDB',
    github: 'https://github.com/YSISLM104926/TechRubix_TechxEcommerce-V3-Frontend',
  },
  {
    title: 'AirBnb Light',
    description:
      'A web application that shows different places and their information with search functionality.',
    tech: 'Next.js, Redux-Toolkit, TailwindCSS, Chakra-UI, TypeScript, Node.js',
    github: 'https://github.com/YSISLM104926/airbnblight_fr',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto w-full">
        <h2 className="mb-8 text-center text-3xl font-bold">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.title} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-sm">
                  {project.tech}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col">
                <p className="mb-4 flex-1 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <Button variant="outline" asChild className="w-full">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}