import { BiCheck, BiCheckSquare } from "react-icons/bi";
import { BsLightningFill } from "react-icons/bs";
import { PiMoneyFill, PiUsersFill } from "react-icons/pi";
import { RiDatabaseLine } from "react-icons/ri";
import mock1 from "/mockup-1.png";
import mock2 from "/mockup-2.png";
import mock3 from "/mockup-3.png";

const Features = () => {
  return (
    <div className="container">
      <div className="grid items-center md:grid-cols-2 gap-10 mb-14">
        <div className="mb-7">
          <span className="bg-blue-500 mb-2 w-fit rounded-4xl py-2 px-4 text-white flex gap-3 items-center">
            <BsLightningFill className=" " />
            Registro Rápido
          </span>
          <h3 className="text-3xl font-semibold mb-5">
            Abertura de caixa em 3 cliques. Simples assim.
          </h3>
          <p className="mb-5">
            Registre vendas mais rápido do que anotar no caderno. Interface
            intuitiva que qualquer pessoa usa sem treinamento.
          </p>
          <ul className="list-disc">
            <li className="flex items-start gap-2">
              <BiCheck className="text-blue-600 text-xl mt-1" />
              Seleciona vendedor em 1 toque
            </li>
            <li className="flex items-start gap-2">
              <BiCheck className="text-blue-600 text-xl mt-1" />
              Escolhe forma de pagamento rapidamente
            </li>
            <li className="flex items-start gap-2">
              <BiCheck className="text-blue-600 text-xl mt-1" />
              Digita valor e pronto, venda registrada
            </li>
            <li className="flex items-start gap-2">
              <BiCheck className="text-blue-600 text-xl mt-1" />
              Histórico completo salvo automaticamente
            </li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute h-full w-full bg-linear-to-r from-cyan-500 to-blue-500 rounded-3xl rotate-3 md:rotate-6"></div>
          <img
            className="relative z-10 rounded-3xl shadow-[0_0_4px_4px_rgba(0,0,0,.1)]"
            src={mock1}
          />
        </div>
      </div>
      <div className="grid items-center md:grid-cols-2 gap-10 mb-14">
        <div className="relative max-md:row-start-2">
          <div className="absolute h-full w-full bg-linear-to-r from-violet-400 to-purple-500 rounded-3xl -rotate-3 md:-rotate-6"></div>
          <img
            className="relative z-10 rounded-3xl shadow-[0_0_4px_4px_rgba(0,0,0,.1)]"
            src={mock2}
          />
        </div>
        <div className="md:mb-7">
          <span className="bg-purple-500 w-fit mb-2 rounded-4xl py-2 px-4 text-white flex gap-3 items-center">
            <PiUsersFill />
            Performance Individual
          </span>
          <h3 className="text-3xl font-semibold mb-5">
            Saiba quem está vendendo mais (e quanto)
          </h3>
          <p className="mb-5">
            Compare performance entre vendedores em tempo real. Incentive sua
            equipe com dados claros e transparentes.
          </p>
          <div className="relative ml-3">
            <div className="h-full -left-3 absolute w-0.5 bg-purple-600"></div>
            <p className="flex gap-3 items-center">
              <RiDatabaseLine /> 67% dos lojistas não sabem qual vendedor
              performa melho
            </p>
            <p className="flex gap-3 items-center">
              <BiCheckSquare className=" text-green-500" /> Com nosso sistema,
              veja ranking atualizado todo dia e motive sua equipe com metas
              claras
            </p>
          </div>
        </div>
      </div>
      <div className="grid items-center md:grid-cols-2 gap-10 mb-14">
        <div>
          <span className="bg-green-500 w-fit mb-2 rounded-4xl py-2 px-4 text-white flex gap-3 items-center">
            <PiMoneyFill />
            Visão Financeira Clara
          </span>
          <h3 className="text-3xl font-semibold mb-5">
            Seu lucro na palma da mão, em tempo real
          </h3>
          <p className="mb-5">
            Veja exatamente quanto você faturou hoje, essa semana ou esse mês.
            Gráficos coloridos que qualquer um entende.
          </p>
          <ul>
            <li className="flex items-start gap-2">
              <BiCheck className="text-green-600 text-xl mt-1" />
              Ranking de vendedores do mês
            </li>
            <li className="flex items-start gap-2">
              <BiCheck className="text-green-600 text-xl mt-1" />
              Histórico completo por pessoa
            </li>
            <li className="flex items-start gap-2">
              <BiCheck className="text-green-600 text-xl mt-1" />
              Metas e comissões automáticas
            </li>
            <li className="flex items-start gap-2">
              <BiCheck className="text-green-600 text-xl mt-1" />
              Relatório para mostrar à equipe
            </li>
          </ul>
        </div>
        <div className="relative">
          <div className="absolute h-full w-full bg-linear-to-r from-emerald-400 to-green-500 rounded-3xl rotate-3 md:rotate-6"></div>
          <img
            className="relative z-10 rounded-3xl shadow-[0_0_4px_4px_rgba(0,0,0,.1)]"
            src={mock3}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
