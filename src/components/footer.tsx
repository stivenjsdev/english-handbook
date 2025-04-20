"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { items } from "./app-sidebar-config";

export function Footer() {
  const pathname = usePathname();
  const currentBook = pathname.includes("/book1")
    ? "book1"
    : pathname.includes("/book2")
    ? "book2"
    : null;
  const allLinks = currentBook ? items[currentBook] : [];
  const currentIndex = allLinks.findIndex((item) => item.url === pathname);
  const previous = currentIndex > 0 ? allLinks[currentIndex - 1] : null;
  const next =
    currentIndex < allLinks.length - 1 ? allLinks[currentIndex + 1] : null;

  return (
    <footer className="h-16 mt-8 flex items-center justify-between px-4 lg:px-8 border-t bg-background">
      {previous ? (
        <Link href={previous.url} className="text-gray-700 hover:underline">
          <span className="flex items-center gap-1">
            <ChevronLeft />
            <span className="text-sm lg:text-base">{previous.title}</span>
          </span>
        </Link>
      ) : (
        <div /> // Espaciador vacío para mantener la alineación
      )}
      {next ? (
        <Link href={next.url} className="text-gray-700 hover:underline">
          <span className="flex items-center gap-1">
            <span className="text-sm lg:text-base">{next.title}</span>
            <ChevronRight />
          </span>
        </Link>
      ) : (
        <div /> // Espaciador vacío para mantener la alineación
      )}
    </footer>
  );
}
