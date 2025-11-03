import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const projects = [
  {
    title: 'Project One',
    description: 'A modern web application built with React and TypeScript. Features real-time updates and a clean user interface.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/yourusername/project-one',
    demo: 'https://project-one.demo.com',
  },
  {
    title: 'Project Two',
    description: 'Full-stack application with advanced data visualization and analytics capabilities.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'D3.js'],
    github: 'https://github.com/yourusername/project-two',
    demo: 'https://project-two.demo.com',
  },
  {
    title: 'Project Three',
    description: 'Mobile-first responsive design system and component library used across multiple projects.',
    technologies: ['React', 'Storybook', 'CSS-in-JS'],
    github: 'https://github.com/yourusername/project-three',
    demo: 'https://project-three.demo.com',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="mb-2">Projects</h2>
          <p className="text-muted-foreground">Some things I've built</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
