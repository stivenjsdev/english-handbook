import {
  MultipleChoiceQuiz,
  Question,
} from "@/components/multiple-choice-quiz";
import { Title1 } from "@/components/title1";

export default function TestVerbsGroupOne() {
  const questions: Question[] = [
    {
      question: "¿Cómo se traduce 'Attack' al español?",
      options: [
        "Atacar, ataque",
        "Morder, mordida",
        "Beneficiar, beneficio",
        "Pedir prestado (a)",
      ],
      answer: "Atacar, ataque",
    },
    {
      question: "¿Cómo se dice en inglés 'Morder, mordida'?",
      options: ["Bite", "Attack", "Benefit", "Borrow"],
      answer: "Bite",
    },
    {
      question: "¿Cómo se traduce 'Benefit' al español?",
      options: [
        "Beneficiar, beneficio",
        "Dar prestado",
        "Comportarse",
        "Comportarse mal",
      ],
      answer: "Beneficiar, beneficio",
    },
    {
      question: "¿Cómo se dice en inglés 'Pedir prestado (a)'?",
      options: ["Borrow", "Lend", "Behave", "Misbehave"],
      answer: "Borrow",
    },
    {
      question: "¿Cómo se traduce 'Lend' al español?",
      options: [
        "Dar prestado",
        "Golpear, vencer, batir, latido",
        "Venir (a)",
        "Ir (a)",
      ],
      answer: "Dar prestado",
    },
    {
      question: "¿Cómo se dice en inglés 'Comportarse'?",
      options: ["Behave", "Misbehave", "Beat", "Come (to)"],
      answer: "Behave",
    },
    {
      question: "¿Cómo se traduce 'Misbehave' al español?",
      options: [
        "Comportarse mal",
        "Golpear, vencer, batir, latido",
        "Venir (a)",
        "Ir (a)",
      ],
      answer: "Comportarse mal",
    },
    {
      question: "¿Cómo se dice en inglés 'Golpear, vencer, batir, latido'?",
      options: ["Beat", "Come (to)", "Go (to)", "Go on"],
      answer: "Beat",
    },
    {
      question: "¿Cómo se traduce 'Come (to)' al español?",
      options: [
        "Venir (a)",
        "Ir (a)",
        "Seguir, continuar",
        "Alejarse, irse lejos",
      ],
      answer: "Venir (a)",
    },
    {
      question: "¿Cómo se dice en inglés 'Ir (a)'?",
      options: ["Go (to)", "Go on", "Go away", "Enroll"],
      answer: "Go (to)",
    },
    {
      question: "¿Cómo se traduce 'Go on' al español?",
      options: [
        "Seguir, continuar",
        "Alejarse, irse lejos",
        "Matricular (se), enrolar, inscribirse",
        "Comer",
      ],
      answer: "Seguir, continuar",
    },
    {
      question: "¿Cómo se dice en inglés 'Alejarse, irse lejos'?",
      options: ["Go away", "Enroll", "Eat", "Kiss"],
      answer: "Go away",
    },
    {
      question: "¿Cómo se traduce 'Enroll' al español?",
      options: [
        "Matricular (se), enrolar, inscribirse",
        "Comer",
        "Besar, beso",
        "Salir, abandonar",
      ],
      answer: "Matricular (se), enrolar, inscribirse",
    },
    {
      question: "¿Cómo se dice en inglés 'Comer'?",
      options: ["Eat", "Kiss", "Leave", "Obey"],
      answer: "Eat",
    },
    {
      question: "¿Cómo se traduce 'Kiss' al español?",
      options: [
        "Besar, beso",
        "Salir, abandonar",
        "Obedecer",
        "Perder (un examen)",
      ],
      answer: "Besar, beso",
    },
    {
      question: "¿Cómo se dice en inglés 'Salir, abandonar'?",
      options: ["Leave", "Obey", "Flunk", "Pass (by)"],
      answer: "Leave",
    },
    {
      question: "¿Cómo se traduce 'Obey' al español?",
      options: [
        "Obedecer",
        "Perder (un examen)",
        "Aprobar (un examen), pasar (por)",
        "Fallecer, morir",
      ],
      answer: "Obedecer",
    },
    {
      question: "¿Cómo se dice en inglés 'Perder (un examen)'?",
      options: ["Flunk", "Pass (by)", "Pass away", "Shout (at)"],
      answer: "Flunk",
    },
    {
      question: "¿Cómo se traduce 'Pass (by)' al español?",
      options: [
        "Aprobar (un examen), pasar (por)",
        "Fallecer, morir",
        "Gritar (a)",
        "Atacar, ataque",
      ],
      answer: "Aprobar (un examen), pasar (por)",
    },
    {
      question: "¿Cómo se dice en inglés 'Fallecer, morir'?",
      options: ["Pass away", "Shout (at)", "Attack", "Bite"],
      answer: "Pass away",
    },
    {
      question: "¿Cómo se traduce 'Shout (at)' al español?",
      options: [
        "Gritar (a)",
        "Atacar, ataque",
        "Morder, mordida",
        "Beneficiar, beneficio",
      ],
      answer: "Gritar (a)",
    },
  ];
  return (
    <section className="flex flex-col gap-4">
      <Title1>Quiz Verbs Group One (1)</Title1>
      <MultipleChoiceQuiz questions={questions} />
    </section>
  );
}
