export function Title1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-xl lg:text-3xl font-bold text-center text-gray-800">
      {children}
    </h1>
  );
}
