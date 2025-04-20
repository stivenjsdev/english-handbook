import { JSX } from "react";

interface DynamicTableProps {
  rows: Array<{ [key: string]: JSX.Element | string }>;
  size?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl";
}

export function DynamicTable({ rows, size = "xl" }: DynamicTableProps) {
  if (rows.length === 0) return null;

  const columnKeys = Object.keys(rows[0]);

  return (
    <div
      className={`border border-gray-300 rounded-md overflow-hidden w-full lg:w-${size} mx-auto`}
    >
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-between border-b border-gray-300 last:border-b-0"
        >
          {columnKeys.map((key, colIndex) => (
            <div
              key={colIndex}
              className={`p-2 flex-1 flex items-center ${
                colIndex < columnKeys.length - 1
                  ? "border-r border-gray-300"
                  : ""
              }`}
            >
              {row[key]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
