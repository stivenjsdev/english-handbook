import { SidebarTrigger } from "./ui/sidebar";

export default function Header() {
  return (
    <header className="h-16 flex items-center justify-between gap-2 px-4 lg:px-8 border-b bg-background fixed top-0 left-0 w-full z-50">
      <SidebarTrigger />
      <div className="text-lg font-bold">ENGLISH HANDBOOK</div>
    </header>
  );
}
