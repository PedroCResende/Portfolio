import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Neon Finance Dashboard",
    description: "Uma plataforma de análise financeira em tempo real com visualização de dados complexos e tema dark mode nativo.",
    tags: ["React", "D3.js", "Tailwind", "Firebase"],
    image: "/images/project-tech.jpg",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Cyber Commerce",
    description: "E-commerce headless focado em performance extrema e experiência de compra fluida com animações de micro-interação.",
    tags: ["Next.js", "Stripe", "Zustand", "Framer Motion"],
    image: "/images/project-tech.jpg", // Placeholder, would be different in real scenario
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "AI Task Manager",
    description: "Gerenciador de tarefas inteligente que utiliza IA para priorizar e categorizar atividades automaticamente.",
    tags: ["TypeScript", "OpenAI API", "Node.js", "PostgreSQL"],
    image: "/images/project-tech.jpg", // Placeholder
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-black/20">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <div>
            <h2 className="text-primary font-medium tracking-wider uppercase mb-2">Portfólio</h2>
            <h3 className="font-display font-bold text-4xl md:text-5xl text-white">
              Projetos Selecionados
            </h3>
          </div>
          <Button variant="link" className="text-white hover:text-primary p-0 h-auto text-lg group">
            Ver todos os projetos 
            <ExternalLink className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group relative rounded-2xl overflow-hidden glass-card animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image Area */}
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Area */}
              <div className="p-6 relative z-20 bg-gradient-to-b from-transparent to-black/80">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2 py-1 rounded bg-white/5 text-muted-foreground border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" /> Code
                  </a>
                  <a 
                    href={project.link} 
                    className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
