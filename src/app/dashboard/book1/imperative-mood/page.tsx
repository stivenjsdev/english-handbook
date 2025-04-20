import { Bold } from "@/components/bold";
import { DynamicTable } from "@/components/dynamic-table";
import { Title1 } from "@/components/title1";
import { Title2 } from "@/components/title2";
import Image from "next/image";
import imperativeMoodCase1 from "./imperativeMoodCase1.png";

export default function ImperativeMoodPage() {
  const firstCaseTable = [
    {
      column1: <Bold className="mx-auto">Ordenatario (yo)</Bold>,
      column2: <Bold className="mx-auto">Ejecutante (Ustedes)</Bold>,
    },
    {
      column1: <Bold className="mx-auto">Afirmativo (affirmative)</Bold>,
      column2: <Bold className="mx-auto">Negativo (negative)</Bold>,
    },
    {
      column1: <span className="mx-auto">verbo + PC!</span>,
      column2: <span className="mx-auto">Don't + verbo + PC!</span>,
    },
    {
      column1: (
        <span>
          Leave <Bold>them!</Bold>
        </span>
      ),
      column2: (
        <span>
          Don't leave (<Bold>them</Bold>)!
        </span>
      ),
    },
  ];
  const examplesTable = [
    {
      column1: "Attack!",
      column2: "¡Ataque!",
      column3: "Don't attack!",
      column4: "¡No ataque!",
    },
    {
      column1: "Bite!",
      column2: "¡Muerda!",
      column3: "Don't bite!",
      column4: "¡No muerda!",
    },
    {
      column1: "Go!",
      column2: "¡Vaya! ¡Váyase!",
      column3: "Don't go!",
      column4: "¡No vaya! ¡No se vaya!",
    },
  ];
  return (
    <section className="flex flex-col gap-4">
      <Title1>Imperative Mood - El Modo Imperativo</Title1>
      <p>
        La función semántica del imperativo es dar órdenes, sugerencias o
        indicaciones. Hay cuatro maneras de hacerlo:
      </p>
      <Title2>Imperativo primer caso</Title2>
      <p>
        La persona que habla <Bold>(ordenatario)</Bold> da una orden, sugerencia
        o indicación para que quien lo escucha <Bold>(ejecutante)</Bold> la
        lleve a cabo (es decir, la "haga"), así:
      </p>
      <DynamicTable rows={firstCaseTable} />
      <DynamicTable rows={examplesTable} size="3xl" />
      <div className="bg-white border border-gray-300 shadow-lg rounded-sm p-4 pb-8 w-full lg:w-xl lg:mx-auto">
        <Image
          src={imperativeMoodCase1}
          alt="imperativeMoodCase1"
          className="rounded-sm"
        />
        {/* <p className="text-center text-sm font-semibold mt-4">
          Imperative Mood Example
        </p> */}
        <p className="text-center text-sm font-semibold mt-4">
          Open it!
        </p>
      </div>
    </section>
  );
}
