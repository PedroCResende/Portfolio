import { Badge } from "@/components/ui/badge";

export default function About() {
  const skills = [
    "JavaScript (ES6+)", "TypeScript", "React", "Node.js", 
    "Tailwind CSS", "Next.js", "PostgreSQL", "Git"
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Column */}
          <div className="relative group animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-blue-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
              <img 
                src="/images/profile-abstract.jpg" 
                alt="Profile Abstract" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Floating Tech Cards */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Experiência</p>
                    <p className="text-xl font-bold text-white">5+ Anos</p>
                  </div>
                  <div className="h-8 w-[1px] bg-white/10" />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Projetos</p>
                    <p className="text-xl font-bold text-white">40+ Entregues</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-8 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
            <div>
              <h2 className="text-primary font-medium tracking-wider uppercase mb-2">Sobre Mim</h2>
              <h3 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
                Criando o futuro através de <span className="text-primary">código limpo</span> e design intuitivo.
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Sou um desenvolvedor apaixonado por tecnologia e inovação. Minha jornada começou com a curiosidade de entender como as coisas funcionam na web, e hoje dedico minha carreira a construir aplicações que não apenas funcionam, mas encantam.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                Foco em performance, acessibilidade e uma experiência de usuário excepcional. Acredito que o código é uma forma de arte e cada projeto é uma oportunidade de criar algo único.
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Tech Stack Principal</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="outline" 
                    className="border-primary/20 text-primary hover:bg-primary/10 transition-colors py-2 px-4 text-sm"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
