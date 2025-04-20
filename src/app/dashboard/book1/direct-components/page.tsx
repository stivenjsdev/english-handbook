import { Bold } from "@/components/bold";
import { DynamicTable } from "@/components/dynamic-table";
import { Title1 } from "@/components/title1";

export default function DirectComponentsPage() {
  const directComponentsTable = [
    { column1: "Me", column2: "A mí" },
    { column1: "You", column2: "A usted(es)" },
    { column1: "Us", column2: "A nosotros(as)" },
    { column1: "Them", column2: "A ellos(as)" },
    { column1: "Him", column2: "A él" },
    { column1: "Her", column2: "A ella" },
    { column1: "It", column2: "A este (animal o cosa). Eso, esa" },
  ];
  const examplesTable = [
    {
      column1: (
        <div>
          Bite <Bold> him</Bold>!
        </div>
      ),
      column2: (
        <div>
          ¡Muérdalo (<Bold>a él</Bold>)!
        </div>
      ),
    },
    {
      column1: (
        <div>
          Kiss <Bold>me</Bold>!
        </div>
      ),
      column2: (
        <div>
          ¡Bésame (<Bold>a mí</Bold>)!
        </div>
      ),
    },
    {
      column1: (
        <div>
          Leave <Bold>them</Bold>!
        </div>
      ),
      column2: (
        <div>
          ¡Abandónelos (<Bold>a ellos</Bold>)!
        </div>
      ),
    },
    {
      column1: (
        <div>
          Help <Bold>them</Bold>!
        </div>
      ),
      column2: (
        <div>
          ¡Ayúdalos (<Bold>a ellos</Bold>)!
        </div>
      ),
    },
  ];
  return (
    <section className="flex flex-col gap-4">
      <Title1>Direct Components - Pronombres Complemento</Title1>
      <p>
        Un direct complement (Pronombre Complemento) es la persona, animal o
        cosa que recibe directamente la acción del verbo en una oración. En
        otras palabras, es lo que el verbo afecta directamente.
      </p>
      <DynamicTable rows={directComponentsTable} />
      {/* <p>📌 Estructura típica:</p>
      <p className="font-semibold">Sujeto + Verbo + Pronombre Complemento</p> */}
      <p>
        <Bold>Nota: </Bold>Los anteriores nombres no llevan la preposición{" "}
        <Bold>a (to)</Bold> cuando funcionan como acusativo (paciente), es
        decir, cuando reciben directamente la significación del verbo, asi:
      </p>
      <DynamicTable rows={examplesTable} />
    </section>
  );
}
