import { DynamicTableWithLinks } from "@/components/dynamic-table-with-links";
import { Title1 } from "@/components/title1";

export default function VerbsGroupOnePage() {
  const verbsGroupOneTable = [
    {
      column1: "Attack",
      column2: "Atacar, ataque",
      link: "https://www.wordreference.com/es/translation.asp?tranword=attack",
    },
    {
      column1: "Bite",
      column2: "Morder, mordida",
      link: "https://www.wordreference.com/es/translation.asp?tranword=bite",
    },
    {
      column1: "Benefit",
      column2: "Beneficiar, beneficio",
      link: "https://www.wordreference.com/es/translation.asp?tranword=benefit",
    },
    {
      column1: "Borrow",
      column2: "Pedir prestado (a)",
      link: "https://www.wordreference.com/es/translation.asp?tranword=borrow",
    },
    {
      column1: "Lend",
      column2: "Dar prestado",
      link: "https://www.wordreference.com/es/translation.asp?tranword=lend",
    },
    {
      column1: "Behave",
      column2: "Comportarse",
      link: "https://www.wordreference.com/es/translation.asp?tranword=behave",
    },
    {
      column1: "Misbehave",
      column2: "Comportarse mal",
      link: "https://www.wordreference.com/es/translation.asp?tranword=misbehave",
    },
    {
      column1: "Beat",
      column2: "Golpear, vencer, batir, latido",
      link: "https://www.wordreference.com/es/translation.asp?tranword=beat",
    },
    {
      column1: "Come (to)",
      column2: "Venir (a)",
      link: "https://www.wordreference.com/es/translation.asp?tranword=come",
    },
    {
      column1: "Go (to)",
      column2: "Ir (a)",
      link: "https://www.wordreference.com/es/translation.asp?tranword=go",
    },
    {
      column1: "Go on",
      column2: "Seguir, continuar",
      link: "https://www.wordreference.com/es/translation.asp?tranword=go%20on",
    },
    {
      column1: "Go away",
      column2: "Alejarse, irse lejos",
      link: "https://www.wordreference.com/es/translation.asp?tranword=go%20away",
    },
    {
      column1: "Enroll",
      column2: "Matricular (se), enrolar, inscribirse",
      link: "https://www.wordreference.com/es/translation.asp?tranword=enroll",
    },
    {
      column1: "Eat",
      column2: "Comer",
      link: "https://www.wordreference.com/es/translation.asp?tranword=eat",
    },
    {
      column1: "Kiss",
      column2: "Besar, beso",
      link: "https://www.wordreference.com/es/translation.asp?tranword=kiss",
    },
    {
      column1: "Leave",
      column2: "Salir, abandonar",
      link: "https://www.wordreference.com/es/translation.asp?tranword=leave",
    },
    {
      column1: "Obey",
      column2: "Obedecer",
      link: "https://www.wordreference.com/es/translation.asp?tranword=obey",
    },
    {
      column1: "Flunk",
      column2: "Perder (un examen)",
      link: "https://www.wordreference.com/es/translation.asp?tranword=flunk",
    },
    {
      column1: "Pass (by)",
      column2: "Aprobar (un examen), pasar (por)",
      link: "https://www.wordreference.com/es/translation.asp?tranword=pass",
    },
    {
      column1: "Pass away",
      column2: "Fallecer, morir",
      link: "https://www.wordreference.com/es/translation.asp?tranword=pass%20away",
    },
    {
      column1: "Shout (at)",
      column2: "Gritar (a)",
      link: "https://www.wordreference.com/es/translation.asp?tranword=shout",
    },
  ];
  return (
    <section className="flex flex-col gap-4">
      <Title1>Verbs, Group One (1)</Title1>
      <DynamicTableWithLinks rows={verbsGroupOneTable} />
      <p className="text-xs text-gray-600 text-right w-full lg:w-xl lg:mx-auto pr-1">
        Total: {verbsGroupOneTable.length}
      </p>
    </section>
  );
}
