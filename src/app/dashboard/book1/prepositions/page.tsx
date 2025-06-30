import { DynamicTableWithLinks } from "@/components/dynamic-table-with-links";
import { Title1 } from "@/components/title1";
import { Separator } from "@/components/ui/separator";

export default function PrepositionsPage() {
  const prepositionsTable = [
    {
      column1: "AT: En",
      column2: "Behave at school! (¡Compórtate en el colegio!)",
      link: "https://www.wordreference.com/es/translation.asp?tranword=at",
    },
    {
      column1: "IN: En, Dentro de",
      column2: "Don't eat in class! (¡No comas en clase!)",
      link: "https://www.wordreference.com/es/translation.asp?tranword=in",
    },
    {
      column1: "OUT: Fuera",
      column2: "Get out from the room! (¡Sal de la habitación!)",
      link: "https://www.wordreference.com/es/translation.asp?tranword=out",
    },
    {
      column1: "FROM: De. Indica el punto de origen",
      column2: "Don't leave from Rio Negro! (!No salgas de Rio Negro!)",
      link: "https://www.wordreference.com/es/translation.asp?tranword=from",
    },
    {
      column1: "TO: A. Indica hacia dónde va el desplazamiento",
      column2: "Go to school! (!Váyase a la escuela!)",
      link: "https://www.wordreference.com/es/translation.asp?tranword=to",
    },
    {
      column1: "INSTEAD OF: En lugar de, por, en vez de, en reemplazo de",
      column2: "Enroll instead of her! (!Matricúlese en vez de ella!)",
      link: "https://www.wordreference.com/es/translation.asp?tranword=instead",
    },
    {
      column1: "BECAUSE OF: A cause de, por culpa de, gracias a",
      column2:
        "I benefit you because of them! (!Yo te beneficio gracias a ellas!). Beat him because of her! (!Golpéelo por culpa de ella!)",
      link: "https://www.wordreference.com/es/translation.asp?tranword=because",
    },
    {
      column1: "FOR: Para. Indica el beneficiario",
      column2: "Work for us! (!Trabaje para nosotros!)",
      link: "https://www.wordreference.com/es/translation.asp?tranword=for",
    },
    {
      column1: "WITH: Con. Indica compañía o instrumento",
      column2: "Attack with us! (!Ataque con nosotros!)",
      link: "https://www.wordreference.com/es/translation.asp?tranword=with",
    },
    {
      column1: "WITHOUT: Sin",
      column2: "Attack without us! (!Ataque sin nosotros!)",
      link: "https://www.wordreference.com/es/translation.asp?tranword=without",
    },
    {
      column1:
        "BY: Por. Indica quien 'hace' la algo, cerca, el medio usado para 'hacer' algo",
      column2:
        "The lesson was explained by the teacher (La lección fue explicada por el profesor). He lives by my house (Él vive cerca de mi casa). By studying I passed Juan Jose's subject (Estudiando pasé la materia de Juan José).",
      link: "https://www.wordreference.com/es/translation.asp?tranword=by",
    },
  ];

  const erTable = [
    {
      column1: "Attack: Atacar",
      column2: "Attacker: Atacante",
      link: "https://www.wordreference.com/es/translation.asp?tranword=attacker",
    },
    {
      column1: "Box: Boxear",
      column2: "Boxer: Boxeador",
      link: "https://www.wordreference.com/es/translation.asp?tranword=boxer",
    },
  ];

  const orTable = [
    {
      column1: "Visit: Visitar",
      column2: "Visitor: Visitante",
      link: "https://www.wordreference.com/es/translation.asp?tranword=visitor",
    },
    {
      column1: "Govern: Gobernar",
      column2: "Governor: Gobernador",
      link: "https://www.wordreference.com/es/translation.asp?tranword=governor",
    },
  ];

  return (
    <section className="flex flex-col gap-4">
      <Title1>Preposiciones (Prepositions)</Title1>
      <DynamicTableWithLinks rows={prepositionsTable} size="2xl" />
      <Separator />
      <p>
        Nota: "ER" se agrega el final del verbo para indicar la persona que
        realiza la acción que representa dicho verbo. Ejemplo:
      </p>
      <DynamicTableWithLinks rows={erTable} size="2xl" />
      <p>Hay veces se hace agregando "OR". Ejemplo:</p>
      <DynamicTableWithLinks rows={orTable} size="2xl" />
    </section>
  );
}
