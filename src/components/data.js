import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.svg";
import benefitTwoImg from "../../public/img/benefit-two.svg";

const benefitOne = {
  title: "Mais do que uma consultoria. Uma parceria de verdade.",
  desc: "Ajudamos empresas a iniciarem, reorganizarem ou escalarem suas operações com tecnologia aplicada e consultoria estratégica.",
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
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Treinamentos personalizados e suporte técnico",
      desc: "Oferecemos treinamentos personalizados e suporte técnico, sempre alinhados às necessidades dos nossos clientes.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Inovação no atendimento, para empresas de todos os portes e segmentos",
      desc: "Soluções adaptadas à realidade de cada negócio.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
