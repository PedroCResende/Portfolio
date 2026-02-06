import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // animações futuramente
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="/images/hero-bg.jpg"
          alt="Abstract Background"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-20" />
      </div>

      <div className="container relative z-30 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Disponível para novos projetos
        </div>

        <h1
          ref={titleRef}
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-white mb-6 animate-fade-in-up animation-delay-200"
        >
          Desenvolvedor <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary bg-300% animate-gradient">
            Full Stack
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in-up animation-delay-400">
          Transformo ideias complexas em experiências digitais fluidas e
          performáticas. Especialista em criar soluções web modernas com foco em
          design e usabilidade.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up animation-delay-600">
          <Button
            size="lg"
            className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8 h-14 shadow-[0_0_30px_-5px_var(--color-primary)] hover:shadow-[0_0_50px_-10px_var(--color-primary)] transition-all duration-300"
          >
            Ver Projetos <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-14 px-8 border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm"
          >
            Entrar em Contato
          </Button>
        </div>

        {/* Social Icons */}
        <div className="mt-16 flex items-center gap-6 animate-fade-in-up animation-delay-800">
          {/* GitHub */}
          <a
            href="https://github.com/PedroCResende"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/pedro-carvalho-resende-6201072b7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transform duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>

         
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
