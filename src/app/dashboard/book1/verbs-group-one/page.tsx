import { DynamicTable } from "@/components/dynamic-table";
import { Title1 } from "@/components/title1";

export default function VerbsGroupOnePage() {
  const verbsGroupOneTable = [
    { column1: "Attack", column2: "Atacar, ataque" },
    { column1: "Bite", column2: "Morder, mordida" },
    { column1: "Benefit", column2: "Beneficiar, beneficio" },
    { column1: "Borrow", column2: "Pedir prestado (a)" },
    { column1: "Lend", column2: "Dar prestado" },
    { column1: "Behave", column2: "Comportarse" },
    { column1: "Misbehave", column2: "Comportarse mal" },
    { column1: "Beat", column2: "Golpear, vencer, batir, latido" },
    { column1: "Come (to)", column2: "Venir (a)" },
    { column1: "Go (to)", column2: "Ir (a)" },
    { column1: "Go on", column2: "Seguir, continuar" },
    { column1: "Go away", column2: "Alejarse, irse lejos" },
    { column1: "Enroll", column2: "Matricular (se), enrolar, inscribirse" },
    { column1: "Eat", column2: "Comer" },
    { column1: "Kiss", column2: "Besar, beso" },
    { column1: "Leave", column2: "Salir, abandonar" },
    { column1: "Obey", column2: "Obedecer" },
    { column1: "Flunk", column2: "Perder (un examen)" },
    { column1: "Pass (by)", column2: "Aprobar (un examen), pasar (por)" },
    { column1: "Pass away", column2: "Fallecer, morir" },
    { column1: "Shout (at)", column2: "Gritar (a)" },
  ];
  return (
    <section className="flex flex-col gap-4">
      <Title1>Verbs, Group One (1)</Title1>
      <DynamicTable rows={verbsGroupOneTable} />
      <p className="text-xs text-gray-600 text-right w-full lg:w-xl lg:mx-auto pr-1">
        Total: {verbsGroupOneTable.length}
      </p>
    </section>
  );
}
