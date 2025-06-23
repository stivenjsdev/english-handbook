"use client"; // Indica que este componente se ejecuta del lado del cliente en Next.js
import { FileQuestionIcon, PopcornIcon } from "lucide-react";
import React, { useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "../components/ui/alert";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";

// Tipo de datos Question: que define la estructura de una pregunta del quiz
export type Question = {
  question: string; // Texto de la pregunta
  options: string[]; // Opciones de respuesta
  answer: string; // Respuesta correcta
};

interface MultipleChoiceQuizProps {
  questions: Question[]; // Arreglo de preguntas que recibe el componente
}

// Función para barajar un array (Fisher-Yates)
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export const MultipleChoiceQuiz: React.FC<MultipleChoiceQuizProps> = ({
  questions,
}) => {
  // Estado para preguntas y opciones barajadas
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[] | null>(
    null
  );

  // Barajar solo en el cliente después de montar
  React.useEffect(() => {
    const shuffled = shuffleArray(questions).map((q) => ({
      ...q,
      options: shuffleArray(q.options),
    }));
    setShuffledQuestions(shuffled);
  }, [questions]);

  const [current, setCurrent] = useState(0); // Estado para la pregunta actual
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null) // Estado para las respuestas del usuario, inicializadas en null
  );
  const [showResult, setShowResult] = useState(false); // Estado para mostrar los resultados

  // Mientras no se haya barajado, no renderizar nada (o puedes poner un loader)
  if (!shuffledQuestions) return null;

  const handleSelect = (value: string) => {
    const updated = [...answers]; // Copia el arreglo de respuestas
    updated[current] = value; // Actualiza la respuesta de la pregunta actual
    setAnswers(updated); // Guarda el nuevo arreglo de respuestas
  };

  const handleNext = () => {
    if (current < shuffledQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setAnswers(Array(shuffledQuestions.length).fill(null));
    setCurrent(0);
    setShowResult(false);
  };

  // Calcular resultados
  const correctCount = answers.filter(
    (a, i) => a === shuffledQuestions[i].answer
  ).length;
  const wrongAnswers = shuffledQuestions
    .map((q, i) => ({ ...q, userAnswer: answers[i] }))
    .filter((q) => q.userAnswer !== q.answer);

  if (showResult) {
    // Si se deben mostrar los resultados
    return (
      <div className="max-w-xl mx-auto flex flex-col gap-4">
        <Alert className="">
          {/* Muestra una alerta con el puntaje */}
          <PopcornIcon /> {/* Ícono decorativo */}
          <AlertTitle>Resultado</AlertTitle> {/* Título de la alerta */}
          <AlertDescription>
            Puntaje: {correctCount} / {shuffledQuestions.length}
            {/* Muestra el puntaje */}
          </AlertDescription>
        </Alert>
        {wrongAnswers.length > 0 && (
          <Card className="p-4 flex flex-col gap-4">
            {/* Tarjeta con preguntas incorrectas */}
            <div className="font-bold">Preguntas incorrectas:</div>
            <ul className="flex flex-col gap-2">
              {wrongAnswers.map((q, idx) => (
                <li key={idx}>
                  <div className="">{q.question}</div> {/* Pregunta */}
                  <div className="text-sm text-gray-500">
                    Tu respuesta: {q.userAnswer ?? "Sin responder"}
                    {/* Respuesta del usuario */}
                  </div>
                  <div className="text-sm font-semibold text-gray-800">
                    Respuesta correcta: {q.answer} {/* Respuesta correcta */}
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        )}
        <Button onClick={handleRestart} className="w-full">
          Reiniciar
        </Button>
        {/* Botón para reiniciar el quiz */}
      </div>
    );
  }

  const q = shuffledQuestions[current]; // Pregunta actual
  // console.log({ current, q, answers }); // Log para depuración
  // console.log('answer[current]', answers[current]); // Log para depuración

  return (
    <Card className="max-w-xl mx-auto p-6 flex flex-col gap-4">
      {/* Tarjeta principal del quiz */}
      {/* Ícono decorativo */}
      <header className="flex items-center gap-1">
        <FileQuestionIcon className="w-4 h-4 text-gray-600" />
        <h2 className="text-sm font-bold">
          Pregunta {current + 1} de {shuffledQuestions.length}
          {/* Número de pregunta */}
        </h2>
      </header>
      {/* Texto de la pregunta */}
      <h3 className="text-sm">{q.question}</h3>
      {/* Opciones de respuesta */}
      <RadioGroup
        value={answers[current] ?? undefined}
        onValueChange={handleSelect}
      >
        {q.options.map((opt, idx) => (
          <div key={idx} className="flex items-center gap-3">
            {/* Opción de respuesta */}
            <RadioGroupItem value={opt} id={`r${idx}`} /> {/* Botón de radio */}
            <Label htmlFor={`r${idx}`}>{opt}</Label>
            {/* Etiqueta de la opción */}
          </div>
        ))}
      </RadioGroup>
      <Button
        onClick={handleNext}
        disabled={answers[current] == null}
        className="w-full"
      >
        {current === shuffledQuestions.length - 1 ? "Finalizar" : "Siguiente"}
        {/* Texto del botón */}
      </Button>
    </Card>
  );
};
