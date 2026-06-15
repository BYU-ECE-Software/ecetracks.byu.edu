import CardGrid from "@/components/CardGrid";
import { supertracks } from "@/data/tracks";
import PageTitle from "@/components/layout/PageTitle";

export default function HomePage() {
  return (
    <div>
      <PageTitle title="Tracks" />
      <main className="mx-auto max-w-6xl px-6 py-12">
        <CardGrid items={supertracks} basePath="" />
      </main>
    </div>
  );
}