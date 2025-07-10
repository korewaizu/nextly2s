import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  Calculator,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.svg";
import benefitTwoImg from "../../public/img/benefit-two.svg";

const benefitOne = {
  title: "Mais do que uma consultoria. Uma parceria de verdade.",
  desc: "Diversas empresas confiam em nossa consultoria para conduzir transformações reais com tecnologia. Seja para começar do zero, reorganizar sua operação ou dar um salto em produtividade, estamos aqui para acelerar o seu próximo passo.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Implantação de Sistemas",
      desc: "Acompanhamos todo o processo de implementação de sistemas ERP, CRM e outras soluções de gestão — do planejamento à entrega final.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Otimização de Processos Empresariais",
      desc: "Mapeamos, redesenhamos e automatizamos processos para tornar sua operação mais ágil, econômica e eficaz.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Consultoria de Sistemas",
      desc: "Identificamos oportunidades de melhoria no uso dos seus sistemas atuais e ajudamos na escolha e adaptação das melhores ferramentas para o seu negócio.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Fazendo a diferença no seu negócio.",
  desc: "Entregamos serviços que sua empresa necessita com qualidade, confiança e segurança.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Consultoria tributária e fiscal",
      desc: "Prestamos serviços de consultoria tributária para seu negócio.",
      icon: <Calculator />,
    },
    {
      title: "Treinamentos personalizados e suporte técnico",
      desc: "A busca por atender às necessidades dos nossos clientes nos faz inovar, sempre em conexão com as tendências.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Atendimento a empresas de todos os portes e segmentos",
      desc: "Nextly comes with a zero-config light & dark mode.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
