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
    { column1: "Bite him!", column2: "¡Muérdalo (a él)!" },
    { column1: "Kiss me!", column2: "¡Bésame (a mi)!" },
    { column1: "Leave them!!", column2: "Abandónelos (a ellos)!" },
    { column1: "Help them!", column2: "¡Ayúdalos (a ellos)!" },
  ];
  return (
    <section className="flex flex-col gap-4">
      <h1 className="text-xl lg:text-3xl  font-bold text-center text-gray-800">
        Direct Components - Pronombres Complemento
      </h1>
      <p>
        Un direct complement (Pronombre Complemento) es la persona, animal o
        cosa que recibe directamente la acción del verbo en una oración. En
        otras palabras, es lo que el verbo afecta directamente.
      </p>
      <div className="border border-gray-300 rounded-md overflow-hidden w-full lg:w-xl mx-auto">
        {directComponentsTable.map((row, index) => (
          <div
            key={index}
            className="flex justify-between border-b border-gray-300 last:border-b-0"
          >
            <div className="p-2 w-1/2 border-r border-gray-300">
              {row.column1}
            </div>
            <div className="p-2 w-1/2">{row.column2}</div>
          </div>
        ))}
      </div>
      <p>📌 Estructura típica:</p>
      <p className="font-semibold">Sujeto + Verbo + Pronombre Complemento</p>
      <div className="border border-gray-300 rounded-md overflow-hidden w-full lg:w-xl mx-auto">
        {examplesTable.map((row, index) => (
          <div
            key={index}
            className="flex justify-between border-b border-gray-300 last:border-b-0"
          >
            <div className="p-2 w-1/2 border-r border-gray-300">
              {row.column1}
            </div>
            <div className="p-2 w-1/2">{row.column2}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
