"use client"
import { MessageSquareTextIcon, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import Image from "next/image";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Contatos() {
  const phone = "5518992033059";
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent("Olá, gostaria de tirar algumas dúvidas!")}`;

  return (
    <section className="min-h-screen bg-gray-200" id="contato">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Entre em contato conosco</h1>
          <p className="text-lg max-w-2xl text-gray-700">
            Estamos prontos para tirar suas dúvidas, ouvir sugestões e falar
            sobre o futuro da jornada educacional. Escolha o canal de sua preferência.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
       
          <Card className="bg-gray-50 flex flex-col justify-between">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <MessageSquareTextIcon className="text-blue-500 h-6 w-6" />
                <CardTitle className="text-xl">Fale Agora</CardTitle>
              </div>
              <CardDescription>
                Inicie uma conversa em tempo real com nossa equipe.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                onClick={() => window.open(whatsappUrl, "_blank")}
                className="w-full bg-blue-500 hover:bg-blue-600 cursor-pointer"
              >
                Abrir WhatsApp
              </Button>
            </CardContent>
          </Card>

 
          <Card className="bg-gray-50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <Phone className="text-blue-500 h-6 w-6" />
                <CardTitle className="text-xl">Telefone</CardTitle>
              </div>
              <CardDescription className="text-lg font-semibold text-foreground">
                +55 (18) 99203-3059
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Atendimento de segunda a sexta, em horário comercial.
              </p>
            </CardContent>
          </Card>

     
          <Card className="bg-gray-50">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="text-blue-500 h-6 w-6" />
                <CardTitle className="text-xl">Localização</CardTitle>
              </div>
              <CardDescription className="font-medium text-foreground">
                R. Tibiriçá, 186 - Vila Industrial
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Araçatuba - SP, 16072-005
              </p>
            </CardContent>
          </Card>
        </div>

        
        <div className="mt-10 relative w-full h-[450px] rounded-xl overflow-hidden shadow-md">
          <iframe
            title="Mapa Localização"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.464198424647!2d-50.443046!3d-21.13393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949642593922f25b%3A0x6b043328e19c08d1!2sR.%20Tibiri%C3%A7%C3%A1%2C%20186%20-%20Vila%20Industrial%2C%20Ara%C3%A7atuba%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr"
            className="w-full h-full border-0"
            loading="lazy"
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/95 rounded-xl shadow-lg px-8 py-4 flex items-center justify-between">
            <span className="font-bold text-gray-800">Siga nossas redes:</span>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/fundacaomirimaracatuba/" target="_blank" rel="noreferrer">
                <Instagram/>
              </a>
              <a href="https://www.facebook.com/fundacaomirimdearacatubaoficial/" target="_blank" rel="noreferrer">
                <Facebook/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}