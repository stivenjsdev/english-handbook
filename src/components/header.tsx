import { SidebarTrigger } from "./ui/sidebar";

export default function Header() {
  return (
    <header className="h-16 flex items-center justify-between gap-2 px-4 lg:px-8 border-b bg-background">
      <SidebarTrigger />
      <div className="text-lg font-bold">ENGLISH HANDBOOK</div>
    </header>
  );
}
