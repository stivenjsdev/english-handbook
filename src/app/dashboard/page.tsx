import { Title1 } from "@/components/title1";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <section className="flex flex-col gap-4">
      <Title1>English Handbook</Title1>
      <p>Welcome to English Handbook App!</p>
      <p>
        Please select one of the topics from the sidebar to get started, or tap
        the following link to begin from the start:
      </p>
      <Link href="/dashboard/book1/direct-components">
        <span className="flex items-center gap-1">
          <LinkIcon size="16" className="text-gray-600" />
          <span className="text-gray-600">Direct Components</span>
        </span>
      </Link>
    </section>
  );
}
