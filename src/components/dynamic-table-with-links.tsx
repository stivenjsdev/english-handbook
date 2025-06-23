"use client";
import { Columns } from "lucide-react";
import { JSX, useMemo, useState } from "react";
import { Button } from "./ui/button";

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
  const [viewMode, setViewMode] = useState<"all" | "first" | "second">("all");

  // Determinar qué columnas mostrar según el modo
  const visibleColumns = useMemo(() => {
    if (viewMode === "first") return [columnKeys[0]];
    if (viewMode === "second" && columnKeys.length > 1) return [columnKeys[1]];
    return columnKeys;
  }, [viewMode, columnKeys]);

  // Alternar entre modos
  const handleToggle = () => {
    setViewMode((prev) => {
      if (prev === "all") return "first";
      if (prev === "first") return columnKeys.length > 1 ? "second" : "all";
      return "all";
    });
  };

  return (
    <div
      className={`relative border border-gray-300 rounded-md w-full lg:w-${size} mx-auto`}
    >
      {/* Botón flotante en la esquina superior derecha */}
      <Button
        size="icon"
        variant="outline"
        className="absolute -top-4 right-0 z-10 rounded-full shadow-lg bg-white hover:bg-gray-100"
        onClick={handleToggle}
        aria-label="Toggle columns"
      >
        <Columns className="w-5 h-5" />
      </Button>
      {/* Tabla */}
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className="flex justify-between border-b border-gray-300 last:border-b-0 cursor-pointer hover:bg-gray-100"
          onClick={() => window.open(row.link, "_blank")}
        >
          {visibleColumns.map((key, colIndex) => (
            <div
              key={colIndex}
              className={`p-2 flex-1 flex items-center ${
                colIndex < visibleColumns.length - 1
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
