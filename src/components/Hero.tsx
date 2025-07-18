import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.svg";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap mb-5 lg:gap-10 lg:flex-nowrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-3xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Consultoria que te traz resultados
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Unimos tecnologia, eficiência e expertise tributária para impulsionar seu crescimento com ERP Teorema, processos otimizados e suporte completo.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="/"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-blue-700 rounded-md ">
                Falar com um Especialista
              </a>

            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="500"
              height="500"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              
            />
          </div>
        </div>
      </Container>
    </>
  );
}