import { Bold } from "@/components/bold";
import { Title1 } from "@/components/title1";
import { Title2 } from "@/components/title2";
import { SquareChevronRight } from "lucide-react";

export default function ImperativeSecondCasePage() {
  const secondCaseTable = [
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
      <Title1>Imperativo Segundo Caso</Title1>

      <p>
        <Bold>El ordenatario</Bold> sugiere u ordena a otra persona que ejecuten
        juntos un evento o acción. En este caso inicia diciendo{" "}
        <Bold>let's</Bold>:
      </p>

      <p className="text-center">
        ud.(s) y Yo: <Bold>Let's</Bold>
      </p>

      <div className="grid grid-cols-6 border border-gray-300 w-full lg:w-3xl mx-auto rounded-md overflow-hidden">
        {/* Header */}
        <div className="col-span-3 border-r border-gray-300">
          <div className="text-center font-semibold p-2 border-b border-gray-300">
            Afirmativo
          </div>
        </div>
        <div className="col-span-3">
          <div className="text-center font-semibold p-2 border-b border-gray-300">
            Negativo
          </div>
        </div>

        {/* Afirmativo side: Let's / verb / pronouns */}
        <div className="row-span-6 flex items-center justify-center border-r border-gray-300 p-2">
          Let's
        </div>
        <div className="row-span-6 flex items-center justify-center font-bold border-r border-gray-300 p-2">
          verb
        </div>
        <div className="flex flex-col">
          {["them", "him", "her"].map((pronoun, i) => (
            <div
              key={i}
              className="border-b last:border-b-0 border-r border-gray-300 p-2 text-center"
            >
              {pronoun}
            </div>
          ))}
        </div>

        {/* Negativo side: Let's not / verb / pronouns */}
        <div className="row-span-6 flex items-center justify-center border-r border-gray-300 p-2">
          Let's not
        </div>
        <div className="row-span-6 flex items-center justify-center font-bold border-r border-gray-300 p-2">
          verb
        </div>
        <div className="flex flex-col">
          {["them", "him", "her"].map((pronoun, i) => (
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
        <SquareChevronRight className="mt-0.5" />
        Ejemplos:
      </Title2>

      <ul className="list-disc pl-6">
        <li>
          Let's give it! (¡Regalémoslo!)
        </li>
        <li>
          Let's not give it! (¡No lo demos!)
        </li>
        <li>
          Let's sing with her! (¡Cantemos con ella!)
        </li>
        <li>
          Let's not sing with her! (¡No cantemos con ella!)
        </li>
        <li>
          Let's ride it! (¡Montémoslo!)
        </li>
        <li>
          Let's not ride it! (¡No lo montemos!)
        </li>
        <li>
          Let's study with them! (¡Estudiemos con ellos!)
        </li>
        <li>
          Let's not study with them! (¡No estudiemos con ellos!)
        </li>
        <li>
          Let's obey him! (¡Obedezcámosle!)
        </li>
        <li>
          Let's not obey him! (¡No le obedezcamos!)
        </li>
      </ul>
    </section>
  );
}
