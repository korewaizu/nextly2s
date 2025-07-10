import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Beneficios da Consultoria"
        title=" Por que você deveria fazer uma consultoria conosco?"
      >
Você sente que sua empresa poderia ser muito mais eficiente, mas esbarra em processos manuais, retrabalho e sistemas que não se comunicam entre si?
A verdade é que, sem um sistema de gestão bem implementado e processos estruturados, seu negócio perde tempo, dinheiro e competitividade.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle preTitle="FAQ" title="Perguntas Frequentes">

      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
