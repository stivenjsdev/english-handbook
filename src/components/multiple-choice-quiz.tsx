"use client"; // Indica que este componente se ejecuta del lado del cliente en Next.js
import { PopcornIcon } from "lucide-react";
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

export const MultipleChoiceQuiz: React.FC<MultipleChoiceQuizProps> = ({
  questions,
}) => {
  const [current, setCurrent] = useState(0); // Estado para la pregunta actual
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null) // Estado para las respuestas del usuario, inicializadas en null
  );
  const [showResult, setShowResult] = useState(false); // Estado para mostrar los resultados

  const handleSelect = (value: string) => {
    const updated = [...answers]; // Copia el arreglo de respuestas
    updated[current] = value; // Actualiza la respuesta de la pregunta actual
    setAnswers(updated); // Guarda el nuevo arreglo de respuestas
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      // Si no es la última pregunta
      setCurrent(current + 1); // Avanza a la siguiente pregunta
    } else {
      setShowResult(true); // Si es la última, muestra los resultados
    }
  };

  const handleRestart = () => {
    setAnswers(Array(questions.length).fill(null)); // Reinicia las respuestas
    setCurrent(0); // Vuelve a la primera pregunta
    setShowResult(false); // Oculta los resultados
  };

  // Calcular resultados
  const correctCount = answers.filter(
    (a, i) => a === questions[i].answer // Cuenta las respuestas correctas
  ).length;
  const wrongAnswers = questions
    .map((q, i) => ({ ...q, userAnswer: answers[i] })) // Agrega la respuesta del usuario a cada pregunta
    .filter((q) => q.userAnswer !== q.answer); // Filtra las preguntas incorrectas

  if (showResult) {
    // Si se deben mostrar los resultados
    return (
      <div className="max-w-xl mx-auto flex flex-col gap-4">
        <Alert className="">
          {/* Muestra una alerta con el puntaje */}
          <PopcornIcon /> {/* Ícono decorativo */}
          <AlertTitle>Resultado</AlertTitle> {/* Título de la alerta */}
          <AlertDescription>
            Puntaje: {correctCount} / {questions.length}
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

  const q = questions[current]; // Pregunta actual
  console.log({ current, q, answers }); // Log para depuración

  return (
    <Card className="max-w-xl mx-auto p-6 flex flex-col gap-4">
      {/* Tarjeta principal del quiz */}
      <h2 className="text-sm font-bold">
        Pregunta {current + 1} de {questions.length} {/* Número de pregunta */}
      </h2>
      <h3 className="text-sm">{q.question}</h3> {/* Texto de la pregunta */}
      <RadioGroup
        defaultValue={answers[current] ?? undefined} // Valor seleccionado por defecto
        onValueChange={handleSelect} // Maneja el cambio de opción
      >
        {q.options.map((opt, idx) => (
          <div key={idx} className="flex items-center gap-3">
            {" "}
            {/* Opción de respuesta */}
            <RadioGroupItem value={opt} id={`r${idx}`} /> {/* Botón de radio */}
            <Label htmlFor={`r${idx}`}>{opt}</Label>
            {/* Etiqueta de la opción */}
          </div>
        ))}
      </RadioGroup>
      <Button
        onClick={handleNext} // Maneja el avance a la siguiente pregunta
        disabled={answers[current] == null} // Deshabilita si no hay respuesta
        className="w-full"
      >
        {current === questions.length - 1 ? "Finalizar" : "Siguiente"}
        {/* Texto del botón */}
      </Button>
    </Card>
  );
};
