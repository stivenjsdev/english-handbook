import { Bold } from "@/components/bold";
import { DynamicTable } from "@/components/dinamic-table";
import { Title1 } from "@/components/title1";
import { Title2 } from "@/components/title2";

export default function ImperativeMoodPage() {
  const firstCaseTable = [
    {
      column1: (
        <div className="text-center">
          <Bold>Ordenatario (yo)</Bold>
        </div>
      ),
      column2: (
        <div className="text-center">
          <Bold>Ejecutante (Ustedes)</Bold>
        </div>
      ),
    },
    {
      column1: (
        <div className="text-center">
          <Bold>Afirmativo (affirmative)</Bold>
        </div>
      ),
      column2: (
        <div className="text-center">
          <Bold>Negativo (negative)</Bold>
        </div>
      ),
    },
    {
      column1: <div className="text-center">verb + PC!</div>,
      column2: <div className="text-center">Don't + verb + PC!</div>,
    },
    {
      column1: (
        <>
          Leave <Bold>them!</Bold>
        </>
      ),
      column2: (
        <>
          Don't leave (<Bold>them</Bold>)!
        </>
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
    </section>
  );
}
