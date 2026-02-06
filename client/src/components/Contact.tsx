import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container max-w-4xl">
        <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 text-center mb-12">
            <h2 className="text-primary font-medium tracking-wider uppercase mb-2">Contato</h2>
            <h3 className="font-display font-bold text-4xl md:text-5xl text-white mb-6">
              Vamos trabalhar juntos?
            </h3>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Tem um projeto em mente ou quer apenas trocar uma ideia sobre tecnologia? 
              Mande uma mensagem!
            </p>
          </div>

          <form className="relative z-10 space-y-6 max-w-xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-white">Nome</label>
                <Input 
                  id="name" 
                  placeholder="Seu nome" 
                  className="bg-black/40 border-white/10 focus:border-primary/50 text-white placeholder:text-white/20 h-12"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-white">Email</label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="seu@email.com" 
                  className="bg-black/40 border-white/10 focus:border-primary/50 text-white placeholder:text-white/20 h-12"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-white">Mensagem</label>
              <Textarea 
                id="message" 
                placeholder="Conte sobre seu projeto..." 
                className="bg-black/40 border-white/10 focus:border-primary/50 text-white placeholder:text-white/20 min-h-[150px] resize-none"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 bg-primary text-black hover:bg-primary/90 font-bold text-lg shadow-[0_0_20px_-5px_var(--color-primary)] hover:shadow-[0_0_30px_-5px_var(--color-primary)] transition-all duration-300"
            >
              Enviar Mensagem <Send className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
