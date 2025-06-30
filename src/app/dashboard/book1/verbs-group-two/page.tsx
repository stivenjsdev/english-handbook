import { DynamicTableWithLinks } from "@/components/dynamic-table-with-links";
import { Title1 } from "@/components/title1";

export default function VerbsGroupTwoPage() {
  const verbsGroupTwoTable = [
    {
      column1: "Buy",
      column2: "Comprar",
      link: "https://www.wordreference.com/es/translation.asp?tranword=buy",
    },
    {
      column1: "Sell",
      column2: "Vender",
      link: "https://www.wordreference.com/es/translation.asp?tranword=sell",
    },
    {
      column1: "Catch",
      column2: "Coger, capturar",
      link: "https://www.wordreference.com/es/translation.asp?tranword=catch",
    },
    {
      column1: "Catch up",
      column2: "Alcanzar, ponerse al día",
      link: "https://www.wordreference.com/es/translation.asp?tranword=catch+up",
    },
    {
      column1: "Defrost",
      column2: "Descongelar",
      link: "https://www.wordreference.com/es/translation.asp?tranword=defrost",
    },
    {
      column1: "Freeze",
      column2: "Congelar",
      link: "https://www.wordreference.com/es/translation.asp?tranword=freeze",
    },
    {
      column1: "Give (away)",
      column2: "Dar, regalar",
      link: "https://www.wordreference.com/es/translation.asp?tranword=give",
    },
    {
      column1: "Give up",
      column2: "Rendirse, darse por vencido",
      link: "https://www.wordreference.com/es/translation.asp?tranword=give+up",
    },
    {
      column1: "Lose",
      column2: "Perder",
      link: "https://www.wordreference.com/es/translation.asp?tranword=lose",
    },
    {
      column1: "Look (at)",
      column2: "Mirar (a)",
      link: "https://www.wordreference.com/es/translation.asp?tranword=look",
    },
    {
      column1: "Look back",
      column2: "Voltear a mirar, mirar atrás",
      link: "https://www.wordreference.com/es/translation.asp?tranword=look+back",
    },
    {
      column1: "Look for",
      column2: "Buscar",
      link: "https://www.wordreference.com/es/translation.asp?tranword=look+for",
    },
    {
      column1: "Look like",
      column2: "Parecerse a",
      link: "https://www.wordreference.com/es/translation.asp?tranword=look+like",
    },
    {
      column1: "Put",
      column2: "Poner, colocar",
      link: "https://www.wordreference.com/es/translation.asp?tranword=put",
    },
    {
      column1: "Report",
      column2: "Reportar, reporte",
      link: "https://www.wordreference.com/es/translation.asp?tranword=report",
    },
    {
      column1: "Ride",
      column2: "Montar (sobre), dar un paseo",
      link: "https://www.wordreference.com/es/translation.asp?tranword=ride",
    },
    {
      column1: "Run (for)",
      column2: "Correr, presentarse para, postularse",
      link: "https://www.wordreference.com/es/translation.asp?tranword=run",
    },
    {
      column1: "Sing",
      column2: "Cantar",
      link: "https://www.wordreference.com/es/translation.asp?tranword=sing",
    },
    {
      column1: "Study",
      column2: "Estudiar",
      link: "https://www.wordreference.com/es/translation.asp?tranword=study",
    },
    {
      column1: "Walk",
      column2: "Caminar, caminata",
      link: "https://www.wordreference.com/es/translation.asp?tranword=walk",
    },
    {
      column1: "Walk away",
      column2: "Alejarse (caminando)",
      link: "https://www.wordreference.com/es/translation.asp?tranword=walk+away",
    },
    {
      column1: "Work",
      column2: "Trabajar, trabajo",
      link: "https://www.wordreference.com/es/translation.asp?tranword=work",
    },
  ];
  return (
    <section className="flex flex-col gap-4">
      <Title1>Verbs, Group Two (2)</Title1>
      <DynamicTableWithLinks rows={verbsGroupTwoTable} />
    </section>
  );
}
