"use client";
import { JSX } from "react";

interface DynamicTableWithLinksProps {
  rows: Array<{ [key: string]: JSX.Element | string; link: string }>;
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

export function DynamicTableWithLinks({
  rows,
  size = "xl",
}: DynamicTableWithLinksProps) {
  if (rows.length === 0) return null;

  const columnKeys = Object.keys(rows[0]).filter((key) => key !== "link");

  return (
    <div
      className={`border border-gray-300 rounded-md overflow-hidden w-full lg:w-${size} mx-auto`}
    >
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-between border-b border-gray-300 last:border-b-0 cursor-pointer hover:bg-gray-100"
          onClick={() => window.open(row.link, "_blank")}
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
