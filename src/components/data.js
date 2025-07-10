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
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
