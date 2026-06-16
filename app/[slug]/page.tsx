import { notFound } from "next/navigation";
import Link from "next/link";
import CardGrid from "@/components/CardGrid";
import { supertrackItems } from "@/data/tracks";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return Object.keys(supertrackItems).map((slug) => ({ slug }));
}

export default async function SupertrackPage({ params }: PageProps) {
  const { slug } = await params;
  const supertrack = supertrackItems[slug];

  if (!supertrack) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <Link href="/" className="mb-6 inline-block text-sm text-blue-600 hover:underline">
        ← Back to tracks
      </Link>
      <h1 className="mb-2 text-3xl font-bold text-gray-900">{supertrack.title}</h1>
      <p className="mb-8 text-gray-600">{supertrack.description}</p>
      <CardGrid items={supertrack.items} basePath={`/${slug}`} />
    </main>
  );
}