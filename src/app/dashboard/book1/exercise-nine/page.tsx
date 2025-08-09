import { Title1 } from "@/components/title1";
import { Title2 } from "@/components/title2";
import { Input } from "@/components/ui/input";
import { exerciseItems1, exerciseTitle1 } from "./exerciseData";

export default function ExerciseNine() {
  return (
    <section className="flex flex-col gap-4">
      <Title1>Exercises</Title1>
      <Title2>{exerciseTitle1}</Title2>
      <p className="font-bold">Translate</p>
      <ol className="list-decimal list-outside ml-6 space-y-1">
        {exerciseItems1.map((text, idx) => (
          <li key={idx} className="[&::marker]:font-bold">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <p className="truncate sm:whitespace-nowrap whitespace-normal sm:mb-0 mb-1 max-w-full">
                {text}
              </p>
              <Input type="text" className="flex-1 min-w-0" />
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
