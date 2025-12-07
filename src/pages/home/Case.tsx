import { Button, Card } from "flowbite-react";
import { BiCheck, BiCoffee, BiStore } from "react-icons/bi";
import { PiDress } from "react-icons/pi";

const Case = () => {
  return (
    <section className="container ">
      <h2 className="text-5xl text-center">
        Encontre a solução perfeita para o{" "}
        <span className="text-blue-600">seu tipo de negócio</span>
      </h2>
      <p className="text-lg text-center text-gray-600 mt-4 mb-10 max-w-2xl mx-auto">
        Não importa o seu segmento, nossa plataforma se adapta para simplificar
        sua gestão e impulsionar seus resultados.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <Card>
          <div className="relative w-fit mx-auto mb-4">
            <PiDress className="h-20 w-20 text-pink-500 bg-pink-50 p-4 rounded-full" />
          </div>

          <p className="text-center font-bold text-gray-900 mb-3">
            Lojas de roupa e <br /> boutiques
          </p>
          <p className="text-gray-500 text-center leading-relaxed">
            Agilidade e controle por vendedor
          </p>
        </Card>
        <Card>
          <div className="relative w-fit mx-auto mb-4">
            <BiStore className="h-20 w-20 text-orange-500 bg-orange-50 p-4 rounded-full" />
          </div>

          <p className="text-center font-bold text-gray-900 mb-3">
            Mercados e <br /> mercearias
          </p>
          <p className="text-gray-500 text-center leading-relaxed">
            Fechamento de caixa instantâneo
          </p>
        </Card>
        <Card>
          <div className="relative w-fit mx-auto mb-4">
            <BiCoffee className="h-20 w-20 text-blue-500 bg-blue-50 p-4 rounded-full" />
          </div>

          <p className="text-center font-bold text-gray-900 mb-3">
            Cafés e <br /> lanchonetes
          </p>
          <p className="text-gray-500 text-center leading-relaxed">
            Vendas rápidas, sem complicação
          </p>
        </Card>
      </div>
      <div className="bg-linear-to-t overflow-hidden relative mb-52 bg-blue-900 text-white px-6 py-12 md:px-16 md:py-20 rounded-3xl mx-auto">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[650px] h-[650px]">
            <div className="absolute rounded-full  inset-0 bg-blue-400 blur-md animate-pulse "></div>
            <div className="absolute rounded-full  inset-0 bg-blue-500 blur-sm animate-pulse"></div>
            <div className="absolute rounded-full  inset-0 bg-blue-700 blur-xs animate-pulse"></div>
            <div className="absolute rounded-full  inset-0 bg-radial-[at_50%_75%] from-sky-900 via-blue-900 to-indigo-900 to-90%/60 backdrop-blur-2xl"></div>
          </div>
        </div>
        <h3 className="text-5xl text-center mb-5 relative z-10">
          Transforme a gestão da sua loja hoje mesmo
        </h3>
        <p className="text-center mb-5 relative z-10">
          Simplifique suas vendas e controle seu caixa em minutos.
        </p>
        <Button
          pill
          color={"alternative"}
          className="text-blue-600! cursor-pointer mx-auto mb-10 bg-linear-to-bl uppercase text-2xl py-7 px-10 border-blue-500 "
        >
          Começar Teste Grátis
        </Button>
        <div className="flex w-fit gap-3 mx-auto relative z-10">
          <p className="flex gap-3 items-center">
            <BiCheck className="border-3 bg-white border-white text-blue-500 stroke-1 rounded-full w-5 h-5" />
            Sem cartão de crédito
          </p>
          <p className="flex gap-3 items-center ">
            <BiCheck className="border-3 bg-white border-white text-blue-500 stroke-1 rounded-full w-5 h-5" />
            Cancele quando quiser
          </p>
        </div>
      </div>
    </section>
  );
};

export default Case;
