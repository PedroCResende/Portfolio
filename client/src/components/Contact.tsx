import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      emailjs.init("Psj6o2svcK5SzJ4Ce");

      await emailjs.send(
        "service_1tgwd9j",
        "template_tav29p8",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );

      alert("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Erro ao enviar mensagem. Tente novamente.");
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container max-w-4xl">
        <div className="glass-panel rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 text-center mb-12">
            <h2 className="text-primary font-medium uppercase mb-2">Contato</h2>
            <h3 className="font-bold text-4xl text-white mb-6">
              Vamos trabalhar juntos?
            </h3>
          </div>

          <form
            onSubmit={handleSubmit}
            className="relative z-10 space-y-6 max-w-xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome"
              />

              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
              />
            </div>

            <Textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Conte sobre seu projeto..."
            />

            <Button type="submit" className="w-full h-14">
              Enviar Mensagem <Send className="ml-2 w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
