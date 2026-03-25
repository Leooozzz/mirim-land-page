import Link from "next/link";
import { AnimatedWrapper } from "./animate/animateWrapper";
import { HoverMotion } from "./animate/hoverMotion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Building2,
  Eye,
  GraduationCap,
  HeartHandshake,
  MedalIcon,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import { Sobre } from "@/components/layout/Sobre";
import { Contatos } from "@/components/layout/Contatos";
const anoFundacao = 1949;
const anoAtual = new Date().getFullYear();
const anosFundacao = anoAtual - anoFundacao;

const stats = [
  { value: anosFundacao, suffix: "+", label: "Anos transformando vidas" },
  { value: 5000, suffix: "+", label: "Jovens capacitados" },
  { value: 50, suffix: "+", label: "Empresas parceiras" },
  { value: 100, suffix: "%", label: "Totalmente gratuito" },
];

const diferenciais = [
  {
    icon: <GraduationCap size={24} />,
    title: "Cursos Profissionalizantes",
    text: "Formação gratuita para jovens de 14 a 18 anos, preparando-os para o mercado de trabalho.",
  },
  {
    icon: <Building2 size={24} />,
    title: "Programa Jovem Aprendiz",
    text: "Inserção de adolescentes no mercado de trabalho com acompanhamento profissional.",
  },
  {
    icon: <Users size={24} />,
    title: "Conexão Empresa-Jovem",
    text: "Integração entre jovens talentos e empresas que buscam novos profissionais.",
  },
  {
    icon: <MedalIcon size={24} />,
    title: "Certificação Reconhecida",
    text: "Certificados que agregam valor ao currículo e ampliam oportunidades.",
  },
];
export default function Page() {
  return (
    <main className="bg-gray-50">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/photo2.jpeg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r " />
        </div>

        <AnimatedWrapper className="relative max-w-6xl mx-auto px-6 py-24 text-white">
          <div className="inline-flex items-center gap-2 bg-blue-600 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <Users size={18} />
            <span className="text-sm font-medium">
              +{anosFundacao} anos impactando Araçatuba
            </span>
          </div>

          <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-4 max-w-4xl">
            Bem-vindo à Fundação Mirim de Araçatuba
          </h1>

          <h2 className="text-xl sm:text-2xl text-blue-600 font-semibold mb-6">
            Seu futuro começa aqui.
          </h2>

          <p className="text-lg text-gray-100 max-w-2xl mb-4">
            A Fundação Mirim de Araçatuba é um espaço de oportunidades,
            aprendizado e desenvolvimento para adolescentes que desejam se
            preparar para o futuro.
          </p>

          <p className="text-md text-gray-200 max-w-2xl mb-8">
            Aqui, você encontra ações que fortalecem a convivência, a autonomia,
            a responsabilidade, a cidadania e a preparação para o mundo do
            trabalho.
          </p>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 max-w-2xl">
            <h3 className="font-semibold text-white mb-2">
              Educação e Preparação para o Mercado de Trabalho
            </h3>
            <p className="text-sm text-gray-200">
              Curso voltado ao desenvolvimento de habilidades importantes para a
              vida pessoal e profissional, com temas como comportamento,
              responsabilidade, comunicação, trabalho em equipe, projeto de vida
              e preparação para futuras oportunidades.
            </p>
          </div>
        </AnimatedWrapper>
      </section>

      <section className="relative -mt-16 z-10 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <AnimatedWrapper key={index}>
              <div className="bg-white/70 backdrop-blur-md p-6 text-center rounded-xl shadow-md hover:-translate-y-2 transition">
                <div className="font-extrabold text-3xl text-blue-600">
                  {stat.value.toLocaleString("pt-BR")}
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
              </div>
            </AnimatedWrapper>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedWrapper className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Transformando jovens em profissionais
            </h2>
          </AnimatedWrapper>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {diferenciais.map((item, index) => (
              <AnimatedWrapper key={index}>
                <HoverMotion>
                  <Card className="group rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <CardContent className="p-8 flex flex-col gap-4 items-start text-left">
                      <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        {item.icon}
                      </div>

                      <h3 className="font-semibold text-xl group-hover:text-blue-600 transition">
                        {item.title}
                      </h3>

                      <p className="text-sm text-gray-600">{item.text}</p>
                    </CardContent>
                  </Card>
                </HoverMotion>
              </AnimatedWrapper>
            ))}
          </div>
        </div>
      </section>

      <Sobre />
      <Contatos />
    </main>
  );
}
