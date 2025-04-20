import clsx from "clsx";

export function Bold({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={clsx("font-bold", className)}>{children}</span>;
}
