import { Card } from "flowbite-react";
import { BiCheck, BiListCheck, BiMouse, BiUser } from "react-icons/bi";
import { MdDashboard } from "react-icons/md";
import { TfiTimer } from "react-icons/tfi";

const cards = [
  {
    title: "Registre vendas em segundos",
    description: "Checkout simples e direto para agilizar o atendimento.",
    icon: TfiTimer,
  },
  {
    title: "Fechamento de caixa automático",
    description: " Resumo diário pronto para conferência sem cálculos manuais.",
    icon: MdDashboard,
  },
  {
    title: "Vendas por vendedor",
    icon: BiUser,
    description:
      "Acompanhe o desempenho individual de cada atendente com facilidade.",
  },
  {
    title: " Interface intuitiva",
    icon: BiMouse,
    description:
      "Aprenda a usar em minutos, sem necessidade de treinamento complexo.",
  },
  {
    title: "Menos erros, menos retrabalho",
    icon: BiCheck,
    description:
      "Controle centralizado evita lançamentos duplicados e confusão.",
  },
  {
    title: "Informações organizadas",
    icon: BiListCheck,
    description: "Dados sempre visíveis e sem bagunça.",
  },
];

const Benefits = () => {
  return (
    <div className="container max-w-fit mb-20">
      <h1 className="font-poppins text-4xl text-center mb-15">
        Simplifique sua gestão com recursos inteligentes
      </h1>
      <div className="grid max-md:justify-center md:grid-cols-2 lg:grid-cols-3 gap-20 grid-rows-2">
        {cards.map((item) => {
          const IconComponent = item.icon;

          return (
            <Card className="max-w-sm">
              <div className="mb-5 bg-blue-500 w-30 h-30 grid place-items-center p-4 rounded-xl ">
                <IconComponent className="w-20  h-20 text-white mb-4" />
              </div>

              <h3 className="font-poppins text-2xl text-blue-950">
                {item.title}
              </h3>

              <p className="text-black/80">{item.description}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Benefits;
