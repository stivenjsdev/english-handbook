import { DynamicTableWithLinks } from "@/components/dynamic-table-with-links";
import { Title1 } from "@/components/title1";
import { Title2 } from "@/components/title2";
import { Separator } from "@/components/ui/separator";
import { SquareChevronRight } from "lucide-react";
import Image from "next/image";
import verbsGroupOne from "./verbsGroupOne.png";

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
      column1: "Borrow (from)",
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
      <div className="bg-white border border-gray-300 shadow-lg rounded-sm p-4 pb-8 w-full lg:w-xl lg:mx-auto">
        <Image src={verbsGroupOne} alt="verbsGroupOne" className="rounded-sm" />
        <p className="text-center text-sm font-semibold mt-4">
          Verbs Group One Example
        </p>
      </div>
      <h2 className="text-lg lg:text-xl font-semibold text-gray-700">
        Exercise:
      </h2>
      <ol className="list-decimal list-inside space-y-4">
        <li className="[&::marker]:font-bold">
          Take a sheet of paper and a pen. Handwrite the table from the previous
          section, including each word, its translation, and its pronunciation.
        </li>
        <li className="[&::marker]:font-bold">
          Once your table is complete, practice each word by repeating its
          pronunciation several times. If you forget how to pronounce a word,
          listen to it again and restart the practice.
        </li>
        <li className="[&::marker]:font-bold">
          Ask someone to help you by testing your vocabulary. They should ask
          you to translate words from English to Spanish and from Spanish to
          English, and correct you if you make any mistakes.
        </li>
      </ol>

      <Separator />

      <div className="grid grid-cols-4 border border-gray-300 w-full lg:w-3xl mx-auto rounded-md overflow-hidden">
        {/* Header */}
        <div className="col-span-2 border-r border-gray-300">
          <div className="text-center font-semibold p-2 border-b border-gray-300">
            Afirmativo
          </div>
        </div>
        <div className="col-span-2">
          <div className="text-center font-semibold p-2 border-b border-gray-300">
            Negativo
          </div>
        </div>

        {/* Afirmativo side */}
        <div className="row-span-6 flex items-center justify-center font-bold border-r border-gray-300 p-2">
          KISS
        </div>
        <div className="flex flex-col col-span-1">
          {["ME", "US", "THEM", "HIM", "HER", "IT"].map((pronoun, i) => (
            <div
              key={i}
              className="border-b last:border-b-0 border-r border-gray-300 p-2 text-center"
            >
              {pronoun}
            </div>
          ))}
        </div>

        {/* Negativo side */}
        <div className="row-span-6 flex items-center justify-center font-bold border-r border-gray-300 p-2">
          DON'T KISS
        </div>
        <div className="flex flex-col col-span-1">
          {["ME", "US", "THEM", "HIM", "HER", "IT"].map((pronoun, i) => (
            <div
              key={i}
              className="border-b last:border-b-0 border-gray-300 p-2 text-center"
            >
              {pronoun}
            </div>
          ))}
        </div>
      </div>

      <Title2 className="flex items-center gap-1">
        <SquareChevronRight />
        Ejemplos del cuadro anterior:
      </Title2>

      <div className="grid grid-cols-2 gap-2 lg:gap-4 lg:grid-cols-4">
        <p>Kiss me!</p>
        <p>¡Bésame!</p>
        <p>Don't kiss me!</p>
        <p>¡No me beses!</p>
        <p>Kiss us!</p>
        <p>¡Bésanos! (a nosotros)</p>
        <p>Don't kiss us!</p>
        <p>¡No nos bese!</p>
        <p>Kiss them!</p>
        <p>¡Bésalos! (a ellos)</p>
        <p>Don't kiss them!</p>
        <p>¡No los bese!</p>
        <p>Kiss him!</p>
        <p>¡Béselo! (a él)</p>
        <p>Don't kiss him!</p>
        <p>¡No lo bese!</p>
      </div>
    </section>
  );
}
