import { AnimatedWrapper } from "@/app/animate/animateWrapper";
import { HoverMotion } from "@/app/animate/hoverMotion";
import { Card, CardContent } from "../ui/card";
import { Eye, HeartHandshake, Target } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

export function Sobre() {
  const anoFundacao = 1949;
  const anoAtual = new Date().getFullYear();
  const anosFundacao = anoAtual - anoFundacao;

  return (
    <section className="bg-gray-50" id="sobre">
      <section className="w-full bg-white py-20">
        <AnimatedWrapper>
          <div className="flex justify-center items-center flex-col gap-3 text-center">
            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-6 text-blue-500">
              Fundação Mirim de Araçatuba
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl">
              Há mais de {anosFundacao} anos transformando a vida de jovens
              através da educação profissional e inserção no mercado de
              trabalho.
            </p>
          </div>
        </AnimatedWrapper>
      </section>

      <section>
        <AnimatedWrapper>
          <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="/photo3.jpeg"
                alt="Imagem institucional"
                width={500}
                height={500}
              />
            </div>

            <div className="flex flex-col gap-4 text-center md:text-left">
              <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
                Nossa História
              </span>

              <h3 className="text-2xl md:text-3xl font-bold text-gray-600">
                Raízes Fortes na Comunidade
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Nascemos da visão de educadores que enxergavam na educação o
                verdadeiro motor da transformação social. Ao longo das décadas,
                nossas estruturas cresceram e nossos currículos evoluíram, mas
                nossa essência humanista permanece intacta.
              </p>

              <p className="text-gray-600 leading-relaxed">
                Hoje, o sucesso da Fundação Mirim não é medido apenas por
                números e aprovações, mas pelo legado de cidadania e pelo
                impacto positivo que nossos jovens geram no mundo.
              </p>
            </div>
          </div>
        </AnimatedWrapper>
      </section>

      <section className="bg-white">
        <AnimatedWrapper>
          <div className="max-w-5xl mx-auto px-6 py-20 flex flex-col gap-8">
            <span className="text-sm font-semibold tracking-widest text-blue-600 uppercase text-center">
              Institucional
            </span>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold text-gray-700">
                SCFV – Serviço de Convivência e Fortalecimento de Vínculos
              </h3>
              <p className="text-gray-600 leading-relaxed">
                O SCFV promove convivência em grupo, fortalecimento de vínculos
                familiares e comunitários, além do desenvolvimento de
                potencialidades por meio de atividades socioeducativas,
                formativas e de desenvolvimento humano.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-bold text-gray-700">
                Programa de Aprendizagem Profissional
              </h3>
              <p className="text-gray-600 leading-relaxed">
                O Programa de Aprendizagem Profissional prepara adolescentes e
                jovens para a inserção no mundo do trabalho de forma orientada,
                segura e responsável, unindo formação teórica e prática.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Na Fundação Mirim de Araçatuba, o programa oferece qualificação
                inicial por meio dos cursos de Auxiliar de Escritório em Geral e
                Estoquista, contribuindo para o desenvolvimento de competências
                profissionais, organização, disciplina, postura e vivência em
                ambientes de trabalho.
              </p>
            </div>

            <div className="flex flex-col gap-3 bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <h3 className="text-lg font-bold text-blue-700">Importante</h3>
              <p className="text-gray-600">
                Após a inscrição, a Fundação Mirim de Araçatuba entrará em
                contato com o adolescente e/ou responsável para solicitar os
                documentos necessários para finalização da inscrição e realizar
                o agendamento para o início das atividades.
              </p>
              <p className="text-gray-600 font-medium">
                Atenção: preencha corretamente os dados de contato,
                especialmente telefone e endereço.
              </p>
            </div>

            <div className="text-center mt-6">
              <p className="text-lg font-semibold text-blue-600">
                Faça sua inscrição e venha construir seu futuro com a gente!
              </p>
            </div>
          </div>
        </AnimatedWrapper>

      </section>
    </section>
  );
}
