import { Code2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-8 h-8 rounded bg-primary/10 border border-primary/20">
            <Code2 className="w-5 h-5 text-primary" />
          </div>
          <span className="font-display font-bold text-lg text-white">
            Dev<span className="text-primary">.Pro</span>
          </span>
        </div>
        
       
        
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
