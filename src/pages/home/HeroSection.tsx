import { useModal } from "../../hooks/useModal";
import heroSection from "/hero-section.png";
import { Button } from "flowbite-react";

const HeroSection = () => {
  const { setOpenModal } = useModal();
  return (
    <div className="container mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-30 items-center mb-10">
        <h1 className="font-poppins text-3xl">
          PDV simples para lojas — troque caderno e planilha por um{" "}
          <span className="text-blue-700 inline-block whitespace-nowrap ">
            sistema fácil
          </span>
        </h1>
        <div>
          <h2 className="text-xl text-gray-700 ">
            Registre vendas, controle caixa e gere relatórios em minutos.
          </h2>
          <p className="text-xl mb-4 text-gray-700 ">
            Sem cartão. Faça um teste gratuito agora mesmo.
          </p>
          <Button
            onClick={() => setOpenModal(true)}
            className="uppercase font-bold cursor-pointer text-xl py-8 px-10 shadow-sm bg-linear-to-r/decreasing from-indigo-500 to-teal-400"
          >
            Peça um teste
          </Button>
        </div>
      </div>
      <div className="rounded-2xl bg-gray-200 relative overflow-auto">
        <div className="absolute w-full h-full bg-circle-pattern z-0"></div>
        <img
          className="bg-transparent relative z-10"
          src={heroSection}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
