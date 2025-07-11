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
        title="Por que fazer uma consultoria?"
      >
Sua empresa poderia ser mais eficiente, mas enfrenta retrabalho, processos manuais e sistemas desconectados? 
Sem gestão integrada, o tempo e o dinheiro escorrem — e a competitividade também.
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
