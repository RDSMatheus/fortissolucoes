import { Card } from "flowbite-react";
import { BiCheck } from "react-icons/bi";
import { BsRocketTakeoff } from "react-icons/bs";

const OldVsNew = () => {
  return (
    <div className="container max-w-[900px] mb-20">
      <h1 className="font-poppins text-4xl text-center mb-15">
        Por que trocar o caderno e a planilha agora
      </h1>
      <div className="grid md:grid-cols-2 justify-items-center">
        <Card className="max-w-sm bg-red-500 text-white mb-5">
          <h2 className="px-4 py-2 uppercase font-semibold bg-red-700 w-fit rounded-4xl mx-auto">
            O jeito antigo{" "}
          </h2>
          <h3 className="font-bold flex gap-2 text-2xl items-center">
            <span className="bg-white rounded-full w-6 h-6 grid place-items-center ">
              <BiCheck className="w-5 h-5 text-red-500" />
            </span>
            Planilhas e Cadernos
          </h3>
          <ul className="list-disc ml-6">
            <li>Anotações à mão → fácil de perder e confundir.</li>
            <li>Cálculo manual do caixa → demora e erro humano.</li>
            <li>Relatórios inexistentes — decisão no achismo.</li>
          </ul>
          <div className="grid place-content-center">
            <BsRocketTakeoff className="w-20 rotate-90 h-20" />
          </div>
        </Card>
        <Card className="max-w-sm bg-blue-500 text-white mb-5">
          <h2 className="px-4 py-2 uppercase font-semibold bg-blue-700 w-fit rounded-4xl mx-auto">
            O jeito novo
          </h2>
          <h3 className="font-bold flex gap-2 text-2xl items-center">
            <span className="bg-white rounded-full w-6 h-6 grid place-items-center ">
              <BiCheck className="w-5 h-5 text-blue-700" />
            </span>
            Gestão inteligente
          </h3>
          <ul className="list-disc ml-6">
            <li>
              Registre vendas em segundos (Dinheiro, PIX, Débito, Crédito).
            </li>
            <li>Feche o caixa automaticamente e gere resumo por vendedor.</li>
            <li>Relatórios e controle em 1 clique — sem Excel.</li>
          </ul>
          <div className="grid place-content-center">
            <BsRocketTakeoff className="w-20  h-20" />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OldVsNew;
