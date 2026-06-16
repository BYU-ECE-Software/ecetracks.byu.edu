import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { supertrackItems } from "@/data/tracks";

interface PageProps {
  params: Promise<{ slug: string; item: string }>;
}

export function generateStaticParams() {
  return Object.entries(supertrackItems).flatMap(([slug, supertrack]) =>
    supertrack.items.map((item) => ({ slug, item: item.slug }))
  );
}

export default async function ItemPage({ params }: PageProps) {
  const { slug, item: itemSlug } = await params;
  const supertrack = supertrackItems[slug];
  const item = supertrack?.items.find((i) => i.slug === itemSlug);

  if (!supertrack || !item) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href={`/${slug}`}
        className="mb-6 inline-block text-sm text-blue-600 hover:underline"
      >
        ← Back to {supertrack.title}
      </Link>
      {item.image && (
        <div className="relative mb-6 h-64 w-full overflow-hidden rounded-xl">
          <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
        </div>
      )}
      <h1 className="mb-2 text-3xl font-bold text-gray-900">{item.title}</h1>
      <p className="text-gray-600">{item.description}</p>
    </main>
  );
}