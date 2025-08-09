import { DynamicTableWithLinks } from "@/components/dynamic-table-with-links";
import { Title1 } from "@/components/title1";
import { tableData, tableTitle } from "./tableData";

export default function TimeAdverbsPage() {
  return (
    <section className="flex flex-col gap-4">
      <Title1>{tableTitle}</Title1>
      <DynamicTableWithLinks rows={tableData} />
    </section>
  );
}
