import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Sobre", href: "#about" },
    { name: "Tecnologias", href: "#tech" },
    { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-primary/20 py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="flex items-center gap-2 group"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 group-hover:border-primary/80 group-hover:shadow-[0_0_15px_var(--color-primary)] transition-all duration-300">
            <Code2 className="w-6 h-6 text-primary" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-primary transition-colors">
            Dev<span className="text-primary">.Pro</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* Botão Baixar CV */}
          <a
            href="/Curriculo-PedroResende.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary hover:text-black transition-all duration-300 hover:shadow-[0_0_20px_var(--color-primary)]"
            >
              Baixar CV
            </Button>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden",
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.href)}
            className="text-2xl font-display font-bold text-white hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        ))}

        {/* Botão Baixar CV (Mobile) */}
        <a
          href="/Curriculo-PedroResende.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="mt-4 bg-primary text-black hover:bg-primary/90 shadow-[0_0_20px_var(--color-primary)]"
          >
            Baixar CV
          </Button>
        </a>
      </div>
    </nav>
  );
}
