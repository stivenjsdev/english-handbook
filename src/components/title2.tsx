import clsx from "clsx";

export function Title2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={clsx("text-lg lg:text-2xl font-bold", className)}>
      {children}
    </h2>
  );
}
